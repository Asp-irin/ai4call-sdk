"use strict";
// Ai4call Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.Ai4callSDK = exports.Ai4callEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const AccountAllowedIpsSuccessEntity_1 = require("./entity/AccountAllowedIpsSuccessEntity");
const AccountAvailablePluginsSuccessEntity_1 = require("./entity/AccountAvailablePluginsSuccessEntity");
const AccountCallLimitsSuccessEntity_1 = require("./entity/AccountCallLimitsSuccessEntity");
const AccountNumberRoutingSuccessEntity_1 = require("./entity/AccountNumberRoutingSuccessEntity");
const AccountPluginConfigurationSuccessEntity_1 = require("./entity/AccountPluginConfigurationSuccessEntity");
const AccountPluginInstanceSuccessEntity_1 = require("./entity/AccountPluginInstanceSuccessEntity");
const AccountPluginPurchaseSuccessEntity_1 = require("./entity/AccountPluginPurchaseSuccessEntity");
const AnalyticsCallsOutboundSuccessEntity_1 = require("./entity/AnalyticsCallsOutboundSuccessEntity");
const AnalyticsCallsSuccessEntity_1 = require("./entity/AnalyticsCallsSuccessEntity");
const AnalyticsPostCallSuccessEntity_1 = require("./entity/AnalyticsPostCallSuccessEntity");
const AnalyticsPreCallSuccessEntity_1 = require("./entity/AnalyticsPreCallSuccessEntity");
const AnalyticsRagSearchSuccessEntity_1 = require("./entity/AnalyticsRagSearchSuccessEntity");
const AnalyticsRagSuccessEntity_1 = require("./entity/AnalyticsRagSuccessEntity");
const AnalyticsRechargesSuccessEntity_1 = require("./entity/AnalyticsRechargesSuccessEntity");
const AnalyticsSmsSuccessEntity_1 = require("./entity/AnalyticsSmsSuccessEntity");
const AnalyticsToolResponsesSuccessEntity_1 = require("./entity/AnalyticsToolResponsesSuccessEntity");
const AsrEntity_1 = require("./entity/AsrEntity");
const AsrModelListSuccessEntity_1 = require("./entity/AsrModelListSuccessEntity");
const AssistantEntity_1 = require("./entity/AssistantEntity");
const AssistantAdvancedSettingsConfigurationSuccessEntity_1 = require("./entity/AssistantAdvancedSettingsConfigurationSuccessEntity");
const AssistantAdvancedSettingsRuntimeUpdateSuccessEntity_1 = require("./entity/AssistantAdvancedSettingsRuntimeUpdateSuccessEntity");
const AssistantAsrRuntimeUpdateSuccessEntity_1 = require("./entity/AssistantAsrRuntimeUpdateSuccessEntity");
const AssistantConversationWebhookRuntimeSuccessEntity_1 = require("./entity/AssistantConversationWebhookRuntimeSuccessEntity");
const AssistantDtmfConfigurationSuccessEntity_1 = require("./entity/AssistantDtmfConfigurationSuccessEntity");
const AssistantDtmfRuntimeUpdateSuccessEntity_1 = require("./entity/AssistantDtmfRuntimeUpdateSuccessEntity");
const AssistantHangupConfigurationSuccessEntity_1 = require("./entity/AssistantHangupConfigurationSuccessEntity");
const AssistantHangupRuntimeUpdateSuccessEntity_1 = require("./entity/AssistantHangupRuntimeUpdateSuccessEntity");
const AssistantHangupSchemaRuntimeSuccessEntity_1 = require("./entity/AssistantHangupSchemaRuntimeSuccessEntity");
const AssistantKnowledgeSuccessEntity_1 = require("./entity/AssistantKnowledgeSuccessEntity");
const AssistantLlmRuntimeUpdateSuccessEntity_1 = require("./entity/AssistantLlmRuntimeUpdateSuccessEntity");
const AssistantNumberRoutingCatalogSuccessEntity_1 = require("./entity/AssistantNumberRoutingCatalogSuccessEntity");
const AssistantNumberRoutingRuntimeSuccessEntity_1 = require("./entity/AssistantNumberRoutingRuntimeSuccessEntity");
const AssistantPostcallMcpRuntimeSuccessEntity_1 = require("./entity/AssistantPostcallMcpRuntimeSuccessEntity");
const AssistantPrecallMcpRuntimeSuccessEntity_1 = require("./entity/AssistantPrecallMcpRuntimeSuccessEntity");
const AssistantPrecallValidationRuntimeSuccessEntity_1 = require("./entity/AssistantPrecallValidationRuntimeSuccessEntity");
const AssistantPromptSuccessEntity_1 = require("./entity/AssistantPromptSuccessEntity");
const AssistantRagConfigurationSuccessEntity_1 = require("./entity/AssistantRagConfigurationSuccessEntity");
const AssistantRagRuntimeUpdateSuccessEntity_1 = require("./entity/AssistantRagRuntimeUpdateSuccessEntity");
const AssistantSaveConversationRuntimeSuccessEntity_1 = require("./entity/AssistantSaveConversationRuntimeSuccessEntity");
const AssistantSettingsConfigurationSuccessEntity_1 = require("./entity/AssistantSettingsConfigurationSuccessEntity");
const AssistantSettingsRuntimeUpdateSuccessEntity_1 = require("./entity/AssistantSettingsRuntimeUpdateSuccessEntity");
const AssistantToolsRuntimeUpdateSuccessEntity_1 = require("./entity/AssistantToolsRuntimeUpdateSuccessEntity");
const AssistantTtsRuntimeUpdateSuccessEntity_1 = require("./entity/AssistantTtsRuntimeUpdateSuccessEntity");
const AssistantVoiceToVoiceRuntimeUpdateSuccessEntity_1 = require("./entity/AssistantVoiceToVoiceRuntimeUpdateSuccessEntity");
const AssociatedRuntimeToolListSuccessEntity_1 = require("./entity/AssociatedRuntimeToolListSuccessEntity");
const AudioToAudioEntity_1 = require("./entity/AudioToAudioEntity");
const AvailableRuntimeToolListSuccessEntity_1 = require("./entity/AvailableRuntimeToolListSuccessEntity");
const FillerPhraseListEntity_1 = require("./entity/FillerPhraseListEntity");
const HealthEntity_1 = require("./entity/HealthEntity");
const KnowledgeEntity_1 = require("./entity/KnowledgeEntity");
const LlmEntity_1 = require("./entity/LlmEntity");
const LlmModelListSuccessEntity_1 = require("./entity/LlmModelListSuccessEntity");
const OutboundCallEntity_1 = require("./entity/OutboundCallEntity");
const OutboundCallAcceptedSuccessEntity_1 = require("./entity/OutboundCallAcceptedSuccessEntity");
const OutboundDialStatusPayloadEntity_1 = require("./entity/OutboundDialStatusPayloadEntity");
const PortalLoginSuccessEntity_1 = require("./entity/PortalLoginSuccessEntity");
const PreCallEntity_1 = require("./entity/PreCallEntity");
const ProviderWalletEntity_1 = require("./entity/ProviderWalletEntity");
const ProviderWalletAssociationsSuccessEntity_1 = require("./entity/ProviderWalletAssociationsSuccessEntity");
const ProviderWalletCatalogSuccessEntity_1 = require("./entity/ProviderWalletCatalogSuccessEntity");
const PublicRagSearchSuccessEntity_1 = require("./entity/PublicRagSearchSuccessEntity");
const RagCollectionDeleteSuccessEntity_1 = require("./entity/RagCollectionDeleteSuccessEntity");
const RagCollectionDocumentDeleteSuccessEntity_1 = require("./entity/RagCollectionDocumentDeleteSuccessEntity");
const RagCollectionDocumentListSuccessEntity_1 = require("./entity/RagCollectionDocumentListSuccessEntity");
const RagCollectionDocumentTokenEstimateSuccessEntity_1 = require("./entity/RagCollectionDocumentTokenEstimateSuccessEntity");
const RagCollectionDocumentUploadStatusSuccessEntity_1 = require("./entity/RagCollectionDocumentUploadStatusSuccessEntity");
const RagCollectionDocumentUploadSuccessEntity_1 = require("./entity/RagCollectionDocumentUploadSuccessEntity");
const RuntimeBindingEntity_1 = require("./entity/RuntimeBindingEntity");
const TtsEntity_1 = require("./entity/TtsEntity");
const TtsVoiceListSuccessEntity_1 = require("./entity/TtsVoiceListSuccessEntity");
const VoiceEntity_1 = require("./entity/VoiceEntity");
const VoiceLlmEntity_1 = require("./entity/VoiceLlmEntity");
const VoiceLlmModelListSuccessEntity_1 = require("./entity/VoiceLlmModelListSuccessEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const Ai4callEntityBase_1 = require("./Ai4callEntityBase");
Object.defineProperty(exports, "Ai4callEntityBase", { enumerable: true, get: function () { return Ai4callEntityBase_1.Ai4callEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class Ai4callSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('Ai4callSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('Ai4callSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('Ai4callSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.AccountAllowedIpsSuccess().list()` / `client.AccountAllowedIpsSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AccountAllowedIpsSuccess(entopts) {
        const self = this;
        return new AccountAllowedIpsSuccessEntity_1.AccountAllowedIpsSuccessEntity(self, entopts);
    }
    // Entity access: `client.AccountAvailablePluginsSuccess().list()` / `client.AccountAvailablePluginsSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AccountAvailablePluginsSuccess(entopts) {
        const self = this;
        return new AccountAvailablePluginsSuccessEntity_1.AccountAvailablePluginsSuccessEntity(self, entopts);
    }
    // Entity access: `client.AccountCallLimitsSuccess().list()` / `client.AccountCallLimitsSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AccountCallLimitsSuccess(entopts) {
        const self = this;
        return new AccountCallLimitsSuccessEntity_1.AccountCallLimitsSuccessEntity(self, entopts);
    }
    // Entity access: `client.AccountNumberRoutingSuccess().list()` / `client.AccountNumberRoutingSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AccountNumberRoutingSuccess(entopts) {
        const self = this;
        return new AccountNumberRoutingSuccessEntity_1.AccountNumberRoutingSuccessEntity(self, entopts);
    }
    // Entity access: `client.AccountPluginConfigurationSuccess().list()` / `client.AccountPluginConfigurationSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AccountPluginConfigurationSuccess(entopts) {
        const self = this;
        return new AccountPluginConfigurationSuccessEntity_1.AccountPluginConfigurationSuccessEntity(self, entopts);
    }
    // Entity access: `client.AccountPluginInstanceSuccess().list()` / `client.AccountPluginInstanceSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AccountPluginInstanceSuccess(entopts) {
        const self = this;
        return new AccountPluginInstanceSuccessEntity_1.AccountPluginInstanceSuccessEntity(self, entopts);
    }
    // Entity access: `client.AccountPluginPurchaseSuccess().list()` / `client.AccountPluginPurchaseSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AccountPluginPurchaseSuccess(entopts) {
        const self = this;
        return new AccountPluginPurchaseSuccessEntity_1.AccountPluginPurchaseSuccessEntity(self, entopts);
    }
    // Entity access: `client.AnalyticsCallsOutboundSuccess().list()` / `client.AnalyticsCallsOutboundSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AnalyticsCallsOutboundSuccess(entopts) {
        const self = this;
        return new AnalyticsCallsOutboundSuccessEntity_1.AnalyticsCallsOutboundSuccessEntity(self, entopts);
    }
    // Entity access: `client.AnalyticsCallsSuccess().list()` / `client.AnalyticsCallsSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AnalyticsCallsSuccess(entopts) {
        const self = this;
        return new AnalyticsCallsSuccessEntity_1.AnalyticsCallsSuccessEntity(self, entopts);
    }
    // Entity access: `client.AnalyticsPostCallSuccess().list()` / `client.AnalyticsPostCallSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AnalyticsPostCallSuccess(entopts) {
        const self = this;
        return new AnalyticsPostCallSuccessEntity_1.AnalyticsPostCallSuccessEntity(self, entopts);
    }
    // Entity access: `client.AnalyticsPreCallSuccess().list()` / `client.AnalyticsPreCallSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AnalyticsPreCallSuccess(entopts) {
        const self = this;
        return new AnalyticsPreCallSuccessEntity_1.AnalyticsPreCallSuccessEntity(self, entopts);
    }
    // Entity access: `client.AnalyticsRagSearchSuccess().list()` / `client.AnalyticsRagSearchSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AnalyticsRagSearchSuccess(entopts) {
        const self = this;
        return new AnalyticsRagSearchSuccessEntity_1.AnalyticsRagSearchSuccessEntity(self, entopts);
    }
    // Entity access: `client.AnalyticsRagSuccess().list()` / `client.AnalyticsRagSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AnalyticsRagSuccess(entopts) {
        const self = this;
        return new AnalyticsRagSuccessEntity_1.AnalyticsRagSuccessEntity(self, entopts);
    }
    // Entity access: `client.AnalyticsRechargesSuccess().list()` / `client.AnalyticsRechargesSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AnalyticsRechargesSuccess(entopts) {
        const self = this;
        return new AnalyticsRechargesSuccessEntity_1.AnalyticsRechargesSuccessEntity(self, entopts);
    }
    // Entity access: `client.AnalyticsSmsSuccess().list()` / `client.AnalyticsSmsSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AnalyticsSmsSuccess(entopts) {
        const self = this;
        return new AnalyticsSmsSuccessEntity_1.AnalyticsSmsSuccessEntity(self, entopts);
    }
    // Entity access: `client.AnalyticsToolResponsesSuccess().list()` / `client.AnalyticsToolResponsesSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AnalyticsToolResponsesSuccess(entopts) {
        const self = this;
        return new AnalyticsToolResponsesSuccessEntity_1.AnalyticsToolResponsesSuccessEntity(self, entopts);
    }
    // Entity access: `client.Asr().list()` / `client.Asr().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Asr(entopts) {
        const self = this;
        return new AsrEntity_1.AsrEntity(self, entopts);
    }
    // Entity access: `client.AsrModelListSuccess().list()` / `client.AsrModelListSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AsrModelListSuccess(entopts) {
        const self = this;
        return new AsrModelListSuccessEntity_1.AsrModelListSuccessEntity(self, entopts);
    }
    // Entity access: `client.Assistant().list()` / `client.Assistant().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Assistant(entopts) {
        const self = this;
        return new AssistantEntity_1.AssistantEntity(self, entopts);
    }
    // Entity access: `client.AssistantAdvancedSettingsConfigurationSuccess().list()` / `client.AssistantAdvancedSettingsConfigurationSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssistantAdvancedSettingsConfigurationSuccess(entopts) {
        const self = this;
        return new AssistantAdvancedSettingsConfigurationSuccessEntity_1.AssistantAdvancedSettingsConfigurationSuccessEntity(self, entopts);
    }
    // Entity access: `client.AssistantAdvancedSettingsRuntimeUpdateSuccess().list()` / `client.AssistantAdvancedSettingsRuntimeUpdateSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssistantAdvancedSettingsRuntimeUpdateSuccess(entopts) {
        const self = this;
        return new AssistantAdvancedSettingsRuntimeUpdateSuccessEntity_1.AssistantAdvancedSettingsRuntimeUpdateSuccessEntity(self, entopts);
    }
    // Entity access: `client.AssistantAsrRuntimeUpdateSuccess().list()` / `client.AssistantAsrRuntimeUpdateSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssistantAsrRuntimeUpdateSuccess(entopts) {
        const self = this;
        return new AssistantAsrRuntimeUpdateSuccessEntity_1.AssistantAsrRuntimeUpdateSuccessEntity(self, entopts);
    }
    // Entity access: `client.AssistantConversationWebhookRuntimeSuccess().list()` / `client.AssistantConversationWebhookRuntimeSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssistantConversationWebhookRuntimeSuccess(entopts) {
        const self = this;
        return new AssistantConversationWebhookRuntimeSuccessEntity_1.AssistantConversationWebhookRuntimeSuccessEntity(self, entopts);
    }
    // Entity access: `client.AssistantDtmfConfigurationSuccess().list()` / `client.AssistantDtmfConfigurationSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssistantDtmfConfigurationSuccess(entopts) {
        const self = this;
        return new AssistantDtmfConfigurationSuccessEntity_1.AssistantDtmfConfigurationSuccessEntity(self, entopts);
    }
    // Entity access: `client.AssistantDtmfRuntimeUpdateSuccess().list()` / `client.AssistantDtmfRuntimeUpdateSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssistantDtmfRuntimeUpdateSuccess(entopts) {
        const self = this;
        return new AssistantDtmfRuntimeUpdateSuccessEntity_1.AssistantDtmfRuntimeUpdateSuccessEntity(self, entopts);
    }
    // Entity access: `client.AssistantHangupConfigurationSuccess().list()` / `client.AssistantHangupConfigurationSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssistantHangupConfigurationSuccess(entopts) {
        const self = this;
        return new AssistantHangupConfigurationSuccessEntity_1.AssistantHangupConfigurationSuccessEntity(self, entopts);
    }
    // Entity access: `client.AssistantHangupRuntimeUpdateSuccess().list()` / `client.AssistantHangupRuntimeUpdateSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssistantHangupRuntimeUpdateSuccess(entopts) {
        const self = this;
        return new AssistantHangupRuntimeUpdateSuccessEntity_1.AssistantHangupRuntimeUpdateSuccessEntity(self, entopts);
    }
    // Entity access: `client.AssistantHangupSchemaRuntimeSuccess().list()` / `client.AssistantHangupSchemaRuntimeSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssistantHangupSchemaRuntimeSuccess(entopts) {
        const self = this;
        return new AssistantHangupSchemaRuntimeSuccessEntity_1.AssistantHangupSchemaRuntimeSuccessEntity(self, entopts);
    }
    // Entity access: `client.AssistantKnowledgeSuccess().list()` / `client.AssistantKnowledgeSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssistantKnowledgeSuccess(entopts) {
        const self = this;
        return new AssistantKnowledgeSuccessEntity_1.AssistantKnowledgeSuccessEntity(self, entopts);
    }
    // Entity access: `client.AssistantLlmRuntimeUpdateSuccess().list()` / `client.AssistantLlmRuntimeUpdateSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssistantLlmRuntimeUpdateSuccess(entopts) {
        const self = this;
        return new AssistantLlmRuntimeUpdateSuccessEntity_1.AssistantLlmRuntimeUpdateSuccessEntity(self, entopts);
    }
    // Entity access: `client.AssistantNumberRoutingCatalogSuccess().list()` / `client.AssistantNumberRoutingCatalogSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssistantNumberRoutingCatalogSuccess(entopts) {
        const self = this;
        return new AssistantNumberRoutingCatalogSuccessEntity_1.AssistantNumberRoutingCatalogSuccessEntity(self, entopts);
    }
    // Entity access: `client.AssistantNumberRoutingRuntimeSuccess().list()` / `client.AssistantNumberRoutingRuntimeSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssistantNumberRoutingRuntimeSuccess(entopts) {
        const self = this;
        return new AssistantNumberRoutingRuntimeSuccessEntity_1.AssistantNumberRoutingRuntimeSuccessEntity(self, entopts);
    }
    // Entity access: `client.AssistantPostcallMcpRuntimeSuccess().list()` / `client.AssistantPostcallMcpRuntimeSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssistantPostcallMcpRuntimeSuccess(entopts) {
        const self = this;
        return new AssistantPostcallMcpRuntimeSuccessEntity_1.AssistantPostcallMcpRuntimeSuccessEntity(self, entopts);
    }
    // Entity access: `client.AssistantPrecallMcpRuntimeSuccess().list()` / `client.AssistantPrecallMcpRuntimeSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssistantPrecallMcpRuntimeSuccess(entopts) {
        const self = this;
        return new AssistantPrecallMcpRuntimeSuccessEntity_1.AssistantPrecallMcpRuntimeSuccessEntity(self, entopts);
    }
    // Entity access: `client.AssistantPrecallValidationRuntimeSuccess().list()` / `client.AssistantPrecallValidationRuntimeSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssistantPrecallValidationRuntimeSuccess(entopts) {
        const self = this;
        return new AssistantPrecallValidationRuntimeSuccessEntity_1.AssistantPrecallValidationRuntimeSuccessEntity(self, entopts);
    }
    // Entity access: `client.AssistantPromptSuccess().list()` / `client.AssistantPromptSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssistantPromptSuccess(entopts) {
        const self = this;
        return new AssistantPromptSuccessEntity_1.AssistantPromptSuccessEntity(self, entopts);
    }
    // Entity access: `client.AssistantRagConfigurationSuccess().list()` / `client.AssistantRagConfigurationSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssistantRagConfigurationSuccess(entopts) {
        const self = this;
        return new AssistantRagConfigurationSuccessEntity_1.AssistantRagConfigurationSuccessEntity(self, entopts);
    }
    // Entity access: `client.AssistantRagRuntimeUpdateSuccess().list()` / `client.AssistantRagRuntimeUpdateSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssistantRagRuntimeUpdateSuccess(entopts) {
        const self = this;
        return new AssistantRagRuntimeUpdateSuccessEntity_1.AssistantRagRuntimeUpdateSuccessEntity(self, entopts);
    }
    // Entity access: `client.AssistantSaveConversationRuntimeSuccess().list()` / `client.AssistantSaveConversationRuntimeSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssistantSaveConversationRuntimeSuccess(entopts) {
        const self = this;
        return new AssistantSaveConversationRuntimeSuccessEntity_1.AssistantSaveConversationRuntimeSuccessEntity(self, entopts);
    }
    // Entity access: `client.AssistantSettingsConfigurationSuccess().list()` / `client.AssistantSettingsConfigurationSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssistantSettingsConfigurationSuccess(entopts) {
        const self = this;
        return new AssistantSettingsConfigurationSuccessEntity_1.AssistantSettingsConfigurationSuccessEntity(self, entopts);
    }
    // Entity access: `client.AssistantSettingsRuntimeUpdateSuccess().list()` / `client.AssistantSettingsRuntimeUpdateSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssistantSettingsRuntimeUpdateSuccess(entopts) {
        const self = this;
        return new AssistantSettingsRuntimeUpdateSuccessEntity_1.AssistantSettingsRuntimeUpdateSuccessEntity(self, entopts);
    }
    // Entity access: `client.AssistantToolsRuntimeUpdateSuccess().list()` / `client.AssistantToolsRuntimeUpdateSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssistantToolsRuntimeUpdateSuccess(entopts) {
        const self = this;
        return new AssistantToolsRuntimeUpdateSuccessEntity_1.AssistantToolsRuntimeUpdateSuccessEntity(self, entopts);
    }
    // Entity access: `client.AssistantTtsRuntimeUpdateSuccess().list()` / `client.AssistantTtsRuntimeUpdateSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssistantTtsRuntimeUpdateSuccess(entopts) {
        const self = this;
        return new AssistantTtsRuntimeUpdateSuccessEntity_1.AssistantTtsRuntimeUpdateSuccessEntity(self, entopts);
    }
    // Entity access: `client.AssistantVoiceToVoiceRuntimeUpdateSuccess().list()` / `client.AssistantVoiceToVoiceRuntimeUpdateSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssistantVoiceToVoiceRuntimeUpdateSuccess(entopts) {
        const self = this;
        return new AssistantVoiceToVoiceRuntimeUpdateSuccessEntity_1.AssistantVoiceToVoiceRuntimeUpdateSuccessEntity(self, entopts);
    }
    // Entity access: `client.AssociatedRuntimeToolListSuccess().list()` / `client.AssociatedRuntimeToolListSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssociatedRuntimeToolListSuccess(entopts) {
        const self = this;
        return new AssociatedRuntimeToolListSuccessEntity_1.AssociatedRuntimeToolListSuccessEntity(self, entopts);
    }
    // Entity access: `client.AudioToAudio().list()` / `client.AudioToAudio().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AudioToAudio(entopts) {
        const self = this;
        return new AudioToAudioEntity_1.AudioToAudioEntity(self, entopts);
    }
    // Entity access: `client.AvailableRuntimeToolListSuccess().list()` / `client.AvailableRuntimeToolListSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AvailableRuntimeToolListSuccess(entopts) {
        const self = this;
        return new AvailableRuntimeToolListSuccessEntity_1.AvailableRuntimeToolListSuccessEntity(self, entopts);
    }
    // Entity access: `client.FillerPhraseList().list()` / `client.FillerPhraseList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FillerPhraseList(entopts) {
        const self = this;
        return new FillerPhraseListEntity_1.FillerPhraseListEntity(self, entopts);
    }
    // Entity access: `client.Health().list()` / `client.Health().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Health(entopts) {
        const self = this;
        return new HealthEntity_1.HealthEntity(self, entopts);
    }
    // Entity access: `client.Knowledge().list()` / `client.Knowledge().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Knowledge(entopts) {
        const self = this;
        return new KnowledgeEntity_1.KnowledgeEntity(self, entopts);
    }
    // Entity access: `client.Llm().list()` / `client.Llm().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Llm(entopts) {
        const self = this;
        return new LlmEntity_1.LlmEntity(self, entopts);
    }
    // Entity access: `client.LlmModelListSuccess().list()` / `client.LlmModelListSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LlmModelListSuccess(entopts) {
        const self = this;
        return new LlmModelListSuccessEntity_1.LlmModelListSuccessEntity(self, entopts);
    }
    // Entity access: `client.OutboundCall().list()` / `client.OutboundCall().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OutboundCall(entopts) {
        const self = this;
        return new OutboundCallEntity_1.OutboundCallEntity(self, entopts);
    }
    // Entity access: `client.OutboundCallAcceptedSuccess().list()` / `client.OutboundCallAcceptedSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OutboundCallAcceptedSuccess(entopts) {
        const self = this;
        return new OutboundCallAcceptedSuccessEntity_1.OutboundCallAcceptedSuccessEntity(self, entopts);
    }
    // Entity access: `client.OutboundDialStatusPayload().list()` / `client.OutboundDialStatusPayload().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OutboundDialStatusPayload(entopts) {
        const self = this;
        return new OutboundDialStatusPayloadEntity_1.OutboundDialStatusPayloadEntity(self, entopts);
    }
    // Entity access: `client.PortalLoginSuccess().list()` / `client.PortalLoginSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PortalLoginSuccess(entopts) {
        const self = this;
        return new PortalLoginSuccessEntity_1.PortalLoginSuccessEntity(self, entopts);
    }
    // Entity access: `client.PreCall().list()` / `client.PreCall().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PreCall(entopts) {
        const self = this;
        return new PreCallEntity_1.PreCallEntity(self, entopts);
    }
    // Entity access: `client.ProviderWallet().list()` / `client.ProviderWallet().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProviderWallet(entopts) {
        const self = this;
        return new ProviderWalletEntity_1.ProviderWalletEntity(self, entopts);
    }
    // Entity access: `client.ProviderWalletAssociationsSuccess().list()` / `client.ProviderWalletAssociationsSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProviderWalletAssociationsSuccess(entopts) {
        const self = this;
        return new ProviderWalletAssociationsSuccessEntity_1.ProviderWalletAssociationsSuccessEntity(self, entopts);
    }
    // Entity access: `client.ProviderWalletCatalogSuccess().list()` / `client.ProviderWalletCatalogSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProviderWalletCatalogSuccess(entopts) {
        const self = this;
        return new ProviderWalletCatalogSuccessEntity_1.ProviderWalletCatalogSuccessEntity(self, entopts);
    }
    // Entity access: `client.PublicRagSearchSuccess().list()` / `client.PublicRagSearchSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PublicRagSearchSuccess(entopts) {
        const self = this;
        return new PublicRagSearchSuccessEntity_1.PublicRagSearchSuccessEntity(self, entopts);
    }
    // Entity access: `client.RagCollectionDeleteSuccess().list()` / `client.RagCollectionDeleteSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RagCollectionDeleteSuccess(entopts) {
        const self = this;
        return new RagCollectionDeleteSuccessEntity_1.RagCollectionDeleteSuccessEntity(self, entopts);
    }
    // Entity access: `client.RagCollectionDocumentDeleteSuccess().list()` / `client.RagCollectionDocumentDeleteSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RagCollectionDocumentDeleteSuccess(entopts) {
        const self = this;
        return new RagCollectionDocumentDeleteSuccessEntity_1.RagCollectionDocumentDeleteSuccessEntity(self, entopts);
    }
    // Entity access: `client.RagCollectionDocumentListSuccess().list()` / `client.RagCollectionDocumentListSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RagCollectionDocumentListSuccess(entopts) {
        const self = this;
        return new RagCollectionDocumentListSuccessEntity_1.RagCollectionDocumentListSuccessEntity(self, entopts);
    }
    // Entity access: `client.RagCollectionDocumentTokenEstimateSuccess().list()` / `client.RagCollectionDocumentTokenEstimateSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RagCollectionDocumentTokenEstimateSuccess(entopts) {
        const self = this;
        return new RagCollectionDocumentTokenEstimateSuccessEntity_1.RagCollectionDocumentTokenEstimateSuccessEntity(self, entopts);
    }
    // Entity access: `client.RagCollectionDocumentUploadStatusSuccess().list()` / `client.RagCollectionDocumentUploadStatusSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RagCollectionDocumentUploadStatusSuccess(entopts) {
        const self = this;
        return new RagCollectionDocumentUploadStatusSuccessEntity_1.RagCollectionDocumentUploadStatusSuccessEntity(self, entopts);
    }
    // Entity access: `client.RagCollectionDocumentUploadSuccess().list()` / `client.RagCollectionDocumentUploadSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RagCollectionDocumentUploadSuccess(entopts) {
        const self = this;
        return new RagCollectionDocumentUploadSuccessEntity_1.RagCollectionDocumentUploadSuccessEntity(self, entopts);
    }
    // Entity access: `client.RuntimeBinding().list()` / `client.RuntimeBinding().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RuntimeBinding(entopts) {
        const self = this;
        return new RuntimeBindingEntity_1.RuntimeBindingEntity(self, entopts);
    }
    // Entity access: `client.Tts().list()` / `client.Tts().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Tts(entopts) {
        const self = this;
        return new TtsEntity_1.TtsEntity(self, entopts);
    }
    // Entity access: `client.TtsVoiceListSuccess().list()` / `client.TtsVoiceListSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TtsVoiceListSuccess(entopts) {
        const self = this;
        return new TtsVoiceListSuccessEntity_1.TtsVoiceListSuccessEntity(self, entopts);
    }
    // Entity access: `client.Voice().list()` / `client.Voice().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Voice(entopts) {
        const self = this;
        return new VoiceEntity_1.VoiceEntity(self, entopts);
    }
    // Entity access: `client.VoiceLlm().list()` / `client.VoiceLlm().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    VoiceLlm(entopts) {
        const self = this;
        return new VoiceLlmEntity_1.VoiceLlmEntity(self, entopts);
    }
    // Entity access: `client.VoiceLlmModelListSuccess().list()` / `client.VoiceLlmModelListSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    VoiceLlmModelListSuccess(entopts) {
        const self = this;
        return new VoiceLlmModelListSuccessEntity_1.VoiceLlmModelListSuccessEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new Ai4callSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return Ai4callSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'Ai4call' };
    }
    toString() {
        return 'Ai4call ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.Ai4callSDK = Ai4callSDK;
const SDK = Ai4callSDK;
exports.SDK = SDK;
//# sourceMappingURL=Ai4callSDK.js.map