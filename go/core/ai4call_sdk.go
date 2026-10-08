package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/ai4call-sdk/go/utility/struct"
)

type Ai4callSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewAi4callSDK(options map[string]any) *Ai4callSDK {
	sdk := &Ai4callSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *Ai4callSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *Ai4callSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *Ai4callSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *Ai4callSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *Ai4callSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *Ai4callSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *Ai4callSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("Ai4callSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *Ai4callSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

func (sdk *Ai4callSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("Ai4callSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// AccountAllowedIpsSuccess returns a AccountAllowedIpsSuccess entity bound to this client.
// Idiomatic usage: client.AccountAllowedIpsSuccess(nil).List(nil, nil) or
// client.AccountAllowedIpsSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AccountAllowedIpsSuccess(data map[string]any) Ai4callEntity {
	return NewAccountAllowedIpsSuccessEntityFunc(sdk, data)
}


// AccountAvailablePluginsSuccess returns a AccountAvailablePluginsSuccess entity bound to this client.
// Idiomatic usage: client.AccountAvailablePluginsSuccess(nil).List(nil, nil) or
// client.AccountAvailablePluginsSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AccountAvailablePluginsSuccess(data map[string]any) Ai4callEntity {
	return NewAccountAvailablePluginsSuccessEntityFunc(sdk, data)
}


// AccountCallLimitsSuccess returns a AccountCallLimitsSuccess entity bound to this client.
// Idiomatic usage: client.AccountCallLimitsSuccess(nil).List(nil, nil) or
// client.AccountCallLimitsSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AccountCallLimitsSuccess(data map[string]any) Ai4callEntity {
	return NewAccountCallLimitsSuccessEntityFunc(sdk, data)
}


// AccountNumberRoutingSuccess returns a AccountNumberRoutingSuccess entity bound to this client.
// Idiomatic usage: client.AccountNumberRoutingSuccess(nil).List(nil, nil) or
// client.AccountNumberRoutingSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AccountNumberRoutingSuccess(data map[string]any) Ai4callEntity {
	return NewAccountNumberRoutingSuccessEntityFunc(sdk, data)
}


// AccountPluginConfigurationSuccess returns a AccountPluginConfigurationSuccess entity bound to this client.
// Idiomatic usage: client.AccountPluginConfigurationSuccess(nil).List(nil, nil) or
// client.AccountPluginConfigurationSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AccountPluginConfigurationSuccess(data map[string]any) Ai4callEntity {
	return NewAccountPluginConfigurationSuccessEntityFunc(sdk, data)
}


// AccountPluginInstanceSuccess returns a AccountPluginInstanceSuccess entity bound to this client.
// Idiomatic usage: client.AccountPluginInstanceSuccess(nil).List(nil, nil) or
// client.AccountPluginInstanceSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AccountPluginInstanceSuccess(data map[string]any) Ai4callEntity {
	return NewAccountPluginInstanceSuccessEntityFunc(sdk, data)
}


// AccountPluginPurchaseSuccess returns a AccountPluginPurchaseSuccess entity bound to this client.
// Idiomatic usage: client.AccountPluginPurchaseSuccess(nil).List(nil, nil) or
// client.AccountPluginPurchaseSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AccountPluginPurchaseSuccess(data map[string]any) Ai4callEntity {
	return NewAccountPluginPurchaseSuccessEntityFunc(sdk, data)
}


// AnalyticsCallsOutboundSuccess returns a AnalyticsCallsOutboundSuccess entity bound to this client.
// Idiomatic usage: client.AnalyticsCallsOutboundSuccess(nil).List(nil, nil) or
// client.AnalyticsCallsOutboundSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AnalyticsCallsOutboundSuccess(data map[string]any) Ai4callEntity {
	return NewAnalyticsCallsOutboundSuccessEntityFunc(sdk, data)
}


// AnalyticsCallsSuccess returns a AnalyticsCallsSuccess entity bound to this client.
// Idiomatic usage: client.AnalyticsCallsSuccess(nil).List(nil, nil) or
// client.AnalyticsCallsSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AnalyticsCallsSuccess(data map[string]any) Ai4callEntity {
	return NewAnalyticsCallsSuccessEntityFunc(sdk, data)
}


