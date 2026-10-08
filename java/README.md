# Ai4call Java SDK



The Java SDK for the Ai4call API — an entity-oriented client following idiomatic Java conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.accountAllowedIpsSuccess(null)` — each
carrying a small, uniform set of operations (`load`, `create`, `update`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Maven Central. Install it from the GitHub
release tag (`java/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/ai4call-sdk/releases)) or
from a source checkout — build the library with Maven:

```bash
cd java && mvn install
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```java
import voxgig.ai4callsdk.core.Ai4callSDK;

Map<String, Object> options = new java.util.LinkedHashMap<>();
options.put("apikey", System.getenv("AI4CALL_APIKEY"));
Ai4callSDK client = new Ai4callSDK(options);
```

### 3. Load an asrmodellistsuccess

AsrModelListSuccess is nested under assistant, so provide the `assistant_id`.
`load()` returns the ENTITY — call data() for the record — and raises on error.

```java
try {
    Object asrModelListSuccess = client.asrModelListSuccess(null).load(Map.of("assistant_id", "example_assistant_id"), null);
    System.out.println(asrModelListSuccess);
}
catch (RuntimeException err) {
    System.out.println("load failed: " + err.getMessage());
}
```

### 4. Create, update, and remove

```java
// Update — supply the id in the match/data
client.accountAllowedIpsSuccess(null).update(Map.of("addIps", List.of(), "allowedIps", List.of()), null);

```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const analyticsragsearchsuccess = await client.AnalyticsRagSearchSuccess().load()
  console.log(analyticsragsearchsuccess)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```java
Map<String, Object> result = client.direct(Map.of(
    "path", "/api/resource/{id}",
    "method", "GET",
    "params", Map.of("id", "example")));

if (Boolean.TRUE.equals(result.get("ok"))) {
    System.out.println(result.get("status"));  // 200
    System.out.println(result.get("data"));    // response body
}
else {
    // A non-2xx response carries status + data (the error body); a
    // transport-level failure carries err instead. Only one is present, so
    // read both — an absent key simply reads as null.
    System.out.println(result.get("status") + " " + result.get("err"));
}
```

### Prepare a request without sending it

```java
// prepare() returns the fetch definition and raises on error.
Map<String, Object> fetchdef = client.prepare(Map.of(
    "path", "/api/resource/{id}",
    "method", "DELETE",
    "params", Map.of("id", "example")));

System.out.println(fetchdef.get("url"));
System.out.println(fetchdef.get("method"));
System.out.println(fetchdef.get("headers"));
```

### Use test mode

Create a mock client for unit testing — no server required:

```java
Ai4callSDK client = Ai4callSDK.testSDK(null, null);

// Entity ops return the ENTITY and raises on error;
// call data() for the record.
Object analyticsRagSearchSuccess = client.analyticsRagSearchSuccess(null).load(null, null);
// analyticsRagSearchSuccess holds the mock response record
System.out.println(analyticsRagSearchSuccess);
```

### Use a custom fetch function

Replace the HTTP transport with your own `BiFunction`:

```java
java.util.function.BiFunction<String, Map<String, Object>, Object> mockFetch =
    (url, init) -> {
        Map<String, Object> res = new java.util.LinkedHashMap<>();
        res.put("status", 200);
        res.put("statusText", "OK");
        res.put("headers", new java.util.LinkedHashMap<String, Object>());
        res.put("json", (java.util.function.Supplier<Object>) () ->
            Map.of("id", "mock01"));
        return res;
    };

Map<String, Object> options = new java.util.LinkedHashMap<>();
options.put("base", "http://localhost:8080");
options.put("system", Map.of("fetch", mockFetch));
Ai4callSDK client = new Ai4callSDK(options);
```

### Run live tests

Create a `.env.local` file at the project root:

```
AI4CALL_TEST_LIVE=TRUE
AI4CALL_APIKEY=<your-key>
```

Then run:

```bash
cd java && mvn test
```


## Reference

### Ai4callSDK

```java
Ai4callSDK client = new Ai4callSDK(options);
```

Creates a new SDK client. `options` is a `Map<String, Object>`.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Map` | Feature activation flags. |
| `extend` | `List` | Additional Feature instances to load. |
| `system` | `Map` | System overrides (e.g. custom `fetch` function). |

### testSDK

```java
Ai4callSDK client = Ai4callSDK.testSDK(testopts, sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### Ai4callSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `optionsMap` | `() -> Map` | Deep copy of current SDK options. |
| `getUtility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Map` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Map` | Build and send an HTTP request. Returns a result map (branch on `ok`). |
| `accountAllowedIpsSuccess` | `(entopts) -> SdkEntity` | Create an AccountAllowedIpsSuccess entity instance. |
| `accountAvailablePluginsSuccess` | `(entopts) -> SdkEntity` | Create an AccountAvailablePluginsSuccess entity instance. |
| `accountCallLimitsSuccess` | `(entopts) -> SdkEntity` | Create an AccountCallLimitsSuccess entity instance. |
| `accountNumberRoutingSuccess` | `(entopts) -> SdkEntity` | Create an AccountNumberRoutingSuccess entity instance. |
| `accountPluginConfigurationSuccess` | `(entopts) -> SdkEntity` | Create an AccountPluginConfigurationSuccess entity instance. |
| `accountPluginInstanceSuccess` | `(entopts) -> SdkEntity` | Create an AccountPluginInstanceSuccess entity instance. |
| `accountPluginPurchaseSuccess` | `(entopts) -> SdkEntity` | Create an AccountPluginPurchaseSuccess entity instance. |
| `analyticsCallsOutboundSuccess` | `(entopts) -> SdkEntity` | Create an AnalyticsCallsOutboundSuccess entity instance. |
| `analyticsCallsSuccess` | `(entopts) -> SdkEntity` | Create an AnalyticsCallsSuccess entity instance. |
| `analyticsPostCallSuccess` | `(entopts) -> SdkEntity` | Create an AnalyticsPostCallSuccess entity instance. |
| `analyticsPreCallSuccess` | `(entopts) -> SdkEntity` | Create an AnalyticsPreCallSuccess entity instance. |
| `analyticsRagSearchSuccess` | `(entopts) -> SdkEntity` | Create an AnalyticsRagSearchSuccess entity instance. |
| `analyticsRagSuccess` | `(entopts) -> SdkEntity` | Create an AnalyticsRagSuccess entity instance. |
| `analyticsRechargesSuccess` | `(entopts) -> SdkEntity` | Create an AnalyticsRechargesSuccess entity instance. |
| `analyticsSmsSuccess` | `(entopts) -> SdkEntity` | Create an AnalyticsSmsSuccess entity instance. |
| `analyticsToolResponsesSuccess` | `(entopts) -> SdkEntity` | Create an AnalyticsToolResponsesSuccess entity instance. |
| `asr` | `(entopts) -> SdkEntity` | Create an Asr entity instance. |
| `asrModelListSuccess` | `(entopts) -> SdkEntity` | Create an AsrModelListSuccess entity instance. |
| `assistant` | `(entopts) -> SdkEntity` | Create an Assistant entity instance. |
| `assistantAdvancedSettingsConfigurationSuccess` | `(entopts) -> SdkEntity` | Create an AssistantAdvancedSettingsConfigurationSuccess entity instance. |
| `assistantAdvancedSettingsRuntimeUpdateSuccess` | `(entopts) -> SdkEntity` | Create an AssistantAdvancedSettingsRuntimeUpdateSuccess entity instance. |
| `assistantAsrRuntimeUpdateSuccess` | `(entopts) -> SdkEntity` | Create an AssistantAsrRuntimeUpdateSuccess entity instance. |
| `assistantConversationWebhookRuntimeSuccess` | `(entopts) -> SdkEntity` | Create an AssistantConversationWebhookRuntimeSuccess entity instance. |
| `assistantDtmfConfigurationSuccess` | `(entopts) -> SdkEntity` | Create an AssistantDtmfConfigurationSuccess entity instance. |
| `assistantDtmfRuntimeUpdateSuccess` | `(entopts) -> SdkEntity` | Create an AssistantDtmfRuntimeUpdateSuccess entity instance. |
| `assistantHangupConfigurationSuccess` | `(entopts) -> SdkEntity` | Create an AssistantHangupConfigurationSuccess entity instance. |
| `assistantHangupRuntimeUpdateSuccess` | `(entopts) -> SdkEntity` | Create an AssistantHangupRuntimeUpdateSuccess entity instance. |
| `assistantHangupSchemaRuntimeSuccess` | `(entopts) -> SdkEntity` | Create an AssistantHangupSchemaRuntimeSuccess entity instance. |
| `assistantKnowledgeSuccess` | `(entopts) -> SdkEntity` | Create an AssistantKnowledgeSuccess entity instance. |
| `assistantLlmRuntimeUpdateSuccess` | `(entopts) -> SdkEntity` | Create an AssistantLlmRuntimeUpdateSuccess entity instance. |
| `assistantNumberRoutingCatalogSuccess` | `(entopts) -> SdkEntity` | Create an AssistantNumberRoutingCatalogSuccess entity instance. |
| `assistantNumberRoutingRuntimeSuccess` | `(entopts) -> SdkEntity` | Create an AssistantNumberRoutingRuntimeSuccess entity instance. |
| `assistantPostcallMcpRuntimeSuccess` | `(entopts) -> SdkEntity` | Create an AssistantPostcallMcpRuntimeSuccess entity instance. |
| `assistantPrecallMcpRuntimeSuccess` | `(entopts) -> SdkEntity` | Create an AssistantPrecallMcpRuntimeSuccess entity instance. |
| `assistantPrecallValidationRuntimeSuccess` | `(entopts) -> SdkEntity` | Create an AssistantPrecallValidationRuntimeSuccess entity instance. |
| `assistantPromptSuccess` | `(entopts) -> SdkEntity` | Create an AssistantPromptSuccess entity instance. |
| `assistantRagConfigurationSuccess` | `(entopts) -> SdkEntity` | Create an AssistantRagConfigurationSuccess entity instance. |
| `assistantRagRuntimeUpdateSuccess` | `(entopts) -> SdkEntity` | Create an AssistantRagRuntimeUpdateSuccess entity instance. |
| `assistantSaveConversationRuntimeSuccess` | `(entopts) -> SdkEntity` | Create an AssistantSaveConversationRuntimeSuccess entity instance. |
| `assistantSettingsConfigurationSuccess` | `(entopts) -> SdkEntity` | Create an AssistantSettingsConfigurationSuccess entity instance. |
| `assistantSettingsRuntimeUpdateSuccess` | `(entopts) -> SdkEntity` | Create an AssistantSettingsRuntimeUpdateSuccess entity instance. |
| `assistantToolsRuntimeUpdateSuccess` | `(entopts) -> SdkEntity` | Create an AssistantToolsRuntimeUpdateSuccess entity instance. |
| `assistantTtsRuntimeUpdateSuccess` | `(entopts) -> SdkEntity` | Create an AssistantTtsRuntimeUpdateSuccess entity instance. |
| `assistantVoiceToVoiceRuntimeUpdateSuccess` | `(entopts) -> SdkEntity` | Create an AssistantVoiceToVoiceRuntimeUpdateSuccess entity instance. |
| `associatedRuntimeToolListSuccess` | `(entopts) -> SdkEntity` | Create an AssociatedRuntimeToolListSuccess entity instance. |
| `audioToAudio` | `(entopts) -> SdkEntity` | Create an AudioToAudio entity instance. |
| `availableRuntimeToolListSuccess` | `(entopts) -> SdkEntity` | Create an AvailableRuntimeToolListSuccess entity instance. |
| `fillerPhraseList` | `(entopts) -> SdkEntity` | Create a FillerPhraseList entity instance. |
| `health` | `(entopts) -> SdkEntity` | Create a Health entity instance. |
| `knowledge` | `(entopts) -> SdkEntity` | Create a Knowledge entity instance. |
| `llm` | `(entopts) -> SdkEntity` | Create a Llm entity instance. |
| `llmModelListSuccess` | `(entopts) -> SdkEntity` | Create a LlmModelListSuccess entity instance. |
| `outboundCall` | `(entopts) -> SdkEntity` | Create an OutboundCall entity instance. |
| `outboundCallAcceptedSuccess` | `(entopts) -> SdkEntity` | Create an OutboundCallAcceptedSuccess entity instance. |
| `outboundDialStatusPayload` | `(entopts) -> SdkEntity` | Create an OutboundDialStatusPayload entity instance. |
| `portalLoginSuccess` | `(entopts) -> SdkEntity` | Create a PortalLoginSuccess entity instance. |
| `preCall` | `(entopts) -> SdkEntity` | Create a PreCall entity instance. |
| `providerWallet` | `(entopts) -> SdkEntity` | Create a ProviderWallet entity instance. |
| `providerWalletAssociationsSuccess` | `(entopts) -> SdkEntity` | Create a ProviderWalletAssociationsSuccess entity instance. |
| `providerWalletCatalogSuccess` | `(entopts) -> SdkEntity` | Create a ProviderWalletCatalogSuccess entity instance. |
| `publicRagSearchSuccess` | `(entopts) -> SdkEntity` | Create a PublicRagSearchSuccess entity instance. |
| `ragCollectionDeleteSuccess` | `(entopts) -> SdkEntity` | Create a RagCollectionDeleteSuccess entity instance. |
| `ragCollectionDocumentDeleteSuccess` | `(entopts) -> SdkEntity` | Create a RagCollectionDocumentDeleteSuccess entity instance. |
| `ragCollectionDocumentListSuccess` | `(entopts) -> SdkEntity` | Create a RagCollectionDocumentListSuccess entity instance. |
| `ragCollectionDocumentTokenEstimateSuccess` | `(entopts) -> SdkEntity` | Create a RagCollectionDocumentTokenEstimateSuccess entity instance. |
| `ragCollectionDocumentUploadStatusSuccess` | `(entopts) -> SdkEntity` | Create a RagCollectionDocumentUploadStatusSuccess entity instance. |
| `ragCollectionDocumentUploadSuccess` | `(entopts) -> SdkEntity` | Create a RagCollectionDocumentUploadSuccess entity instance. |
| `runtimeBinding` | `(entopts) -> SdkEntity` | Create a RuntimeBinding entity instance. |
| `tts` | `(entopts) -> SdkEntity` | Create a Tts entity instance. |
| `ttsVoiceListSuccess` | `(entopts) -> SdkEntity` | Create a TtsVoiceListSuccess entity instance. |
| `voice` | `(entopts) -> SdkEntity` | Create a Voice entity instance. |
| `voiceLlm` | `(entopts) -> SdkEntity` | Create a VoiceLlm entity instance. |
| `voiceLlmModelListSuccess` | `(entopts) -> SdkEntity` | Create a VoiceLlmModelListSuccess entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> Object` | Load a single entity by match criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> Object` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> Object` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> Object` | Remove an entity. Raises on error. |
| `data` | `(newdata...) -> Object` | Get or set entity data. |
| `match` | `(newmatch...) -> Object` | Get or set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `getName` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data() for the record) (a `Map` for single-entity
ops, an aggregate `List` for `list`) as `Object` and raise on error. Wrap
calls in `try`/`catch` to handle failures.

