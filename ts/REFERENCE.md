# Ai4call TypeScript SDK Reference

Complete API reference for the Ai4call TypeScript SDK.


## Ai4callSDK

### Constructor

```ts
new Ai4callSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Ai4callSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = Ai4callSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `Ai4callSDK` instance in test mode.


### Instance Methods

#### `AccountAllowedIpsSuccess(data?: object)`

Create a new `AccountAllowedIpsSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccountAllowedIpsSuccessEntity` instance.

#### `AccountAvailablePluginsSuccess(data?: object)`

Create a new `AccountAvailablePluginsSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccountAvailablePluginsSuccessEntity` instance.

#### `AccountCallLimitsSuccess(data?: object)`

Create a new `AccountCallLimitsSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccountCallLimitsSuccessEntity` instance.

#### `AccountNumberRoutingSuccess(data?: object)`

Create a new `AccountNumberRoutingSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccountNumberRoutingSuccessEntity` instance.

#### `AccountPluginConfigurationSuccess(data?: object)`

Create a new `AccountPluginConfigurationSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccountPluginConfigurationSuccessEntity` instance.

#### `AccountPluginInstanceSuccess(data?: object)`

Create a new `AccountPluginInstanceSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccountPluginInstanceSuccessEntity` instance.

#### `AccountPluginPurchaseSuccess(data?: object)`

Create a new `AccountPluginPurchaseSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccountPluginPurchaseSuccessEntity` instance.

#### `AnalyticsCallsOutboundSuccess(data?: object)`

Create a new `AnalyticsCallsOutboundSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AnalyticsCallsOutboundSuccessEntity` instance.

#### `AnalyticsCallsSuccess(data?: object)`

Create a new `AnalyticsCallsSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AnalyticsCallsSuccessEntity` instance.

#### `AnalyticsPostCallSuccess(data?: object)`

Create a new `AnalyticsPostCallSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AnalyticsPostCallSuccessEntity` instance.

#### `AnalyticsPreCallSuccess(data?: object)`

Create a new `AnalyticsPreCallSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AnalyticsPreCallSuccessEntity` instance.

#### `AnalyticsRagSearchSuccess(data?: object)`

Create a new `AnalyticsRagSearchSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AnalyticsRagSearchSuccessEntity` instance.

#### `AnalyticsRagSuccess(data?: object)`

Create a new `AnalyticsRagSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AnalyticsRagSuccessEntity` instance.

#### `AnalyticsRechargesSuccess(data?: object)`

Create a new `AnalyticsRechargesSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AnalyticsRechargesSuccessEntity` instance.

#### `AnalyticsSmsSuccess(data?: object)`

Create a new `AnalyticsSmsSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AnalyticsSmsSuccessEntity` instance.

#### `AnalyticsToolResponsesSuccess(data?: object)`

Create a new `AnalyticsToolResponsesSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AnalyticsToolResponsesSuccessEntity` instance.

#### `Asr(data?: object)`

Create a new `Asr` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AsrEntity` instance.

#### `AsrModelListSuccess(data?: object)`

Create a new `AsrModelListSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AsrModelListSuccessEntity` instance.

#### `Assistant(data?: object)`

Create a new `Assistant` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssistantEntity` instance.

#### `AssistantAdvancedSettingsConfigurationSuccess(data?: object)`

Create a new `AssistantAdvancedSettingsConfigurationSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssistantAdvancedSettingsConfigurationSuccessEntity` instance.

#### `AssistantAdvancedSettingsRuntimeUpdateSuccess(data?: object)`

Create a new `AssistantAdvancedSettingsRuntimeUpdateSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssistantAdvancedSettingsRuntimeUpdateSuccessEntity` instance.

#### `AssistantAsrRuntimeUpdateSuccess(data?: object)`

Create a new `AssistantAsrRuntimeUpdateSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssistantAsrRuntimeUpdateSuccessEntity` instance.

#### `AssistantConversationWebhookRuntimeSuccess(data?: object)`

Create a new `AssistantConversationWebhookRuntimeSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssistantConversationWebhookRuntimeSuccessEntity` instance.

#### `AssistantDtmfConfigurationSuccess(data?: object)`

Create a new `AssistantDtmfConfigurationSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssistantDtmfConfigurationSuccessEntity` instance.

#### `AssistantDtmfRuntimeUpdateSuccess(data?: object)`

Create a new `AssistantDtmfRuntimeUpdateSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssistantDtmfRuntimeUpdateSuccessEntity` instance.

#### `AssistantHangupConfigurationSuccess(data?: object)`

Create a new `AssistantHangupConfigurationSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssistantHangupConfigurationSuccessEntity` instance.

#### `AssistantHangupRuntimeUpdateSuccess(data?: object)`

Create a new `AssistantHangupRuntimeUpdateSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssistantHangupRuntimeUpdateSuccessEntity` instance.

#### `AssistantHangupSchemaRuntimeSuccess(data?: object)`

Create a new `AssistantHangupSchemaRuntimeSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssistantHangupSchemaRuntimeSuccessEntity` instance.

#### `AssistantKnowledgeSuccess(data?: object)`

Create a new `AssistantKnowledgeSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssistantKnowledgeSuccessEntity` instance.

#### `AssistantLlmRuntimeUpdateSuccess(data?: object)`

Create a new `AssistantLlmRuntimeUpdateSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssistantLlmRuntimeUpdateSuccessEntity` instance.

#### `AssistantNumberRoutingCatalogSuccess(data?: object)`

Create a new `AssistantNumberRoutingCatalogSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssistantNumberRoutingCatalogSuccessEntity` instance.

#### `AssistantNumberRoutingRuntimeSuccess(data?: object)`

Create a new `AssistantNumberRoutingRuntimeSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssistantNumberRoutingRuntimeSuccessEntity` instance.

#### `AssistantPostcallMcpRuntimeSuccess(data?: object)`

Create a new `AssistantPostcallMcpRuntimeSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssistantPostcallMcpRuntimeSuccessEntity` instance.

#### `AssistantPrecallMcpRuntimeSuccess(data?: object)`

Create a new `AssistantPrecallMcpRuntimeSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssistantPrecallMcpRuntimeSuccessEntity` instance.

#### `AssistantPrecallValidationRuntimeSuccess(data?: object)`

Create a new `AssistantPrecallValidationRuntimeSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssistantPrecallValidationRuntimeSuccessEntity` instance.

#### `AssistantPromptSuccess(data?: object)`

Create a new `AssistantPromptSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssistantPromptSuccessEntity` instance.

#### `AssistantRagConfigurationSuccess(data?: object)`

Create a new `AssistantRagConfigurationSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssistantRagConfigurationSuccessEntity` instance.

#### `AssistantRagRuntimeUpdateSuccess(data?: object)`

Create a new `AssistantRagRuntimeUpdateSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssistantRagRuntimeUpdateSuccessEntity` instance.

#### `AssistantSaveConversationRuntimeSuccess(data?: object)`

Create a new `AssistantSaveConversationRuntimeSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssistantSaveConversationRuntimeSuccessEntity` instance.

#### `AssistantSettingsConfigurationSuccess(data?: object)`

Create a new `AssistantSettingsConfigurationSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssistantSettingsConfigurationSuccessEntity` instance.

#### `AssistantSettingsRuntimeUpdateSuccess(data?: object)`

Create a new `AssistantSettingsRuntimeUpdateSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssistantSettingsRuntimeUpdateSuccessEntity` instance.

#### `AssistantToolsRuntimeUpdateSuccess(data?: object)`

Create a new `AssistantToolsRuntimeUpdateSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssistantToolsRuntimeUpdateSuccessEntity` instance.

#### `AssistantTtsRuntimeUpdateSuccess(data?: object)`

Create a new `AssistantTtsRuntimeUpdateSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssistantTtsRuntimeUpdateSuccessEntity` instance.

#### `AssistantVoiceToVoiceRuntimeUpdateSuccess(data?: object)`

Create a new `AssistantVoiceToVoiceRuntimeUpdateSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssistantVoiceToVoiceRuntimeUpdateSuccessEntity` instance.

#### `AssociatedRuntimeToolListSuccess(data?: object)`

Create a new `AssociatedRuntimeToolListSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssociatedRuntimeToolListSuccessEntity` instance.

#### `AudioToAudio(data?: object)`

Create a new `AudioToAudio` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AudioToAudioEntity` instance.