// AnalyticsPostCallSuccess returns a AnalyticsPostCallSuccess entity bound to this client.
// Idiomatic usage: client.AnalyticsPostCallSuccess(nil).List(nil, nil) or
// client.AnalyticsPostCallSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AnalyticsPostCallSuccess(data map[string]any) Ai4callEntity {
	return NewAnalyticsPostCallSuccessEntityFunc(sdk, data)
}


// AnalyticsPreCallSuccess returns a AnalyticsPreCallSuccess entity bound to this client.
// Idiomatic usage: client.AnalyticsPreCallSuccess(nil).List(nil, nil) or
// client.AnalyticsPreCallSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AnalyticsPreCallSuccess(data map[string]any) Ai4callEntity {
	return NewAnalyticsPreCallSuccessEntityFunc(sdk, data)
}


// AnalyticsRagSearchSuccess returns a AnalyticsRagSearchSuccess entity bound to this client.
// Idiomatic usage: client.AnalyticsRagSearchSuccess(nil).List(nil, nil) or
// client.AnalyticsRagSearchSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AnalyticsRagSearchSuccess(data map[string]any) Ai4callEntity {
	return NewAnalyticsRagSearchSuccessEntityFunc(sdk, data)
}


// AnalyticsRagSuccess returns a AnalyticsRagSuccess entity bound to this client.
// Idiomatic usage: client.AnalyticsRagSuccess(nil).List(nil, nil) or
// client.AnalyticsRagSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AnalyticsRagSuccess(data map[string]any) Ai4callEntity {
	return NewAnalyticsRagSuccessEntityFunc(sdk, data)
}


// AnalyticsRechargesSuccess returns a AnalyticsRechargesSuccess entity bound to this client.
// Idiomatic usage: client.AnalyticsRechargesSuccess(nil).List(nil, nil) or
// client.AnalyticsRechargesSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AnalyticsRechargesSuccess(data map[string]any) Ai4callEntity {
	return NewAnalyticsRechargesSuccessEntityFunc(sdk, data)
}


// AnalyticsSmsSuccess returns a AnalyticsSmsSuccess entity bound to this client.
// Idiomatic usage: client.AnalyticsSmsSuccess(nil).List(nil, nil) or
// client.AnalyticsSmsSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AnalyticsSmsSuccess(data map[string]any) Ai4callEntity {
	return NewAnalyticsSmsSuccessEntityFunc(sdk, data)
}


// AnalyticsToolResponsesSuccess returns a AnalyticsToolResponsesSuccess entity bound to this client.
// Idiomatic usage: client.AnalyticsToolResponsesSuccess(nil).List(nil, nil) or
// client.AnalyticsToolResponsesSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AnalyticsToolResponsesSuccess(data map[string]any) Ai4callEntity {
	return NewAnalyticsToolResponsesSuccessEntityFunc(sdk, data)
}


// Asr returns a Asr entity bound to this client.
// Idiomatic usage: client.Asr(nil).List(nil, nil) or
// client.Asr(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) Asr(data map[string]any) Ai4callEntity {
	return NewAsrEntityFunc(sdk, data)
}


// AsrModelListSuccess returns a AsrModelListSuccess entity bound to this client.
// Idiomatic usage: client.AsrModelListSuccess(nil).List(nil, nil) or
// client.AsrModelListSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AsrModelListSuccess(data map[string]any) Ai4callEntity {
	return NewAsrModelListSuccessEntityFunc(sdk, data)
}


// Assistant returns a Assistant entity bound to this client.
// Idiomatic usage: client.Assistant(nil).List(nil, nil) or
// client.Assistant(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) Assistant(data map[string]any) Ai4callEntity {
	return NewAssistantEntityFunc(sdk, data)
}


// AssistantAdvancedSettingsConfigurationSuccess returns a AssistantAdvancedSettingsConfigurationSuccess entity bound to this client.
// Idiomatic usage: client.AssistantAdvancedSettingsConfigurationSuccess(nil).List(nil, nil) or
// client.AssistantAdvancedSettingsConfigurationSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AssistantAdvancedSettingsConfigurationSuccess(data map[string]any) Ai4callEntity {
	return NewAssistantAdvancedSettingsConfigurationSuccessEntityFunc(sdk, data)
}


// AssistantAdvancedSettingsRuntimeUpdateSuccess returns a AssistantAdvancedSettingsRuntimeUpdateSuccess entity bound to this client.
// Idiomatic usage: client.AssistantAdvancedSettingsRuntimeUpdateSuccess(nil).List(nil, nil) or
// client.AssistantAdvancedSettingsRuntimeUpdateSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AssistantAdvancedSettingsRuntimeUpdateSuccess(data map[string]any) Ai4callEntity {
	return NewAssistantAdvancedSettingsRuntimeUpdateSuccessEntityFunc(sdk, data)
}