The `direct()` escape hatch never raises — it returns a result
`Map<String, Object>` you branch on via `result.get("ok")`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `Map` | Response headers. |
| `data` | `Object` | Parsed JSON response body. |

On error, `ok` is `false` and `err` contains the error value.

### Entities

#### AccountAllowedIpsSuccess

| Field | Description |
| --- | --- |
| `addIps` | Value supplied for `addIps` in the `AccountAllowedIpsUpdateRequest` request. |
| `allowedIps` | Value supplied for `allowedIps` in the `AccountAllowedIpsUpdateRequest` request. |
| `data` |  |
| `deleteIps` | Value supplied for `deleteIps` in the `AccountAllowedIpsUpdateRequest` request. |
| `message` |  |
| `meta` |  |
| `requestId` |  |
| `success` |  |

Operations: load, update.

API path: `/api/v1/account/allowed-ips`

#### AccountAvailablePluginsSuccess

| Field | Description |
| --- | --- |
| `data` |  |
| `message` |  |
| `meta` |  |
| `requestId` |  |
| `success` |  |

Operations: load.

API path: `/api/v1/account/plugins/available`

#### AccountCallLimitsSuccess

| Field | Description |
| --- | --- |
| `assistants` | Value supplied for `assistants` in the `AccountCallLimitsUpdateRequest` request. |
| `data` |  |
| `message` |  |
| `meta` |  |
| `requestId` |  |
| `success` |  |

Operations: load, update.

API path: `/api/v1/account/call-limits`

#### AccountNumberRoutingSuccess

| Field | Description |
| --- | --- |
| `data` |  |
| `demoNumbers` | Value supplied for `demoNumbers` in the `AccountNumberRoutingUpdateRequest` request. |
| `message` |  |
| `meta` |  |
| `purchasedNumbers` | Value supplied for `purchasedNumbers` in the `AccountNumberRoutingUpdateRequest` request. |
| `requestId` |  |
| `success` |  |
| `userNumbers` | Value supplied for `userNumbers` in the `AccountNumberRoutingUpdateRequest` request. |

Operations: load, update.

API path: `/api/v1/account/number-routing`

#### AccountPluginConfigurationSuccess

| Field | Description |
| --- | --- |
| `configuration` | Configuration contract and current values for one plugin instance. |
| `instanceName` | Value supplied for `instanceName` in the `AccountPluginConfigurationUpdateRequest` request. |
| `instance_name` | Legacy alias of `instanceName`. |
| `pluginName` | Value supplied for `pluginName` in the `AccountPluginConfigurationUpdateRequest` request. |
| `plugin_name` | Legacy alias of `pluginName`. |

Operations: load, update.

API path: `/api/v1/account/plugins/configuration`

#### AccountPluginInstanceSuccess

| Field | Description |
| --- | --- |
| `configuration` | Current lifecycle information for one purchased plugin instance. |
| `data` |  |
| `instanceName` | Value supplied for `instanceName` in the `AccountPluginPurchaseRequest` request. |
| `instance_name` | Legacy alias of `instanceName`. |
| `message` |  |
| `meta` |  |
| `newInstanceName` | Value supplied for `newInstanceName` in the `AccountPluginInstanceByIdUpdateRequest` request. |
| `new_instance_name` | Legacy alias of `newInstanceName`. |
| `pluginName` | Value supplied for `pluginName` in the `AccountPluginPurchaseRequest` request. |
| `plugin_name` | Legacy alias of `pluginName`. |
| `requestId` |  |
| `status` | Value supplied for `status` in the `AccountPluginInstanceUpdateRequest` request. |
| `success` |  |

Operations: create, load, remove, update.

API path: `/api/v1/account/plugins/instances`

#### AccountPluginPurchaseSuccess

| Field | Description |
| --- | --- |
| `configuration` | Result of a plugin purchase, including charged prices and created instance data. |
| `instanceName` | Value supplied for `instanceName` in the `AccountPluginPurchaseRequest` request. |
| `instance_name` | Legacy alias of `instanceName`. |
| `pluginName` | Value supplied for `pluginName` in the `AccountPluginPurchaseRequest` request. |
| `plugin_name` | Legacy alias of `pluginName`. |

Operations: update.

API path: `/api/v1/account/plugins/purchase`

#### AnalyticsCallsOutboundSuccess

| Field | Description |
| --- | --- |
| `data` |  |
| `message` |  |
| `meta` |  |
| `requestId` |  |
| `success` |  |

Operations: load.

API path: `/api/v1/account/analytics/calls-outbound`

#### AnalyticsCallsSuccess

| Field | Description |
| --- | --- |
| `data` |  |
| `message` |  |
| `meta` |  |
| `requestId` |  |
| `success` |  |

Operations: load.

API path: `/api/v1/account/analytics/calls`

#### AnalyticsPostCallSuccess

| Field | Description |
| --- | --- |
| `data` |  |
| `message` |  |
| `meta` |  |
| `requestId` |  |
| `success` |  |

Operations: load.

API path: `/api/v1/account/analytics/post-call`

#### AnalyticsPreCallSuccess

| Field | Description |
| --- | --- |
| `data` |  |
| `message` |  |
| `meta` |  |
| `requestId` |  |
| `success` |  |

Operations: load.

API path: `/api/v1/account/analytics/pre-call`

#### AnalyticsRagSearchSuccess

| Field | Description |
| --- | --- |
| `data` |  |
| `message` |  |
| `meta` |  |
| `requestId` |  |
| `success` |  |

Operations: load.

API path: `/api/v1/account/analytics/rag-searches`

#### AnalyticsRagSuccess

| Field | Description |
| --- | --- |
| `data` |  |
| `message` |  |
| `meta` |  |
| `requestId` |  |
| `success` |  |

Operations: load.

API path: `/api/v1/account/analytics/rag`

#### AnalyticsRechargesSuccess

| Field | Description |
| --- | --- |
| `data` |  |
| `message` |  |
| `meta` |  |
| `requestId` |  |
| `success` |  |

Operations: load.

API path: `/api/v1/account/analytics/recharges`

#### AnalyticsSmsSuccess

| Field | Description |
| --- | --- |
| `data` |  |
| `message` |  |
| `meta` |  |
| `requestId` |  |
| `success` |  |

Operations: load.

API path: `/api/v1/account/analytics/sms`

#### AnalyticsToolResponsesSuccess

| Field | Description |
| --- | --- |
| `data` |  |
| `message` |  |
| `meta` |  |
| `requestId` |  |
| `success` |  |

Operations: load.

API path: `/api/v1/account/analytics/tool-responses`

#### Asr

| Field | Description |
| --- | --- |
| `data` |  |
| `message` |  |
| `meta` | Collection metadata. |
| `requestId` |  |
| `success` |  |

Operations: load.

API path: `/api/v1/catalog/providers/asr`

#### AsrModelListSuccess

| Field | Description |
| --- | --- |
| `data` |  |
| `message` |  |
| `meta` | Collection metadata. |
| `requestId` |  |
| `success` |  |

Operations: load.

API path: `/api/v1/catalog/assistants/{assistantId}/asr/models`

#### Assistant

| Field | Description |
| --- | --- |
| `assistant` | Assistant detail response, including the legacy assistant API key during the v1 compatibility period. |
| `audioToAudio` | Initial audio-to-audio configuration, used when applicable to the selected mode. |
| `data` |  |
| `description` | Functional description of the assistant. |
| `firstMessage` | Partial update of the assistant's first-message configuration. |
| `id` |  |
| `message` |  |
| `meta` | Collection metadata. |
| `metadata` | Free-form metadata to store with the assistant. |
| `mode` | Runtime mode to use when creating the assistant. |
| `name` | Assistant name. |
| `network` | Network settings to update on the assistant. |
| `numbers` | Replacement values for assistant number lists when supplied. |
| `requestId` |  |
| `settings` | High-level assistant settings to update. |
| `status` | New lifecycle status for the assistant. |
| `success` |  |
| `voiceToVoice` | Legacy alias of `audioToAudio`. |

Operations: create, load, remove, update.

API path: `/api/v1/assistants`

