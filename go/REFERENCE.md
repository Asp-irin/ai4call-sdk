# Ai4call Golang SDK Reference

Complete API reference for the Ai4call Golang SDK.


## Ai4callSDK

### Constructor

```go
func NewAi4callSDK(options map[string]any) *Ai4callSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *Ai4callSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *Ai4callSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `AccountAllowedIpsSuccess(data map[string]any) Ai4callEntity`

Create a new `AccountAllowedIpsSuccess` entity instance. Pass `nil` for no initial data.

#### `AccountAvailablePluginsSuccess(data map[string]any) Ai4callEntity`

Create a new `AccountAvailablePluginsSuccess` entity instance. Pass `nil` for no initial data.

#### `AccountCallLimitsSuccess(data map[string]any) Ai4callEntity`

Create a new `AccountCallLimitsSuccess` entity instance. Pass `nil` for no initial data.

#### `AccountNumberRoutingSuccess(data map[string]any) Ai4callEntity`

Create a new `AccountNumberRoutingSuccess` entity instance. Pass `nil` for no initial data.

#### `AccountPluginConfigurationSuccess(data map[string]any) Ai4callEntity`

Create a new `AccountPluginConfigurationSuccess` entity instance. Pass `nil` for no initial data.

#### `AccountPluginInstanceSuccess(data map[string]any) Ai4callEntity`

Create a new `AccountPluginInstanceSuccess` entity instance. Pass `nil` for no initial data.

#### `AccountPluginPurchaseSuccess(data map[string]any) Ai4callEntity`

Create a new `AccountPluginPurchaseSuccess` entity instance. Pass `nil` for no initial data.

#### `AnalyticsCallsOutboundSuccess(data map[string]any) Ai4callEntity`

Create a new `AnalyticsCallsOutboundSuccess` entity instance. Pass `nil` for no initial data.

#### `AnalyticsCallsSuccess(data map[string]any) Ai4callEntity`

Create a new `AnalyticsCallsSuccess` entity instance. Pass `nil` for no initial data.

#### `AnalyticsPostCallSuccess(data map[string]any) Ai4callEntity`

Create a new `AnalyticsPostCallSuccess` entity instance. Pass `nil` for no initial data.

#### `AnalyticsPreCallSuccess(data map[string]any) Ai4callEntity`

Create a new `AnalyticsPreCallSuccess` entity instance. Pass `nil` for no initial data.

#### `AnalyticsRagSearchSuccess(data map[string]any) Ai4callEntity`

Create a new `AnalyticsRagSearchSuccess` entity instance. Pass `nil` for no initial data.

#### `AnalyticsRagSuccess(data map[string]any) Ai4callEntity`

Create a new `AnalyticsRagSuccess` entity instance. Pass `nil` for no initial data.

#### `AnalyticsRechargesSuccess(data map[string]any) Ai4callEntity`

Create a new `AnalyticsRechargesSuccess` entity instance. Pass `nil` for no initial data.

#### `AnalyticsSmsSuccess(data map[string]any) Ai4callEntity`

Create a new `AnalyticsSmsSuccess` entity instance. Pass `nil` for no initial data.

#### `AnalyticsToolResponsesSuccess(data map[string]any) Ai4callEntity`

Create a new `AnalyticsToolResponsesSuccess` entity instance. Pass `nil` for no initial data.

#### `Asr(data map[string]any) Ai4callEntity`

Create a new `Asr` entity instance. Pass `nil` for no initial data.

#### `AsrModelListSuccess(data map[string]any) Ai4callEntity`

Create a new `AsrModelListSuccess` entity instance. Pass `nil` for no initial data.

#### `Assistant(data map[string]any) Ai4callEntity`

Create a new `Assistant` entity instance. Pass `nil` for no initial data.

#### `AssistantAdvancedSettingsConfigurationSuccess(data map[string]any) Ai4callEntity`

Create a new `AssistantAdvancedSettingsConfigurationSuccess` entity instance. Pass `nil` for no initial data.

#### `AssistantAdvancedSettingsRuntimeUpdateSuccess(data map[string]any) Ai4callEntity`

Create a new `AssistantAdvancedSettingsRuntimeUpdateSuccess` entity instance. Pass `nil` for no initial data.

#### `AssistantAsrRuntimeUpdateSuccess(data map[string]any) Ai4callEntity`

Create a new `AssistantAsrRuntimeUpdateSuccess` entity instance. Pass `nil` for no initial data.

#### `AssistantConversationWebhookRuntimeSuccess(data map[string]any) Ai4callEntity`

Create a new `AssistantConversationWebhookRuntimeSuccess` entity instance. Pass `nil` for no initial data.

#### `AssistantDtmfConfigurationSuccess(data map[string]any) Ai4callEntity`

Create a new `AssistantDtmfConfigurationSuccess` entity instance. Pass `nil` for no initial data.

#### `AssistantDtmfRuntimeUpdateSuccess(data map[string]any) Ai4callEntity`

Create a new `AssistantDtmfRuntimeUpdateSuccess` entity instance. Pass `nil` for no initial data.

#### `AssistantHangupConfigurationSuccess(data map[string]any) Ai4callEntity`

Create a new `AssistantHangupConfigurationSuccess` entity instance. Pass `nil` for no initial data.

#### `AssistantHangupRuntimeUpdateSuccess(data map[string]any) Ai4callEntity`

Create a new `AssistantHangupRuntimeUpdateSuccess` entity instance. Pass `nil` for no initial data.

#### `AssistantHangupSchemaRuntimeSuccess(data map[string]any) Ai4callEntity`

Create a new `AssistantHangupSchemaRuntimeSuccess` entity instance. Pass `nil` for no initial data.

#### `AssistantKnowledgeSuccess(data map[string]any) Ai4callEntity`

Create a new `AssistantKnowledgeSuccess` entity instance. Pass `nil` for no initial data.

#### `AssistantLlmRuntimeUpdateSuccess(data map[string]any) Ai4callEntity`

Create a new `AssistantLlmRuntimeUpdateSuccess` entity instance. Pass `nil` for no initial data.

#### `AssistantNumberRoutingCatalogSuccess(data map[string]any) Ai4callEntity`

Create a new `AssistantNumberRoutingCatalogSuccess` entity instance. Pass `nil` for no initial data.

#### `AssistantNumberRoutingRuntimeSuccess(data map[string]any) Ai4callEntity`

Create a new `AssistantNumberRoutingRuntimeSuccess` entity instance. Pass `nil` for no initial data.

#### `AssistantPostcallMcpRuntimeSuccess(data map[string]any) Ai4callEntity`

Create a new `AssistantPostcallMcpRuntimeSuccess` entity instance. Pass `nil` for no initial data.

#### `AssistantPrecallMcpRuntimeSuccess(data map[string]any) Ai4callEntity`

Create a new `AssistantPrecallMcpRuntimeSuccess` entity instance. Pass `nil` for no initial data.

#### `AssistantPrecallValidationRuntimeSuccess(data map[string]any) Ai4callEntity`

Create a new `AssistantPrecallValidationRuntimeSuccess` entity instance. Pass `nil` for no initial data.

#### `AssistantPromptSuccess(data map[string]any) Ai4callEntity`

Create a new `AssistantPromptSuccess` entity instance. Pass `nil` for no initial data.

#### `AssistantRagConfigurationSuccess(data map[string]any) Ai4callEntity`

Create a new `AssistantRagConfigurationSuccess` entity instance. Pass `nil` for no initial data.

#### `AssistantRagRuntimeUpdateSuccess(data map[string]any) Ai4callEntity`

Create a new `AssistantRagRuntimeUpdateSuccess` entity instance. Pass `nil` for no initial data.

#### `AssistantSaveConversationRuntimeSuccess(data map[string]any) Ai4callEntity`

Create a new `AssistantSaveConversationRuntimeSuccess` entity instance. Pass `nil` for no initial data.

#### `AssistantSettingsConfigurationSuccess(data map[string]any) Ai4callEntity`

Create a new `AssistantSettingsConfigurationSuccess` entity instance. Pass `nil` for no initial data.

#### `AssistantSettingsRuntimeUpdateSuccess(data map[string]any) Ai4callEntity`

Create a new `AssistantSettingsRuntimeUpdateSuccess` entity instance. Pass `nil` for no initial data.

#### `AssistantToolsRuntimeUpdateSuccess(data map[string]any) Ai4callEntity`

Create a new `AssistantToolsRuntimeUpdateSuccess` entity instance. Pass `nil` for no initial data.

#### `AssistantTtsRuntimeUpdateSuccess(data map[string]any) Ai4callEntity`

Create a new `AssistantTtsRuntimeUpdateSuccess` entity instance. Pass `nil` for no initial data.

#### `AssistantVoiceToVoiceRuntimeUpdateSuccess(data map[string]any) Ai4callEntity`

Create a new `AssistantVoiceToVoiceRuntimeUpdateSuccess` entity instance. Pass `nil` for no initial data.

#### `AssociatedRuntimeToolListSuccess(data map[string]any) Ai4callEntity`

Create a new `AssociatedRuntimeToolListSuccess` entity instance. Pass `nil` for no initial data.

#### `AudioToAudio(data map[string]any) Ai4callEntity`

Create a new `AudioToAudio` entity instance. Pass `nil` for no initial data.

#### `AvailableRuntimeToolListSuccess(data map[string]any) Ai4callEntity`

Create a new `AvailableRuntimeToolListSuccess` entity instance. Pass `nil` for no initial data.

#### `FillerPhraseList(data map[string]any) Ai4callEntity`

Create a new `FillerPhraseList` entity instance. Pass `nil` for no initial data.

#### `Health(data map[string]any) Ai4callEntity`

Create a new `Health` entity instance. Pass `nil` for no initial data.

#### `Knowledge(data map[string]any) Ai4callEntity`

Create a new `Knowledge` entity instance. Pass `nil` for no initial data.

#### `Llm(data map[string]any) Ai4callEntity`

Create a new `Llm` entity instance. Pass `nil` for no initial data.

#### `LlmModelListSuccess(data map[string]any) Ai4callEntity`

Create a new `LlmModelListSuccess` entity instance. Pass `nil` for no initial data.

#### `OutboundCall(data map[string]any) Ai4callEntity`

Create a new `OutboundCall` entity instance. Pass `nil` for no initial data.

#### `OutboundCallAcceptedSuccess(data map[string]any) Ai4callEntity`

Create a new `OutboundCallAcceptedSuccess` entity instance. Pass `nil` for no initial data.

#### `OutboundDialStatusPayload(data map[string]any) Ai4callEntity`

Create a new `OutboundDialStatusPayload` entity instance. Pass `nil` for no initial data.

#### `PortalLoginSuccess(data map[string]any) Ai4callEntity`

Create a new `PortalLoginSuccess` entity instance. Pass `nil` for no initial data.

#### `PreCall(data map[string]any) Ai4callEntity`

Create a new `PreCall` entity instance. Pass `nil` for no initial data.

#### `ProviderWallet(data map[string]any) Ai4callEntity`

Create a new `ProviderWallet` entity instance. Pass `nil` for no initial data.

#### `ProviderWalletAssociationsSuccess(data map[string]any) Ai4callEntity`

Create a new `ProviderWalletAssociationsSuccess` entity instance. Pass `nil` for no initial data.

#### `ProviderWalletCatalogSuccess(data map[string]any) Ai4callEntity`

Create a new `ProviderWalletCatalogSuccess` entity instance. Pass `nil` for no initial data.

#### `PublicRagSearchSuccess(data map[string]any) Ai4callEntity`

Create a new `PublicRagSearchSuccess` entity instance. Pass `nil` for no initial data.

#### `RagCollectionDeleteSuccess(data map[string]any) Ai4callEntity`

Create a new `RagCollectionDeleteSuccess` entity instance. Pass `nil` for no initial data.

#### `RagCollectionDocumentDeleteSuccess(data map[string]any) Ai4callEntity`

Create a new `RagCollectionDocumentDeleteSuccess` entity instance. Pass `nil` for no initial data.

#### `RagCollectionDocumentListSuccess(data map[string]any) Ai4callEntity`

Create a new `RagCollectionDocumentListSuccess` entity instance. Pass `nil` for no initial data.

#### `RagCollectionDocumentTokenEstimateSuccess(data map[string]any) Ai4callEntity`

Create a new `RagCollectionDocumentTokenEstimateSuccess` entity instance. Pass `nil` for no initial data.

#### `RagCollectionDocumentUploadStatusSuccess(data map[string]any) Ai4callEntity`

Create a new `RagCollectionDocumentUploadStatusSuccess` entity instance. Pass `nil` for no initial data.

#### `RagCollectionDocumentUploadSuccess(data map[string]any) Ai4callEntity`

Create a new `RagCollectionDocumentUploadSuccess` entity instance. Pass `nil` for no initial data.

#### `RuntimeBinding(data map[string]any) Ai4callEntity`

Create a new `RuntimeBinding` entity instance. Pass `nil` for no initial data.

#### `Tts(data map[string]any) Ai4callEntity`

Create a new `Tts` entity instance. Pass `nil` for no initial data.

#### `TtsVoiceListSuccess(data map[string]any) Ai4callEntity`

Create a new `TtsVoiceListSuccess` entity instance. Pass `nil` for no initial data.

#### `Voice(data map[string]any) Ai4callEntity`

Create a new `Voice` entity instance. Pass `nil` for no initial data.

#### `VoiceLlm(data map[string]any) Ai4callEntity`

Create a new `VoiceLlm` entity instance. Pass `nil` for no initial data.

#### `VoiceLlmModelListSuccess(data map[string]any) Ai4callEntity`

Create a new `VoiceLlmModelListSuccess` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AccountAllowedIpsSuccessEntity

```go
accountAllowedIpsSuccess := client.AccountAllowedIpsSuccess(nil)
fmt.Println(accountAllowedIpsSuccess.GetName()) // "account_allowed_ips_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `addIps` | `[]any` | No | Value supplied for `addIps` in the `AccountAllowedIpsUpdateRequest` request. |
| `allowedIps` | `[]any` | No | Value supplied for `allowedIps` in the `AccountAllowedIpsUpdateRequest` request. |
| `data` | `map[string]any` | Yes |  |
| `deleteIps` | `[]any` | No | Value supplied for `deleteIps` in the `AccountAllowedIpsUpdateRequest` request. |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes |  |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AccountAllowedIpsSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AccountAllowedIpsSuccess(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AccountAllowedIpsSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AccountAvailablePluginsSuccessEntity

```go
accountAvailablePluginsSuccess := client.AccountAvailablePluginsSuccess(nil)
fmt.Println(accountAvailablePluginsSuccess.GetName()) // "account_available_plugins_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes |  |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AccountAvailablePluginsSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AccountAvailablePluginsSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AccountCallLimitsSuccessEntity

```go
accountCallLimitsSuccess := client.AccountCallLimitsSuccess(nil)
fmt.Println(accountCallLimitsSuccess.GetName()) // "account_call_limits_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistants` | `[]any` | Yes | Value supplied for `assistants` in the `AccountCallLimitsUpdateRequest` request. |
| `data` | `map[string]any` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes |  |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AccountCallLimitsSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AccountCallLimitsSuccess(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AccountCallLimitsSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AccountNumberRoutingSuccessEntity

```go
accountNumberRoutingSuccess := client.AccountNumberRoutingSuccess(nil)
fmt.Println(accountNumberRoutingSuccess.GetName()) // "account_number_routing_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `demoNumbers` | `[]any` | No | Value supplied for `demoNumbers` in the `AccountNumberRoutingUpdateRequest` request. |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes |  |
| `purchasedNumbers` | `[]any` | No | Value supplied for `purchasedNumbers` in the `AccountNumberRoutingUpdateRequest` request. |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |
| `userNumbers` | `[]any` | No | Value supplied for `userNumbers` in the `AccountNumberRoutingUpdateRequest` request. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AccountNumberRoutingSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AccountNumberRoutingSuccess(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AccountNumberRoutingSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AccountPluginConfigurationSuccessEntity

```go
accountPluginConfigurationSuccess := client.AccountPluginConfigurationSuccess(nil)
fmt.Println(accountPluginConfigurationSuccess.GetName()) // "account_plugin_configuration_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `map[string]any` | Yes | Configuration contract and current values for one plugin instance. |
| `instanceName` | `string` | No | Value supplied for `instanceName` in the `AccountPluginConfigurationUpdateRequest` request. |
| `instance_name` | `string` | No | Legacy alias of `instanceName`. |
| `pluginName` | `string` | No | Value supplied for `pluginName` in the `AccountPluginConfigurationUpdateRequest` request. |
| `plugin_name` | `string` | No | Legacy alias of `pluginName`. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AccountPluginConfigurationSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AccountPluginConfigurationSuccess(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AccountPluginConfigurationSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AccountPluginInstanceSuccessEntity

```go
accountPluginInstanceSuccess := client.AccountPluginInstanceSuccess(nil)
fmt.Println(accountPluginInstanceSuccess.GetName()) // "account_plugin_instance_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `map[string]any` | Yes | Current lifecycle information for one purchased plugin instance. |
| `data` | `map[string]any` | Yes |  |
| `instanceName` | `string` | No | Value supplied for `instanceName` in the `AccountPluginPurchaseRequest` request. |
| `instance_name` | `string` | No | Legacy alias of `instanceName`. |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes |  |
| `newInstanceName` | `string` | No | Value supplied for `newInstanceName` in the `AccountPluginInstanceByIdUpdateRequest` request. |
| `new_instance_name` | `string` | No | Legacy alias of `newInstanceName`. |
| `pluginName` | `string` | No | Value supplied for `pluginName` in the `AccountPluginPurchaseRequest` request. |
| `plugin_name` | `string` | No | Legacy alias of `pluginName`. |
| `requestId` | `string` | Yes |  |
| `status` | `string` | No | Value supplied for `status` in the `AccountPluginInstanceUpdateRequest` request. |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AccountPluginInstanceSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AccountPluginInstanceSuccess(nil).Create(map[string]any{
    "configuration": map[string]any{},
    "data": map[string]any{},
    "message": "example_message",
    "meta": map[string]any{},
    "requestId": "example_requestId",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AccountPluginInstanceSuccess(nil).Update(map[string]any{
    "instance_id": "instance_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AccountPluginInstanceSuccess(nil).Remove(map[string]any{"instance_id": "instance_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AccountPluginInstanceSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AccountPluginPurchaseSuccessEntity

```go
accountPluginPurchaseSuccess := client.AccountPluginPurchaseSuccess(nil)
fmt.Println(accountPluginPurchaseSuccess.GetName()) // "account_plugin_purchase_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `map[string]any` | Yes | Result of a plugin purchase, including charged prices and created instance data. |
| `instanceName` | `string` | No | Value supplied for `instanceName` in the `AccountPluginPurchaseRequest` request. |
| `instance_name` | `string` | No | Legacy alias of `instanceName`. |
| `pluginName` | `string` | No | Value supplied for `pluginName` in the `AccountPluginPurchaseRequest` request. |
| `plugin_name` | `string` | No | Legacy alias of `pluginName`. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AccountPluginPurchaseSuccess(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AccountPluginPurchaseSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AnalyticsCallsOutboundSuccessEntity

```go
analyticsCallsOutboundSuccess := client.AnalyticsCallsOutboundSuccess(nil)
fmt.Println(analyticsCallsOutboundSuccess.GetName()) // "analytics_calls_outbound_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes |  |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AnalyticsCallsOutboundSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AnalyticsCallsOutboundSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AnalyticsCallsSuccessEntity

```go
analyticsCallsSuccess := client.AnalyticsCallsSuccess(nil)
fmt.Println(analyticsCallsSuccess.GetName()) // "analytics_calls_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes |  |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AnalyticsCallsSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AnalyticsCallsSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AnalyticsPostCallSuccessEntity

```go
analyticsPostCallSuccess := client.AnalyticsPostCallSuccess(nil)
fmt.Println(analyticsPostCallSuccess.GetName()) // "analytics_post_call_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes |  |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AnalyticsPostCallSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AnalyticsPostCallSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AnalyticsPreCallSuccessEntity

```go
analyticsPreCallSuccess := client.AnalyticsPreCallSuccess(nil)
fmt.Println(analyticsPreCallSuccess.GetName()) // "analytics_pre_call_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes |  |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AnalyticsPreCallSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AnalyticsPreCallSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AnalyticsRagSearchSuccessEntity

```go
analyticsRagSearchSuccess := client.AnalyticsRagSearchSuccess(nil)
fmt.Println(analyticsRagSearchSuccess.GetName()) // "analytics_rag_search_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes |  |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AnalyticsRagSearchSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AnalyticsRagSearchSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AnalyticsRagSuccessEntity

```go
analyticsRagSuccess := client.AnalyticsRagSuccess(nil)
fmt.Println(analyticsRagSuccess.GetName()) // "analytics_rag_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes |  |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AnalyticsRagSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AnalyticsRagSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AnalyticsRechargesSuccessEntity

```go
analyticsRechargesSuccess := client.AnalyticsRechargesSuccess(nil)
fmt.Println(analyticsRechargesSuccess.GetName()) // "analytics_recharges_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes |  |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AnalyticsRechargesSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AnalyticsRechargesSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AnalyticsSmsSuccessEntity

```go
analyticsSmsSuccess := client.AnalyticsSmsSuccess(nil)
fmt.Println(analyticsSmsSuccess.GetName()) // "analytics_sms_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes |  |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AnalyticsSmsSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AnalyticsSmsSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AnalyticsToolResponsesSuccessEntity

```go
analyticsToolResponsesSuccess := client.AnalyticsToolResponsesSuccess(nil)
fmt.Println(analyticsToolResponsesSuccess.GetName()) // "analytics_tool_responses_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes |  |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AnalyticsToolResponsesSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AnalyticsToolResponsesSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AsrEntity

```go
asr := client.Asr(nil)
fmt.Println(asr.GetName()) // "asr"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes | Collection metadata. |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Asr(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AsrEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AsrModelListSuccessEntity

```go
asrModelListSuccess := client.AsrModelListSuccess(nil)
fmt.Println(asrModelListSuccess.GetName()) // "asr_model_list_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes | Collection metadata. |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AsrModelListSuccess(nil).Load(map[string]any{"assistant_id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AsrModelListSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssistantEntity

```go
assistant := client.Assistant(nil)
fmt.Println(assistant.GetName()) // "assistant"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistant` | `any` | Yes | Assistant detail response, including the legacy assistant API key during the v1 compatibility period. |
| `audioToAudio` | `any` | No | Initial audio-to-audio configuration, used when applicable to the selected mode. |
| `data` | `map[string]any` | Yes |  |
| `description` | `string` | Yes | Functional description of the assistant. |
| `firstMessage` | `map[string]any` | No | Partial update of the assistant's first-message configuration. |
| `id` | `string` | No |  |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes | Collection metadata. |
| `metadata` | `map[string]any` | No | Free-form metadata to store with the assistant. |
| `mode` | `string` | No | Runtime mode to use when creating the assistant. |
| `name` | `string` | Yes | Assistant name. |
| `network` | `map[string]any` | No | Network settings to update on the assistant. |
| `numbers` | `map[string]any` | No | Replacement values for assistant number lists when supplied. |
| `requestId` | `string` | Yes |  |
| `settings` | `map[string]any` | No | High-level assistant settings to update. |
| `status` | `string` | No | New lifecycle status for the assistant. |
| `success` | `bool` | Yes |  |
| `voiceToVoice` | `map[string]any` | No | Legacy alias of `audioToAudio`. |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `assistant` | - | - | - | - |
| `audioToAudio` | - | - | - | - |
| `data` | - | - | - | - |
| `description` | - | - | Yes | - |
| `firstMessage` | - | - | - | - |
| `id` | - | - | - | - |
| `message` | - | - | - | - |
| `meta` | - | - | - | - |
| `metadata` | - | - | - | - |
| `mode` | - | - | - | - |
| `name` | - | - | Yes | - |
| `network` | - | - | - | - |
| `numbers` | - | - | - | - |
| `requestId` | - | - | - | - |
| `settings` | - | - | - | - |
| `status` | - | - | - | - |
| `success` | - | - | - | - |
| `voiceToVoice` | - | - | - | - |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Assistant(nil).Load(map[string]any{"id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Assistant(nil).Create(map[string]any{
    "assistant": "example_assistant",
    "data": map[string]any{},
    "description": "example_description",
    "message": "example_message",
    "meta": map[string]any{},
    "name": "example_name",
    "requestId": "example_requestId",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Assistant(nil).Update(map[string]any{
    "id": "assistant_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Assistant(nil).Remove(map[string]any{"id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssistantEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssistantAdvancedSettingsConfigurationSuccessEntity

```go
assistantAdvancedSettingsConfigurationSuccess := client.AssistantAdvancedSettingsConfigurationSuccess(nil)
fmt.Println(assistantAdvancedSettingsConfigurationSuccess.GetName()) // "assistant_advanced_settings_configuration_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AssistantAdvancedSettingsConfigurationSuccess(nil).Load(map[string]any{"id": "assistant_advanced_settings_configuration_success_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssistantAdvancedSettingsConfigurationSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssistantAdvancedSettingsRuntimeUpdateSuccessEntity

```go
assistantAdvancedSettingsRuntimeUpdateSuccess := client.AssistantAdvancedSettingsRuntimeUpdateSuccess(nil)
fmt.Println(assistantAdvancedSettingsRuntimeUpdateSuccess.GetName()) // "assistant_advanced_settings_runtime_update_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantApiKey` | `string` | Yes |  |
| `assistantId` | `string` | Yes |  |
| `configuration` | `map[string]any` | Yes |  |
| `freqPenalty` | `float64` | No | Value supplied for `freqPenalty` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `maxTokens` | `int` | No | Value supplied for `maxTokens` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `presencePenalty` | `float64` | No | Value supplied for `presencePenalty` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `service` | `string` | Yes |  |
| `stopSequences` | `[]any` | No | Value supplied for `stopSequences` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `temperature` | `float64` | No | Value supplied for `temperature` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `topK` | `int` | No | Value supplied for `topK` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `topP` | `float64` | No | Value supplied for `topP` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AssistantAdvancedSettingsRuntimeUpdateSuccess(nil).Update(map[string]any{
    "assistant_id": "assistant_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssistantAdvancedSettingsRuntimeUpdateSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssistantAsrRuntimeUpdateSuccessEntity

```go
assistantAsrRuntimeUpdateSuccess := client.AssistantAsrRuntimeUpdateSuccess(nil)
fmt.Println(assistantAsrRuntimeUpdateSuccess.GetName()) // "assistant_asr_runtime_update_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `string` | No | API key of the customer's ASR provider. |
| `assistantApiKey` | `string` | Yes |  |
| `assistantId` | `string` | Yes |  |
| `configuration` | `map[string]any` | Yes | Actual resulting ASR runtime configuration after merge and backend resolution. |
| `engineCode` | `string` | No | ASR engine/provider code. |
| `providerWalletId` | `int` | No | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `runtimeBinding` | `map[string]any` | Yes |  |
| `service` | `string` | Yes |  |
| `sourceMode` | `string` | Yes | Runtime sourcing mode. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AssistantAsrRuntimeUpdateSuccess(nil).Update(map[string]any{
    "assistant_id": "assistant_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssistantAsrRuntimeUpdateSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssistantConversationWebhookRuntimeSuccessEntity

```go
assistantConversationWebhookRuntimeSuccess := client.AssistantConversationWebhookRuntimeSuccess(nil)
fmt.Println(assistantConversationWebhookRuntimeSuccess.GetName()) // "assistant_conversation_webhook_runtime_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authName` | `string` | No | Name of the saved authentication to apply to the request |
| `configuration` | `map[string]any` | Yes |  |
| `enabled` | `bool` | No | Enable or disable sending the conversation to the webhook |
| `url` | `string` | No | Endpoint that receives the POST at the end of the call |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AssistantConversationWebhookRuntimeSuccess(nil).Load(map[string]any{"assistant_id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AssistantConversationWebhookRuntimeSuccess(nil).Update(map[string]any{
    "assistant_id": "assistant_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssistantConversationWebhookRuntimeSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssistantDtmfConfigurationSuccessEntity

```go
assistantDtmfConfigurationSuccess := client.AssistantDtmfConfigurationSuccess(nil)
fmt.Println(assistantDtmfConfigurationSuccess.GetName()) // "assistant_dtmf_configuration_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AssistantDtmfConfigurationSuccess(nil).Load(map[string]any{"id": "assistant_dtmf_configuration_success_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssistantDtmfConfigurationSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssistantDtmfRuntimeUpdateSuccessEntity

```go
assistantDtmfRuntimeUpdateSuccess := client.AssistantDtmfRuntimeUpdateSuccess(nil)
fmt.Println(assistantDtmfRuntimeUpdateSuccess.GetName()) // "assistant_dtmf_runtime_update_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acceptTimeout` | `int` | No | Value supplied for `acceptTimeout` in the `AssistantDtmfRuntimeUpdateRequest` request. |
| `assistantApiKey` | `string` | Yes |  |
| `assistantId` | `string` | Yes |  |
| `configuration` | `map[string]any` | Yes |  |
| `enabled` | `bool` | No | Enable or disable DTMF reception. |
| `maxLength` | `int` | No | Value supplied for `maxLength` in the `AssistantDtmfRuntimeUpdateRequest` request. |
| `minLength` | `int` | No | Value supplied for `minLength` in the `AssistantDtmfRuntimeUpdateRequest` request. |
| `playEnabled` | `bool` | No | Enable or disable DTMF sending during the call. |
| `service` | `string` | Yes |  |
| `terminationChars` | `string` | No | Value supplied for `terminationChars` in the `AssistantDtmfRuntimeUpdateRequest` request. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AssistantDtmfRuntimeUpdateSuccess(nil).Update(map[string]any{
    "assistant_id": "assistant_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssistantDtmfRuntimeUpdateSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssistantHangupConfigurationSuccessEntity

```go
assistantHangupConfigurationSuccess := client.AssistantHangupConfigurationSuccess(nil)
fmt.Println(assistantHangupConfigurationSuccess.GetName()) // "assistant_hangup_configuration_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AssistantHangupConfigurationSuccess(nil).Load(map[string]any{"id": "assistant_hangup_configuration_success_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssistantHangupConfigurationSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssistantHangupRuntimeUpdateSuccessEntity

```go
assistantHangupRuntimeUpdateSuccess := client.AssistantHangupRuntimeUpdateSuccess(nil)
fmt.Println(assistantHangupRuntimeUpdateSuccess.GetName()) // "assistant_hangup_runtime_update_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantApiKey` | `string` | Yes |  |
| `assistantId` | `string` | Yes |  |
| `availableAgents` | `[]any` | No | Value supplied for `availableAgents` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `configuration` | `map[string]any` | Yes |  |
| `enableHangup` | `bool` | No | Value supplied for `enableHangup` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `enableRedirect` | `bool` | No | Value supplied for `enableRedirect` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `enableTransferAgent` | `bool` | No | Value supplied for `enableTransferAgent` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `service` | `string` | Yes |  |
| `transferAgentNotificationText` | `string` | No | Value supplied for `transferAgentNotificationText` in the `AssistantHangupRuntimeUpdateRequest` request. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AssistantHangupRuntimeUpdateSuccess(nil).Update(map[string]any{
    "assistant_id": "assistant_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssistantHangupRuntimeUpdateSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssistantHangupSchemaRuntimeSuccessEntity

```go
assistantHangupSchemaRuntimeSuccess := client.AssistantHangupSchemaRuntimeSuccess(nil)
fmt.Println(assistantHangupSchemaRuntimeSuccess.GetName()) // "assistant_hangup_schema_runtime_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `map[string]any` | Yes |  |
| `hangupUrl` | `string` | No | Hangup webhook URL (null to remove) |
| `schema` | `[]any` | No | Defining body fields (overrides the current schema) |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AssistantHangupSchemaRuntimeSuccess(nil).Load(map[string]any{"assistant_id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AssistantHangupSchemaRuntimeSuccess(nil).Update(map[string]any{
    "assistant_id": "assistant_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssistantHangupSchemaRuntimeSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssistantKnowledgeSuccessEntity

```go
assistantKnowledgeSuccess := client.AssistantKnowledgeSuccess(nil)
fmt.Println(assistantKnowledgeSuccess.GetName()) // "assistant_knowledge_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AssistantKnowledgeSuccess(nil).Load(map[string]any{"id": "assistant_knowledge_success_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AssistantKnowledgeSuccess(nil).Update(map[string]any{
    "id": "assistant_knowledge_success_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssistantKnowledgeSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssistantLlmRuntimeUpdateSuccessEntity

```go
assistantLlmRuntimeUpdateSuccess := client.AssistantLlmRuntimeUpdateSuccess(nil)
fmt.Println(assistantLlmRuntimeUpdateSuccess.GetName()) // "assistant_llm_runtime_update_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `string` | No | API key of the customer's LLM provider. |
| `assistantApiKey` | `string` | Yes |  |
| `assistantId` | `string` | Yes |  |
| `baseUrl` | `string` | No | Base custom URL of the LLM provider. |
| `configuration` | `map[string]any` | Yes | Actual resulting LLM runtime configuration after merge and backend resolution. |
| `engineCode` | `string` | No | LLM engine/provider code. |
| `modelCode` | `string` | No | LLM model code. |
| `providerWalletId` | `int` | No | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `runtimeBinding` | `map[string]any` | Yes |  |
| `service` | `string` | Yes |  |
| `sourceMode` | `string` | Yes | Runtime sourcing mode. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AssistantLlmRuntimeUpdateSuccess(nil).Update(map[string]any{
    "assistant_id": "assistant_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssistantLlmRuntimeUpdateSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssistantNumberRoutingCatalogSuccessEntity

```go
assistantNumberRoutingCatalogSuccess := client.AssistantNumberRoutingCatalogSuccess(nil)
fmt.Println(assistantNumberRoutingCatalogSuccess.GetName()) // "assistant_number_routing_catalog_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AssistantNumberRoutingCatalogSuccess(nil).Load(map[string]any{"id": "assistant_number_routing_catalog_success_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssistantNumberRoutingCatalogSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssistantNumberRoutingRuntimeSuccessEntity

```go
assistantNumberRoutingRuntimeSuccess := client.AssistantNumberRoutingRuntimeSuccess(nil)
fmt.Println(assistantNumberRoutingRuntimeSuccess.GetName()) // "assistant_number_routing_runtime_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `map[string]any` | Yes |  |
| `demoNumbers` | `[]any` | No | Demo numbers to route to this assistant |
| `purchasedNumbers` | `[]any` | No | Purchased numbers to route to this assistant |
| `userNumbers` | `[]any` | No | Customer's own numbers (own PBX) to route to this assistant |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AssistantNumberRoutingRuntimeSuccess(nil).Update(map[string]any{
    "assistant_id": "assistant_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssistantNumberRoutingRuntimeSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssistantPostcallMcpRuntimeSuccessEntity

```go
assistantPostcallMcpRuntimeSuccess := client.AssistantPostcallMcpRuntimeSuccess(nil)
fmt.Println(assistantPostcallMcpRuntimeSuccess.GetName()) // "assistant_postcall_mcp_runtime_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `map[string]any` | Yes | General configuration of the post-call phase. |
| `enabled` | `bool` | No | Enable or disable the whole post-call phase without losing its configuration. |
| `globalPrompt` | `string` | No | Global post-call prompt. |
| `modelConfig` | `map[string]any` | Yes | Model configuration used by the MCP phase. |
| `tools` | `[]any` | Yes | Complete list of post-call tools to set up. |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `configuration` | - | - |
| `enabled` | - | - |
| `globalPrompt` | - | - |
| `modelConfig` | - | - |
| `tools` | - | Yes |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AssistantPostcallMcpRuntimeSuccess(nil).Load(map[string]any{"assistant_id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AssistantPostcallMcpRuntimeSuccess(nil).Update(map[string]any{
    "assistant_id": "assistant_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssistantPostcallMcpRuntimeSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssistantPrecallMcpRuntimeSuccessEntity

```go
assistantPrecallMcpRuntimeSuccess := client.AssistantPrecallMcpRuntimeSuccess(nil)
fmt.Println(assistantPrecallMcpRuntimeSuccess.GetName()) // "assistant_precall_mcp_runtime_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `map[string]any` | Yes | General configuration of the pre-call phase. |
| `earlyTerminationEnabled` | `bool` | No | Enable/disable early termination. |
| `enabled` | `bool` | No | Enable or disable the whole pre-call phase without losing its configuration. |
| `globalPrompt` | `string` | No | Global pre-call prompt. |
| `modelConfig` | `map[string]any` | Yes | Model configuration used by the MCP phase. |
| `outputSchema` | `map[string]any` | No | JSON schema of the expected pre-call output, as an alternative to `outputVariables`. |
| `outputVariables` | `[]any` | No | Variables to extract from the pre-call result. |
| `terminationMessage` | `string` | No | Early termination audio message. |
| `tools` | `[]any` | Yes | Complete list of pre-call tools to set (replaces the current ones). |
| `voiceConfig` | `map[string]any` | Yes | Voice/TTS configuration used to generate pre-call hold and termination audio. |
| `waitingAudioNonInterruptible` | `bool` | No | `true` plays all on-hold audio, `false` allows the customer to speak over the audio. |
| `waitingAudioText` | `string` | No | Audio text on hold. |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `configuration` | - | - |
| `earlyTerminationEnabled` | - | - |
| `enabled` | - | - |
| `globalPrompt` | - | - |
| `modelConfig` | - | - |
| `outputSchema` | - | - |
| `outputVariables` | - | - |
| `terminationMessage` | - | - |
| `tools` | - | Yes |
| `voiceConfig` | - | - |
| `waitingAudioNonInterruptible` | - | - |
| `waitingAudioText` | - | - |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AssistantPrecallMcpRuntimeSuccess(nil).Load(map[string]any{"assistant_id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AssistantPrecallMcpRuntimeSuccess(nil).Update(map[string]any{
    "assistant_id": "assistant_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssistantPrecallMcpRuntimeSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssistantPrecallValidationRuntimeSuccessEntity

```go
assistantPrecallValidationRuntimeSuccess := client.AssistantPrecallValidationRuntimeSuccess(nil)
fmt.Println(assistantPrecallValidationRuntimeSuccess.GetName()) // "assistant_precall_validation_runtime_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authPassword` | `string` | No | Basic auth password (null to remove it) |
| `authToken` | `string` | No | Bearer token or API key (null to remove it) |
| `authType` | `string` | No |  |
| `authUsername` | `string` | No | Value supplied for `authUsername` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `configuration` | `any` | Yes | null if no configuration is yet present |
| `headersJson` | `map[string]any` | No | Value supplied for `headersJson` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `isActive` | `bool` | No | Value supplied for `isActive` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `method` | `string` | No |  |
| `name` | `string` | No | Value supplied for `name` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `numberLocation` | `string` | No | Where to insert the calling number in the HTTP request: - `query` — added as a query string (e.g. |
| `numberParamName` | `string` | No | Value supplied for `numberParamName` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `timeoutMs` | `int` | No | Value supplied for `timeoutMs` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `url` | `string` | No | Value supplied for `url` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AssistantPrecallValidationRuntimeSuccess(nil).Load(map[string]any{"assistant_id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AssistantPrecallValidationRuntimeSuccess(nil).Update(map[string]any{
    "assistant_id": "assistant_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssistantPrecallValidationRuntimeSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssistantPromptSuccessEntity

```go
assistantPromptSuccess := client.AssistantPromptSuccess(nil)
fmt.Println(assistantPromptSuccess.GetName()) // "assistant_prompt_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AssistantPromptSuccess(nil).Load(map[string]any{"id": "assistant_prompt_success_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssistantPromptSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssistantRagConfigurationSuccessEntity

```go
assistantRagConfigurationSuccess := client.AssistantRagConfigurationSuccess(nil)
fmt.Println(assistantRagConfigurationSuccess.GetName()) // "assistant_rag_configuration_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | Yes |  |
| `kbPrompt` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `returnedChunks` | `int` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AssistantRagConfigurationSuccess(nil).Load(map[string]any{"assistant_id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssistantRagConfigurationSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssistantRagRuntimeUpdateSuccessEntity

```go
assistantRagRuntimeUpdateSuccess := client.AssistantRagRuntimeUpdateSuccess(nil)
fmt.Println(assistantRagRuntimeUpdateSuccess.GetName()) // "assistant_rag_runtime_update_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantApiKey` | `string` | Yes |  |
| `assistantId` | `string` | Yes |  |
| `configuration` | `map[string]any` | Yes | RAG configuration resulting after application merge. |
| `enabled` | `bool` | No | Enable or disable RAG for the assistant. |
| `kbPrompt` | `string` | No | Assistant knowledge base instructions. |
| `name` | `string` | No | Name of the RAG collection to associate. |
| `returnedChunks` | `int` | No | Number of relevant fragments to return from the knowledge base. |
| `service` | `string` | Yes |  |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AssistantRagRuntimeUpdateSuccess(nil).Update(map[string]any{
    "assistant_id": "assistant_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssistantRagRuntimeUpdateSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssistantSaveConversationRuntimeSuccessEntity

```go
assistantSaveConversationRuntimeSuccess := client.AssistantSaveConversationRuntimeSuccess(nil)
fmt.Println(assistantSaveConversationRuntimeSuccess.GetName()) // "assistant_save_conversation_runtime_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `map[string]any` | Yes |  |
| `emails` | `string` | No | One or more recipient emails separated by commas (e.g. |
| `enabled` | `bool` | No | Enable or disable sending of the conversation summary via email |
| `smtpInstanceName` | `string` | No | Name of the SMTP plugin instance to use for sending |
| `smtp_instance_name` | `string` | No | Legacy alias of `smtpInstanceName`. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AssistantSaveConversationRuntimeSuccess(nil).Load(map[string]any{"assistant_id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AssistantSaveConversationRuntimeSuccess(nil).Update(map[string]any{
    "assistant_id": "assistant_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssistantSaveConversationRuntimeSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssistantSettingsConfigurationSuccessEntity

```go
assistantSettingsConfigurationSuccess := client.AssistantSettingsConfigurationSuccess(nil)
fmt.Println(assistantSettingsConfigurationSuccess.GetName()) // "assistant_settings_configuration_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AssistantSettingsConfigurationSuccess(nil).Load(map[string]any{"id": "assistant_settings_configuration_success_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssistantSettingsConfigurationSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssistantSettingsRuntimeUpdateSuccessEntity

```go
assistantSettingsRuntimeUpdateSuccess := client.AssistantSettingsRuntimeUpdateSuccess(nil)
fmt.Println(assistantSettingsRuntimeUpdateSuccess.GetName()) // "assistant_settings_runtime_update_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asrInitialDelayMs` | `int` | No | Value supplied for `asrInitialDelayMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `asrSilenceMs` | `int` | No | Value supplied for `asrSilenceMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `assistantApiKey` | `string` | Yes |  |
| `assistantId` | `string` | Yes |  |
| `callPermissions` | `map[string]any` | No | Value supplied for `callPermissions` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `configuration` | `map[string]any` | Yes |  |
| `dynamicTimeoutMs` | `int` | No | Value supplied for `dynamicTimeoutMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `filler` | `map[string]any` | No | Value supplied for `filler` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `maxResponseLength` | `int` | No | Value supplied for `maxResponseLength` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `reprompt` | `map[string]any` | No | Value supplied for `reprompt` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `service` | `string` | Yes |  |
| `truncateInitialAudio` | `bool` | No | Value supplied for `truncateInitialAudio` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `ttsInterruptionInConversation` | `bool` | No | Value supplied for `ttsInterruptionInConversation` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `vad` | `bool` | No | Value supplied for `vad` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `vadMinVoiceMs` | `int` | No | Value supplied for `vadMinVoiceMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `vadThreshold` | `float64` | No | Value supplied for `vadThreshold` in the `AssistantSettingsRuntimeUpdateRequest` request. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AssistantSettingsRuntimeUpdateSuccess(nil).Update(map[string]any{
    "assistant_id": "assistant_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssistantSettingsRuntimeUpdateSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssistantToolsRuntimeUpdateSuccessEntity

```go
assistantToolsRuntimeUpdateSuccess := client.AssistantToolsRuntimeUpdateSuccess(nil)
fmt.Println(assistantToolsRuntimeUpdateSuccess.GetName()) // "assistant_tools_runtime_update_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantApiKey` | `string` | Yes |  |
| `assistantId` | `string` | Yes |  |
| `configuration` | `map[string]any` | Yes | Resulting tool configuration after the update. |
| `service` | `string` | Yes |  |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AssistantToolsRuntimeUpdateSuccess(nil).Update(map[string]any{
    "assistant_id": "assistant_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssistantToolsRuntimeUpdateSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssistantTtsRuntimeUpdateSuccessEntity

```go
assistantTtsRuntimeUpdateSuccess := client.AssistantTtsRuntimeUpdateSuccess(nil)
fmt.Println(assistantTtsRuntimeUpdateSuccess.GetName()) // "assistant_tts_runtime_update_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `string` | No | API key of the customer's TTS provider. |
| `assistantApiKey` | `string` | Yes |  |
| `assistantId` | `string` | Yes |  |
| `configuration` | `map[string]any` | Yes | Actual resulting TTS runtime configuration after merge and backend resolution. |
| `engineCode` | `string` | No | TTS engine/provider code. |
| `providerWalletId` | `int` | No | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `region` | `string` | No | Region/provider area requested by some engine customers, in particular Azure. |
| `runtimeBinding` | `map[string]any` | Yes |  |
| `service` | `string` | Yes |  |
| `sourceMode` | `string` | Yes | Runtime sourcing mode. |
| `voiceCode` | `string` | No | TTS voice code. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AssistantTtsRuntimeUpdateSuccess(nil).Update(map[string]any{
    "assistant_id": "assistant_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssistantTtsRuntimeUpdateSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssistantVoiceToVoiceRuntimeUpdateSuccessEntity

```go
assistantVoiceToVoiceRuntimeUpdateSuccess := client.AssistantVoiceToVoiceRuntimeUpdateSuccess(nil)
fmt.Println(assistantVoiceToVoiceRuntimeUpdateSuccess.GetName()) // "assistant_voice_to_voice_runtime_update_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `string` | No | Customer key provider API. |
| `assistantApiKey` | `string` | Yes |  |
| `assistantId` | `string` | Yes |  |
| `baseUrl` | `string` | No | Base custom URL. |
| `configuration` | `map[string]any` | Yes |  |
| `engineCode` | `string` | No | Provider/engine voice LLM. |
| `modelCode` | `string` | No | LLM voice model code. |
| `prompt` | `string` | No | Main prompt of the audio-to-audio runtime. |
| `providerWalletId` | `int` | No | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `service` | `string` | Yes |  |
| `voiceCode` | `string` | No | Model item code. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AssistantVoiceToVoiceRuntimeUpdateSuccess(nil).Update(map[string]any{
    "assistant_id": "assistant_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssistantVoiceToVoiceRuntimeUpdateSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssociatedRuntimeToolListSuccessEntity

```go
associatedRuntimeToolListSuccess := client.AssociatedRuntimeToolListSuccess(nil)
fmt.Println(associatedRuntimeToolListSuccess.GetName()) // "associated_runtime_tool_list_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes |  |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AssociatedRuntimeToolListSuccess(nil).Load(map[string]any{"assistant_id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssociatedRuntimeToolListSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AudioToAudioEntity

```go
audioToAudio := client.AudioToAudio(nil)
fmt.Println(audioToAudio.GetName()) // "audio_to_audio"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes | Collection metadata. |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AudioToAudio(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AudioToAudioEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AvailableRuntimeToolListSuccessEntity

```go
availableRuntimeToolListSuccess := client.AvailableRuntimeToolListSuccess(nil)
fmt.Println(availableRuntimeToolListSuccess.GetName()) // "available_runtime_tool_list_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes |  |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AvailableRuntimeToolListSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AvailableRuntimeToolListSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FillerPhraseListEntity

```go
fillerPhraseList := client.FillerPhraseList(nil)
fmt.Println(fillerPhraseList.GetName()) // "filler_phrase_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associations` | `map[string]any` | Yes |  |
| `data` | `map[string]any` | Yes |  |
| `id` | `string` | Yes | Value supplied for `id` in the `FillerPhraseListCreateRequest` request. |
| `list` | `map[string]any` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | No |  |
| `name` | `string` | Yes | Value supplied for `name` in the `FillerPhraseListCreateRequest` request. |
| `phrases` | `[]any` | No | Value supplied for `phrases` in the `FillerPhraseListCreateRequest` request. |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |
| `toolListIds` | `[]any` | Yes |  |
| `waitingListIds` | `[]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.FillerPhraseList(nil).Load(map[string]any{"id": "filler_phrase_list_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.FillerPhraseList(nil).Create(map[string]any{
    "associations": map[string]any{},
    "data": map[string]any{},
    "id": "example_id",
    "list": map[string]any{},
    "message": "example_message",
    "name": "example_name",
    "requestId": "example_requestId",
    "success": true,
    "toolListIds": []any{},
    "waitingListIds": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.FillerPhraseList(nil).Update(map[string]any{
    "id": "filler_phrase_list_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.FillerPhraseList(nil).Remove(map[string]any{"id": "filler_phrase_list_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FillerPhraseListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## HealthEntity

```go
health := client.Health(nil)
fmt.Println(health.GetName()) // "health"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataSource` | `string` | Yes |  |
| `service` | `string` | Yes |  |
| `status` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Health(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `HealthEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## KnowledgeEntity

```go
knowledge := client.Knowledge(nil)
fmt.Println(knowledge.GetName()) // "knowledge"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `defaultPostAction` | `string` | No | Defaults to `ask_if_needs_more` when omitted |
| `defaultResponse` | `string` | Yes | Default answer used when a trigger has no specific response. |
| `id` | `string` | No |  |
| `knowledge` | `map[string]any` | Yes | A knowledge item: a set of recognised requests with their answers, folded into the prompt of every assistant it is associated with. |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | No |  |
| `requestId` | `string` | Yes |  |
| `rules` | `string` | No | Optional constraints applied to the whole knowledge item. |
| `success` | `bool` | Yes |  |
| `title` | `string` | Yes | Human-readable title of the new knowledge item. |
| `triggers` | `[]any` | No | Initial trigger list for the knowledge item. |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `data` | - | - | - | - |
| `defaultPostAction` | - | - | - | - |
| `defaultResponse` | - | - | Yes | - |
| `id` | - | - | - | - |
| `knowledge` | - | - | - | - |
| `message` | - | - | - | - |
| `meta` | - | - | - | - |
| `requestId` | - | - | - | - |
| `rules` | - | - | - | - |
| `success` | - | - | - | - |
| `title` | - | - | Yes | - |
| `triggers` | - | - | - | - |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Knowledge(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Knowledge(nil).Create(map[string]any{
    "data": map[string]any{},
    "defaultResponse": "example_defaultResponse",
    "knowledge": map[string]any{},
    "message": "example_message",
    "requestId": "example_requestId",
    "success": true,
    "title": "example_title",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Knowledge(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Knowledge(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `KnowledgeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LlmEntity

```go
llm := client.Llm(nil)
fmt.Println(llm.GetName()) // "llm"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes | Collection metadata. |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Llm(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LlmEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LlmModelListSuccessEntity

```go
llmModelListSuccess := client.LlmModelListSuccess(nil)
fmt.Println(llmModelListSuccess.GetName()) // "llm_model_list_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes | Collection metadata. |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.LlmModelListSuccess(nil).Load(map[string]any{"assistant_id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LlmModelListSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OutboundCallEntity

```go
outboundCall := client.OutboundCall(nil)
fmt.Println(outboundCall.GetName()) // "outbound_call"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `AddPrompt` | `string` | No | Legacy alias of `addPrompt`. |
| `addPrompt` | `string` | No | Optional additional prompt to customize assistant behavior. |
| `apiKey_assistente` | `string` | No | Legacy alias of `assistantApiKey`. |
| `assistantApiKey` | `string` | No | API key of the AI assistant that will talk to the callee. |
| `callId` | `string` | No | Technical call identifier, if already available when the response is returned. |
| `callResultUrl` | `string` | No | Optional HTTPS URL that AI4Call calls with the outcome notification. |
| `callbackConfigured` | `bool` | Yes | Indicates whether the callback URL for the call outcome was configured. |
| `callerId` | `string` | Yes | Caller number displayed in E.164 format. |
| `dst` | `string` | Yes | Recipient number in E.164 format, example +3902XXXXXXXX. |
| `internalId` | `string` | Yes | UUID generated by AI4Call to correlate the outbound request, callback and final dial-status lookup. |
| `status` | `string` | Yes | Initial status of the outbound request. |
| `url_esito_chiamata` | `any` | No | Legacy alias of `callResultUrl`. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.OutboundCall(nil).Create(map[string]any{
    "callbackConfigured": true,
    "callerId": "example_callerId",
    "dst": "example_dst",
    "internalId": "example_internalId",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OutboundCallEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OutboundCallAcceptedSuccessEntity

```go
outboundCallAcceptedSuccess := client.OutboundCallAcceptedSuccess(nil)
fmt.Println(outboundCallAcceptedSuccess.GetName()) // "outbound_call_accepted_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `AddPrompt` | `string` | No | Legacy alias of `addPrompt`. |
| `addPrompt` | `string` | No | Optional additional prompt to customize assistant behavior. |
| `apiKey_assistente` | `string` | No | Legacy alias of `assistantApiKey`. |
| `assistantApiKey` | `string` | No | API key of the AI assistant that will talk to the callee. |
| `callId` | `string` | No | Technical call identifier, if already available when the response is returned. |
| `callResultUrl` | `string` | No | Optional HTTPS URL that AI4Call calls with the outcome notification. |
| `callbackConfigured` | `bool` | Yes | Indicates whether the callback URL for the call outcome was configured. |
| `callerId` | `string` | Yes | Calling number displayed in the format required by the PBX, E.164 +3902XXXXXXXX or local 02XXXXXXXX. |
| `dst` | `string` | Yes | Recipient number in the format required by the PBX, E.164 +3902XXXXXXXX or local 02XXXXXXXX. |
| `internalId` | `string` | Yes | UUID generated by AI4Call to correlate the outbound request, callback and final dial-status lookup. |
| `ipPbx` | `string` | No | Public IP of the PBX, must be one of the authorized public IPs. |
| `ip_pbx` | `string` | No | Legacy alias of `ipPbx`. |
| `method_uac` | `bool` | No | Selects the registered UAC mode. |
| `sipPort` | `string` | No | SIP port of the PBX, standard 5060. |
| `sip_port` | `string` | No | Legacy alias of `sipPort`. |
| `status` | `string` | Yes | Initial status of the outbound request. |
| `url_esito_chiamata` | `any` | No | Legacy alias of `callResultUrl`. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.OutboundCallAcceptedSuccess(nil).Create(map[string]any{
    "callbackConfigured": true,
    "callerId": "example_callerId",
    "dst": "example_dst",
    "internalId": "example_internalId",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OutboundCallAcceptedSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OutboundDialStatusPayloadEntity

```go
outboundDialStatusPayload := client.OutboundDialStatusPayload(nil)
fmt.Println(outboundDialStatusPayload.GetName()) // "outbound_dial_status_payload"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billSec` | `int` | Yes | Billed duration in seconds. |
| `dialStatus` | `string` | Yes | Final dial result persisted in the outbound CDR. |
| `trafficCost` | `string` | Yes | Outbound traffic cost in EUR, expressed with six decimal places. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OutboundDialStatusPayload(nil).Load(map[string]any{"uuid": "uuid"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OutboundDialStatusPayloadEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PortalLoginSuccessEntity

```go
portalLoginSuccess := client.PortalLoginSuccess(nil)
fmt.Println(portalLoginSuccess.GetName()) // "portal_login_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client` | `map[string]any` | Yes | Customer profile returned after successful portal credential verification. |
| `email` | `string` | Yes | Portal customer email. |
| `portalApiKey` | `string` | Yes | Static portal API key associated with the customer account. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PortalLoginSuccess(nil).Create(map[string]any{
    "client": map[string]any{},
    "email": "example_email",
    "portalApiKey": "example_portalApiKey",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PortalLoginSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PreCallEntity

```go
preCall := client.PreCall(nil)
fmt.Println(preCall.GetName()) // "pre_call"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PreCall(nil).Load(map[string]any{"assistant_id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PreCallEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProviderWalletEntity

```go
providerWallet := client.ProviderWallet(nil)
fmt.Println(providerWallet.GetName()) // "provider_wallet"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `map[string]any` | Yes | Values of the fields declared by the catalog entry |
| `credential` | `map[string]any` | Yes | A credential saved by the customer. |
| `data` | `map[string]any` | Yes |  |
| `engine` | `string` | Yes | Engine code selected from the provider-wallet catalog. |
| `id` | `string` | No |  |
| `isActive` | `bool` | No | Whether the saved credential can be used by assistant runtimes. |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | No |  |
| `name` | `string` | Yes | Customer-defined name for the saved credential. |
| `provider` | `string` | Yes | Provider code selected from the provider-wallet catalog. |
| `requestId` | `string` | Yes |  |
| `serviceType` | `string` | Yes | Service category selected from the provider-wallet catalog. |
| `success` | `bool` | Yes |  |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `config` | - | - | Yes | - |
| `credential` | - | - | - | - |
| `data` | - | - | - | - |
| `engine` | - | - | - | - |
| `id` | - | - | - | - |
| `isActive` | - | - | - | - |
| `message` | - | - | - | - |
| `meta` | - | - | - | - |
| `name` | - | - | Yes | - |
| `provider` | - | - | - | - |
| `requestId` | - | - | - | - |
| `serviceType` | - | - | - | - |
| `success` | - | - | - | - |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ProviderWallet(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ProviderWallet(nil).Create(map[string]any{
    "config": map[string]any{},
    "credential": map[string]any{},
    "data": map[string]any{},
    "engine": "example_engine",
    "message": "example_message",
    "name": "example_name",
    "provider": "example_provider",
    "requestId": "example_requestId",
    "serviceType": "example_serviceType",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ProviderWallet(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ProviderWallet(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProviderWalletEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProviderWalletAssociationsSuccessEntity

```go
providerWalletAssociationsSuccess := client.ProviderWalletAssociationsSuccess(nil)
fmt.Println(providerWalletAssociationsSuccess.GetName()) // "provider_wallet_associations_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | No |  |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ProviderWalletAssociationsSuccess(nil).Load(map[string]any{"assistant_id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProviderWalletAssociationsSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProviderWalletCatalogSuccessEntity

```go
providerWalletCatalogSuccess := client.ProviderWalletCatalogSuccess(nil)
fmt.Println(providerWalletCatalogSuccess.GetName()) // "provider_wallet_catalog_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | No |  |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ProviderWalletCatalogSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProviderWalletCatalogSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PublicRagSearchSuccessEntity

```go
publicRagSearchSuccess := client.PublicRagSearchSuccess(nil)
fmt.Println(publicRagSearchSuccess.GetName()) // "public_rag_search_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | Yes | Number of chunks returned by the search, up to the service limit of 4. |
| `query` | `string` | Yes | Normalized query text used for the search. |
| `rag_id` | `string` | Yes | Public RAG identifier supplied in the request and returned unchanged on success. |
| `results` | `[]any` | Yes | Chunks returned by the vector search. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PublicRagSearchSuccess(nil).Create(map[string]any{
    "count": 1,
    "query": "example_query",
    "rag_id": "example_rag_id",
    "results": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PublicRagSearchSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RagCollectionDeleteSuccessEntity

```go
ragCollectionDeleteSuccess := client.RagCollectionDeleteSuccess(nil)
fmt.Println(ragCollectionDeleteSuccess.GetName()) // "rag_collection_delete_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `description` | `string` | No | Value supplied for `description` in the `RagCollectionCreateRequest` request. |
| `maxChunkSize` | `int` | No | Value supplied for `maxChunkSize` in the `RagCollectionCreateRequest` request. |
| `maxChunksPerFile` | `int` | No | Value supplied for `maxChunksPerFile` in the `RagCollectionCreateRequest` request. |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes | Collection metadata. |
| `name` | `string` | Yes | Value supplied for `name` in the `RagCollectionCreateRequest` request. |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RagCollectionDeleteSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.RagCollectionDeleteSuccess(nil).Create(map[string]any{
    "data": map[string]any{},
    "message": "example_message",
    "meta": map[string]any{},
    "name": "example_name",
    "requestId": "example_requestId",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.RagCollectionDeleteSuccess(nil).Remove(map[string]any{"rag_id": "rag_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RagCollectionDeleteSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RagCollectionDocumentDeleteSuccessEntity

```go
ragCollectionDocumentDeleteSuccess := client.RagCollectionDocumentDeleteSuccess(nil)
fmt.Println(ragCollectionDocumentDeleteSuccess.GetName()) // "rag_collection_document_delete_success"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.RagCollectionDocumentDeleteSuccess(nil).Remove(map[string]any{"collection_id": "collection_id", "file_name": "file_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RagCollectionDocumentDeleteSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RagCollectionDocumentListSuccessEntity

```go
ragCollectionDocumentListSuccess := client.RagCollectionDocumentListSuccess(nil)
fmt.Println(ragCollectionDocumentListSuccess.GetName()) // "rag_collection_document_list_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes | Collection metadata. |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RagCollectionDocumentListSuccess(nil).Load(map[string]any{"collection_id": "collection_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RagCollectionDocumentListSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RagCollectionDocumentTokenEstimateSuccessEntity

```go
ragCollectionDocumentTokenEstimateSuccess := client.RagCollectionDocumentTokenEstimateSuccess(nil)
fmt.Println(ragCollectionDocumentTokenEstimateSuccess.GetName()) // "rag_collection_document_token_estimate_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `estimatedCost` | `float64` | Yes |  |
| `fileCount` | `int` | Yes |  |
| `fileDetails` | `[]any` | Yes |  |
| `processingTime` | `int` | Yes |  |
| `raw` | `map[string]any` | Yes |  |
| `totalTokens` | `int` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.RagCollectionDocumentTokenEstimateSuccess(nil).Create(map[string]any{
    "estimatedCost": 1,
    "fileCount": 1,
    "fileDetails": []any{},
    "processingTime": 1,
    "raw": map[string]any{},
    "totalTokens": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RagCollectionDocumentTokenEstimateSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RagCollectionDocumentUploadStatusSuccessEntity

```go
ragCollectionDocumentUploadStatusSuccess := client.RagCollectionDocumentUploadStatusSuccess(nil)
fmt.Println(ragCollectionDocumentUploadStatusSuccess.GetName()) // "rag_collection_document_upload_status_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `currentFile` | `string` | Yes |  |
| `errors` | `[]any` | Yes |  |
| `processedFiles` | `int` | Yes |  |
| `progress` | `float64` | Yes |  |
| `raw` | `map[string]any` | Yes |  |
| `results` | `[]any` | Yes |  |
| `status` | `string` | Yes |  |
| `totalCost` | `float64` | Yes |  |
| `totalFiles` | `int` | Yes |  |
| `totalTokens` | `int` | Yes |  |
| `uploadId` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RagCollectionDocumentUploadStatusSuccess(nil).Load(map[string]any{"upload_id": "upload_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RagCollectionDocumentUploadStatusSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RagCollectionDocumentUploadSuccessEntity

```go
ragCollectionDocumentUploadSuccess := client.RagCollectionDocumentUploadSuccess(nil)
fmt.Println(ragCollectionDocumentUploadSuccess.GetName()) // "rag_collection_document_upload_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes | Result returned after starting a RAG document upload. |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes | Collection metadata. |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.RagCollectionDocumentUploadSuccess(nil).Create(map[string]any{
    "collection_id": "example_collection_id",
    "data": map[string]any{},
    "message": "example_message",
    "meta": map[string]any{},
    "requestId": "example_requestId",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RagCollectionDocumentUploadSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RuntimeBindingEntity

```go
runtimeBinding := client.RuntimeBinding(nil)
fmt.Println(runtimeBinding.GetName()) // "runtime_binding"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantApiKey` | `string` | Yes |  |
| `assistantId` | `string` | Yes |  |
| `runtimeBindings` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RuntimeBinding(nil).Load(map[string]any{"assistant_id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RuntimeBindingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TtsEntity

```go
tts := client.Tts(nil)
fmt.Println(tts.GetName()) // "tts"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes | Collection metadata. |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Tts(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TtsEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TtsVoiceListSuccessEntity

```go
ttsVoiceListSuccess := client.TtsVoiceListSuccess(nil)
fmt.Println(ttsVoiceListSuccess.GetName()) // "tts_voice_list_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes | Collection metadata. |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TtsVoiceListSuccess(nil).Load(map[string]any{"assistant_id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TtsVoiceListSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## VoiceEntity

```go
voice := client.Voice(nil)
fmt.Println(voice.GetName()) // "voice"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes | Collection metadata. |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Voice(nil).Load(map[string]any{"model_code": "model_code"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `VoiceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## VoiceLlmEntity

```go
voiceLlm := client.VoiceLlm(nil)
fmt.Println(voiceLlm.GetName()) // "voice_llm"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes | Collection metadata. |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.VoiceLlm(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `VoiceLlmEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## VoiceLlmModelListSuccessEntity

```go
voiceLlmModelListSuccess := client.VoiceLlmModelListSuccess(nil)
fmt.Println(voiceLlmModelListSuccess.GetName()) // "voice_llm_model_list_success"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `map[string]any` | Yes | Collection metadata. |
| `requestId` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.VoiceLlmModelListSuccess(nil).Load(map[string]any{"provider": "provider"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `VoiceLlmModelListSuccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```go
client := sdk.NewAi4callSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