// AssistantAsrRuntimeUpdateSuccess returns a AssistantAsrRuntimeUpdateSuccess entity bound to this client.
// Idiomatic usage: client.AssistantAsrRuntimeUpdateSuccess(nil).List(nil, nil) or
// client.AssistantAsrRuntimeUpdateSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AssistantAsrRuntimeUpdateSuccess(data map[string]any) Ai4callEntity {
	return NewAssistantAsrRuntimeUpdateSuccessEntityFunc(sdk, data)
}


// AssistantConversationWebhookRuntimeSuccess returns a AssistantConversationWebhookRuntimeSuccess entity bound to this client.
// Idiomatic usage: client.AssistantConversationWebhookRuntimeSuccess(nil).List(nil, nil) or
// client.AssistantConversationWebhookRuntimeSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AssistantConversationWebhookRuntimeSuccess(data map[string]any) Ai4callEntity {
	return NewAssistantConversationWebhookRuntimeSuccessEntityFunc(sdk, data)
}


// AssistantDtmfConfigurationSuccess returns a AssistantDtmfConfigurationSuccess entity bound to this client.
// Idiomatic usage: client.AssistantDtmfConfigurationSuccess(nil).List(nil, nil) or
// client.AssistantDtmfConfigurationSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AssistantDtmfConfigurationSuccess(data map[string]any) Ai4callEntity {
	return NewAssistantDtmfConfigurationSuccessEntityFunc(sdk, data)
}


// AssistantDtmfRuntimeUpdateSuccess returns a AssistantDtmfRuntimeUpdateSuccess entity bound to this client.
// Idiomatic usage: client.AssistantDtmfRuntimeUpdateSuccess(nil).List(nil, nil) or
// client.AssistantDtmfRuntimeUpdateSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AssistantDtmfRuntimeUpdateSuccess(data map[string]any) Ai4callEntity {
	return NewAssistantDtmfRuntimeUpdateSuccessEntityFunc(sdk, data)
}


// AssistantHangupConfigurationSuccess returns a AssistantHangupConfigurationSuccess entity bound to this client.
// Idiomatic usage: client.AssistantHangupConfigurationSuccess(nil).List(nil, nil) or
// client.AssistantHangupConfigurationSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AssistantHangupConfigurationSuccess(data map[string]any) Ai4callEntity {
	return NewAssistantHangupConfigurationSuccessEntityFunc(sdk, data)
}


// AssistantHangupRuntimeUpdateSuccess returns a AssistantHangupRuntimeUpdateSuccess entity bound to this client.
// Idiomatic usage: client.AssistantHangupRuntimeUpdateSuccess(nil).List(nil, nil) or
// client.AssistantHangupRuntimeUpdateSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AssistantHangupRuntimeUpdateSuccess(data map[string]any) Ai4callEntity {
	return NewAssistantHangupRuntimeUpdateSuccessEntityFunc(sdk, data)
}


// AssistantHangupSchemaRuntimeSuccess returns a AssistantHangupSchemaRuntimeSuccess entity bound to this client.
// Idiomatic usage: client.AssistantHangupSchemaRuntimeSuccess(nil).List(nil, nil) or
// client.AssistantHangupSchemaRuntimeSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AssistantHangupSchemaRuntimeSuccess(data map[string]any) Ai4callEntity {
	return NewAssistantHangupSchemaRuntimeSuccessEntityFunc(sdk, data)
}


// AssistantKnowledgeSuccess returns a AssistantKnowledgeSuccess entity bound to this client.
// Idiomatic usage: client.AssistantKnowledgeSuccess(nil).List(nil, nil) or
// client.AssistantKnowledgeSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AssistantKnowledgeSuccess(data map[string]any) Ai4callEntity {
	return NewAssistantKnowledgeSuccessEntityFunc(sdk, data)
}


// AssistantLlmRuntimeUpdateSuccess returns a AssistantLlmRuntimeUpdateSuccess entity bound to this client.
// Idiomatic usage: client.AssistantLlmRuntimeUpdateSuccess(nil).List(nil, nil) or
// client.AssistantLlmRuntimeUpdateSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AssistantLlmRuntimeUpdateSuccess(data map[string]any) Ai4callEntity {
	return NewAssistantLlmRuntimeUpdateSuccessEntityFunc(sdk, data)
}