#### AssistantAdvancedSettingsConfigurationSuccess

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load.

API path: `/api/v1/catalog/assistants/{assistantId}/advanced-settings`

#### AssistantAdvancedSettingsRuntimeUpdateSuccess

| Field | Description |
| --- | --- |
| `assistantApiKey` |  |
| `assistantId` |  |
| `configuration` |  |
| `freqPenalty` | Value supplied for `freqPenalty` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `maxTokens` | Value supplied for `maxTokens` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `presencePenalty` | Value supplied for `presencePenalty` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `service` |  |
| `stopSequences` | Value supplied for `stopSequences` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `temperature` | Value supplied for `temperature` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `topK` | Value supplied for `topK` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `topP` | Value supplied for `topP` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |

Operations: update.

API path: `/api/v1/assistants/{assistantId}/runtime/advanced-settings`

#### AssistantAsrRuntimeUpdateSuccess

| Field | Description |
| --- | --- |
| `apiKey` | API key of the customer's ASR provider. |
| `assistantApiKey` |  |
| `assistantId` |  |
| `configuration` | Actual resulting ASR runtime configuration after merge and backend resolution. |
| `engineCode` | ASR engine/provider code. |
| `providerWalletId` | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `runtimeBinding` |  |
| `service` |  |
| `sourceMode` | Runtime sourcing mode. |

Operations: update.

API path: `/api/v1/assistants/{assistantId}/runtime/asr`

#### AssistantConversationWebhookRuntimeSuccess

| Field | Description |
| --- | --- |
| `authName` | Name of the saved authentication to apply to the request |
| `configuration` |  |
| `enabled` | Enable or disable sending the conversation to the webhook |
| `url` | Endpoint that receives the POST at the end of the call |

Operations: load, update.

API path: `/api/v1/assistants/{assistantId}/runtime/hangup/conversation-webhook`

#### AssistantDtmfConfigurationSuccess

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load.

API path: `/api/v1/catalog/assistants/{assistantId}/dtmf`

#### AssistantDtmfRuntimeUpdateSuccess

| Field | Description |
| --- | --- |
| `acceptTimeout` | Value supplied for `acceptTimeout` in the `AssistantDtmfRuntimeUpdateRequest` request. |
| `assistantApiKey` |  |
| `assistantId` |  |
| `configuration` |  |
| `enabled` | Enable or disable DTMF reception. |
| `maxLength` | Value supplied for `maxLength` in the `AssistantDtmfRuntimeUpdateRequest` request. |
| `minLength` | Value supplied for `minLength` in the `AssistantDtmfRuntimeUpdateRequest` request. |
| `playEnabled` | Enable or disable DTMF sending during the call. |
| `service` |  |
| `terminationChars` | Value supplied for `terminationChars` in the `AssistantDtmfRuntimeUpdateRequest` request. |

Operations: update.

API path: `/api/v1/assistants/{assistantId}/runtime/dtmf`

#### AssistantHangupConfigurationSuccess

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load.

API path: `/api/v1/catalog/assistants/{assistantId}/hangup`

#### AssistantHangupRuntimeUpdateSuccess

| Field | Description |
| --- | --- |
| `assistantApiKey` |  |
| `assistantId` |  |
| `availableAgents` | Value supplied for `availableAgents` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `configuration` |  |
| `enableHangup` | Value supplied for `enableHangup` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `enableRedirect` | Value supplied for `enableRedirect` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `enableTransferAgent` | Value supplied for `enableTransferAgent` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `service` |  |
| `transferAgentNotificationText` | Value supplied for `transferAgentNotificationText` in the `AssistantHangupRuntimeUpdateRequest` request. |

Operations: update.

API path: `/api/v1/assistants/{assistantId}/runtime/hangup`

#### AssistantHangupSchemaRuntimeSuccess

| Field | Description |
| --- | --- |
| `configuration` |  |
| `hangupUrl` | Hangup webhook URL (null to remove) |
| `schema` | Defining body fields (overrides the current schema) |

Operations: load, update.

API path: `/api/v1/assistants/{assistantId}/runtime/hangup/schema`

#### AssistantKnowledgeSuccess

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load, update.

API path: `/api/v1/assistants/{assistantId}/knowledge`

#### AssistantLlmRuntimeUpdateSuccess

| Field | Description |
| --- | --- |
| `apiKey` | API key of the customer's LLM provider. |
| `assistantApiKey` |  |
| `assistantId` |  |
| `baseUrl` | Base custom URL of the LLM provider. |
| `configuration` | Actual resulting LLM runtime configuration after merge and backend resolution. |
| `engineCode` | LLM engine/provider code. |
| `modelCode` | LLM model code. |
| `providerWalletId` | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `runtimeBinding` |  |
| `service` |  |
| `sourceMode` | Runtime sourcing mode. |

Operations: update.

API path: `/api/v1/assistants/{assistantId}/runtime/llm`

#### AssistantNumberRoutingCatalogSuccess

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load.

API path: `/api/v1/catalog/assistants/{assistantId}/number-routing`

#### AssistantNumberRoutingRuntimeSuccess

| Field | Description |
| --- | --- |
| `configuration` |  |
| `demoNumbers` | Demo numbers to route to this assistant |
| `purchasedNumbers` | Purchased numbers to route to this assistant |
| `userNumbers` | Customer's own numbers (own PBX) to route to this assistant |

Operations: update.

API path: `/api/v1/assistants/{assistantId}/runtime/number-routing`

#### AssistantPostcallMcpRuntimeSuccess

| Field | Description |
| --- | --- |
| `configuration` | General configuration of the post-call phase. |
| `enabled` | Enable or disable the whole post-call phase without losing its configuration. |
| `globalPrompt` | Global post-call prompt. |
| `modelConfig` | Model configuration used by the MCP phase. |
| `tools` | Complete list of post-call tools to set up. |

Operations: load, update.

API path: `/api/v1/assistants/{assistantId}/runtime/postcall/mcp-config`

#### AssistantPrecallMcpRuntimeSuccess

| Field | Description |
| --- | --- |
| `configuration` | General configuration of the pre-call phase. |
| `earlyTerminationEnabled` | Enable/disable early termination. |
| `enabled` | Enable or disable the whole pre-call phase without losing its configuration. |
| `globalPrompt` | Global pre-call prompt. |
| `modelConfig` | Model configuration used by the MCP phase. |
| `outputSchema` | JSON schema of the expected pre-call output, as an alternative to `outputVariables`. |
| `outputVariables` | Variables to extract from the pre-call result. |
| `terminationMessage` | Early termination audio message. |
| `tools` | Complete list of pre-call tools to set (replaces the current ones). |
| `voiceConfig` | Voice/TTS configuration used to generate pre-call hold and termination audio. |
| `waitingAudioNonInterruptible` | `true` plays all on-hold audio, `false` allows the customer to speak over the audio. |
| `waitingAudioText` | Audio text on hold. |

Operations: load, update.

API path: `/api/v1/assistants/{assistantId}/runtime/precall/mcp-config`

#### AssistantPrecallValidationRuntimeSuccess

