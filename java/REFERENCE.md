# Ai4call Java SDK Reference

Complete API reference for the Ai4call Java SDK.


## Ai4callSDK

### Constructor

```java
Ai4callSDK client = new Ai4callSDK(options);
```

Create a new SDK client instance. `options` is a `Map<String, Object>`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Map` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Map` | Custom headers for all requests. |
| `options["feature"]` | `Map` | Feature configuration. |
| `options["system"]` | `Map` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Ai4callSDK.testSDK(testopts, sdkopts)`

Create a test client with mock features active. Both arguments may be `null`.

```java
Ai4callSDK client = Ai4callSDK.testSDK(null, null);
```


### Instance Methods

#### `accountAllowedIpsSuccess(entopts)`

Create a new `AccountAllowedIpsSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `accountAvailablePluginsSuccess(entopts)`

Create a new `AccountAvailablePluginsSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `accountCallLimitsSuccess(entopts)`

Create a new `AccountCallLimitsSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `accountNumberRoutingSuccess(entopts)`

Create a new `AccountNumberRoutingSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `accountPluginConfigurationSuccess(entopts)`

Create a new `AccountPluginConfigurationSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `accountPluginInstanceSuccess(entopts)`

Create a new `AccountPluginInstanceSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `accountPluginPurchaseSuccess(entopts)`

Create a new `AccountPluginPurchaseSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `analyticsCallsOutboundSuccess(entopts)`

Create a new `AnalyticsCallsOutboundSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `analyticsCallsSuccess(entopts)`

Create a new `AnalyticsCallsSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `analyticsPostCallSuccess(entopts)`

Create a new `AnalyticsPostCallSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `analyticsPreCallSuccess(entopts)`

Create a new `AnalyticsPreCallSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `analyticsRagSearchSuccess(entopts)`

Create a new `AnalyticsRagSearchSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `analyticsRagSuccess(entopts)`

Create a new `AnalyticsRagSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `analyticsRechargesSuccess(entopts)`

Create a new `AnalyticsRechargesSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `analyticsSmsSuccess(entopts)`

Create a new `AnalyticsSmsSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `analyticsToolResponsesSuccess(entopts)`

Create a new `AnalyticsToolResponsesSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `asr(entopts)`

Create a new `Asr` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `asrModelListSuccess(entopts)`

Create a new `AsrModelListSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `assistant(entopts)`

Create a new `Assistant` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `assistantAdvancedSettingsConfigurationSuccess(entopts)`

Create a new `AssistantAdvancedSettingsConfigurationSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `assistantAdvancedSettingsRuntimeUpdateSuccess(entopts)`

Create a new `AssistantAdvancedSettingsRuntimeUpdateSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `assistantAsrRuntimeUpdateSuccess(entopts)`

Create a new `AssistantAsrRuntimeUpdateSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `assistantConversationWebhookRuntimeSuccess(entopts)`

Create a new `AssistantConversationWebhookRuntimeSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `assistantDtmfConfigurationSuccess(entopts)`

Create a new `AssistantDtmfConfigurationSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `assistantDtmfRuntimeUpdateSuccess(entopts)`

Create a new `AssistantDtmfRuntimeUpdateSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `assistantHangupConfigurationSuccess(entopts)`

Create a new `AssistantHangupConfigurationSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `assistantHangupRuntimeUpdateSuccess(entopts)`

Create a new `AssistantHangupRuntimeUpdateSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `assistantHangupSchemaRuntimeSuccess(entopts)`

Create a new `AssistantHangupSchemaRuntimeSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `assistantKnowledgeSuccess(entopts)`

Create a new `AssistantKnowledgeSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `assistantLlmRuntimeUpdateSuccess(entopts)`

Create a new `AssistantLlmRuntimeUpdateSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `assistantNumberRoutingCatalogSuccess(entopts)`

Create a new `AssistantNumberRoutingCatalogSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `assistantNumberRoutingRuntimeSuccess(entopts)`

Create a new `AssistantNumberRoutingRuntimeSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `assistantPostcallMcpRuntimeSuccess(entopts)`

Create a new `AssistantPostcallMcpRuntimeSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `assistantPrecallMcpRuntimeSuccess(entopts)`

Create a new `AssistantPrecallMcpRuntimeSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `assistantPrecallValidationRuntimeSuccess(entopts)`

Create a new `AssistantPrecallValidationRuntimeSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `assistantPromptSuccess(entopts)`

Create a new `AssistantPromptSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `assistantRagConfigurationSuccess(entopts)`

Create a new `AssistantRagConfigurationSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `assistantRagRuntimeUpdateSuccess(entopts)`

Create a new `AssistantRagRuntimeUpdateSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `assistantSaveConversationRuntimeSuccess(entopts)`

Create a new `AssistantSaveConversationRuntimeSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `assistantSettingsConfigurationSuccess(entopts)`

Create a new `AssistantSettingsConfigurationSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `assistantSettingsRuntimeUpdateSuccess(entopts)`

Create a new `AssistantSettingsRuntimeUpdateSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `assistantToolsRuntimeUpdateSuccess(entopts)`

Create a new `AssistantToolsRuntimeUpdateSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `assistantTtsRuntimeUpdateSuccess(entopts)`

Create a new `AssistantTtsRuntimeUpdateSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `assistantVoiceToVoiceRuntimeUpdateSuccess(entopts)`

Create a new `AssistantVoiceToVoiceRuntimeUpdateSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `associatedRuntimeToolListSuccess(entopts)`

Create a new `AssociatedRuntimeToolListSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `audioToAudio(entopts)`

Create a new `AudioToAudio` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `availableRuntimeToolListSuccess(entopts)`

Create a new `AvailableRuntimeToolListSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `fillerPhraseList(entopts)`

Create a new `FillerPhraseList` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `health(entopts)`

Create a new `Health` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `knowledge(entopts)`

Create a new `Knowledge` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `llm(entopts)`

Create a new `Llm` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `llmModelListSuccess(entopts)`

Create a new `LlmModelListSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `outboundCall(entopts)`

Create a new `OutboundCall` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `outboundCallAcceptedSuccess(entopts)`

Create a new `OutboundCallAcceptedSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `outboundDialStatusPayload(entopts)`

Create a new `OutboundDialStatusPayload` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `portalLoginSuccess(entopts)`

Create a new `PortalLoginSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `preCall(entopts)`

Create a new `PreCall` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `providerWallet(entopts)`

Create a new `ProviderWallet` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `providerWalletAssociationsSuccess(entopts)`

Create a new `ProviderWalletAssociationsSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `providerWalletCatalogSuccess(entopts)`

Create a new `ProviderWalletCatalogSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `publicRagSearchSuccess(entopts)`

Create a new `PublicRagSearchSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `ragCollectionDeleteSuccess(entopts)`

Create a new `RagCollectionDeleteSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `ragCollectionDocumentDeleteSuccess(entopts)`

Create a new `RagCollectionDocumentDeleteSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `ragCollectionDocumentListSuccess(entopts)`

Create a new `RagCollectionDocumentListSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `ragCollectionDocumentTokenEstimateSuccess(entopts)`

Create a new `RagCollectionDocumentTokenEstimateSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `ragCollectionDocumentUploadStatusSuccess(entopts)`

Create a new `RagCollectionDocumentUploadStatusSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `ragCollectionDocumentUploadSuccess(entopts)`

Create a new `RagCollectionDocumentUploadSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `runtimeBinding(entopts)`

Create a new `RuntimeBinding` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `tts(entopts)`

Create a new `Tts` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `ttsVoiceListSuccess(entopts)`

Create a new `TtsVoiceListSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `voice(entopts)`