#### `AvailableRuntimeToolListSuccess(data?: object)`

Create a new `AvailableRuntimeToolListSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AvailableRuntimeToolListSuccessEntity` instance.

#### `FillerPhraseList(data?: object)`

Create a new `FillerPhraseList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FillerPhraseListEntity` instance.

#### `Health(data?: object)`

Create a new `Health` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HealthEntity` instance.

#### `Knowledge(data?: object)`

Create a new `Knowledge` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `KnowledgeEntity` instance.

#### `Llm(data?: object)`

Create a new `Llm` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LlmEntity` instance.

#### `LlmModelListSuccess(data?: object)`

Create a new `LlmModelListSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LlmModelListSuccessEntity` instance.

#### `OutboundCall(data?: object)`

Create a new `OutboundCall` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OutboundCallEntity` instance.

#### `OutboundCallAcceptedSuccess(data?: object)`

Create a new `OutboundCallAcceptedSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OutboundCallAcceptedSuccessEntity` instance.

#### `OutboundDialStatusPayload(data?: object)`

Create a new `OutboundDialStatusPayload` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OutboundDialStatusPayloadEntity` instance.

#### `PortalLoginSuccess(data?: object)`

Create a new `PortalLoginSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PortalLoginSuccessEntity` instance.

#### `PreCall(data?: object)`

Create a new `PreCall` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PreCallEntity` instance.

#### `ProviderWallet(data?: object)`

Create a new `ProviderWallet` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProviderWalletEntity` instance.

#### `ProviderWalletAssociationsSuccess(data?: object)`

Create a new `ProviderWalletAssociationsSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProviderWalletAssociationsSuccessEntity` instance.

#### `ProviderWalletCatalogSuccess(data?: object)`

Create a new `ProviderWalletCatalogSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProviderWalletCatalogSuccessEntity` instance.

#### `PublicRagSearchSuccess(data?: object)`

Create a new `PublicRagSearchSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PublicRagSearchSuccessEntity` instance.

#### `RagCollectionDeleteSuccess(data?: object)`

Create a new `RagCollectionDeleteSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RagCollectionDeleteSuccessEntity` instance.

#### `RagCollectionDocumentDeleteSuccess(data?: object)`

Create a new `RagCollectionDocumentDeleteSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RagCollectionDocumentDeleteSuccessEntity` instance.

#### `RagCollectionDocumentListSuccess(data?: object)`

Create a new `RagCollectionDocumentListSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RagCollectionDocumentListSuccessEntity` instance.

#### `RagCollectionDocumentTokenEstimateSuccess(data?: object)`

Create a new `RagCollectionDocumentTokenEstimateSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RagCollectionDocumentTokenEstimateSuccessEntity` instance.

#### `RagCollectionDocumentUploadStatusSuccess(data?: object)`

Create a new `RagCollectionDocumentUploadStatusSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RagCollectionDocumentUploadStatusSuccessEntity` instance.

#### `RagCollectionDocumentUploadSuccess(data?: object)`

Create a new `RagCollectionDocumentUploadSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RagCollectionDocumentUploadSuccessEntity` instance.

#### `RuntimeBinding(data?: object)`

Create a new `RuntimeBinding` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RuntimeBindingEntity` instance.

#### `Tts(data?: object)`

Create a new `Tts` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TtsEntity` instance.

#### `TtsVoiceListSuccess(data?: object)`

Create a new `TtsVoiceListSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TtsVoiceListSuccessEntity` instance.

#### `Voice(data?: object)`

Create a new `Voice` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VoiceEntity` instance.

#### `VoiceLlm(data?: object)`

Create a new `VoiceLlm` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VoiceLlmEntity` instance.

#### `VoiceLlmModelListSuccess(data?: object)`

Create a new `VoiceLlmModelListSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VoiceLlmModelListSuccessEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `Ai4callSDK.test()`.

**Returns:** `Ai4callSDK` instance in test mode.


---

## AccountAllowedIpsSuccessEntity

```ts
const account_allowed_ips_success = client.AccountAllowedIpsSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `addIps` | `any[]` | No | Value supplied for `addIps` in the `AccountAllowedIpsUpdateRequest` request. |
| `allowedIps` | `any[]` | No | Value supplied for `allowedIps` in the `AccountAllowedIpsUpdateRequest` request. |
| `data` | `Record<string, any>` | Yes |  |
| `deleteIps` | `any[]` | No | Value supplied for `deleteIps` in the `AccountAllowedIpsUpdateRequest` request. |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes |  |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AccountAllowedIpsSuccess().load()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AccountAllowedIpsSuccess().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccountAllowedIpsSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AccountAvailablePluginsSuccessEntity

```ts
const account_available_plugins_success = client.AccountAvailablePluginsSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes |  |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AccountAvailablePluginsSuccess().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccountAvailablePluginsSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AccountCallLimitsSuccessEntity

```ts
const account_call_limits_success = client.AccountCallLimitsSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistants` | `any[]` | Yes | Value supplied for `assistants` in the `AccountCallLimitsUpdateRequest` request. |
| `data` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes |  |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AccountCallLimitsSuccess().load()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AccountCallLimitsSuccess().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccountCallLimitsSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AccountNumberRoutingSuccessEntity

```ts
const account_number_routing_success = client.AccountNumberRoutingSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `demoNumbers` | `any[]` | No | Value supplied for `demoNumbers` in the `AccountNumberRoutingUpdateRequest` request. |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes |  |
| `purchasedNumbers` | `any[]` | No | Value supplied for `purchasedNumbers` in the `AccountNumberRoutingUpdateRequest` request. |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |
| `userNumbers` | `any[]` | No | Value supplied for `userNumbers` in the `AccountNumberRoutingUpdateRequest` request. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AccountNumberRoutingSuccess().load()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AccountNumberRoutingSuccess().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccountNumberRoutingSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AccountPluginConfigurationSuccessEntity