// AssistantNumberRoutingCatalogSuccess returns a AssistantNumberRoutingCatalogSuccess entity bound to this client.
// Idiomatic usage: client.AssistantNumberRoutingCatalogSuccess(nil).List(nil, nil) or
// client.AssistantNumberRoutingCatalogSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AssistantNumberRoutingCatalogSuccess(data map[string]any) Ai4callEntity {
	return NewAssistantNumberRoutingCatalogSuccessEntityFunc(sdk, data)
}


// AssistantNumberRoutingRuntimeSuccess returns a AssistantNumberRoutingRuntimeSuccess entity bound to this client.
// Idiomatic usage: client.AssistantNumberRoutingRuntimeSuccess(nil).List(nil, nil) or
// client.AssistantNumberRoutingRuntimeSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AssistantNumberRoutingRuntimeSuccess(data map[string]any) Ai4callEntity {
	return NewAssistantNumberRoutingRuntimeSuccessEntityFunc(sdk, data)
}


// AssistantPostcallMcpRuntimeSuccess returns a AssistantPostcallMcpRuntimeSuccess entity bound to this client.
// Idiomatic usage: client.AssistantPostcallMcpRuntimeSuccess(nil).List(nil, nil) or
// client.AssistantPostcallMcpRuntimeSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AssistantPostcallMcpRuntimeSuccess(data map[string]any) Ai4callEntity {
	return NewAssistantPostcallMcpRuntimeSuccessEntityFunc(sdk, data)
}


// AssistantPrecallMcpRuntimeSuccess returns a AssistantPrecallMcpRuntimeSuccess entity bound to this client.
// Idiomatic usage: client.AssistantPrecallMcpRuntimeSuccess(nil).List(nil, nil) or
// client.AssistantPrecallMcpRuntimeSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AssistantPrecallMcpRuntimeSuccess(data map[string]any) Ai4callEntity {
	return NewAssistantPrecallMcpRuntimeSuccessEntityFunc(sdk, data)
}


// AssistantPrecallValidationRuntimeSuccess returns a AssistantPrecallValidationRuntimeSuccess entity bound to this client.
// Idiomatic usage: client.AssistantPrecallValidationRuntimeSuccess(nil).List(nil, nil) or
// client.AssistantPrecallValidationRuntimeSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AssistantPrecallValidationRuntimeSuccess(data map[string]any) Ai4callEntity {
	return NewAssistantPrecallValidationRuntimeSuccessEntityFunc(sdk, data)
}


// AssistantPromptSuccess returns a AssistantPromptSuccess entity bound to this client.
// Idiomatic usage: client.AssistantPromptSuccess(nil).List(nil, nil) or
// client.AssistantPromptSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AssistantPromptSuccess(data map[string]any) Ai4callEntity {
	return NewAssistantPromptSuccessEntityFunc(sdk, data)
}


// AssistantRagConfigurationSuccess returns a AssistantRagConfigurationSuccess entity bound to this client.
// Idiomatic usage: client.AssistantRagConfigurationSuccess(nil).List(nil, nil) or
// client.AssistantRagConfigurationSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AssistantRagConfigurationSuccess(data map[string]any) Ai4callEntity {
	return NewAssistantRagConfigurationSuccessEntityFunc(sdk, data)
}


// AssistantRagRuntimeUpdateSuccess returns a AssistantRagRuntimeUpdateSuccess entity bound to this client.
// Idiomatic usage: client.AssistantRagRuntimeUpdateSuccess(nil).List(nil, nil) or
// client.AssistantRagRuntimeUpdateSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AssistantRagRuntimeUpdateSuccess(data map[string]any) Ai4callEntity {
	return NewAssistantRagRuntimeUpdateSuccessEntityFunc(sdk, data)
}


// AssistantSaveConversationRuntimeSuccess returns a AssistantSaveConversationRuntimeSuccess entity bound to this client.
// Idiomatic usage: client.AssistantSaveConversationRuntimeSuccess(nil).List(nil, nil) or
// client.AssistantSaveConversationRuntimeSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AssistantSaveConversationRuntimeSuccess(data map[string]any) Ai4callEntity {
	return NewAssistantSaveConversationRuntimeSuccessEntityFunc(sdk, data)
}