Create a new `Voice` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `voiceLlm(entopts)`

Create a new `VoiceLlm` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `voiceLlmModelListSuccess(entopts)`

Create a new `VoiceLlmModelListSuccess` entity instance (returns `SdkEntity`). Pass
`null` for no initial options.

#### `optionsMap() -> Map`

Return a deep copy of the current SDK options.

#### `getUtility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> Map`

Make a direct HTTP request to any API endpoint. Returns a result
`Map<String, Object>` with `ok`, `status`, `headers`, and `data` (or
`err` on failure). This escape hatch never raises — branch on
`result.get("ok")`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Map` | Path parameter values. |
| `fetchargs["query"]` | `Map` | Query string parameters. |
| `fetchargs["headers"]` | `Map` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `Object` | Request body (maps are JSON-serialized). |

**Returns:** `Map<String, Object>`

#### `prepare(fetchargs) -> Map`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AccountAllowedIpsSuccess

```java
SdkEntity accountAllowedIpsSuccess = client.accountAllowedIpsSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `addIps` | `List<Object>` | No | Value supplied for `addIps` in the `AccountAllowedIpsUpdateRequest` request. |
| `allowedIps` | `List<Object>` | No | Value supplied for `allowedIps` in the `AccountAllowedIpsUpdateRequest` request. |
| `data` | `Map<String, Object>` | Yes |  |
| `deleteIps` | `List<Object>` | No | Value supplied for `deleteIps` in the `AccountAllowedIpsUpdateRequest` request. |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes |  |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.accountAllowedIpsSuccess(null).load(null, null);
```

#### `update(reqdata, ctrl) -> Object`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```java
Object result = client.accountAllowedIpsSuccess(null).update(Map.of(
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountAllowedIpsSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AccountAvailablePluginsSuccess

```java
SdkEntity accountAvailablePluginsSuccess = client.accountAvailablePluginsSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes |  |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes |  |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.accountAvailablePluginsSuccess(null).load(null, null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountAvailablePluginsSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AccountCallLimitsSuccess

```java
SdkEntity accountCallLimitsSuccess = client.accountCallLimitsSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistants` | `List<Object>` | Yes | Value supplied for `assistants` in the `AccountCallLimitsUpdateRequest` request. |
| `data` | `Map<String, Object>` | Yes |  |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes |  |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.accountCallLimitsSuccess(null).load(null, null);
```

#### `update(reqdata, ctrl) -> Object`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```java
Object result = client.accountCallLimitsSuccess(null).update(Map.of(
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountCallLimitsSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AccountNumberRoutingSuccess

```java
SdkEntity accountNumberRoutingSuccess = client.accountNumberRoutingSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes |  |
| `demoNumbers` | `List<Object>` | No | Value supplied for `demoNumbers` in the `AccountNumberRoutingUpdateRequest` request. |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes |  |
| `purchasedNumbers` | `List<Object>` | No | Value supplied for `purchasedNumbers` in the `AccountNumberRoutingUpdateRequest` request. |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |
| `userNumbers` | `List<Object>` | No | Value supplied for `userNumbers` in the `AccountNumberRoutingUpdateRequest` request. |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.accountNumberRoutingSuccess(null).load(null, null);
```

#### `update(reqdata, ctrl) -> Object`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```java
Object result = client.accountNumberRoutingSuccess(null).update(Map.of(
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountNumberRoutingSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AccountPluginConfigurationSuccess

```java
SdkEntity accountPluginConfigurationSuccess = client.accountPluginConfigurationSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `Map<String, Object>` | Yes | Configuration contract and current values for one plugin instance. |
| `instanceName` | `String` | No | Value supplied for `instanceName` in the `AccountPluginConfigurationUpdateRequest` request. |
| `instance_name` | `String` | No | Legacy alias of `instanceName`. |
| `pluginName` | `String` | No | Value supplied for `pluginName` in the `AccountPluginConfigurationUpdateRequest` request. |
| `plugin_name` | `String` | No | Legacy alias of `pluginName`. |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.accountPluginConfigurationSuccess(null).load(null, null);
```

#### `update(reqdata, ctrl) -> Object`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```java
Object result = client.accountPluginConfigurationSuccess(null).update(Map.of(
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountPluginConfigurationSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AccountPluginInstanceSuccess

```java
SdkEntity accountPluginInstanceSuccess = client.accountPluginInstanceSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `Map<String, Object>` | Yes | Current lifecycle information for one purchased plugin instance. |
| `data` | `Map<String, Object>` | Yes |  |
| `instanceName` | `String` | No | Value supplied for `instanceName` in the `AccountPluginPurchaseRequest` request. |
| `instance_name` | `String` | No | Legacy alias of `instanceName`. |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes |  |
| `newInstanceName` | `String` | No | Value supplied for `newInstanceName` in the `AccountPluginInstanceByIdUpdateRequest` request. |
| `new_instance_name` | `String` | No | Legacy alias of `newInstanceName`. |
| `pluginName` | `String` | No | Value supplied for `pluginName` in the `AccountPluginPurchaseRequest` request. |
| `plugin_name` | `String` | No | Legacy alias of `pluginName`. |
| `requestId` | `String` | Yes |  |
| `status` | `String` | No | Value supplied for `status` in the `AccountPluginInstanceUpdateRequest` request. |
| `success` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> Object`

Create a new entity with the given data. Returns the created entity data and raises on error.

```java
Object result = client.accountPluginInstanceSuccess(null).create(Map.of(
    "configuration", Map.of(),  // Map<String, Object>
    "data", Map.of(),  // Map<String, Object>
    "message", "example_message",  // String
    "meta", Map.of(),  // Map<String, Object>
    "requestId", "example_requestId",  // String
    "success", true  // Boolean
), null);
```

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.accountPluginInstanceSuccess(null).load(null, null);
```

#### `remove(reqmatch, ctrl) -> Object`

Remove the entity matching the given criteria. Raises on error.

```java
Object result = client.accountPluginInstanceSuccess(null).remove(Map.of("instance_id", "instance_id"), null);
```

#### `update(reqdata, ctrl) -> Object`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```java
Object result = client.accountPluginInstanceSuccess(null).update(Map.of(
    "instance_id", "instance_id"
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountPluginInstanceSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AccountPluginPurchaseSuccess

```java
SdkEntity accountPluginPurchaseSuccess = client.accountPluginPurchaseSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `Map<String, Object>` | Yes | Result of a plugin purchase, including charged prices and created instance data. |
| `instanceName` | `String` | No | Value supplied for `instanceName` in the `AccountPluginPurchaseRequest` request. |
| `instance_name` | `String` | No | Legacy alias of `instanceName`. |
| `pluginName` | `String` | No | Value supplied for `pluginName` in the `AccountPluginPurchaseRequest` request. |
| `plugin_name` | `String` | No | Legacy alias of `pluginName`. |

### Operations

#### `update(reqdata, ctrl) -> Object`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```java
Object result = client.accountPluginPurchaseSuccess(null).update(Map.of(
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountPluginPurchaseSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AnalyticsCallsOutboundSuccess

```java
SdkEntity analyticsCallsOutboundSuccess = client.analyticsCallsOutboundSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes |  |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes |  |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.analyticsCallsOutboundSuccess(null).load(null, null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AnalyticsCallsOutboundSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AnalyticsCallsSuccess

```java
SdkEntity analyticsCallsSuccess = client.analyticsCallsSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes |  |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes |  |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.analyticsCallsSuccess(null).load(null, null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AnalyticsCallsSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AnalyticsPostCallSuccess

```java
SdkEntity analyticsPostCallSuccess = client.analyticsPostCallSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes |  |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes |  |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.analyticsPostCallSuccess(null).load(null, null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AnalyticsPostCallSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AnalyticsPreCallSuccess

```java
SdkEntity analyticsPreCallSuccess = client.analyticsPreCallSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes |  |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes |  |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.analyticsPreCallSuccess(null).load(null, null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AnalyticsPreCallSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AnalyticsRagSearchSuccess

```java
SdkEntity analyticsRagSearchSuccess = client.analyticsRagSearchSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes |  |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes |  |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.analyticsRagSearchSuccess(null).load(null, null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AnalyticsRagSearchSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AnalyticsRagSuccess

```java
SdkEntity analyticsRagSuccess = client.analyticsRagSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes |  |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes |  |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.analyticsRagSuccess(null).load(null, null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AnalyticsRagSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AnalyticsRechargesSuccess

```java
SdkEntity analyticsRechargesSuccess = client.analyticsRechargesSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes |  |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes |  |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.analyticsRechargesSuccess(null).load(null, null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AnalyticsRechargesSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AnalyticsSmsSuccess

```java
SdkEntity analyticsSmsSuccess = client.analyticsSmsSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes |  |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes |  |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.analyticsSmsSuccess(null).load(null, null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AnalyticsSmsSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AnalyticsToolResponsesSuccess

```java
SdkEntity analyticsToolResponsesSuccess = client.analyticsToolResponsesSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes |  |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes |  |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.analyticsToolResponsesSuccess(null).load(null, null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AnalyticsToolResponsesSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## Asr

```java
SdkEntity asr = client.asr(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes |  |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes | Collection metadata. |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.asr(null).load(null, null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `Asr` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AsrModelListSuccess

```java
SdkEntity asrModelListSuccess = client.asrModelListSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes |  |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes | Collection metadata. |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.asrModelListSuccess(null).load(Map.of("assistant_id", "assistant_id"), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AsrModelListSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## Assistant

```java
SdkEntity assistant = client.assistant(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistant` | `Object` | Yes | Assistant detail response, including the legacy assistant API key during the v1 compatibility period. |
| `audioToAudio` | `Object` | No | Initial audio-to-audio configuration, used when applicable to the selected mode. |
| `data` | `Map<String, Object>` | Yes |  |
| `description` | `String` | Yes | Functional description of the assistant. |
| `firstMessage` | `Map<String, Object>` | No | Partial update of the assistant's first-message configuration. |
| `id` | `String` | No |  |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes | Collection metadata. |
| `metadata` | `Map<String, Object>` | No | Free-form metadata to store with the assistant. |
| `mode` | `String` | No | Runtime mode to use when creating the assistant. |
| `name` | `String` | Yes | Assistant name. |
| `network` | `Map<String, Object>` | No | Network settings to update on the assistant. |
| `numbers` | `Map<String, Object>` | No | Replacement values for assistant number lists when supplied. |
| `requestId` | `String` | Yes |  |
| `settings` | `Map<String, Object>` | No | High-level assistant settings to update. |
| `status` | `String` | No | New lifecycle status for the assistant. |
| `success` | `Boolean` | Yes |  |
| `voiceToVoice` | `Map<String, Object>` | No | Legacy alias of `audioToAudio`. |

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

#### `create(reqdata, ctrl) -> Object`

Create a new entity with the given data. Returns the created entity data and raises on error.

```java
Object result = client.assistant(null).create(Map.of(
    "assistant", "example_assistant",  // Object
    "data", Map.of(),  // Map<String, Object>
    "description", "example_description",  // String
    "message", "example_message",  // String
    "meta", Map.of(),  // Map<String, Object>
    "name", "example_name",  // String
    "requestId", "example_requestId",  // String
    "success", true  // Boolean
), null);
```

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.assistant(null).load(Map.of("id", "assistant_id"), null);
```

#### `remove(reqmatch, ctrl) -> Object`

Remove the entity matching the given criteria. Raises on error.

```java
Object result = client.assistant(null).remove(Map.of("id", "assistant_id"), null);
```

#### `update(reqdata, ctrl) -> Object`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```java
Object result = client.assistant(null).update(Map.of(
    "id", "assistant_id"
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `Assistant` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AssistantAdvancedSettingsConfigurationSuccess

```java
SdkEntity assistantAdvancedSettingsConfigurationSuccess = client.assistantAdvancedSettingsConfigurationSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.assistantAdvancedSettingsConfigurationSuccess(null).load(Map.of("id", "assistant_advanced_settings_configuration_success_id"), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AssistantAdvancedSettingsConfigurationSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AssistantAdvancedSettingsRuntimeUpdateSuccess

```java
SdkEntity assistantAdvancedSettingsRuntimeUpdateSuccess = client.assistantAdvancedSettingsRuntimeUpdateSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantApiKey` | `String` | Yes |  |
| `assistantId` | `String` | Yes |  |
| `configuration` | `Map<String, Object>` | Yes |  |
| `freqPenalty` | `Double` | No | Value supplied for `freqPenalty` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `maxTokens` | `Long` | No | Value supplied for `maxTokens` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `presencePenalty` | `Double` | No | Value supplied for `presencePenalty` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `service` | `String` | Yes |  |
| `stopSequences` | `List<Object>` | No | Value supplied for `stopSequences` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `temperature` | `Double` | No | Value supplied for `temperature` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `topK` | `Long` | No | Value supplied for `topK` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `topP` | `Double` | No | Value supplied for `topP` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |

### Operations

#### `update(reqdata, ctrl) -> Object`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```java
Object result = client.assistantAdvancedSettingsRuntimeUpdateSuccess(null).update(Map.of(
    "assistant_id", "assistant_id"
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AssistantAdvancedSettingsRuntimeUpdateSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AssistantAsrRuntimeUpdateSuccess

```java
SdkEntity assistantAsrRuntimeUpdateSuccess = client.assistantAsrRuntimeUpdateSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `String` | No | API key of the customer's ASR provider. |
| `assistantApiKey` | `String` | Yes |  |
| `assistantId` | `String` | Yes |  |
| `configuration` | `Map<String, Object>` | Yes | Actual resulting ASR runtime configuration after merge and backend resolution. |
| `engineCode` | `String` | No | ASR engine/provider code. |
| `providerWalletId` | `Long` | No | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `runtimeBinding` | `Map<String, Object>` | Yes |  |
| `service` | `String` | Yes |  |
| `sourceMode` | `String` | Yes | Runtime sourcing mode. |

### Operations

#### `update(reqdata, ctrl) -> Object`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```java
Object result = client.assistantAsrRuntimeUpdateSuccess(null).update(Map.of(
    "assistant_id", "assistant_id"
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AssistantAsrRuntimeUpdateSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AssistantConversationWebhookRuntimeSuccess

```java
SdkEntity assistantConversationWebhookRuntimeSuccess = client.assistantConversationWebhookRuntimeSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authName` | `String` | No | Name of the saved authentication to apply to the request |
| `configuration` | `Map<String, Object>` | Yes |  |
| `enabled` | `Boolean` | No | Enable or disable sending the conversation to the webhook |
| `url` | `String` | No | Endpoint that receives the POST at the end of the call |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.assistantConversationWebhookRuntimeSuccess(null).load(Map.of("assistant_id", "assistant_id"), null);
```

#### `update(reqdata, ctrl) -> Object`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```java
Object result = client.assistantConversationWebhookRuntimeSuccess(null).update(Map.of(
    "assistant_id", "assistant_id"
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AssistantConversationWebhookRuntimeSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AssistantDtmfConfigurationSuccess

```java
SdkEntity assistantDtmfConfigurationSuccess = client.assistantDtmfConfigurationSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.assistantDtmfConfigurationSuccess(null).load(Map.of("id", "assistant_dtmf_configuration_success_id"), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AssistantDtmfConfigurationSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AssistantDtmfRuntimeUpdateSuccess

```java
SdkEntity assistantDtmfRuntimeUpdateSuccess = client.assistantDtmfRuntimeUpdateSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acceptTimeout` | `Long` | No | Value supplied for `acceptTimeout` in the `AssistantDtmfRuntimeUpdateRequest` request. |
| `assistantApiKey` | `String` | Yes |  |
| `assistantId` | `String` | Yes |  |
| `configuration` | `Map<String, Object>` | Yes |  |
| `enabled` | `Boolean` | No | Enable or disable DTMF reception. |
| `maxLength` | `Long` | No | Value supplied for `maxLength` in the `AssistantDtmfRuntimeUpdateRequest` request. |
| `minLength` | `Long` | No | Value supplied for `minLength` in the `AssistantDtmfRuntimeUpdateRequest` request. |
| `playEnabled` | `Boolean` | No | Enable or disable DTMF sending during the call. |
| `service` | `String` | Yes |  |
| `terminationChars` | `String` | No | Value supplied for `terminationChars` in the `AssistantDtmfRuntimeUpdateRequest` request. |

### Operations

#### `update(reqdata, ctrl) -> Object`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```java
Object result = client.assistantDtmfRuntimeUpdateSuccess(null).update(Map.of(
    "assistant_id", "assistant_id"
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AssistantDtmfRuntimeUpdateSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AssistantHangupConfigurationSuccess

```java
SdkEntity assistantHangupConfigurationSuccess = client.assistantHangupConfigurationSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.assistantHangupConfigurationSuccess(null).load(Map.of("id", "assistant_hangup_configuration_success_id"), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AssistantHangupConfigurationSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AssistantHangupRuntimeUpdateSuccess

```java
SdkEntity assistantHangupRuntimeUpdateSuccess = client.assistantHangupRuntimeUpdateSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantApiKey` | `String` | Yes |  |
| `assistantId` | `String` | Yes |  |
| `availableAgents` | `List<Object>` | No | Value supplied for `availableAgents` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `configuration` | `Map<String, Object>` | Yes |  |
| `enableHangup` | `Boolean` | No | Value supplied for `enableHangup` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `enableRedirect` | `Boolean` | No | Value supplied for `enableRedirect` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `enableTransferAgent` | `Boolean` | No | Value supplied for `enableTransferAgent` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `service` | `String` | Yes |  |
| `transferAgentNotificationText` | `String` | No | Value supplied for `transferAgentNotificationText` in the `AssistantHangupRuntimeUpdateRequest` request. |

### Operations

#### `update(reqdata, ctrl) -> Object`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```java
Object result = client.assistantHangupRuntimeUpdateSuccess(null).update(Map.of(
    "assistant_id", "assistant_id"
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AssistantHangupRuntimeUpdateSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AssistantHangupSchemaRuntimeSuccess

```java
SdkEntity assistantHangupSchemaRuntimeSuccess = client.assistantHangupSchemaRuntimeSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `Map<String, Object>` | Yes |  |
| `hangupUrl` | `String` | No | Hangup webhook URL (null to remove) |
| `schema` | `List<Object>` | No | Defining body fields (overrides the current schema) |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.assistantHangupSchemaRuntimeSuccess(null).load(Map.of("assistant_id", "assistant_id"), null);
```

#### `update(reqdata, ctrl) -> Object`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```java
Object result = client.assistantHangupSchemaRuntimeSuccess(null).update(Map.of(
    "assistant_id", "assistant_id"
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AssistantHangupSchemaRuntimeSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AssistantKnowledgeSuccess

```java
SdkEntity assistantKnowledgeSuccess = client.assistantKnowledgeSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.assistantKnowledgeSuccess(null).load(Map.of("id", "assistant_knowledge_success_id"), null);
```

#### `update(reqdata, ctrl) -> Object`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```java
Object result = client.assistantKnowledgeSuccess(null).update(Map.of(
    "id", "assistant_knowledge_success_id"
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AssistantKnowledgeSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AssistantLlmRuntimeUpdateSuccess

```java
SdkEntity assistantLlmRuntimeUpdateSuccess = client.assistantLlmRuntimeUpdateSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `String` | No | API key of the customer's LLM provider. |
| `assistantApiKey` | `String` | Yes |  |
| `assistantId` | `String` | Yes |  |
| `baseUrl` | `String` | No | Base custom URL of the LLM provider. |
| `configuration` | `Map<String, Object>` | Yes | Actual resulting LLM runtime configuration after merge and backend resolution. |
| `engineCode` | `String` | No | LLM engine/provider code. |
| `modelCode` | `String` | No | LLM model code. |
| `providerWalletId` | `Long` | No | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `runtimeBinding` | `Map<String, Object>` | Yes |  |
| `service` | `String` | Yes |  |
| `sourceMode` | `String` | Yes | Runtime sourcing mode. |

### Operations

#### `update(reqdata, ctrl) -> Object`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```java
Object result = client.assistantLlmRuntimeUpdateSuccess(null).update(Map.of(
    "assistant_id", "assistant_id"
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AssistantLlmRuntimeUpdateSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AssistantNumberRoutingCatalogSuccess

```java
SdkEntity assistantNumberRoutingCatalogSuccess = client.assistantNumberRoutingCatalogSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.assistantNumberRoutingCatalogSuccess(null).load(Map.of("id", "assistant_number_routing_catalog_success_id"), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AssistantNumberRoutingCatalogSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AssistantNumberRoutingRuntimeSuccess

```java
SdkEntity assistantNumberRoutingRuntimeSuccess = client.assistantNumberRoutingRuntimeSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `Map<String, Object>` | Yes |  |
| `demoNumbers` | `List<Object>` | No | Demo numbers to route to this assistant |
| `purchasedNumbers` | `List<Object>` | No | Purchased numbers to route to this assistant |
| `userNumbers` | `List<Object>` | No | Customer's own numbers (own PBX) to route to this assistant |

### Operations

#### `update(reqdata, ctrl) -> Object`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```java
Object result = client.assistantNumberRoutingRuntimeSuccess(null).update(Map.of(
    "assistant_id", "assistant_id"
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AssistantNumberRoutingRuntimeSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AssistantPostcallMcpRuntimeSuccess

```java
SdkEntity assistantPostcallMcpRuntimeSuccess = client.assistantPostcallMcpRuntimeSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `Map<String, Object>` | Yes | General configuration of the post-call phase. |
| `enabled` | `Boolean` | No | Enable or disable the whole post-call phase without losing its configuration. |
| `globalPrompt` | `String` | No | Global post-call prompt. |
| `modelConfig` | `Map<String, Object>` | Yes | Model configuration used by the MCP phase. |
| `tools` | `List<Object>` | Yes | Complete list of post-call tools to set up. |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `configuration` | - | - |
| `enabled` | - | - |
| `globalPrompt` | - | - |
| `modelConfig` | - | - |
| `tools` | - | Yes |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.assistantPostcallMcpRuntimeSuccess(null).load(Map.of("assistant_id", "assistant_id"), null);
```

#### `update(reqdata, ctrl) -> Object`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```java
Object result = client.assistantPostcallMcpRuntimeSuccess(null).update(Map.of(
    "assistant_id", "assistant_id"
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AssistantPostcallMcpRuntimeSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AssistantPrecallMcpRuntimeSuccess

```java
SdkEntity assistantPrecallMcpRuntimeSuccess = client.assistantPrecallMcpRuntimeSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `Map<String, Object>` | Yes | General configuration of the pre-call phase. |
| `earlyTerminationEnabled` | `Boolean` | No | Enable/disable early termination. |
| `enabled` | `Boolean` | No | Enable or disable the whole pre-call phase without losing its configuration. |
| `globalPrompt` | `String` | No | Global pre-call prompt. |
| `modelConfig` | `Map<String, Object>` | Yes | Model configuration used by the MCP phase. |
| `outputSchema` | `Map<String, Object>` | No | JSON schema of the expected pre-call output, as an alternative to `outputVariables`. |
| `outputVariables` | `List<Object>` | No | Variables to extract from the pre-call result. |
| `terminationMessage` | `String` | No | Early termination audio message. |
| `tools` | `List<Object>` | Yes | Complete list of pre-call tools to set (replaces the current ones). |
| `voiceConfig` | `Map<String, Object>` | Yes | Voice/TTS configuration used to generate pre-call hold and termination audio. |
| `waitingAudioNonInterruptible` | `Boolean` | No | `true` plays all on-hold audio, `false` allows the customer to speak over the audio. |
| `waitingAudioText` | `String` | No | Audio text on hold. |

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

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.assistantPrecallMcpRuntimeSuccess(null).load(Map.of("assistant_id", "assistant_id"), null);
```

#### `update(reqdata, ctrl) -> Object`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```java
Object result = client.assistantPrecallMcpRuntimeSuccess(null).update(Map.of(
    "assistant_id", "assistant_id"
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AssistantPrecallMcpRuntimeSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AssistantPrecallValidationRuntimeSuccess

```java
SdkEntity assistantPrecallValidationRuntimeSuccess = client.assistantPrecallValidationRuntimeSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authPassword` | `String` | No | Basic auth password (null to remove it) |
| `authToken` | `String` | No | Bearer token or API key (null to remove it) |
| `authType` | `String` | No |  |
| `authUsername` | `String` | No | Value supplied for `authUsername` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `configuration` | `Object` | Yes | null if no configuration is yet present |
| `headersJson` | `Map<String, Object>` | No | Value supplied for `headersJson` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `isActive` | `Boolean` | No | Value supplied for `isActive` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `method` | `String` | No |  |
| `name` | `String` | No | Value supplied for `name` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `numberLocation` | `String` | No | Where to insert the calling number in the HTTP request: - `query` — added as a query string (e.g. |
| `numberParamName` | `String` | No | Value supplied for `numberParamName` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `timeoutMs` | `Long` | No | Value supplied for `timeoutMs` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `url` | `String` | No | Value supplied for `url` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.assistantPrecallValidationRuntimeSuccess(null).load(Map.of("assistant_id", "assistant_id"), null);
```

#### `update(reqdata, ctrl) -> Object`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```java
Object result = client.assistantPrecallValidationRuntimeSuccess(null).update(Map.of(
    "assistant_id", "assistant_id"
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AssistantPrecallValidationRuntimeSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AssistantPromptSuccess

```java
SdkEntity assistantPromptSuccess = client.assistantPromptSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.assistantPromptSuccess(null).load(Map.of("id", "assistant_prompt_success_id"), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AssistantPromptSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AssistantRagConfigurationSuccess

```java
SdkEntity assistantRagConfigurationSuccess = client.assistantRagConfigurationSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `Boolean` | Yes |  |
| `kbPrompt` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `returnedChunks` | `Long` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.assistantRagConfigurationSuccess(null).load(Map.of("assistant_id", "assistant_id"), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AssistantRagConfigurationSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AssistantRagRuntimeUpdateSuccess

```java
SdkEntity assistantRagRuntimeUpdateSuccess = client.assistantRagRuntimeUpdateSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantApiKey` | `String` | Yes |  |
| `assistantId` | `String` | Yes |  |
| `configuration` | `Map<String, Object>` | Yes | RAG configuration resulting after application merge. |
| `enabled` | `Boolean` | No | Enable or disable RAG for the assistant. |
| `kbPrompt` | `String` | No | Assistant knowledge base instructions. |
| `name` | `String` | No | Name of the RAG collection to associate. |
| `returnedChunks` | `Long` | No | Number of relevant fragments to return from the knowledge base. |
| `service` | `String` | Yes |  |

### Operations

#### `update(reqdata, ctrl) -> Object`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```java
Object result = client.assistantRagRuntimeUpdateSuccess(null).update(Map.of(
    "assistant_id", "assistant_id"
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AssistantRagRuntimeUpdateSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AssistantSaveConversationRuntimeSuccess

```java
SdkEntity assistantSaveConversationRuntimeSuccess = client.assistantSaveConversationRuntimeSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `Map<String, Object>` | Yes |  |
| `emails` | `String` | No | One or more recipient emails separated by commas (e.g. |
| `enabled` | `Boolean` | No | Enable or disable sending of the conversation summary via email |
| `smtpInstanceName` | `String` | No | Name of the SMTP plugin instance to use for sending |
| `smtp_instance_name` | `String` | No | Legacy alias of `smtpInstanceName`. |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.assistantSaveConversationRuntimeSuccess(null).load(Map.of("assistant_id", "assistant_id"), null);
```

#### `update(reqdata, ctrl) -> Object`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```java
Object result = client.assistantSaveConversationRuntimeSuccess(null).update(Map.of(
    "assistant_id", "assistant_id"
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AssistantSaveConversationRuntimeSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AssistantSettingsConfigurationSuccess

```java
SdkEntity assistantSettingsConfigurationSuccess = client.assistantSettingsConfigurationSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.assistantSettingsConfigurationSuccess(null).load(Map.of("id", "assistant_settings_configuration_success_id"), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AssistantSettingsConfigurationSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AssistantSettingsRuntimeUpdateSuccess

```java
SdkEntity assistantSettingsRuntimeUpdateSuccess = client.assistantSettingsRuntimeUpdateSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asrInitialDelayMs` | `Long` | No | Value supplied for `asrInitialDelayMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `asrSilenceMs` | `Long` | No | Value supplied for `asrSilenceMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `assistantApiKey` | `String` | Yes |  |
| `assistantId` | `String` | Yes |  |
| `callPermissions` | `Map<String, Object>` | No | Value supplied for `callPermissions` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `configuration` | `Map<String, Object>` | Yes |  |
| `dynamicTimeoutMs` | `Long` | No | Value supplied for `dynamicTimeoutMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `filler` | `Map<String, Object>` | No | Value supplied for `filler` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `maxResponseLength` | `Long` | No | Value supplied for `maxResponseLength` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `reprompt` | `Map<String, Object>` | No | Value supplied for `reprompt` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `service` | `String` | Yes |  |
| `truncateInitialAudio` | `Boolean` | No | Value supplied for `truncateInitialAudio` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `ttsInterruptionInConversation` | `Boolean` | No | Value supplied for `ttsInterruptionInConversation` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `vad` | `Boolean` | No | Value supplied for `vad` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `vadMinVoiceMs` | `Long` | No | Value supplied for `vadMinVoiceMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `vadThreshold` | `Double` | No | Value supplied for `vadThreshold` in the `AssistantSettingsRuntimeUpdateRequest` request. |

### Operations

#### `update(reqdata, ctrl) -> Object`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```java
Object result = client.assistantSettingsRuntimeUpdateSuccess(null).update(Map.of(
    "assistant_id", "assistant_id"
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AssistantSettingsRuntimeUpdateSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AssistantToolsRuntimeUpdateSuccess

```java
SdkEntity assistantToolsRuntimeUpdateSuccess = client.assistantToolsRuntimeUpdateSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantApiKey` | `String` | Yes |  |
| `assistantId` | `String` | Yes |  |
| `configuration` | `Map<String, Object>` | Yes | Resulting tool configuration after the update. |
| `service` | `String` | Yes |  |

### Operations

#### `update(reqdata, ctrl) -> Object`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```java
Object result = client.assistantToolsRuntimeUpdateSuccess(null).update(Map.of(
    "assistant_id", "assistant_id"
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AssistantToolsRuntimeUpdateSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AssistantTtsRuntimeUpdateSuccess

```java
SdkEntity assistantTtsRuntimeUpdateSuccess = client.assistantTtsRuntimeUpdateSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `String` | No | API key of the customer's TTS provider. |
| `assistantApiKey` | `String` | Yes |  |
| `assistantId` | `String` | Yes |  |
| `configuration` | `Map<String, Object>` | Yes | Actual resulting TTS runtime configuration after merge and backend resolution. |
| `engineCode` | `String` | No | TTS engine/provider code. |
| `providerWalletId` | `Long` | No | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `region` | `String` | No | Region/provider area requested by some engine customers, in particular Azure. |
| `runtimeBinding` | `Map<String, Object>` | Yes |  |
| `service` | `String` | Yes |  |
| `sourceMode` | `String` | Yes | Runtime sourcing mode. |
| `voiceCode` | `String` | No | TTS voice code. |

### Operations

#### `update(reqdata, ctrl) -> Object`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```java
Object result = client.assistantTtsRuntimeUpdateSuccess(null).update(Map.of(
    "assistant_id", "assistant_id"
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AssistantTtsRuntimeUpdateSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AssistantVoiceToVoiceRuntimeUpdateSuccess

```java
SdkEntity assistantVoiceToVoiceRuntimeUpdateSuccess = client.assistantVoiceToVoiceRuntimeUpdateSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `String` | No | Customer key provider API. |
| `assistantApiKey` | `String` | Yes |  |
| `assistantId` | `String` | Yes |  |
| `baseUrl` | `String` | No | Base custom URL. |
| `configuration` | `Map<String, Object>` | Yes |  |
| `engineCode` | `String` | No | Provider/engine voice LLM. |
| `modelCode` | `String` | No | LLM voice model code. |
| `prompt` | `String` | No | Main prompt of the audio-to-audio runtime. |
| `providerWalletId` | `Long` | No | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `service` | `String` | Yes |  |
| `voiceCode` | `String` | No | Model item code. |

### Operations

#### `update(reqdata, ctrl) -> Object`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```java
Object result = client.assistantVoiceToVoiceRuntimeUpdateSuccess(null).update(Map.of(
    "assistant_id", "assistant_id"
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AssistantVoiceToVoiceRuntimeUpdateSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AssociatedRuntimeToolListSuccess

```java
SdkEntity associatedRuntimeToolListSuccess = client.associatedRuntimeToolListSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes |  |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes |  |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.associatedRuntimeToolListSuccess(null).load(Map.of("assistant_id", "assistant_id"), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AssociatedRuntimeToolListSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AudioToAudio

```java
SdkEntity audioToAudio = client.audioToAudio(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes |  |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes | Collection metadata. |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.audioToAudio(null).load(null, null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AudioToAudio` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## AvailableRuntimeToolListSuccess

```java
SdkEntity availableRuntimeToolListSuccess = client.availableRuntimeToolListSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes |  |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes |  |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.availableRuntimeToolListSuccess(null).load(null, null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `AvailableRuntimeToolListSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## FillerPhraseList

```java
SdkEntity fillerPhraseList = client.fillerPhraseList(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associations` | `Map<String, Object>` | Yes |  |
| `data` | `Map<String, Object>` | Yes |  |
| `id` | `String` | Yes | Value supplied for `id` in the `FillerPhraseListCreateRequest` request. |
| `list` | `Map<String, Object>` | Yes |  |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | No |  |
| `name` | `String` | Yes | Value supplied for `name` in the `FillerPhraseListCreateRequest` request. |
| `phrases` | `List<Object>` | No | Value supplied for `phrases` in the `FillerPhraseListCreateRequest` request. |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |
| `toolListIds` | `List<Object>` | Yes |  |
| `waitingListIds` | `List<Object>` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> Object`

Create a new entity with the given data. Returns the created entity data and raises on error.

```java
Object result = client.fillerPhraseList(null).create(Map.of(
    "associations", Map.of(),  // Map<String, Object>
    "data", Map.of(),  // Map<String, Object>
    "id", "example_id",  // String
    "list", Map.of(),  // Map<String, Object>
    "message", "example_message",  // String
    "name", "example_name",  // String
    "requestId", "example_requestId",  // String
    "success", true,  // Boolean
    "toolListIds", List.of(),  // List<Object>
    "waitingListIds", List.of()  // List<Object>
), null);
```

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.fillerPhraseList(null).load(Map.of("id", "filler_phrase_list_id"), null);
```

#### `remove(reqmatch, ctrl) -> Object`

Remove the entity matching the given criteria. Raises on error.

```java
Object result = client.fillerPhraseList(null).remove(Map.of("id", "filler_phrase_list_id"), null);
```

#### `update(reqdata, ctrl) -> Object`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```java
Object result = client.fillerPhraseList(null).update(Map.of(
    "id", "filler_phrase_list_id"
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `FillerPhraseList` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## Health

```java
SdkEntity health = client.health(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataSource` | `String` | Yes |  |
| `service` | `String` | Yes |  |
| `status` | `String` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.health(null).load(null, null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `Health` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## Knowledge

```java
SdkEntity knowledge = client.knowledge(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes |  |
| `defaultPostAction` | `String` | No | Defaults to `ask_if_needs_more` when omitted |
| `defaultResponse` | `String` | Yes | Default answer used when a trigger has no specific response. |
| `id` | `String` | No |  |
| `knowledge` | `Map<String, Object>` | Yes | A knowledge item: a set of recognised requests with their answers, folded into the prompt of every assistant it is associated with. |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | No |  |
| `requestId` | `String` | Yes |  |
| `rules` | `String` | No | Optional constraints applied to the whole knowledge item. |
| `success` | `Boolean` | Yes |  |
| `title` | `String` | Yes | Human-readable title of the new knowledge item. |
| `triggers` | `List<Object>` | No | Initial trigger list for the knowledge item. |

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

#### `create(reqdata, ctrl) -> Object`

Create a new entity with the given data. Returns the created entity data and raises on error.

```java
Object result = client.knowledge(null).create(Map.of(
    "data", Map.of(),  // Map<String, Object>
    "defaultResponse", "example_defaultResponse",  // String
    "knowledge", Map.of(),  // Map<String, Object>
    "message", "example_message",  // String
    "requestId", "example_requestId",  // String
    "success", true,  // Boolean
    "title", "example_title"  // String
), null);
```

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.knowledge(null).load(Map.of("id", 1L), null);
```

#### `remove(reqmatch, ctrl) -> Object`

Remove the entity matching the given criteria. Raises on error.

```java
Object result = client.knowledge(null).remove(Map.of("id", 1L), null);
```

#### `update(reqdata, ctrl) -> Object`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```java
Object result = client.knowledge(null).update(Map.of(
    "id", 1L
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `Knowledge` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## Llm

```java
SdkEntity llm = client.llm(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes |  |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes | Collection metadata. |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.llm(null).load(null, null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `Llm` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## LlmModelListSuccess

```java
SdkEntity llmModelListSuccess = client.llmModelListSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes |  |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes | Collection metadata. |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.llmModelListSuccess(null).load(Map.of("assistant_id", "assistant_id"), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `LlmModelListSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## OutboundCall

```java
SdkEntity outboundCall = client.outboundCall(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `AddPrompt` | `String` | No | Legacy alias of `addPrompt`. |
| `addPrompt` | `String` | No | Optional additional prompt to customize assistant behavior. |
| `apiKey_assistente` | `String` | No | Legacy alias of `assistantApiKey`. |
| `assistantApiKey` | `String` | No | API key of the AI assistant that will talk to the callee. |
| `callId` | `String` | No | Technical call identifier, if already available when the response is returned. |
| `callResultUrl` | `String` | No | Optional HTTPS URL that AI4Call calls with the outcome notification. |
| `callbackConfigured` | `Boolean` | Yes | Indicates whether the callback URL for the call outcome was configured. |
| `callerId` | `String` | Yes | Caller number displayed in E.164 format. |
| `dst` | `String` | Yes | Recipient number in E.164 format, example +3902XXXXXXXX. |
| `internalId` | `String` | Yes | UUID generated by AI4Call to correlate the outbound request, callback and final dial-status lookup. |
| `status` | `String` | Yes | Initial status of the outbound request. |
| `url_esito_chiamata` | `Object` | No | Legacy alias of `callResultUrl`. |

### Operations

#### `create(reqdata, ctrl) -> Object`

Create a new entity with the given data. Returns the created entity data and raises on error.

```java
Object result = client.outboundCall(null).create(Map.of(
    "callbackConfigured", true,  // Boolean
    "callerId", "example_callerId",  // String
    "dst", "example_dst",  // String
    "internalId", "example_internalId",  // String
    "status", "example_status"  // String
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `OutboundCall` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## OutboundCallAcceptedSuccess

```java
SdkEntity outboundCallAcceptedSuccess = client.outboundCallAcceptedSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `AddPrompt` | `String` | No | Legacy alias of `addPrompt`. |
| `addPrompt` | `String` | No | Optional additional prompt to customize assistant behavior. |
| `apiKey_assistente` | `String` | No | Legacy alias of `assistantApiKey`. |
| `assistantApiKey` | `String` | No | API key of the AI assistant that will talk to the callee. |
| `callId` | `String` | No | Technical call identifier, if already available when the response is returned. |
| `callResultUrl` | `String` | No | Optional HTTPS URL that AI4Call calls with the outcome notification. |
| `callbackConfigured` | `Boolean` | Yes | Indicates whether the callback URL for the call outcome was configured. |
| `callerId` | `String` | Yes | Calling number displayed in the format required by the PBX, E.164 +3902XXXXXXXX or local 02XXXXXXXX. |
| `dst` | `String` | Yes | Recipient number in the format required by the PBX, E.164 +3902XXXXXXXX or local 02XXXXXXXX. |
| `internalId` | `String` | Yes | UUID generated by AI4Call to correlate the outbound request, callback and final dial-status lookup. |
| `ipPbx` | `String` | No | Public IP of the PBX, must be one of the authorized public IPs. |
| `ip_pbx` | `String` | No | Legacy alias of `ipPbx`. |
| `method_uac` | `Boolean` | No | Selects the registered UAC mode. |
| `sipPort` | `String` | No | SIP port of the PBX, standard 5060. |
| `sip_port` | `String` | No | Legacy alias of `sipPort`. |
| `status` | `String` | Yes | Initial status of the outbound request. |
| `url_esito_chiamata` | `Object` | No | Legacy alias of `callResultUrl`. |

### Operations

#### `create(reqdata, ctrl) -> Object`

Create a new entity with the given data. Returns the created entity data and raises on error.

```java
Object result = client.outboundCallAcceptedSuccess(null).create(Map.of(
    "callbackConfigured", true,  // Boolean
    "callerId", "example_callerId",  // String
    "dst", "example_dst",  // String
    "internalId", "example_internalId",  // String
    "status", "example_status"  // String
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `OutboundCallAcceptedSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## OutboundDialStatusPayload

```java
SdkEntity outboundDialStatusPayload = client.outboundDialStatusPayload(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billSec` | `Long` | Yes | Billed duration in seconds. |
| `dialStatus` | `String` | Yes | Final dial result persisted in the outbound CDR. |
| `trafficCost` | `String` | Yes | Outbound traffic cost in EUR, expressed with six decimal places. |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.outboundDialStatusPayload(null).load(Map.of("uuid", "uuid"), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `OutboundDialStatusPayload` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## PortalLoginSuccess

```java
SdkEntity portalLoginSuccess = client.portalLoginSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client` | `Map<String, Object>` | Yes | Customer profile returned after successful portal credential verification. |
| `email` | `String` | Yes | Portal customer email. |
| `portalApiKey` | `String` | Yes | Static portal API key associated with the customer account. |

### Operations

#### `create(reqdata, ctrl) -> Object`

Create a new entity with the given data. Returns the created entity data and raises on error.

```java
Object result = client.portalLoginSuccess(null).create(Map.of(
    "client", Map.of(),  // Map<String, Object>
    "email", "example_email",  // String
    "portalApiKey", "example_portalApiKey"  // String
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `PortalLoginSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## PreCall

```java
SdkEntity preCall = client.preCall(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `Map<String, Object>` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.preCall(null).load(Map.of("assistant_id", "assistant_id"), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `PreCall` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## ProviderWallet

```java
SdkEntity providerWallet = client.providerWallet(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `Map<String, Object>` | Yes | Values of the fields declared by the catalog entry |
| `credential` | `Map<String, Object>` | Yes | A credential saved by the customer. |
| `data` | `Map<String, Object>` | Yes |  |
| `engine` | `String` | Yes | Engine code selected from the provider-wallet catalog. |
| `id` | `String` | No |  |
| `isActive` | `Boolean` | No | Whether the saved credential can be used by assistant runtimes. |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | No |  |
| `name` | `String` | Yes | Customer-defined name for the saved credential. |
| `provider` | `String` | Yes | Provider code selected from the provider-wallet catalog. |
| `requestId` | `String` | Yes |  |
| `serviceType` | `String` | Yes | Service category selected from the provider-wallet catalog. |
| `success` | `Boolean` | Yes |  |

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

#### `create(reqdata, ctrl) -> Object`

Create a new entity with the given data. Returns the created entity data and raises on error.

```java
Object result = client.providerWallet(null).create(Map.of(
    "config", Map.of(),  // Map<String, Object>
    "credential", Map.of(),  // Map<String, Object>
    "data", Map.of(),  // Map<String, Object>
    "engine", "example_engine",  // String
    "message", "example_message",  // String
    "name", "example_name",  // String
    "provider", "example_provider",  // String
    "requestId", "example_requestId",  // String
    "serviceType", "example_serviceType",  // String
    "success", true  // Boolean
), null);
```

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.providerWallet(null).load(Map.of("id", 1L), null);
```

#### `remove(reqmatch, ctrl) -> Object`

Remove the entity matching the given criteria. Raises on error.

```java
Object result = client.providerWallet(null).remove(Map.of("id", 1L), null);
```

#### `update(reqdata, ctrl) -> Object`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```java
Object result = client.providerWallet(null).update(Map.of(
    "id", 1L
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `ProviderWallet` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## ProviderWalletAssociationsSuccess

```java
SdkEntity providerWalletAssociationsSuccess = client.providerWalletAssociationsSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes |  |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | No |  |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.providerWalletAssociationsSuccess(null).load(Map.of("assistant_id", "assistant_id"), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `ProviderWalletAssociationsSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## ProviderWalletCatalogSuccess

```java
SdkEntity providerWalletCatalogSuccess = client.providerWalletCatalogSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes |  |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | No |  |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.providerWalletCatalogSuccess(null).load(null, null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `ProviderWalletCatalogSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## PublicRagSearchSuccess

```java
SdkEntity publicRagSearchSuccess = client.publicRagSearchSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `Long` | Yes | Number of chunks returned by the search, up to the service limit of 4. |
| `query` | `String` | Yes | Normalized query text used for the search. |
| `rag_id` | `String` | Yes | Public RAG identifier supplied in the request and returned unchanged on success. |
| `results` | `List<Object>` | Yes | Chunks returned by the vector search. |

### Operations

#### `create(reqdata, ctrl) -> Object`

Create a new entity with the given data. Returns the created entity data and raises on error.

```java
Object result = client.publicRagSearchSuccess(null).create(Map.of(
    "count", 1L,  // Long
    "query", "example_query",  // String
    "rag_id", "example_rag_id",  // String
    "results", List.of()  // List<Object>
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `PublicRagSearchSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## RagCollectionDeleteSuccess

```java
SdkEntity ragCollectionDeleteSuccess = client.ragCollectionDeleteSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes |  |
| `description` | `String` | No | Value supplied for `description` in the `RagCollectionCreateRequest` request. |
| `maxChunkSize` | `Long` | No | Value supplied for `maxChunkSize` in the `RagCollectionCreateRequest` request. |
| `maxChunksPerFile` | `Long` | No | Value supplied for `maxChunksPerFile` in the `RagCollectionCreateRequest` request. |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes | Collection metadata. |
| `name` | `String` | Yes | Value supplied for `name` in the `RagCollectionCreateRequest` request. |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> Object`

Create a new entity with the given data. Returns the created entity data and raises on error.

```java
Object result = client.ragCollectionDeleteSuccess(null).create(Map.of(
    "data", Map.of(),  // Map<String, Object>
    "message", "example_message",  // String
    "meta", Map.of(),  // Map<String, Object>
    "name", "example_name",  // String
    "requestId", "example_requestId",  // String
    "success", true  // Boolean
), null);
```

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.ragCollectionDeleteSuccess(null).load(null, null);
```

#### `remove(reqmatch, ctrl) -> Object`

Remove the entity matching the given criteria. Raises on error.

```java
Object result = client.ragCollectionDeleteSuccess(null).remove(Map.of("rag_id", "rag_id"), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `RagCollectionDeleteSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## RagCollectionDocumentDeleteSuccess

```java
SdkEntity ragCollectionDocumentDeleteSuccess = client.ragCollectionDocumentDeleteSuccess(null);
```

### Operations

#### `remove(reqmatch, ctrl) -> Object`

Remove the entity matching the given criteria. Raises on error.

```java
Object result = client.ragCollectionDocumentDeleteSuccess(null).remove(Map.of("collection_id", "collection_id", "file_name", "file_name"), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `RagCollectionDocumentDeleteSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## RagCollectionDocumentListSuccess

```java
SdkEntity ragCollectionDocumentListSuccess = client.ragCollectionDocumentListSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes |  |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes | Collection metadata. |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.ragCollectionDocumentListSuccess(null).load(Map.of("collection_id", "collection_id"), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `RagCollectionDocumentListSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## RagCollectionDocumentTokenEstimateSuccess

```java
SdkEntity ragCollectionDocumentTokenEstimateSuccess = client.ragCollectionDocumentTokenEstimateSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `estimatedCost` | `Double` | Yes |  |
| `fileCount` | `Long` | Yes |  |
| `fileDetails` | `List<Object>` | Yes |  |
| `processingTime` | `Long` | Yes |  |
| `raw` | `Map<String, Object>` | Yes |  |
| `totalTokens` | `Long` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> Object`

Create a new entity with the given data. Returns the created entity data and raises on error.

```java
Object result = client.ragCollectionDocumentTokenEstimateSuccess(null).create(Map.of(
    "estimatedCost", 1.0,  // Double
    "fileCount", 1L,  // Long
    "fileDetails", List.of(),  // List<Object>
    "processingTime", 1L,  // Long
    "raw", Map.of(),  // Map<String, Object>
    "totalTokens", 1L  // Long
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `RagCollectionDocumentTokenEstimateSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## RagCollectionDocumentUploadStatusSuccess

```java
SdkEntity ragCollectionDocumentUploadStatusSuccess = client.ragCollectionDocumentUploadStatusSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `currentFile` | `String` | Yes |  |
| `errors` | `List<Object>` | Yes |  |
| `processedFiles` | `Long` | Yes |  |
| `progress` | `Double` | Yes |  |
| `raw` | `Map<String, Object>` | Yes |  |
| `results` | `List<Object>` | Yes |  |
| `status` | `String` | Yes |  |
| `totalCost` | `Double` | Yes |  |
| `totalFiles` | `Long` | Yes |  |
| `totalTokens` | `Long` | Yes |  |
| `uploadId` | `String` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.ragCollectionDocumentUploadStatusSuccess(null).load(Map.of("upload_id", "upload_id"), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `RagCollectionDocumentUploadStatusSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## RagCollectionDocumentUploadSuccess

```java
SdkEntity ragCollectionDocumentUploadSuccess = client.ragCollectionDocumentUploadSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes | Result returned after starting a RAG document upload. |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes | Collection metadata. |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> Object`

Create a new entity with the given data. Returns the created entity data and raises on error.

```java
Object result = client.ragCollectionDocumentUploadSuccess(null).create(Map.of(
    "collection_id", "example_collection_id",  // String
    "data", Map.of(),  // Map<String, Object>
    "message", "example_message",  // String
    "meta", Map.of(),  // Map<String, Object>
    "requestId", "example_requestId",  // String
    "success", true  // Boolean
), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `RagCollectionDocumentUploadSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## RuntimeBinding

```java
SdkEntity runtimeBinding = client.runtimeBinding(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantApiKey` | `String` | Yes |  |
| `assistantId` | `String` | Yes |  |
| `runtimeBindings` | `Map<String, Object>` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.runtimeBinding(null).load(Map.of("assistant_id", "assistant_id"), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `RuntimeBinding` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## Tts

```java
SdkEntity tts = client.tts(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes |  |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes | Collection metadata. |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.tts(null).load(null, null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `Tts` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## TtsVoiceListSuccess

```java
SdkEntity ttsVoiceListSuccess = client.ttsVoiceListSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes |  |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes | Collection metadata. |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.ttsVoiceListSuccess(null).load(Map.of("assistant_id", "assistant_id"), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `TtsVoiceListSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## Voice

```java
SdkEntity voice = client.voice(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes |  |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes | Collection metadata. |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.voice(null).load(Map.of("model_code", "model_code"), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `Voice` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## VoiceLlm

```java
SdkEntity voiceLlm = client.voiceLlm(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes |  |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes | Collection metadata. |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.voiceLlm(null).load(null, null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `VoiceLlm` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## VoiceLlmModelListSuccess

```java
SdkEntity voiceLlmModelListSuccess = client.voiceLlmModelListSuccess(null);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Map<String, Object>` | Yes |  |
| `message` | `String` | Yes |  |
| `meta` | `Map<String, Object>` | Yes | Collection metadata. |
| `requestId` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> Object`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```java
Object result = client.voiceLlmModelListSuccess(null).load(Map.of("provider", "provider"), null);
```

### Common Methods

#### `data(newdata...) -> Object`

Get or set the entity data.

#### `match(newmatch...) -> Object`

Get or set the entity match criteria.

#### `make() -> Entity`

Create a new `VoiceLlmModelListSuccess` entity instance with the same options.

#### `getName() -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```java
Map<String, Object> feature = new java.util.LinkedHashMap<>();
feature.put("test", Map.of("active", true));
Map<String, Object> options = new java.util.LinkedHashMap<>();
options.put("feature", feature);
Ai4callSDK client = new Ai4callSDK(options);
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