```ts
const account_plugin_configuration_success = client.AccountPluginConfigurationSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `Record<string, any>` | Yes | Configuration contract and current values for one plugin instance. |
| `instanceName` | `string` | No | Value supplied for `instanceName` in the `AccountPluginConfigurationUpdateRequest` request. |
| `instance_name` | `string` | No | Legacy alias of `instanceName`. |
| `pluginName` | `string` | No | Value supplied for `pluginName` in the `AccountPluginConfigurationUpdateRequest` request. |
| `plugin_name` | `string` | No | Legacy alias of `pluginName`. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AccountPluginConfigurationSuccess().load()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AccountPluginConfigurationSuccess().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccountPluginConfigurationSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AccountPluginInstanceSuccessEntity

```ts
const account_plugin_instance_success = client.AccountPluginInstanceSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `Record<string, any>` | Yes | Current lifecycle information for one purchased plugin instance. |
| `data` | `Record<string, any>` | Yes |  |
| `instanceName` | `string` | No | Value supplied for `instanceName` in the `AccountPluginPurchaseRequest` request. |
| `instance_name` | `string` | No | Legacy alias of `instanceName`. |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes |  |
| `newInstanceName` | `string` | No | Value supplied for `newInstanceName` in the `AccountPluginInstanceByIdUpdateRequest` request. |
| `new_instance_name` | `string` | No | Legacy alias of `newInstanceName`. |
| `pluginName` | `string` | No | Value supplied for `pluginName` in the `AccountPluginPurchaseRequest` request. |
| `plugin_name` | `string` | No | Legacy alias of `pluginName`. |
| `requestId` | `string` | Yes |  |
| `status` | `string` | No | Value supplied for `status` in the `AccountPluginInstanceUpdateRequest` request. |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AccountPluginInstanceSuccess().create({
  configuration: {},
  data: {},
  message: 'example_message',
  meta: {},
  requestId: 'example_requestId',
  success: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AccountPluginInstanceSuccess().load()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AccountPluginInstanceSuccess().remove({ instance_id: 'instance_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AccountPluginInstanceSuccess().update({
  instance_id: 'instance_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccountPluginInstanceSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AccountPluginPurchaseSuccessEntity

```ts
const account_plugin_purchase_success = client.AccountPluginPurchaseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `Record<string, any>` | Yes | Result of a plugin purchase, including charged prices and created instance data. |
| `instanceName` | `string` | No | Value supplied for `instanceName` in the `AccountPluginPurchaseRequest` request. |
| `instance_name` | `string` | No | Legacy alias of `instanceName`. |
| `pluginName` | `string` | No | Value supplied for `pluginName` in the `AccountPluginPurchaseRequest` request. |
| `plugin_name` | `string` | No | Legacy alias of `pluginName`. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AccountPluginPurchaseSuccess().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccountPluginPurchaseSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AnalyticsCallsOutboundSuccessEntity

```ts
const analytics_calls_outbound_success = client.AnalyticsCallsOutboundSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes |  |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AnalyticsCallsOutboundSuccess().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AnalyticsCallsOutboundSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AnalyticsCallsSuccessEntity

```ts
const analytics_calls_success = client.AnalyticsCallsSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes |  |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AnalyticsCallsSuccess().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AnalyticsCallsSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AnalyticsPostCallSuccessEntity

```ts
const analytics_post_call_success = client.AnalyticsPostCallSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes |  |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AnalyticsPostCallSuccess().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AnalyticsPostCallSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AnalyticsPreCallSuccessEntity

```ts
const analytics_pre_call_success = client.AnalyticsPreCallSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes |  |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AnalyticsPreCallSuccess().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AnalyticsPreCallSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AnalyticsRagSearchSuccessEntity

```ts
const analytics_rag_search_success = client.AnalyticsRagSearchSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes |  |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AnalyticsRagSearchSuccess().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AnalyticsRagSearchSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AnalyticsRagSuccessEntity

```ts
const analytics_rag_success = client.AnalyticsRagSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes |  |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AnalyticsRagSuccess().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AnalyticsRagSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AnalyticsRechargesSuccessEntity

```ts
const analytics_recharges_success = client.AnalyticsRechargesSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes |  |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AnalyticsRechargesSuccess().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AnalyticsRechargesSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AnalyticsSmsSuccessEntity

```ts
const analytics_sms_success = client.AnalyticsSmsSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes |  |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AnalyticsSmsSuccess().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AnalyticsSmsSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AnalyticsToolResponsesSuccessEntity

```ts
const analytics_tool_responses_success = client.AnalyticsToolResponsesSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes |  |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AnalyticsToolResponsesSuccess().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AnalyticsToolResponsesSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AsrEntity

```ts
const asr = client.Asr()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes | Collection metadata. |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Asr().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AsrEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AsrModelListSuccessEntity

```ts
const asr_model_list_success = client.AsrModelListSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes | Collection metadata. |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AsrModelListSuccess().load({ assistant_id: 'assistant_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AsrModelListSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssistantEntity

```ts
const assistant = client.Assistant()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistant` | `any` | Yes | Assistant detail response, including the legacy assistant API key during the v1 compatibility period. |
| `audioToAudio` | `any` | No | Initial audio-to-audio configuration, used when applicable to the selected mode. |
| `data` | `Record<string, any>` | Yes |  |
| `description` | `string` | Yes | Functional description of the assistant. |
| `firstMessage` | `Record<string, any>` | No | Partial update of the assistant's first-message configuration. |
| `id` | `string` | No |  |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes | Collection metadata. |
| `metadata` | `Record<string, any>` | No | Free-form metadata to store with the assistant. |
| `mode` | `string` | No | Runtime mode to use when creating the assistant. |
| `name` | `string` | Yes | Assistant name. |
| `network` | `Record<string, any>` | No | Network settings to update on the assistant. |
| `numbers` | `Record<string, any>` | No | Replacement values for assistant number lists when supplied. |
| `requestId` | `string` | Yes |  |
| `settings` | `Record<string, any>` | No | High-level assistant settings to update. |
| `status` | `string` | No | New lifecycle status for the assistant. |
| `success` | `boolean` | Yes |  |
| `voiceToVoice` | `Record<string, any>` | No | Legacy alias of `audioToAudio`. |

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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `prompt` | `/api/v1/assistants/{assistantId}/prompt` | `client.Assistant().update({ $action: 'prompt', ... })` |

An action returns that action's OWN response, which is not necessarily a
Assistant record — check the API definition for its shape.

```ts
const result = await client.Assistant().update({
  $action: 'prompt',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Assistant().create({
  assistant: 'example_assistant',
  data: {},
  description: 'example_description',
  message: 'example_message',
  meta: {},
  name: 'example_name',
  requestId: 'example_requestId',
  success: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Assistant().load({ id: 'assistant_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Assistant().remove({ id: 'assistant_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Assistant().update({
  id: 'assistant_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssistantEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssistantAdvancedSettingsConfigurationSuccessEntity

```ts
const assistant_advanced_settings_configuration_success = client.AssistantAdvancedSettingsConfigurationSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `advanced-settings` | `/api/v1/catalog/assistants/{assistantId}/advanced-settings` | `client.AssistantAdvancedSettingsConfigurationSuccess().load({ $action: 'advanced-settings', ... })` |

An action returns that action's OWN response, which is not necessarily a
AssistantAdvancedSettingsConfigurationSuccess record — check the API definition for its shape.

```ts
const result = await client.AssistantAdvancedSettingsConfigurationSuccess().load({
  $action: 'advanced-settings',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AssistantAdvancedSettingsConfigurationSuccess().load({ id: 'assistant_advanced_settings_configuration_success_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssistantAdvancedSettingsConfigurationSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssistantAdvancedSettingsRuntimeUpdateSuccessEntity

```ts
const assistant_advanced_settings_runtime_update_success = client.AssistantAdvancedSettingsRuntimeUpdateSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantApiKey` | `string` | Yes |  |
| `assistantId` | `string` | Yes |  |
| `configuration` | `Record<string, any>` | Yes |  |
| `freqPenalty` | `number` | No | Value supplied for `freqPenalty` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `maxTokens` | `number` | No | Value supplied for `maxTokens` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `presencePenalty` | `number` | No | Value supplied for `presencePenalty` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `service` | `string` | Yes |  |
| `stopSequences` | `any[]` | No | Value supplied for `stopSequences` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `temperature` | `number` | No | Value supplied for `temperature` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `topK` | `number` | No | Value supplied for `topK` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `topP` | `number` | No | Value supplied for `topP` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AssistantAdvancedSettingsRuntimeUpdateSuccess().update({
  assistant_id: 'assistant_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssistantAdvancedSettingsRuntimeUpdateSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssistantAsrRuntimeUpdateSuccessEntity

```ts
const assistant_asr_runtime_update_success = client.AssistantAsrRuntimeUpdateSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `string` | No | API key of the customer's ASR provider. |
| `assistantApiKey` | `string` | Yes |  |
| `assistantId` | `string` | Yes |  |
| `configuration` | `Record<string, any>` | Yes | Actual resulting ASR runtime configuration after merge and backend resolution. |
| `engineCode` | `string` | No | ASR engine/provider code. |
| `providerWalletId` | `number` | No | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `runtimeBinding` | `Record<string, any>` | Yes |  |
| `service` | `string` | Yes |  |
| `sourceMode` | `string` | Yes | Runtime sourcing mode. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AssistantAsrRuntimeUpdateSuccess().update({
  assistant_id: 'assistant_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssistantAsrRuntimeUpdateSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssistantConversationWebhookRuntimeSuccessEntity

```ts
const assistant_conversation_webhook_runtime_success = client.AssistantConversationWebhookRuntimeSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authName` | `string` | No | Name of the saved authentication to apply to the request |
| `configuration` | `Record<string, any>` | Yes |  |
| `enabled` | `boolean` | No | Enable or disable sending the conversation to the webhook |
| `url` | `string` | No | Endpoint that receives the POST at the end of the call |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AssistantConversationWebhookRuntimeSuccess().load({ assistant_id: 'assistant_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AssistantConversationWebhookRuntimeSuccess().update({
  assistant_id: 'assistant_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssistantConversationWebhookRuntimeSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssistantDtmfConfigurationSuccessEntity

```ts
const assistant_dtmf_configuration_success = client.AssistantDtmfConfigurationSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `dtmf` | `/api/v1/catalog/assistants/{assistantId}/dtmf` | `client.AssistantDtmfConfigurationSuccess().load({ $action: 'dtmf', ... })` |

An action returns that action's OWN response, which is not necessarily a
AssistantDtmfConfigurationSuccess record — check the API definition for its shape.

```ts
const result = await client.AssistantDtmfConfigurationSuccess().load({
  $action: 'dtmf',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AssistantDtmfConfigurationSuccess().load({ id: 'assistant_dtmf_configuration_success_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssistantDtmfConfigurationSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssistantDtmfRuntimeUpdateSuccessEntity

```ts
const assistant_dtmf_runtime_update_success = client.AssistantDtmfRuntimeUpdateSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acceptTimeout` | `number` | No | Value supplied for `acceptTimeout` in the `AssistantDtmfRuntimeUpdateRequest` request. |
| `assistantApiKey` | `string` | Yes |  |
| `assistantId` | `string` | Yes |  |
| `configuration` | `Record<string, any>` | Yes |  |
| `enabled` | `boolean` | No | Enable or disable DTMF reception. |
| `maxLength` | `number` | No | Value supplied for `maxLength` in the `AssistantDtmfRuntimeUpdateRequest` request. |
| `minLength` | `number` | No | Value supplied for `minLength` in the `AssistantDtmfRuntimeUpdateRequest` request. |
| `playEnabled` | `boolean` | No | Enable or disable DTMF sending during the call. |
| `service` | `string` | Yes |  |
| `terminationChars` | `string` | No | Value supplied for `terminationChars` in the `AssistantDtmfRuntimeUpdateRequest` request. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AssistantDtmfRuntimeUpdateSuccess().update({
  assistant_id: 'assistant_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssistantDtmfRuntimeUpdateSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssistantHangupConfigurationSuccessEntity

```ts
const assistant_hangup_configuration_success = client.AssistantHangupConfigurationSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `hangup` | `/api/v1/catalog/assistants/{assistantId}/hangup` | `client.AssistantHangupConfigurationSuccess().load({ $action: 'hangup', ... })` |

An action returns that action's OWN response, which is not necessarily a
AssistantHangupConfigurationSuccess record — check the API definition for its shape.

```ts
const result = await client.AssistantHangupConfigurationSuccess().load({
  $action: 'hangup',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AssistantHangupConfigurationSuccess().load({ id: 'assistant_hangup_configuration_success_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssistantHangupConfigurationSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssistantHangupRuntimeUpdateSuccessEntity

```ts
const assistant_hangup_runtime_update_success = client.AssistantHangupRuntimeUpdateSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantApiKey` | `string` | Yes |  |
| `assistantId` | `string` | Yes |  |
| `availableAgents` | `any[]` | No | Value supplied for `availableAgents` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `configuration` | `Record<string, any>` | Yes |  |
| `enableHangup` | `boolean` | No | Value supplied for `enableHangup` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `enableRedirect` | `boolean` | No | Value supplied for `enableRedirect` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `enableTransferAgent` | `boolean` | No | Value supplied for `enableTransferAgent` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `service` | `string` | Yes |  |
| `transferAgentNotificationText` | `string` | No | Value supplied for `transferAgentNotificationText` in the `AssistantHangupRuntimeUpdateRequest` request. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AssistantHangupRuntimeUpdateSuccess().update({
  assistant_id: 'assistant_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssistantHangupRuntimeUpdateSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssistantHangupSchemaRuntimeSuccessEntity

```ts
const assistant_hangup_schema_runtime_success = client.AssistantHangupSchemaRuntimeSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `Record<string, any>` | Yes |  |
| `hangupUrl` | `string` | No | Hangup webhook URL (null to remove) |
| `schema` | `any[]` | No | Defining body fields (overrides the current schema) |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AssistantHangupSchemaRuntimeSuccess().load({ assistant_id: 'assistant_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AssistantHangupSchemaRuntimeSuccess().update({
  assistant_id: 'assistant_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssistantHangupSchemaRuntimeSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssistantKnowledgeSuccessEntity

```ts
const assistant_knowledge_success = client.AssistantKnowledgeSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `knowledge` | `/api/v1/assistants/{assistantId}/knowledge` | `client.AssistantKnowledgeSuccess().load({ $action: 'knowledge', ... })` |
| `knowledge` | `/api/v1/catalog/assistants/{assistantId}/knowledge` | `client.AssistantKnowledgeSuccess().load({ $action: 'knowledge', ... })` |
| `knowledge` | `/api/v1/assistants/{assistantId}/knowledge` | `client.AssistantKnowledgeSuccess().update({ $action: 'knowledge', ... })` |
| `knowledge` | `/api/v1/catalog/assistants/{assistantId}/knowledge` | `client.AssistantKnowledgeSuccess().update({ $action: 'knowledge', ... })` |

An action returns that action's OWN response, which is not necessarily a
AssistantKnowledgeSuccess record — check the API definition for its shape.

```ts
const result = await client.AssistantKnowledgeSuccess().load({
  $action: 'knowledge',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AssistantKnowledgeSuccess().load({ id: 'assistant_knowledge_success_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AssistantKnowledgeSuccess().update({
  id: 'assistant_knowledge_success_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssistantKnowledgeSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssistantLlmRuntimeUpdateSuccessEntity

```ts
const assistant_llm_runtime_update_success = client.AssistantLlmRuntimeUpdateSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `string` | No | API key of the customer's LLM provider. |
| `assistantApiKey` | `string` | Yes |  |
| `assistantId` | `string` | Yes |  |
| `baseUrl` | `string` | No | Base custom URL of the LLM provider. |
| `configuration` | `Record<string, any>` | Yes | Actual resulting LLM runtime configuration after merge and backend resolution. |
| `engineCode` | `string` | No | LLM engine/provider code. |
| `modelCode` | `string` | No | LLM model code. |
| `providerWalletId` | `number` | No | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `runtimeBinding` | `Record<string, any>` | Yes |  |
| `service` | `string` | Yes |  |
| `sourceMode` | `string` | Yes | Runtime sourcing mode. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AssistantLlmRuntimeUpdateSuccess().update({
  assistant_id: 'assistant_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssistantLlmRuntimeUpdateSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssistantNumberRoutingCatalogSuccessEntity

```ts
const assistant_number_routing_catalog_success = client.AssistantNumberRoutingCatalogSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `number-routing` | `/api/v1/catalog/assistants/{assistantId}/number-routing` | `client.AssistantNumberRoutingCatalogSuccess().load({ $action: 'number-routing', ... })` |

An action returns that action's OWN response, which is not necessarily a
AssistantNumberRoutingCatalogSuccess record — check the API definition for its shape.

```ts
const result = await client.AssistantNumberRoutingCatalogSuccess().load({
  $action: 'number-routing',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AssistantNumberRoutingCatalogSuccess().load({ id: 'assistant_number_routing_catalog_success_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssistantNumberRoutingCatalogSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssistantNumberRoutingRuntimeSuccessEntity

```ts
const assistant_number_routing_runtime_success = client.AssistantNumberRoutingRuntimeSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `Record<string, any>` | Yes |  |
| `demoNumbers` | `any[]` | No | Demo numbers to route to this assistant |
| `purchasedNumbers` | `any[]` | No | Purchased numbers to route to this assistant |
| `userNumbers` | `any[]` | No | Customer's own numbers (own PBX) to route to this assistant |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AssistantNumberRoutingRuntimeSuccess().update({
  assistant_id: 'assistant_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssistantNumberRoutingRuntimeSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssistantPostcallMcpRuntimeSuccessEntity

```ts
const assistant_postcall_mcp_runtime_success = client.AssistantPostcallMcpRuntimeSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `Record<string, any>` | Yes | General configuration of the post-call phase. |
| `enabled` | `boolean` | No | Enable or disable the whole post-call phase without losing its configuration. |
| `globalPrompt` | `string` | No | Global post-call prompt. |
| `modelConfig` | `Record<string, any>` | Yes | Model configuration used by the MCP phase. |
| `tools` | `any[]` | Yes | Complete list of post-call tools to set up. |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `configuration` | - | - |
| `enabled` | - | - |
| `globalPrompt` | - | - |
| `modelConfig` | - | - |
| `tools` | - | Yes |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AssistantPostcallMcpRuntimeSuccess().load({ assistant_id: 'assistant_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AssistantPostcallMcpRuntimeSuccess().update({
  assistant_id: 'assistant_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssistantPostcallMcpRuntimeSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssistantPrecallMcpRuntimeSuccessEntity

```ts
const assistant_precall_mcp_runtime_success = client.AssistantPrecallMcpRuntimeSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `Record<string, any>` | Yes | General configuration of the pre-call phase. |
| `earlyTerminationEnabled` | `boolean` | No | Enable/disable early termination. |
| `enabled` | `boolean` | No | Enable or disable the whole pre-call phase without losing its configuration. |
| `globalPrompt` | `string` | No | Global pre-call prompt. |
| `modelConfig` | `Record<string, any>` | Yes | Model configuration used by the MCP phase. |
| `outputSchema` | `Record<string, any>` | No | JSON schema of the expected pre-call output, as an alternative to `outputVariables`. |
| `outputVariables` | `any[]` | No | Variables to extract from the pre-call result. |
| `terminationMessage` | `string` | No | Early termination audio message. |
| `tools` | `any[]` | Yes | Complete list of pre-call tools to set (replaces the current ones). |
| `voiceConfig` | `Record<string, any>` | Yes | Voice/TTS configuration used to generate pre-call hold and termination audio. |
| `waitingAudioNonInterruptible` | `boolean` | No | `true` plays all on-hold audio, `false` allows the customer to speak over the audio. |
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AssistantPrecallMcpRuntimeSuccess().load({ assistant_id: 'assistant_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AssistantPrecallMcpRuntimeSuccess().update({
  assistant_id: 'assistant_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssistantPrecallMcpRuntimeSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssistantPrecallValidationRuntimeSuccessEntity

```ts
const assistant_precall_validation_runtime_success = client.AssistantPrecallValidationRuntimeSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authPassword` | `string` | No | Basic auth password (null to remove it) |
| `authToken` | `string` | No | Bearer token or API key (null to remove it) |
| `authType` | `string` | No |  |
| `authUsername` | `string` | No | Value supplied for `authUsername` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `configuration` | `any` | Yes | null if no configuration is yet present |
| `headersJson` | `Record<string, any>` | No | Value supplied for `headersJson` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `isActive` | `boolean` | No | Value supplied for `isActive` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `method` | `string` | No |  |
| `name` | `string` | No | Value supplied for `name` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `numberLocation` | `string` | No | Where to insert the calling number in the HTTP request: - `query` — added as a query string (e.g. |
| `numberParamName` | `string` | No | Value supplied for `numberParamName` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `timeoutMs` | `number` | No | Value supplied for `timeoutMs` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `url` | `string` | No | Value supplied for `url` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AssistantPrecallValidationRuntimeSuccess().load({ assistant_id: 'assistant_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AssistantPrecallValidationRuntimeSuccess().update({
  assistant_id: 'assistant_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssistantPrecallValidationRuntimeSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssistantPromptSuccessEntity

```ts
const assistant_prompt_success = client.AssistantPromptSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `prompt` | `/api/v1/assistants/{assistantId}/prompt` | `client.AssistantPromptSuccess().load({ $action: 'prompt', ... })` |

An action returns that action's OWN response, which is not necessarily a
AssistantPromptSuccess record — check the API definition for its shape.

```ts
const result = await client.AssistantPromptSuccess().load({
  $action: 'prompt',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AssistantPromptSuccess().load({ id: 'assistant_prompt_success_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssistantPromptSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssistantRagConfigurationSuccessEntity

```ts
const assistant_rag_configuration_success = client.AssistantRagConfigurationSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes |  |
| `kbPrompt` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `returnedChunks` | `number` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AssistantRagConfigurationSuccess().load({ assistant_id: 'assistant_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssistantRagConfigurationSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssistantRagRuntimeUpdateSuccessEntity

```ts
const assistant_rag_runtime_update_success = client.AssistantRagRuntimeUpdateSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantApiKey` | `string` | Yes |  |
| `assistantId` | `string` | Yes |  |
| `configuration` | `Record<string, any>` | Yes | RAG configuration resulting after application merge. |
| `enabled` | `boolean` | No | Enable or disable RAG for the assistant. |
| `kbPrompt` | `string` | No | Assistant knowledge base instructions. |
| `name` | `string` | No | Name of the RAG collection to associate. |
| `returnedChunks` | `number` | No | Number of relevant fragments to return from the knowledge base. |
| `service` | `string` | Yes |  |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AssistantRagRuntimeUpdateSuccess().update({
  assistant_id: 'assistant_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssistantRagRuntimeUpdateSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssistantSaveConversationRuntimeSuccessEntity

```ts
const assistant_save_conversation_runtime_success = client.AssistantSaveConversationRuntimeSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `Record<string, any>` | Yes |  |
| `emails` | `string` | No | One or more recipient emails separated by commas (e.g. |
| `enabled` | `boolean` | No | Enable or disable sending of the conversation summary via email |
| `smtpInstanceName` | `string` | No | Name of the SMTP plugin instance to use for sending |
| `smtp_instance_name` | `string` | No | Legacy alias of `smtpInstanceName`. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AssistantSaveConversationRuntimeSuccess().load({ assistant_id: 'assistant_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AssistantSaveConversationRuntimeSuccess().update({
  assistant_id: 'assistant_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssistantSaveConversationRuntimeSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssistantSettingsConfigurationSuccessEntity

```ts
const assistant_settings_configuration_success = client.AssistantSettingsConfigurationSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `settings` | `/api/v1/catalog/assistants/{assistantId}/settings` | `client.AssistantSettingsConfigurationSuccess().load({ $action: 'settings', ... })` |

An action returns that action's OWN response, which is not necessarily a
AssistantSettingsConfigurationSuccess record — check the API definition for its shape.

```ts
const result = await client.AssistantSettingsConfigurationSuccess().load({
  $action: 'settings',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AssistantSettingsConfigurationSuccess().load({ id: 'assistant_settings_configuration_success_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssistantSettingsConfigurationSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssistantSettingsRuntimeUpdateSuccessEntity

```ts
const assistant_settings_runtime_update_success = client.AssistantSettingsRuntimeUpdateSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asrInitialDelayMs` | `number` | No | Value supplied for `asrInitialDelayMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `asrSilenceMs` | `number` | No | Value supplied for `asrSilenceMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `assistantApiKey` | `string` | Yes |  |
| `assistantId` | `string` | Yes |  |
| `callPermissions` | `Record<string, any>` | No | Value supplied for `callPermissions` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `configuration` | `Record<string, any>` | Yes |  |
| `dynamicTimeoutMs` | `number` | No | Value supplied for `dynamicTimeoutMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `filler` | `Record<string, any>` | No | Value supplied for `filler` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `maxResponseLength` | `number` | No | Value supplied for `maxResponseLength` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `reprompt` | `Record<string, any>` | No | Value supplied for `reprompt` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `service` | `string` | Yes |  |
| `truncateInitialAudio` | `boolean` | No | Value supplied for `truncateInitialAudio` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `ttsInterruptionInConversation` | `boolean` | No | Value supplied for `ttsInterruptionInConversation` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `vad` | `boolean` | No | Value supplied for `vad` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `vadMinVoiceMs` | `number` | No | Value supplied for `vadMinVoiceMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `vadThreshold` | `number` | No | Value supplied for `vadThreshold` in the `AssistantSettingsRuntimeUpdateRequest` request. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AssistantSettingsRuntimeUpdateSuccess().update({
  assistant_id: 'assistant_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssistantSettingsRuntimeUpdateSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssistantToolsRuntimeUpdateSuccessEntity

```ts
const assistant_tools_runtime_update_success = client.AssistantToolsRuntimeUpdateSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantApiKey` | `string` | Yes |  |
| `assistantId` | `string` | Yes |  |
| `configuration` | `Record<string, any>` | Yes | Resulting tool configuration after the update. |
| `service` | `string` | Yes |  |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AssistantToolsRuntimeUpdateSuccess().update({
  assistant_id: 'assistant_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssistantToolsRuntimeUpdateSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssistantTtsRuntimeUpdateSuccessEntity

```ts
const assistant_tts_runtime_update_success = client.AssistantTtsRuntimeUpdateSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `string` | No | API key of the customer's TTS provider. |
| `assistantApiKey` | `string` | Yes |  |
| `assistantId` | `string` | Yes |  |
| `configuration` | `Record<string, any>` | Yes | Actual resulting TTS runtime configuration after merge and backend resolution. |
| `engineCode` | `string` | No | TTS engine/provider code. |
| `providerWalletId` | `number` | No | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `region` | `string` | No | Region/provider area requested by some engine customers, in particular Azure. |
| `runtimeBinding` | `Record<string, any>` | Yes |  |
| `service` | `string` | Yes |  |
| `sourceMode` | `string` | Yes | Runtime sourcing mode. |
| `voiceCode` | `string` | No | TTS voice code. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AssistantTtsRuntimeUpdateSuccess().update({
  assistant_id: 'assistant_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssistantTtsRuntimeUpdateSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssistantVoiceToVoiceRuntimeUpdateSuccessEntity

```ts
const assistant_voice_to_voice_runtime_update_success = client.AssistantVoiceToVoiceRuntimeUpdateSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `string` | No | Customer key provider API. |
| `assistantApiKey` | `string` | Yes |  |
| `assistantId` | `string` | Yes |  |
| `baseUrl` | `string` | No | Base custom URL. |
| `configuration` | `Record<string, any>` | Yes |  |
| `engineCode` | `string` | No | Provider/engine voice LLM. |
| `modelCode` | `string` | No | LLM voice model code. |
| `prompt` | `string` | No | Main prompt of the audio-to-audio runtime. |
| `providerWalletId` | `number` | No | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `service` | `string` | Yes |  |
| `voiceCode` | `string` | No | Model item code. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AssistantVoiceToVoiceRuntimeUpdateSuccess().update({
  assistant_id: 'assistant_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssistantVoiceToVoiceRuntimeUpdateSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssociatedRuntimeToolListSuccessEntity

```ts
const associated_runtime_tool_list_success = client.AssociatedRuntimeToolListSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes |  |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AssociatedRuntimeToolListSuccess().load({ assistant_id: 'assistant_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssociatedRuntimeToolListSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AudioToAudioEntity

```ts
const audio_to_audio = client.AudioToAudio()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes | Collection metadata. |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AudioToAudio().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AudioToAudioEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AvailableRuntimeToolListSuccessEntity

```ts
const available_runtime_tool_list_success = client.AvailableRuntimeToolListSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes |  |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AvailableRuntimeToolListSuccess().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AvailableRuntimeToolListSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FillerPhraseListEntity

```ts
const filler_phrase_list = client.FillerPhraseList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associations` | `Record<string, any>` | Yes |  |
| `data` | `Record<string, any>` | Yes |  |
| `id` | `string` | Yes | Value supplied for `id` in the `FillerPhraseListCreateRequest` request. |
| `list` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | No |  |
| `name` | `string` | Yes | Value supplied for `name` in the `FillerPhraseListCreateRequest` request. |
| `phrases` | `any[]` | No | Value supplied for `phrases` in the `FillerPhraseListCreateRequest` request. |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |
| `toolListIds` | `any[]` | Yes |  |
| `waitingListIds` | `any[]` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.FillerPhraseList().create({
  associations: {},
  data: {},
  id: 'example_id',
  list: {},
  message: 'example_message',
  name: 'example_name',
  requestId: 'example_requestId',
  success: true,
  toolListIds: [],
  waitingListIds: [],
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.FillerPhraseList().load({ id: 'filler_phrase_list_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.FillerPhraseList().remove({ id: 'filler_phrase_list_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.FillerPhraseList().update({
  id: 'filler_phrase_list_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FillerPhraseListEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HealthEntity

```ts
const health = client.Health()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataSource` | `string` | Yes |  |
| `service` | `string` | Yes |  |
| `status` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Health().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HealthEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## KnowledgeEntity

```ts
const knowledge = client.Knowledge()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `defaultPostAction` | `string` | No | Defaults to `ask_if_needs_more` when omitted |
| `defaultResponse` | `string` | Yes | Default answer used when a trigger has no specific response. |
| `id` | `string` | No |  |
| `knowledge` | `Record<string, any>` | Yes | A knowledge item: a set of recognised requests with their answers, folded into the prompt of every assistant it is associated with. |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | No |  |
| `requestId` | `string` | Yes |  |
| `rules` | `string` | No | Optional constraints applied to the whole knowledge item. |
| `success` | `boolean` | Yes |  |
| `title` | `string` | Yes | Human-readable title of the new knowledge item. |
| `triggers` | `any[]` | No | Initial trigger list for the knowledge item. |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Knowledge().create({
  data: {},
  defaultResponse: 'example_defaultResponse',
  knowledge: {},
  message: 'example_message',
  requestId: 'example_requestId',
  success: true,
  title: 'example_title',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Knowledge().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Knowledge().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Knowledge().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `KnowledgeEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LlmEntity

```ts
const llm = client.Llm()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes | Collection metadata. |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Llm().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LlmEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LlmModelListSuccessEntity

```ts
const llm_model_list_success = client.LlmModelListSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes | Collection metadata. |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.LlmModelListSuccess().load({ assistant_id: 'assistant_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LlmModelListSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OutboundCallEntity

```ts
const outbound_call = client.OutboundCall()
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
| `callbackConfigured` | `boolean` | Yes | Indicates whether the callback URL for the call outcome was configured. |
| `callerId` | `string` | Yes | Caller number displayed in E.164 format. |
| `dst` | `string` | Yes | Recipient number in E.164 format, example +3902XXXXXXXX. |
| `internalId` | `string` | Yes | UUID generated by AI4Call to correlate the outbound request, callback and final dial-status lookup. |
| `status` | `string` | Yes | Initial status of the outbound request. |
| `url_esito_chiamata` | `any` | No | Legacy alias of `callResultUrl`. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OutboundCall().create({
  callbackConfigured: true,
  callerId: 'example_callerId',
  dst: 'example_dst',
  internalId: 'example_internalId',
  status: 'example_status',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OutboundCallEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OutboundCallAcceptedSuccessEntity

```ts
const outbound_call_accepted_success = client.OutboundCallAcceptedSuccess()
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
| `callbackConfigured` | `boolean` | Yes | Indicates whether the callback URL for the call outcome was configured. |
| `callerId` | `string` | Yes | Calling number displayed in the format required by the PBX, E.164 +3902XXXXXXXX or local 02XXXXXXXX. |
| `dst` | `string` | Yes | Recipient number in the format required by the PBX, E.164 +3902XXXXXXXX or local 02XXXXXXXX. |
| `internalId` | `string` | Yes | UUID generated by AI4Call to correlate the outbound request, callback and final dial-status lookup. |
| `ipPbx` | `string` | No | Public IP of the PBX, must be one of the authorized public IPs. |
| `ip_pbx` | `string` | No | Legacy alias of `ipPbx`. |
| `method_uac` | `boolean` | No | Selects the registered UAC mode. |
| `sipPort` | `string` | No | SIP port of the PBX, standard 5060. |
| `sip_port` | `string` | No | Legacy alias of `sipPort`. |
| `status` | `string` | Yes | Initial status of the outbound request. |
| `url_esito_chiamata` | `any` | No | Legacy alias of `callResultUrl`. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OutboundCallAcceptedSuccess().create({
  callbackConfigured: true,
  callerId: 'example_callerId',
  dst: 'example_dst',
  internalId: 'example_internalId',
  status: 'example_status',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OutboundCallAcceptedSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OutboundDialStatusPayloadEntity

```ts
const outbound_dial_status_payload = client.OutboundDialStatusPayload()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billSec` | `number` | Yes | Billed duration in seconds. |
| `dialStatus` | `string` | Yes | Final dial result persisted in the outbound CDR. |
| `trafficCost` | `string` | Yes | Outbound traffic cost in EUR, expressed with six decimal places. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OutboundDialStatusPayload().load({ uuid: 'uuid' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OutboundDialStatusPayloadEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PortalLoginSuccessEntity

```ts
const portal_login_success = client.PortalLoginSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client` | `Record<string, any>` | Yes | Customer profile returned after successful portal credential verification. |
| `email` | `string` | Yes | Portal customer email. |
| `portalApiKey` | `string` | Yes | Static portal API key associated with the customer account. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PortalLoginSuccess().create({
  client: {},
  email: 'example_email',
  portalApiKey: 'example_portalApiKey',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PortalLoginSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PreCallEntity

```ts
const pre_call = client.PreCall()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PreCall().load({ assistant_id: 'assistant_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PreCallEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProviderWalletEntity

```ts
const provider_wallet = client.ProviderWallet()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `Record<string, any>` | Yes | Values of the fields declared by the catalog entry |
| `credential` | `Record<string, any>` | Yes | A credential saved by the customer. |
| `data` | `Record<string, any>` | Yes |  |
| `engine` | `string` | Yes | Engine code selected from the provider-wallet catalog. |
| `id` | `string` | No |  |
| `isActive` | `boolean` | No | Whether the saved credential can be used by assistant runtimes. |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | No |  |
| `name` | `string` | Yes | Customer-defined name for the saved credential. |
| `provider` | `string` | Yes | Provider code selected from the provider-wallet catalog. |
| `requestId` | `string` | Yes |  |
| `serviceType` | `string` | Yes | Service category selected from the provider-wallet catalog. |
| `success` | `boolean` | Yes |  |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ProviderWallet().create({
  config: {},
  credential: {},
  data: {},
  engine: 'example_engine',
  message: 'example_message',
  name: 'example_name',
  provider: 'example_provider',
  requestId: 'example_requestId',
  serviceType: 'example_serviceType',
  success: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ProviderWallet().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ProviderWallet().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ProviderWallet().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProviderWalletEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProviderWalletAssociationsSuccessEntity

```ts
const provider_wallet_associations_success = client.ProviderWalletAssociationsSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | No |  |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ProviderWalletAssociationsSuccess().load({ assistant_id: 'assistant_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProviderWalletAssociationsSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProviderWalletCatalogSuccessEntity

```ts
const provider_wallet_catalog_success = client.ProviderWalletCatalogSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | No |  |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ProviderWalletCatalogSuccess().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProviderWalletCatalogSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PublicRagSearchSuccessEntity

```ts
const public_rag_search_success = client.PublicRagSearchSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes | Number of chunks returned by the search, up to the service limit of 4. |
| `query` | `string` | Yes | Normalized query text used for the search. |
| `rag_id` | `string` | Yes | Public RAG identifier supplied in the request and returned unchanged on success. |
| `results` | `any[]` | Yes | Chunks returned by the vector search. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PublicRagSearchSuccess().create({
  count: 1,
  query: 'example_query',
  rag_id: 'example_rag_id',
  results: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PublicRagSearchSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RagCollectionDeleteSuccessEntity

```ts
const rag_collection_delete_success = client.RagCollectionDeleteSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `description` | `string` | No | Value supplied for `description` in the `RagCollectionCreateRequest` request. |
| `maxChunkSize` | `number` | No | Value supplied for `maxChunkSize` in the `RagCollectionCreateRequest` request. |
| `maxChunksPerFile` | `number` | No | Value supplied for `maxChunksPerFile` in the `RagCollectionCreateRequest` request. |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes | Collection metadata. |
| `name` | `string` | Yes | Value supplied for `name` in the `RagCollectionCreateRequest` request. |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RagCollectionDeleteSuccess().create({
  data: {},
  message: 'example_message',
  meta: {},
  name: 'example_name',
  requestId: 'example_requestId',
  success: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RagCollectionDeleteSuccess().load()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.RagCollectionDeleteSuccess().remove({ rag_id: 'rag_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RagCollectionDeleteSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RagCollectionDocumentDeleteSuccessEntity

```ts
const rag_collection_document_delete_success = client.RagCollectionDocumentDeleteSuccess()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.RagCollectionDocumentDeleteSuccess().remove({ collection_id: 'collection_id', file_name: 'file_name' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RagCollectionDocumentDeleteSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RagCollectionDocumentListSuccessEntity

```ts
const rag_collection_document_list_success = client.RagCollectionDocumentListSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes | Collection metadata. |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RagCollectionDocumentListSuccess().load({ collection_id: 'collection_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RagCollectionDocumentListSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RagCollectionDocumentTokenEstimateSuccessEntity

```ts
const rag_collection_document_token_estimate_success = client.RagCollectionDocumentTokenEstimateSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `estimatedCost` | `number` | Yes |  |
| `fileCount` | `number` | Yes |  |
| `fileDetails` | `any[]` | Yes |  |
| `processingTime` | `number` | Yes |  |
| `raw` | `Record<string, any>` | Yes |  |
| `totalTokens` | `number` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RagCollectionDocumentTokenEstimateSuccess().create({
  estimatedCost: 1,
  fileCount: 1,
  fileDetails: [],
  processingTime: 1,
  raw: {},
  totalTokens: 1,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RagCollectionDocumentTokenEstimateSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RagCollectionDocumentUploadStatusSuccessEntity

```ts
const rag_collection_document_upload_status_success = client.RagCollectionDocumentUploadStatusSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `currentFile` | `string` | Yes |  |
| `errors` | `any[]` | Yes |  |
| `processedFiles` | `number` | Yes |  |
| `progress` | `number` | Yes |  |
| `raw` | `Record<string, any>` | Yes |  |
| `results` | `any[]` | Yes |  |
| `status` | `string` | Yes |  |
| `totalCost` | `number` | Yes |  |
| `totalFiles` | `number` | Yes |  |
| `totalTokens` | `number` | Yes |  |
| `uploadId` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RagCollectionDocumentUploadStatusSuccess().load({ upload_id: 'upload_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RagCollectionDocumentUploadStatusSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RagCollectionDocumentUploadSuccessEntity

```ts
const rag_collection_document_upload_success = client.RagCollectionDocumentUploadSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes | Result returned after starting a RAG document upload. |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes | Collection metadata. |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RagCollectionDocumentUploadSuccess().create({
  collection_id: 'example_collection_id',
  data: {},
  message: 'example_message',
  meta: {},
  requestId: 'example_requestId',
  success: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RagCollectionDocumentUploadSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RuntimeBindingEntity

```ts
const runtime_binding = client.RuntimeBinding()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantApiKey` | `string` | Yes |  |
| `assistantId` | `string` | Yes |  |
| `runtimeBindings` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RuntimeBinding().load({ assistant_id: 'assistant_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RuntimeBindingEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TtsEntity

```ts
const tts = client.Tts()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes | Collection metadata. |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Tts().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TtsEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TtsVoiceListSuccessEntity

```ts
const tts_voice_list_success = client.TtsVoiceListSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes | Collection metadata. |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TtsVoiceListSuccess().load({ assistant_id: 'assistant_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TtsVoiceListSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VoiceEntity

```ts
const voice = client.Voice()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes | Collection metadata. |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Voice().load({ model_code: 'model_code' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VoiceEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VoiceLlmEntity

```ts
const voice_llm = client.VoiceLlm()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes | Collection metadata. |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.VoiceLlm().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VoiceLlmEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VoiceLlmModelListSuccessEntity

```ts
const voice_llm_model_list_success = client.VoiceLlmModelListSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes |  |
| `meta` | `Record<string, any>` | Yes | Collection metadata. |
| `requestId` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.VoiceLlmModelListSuccess().load({ provider: 'provider' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VoiceLlmModelListSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `Ai4callSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ts
const client = new Ai4callSDK({
  feature: {
    test: { active: true },
  }
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