// AssistantSettingsConfigurationSuccess returns a AssistantSettingsConfigurationSuccess entity bound to this client.
// Idiomatic usage: client.AssistantSettingsConfigurationSuccess(nil).List(nil, nil) or
// client.AssistantSettingsConfigurationSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AssistantSettingsConfigurationSuccess(data map[string]any) Ai4callEntity {
	return NewAssistantSettingsConfigurationSuccessEntityFunc(sdk, data)
}


// AssistantSettingsRuntimeUpdateSuccess returns a AssistantSettingsRuntimeUpdateSuccess entity bound to this client.
// Idiomatic usage: client.AssistantSettingsRuntimeUpdateSuccess(nil).List(nil, nil) or
// client.AssistantSettingsRuntimeUpdateSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AssistantSettingsRuntimeUpdateSuccess(data map[string]any) Ai4callEntity {
	return NewAssistantSettingsRuntimeUpdateSuccessEntityFunc(sdk, data)
}


// AssistantToolsRuntimeUpdateSuccess returns a AssistantToolsRuntimeUpdateSuccess entity bound to this client.
// Idiomatic usage: client.AssistantToolsRuntimeUpdateSuccess(nil).List(nil, nil) or
// client.AssistantToolsRuntimeUpdateSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AssistantToolsRuntimeUpdateSuccess(data map[string]any) Ai4callEntity {
	return NewAssistantToolsRuntimeUpdateSuccessEntityFunc(sdk, data)
}


// AssistantTtsRuntimeUpdateSuccess returns a AssistantTtsRuntimeUpdateSuccess entity bound to this client.
// Idiomatic usage: client.AssistantTtsRuntimeUpdateSuccess(nil).List(nil, nil) or
// client.AssistantTtsRuntimeUpdateSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AssistantTtsRuntimeUpdateSuccess(data map[string]any) Ai4callEntity {
	return NewAssistantTtsRuntimeUpdateSuccessEntityFunc(sdk, data)
}


// AssistantVoiceToVoiceRuntimeUpdateSuccess returns a AssistantVoiceToVoiceRuntimeUpdateSuccess entity bound to this client.
// Idiomatic usage: client.AssistantVoiceToVoiceRuntimeUpdateSuccess(nil).List(nil, nil) or
// client.AssistantVoiceToVoiceRuntimeUpdateSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AssistantVoiceToVoiceRuntimeUpdateSuccess(data map[string]any) Ai4callEntity {
	return NewAssistantVoiceToVoiceRuntimeUpdateSuccessEntityFunc(sdk, data)
}


// AssociatedRuntimeToolListSuccess returns a AssociatedRuntimeToolListSuccess entity bound to this client.
// Idiomatic usage: client.AssociatedRuntimeToolListSuccess(nil).List(nil, nil) or
// client.AssociatedRuntimeToolListSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AssociatedRuntimeToolListSuccess(data map[string]any) Ai4callEntity {
	return NewAssociatedRuntimeToolListSuccessEntityFunc(sdk, data)
}


// AudioToAudio returns a AudioToAudio entity bound to this client.
// Idiomatic usage: client.AudioToAudio(nil).List(nil, nil) or
// client.AudioToAudio(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AudioToAudio(data map[string]any) Ai4callEntity {
	return NewAudioToAudioEntityFunc(sdk, data)
}


// AvailableRuntimeToolListSuccess returns a AvailableRuntimeToolListSuccess entity bound to this client.
// Idiomatic usage: client.AvailableRuntimeToolListSuccess(nil).List(nil, nil) or
// client.AvailableRuntimeToolListSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) AvailableRuntimeToolListSuccess(data map[string]any) Ai4callEntity {
	return NewAvailableRuntimeToolListSuccessEntityFunc(sdk, data)
}


// FillerPhraseList returns a FillerPhraseList entity bound to this client.
// Idiomatic usage: client.FillerPhraseList(nil).List(nil, nil) or
// client.FillerPhraseList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) FillerPhraseList(data map[string]any) Ai4callEntity {
	return NewFillerPhraseListEntityFunc(sdk, data)
}


// Health returns a Health entity bound to this client.
// Idiomatic usage: client.Health(nil).List(nil, nil) or
// client.Health(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) Health(data map[string]any) Ai4callEntity {
	return NewHealthEntityFunc(sdk, data)
}