| Field | Description |
| --- | --- |
| `authPassword` | Basic auth password (null to remove it) |
| `authToken` | Bearer token or API key (null to remove it) |
| `authType` |  |
| `authUsername` | Value supplied for `authUsername` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `configuration` | null if no configuration is yet present |
| `headersJson` | Value supplied for `headersJson` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `isActive` | Value supplied for `isActive` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `method` |  |
| `name` | Value supplied for `name` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `numberLocation` | Where to insert the calling number in the HTTP request: - `query` — added as a query string (e.g. |
| `numberParamName` | Value supplied for `numberParamName` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `timeoutMs` | Value supplied for `timeoutMs` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `url` | Value supplied for `url` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |

Operations: load, update.

API path: `/api/v1/assistants/{assistantId}/runtime/precall/number-validation`

#### AssistantPromptSuccess

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load.

API path: `/api/v1/assistants/{assistantId}/prompt`

#### AssistantRagConfigurationSuccess

| Field | Description |
| --- | --- |
| `enabled` |  |
| `kbPrompt` |  |
| `name` |  |
| `returnedChunks` |  |

Operations: load.

API path: `/api/v1/assistants/{assistantId}/rag/collections`

#### AssistantRagRuntimeUpdateSuccess

| Field | Description |
| --- | --- |
| `assistantApiKey` |  |
| `assistantId` |  |
| `configuration` | RAG configuration resulting after application merge. |
| `enabled` | Enable or disable RAG for the assistant. |
| `kbPrompt` | Assistant knowledge base instructions. |
| `name` | Name of the RAG collection to associate. |
| `returnedChunks` | Number of relevant fragments to return from the knowledge base. |
| `service` |  |

Operations: update.

API path: `/api/v1/assistants/{assistantId}/runtime/rag`

#### AssistantSaveConversationRuntimeSuccess

| Field | Description |
| --- | --- |
| `configuration` |  |
| `emails` | One or more recipient emails separated by commas (e.g. |
| `enabled` | Enable or disable sending of the conversation summary via email |
| `smtpInstanceName` | Name of the SMTP plugin instance to use for sending |
| `smtp_instance_name` | Legacy alias of `smtpInstanceName`. |

Operations: load, update.

API path: `/api/v1/assistants/{assistantId}/runtime/hangup/save-conversation`

#### AssistantSettingsConfigurationSuccess

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load.

API path: `/api/v1/catalog/assistants/{assistantId}/settings`

#### AssistantSettingsRuntimeUpdateSuccess

| Field | Description |
| --- | --- |
| `asrInitialDelayMs` | Value supplied for `asrInitialDelayMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `asrSilenceMs` | Value supplied for `asrSilenceMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `assistantApiKey` |  |
| `assistantId` |  |
| `callPermissions` | Value supplied for `callPermissions` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `configuration` |  |
| `dynamicTimeoutMs` | Value supplied for `dynamicTimeoutMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `filler` | Value supplied for `filler` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `maxResponseLength` | Value supplied for `maxResponseLength` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `reprompt` | Value supplied for `reprompt` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `service` |  |
| `truncateInitialAudio` | Value supplied for `truncateInitialAudio` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `ttsInterruptionInConversation` | Value supplied for `ttsInterruptionInConversation` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `vad` | Value supplied for `vad` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `vadMinVoiceMs` | Value supplied for `vadMinVoiceMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `vadThreshold` | Value supplied for `vadThreshold` in the `AssistantSettingsRuntimeUpdateRequest` request. |

Operations: update.

API path: `/api/v1/assistants/{assistantId}/runtime/settings`

#### AssistantToolsRuntimeUpdateSuccess

| Field | Description |
| --- | --- |
| `assistantApiKey` |  |
| `assistantId` |  |
| `configuration` | Resulting tool configuration after the update. |
| `service` |  |

Operations: update.

API path: `/api/v1/assistants/{assistantId}/runtime/tools`

#### AssistantTtsRuntimeUpdateSuccess

| Field | Description |
| --- | --- |
| `apiKey` | API key of the customer's TTS provider. |
| `assistantApiKey` |  |
| `assistantId` |  |
| `configuration` | Actual resulting TTS runtime configuration after merge and backend resolution. |
| `engineCode` | TTS engine/provider code. |
| `providerWalletId` | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `region` | Region/provider area requested by some engine customers, in particular Azure. |
| `runtimeBinding` |  |
| `service` |  |
| `sourceMode` | Runtime sourcing mode. |
| `voiceCode` | TTS voice code. |

Operations: update.

API path: `/api/v1/assistants/{assistantId}/runtime/tts`

#### AssistantVoiceToVoiceRuntimeUpdateSuccess

| Field | Description |
| --- | --- |
| `apiKey` | Customer key provider API. |
| `assistantApiKey` |  |
| `assistantId` |  |
| `baseUrl` | Base custom URL. |
| `configuration` |  |
| `engineCode` | Provider/engine voice LLM. |
| `modelCode` | LLM voice model code. |
| `prompt` | Main prompt of the audio-to-audio runtime. |
| `providerWalletId` | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `service` |  |
| `voiceCode` | Model item code. |

Operations: update.

API path: `/api/v1/assistants/{assistantId}/runtime/audio-to-audio`

#### AssociatedRuntimeToolListSuccess

| Field | Description |
| --- | --- |
| `data` |  |
| `message` |  |
| `meta` |  |
| `requestId` |  |
| `success` |  |

Operations: load.

API path: `/api/v1/catalog/assistants/{assistantId}/tools`

#### AudioToAudio

| Field | Description |
| --- | --- |
| `data` |  |
| `message` |  |
| `meta` | Collection metadata. |
| `requestId` |  |
| `success` |  |

Operations: load.

API path: `/api/v1/catalog/providers/audio-to-audio`

#### AvailableRuntimeToolListSuccess

| Field | Description |
| --- | --- |
| `data` |  |
| `message` |  |
| `meta` |  |
| `requestId` |  |
| `success` |  |

Operations: load.

API path: `/api/v1/catalog/tools`

#### FillerPhraseList

| Field | Description |
| --- | --- |
| `associations` |  |
| `data` |  |
| `id` | Value supplied for `id` in the `FillerPhraseListCreateRequest` request. |
| `list` |  |
| `message` |  |
| `meta` |  |
| `name` | Value supplied for `name` in the `FillerPhraseListCreateRequest` request. |
| `phrases` | Value supplied for `phrases` in the `FillerPhraseListCreateRequest` request. |
| `requestId` |  |
| `success` |  |
| `toolListIds` |  |
| `waitingListIds` |  |

Operations: create, load, remove, update.

API path: `/api/v1/catalog/filler-phrase-lists`

#### Health

| Field | Description |
| --- | --- |
| `dataSource` |  |
| `service` |  |
| `status` |  |

Operations: load.

API path: `/health`

#### Knowledge

| Field | Description |
| --- | --- |
| `data` |  |
| `defaultPostAction` | Defaults to `ask_if_needs_more` when omitted |
| `defaultResponse` | Default answer used when a trigger has no specific response. |
| `id` |  |
| `knowledge` | A knowledge item: a set of recognised requests with their answers, folded into the prompt of every assistant it is associated with. |
| `message` |  |
| `meta` |  |
| `requestId` |  |
| `rules` | Optional constraints applied to the whole knowledge item. |
| `success` |  |
| `title` | Human-readable title of the new knowledge item. |
| `triggers` | Initial trigger list for the knowledge item. |

Operations: create, load, remove, update.

API path: `/api/v1/catalog/knowledge`

#### Llm

| Field | Description |
| --- | --- |
| `data` |  |
| `message` |  |
| `meta` | Collection metadata. |
| `requestId` |  |
| `success` |  |

Operations: load.

API path: `/api/v1/catalog/providers/llm`

#### LlmModelListSuccess

| Field | Description |
| --- | --- |
| `data` |  |
| `message` |  |
| `meta` | Collection metadata. |
| `requestId` |  |
| `success` |  |

Operations: load.

API path: `/api/v1/catalog/assistants/{assistantId}/llm/models`

#### OutboundCall

| Field | Description |
| --- | --- |
| `AddPrompt` | Legacy alias of `addPrompt`. |
| `addPrompt` | Optional additional prompt to customize assistant behavior. |
| `apiKey_assistente` | Legacy alias of `assistantApiKey`. |
| `assistantApiKey` | API key of the AI assistant that will talk to the callee. |
| `callId` | Technical call identifier, if already available when the response is returned. |
| `callResultUrl` | Optional HTTPS URL that AI4Call calls with the outcome notification. |
| `callbackConfigured` | Indicates whether the callback URL for the call outcome was configured. |
| `callerId` | Caller number displayed in E.164 format. |
| `dst` | Recipient number in E.164 format, example +3902XXXXXXXX. |
| `internalId` | UUID generated by AI4Call to correlate the outbound request, callback and final dial-status lookup. |
| `status` | Initial status of the outbound request. |
| `url_esito_chiamata` | Legacy alias of `callResultUrl`. |

Operations: create.

API path: `/webhook/outbound_call`

#### OutboundCallAcceptedSuccess

| Field | Description |
| --- | --- |
| `AddPrompt` | Legacy alias of `addPrompt`. |
| `addPrompt` | Optional additional prompt to customize assistant behavior. |
| `apiKey_assistente` | Legacy alias of `assistantApiKey`. |
| `assistantApiKey` | API key of the AI assistant that will talk to the callee. |
| `callId` | Technical call identifier, if already available when the response is returned. |
| `callResultUrl` | Optional HTTPS URL that AI4Call calls with the outcome notification. |
| `callbackConfigured` | Indicates whether the callback URL for the call outcome was configured. |
| `callerId` | Calling number displayed in the format required by the PBX, E.164 +3902XXXXXXXX or local 02XXXXXXXX. |
| `dst` | Recipient number in the format required by the PBX, E.164 +3902XXXXXXXX or local 02XXXXXXXX. |
| `internalId` | UUID generated by AI4Call to correlate the outbound request, callback and final dial-status lookup. |
| `ipPbx` | Public IP of the PBX, must be one of the authorized public IPs. |
| `ip_pbx` | Legacy alias of `ipPbx`. |
| `method_uac` | Selects the registered UAC mode. |
| `sipPort` | SIP port of the PBX, standard 5060. |
| `sip_port` | Legacy alias of `sipPort`. |
| `status` | Initial status of the outbound request. |
| `url_esito_chiamata` | Legacy alias of `callResultUrl`. |

Operations: create.

API path: `/webhook/outbound_call_pbx`

#### OutboundDialStatusPayload

| Field | Description |
| --- | --- |
| `billSec` | Billed duration in seconds. |
| `dialStatus` | Final dial result persisted in the outbound CDR. |
| `trafficCost` | Outbound traffic cost in EUR, expressed with six decimal places. |

Operations: load.

API path: `/getDialstatus/{uuid}`

#### PortalLoginSuccess

| Field | Description |
| --- | --- |
| `client` | Customer profile returned after successful portal credential verification. |
| `email` | Portal customer email. |
| `portalApiKey` | Static portal API key associated with the customer account. |

Operations: create.

API path: `/api/v1/auth/portal/login`

#### PreCall

| Field | Description |
| --- | --- |
| `configuration` |  |

Operations: load.

API path: `/api/v1/catalog/assistants/{assistantId}/pre-call`

#### ProviderWallet

| Field | Description |
| --- | --- |
| `config` | Values of the fields declared by the catalog entry |
| `credential` | A credential saved by the customer. |
| `data` |  |
| `engine` | Engine code selected from the provider-wallet catalog. |
| `id` |  |
| `isActive` | Whether the saved credential can be used by assistant runtimes. |
| `message` |  |
| `meta` |  |
| `name` | Customer-defined name for the saved credential. |
| `provider` | Provider code selected from the provider-wallet catalog. |
| `requestId` |  |
| `serviceType` | Service category selected from the provider-wallet catalog. |
| `success` |  |

Operations: create, load, remove, update.

API path: `/api/v1/account/provider-wallet`

#### ProviderWalletAssociationsSuccess

| Field | Description |
| --- | --- |
| `data` |  |
| `message` |  |
| `meta` |  |
| `requestId` |  |
| `success` |  |

Operations: load.

API path: `/api/v1/account/provider-wallet/assistants/{assistantId}`

#### ProviderWalletCatalogSuccess

| Field | Description |
| --- | --- |
| `data` |  |
| `message` |  |
| `meta` |  |
| `requestId` |  |
| `success` |  |

Operations: load.

API path: `/api/v1/account/provider-wallet/catalog`

#### PublicRagSearchSuccess

| Field | Description |
| --- | --- |
| `count` | Number of chunks returned by the search, up to the service limit of 4. |
| `query` | Normalized query text used for the search. |
| `rag_id` | Public RAG identifier supplied in the request and returned unchanged on success. |
| `results` | Chunks returned by the vector search. |

Operations: create.

API path: `/public/v1/rag/search`

#### RagCollectionDeleteSuccess

| Field | Description |
| --- | --- |
| `data` |  |
| `description` | Value supplied for `description` in the `RagCollectionCreateRequest` request. |
| `maxChunkSize` | Value supplied for `maxChunkSize` in the `RagCollectionCreateRequest` request. |
| `maxChunksPerFile` | Value supplied for `maxChunksPerFile` in the `RagCollectionCreateRequest` request. |
| `message` |  |
| `meta` | Collection metadata. |
| `name` | Value supplied for `name` in the `RagCollectionCreateRequest` request. |
| `requestId` |  |
| `success` |  |

Operations: create, load, remove.

API path: `/api/v1/catalog/rag/collections`

#### RagCollectionDocumentDeleteSuccess

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/api/v1/catalog/rag/collections/{ragId}/documents/{fileName}`

#### RagCollectionDocumentListSuccess

| Field | Description |
| --- | --- |
| `data` |  |
| `message` |  |
| `meta` | Collection metadata. |
| `requestId` |  |
| `success` |  |

Operations: load.

API path: `/api/v1/catalog/rag/collections/{ragId}/documents`

#### RagCollectionDocumentTokenEstimateSuccess

| Field | Description |
| --- | --- |
| `estimatedCost` |  |
| `fileCount` |  |
| `fileDetails` |  |
| `processingTime` |  |
| `raw` |  |
| `totalTokens` |  |

Operations: create.

API path: `/api/v1/catalog/rag/documents/estimate`

#### RagCollectionDocumentUploadStatusSuccess

| Field | Description |
| --- | --- |
| `currentFile` |  |
| `errors` |  |
| `processedFiles` |  |
| `progress` |  |
| `raw` |  |
| `results` |  |
| `status` |  |
| `totalCost` |  |
| `totalFiles` |  |
| `totalTokens` |  |
| `uploadId` |  |

Operations: load.

API path: `/api/v1/catalog/rag/uploads/{uploadId}`

#### RagCollectionDocumentUploadSuccess

| Field | Description |
| --- | --- |
| `data` | Result returned after starting a RAG document upload. |
| `message` |  |
| `meta` | Collection metadata. |
| `requestId` |  |
| `success` |  |

Operations: create.

API path: `/api/v1/catalog/rag/collections/{ragId}/documents`

#### RuntimeBinding

| Field | Description |
| --- | --- |
| `assistantApiKey` |  |
| `assistantId` |  |
| `runtimeBindings` |  |

Operations: load.

API path: `/api/v1/catalog/assistants/{assistantId}/runtime-bindings`

#### Tts

| Field | Description |
| --- | --- |
| `data` |  |
| `message` |  |
| `meta` | Collection metadata. |
| `requestId` |  |
| `success` |  |

Operations: load.

API path: `/api/v1/catalog/providers/tts`

#### TtsVoiceListSuccess

| Field | Description |
| --- | --- |
| `data` |  |
| `message` |  |
| `meta` | Collection metadata. |
| `requestId` |  |
| `success` |  |

Operations: load.

API path: `/api/v1/catalog/assistants/{assistantId}/tts/voices`

#### Voice

| Field | Description |
| --- | --- |
| `data` |  |
| `message` |  |
| `meta` | Collection metadata. |
| `requestId` |  |
| `success` |  |

Operations: load.

API path: `/api/v1/catalog/assistants/{assistantId}/audio-to-audio/voices`

#### VoiceLlm

| Field | Description |
| --- | --- |
| `data` |  |
| `message` |  |
| `meta` | Collection metadata. |
| `requestId` |  |
| `success` |  |

Operations: load.

API path: `/api/v1/catalog/providers/voice-llm`

#### VoiceLlmModelListSuccess

| Field | Description |
| --- | --- |
| `data` |  |
| `message` |  |
| `meta` | Collection metadata. |
| `requestId` |  |
| `success` |  |

Operations: load.

API path: `/api/v1/catalog/audio-to-audio/models`



## Entities


### AccountAllowedIpsSuccess

Create an instance: `SdkEntity accountAllowedIpsSuccess = client.accountAllowedIpsSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |
| `update(data, null)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `addIps` | `List<Object>` | Value supplied for `addIps` in the `AccountAllowedIpsUpdateRequest` request. |
| `allowedIps` | `List<Object>` | Value supplied for `allowedIps` in the `AccountAllowedIpsUpdateRequest` request. |
| `data` | `Map<String, Object>` |  |
| `deleteIps` | `List<Object>` | Value supplied for `deleteIps` in the `AccountAllowedIpsUpdateRequest` request. |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` |  |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object accountAllowedIpsSuccess = client.accountAllowedIpsSuccess(null).load(null, null);
```


### AccountAvailablePluginsSuccess

Create an instance: `SdkEntity accountAvailablePluginsSuccess = client.accountAvailablePluginsSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` |  |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` |  |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object accountAvailablePluginsSuccess = client.accountAvailablePluginsSuccess(null).load(null, null);
```


### AccountCallLimitsSuccess

Create an instance: `SdkEntity accountCallLimitsSuccess = client.accountCallLimitsSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |
| `update(data, null)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistants` | `List<Object>` | Value supplied for `assistants` in the `AccountCallLimitsUpdateRequest` request. |
| `data` | `Map<String, Object>` |  |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` |  |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object accountCallLimitsSuccess = client.accountCallLimitsSuccess(null).load(null, null);
```


### AccountNumberRoutingSuccess

Create an instance: `SdkEntity accountNumberRoutingSuccess = client.accountNumberRoutingSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |
| `update(data, null)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` |  |
| `demoNumbers` | `List<Object>` | Value supplied for `demoNumbers` in the `AccountNumberRoutingUpdateRequest` request. |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` |  |
| `purchasedNumbers` | `List<Object>` | Value supplied for `purchasedNumbers` in the `AccountNumberRoutingUpdateRequest` request. |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |
| `userNumbers` | `List<Object>` | Value supplied for `userNumbers` in the `AccountNumberRoutingUpdateRequest` request. |

#### Example: Load

```java
Object accountNumberRoutingSuccess = client.accountNumberRoutingSuccess(null).load(null, null);
```


### AccountPluginConfigurationSuccess

Create an instance: `SdkEntity accountPluginConfigurationSuccess = client.accountPluginConfigurationSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |
| `update(data, null)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `Map<String, Object>` | Configuration contract and current values for one plugin instance. |
| `instanceName` | `String` | Value supplied for `instanceName` in the `AccountPluginConfigurationUpdateRequest` request. |
| `instance_name` | `String` | Legacy alias of `instanceName`. |
| `pluginName` | `String` | Value supplied for `pluginName` in the `AccountPluginConfigurationUpdateRequest` request. |
| `plugin_name` | `String` | Legacy alias of `pluginName`. |

#### Example: Load

```java
Object accountPluginConfigurationSuccess = client.accountPluginConfigurationSuccess(null).load(null, null);
```


### AccountPluginInstanceSuccess

Create an instance: `SdkEntity accountPluginInstanceSuccess = client.accountPluginInstanceSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `create(data, null)` | Create a new entity with the given data. |
| `load(match, null)` | Load a single entity by match criteria. |
| `remove(match, null)` | Remove the matching entity. |
| `update(data, null)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `Map<String, Object>` | Current lifecycle information for one purchased plugin instance. |
| `data` | `Map<String, Object>` |  |
| `instanceName` | `String` | Value supplied for `instanceName` in the `AccountPluginPurchaseRequest` request. |
| `instance_name` | `String` | Legacy alias of `instanceName`. |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` |  |
| `newInstanceName` | `String` | Value supplied for `newInstanceName` in the `AccountPluginInstanceByIdUpdateRequest` request. |
| `new_instance_name` | `String` | Legacy alias of `newInstanceName`. |
| `pluginName` | `String` | Value supplied for `pluginName` in the `AccountPluginPurchaseRequest` request. |
| `plugin_name` | `String` | Legacy alias of `pluginName`. |
| `requestId` | `String` |  |
| `status` | `String` | Value supplied for `status` in the `AccountPluginInstanceUpdateRequest` request. |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object accountPluginInstanceSuccess = client.accountPluginInstanceSuccess(null).load(null, null);
```

#### Example: Create

```java
Object accountPluginInstanceSuccess = client.accountPluginInstanceSuccess(null).create(Map.of(
    "configuration", Map.of(),  // Map<String, Object>
    "data", Map.of(),  // Map<String, Object>
    "message", "example_message",  // String
    "meta", Map.of(),  // Map<String, Object>
    "requestId", "example_requestId",  // String
    "success", true  // Boolean
), null);
```


### AccountPluginPurchaseSuccess

Create an instance: `SdkEntity accountPluginPurchaseSuccess = client.accountPluginPurchaseSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `update(data, null)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `Map<String, Object>` | Result of a plugin purchase, including charged prices and created instance data. |
| `instanceName` | `String` | Value supplied for `instanceName` in the `AccountPluginPurchaseRequest` request. |
| `instance_name` | `String` | Legacy alias of `instanceName`. |
| `pluginName` | `String` | Value supplied for `pluginName` in the `AccountPluginPurchaseRequest` request. |
| `plugin_name` | `String` | Legacy alias of `pluginName`. |


### AnalyticsCallsOutboundSuccess

Create an instance: `SdkEntity analyticsCallsOutboundSuccess = client.analyticsCallsOutboundSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` |  |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` |  |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object analyticsCallsOutboundSuccess = client.analyticsCallsOutboundSuccess(null).load(null, null);
```


### AnalyticsCallsSuccess

Create an instance: `SdkEntity analyticsCallsSuccess = client.analyticsCallsSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` |  |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` |  |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object analyticsCallsSuccess = client.analyticsCallsSuccess(null).load(null, null);
```


### AnalyticsPostCallSuccess

Create an instance: `SdkEntity analyticsPostCallSuccess = client.analyticsPostCallSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` |  |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` |  |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object analyticsPostCallSuccess = client.analyticsPostCallSuccess(null).load(null, null);
```


### AnalyticsPreCallSuccess

Create an instance: `SdkEntity analyticsPreCallSuccess = client.analyticsPreCallSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` |  |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` |  |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object analyticsPreCallSuccess = client.analyticsPreCallSuccess(null).load(null, null);
```


### AnalyticsRagSearchSuccess

Create an instance: `SdkEntity analyticsRagSearchSuccess = client.analyticsRagSearchSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` |  |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` |  |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object analyticsRagSearchSuccess = client.analyticsRagSearchSuccess(null).load(null, null);
```


### AnalyticsRagSuccess

Create an instance: `SdkEntity analyticsRagSuccess = client.analyticsRagSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` |  |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` |  |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object analyticsRagSuccess = client.analyticsRagSuccess(null).load(null, null);
```


### AnalyticsRechargesSuccess

Create an instance: `SdkEntity analyticsRechargesSuccess = client.analyticsRechargesSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` |  |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` |  |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object analyticsRechargesSuccess = client.analyticsRechargesSuccess(null).load(null, null);
```


### AnalyticsSmsSuccess

Create an instance: `SdkEntity analyticsSmsSuccess = client.analyticsSmsSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` |  |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` |  |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object analyticsSmsSuccess = client.analyticsSmsSuccess(null).load(null, null);
```


### AnalyticsToolResponsesSuccess

Create an instance: `SdkEntity analyticsToolResponsesSuccess = client.analyticsToolResponsesSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` |  |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` |  |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object analyticsToolResponsesSuccess = client.analyticsToolResponsesSuccess(null).load(null, null);
```


### Asr

Create an instance: `SdkEntity asr = client.asr(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` |  |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` | Collection metadata. |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object asr = client.asr(null).load(null, null);
```


### AsrModelListSuccess

Create an instance: `SdkEntity asrModelListSuccess = client.asrModelListSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` |  |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` | Collection metadata. |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object asrModelListSuccess = client.asrModelListSuccess(null).load(Map.of("assistant_id", "assistant_id"), null);
```


### Assistant

Create an instance: `SdkEntity assistant = client.assistant(null);`

#### Operations

| Method | Description |
| --- | --- |
| `create(data, null)` | Create a new entity with the given data. |
| `load(match, null)` | Load a single entity by match criteria. |
| `remove(match, null)` | Remove the matching entity. |
| `update(data, null)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistant` | `Object` | Assistant detail response, including the legacy assistant API key during the v1 compatibility period. |
| `audioToAudio` | `Object` | Initial audio-to-audio configuration, used when applicable to the selected mode. |
| `data` | `Map<String, Object>` |  |
| `description` | `String` | Functional description of the assistant. |
| `firstMessage` | `Map<String, Object>` | Partial update of the assistant's first-message configuration. |
| `id` | `String` |  |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` | Collection metadata. |
| `metadata` | `Map<String, Object>` | Free-form metadata to store with the assistant. |
| `mode` | `String` | Runtime mode to use when creating the assistant. |
| `name` | `String` | Assistant name. |
| `network` | `Map<String, Object>` | Network settings to update on the assistant. |
| `numbers` | `Map<String, Object>` | Replacement values for assistant number lists when supplied. |
| `requestId` | `String` |  |
| `settings` | `Map<String, Object>` | High-level assistant settings to update. |
| `status` | `String` | New lifecycle status for the assistant. |
| `success` | `Boolean` |  |
| `voiceToVoice` | `Map<String, Object>` | Legacy alias of `audioToAudio`. |

#### Example: Load

```java
Object assistant = client.assistant(null).load(Map.of("id", "assistant_id"), null);
```

#### Example: Create

```java
Object assistant = client.assistant(null).create(Map.of(
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


### AssistantAdvancedSettingsConfigurationSuccess

Create an instance: `SdkEntity assistantAdvancedSettingsConfigurationSuccess = client.assistantAdvancedSettingsConfigurationSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |

#### Example: Load

```java
Object assistantAdvancedSettingsConfigurationSuccess = client.assistantAdvancedSettingsConfigurationSuccess(null).load(Map.of("id", "assistant_advanced_settings_configuration_success_id"), null);
```


### AssistantAdvancedSettingsRuntimeUpdateSuccess

Create an instance: `SdkEntity assistantAdvancedSettingsRuntimeUpdateSuccess = client.assistantAdvancedSettingsRuntimeUpdateSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `update(data, null)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistantApiKey` | `String` |  |
| `assistantId` | `String` |  |
| `configuration` | `Map<String, Object>` |  |
| `freqPenalty` | `Double` | Value supplied for `freqPenalty` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `maxTokens` | `Long` | Value supplied for `maxTokens` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `presencePenalty` | `Double` | Value supplied for `presencePenalty` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `service` | `String` |  |
| `stopSequences` | `List<Object>` | Value supplied for `stopSequences` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `temperature` | `Double` | Value supplied for `temperature` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `topK` | `Long` | Value supplied for `topK` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `topP` | `Double` | Value supplied for `topP` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |


### AssistantAsrRuntimeUpdateSuccess

Create an instance: `SdkEntity assistantAsrRuntimeUpdateSuccess = client.assistantAsrRuntimeUpdateSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `update(data, null)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiKey` | `String` | API key of the customer's ASR provider. |
| `assistantApiKey` | `String` |  |
| `assistantId` | `String` |  |
| `configuration` | `Map<String, Object>` | Actual resulting ASR runtime configuration after merge and backend resolution. |
| `engineCode` | `String` | ASR engine/provider code. |
| `providerWalletId` | `Long` | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `runtimeBinding` | `Map<String, Object>` |  |
| `service` | `String` |  |
| `sourceMode` | `String` | Runtime sourcing mode. |


### AssistantConversationWebhookRuntimeSuccess

Create an instance: `SdkEntity assistantConversationWebhookRuntimeSuccess = client.assistantConversationWebhookRuntimeSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |
| `update(data, null)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authName` | `String` | Name of the saved authentication to apply to the request |
| `configuration` | `Map<String, Object>` |  |
| `enabled` | `Boolean` | Enable or disable sending the conversation to the webhook |
| `url` | `String` | Endpoint that receives the POST at the end of the call |

#### Example: Load

```java
Object assistantConversationWebhookRuntimeSuccess = client.assistantConversationWebhookRuntimeSuccess(null).load(Map.of("assistant_id", "assistant_id"), null);
```


### AssistantDtmfConfigurationSuccess

Create an instance: `SdkEntity assistantDtmfConfigurationSuccess = client.assistantDtmfConfigurationSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |

#### Example: Load

```java
Object assistantDtmfConfigurationSuccess = client.assistantDtmfConfigurationSuccess(null).load(Map.of("id", "assistant_dtmf_configuration_success_id"), null);
```


### AssistantDtmfRuntimeUpdateSuccess

Create an instance: `SdkEntity assistantDtmfRuntimeUpdateSuccess = client.assistantDtmfRuntimeUpdateSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `update(data, null)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acceptTimeout` | `Long` | Value supplied for `acceptTimeout` in the `AssistantDtmfRuntimeUpdateRequest` request. |
| `assistantApiKey` | `String` |  |
| `assistantId` | `String` |  |
| `configuration` | `Map<String, Object>` |  |
| `enabled` | `Boolean` | Enable or disable DTMF reception. |
| `maxLength` | `Long` | Value supplied for `maxLength` in the `AssistantDtmfRuntimeUpdateRequest` request. |
| `minLength` | `Long` | Value supplied for `minLength` in the `AssistantDtmfRuntimeUpdateRequest` request. |
| `playEnabled` | `Boolean` | Enable or disable DTMF sending during the call. |
| `service` | `String` |  |
| `terminationChars` | `String` | Value supplied for `terminationChars` in the `AssistantDtmfRuntimeUpdateRequest` request. |


### AssistantHangupConfigurationSuccess

Create an instance: `SdkEntity assistantHangupConfigurationSuccess = client.assistantHangupConfigurationSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |

#### Example: Load

```java
Object assistantHangupConfigurationSuccess = client.assistantHangupConfigurationSuccess(null).load(Map.of("id", "assistant_hangup_configuration_success_id"), null);
```


### AssistantHangupRuntimeUpdateSuccess

Create an instance: `SdkEntity assistantHangupRuntimeUpdateSuccess = client.assistantHangupRuntimeUpdateSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `update(data, null)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistantApiKey` | `String` |  |
| `assistantId` | `String` |  |
| `availableAgents` | `List<Object>` | Value supplied for `availableAgents` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `configuration` | `Map<String, Object>` |  |
| `enableHangup` | `Boolean` | Value supplied for `enableHangup` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `enableRedirect` | `Boolean` | Value supplied for `enableRedirect` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `enableTransferAgent` | `Boolean` | Value supplied for `enableTransferAgent` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `service` | `String` |  |
| `transferAgentNotificationText` | `String` | Value supplied for `transferAgentNotificationText` in the `AssistantHangupRuntimeUpdateRequest` request. |


### AssistantHangupSchemaRuntimeSuccess

Create an instance: `SdkEntity assistantHangupSchemaRuntimeSuccess = client.assistantHangupSchemaRuntimeSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |
| `update(data, null)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `Map<String, Object>` |  |
| `hangupUrl` | `String` | Hangup webhook URL (null to remove) |
| `schema` | `List<Object>` | Defining body fields (overrides the current schema) |

#### Example: Load

```java
Object assistantHangupSchemaRuntimeSuccess = client.assistantHangupSchemaRuntimeSuccess(null).load(Map.of("assistant_id", "assistant_id"), null);
```


### AssistantKnowledgeSuccess

Create an instance: `SdkEntity assistantKnowledgeSuccess = client.assistantKnowledgeSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |
| `update(data, null)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |

#### Example: Load

```java
Object assistantKnowledgeSuccess = client.assistantKnowledgeSuccess(null).load(Map.of("id", "assistant_knowledge_success_id"), null);
```


### AssistantLlmRuntimeUpdateSuccess

Create an instance: `SdkEntity assistantLlmRuntimeUpdateSuccess = client.assistantLlmRuntimeUpdateSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `update(data, null)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiKey` | `String` | API key of the customer's LLM provider. |
| `assistantApiKey` | `String` |  |
| `assistantId` | `String` |  |
| `baseUrl` | `String` | Base custom URL of the LLM provider. |
| `configuration` | `Map<String, Object>` | Actual resulting LLM runtime configuration after merge and backend resolution. |
| `engineCode` | `String` | LLM engine/provider code. |
| `modelCode` | `String` | LLM model code. |
| `providerWalletId` | `Long` | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `runtimeBinding` | `Map<String, Object>` |  |
| `service` | `String` |  |
| `sourceMode` | `String` | Runtime sourcing mode. |


### AssistantNumberRoutingCatalogSuccess

Create an instance: `SdkEntity assistantNumberRoutingCatalogSuccess = client.assistantNumberRoutingCatalogSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |

#### Example: Load

```java
Object assistantNumberRoutingCatalogSuccess = client.assistantNumberRoutingCatalogSuccess(null).load(Map.of("id", "assistant_number_routing_catalog_success_id"), null);
```


### AssistantNumberRoutingRuntimeSuccess

Create an instance: `SdkEntity assistantNumberRoutingRuntimeSuccess = client.assistantNumberRoutingRuntimeSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `update(data, null)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `Map<String, Object>` |  |
| `demoNumbers` | `List<Object>` | Demo numbers to route to this assistant |
| `purchasedNumbers` | `List<Object>` | Purchased numbers to route to this assistant |
| `userNumbers` | `List<Object>` | Customer's own numbers (own PBX) to route to this assistant |


### AssistantPostcallMcpRuntimeSuccess

Create an instance: `SdkEntity assistantPostcallMcpRuntimeSuccess = client.assistantPostcallMcpRuntimeSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |
| `update(data, null)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `Map<String, Object>` | General configuration of the post-call phase. |
| `enabled` | `Boolean` | Enable or disable the whole post-call phase without losing its configuration. |
| `globalPrompt` | `String` | Global post-call prompt. |
| `modelConfig` | `Map<String, Object>` | Model configuration used by the MCP phase. |
| `tools` | `List<Object>` | Complete list of post-call tools to set up. |

#### Example: Load

```java
Object assistantPostcallMcpRuntimeSuccess = client.assistantPostcallMcpRuntimeSuccess(null).load(Map.of("assistant_id", "assistant_id"), null);
```


### AssistantPrecallMcpRuntimeSuccess

Create an instance: `SdkEntity assistantPrecallMcpRuntimeSuccess = client.assistantPrecallMcpRuntimeSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |
| `update(data, null)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `Map<String, Object>` | General configuration of the pre-call phase. |
| `earlyTerminationEnabled` | `Boolean` | Enable/disable early termination. |
| `enabled` | `Boolean` | Enable or disable the whole pre-call phase without losing its configuration. |
| `globalPrompt` | `String` | Global pre-call prompt. |
| `modelConfig` | `Map<String, Object>` | Model configuration used by the MCP phase. |
| `outputSchema` | `Map<String, Object>` | JSON schema of the expected pre-call output, as an alternative to `outputVariables`. |
| `outputVariables` | `List<Object>` | Variables to extract from the pre-call result. |
| `terminationMessage` | `String` | Early termination audio message. |
| `tools` | `List<Object>` | Complete list of pre-call tools to set (replaces the current ones). |
| `voiceConfig` | `Map<String, Object>` | Voice/TTS configuration used to generate pre-call hold and termination audio. |
| `waitingAudioNonInterruptible` | `Boolean` | `true` plays all on-hold audio, `false` allows the customer to speak over the audio. |
| `waitingAudioText` | `String` | Audio text on hold. |

#### Example: Load

```java
Object assistantPrecallMcpRuntimeSuccess = client.assistantPrecallMcpRuntimeSuccess(null).load(Map.of("assistant_id", "assistant_id"), null);
```


### AssistantPrecallValidationRuntimeSuccess

Create an instance: `SdkEntity assistantPrecallValidationRuntimeSuccess = client.assistantPrecallValidationRuntimeSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |
| `update(data, null)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authPassword` | `String` | Basic auth password (null to remove it) |
| `authToken` | `String` | Bearer token or API key (null to remove it) |
| `authType` | `String` |  |
| `authUsername` | `String` | Value supplied for `authUsername` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `configuration` | `Object` | null if no configuration is yet present |
| `headersJson` | `Map<String, Object>` | Value supplied for `headersJson` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `isActive` | `Boolean` | Value supplied for `isActive` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `method` | `String` |  |
| `name` | `String` | Value supplied for `name` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `numberLocation` | `String` | Where to insert the calling number in the HTTP request: - `query` — added as a query string (e.g. |
| `numberParamName` | `String` | Value supplied for `numberParamName` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `timeoutMs` | `Long` | Value supplied for `timeoutMs` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `url` | `String` | Value supplied for `url` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |

#### Example: Load

```java
Object assistantPrecallValidationRuntimeSuccess = client.assistantPrecallValidationRuntimeSuccess(null).load(Map.of("assistant_id", "assistant_id"), null);
```


### AssistantPromptSuccess

Create an instance: `SdkEntity assistantPromptSuccess = client.assistantPromptSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |

#### Example: Load

```java
Object assistantPromptSuccess = client.assistantPromptSuccess(null).load(Map.of("id", "assistant_prompt_success_id"), null);
```


### AssistantRagConfigurationSuccess

Create an instance: `SdkEntity assistantRagConfigurationSuccess = client.assistantRagConfigurationSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `Boolean` |  |
| `kbPrompt` | `String` |  |
| `name` | `String` |  |
| `returnedChunks` | `Long` |  |

#### Example: Load

```java
Object assistantRagConfigurationSuccess = client.assistantRagConfigurationSuccess(null).load(Map.of("assistant_id", "assistant_id"), null);
```


### AssistantRagRuntimeUpdateSuccess

Create an instance: `SdkEntity assistantRagRuntimeUpdateSuccess = client.assistantRagRuntimeUpdateSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `update(data, null)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistantApiKey` | `String` |  |
| `assistantId` | `String` |  |
| `configuration` | `Map<String, Object>` | RAG configuration resulting after application merge. |
| `enabled` | `Boolean` | Enable or disable RAG for the assistant. |
| `kbPrompt` | `String` | Assistant knowledge base instructions. |
| `name` | `String` | Name of the RAG collection to associate. |
| `returnedChunks` | `Long` | Number of relevant fragments to return from the knowledge base. |
| `service` | `String` |  |


### AssistantSaveConversationRuntimeSuccess

Create an instance: `SdkEntity assistantSaveConversationRuntimeSuccess = client.assistantSaveConversationRuntimeSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |
| `update(data, null)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `Map<String, Object>` |  |
| `emails` | `String` | One or more recipient emails separated by commas (e.g. |
| `enabled` | `Boolean` | Enable or disable sending of the conversation summary via email |
| `smtpInstanceName` | `String` | Name of the SMTP plugin instance to use for sending |
| `smtp_instance_name` | `String` | Legacy alias of `smtpInstanceName`. |

#### Example: Load

```java
Object assistantSaveConversationRuntimeSuccess = client.assistantSaveConversationRuntimeSuccess(null).load(Map.of("assistant_id", "assistant_id"), null);
```


### AssistantSettingsConfigurationSuccess

Create an instance: `SdkEntity assistantSettingsConfigurationSuccess = client.assistantSettingsConfigurationSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |

#### Example: Load

```java
Object assistantSettingsConfigurationSuccess = client.assistantSettingsConfigurationSuccess(null).load(Map.of("id", "assistant_settings_configuration_success_id"), null);
```


### AssistantSettingsRuntimeUpdateSuccess

Create an instance: `SdkEntity assistantSettingsRuntimeUpdateSuccess = client.assistantSettingsRuntimeUpdateSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `update(data, null)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asrInitialDelayMs` | `Long` | Value supplied for `asrInitialDelayMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `asrSilenceMs` | `Long` | Value supplied for `asrSilenceMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `assistantApiKey` | `String` |  |
| `assistantId` | `String` |  |
| `callPermissions` | `Map<String, Object>` | Value supplied for `callPermissions` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `configuration` | `Map<String, Object>` |  |
| `dynamicTimeoutMs` | `Long` | Value supplied for `dynamicTimeoutMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `filler` | `Map<String, Object>` | Value supplied for `filler` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `maxResponseLength` | `Long` | Value supplied for `maxResponseLength` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `reprompt` | `Map<String, Object>` | Value supplied for `reprompt` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `service` | `String` |  |
| `truncateInitialAudio` | `Boolean` | Value supplied for `truncateInitialAudio` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `ttsInterruptionInConversation` | `Boolean` | Value supplied for `ttsInterruptionInConversation` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `vad` | `Boolean` | Value supplied for `vad` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `vadMinVoiceMs` | `Long` | Value supplied for `vadMinVoiceMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `vadThreshold` | `Double` | Value supplied for `vadThreshold` in the `AssistantSettingsRuntimeUpdateRequest` request. |


### AssistantToolsRuntimeUpdateSuccess

Create an instance: `SdkEntity assistantToolsRuntimeUpdateSuccess = client.assistantToolsRuntimeUpdateSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `update(data, null)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistantApiKey` | `String` |  |
| `assistantId` | `String` |  |
| `configuration` | `Map<String, Object>` | Resulting tool configuration after the update. |
| `service` | `String` |  |


### AssistantTtsRuntimeUpdateSuccess

Create an instance: `SdkEntity assistantTtsRuntimeUpdateSuccess = client.assistantTtsRuntimeUpdateSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `update(data, null)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiKey` | `String` | API key of the customer's TTS provider. |
| `assistantApiKey` | `String` |  |
| `assistantId` | `String` |  |
| `configuration` | `Map<String, Object>` | Actual resulting TTS runtime configuration after merge and backend resolution. |
| `engineCode` | `String` | TTS engine/provider code. |
| `providerWalletId` | `Long` | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `region` | `String` | Region/provider area requested by some engine customers, in particular Azure. |
| `runtimeBinding` | `Map<String, Object>` |  |
| `service` | `String` |  |
| `sourceMode` | `String` | Runtime sourcing mode. |
| `voiceCode` | `String` | TTS voice code. |


### AssistantVoiceToVoiceRuntimeUpdateSuccess

Create an instance: `SdkEntity assistantVoiceToVoiceRuntimeUpdateSuccess = client.assistantVoiceToVoiceRuntimeUpdateSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `update(data, null)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiKey` | `String` | Customer key provider API. |
| `assistantApiKey` | `String` |  |
| `assistantId` | `String` |  |
| `baseUrl` | `String` | Base custom URL. |
| `configuration` | `Map<String, Object>` |  |
| `engineCode` | `String` | Provider/engine voice LLM. |
| `modelCode` | `String` | LLM voice model code. |
| `prompt` | `String` | Main prompt of the audio-to-audio runtime. |
| `providerWalletId` | `Long` | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `service` | `String` |  |
| `voiceCode` | `String` | Model item code. |


### AssociatedRuntimeToolListSuccess

Create an instance: `SdkEntity associatedRuntimeToolListSuccess = client.associatedRuntimeToolListSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` |  |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` |  |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object associatedRuntimeToolListSuccess = client.associatedRuntimeToolListSuccess(null).load(Map.of("assistant_id", "assistant_id"), null);
```


### AudioToAudio

Create an instance: `SdkEntity audioToAudio = client.audioToAudio(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` |  |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` | Collection metadata. |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object audioToAudio = client.audioToAudio(null).load(null, null);
```


### AvailableRuntimeToolListSuccess

Create an instance: `SdkEntity availableRuntimeToolListSuccess = client.availableRuntimeToolListSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` |  |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` |  |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object availableRuntimeToolListSuccess = client.availableRuntimeToolListSuccess(null).load(null, null);
```


### FillerPhraseList

Create an instance: `SdkEntity fillerPhraseList = client.fillerPhraseList(null);`

#### Operations

| Method | Description |
| --- | --- |
| `create(data, null)` | Create a new entity with the given data. |
| `load(match, null)` | Load a single entity by match criteria. |
| `remove(match, null)` | Remove the matching entity. |
| `update(data, null)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associations` | `Map<String, Object>` |  |
| `data` | `Map<String, Object>` |  |
| `id` | `String` | Value supplied for `id` in the `FillerPhraseListCreateRequest` request. |
| `list` | `Map<String, Object>` |  |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` |  |
| `name` | `String` | Value supplied for `name` in the `FillerPhraseListCreateRequest` request. |
| `phrases` | `List<Object>` | Value supplied for `phrases` in the `FillerPhraseListCreateRequest` request. |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |
| `toolListIds` | `List<Object>` |  |
| `waitingListIds` | `List<Object>` |  |

#### Example: Load

```java
Object fillerPhraseList = client.fillerPhraseList(null).load(Map.of("id", "filler_phrase_list_id"), null);
```

#### Example: Create

```java
Object fillerPhraseList = client.fillerPhraseList(null).create(Map.of(
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


### Health

Create an instance: `SdkEntity health = client.health(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataSource` | `String` |  |
| `service` | `String` |  |
| `status` | `String` |  |

#### Example: Load

```java
Object health = client.health(null).load(null, null);
```


### Knowledge

Create an instance: `SdkEntity knowledge = client.knowledge(null);`

#### Operations

| Method | Description |
| --- | --- |
| `create(data, null)` | Create a new entity with the given data. |
| `load(match, null)` | Load a single entity by match criteria. |
| `remove(match, null)` | Remove the matching entity. |
| `update(data, null)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` |  |
| `defaultPostAction` | `String` | Defaults to `ask_if_needs_more` when omitted |
| `defaultResponse` | `String` | Default answer used when a trigger has no specific response. |
| `id` | `String` |  |
| `knowledge` | `Map<String, Object>` | A knowledge item: a set of recognised requests with their answers, folded into the prompt of every assistant it is associated with. |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` |  |
| `requestId` | `String` |  |
| `rules` | `String` | Optional constraints applied to the whole knowledge item. |
| `success` | `Boolean` |  |
| `title` | `String` | Human-readable title of the new knowledge item. |
| `triggers` | `List<Object>` | Initial trigger list for the knowledge item. |

#### Example: Load

```java
Object knowledge = client.knowledge(null).load(Map.of("id", 1L), null);
```

#### Example: Create

```java
Object knowledge = client.knowledge(null).create(Map.of(
    "data", Map.of(),  // Map<String, Object>
    "defaultResponse", "example_defaultResponse",  // String
    "knowledge", Map.of(),  // Map<String, Object>
    "message", "example_message",  // String
    "requestId", "example_requestId",  // String
    "success", true,  // Boolean
    "title", "example_title"  // String
), null);
```


### Llm

Create an instance: `SdkEntity llm = client.llm(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` |  |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` | Collection metadata. |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object llm = client.llm(null).load(null, null);
```


### LlmModelListSuccess

Create an instance: `SdkEntity llmModelListSuccess = client.llmModelListSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` |  |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` | Collection metadata. |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object llmModelListSuccess = client.llmModelListSuccess(null).load(Map.of("assistant_id", "assistant_id"), null);
```


### OutboundCall

Create an instance: `SdkEntity outboundCall = client.outboundCall(null);`

#### Operations

| Method | Description |
| --- | --- |
| `create(data, null)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `AddPrompt` | `String` | Legacy alias of `addPrompt`. |
| `addPrompt` | `String` | Optional additional prompt to customize assistant behavior. |
| `apiKey_assistente` | `String` | Legacy alias of `assistantApiKey`. |
| `assistantApiKey` | `String` | API key of the AI assistant that will talk to the callee. |
| `callId` | `String` | Technical call identifier, if already available when the response is returned. |
| `callResultUrl` | `String` | Optional HTTPS URL that AI4Call calls with the outcome notification. |
| `callbackConfigured` | `Boolean` | Indicates whether the callback URL for the call outcome was configured. |
| `callerId` | `String` | Caller number displayed in E.164 format. |
| `dst` | `String` | Recipient number in E.164 format, example +3902XXXXXXXX. |
| `internalId` | `String` | UUID generated by AI4Call to correlate the outbound request, callback and final dial-status lookup. |
| `status` | `String` | Initial status of the outbound request. |
| `url_esito_chiamata` | `Object` | Legacy alias of `callResultUrl`. |

#### Example: Create

```java
Object outboundCall = client.outboundCall(null).create(Map.of(
    "callbackConfigured", true,  // Boolean
    "callerId", "example_callerId",  // String
    "dst", "example_dst",  // String
    "internalId", "example_internalId",  // String
    "status", "example_status"  // String
), null);
```


### OutboundCallAcceptedSuccess

Create an instance: `SdkEntity outboundCallAcceptedSuccess = client.outboundCallAcceptedSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `create(data, null)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `AddPrompt` | `String` | Legacy alias of `addPrompt`. |
| `addPrompt` | `String` | Optional additional prompt to customize assistant behavior. |
| `apiKey_assistente` | `String` | Legacy alias of `assistantApiKey`. |
| `assistantApiKey` | `String` | API key of the AI assistant that will talk to the callee. |
| `callId` | `String` | Technical call identifier, if already available when the response is returned. |
| `callResultUrl` | `String` | Optional HTTPS URL that AI4Call calls with the outcome notification. |
| `callbackConfigured` | `Boolean` | Indicates whether the callback URL for the call outcome was configured. |
| `callerId` | `String` | Calling number displayed in the format required by the PBX, E.164 +3902XXXXXXXX or local 02XXXXXXXX. |
| `dst` | `String` | Recipient number in the format required by the PBX, E.164 +3902XXXXXXXX or local 02XXXXXXXX. |
| `internalId` | `String` | UUID generated by AI4Call to correlate the outbound request, callback and final dial-status lookup. |
| `ipPbx` | `String` | Public IP of the PBX, must be one of the authorized public IPs. |
| `ip_pbx` | `String` | Legacy alias of `ipPbx`. |
| `method_uac` | `Boolean` | Selects the registered UAC mode. |
| `sipPort` | `String` | SIP port of the PBX, standard 5060. |
| `sip_port` | `String` | Legacy alias of `sipPort`. |
| `status` | `String` | Initial status of the outbound request. |
| `url_esito_chiamata` | `Object` | Legacy alias of `callResultUrl`. |

#### Example: Create

```java
Object outboundCallAcceptedSuccess = client.outboundCallAcceptedSuccess(null).create(Map.of(
    "callbackConfigured", true,  // Boolean
    "callerId", "example_callerId",  // String
    "dst", "example_dst",  // String
    "internalId", "example_internalId",  // String
    "status", "example_status"  // String
), null);
```


### OutboundDialStatusPayload

Create an instance: `SdkEntity outboundDialStatusPayload = client.outboundDialStatusPayload(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `billSec` | `Long` | Billed duration in seconds. |
| `dialStatus` | `String` | Final dial result persisted in the outbound CDR. |
| `trafficCost` | `String` | Outbound traffic cost in EUR, expressed with six decimal places. |

#### Example: Load

```java
Object outboundDialStatusPayload = client.outboundDialStatusPayload(null).load(Map.of("uuid", "uuid"), null);
```


### PortalLoginSuccess

Create an instance: `SdkEntity portalLoginSuccess = client.portalLoginSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `create(data, null)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client` | `Map<String, Object>` | Customer profile returned after successful portal credential verification. |
| `email` | `String` | Portal customer email. |
| `portalApiKey` | `String` | Static portal API key associated with the customer account. |

#### Example: Create

```java
Object portalLoginSuccess = client.portalLoginSuccess(null).create(Map.of(
    "client", Map.of(),  // Map<String, Object>
    "email", "example_email",  // String
    "portalApiKey", "example_portalApiKey"  // String
), null);
```


### PreCall

Create an instance: `SdkEntity preCall = client.preCall(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `Map<String, Object>` |  |

#### Example: Load

```java
Object preCall = client.preCall(null).load(Map.of("assistant_id", "assistant_id"), null);
```


### ProviderWallet

Create an instance: `SdkEntity providerWallet = client.providerWallet(null);`

#### Operations

| Method | Description |
| --- | --- |
| `create(data, null)` | Create a new entity with the given data. |
| `load(match, null)` | Load a single entity by match criteria. |
| `remove(match, null)` | Remove the matching entity. |
| `update(data, null)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `Map<String, Object>` | Values of the fields declared by the catalog entry |
| `credential` | `Map<String, Object>` | A credential saved by the customer. |
| `data` | `Map<String, Object>` |  |
| `engine` | `String` | Engine code selected from the provider-wallet catalog. |
| `id` | `String` |  |
| `isActive` | `Boolean` | Whether the saved credential can be used by assistant runtimes. |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` |  |
| `name` | `String` | Customer-defined name for the saved credential. |
| `provider` | `String` | Provider code selected from the provider-wallet catalog. |
| `requestId` | `String` |  |
| `serviceType` | `String` | Service category selected from the provider-wallet catalog. |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object providerWallet = client.providerWallet(null).load(Map.of("id", 1L), null);
```

#### Example: Create

```java
Object providerWallet = client.providerWallet(null).create(Map.of(
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


### ProviderWalletAssociationsSuccess

Create an instance: `SdkEntity providerWalletAssociationsSuccess = client.providerWalletAssociationsSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` |  |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` |  |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object providerWalletAssociationsSuccess = client.providerWalletAssociationsSuccess(null).load(Map.of("assistant_id", "assistant_id"), null);
```


### ProviderWalletCatalogSuccess

Create an instance: `SdkEntity providerWalletCatalogSuccess = client.providerWalletCatalogSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` |  |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` |  |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object providerWalletCatalogSuccess = client.providerWalletCatalogSuccess(null).load(null, null);
```


### PublicRagSearchSuccess

Create an instance: `SdkEntity publicRagSearchSuccess = client.publicRagSearchSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `create(data, null)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `Long` | Number of chunks returned by the search, up to the service limit of 4. |
| `query` | `String` | Normalized query text used for the search. |
| `rag_id` | `String` | Public RAG identifier supplied in the request and returned unchanged on success. |
| `results` | `List<Object>` | Chunks returned by the vector search. |

#### Example: Create

```java
Object publicRagSearchSuccess = client.publicRagSearchSuccess(null).create(Map.of(
    "count", 1L,  // Long
    "query", "example_query",  // String
    "rag_id", "example_rag_id",  // String
    "results", List.of()  // List<Object>
), null);
```


### RagCollectionDeleteSuccess

Create an instance: `SdkEntity ragCollectionDeleteSuccess = client.ragCollectionDeleteSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `create(data, null)` | Create a new entity with the given data. |
| `load(match, null)` | Load a single entity by match criteria. |
| `remove(match, null)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` |  |
| `description` | `String` | Value supplied for `description` in the `RagCollectionCreateRequest` request. |
| `maxChunkSize` | `Long` | Value supplied for `maxChunkSize` in the `RagCollectionCreateRequest` request. |
| `maxChunksPerFile` | `Long` | Value supplied for `maxChunksPerFile` in the `RagCollectionCreateRequest` request. |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` | Collection metadata. |
| `name` | `String` | Value supplied for `name` in the `RagCollectionCreateRequest` request. |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object ragCollectionDeleteSuccess = client.ragCollectionDeleteSuccess(null).load(null, null);
```

#### Example: Create

```java
Object ragCollectionDeleteSuccess = client.ragCollectionDeleteSuccess(null).create(Map.of(
    "data", Map.of(),  // Map<String, Object>
    "message", "example_message",  // String
    "meta", Map.of(),  // Map<String, Object>
    "name", "example_name",  // String
    "requestId", "example_requestId",  // String
    "success", true  // Boolean
), null);
```


### RagCollectionDocumentDeleteSuccess

Create an instance: `SdkEntity ragCollectionDocumentDeleteSuccess = client.ragCollectionDocumentDeleteSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match, null)` | Remove the matching entity. |


### RagCollectionDocumentListSuccess

Create an instance: `SdkEntity ragCollectionDocumentListSuccess = client.ragCollectionDocumentListSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` |  |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` | Collection metadata. |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object ragCollectionDocumentListSuccess = client.ragCollectionDocumentListSuccess(null).load(Map.of("collection_id", "collection_id"), null);
```


### RagCollectionDocumentTokenEstimateSuccess

Create an instance: `SdkEntity ragCollectionDocumentTokenEstimateSuccess = client.ragCollectionDocumentTokenEstimateSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `create(data, null)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `estimatedCost` | `Double` |  |
| `fileCount` | `Long` |  |
| `fileDetails` | `List<Object>` |  |
| `processingTime` | `Long` |  |
| `raw` | `Map<String, Object>` |  |
| `totalTokens` | `Long` |  |

#### Example: Create

```java
Object ragCollectionDocumentTokenEstimateSuccess = client.ragCollectionDocumentTokenEstimateSuccess(null).create(Map.of(
    "estimatedCost", 1.0,  // Double
    "fileCount", 1L,  // Long
    "fileDetails", List.of(),  // List<Object>
    "processingTime", 1L,  // Long
    "raw", Map.of(),  // Map<String, Object>
    "totalTokens", 1L  // Long
), null);
```


### RagCollectionDocumentUploadStatusSuccess

Create an instance: `SdkEntity ragCollectionDocumentUploadStatusSuccess = client.ragCollectionDocumentUploadStatusSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `currentFile` | `String` |  |
| `errors` | `List<Object>` |  |
| `processedFiles` | `Long` |  |
| `progress` | `Double` |  |
| `raw` | `Map<String, Object>` |  |
| `results` | `List<Object>` |  |
| `status` | `String` |  |
| `totalCost` | `Double` |  |
| `totalFiles` | `Long` |  |
| `totalTokens` | `Long` |  |
| `uploadId` | `String` |  |

#### Example: Load

```java
Object ragCollectionDocumentUploadStatusSuccess = client.ragCollectionDocumentUploadStatusSuccess(null).load(Map.of("upload_id", "upload_id"), null);
```


### RagCollectionDocumentUploadSuccess

Create an instance: `SdkEntity ragCollectionDocumentUploadSuccess = client.ragCollectionDocumentUploadSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `create(data, null)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` | Result returned after starting a RAG document upload. |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` | Collection metadata. |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Create

```java
Object ragCollectionDocumentUploadSuccess = client.ragCollectionDocumentUploadSuccess(null).create(Map.of(
    "collection_id", "example_collection_id",  // String
    "data", Map.of(),  // Map<String, Object>
    "message", "example_message",  // String
    "meta", Map.of(),  // Map<String, Object>
    "requestId", "example_requestId",  // String
    "success", true  // Boolean
), null);
```


### RuntimeBinding

Create an instance: `SdkEntity runtimeBinding = client.runtimeBinding(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistantApiKey` | `String` |  |
| `assistantId` | `String` |  |
| `runtimeBindings` | `Map<String, Object>` |  |

#### Example: Load

```java
Object runtimeBinding = client.runtimeBinding(null).load(Map.of("assistant_id", "assistant_id"), null);
```


### Tts

Create an instance: `SdkEntity tts = client.tts(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` |  |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` | Collection metadata. |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object tts = client.tts(null).load(null, null);
```


### TtsVoiceListSuccess

Create an instance: `SdkEntity ttsVoiceListSuccess = client.ttsVoiceListSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` |  |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` | Collection metadata. |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object ttsVoiceListSuccess = client.ttsVoiceListSuccess(null).load(Map.of("assistant_id", "assistant_id"), null);
```


### Voice

Create an instance: `SdkEntity voice = client.voice(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` |  |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` | Collection metadata. |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object voice = client.voice(null).load(Map.of("model_code", "model_code"), null);
```


### VoiceLlm

Create an instance: `SdkEntity voiceLlm = client.voiceLlm(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` |  |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` | Collection metadata. |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object voiceLlm = client.voiceLlm(null).load(null, null);
```


### VoiceLlmModelListSuccess

Create an instance: `SdkEntity voiceLlmModelListSuccess = client.voiceLlmModelListSuccess(null);`

#### Operations

| Method | Description |
| --- | --- |
| `load(match, null)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Map<String, Object>` |  |
| `message` | `String` |  |
| `meta` | `Map<String, Object>` | Collection metadata. |
| `requestId` | `String` |  |
| `success` | `Boolean` |  |

#### Example: Load

```java
Object voiceLlmModelListSuccess = client.voiceLlmModelListSuccess(null).load(Map.of("provider", "provider"), null);
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | Test transport |

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Java SDK uses a loose object model — `Map<String, Object>` throughout —
rather than a bespoke typed class per endpoint. This mirrors the dynamic
nature of the API and keeps the SDK flexible: no regeneration is needed when
the API schema changes.

Use `Helpers.toMapAny(value)` to safely coerce a value to a
`Map<String, Object>`. A `Ai4callTypes.java` module of reference
`record` types is also generated for editor documentation.

### Project structure

```
java/
├── pom.xml                     -- Maven project (compiles core/, utility/, feature/, entity/)
├── core/                       -- Main SDK client, config, entity base, error type
├── entity/                     -- Entity implementations
├── feature/                    -- Built-in features (Base, Test, Log, ...)
├── utility/                    -- Utility functions and the vendored struct library
└── test/                       -- JUnit test suites
```

The main client class (`Ai4callSDK`, package `voxgig.ai4callsdk.core`)
exposes the entity accessors. Reference entity or utility types directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const analyticsragsearchsuccess = client.AnalyticsRagSearchSuccess()
await analyticsragsearchsuccess.load()

// analyticsragsearchsuccess.data() now returns the analyticsragsearchsuccess data from the last `load`
// analyticsragsearchsuccess.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