// Knowledge returns a Knowledge entity bound to this client.
// Idiomatic usage: client.Knowledge(nil).List(nil, nil) or
// client.Knowledge(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) Knowledge(data map[string]any) Ai4callEntity {
	return NewKnowledgeEntityFunc(sdk, data)
}


// Llm returns a Llm entity bound to this client.
// Idiomatic usage: client.Llm(nil).List(nil, nil) or
// client.Llm(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) Llm(data map[string]any) Ai4callEntity {
	return NewLlmEntityFunc(sdk, data)
}


// LlmModelListSuccess returns a LlmModelListSuccess entity bound to this client.
// Idiomatic usage: client.LlmModelListSuccess(nil).List(nil, nil) or
// client.LlmModelListSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) LlmModelListSuccess(data map[string]any) Ai4callEntity {
	return NewLlmModelListSuccessEntityFunc(sdk, data)
}


// OutboundCall returns a OutboundCall entity bound to this client.
// Idiomatic usage: client.OutboundCall(nil).List(nil, nil) or
// client.OutboundCall(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) OutboundCall(data map[string]any) Ai4callEntity {
	return NewOutboundCallEntityFunc(sdk, data)
}


// OutboundCallAcceptedSuccess returns a OutboundCallAcceptedSuccess entity bound to this client.
// Idiomatic usage: client.OutboundCallAcceptedSuccess(nil).List(nil, nil) or
// client.OutboundCallAcceptedSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) OutboundCallAcceptedSuccess(data map[string]any) Ai4callEntity {
	return NewOutboundCallAcceptedSuccessEntityFunc(sdk, data)
}


// OutboundDialStatusPayload returns a OutboundDialStatusPayload entity bound to this client.
// Idiomatic usage: client.OutboundDialStatusPayload(nil).List(nil, nil) or
// client.OutboundDialStatusPayload(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) OutboundDialStatusPayload(data map[string]any) Ai4callEntity {
	return NewOutboundDialStatusPayloadEntityFunc(sdk, data)
}


// PortalLoginSuccess returns a PortalLoginSuccess entity bound to this client.
// Idiomatic usage: client.PortalLoginSuccess(nil).List(nil, nil) or
// client.PortalLoginSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) PortalLoginSuccess(data map[string]any) Ai4callEntity {
	return NewPortalLoginSuccessEntityFunc(sdk, data)
}


// PreCall returns a PreCall entity bound to this client.
// Idiomatic usage: client.PreCall(nil).List(nil, nil) or
// client.PreCall(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) PreCall(data map[string]any) Ai4callEntity {
	return NewPreCallEntityFunc(sdk, data)
}


// ProviderWallet returns a ProviderWallet entity bound to this client.
// Idiomatic usage: client.ProviderWallet(nil).List(nil, nil) or
// client.ProviderWallet(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) ProviderWallet(data map[string]any) Ai4callEntity {
	return NewProviderWalletEntityFunc(sdk, data)
}


// ProviderWalletAssociationsSuccess returns a ProviderWalletAssociationsSuccess entity bound to this client.
// Idiomatic usage: client.ProviderWalletAssociationsSuccess(nil).List(nil, nil) or
// client.ProviderWalletAssociationsSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) ProviderWalletAssociationsSuccess(data map[string]any) Ai4callEntity {
	return NewProviderWalletAssociationsSuccessEntityFunc(sdk, data)
}


// ProviderWalletCatalogSuccess returns a ProviderWalletCatalogSuccess entity bound to this client.
// Idiomatic usage: client.ProviderWalletCatalogSuccess(nil).List(nil, nil) or
// client.ProviderWalletCatalogSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) ProviderWalletCatalogSuccess(data map[string]any) Ai4callEntity {
	return NewProviderWalletCatalogSuccessEntityFunc(sdk, data)
}


// PublicRagSearchSuccess returns a PublicRagSearchSuccess entity bound to this client.
// Idiomatic usage: client.PublicRagSearchSuccess(nil).List(nil, nil) or
// client.PublicRagSearchSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) PublicRagSearchSuccess(data map[string]any) Ai4callEntity {
	return NewPublicRagSearchSuccessEntityFunc(sdk, data)
}


// RagCollectionDeleteSuccess returns a RagCollectionDeleteSuccess entity bound to this client.
// Idiomatic usage: client.RagCollectionDeleteSuccess(nil).List(nil, nil) or
// client.RagCollectionDeleteSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) RagCollectionDeleteSuccess(data map[string]any) Ai4callEntity {
	return NewRagCollectionDeleteSuccessEntityFunc(sdk, data)
}


// RagCollectionDocumentDeleteSuccess returns a RagCollectionDocumentDeleteSuccess entity bound to this client.
// Idiomatic usage: client.RagCollectionDocumentDeleteSuccess(nil).List(nil, nil) or
// client.RagCollectionDocumentDeleteSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) RagCollectionDocumentDeleteSuccess(data map[string]any) Ai4callEntity {
	return NewRagCollectionDocumentDeleteSuccessEntityFunc(sdk, data)
}


// RagCollectionDocumentListSuccess returns a RagCollectionDocumentListSuccess entity bound to this client.
// Idiomatic usage: client.RagCollectionDocumentListSuccess(nil).List(nil, nil) or
// client.RagCollectionDocumentListSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) RagCollectionDocumentListSuccess(data map[string]any) Ai4callEntity {
	return NewRagCollectionDocumentListSuccessEntityFunc(sdk, data)
}


// RagCollectionDocumentTokenEstimateSuccess returns a RagCollectionDocumentTokenEstimateSuccess entity bound to this client.
// Idiomatic usage: client.RagCollectionDocumentTokenEstimateSuccess(nil).List(nil, nil) or
// client.RagCollectionDocumentTokenEstimateSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) RagCollectionDocumentTokenEstimateSuccess(data map[string]any) Ai4callEntity {
	return NewRagCollectionDocumentTokenEstimateSuccessEntityFunc(sdk, data)
}


// RagCollectionDocumentUploadStatusSuccess returns a RagCollectionDocumentUploadStatusSuccess entity bound to this client.
// Idiomatic usage: client.RagCollectionDocumentUploadStatusSuccess(nil).List(nil, nil) or
// client.RagCollectionDocumentUploadStatusSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) RagCollectionDocumentUploadStatusSuccess(data map[string]any) Ai4callEntity {
	return NewRagCollectionDocumentUploadStatusSuccessEntityFunc(sdk, data)
}


// RagCollectionDocumentUploadSuccess returns a RagCollectionDocumentUploadSuccess entity bound to this client.
// Idiomatic usage: client.RagCollectionDocumentUploadSuccess(nil).List(nil, nil) or
// client.RagCollectionDocumentUploadSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) RagCollectionDocumentUploadSuccess(data map[string]any) Ai4callEntity {
	return NewRagCollectionDocumentUploadSuccessEntityFunc(sdk, data)
}


// RuntimeBinding returns a RuntimeBinding entity bound to this client.
// Idiomatic usage: client.RuntimeBinding(nil).List(nil, nil) or
// client.RuntimeBinding(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) RuntimeBinding(data map[string]any) Ai4callEntity {
	return NewRuntimeBindingEntityFunc(sdk, data)
}


// Tts returns a Tts entity bound to this client.
// Idiomatic usage: client.Tts(nil).List(nil, nil) or
// client.Tts(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) Tts(data map[string]any) Ai4callEntity {
	return NewTtsEntityFunc(sdk, data)
}


// TtsVoiceListSuccess returns a TtsVoiceListSuccess entity bound to this client.
// Idiomatic usage: client.TtsVoiceListSuccess(nil).List(nil, nil) or
// client.TtsVoiceListSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) TtsVoiceListSuccess(data map[string]any) Ai4callEntity {
	return NewTtsVoiceListSuccessEntityFunc(sdk, data)
}


// Voice returns a Voice entity bound to this client.
// Idiomatic usage: client.Voice(nil).List(nil, nil) or
// client.Voice(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) Voice(data map[string]any) Ai4callEntity {
	return NewVoiceEntityFunc(sdk, data)
}


// VoiceLlm returns a VoiceLlm entity bound to this client.
// Idiomatic usage: client.VoiceLlm(nil).List(nil, nil) or
// client.VoiceLlm(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) VoiceLlm(data map[string]any) Ai4callEntity {
	return NewVoiceLlmEntityFunc(sdk, data)
}


// VoiceLlmModelListSuccess returns a VoiceLlmModelListSuccess entity bound to this client.
// Idiomatic usage: client.VoiceLlmModelListSuccess(nil).List(nil, nil) or
// client.VoiceLlmModelListSuccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *Ai4callSDK) VoiceLlmModelListSuccess(data map[string]any) Ai4callEntity {
	return NewVoiceLlmModelListSuccessEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *Ai4callSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewAi4callSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
