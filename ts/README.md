# Ai4call TypeScript SDK



The TypeScript SDK for the Ai4call API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.AccountAllowedIpsSuccess()` — each with a small set of operations (`load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `java`, `py` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/ai4call-sdk/releases)), or from a
clone, which carries the compiled `dist/`:

```bash
git clone https://github.com/voxgig-sdk/ai4call-sdk
npm install ./ai4call-sdk/ts
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { Ai4callSDK } from '@voxgig-sdk/ai4call-sdk'

const client = new Ai4callSDK({
  apikey: process.env.AI4CALL_APIKEY,
})
```

### 3. Load an asrmodellistsuccess

AsrModelListSuccess is nested under assistant, so provide the `assistant_id`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const asrmodellistsuccess = await client.AsrModelListSuccess().load({
    assistant_id: 'example_assistant_id',
  })
  console.log(asrmodellistsuccess)
} catch (err) {
  console.error('load failed:', err)
}
```

### 4. Create, update, and remove

```ts
// Update
const updated = await client.AccountAllowedIpsSuccess().update({
  addIps: [],
  allowedIps: [],
})

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

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = Ai4callSDK.test()

const analyticsragsearchsuccess = await client.AnalyticsRagSearchSuccess().load()
// analyticsragsearchsuccess is the entity, populated with mock response data
// — call analyticsragsearchsuccess.data() for the record itself
console.log(analyticsragsearchsuccess)
```

You can also use the instance method:

```ts
const client = new Ai4callSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.AnalyticsRagSearchSuccess()

// First call runs the operation and stores its result
await entity.load()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new Ai4callSDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
AI4CALL_TEST_LIVE=TRUE
AI4CALL_APIKEY=<your-key>
```

Then run:

```bash
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### Ai4callSDK

#### Constructor

```ts
new Ai4callSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `AccountAllowedIpsSuccess(data?)` | `AccountAllowedIpsSuccessEntity` | Create an AccountAllowedIpsSuccess entity instance. |
| `AccountAvailablePluginsSuccess(data?)` | `AccountAvailablePluginsSuccessEntity` | Create an AccountAvailablePluginsSuccess entity instance. |
| `AccountCallLimitsSuccess(data?)` | `AccountCallLimitsSuccessEntity` | Create an AccountCallLimitsSuccess entity instance. |
| `AccountNumberRoutingSuccess(data?)` | `AccountNumberRoutingSuccessEntity` | Create an AccountNumberRoutingSuccess entity instance. |
| `AccountPluginConfigurationSuccess(data?)` | `AccountPluginConfigurationSuccessEntity` | Create an AccountPluginConfigurationSuccess entity instance. |
| `AccountPluginInstanceSuccess(data?)` | `AccountPluginInstanceSuccessEntity` | Create an AccountPluginInstanceSuccess entity instance. |
| `AccountPluginPurchaseSuccess(data?)` | `AccountPluginPurchaseSuccessEntity` | Create an AccountPluginPurchaseSuccess entity instance. |
| `AnalyticsCallsOutboundSuccess(data?)` | `AnalyticsCallsOutboundSuccessEntity` | Create an AnalyticsCallsOutboundSuccess entity instance. |
| `AnalyticsCallsSuccess(data?)` | `AnalyticsCallsSuccessEntity` | Create an AnalyticsCallsSuccess entity instance. |
| `AnalyticsPostCallSuccess(data?)` | `AnalyticsPostCallSuccessEntity` | Create an AnalyticsPostCallSuccess entity instance. |
| `AnalyticsPreCallSuccess(data?)` | `AnalyticsPreCallSuccessEntity` | Create an AnalyticsPreCallSuccess entity instance. |
| `AnalyticsRagSearchSuccess(data?)` | `AnalyticsRagSearchSuccessEntity` | Create an AnalyticsRagSearchSuccess entity instance. |
| `AnalyticsRagSuccess(data?)` | `AnalyticsRagSuccessEntity` | Create an AnalyticsRagSuccess entity instance. |
| `AnalyticsRechargesSuccess(data?)` | `AnalyticsRechargesSuccessEntity` | Create an AnalyticsRechargesSuccess entity instance. |
| `AnalyticsSmsSuccess(data?)` | `AnalyticsSmsSuccessEntity` | Create an AnalyticsSmsSuccess entity instance. |
| `AnalyticsToolResponsesSuccess(data?)` | `AnalyticsToolResponsesSuccessEntity` | Create an AnalyticsToolResponsesSuccess entity instance. |
| `Asr(data?)` | `AsrEntity` | Create an Asr entity instance. |
| `AsrModelListSuccess(data?)` | `AsrModelListSuccessEntity` | Create an AsrModelListSuccess entity instance. |
| `Assistant(data?)` | `AssistantEntity` | Create an Assistant entity instance. |
| `AssistantAdvancedSettingsConfigurationSuccess(data?)` | `AssistantAdvancedSettingsConfigurationSuccessEntity` | Create an AssistantAdvancedSettingsConfigurationSuccess entity instance. |
| `AssistantAdvancedSettingsRuntimeUpdateSuccess(data?)` | `AssistantAdvancedSettingsRuntimeUpdateSuccessEntity` | Create an AssistantAdvancedSettingsRuntimeUpdateSuccess entity instance. |
| `AssistantAsrRuntimeUpdateSuccess(data?)` | `AssistantAsrRuntimeUpdateSuccessEntity` | Create an AssistantAsrRuntimeUpdateSuccess entity instance. |
| `AssistantConversationWebhookRuntimeSuccess(data?)` | `AssistantConversationWebhookRuntimeSuccessEntity` | Create an AssistantConversationWebhookRuntimeSuccess entity instance. |
| `AssistantDtmfConfigurationSuccess(data?)` | `AssistantDtmfConfigurationSuccessEntity` | Create an AssistantDtmfConfigurationSuccess entity instance. |
| `AssistantDtmfRuntimeUpdateSuccess(data?)` | `AssistantDtmfRuntimeUpdateSuccessEntity` | Create an AssistantDtmfRuntimeUpdateSuccess entity instance. |
| `AssistantHangupConfigurationSuccess(data?)` | `AssistantHangupConfigurationSuccessEntity` | Create an AssistantHangupConfigurationSuccess entity instance. |
| `AssistantHangupRuntimeUpdateSuccess(data?)` | `AssistantHangupRuntimeUpdateSuccessEntity` | Create an AssistantHangupRuntimeUpdateSuccess entity instance. |
| `AssistantHangupSchemaRuntimeSuccess(data?)` | `AssistantHangupSchemaRuntimeSuccessEntity` | Create an AssistantHangupSchemaRuntimeSuccess entity instance. |
| `AssistantKnowledgeSuccess(data?)` | `AssistantKnowledgeSuccessEntity` | Create an AssistantKnowledgeSuccess entity instance. |
| `AssistantLlmRuntimeUpdateSuccess(data?)` | `AssistantLlmRuntimeUpdateSuccessEntity` | Create an AssistantLlmRuntimeUpdateSuccess entity instance. |
| `AssistantNumberRoutingCatalogSuccess(data?)` | `AssistantNumberRoutingCatalogSuccessEntity` | Create an AssistantNumberRoutingCatalogSuccess entity instance. |
| `AssistantNumberRoutingRuntimeSuccess(data?)` | `AssistantNumberRoutingRuntimeSuccessEntity` | Create an AssistantNumberRoutingRuntimeSuccess entity instance. |
| `AssistantPostcallMcpRuntimeSuccess(data?)` | `AssistantPostcallMcpRuntimeSuccessEntity` | Create an AssistantPostcallMcpRuntimeSuccess entity instance. |
| `AssistantPrecallMcpRuntimeSuccess(data?)` | `AssistantPrecallMcpRuntimeSuccessEntity` | Create an AssistantPrecallMcpRuntimeSuccess entity instance. |
| `AssistantPrecallValidationRuntimeSuccess(data?)` | `AssistantPrecallValidationRuntimeSuccessEntity` | Create an AssistantPrecallValidationRuntimeSuccess entity instance. |
| `AssistantPromptSuccess(data?)` | `AssistantPromptSuccessEntity` | Create an AssistantPromptSuccess entity instance. |
| `AssistantRagConfigurationSuccess(data?)` | `AssistantRagConfigurationSuccessEntity` | Create an AssistantRagConfigurationSuccess entity instance. |
| `AssistantRagRuntimeUpdateSuccess(data?)` | `AssistantRagRuntimeUpdateSuccessEntity` | Create an AssistantRagRuntimeUpdateSuccess entity instance. |
| `AssistantSaveConversationRuntimeSuccess(data?)` | `AssistantSaveConversationRuntimeSuccessEntity` | Create an AssistantSaveConversationRuntimeSuccess entity instance. |
| `AssistantSettingsConfigurationSuccess(data?)` | `AssistantSettingsConfigurationSuccessEntity` | Create an AssistantSettingsConfigurationSuccess entity instance. |
| `AssistantSettingsRuntimeUpdateSuccess(data?)` | `AssistantSettingsRuntimeUpdateSuccessEntity` | Create an AssistantSettingsRuntimeUpdateSuccess entity instance. |
| `AssistantToolsRuntimeUpdateSuccess(data?)` | `AssistantToolsRuntimeUpdateSuccessEntity` | Create an AssistantToolsRuntimeUpdateSuccess entity instance. |
| `AssistantTtsRuntimeUpdateSuccess(data?)` | `AssistantTtsRuntimeUpdateSuccessEntity` | Create an AssistantTtsRuntimeUpdateSuccess entity instance. |
| `AssistantVoiceToVoiceRuntimeUpdateSuccess(data?)` | `AssistantVoiceToVoiceRuntimeUpdateSuccessEntity` | Create an AssistantVoiceToVoiceRuntimeUpdateSuccess entity instance. |
| `AssociatedRuntimeToolListSuccess(data?)` | `AssociatedRuntimeToolListSuccessEntity` | Create an AssociatedRuntimeToolListSuccess entity instance. |
| `AudioToAudio(data?)` | `AudioToAudioEntity` | Create an AudioToAudio entity instance. |
| `AvailableRuntimeToolListSuccess(data?)` | `AvailableRuntimeToolListSuccessEntity` | Create an AvailableRuntimeToolListSuccess entity instance. |
| `FillerPhraseList(data?)` | `FillerPhraseListEntity` | Create a FillerPhraseList entity instance. |
| `Health(data?)` | `HealthEntity` | Create a Health entity instance. |
| `Knowledge(data?)` | `KnowledgeEntity` | Create a Knowledge entity instance. |
| `Llm(data?)` | `LlmEntity` | Create a Llm entity instance. |
| `LlmModelListSuccess(data?)` | `LlmModelListSuccessEntity` | Create a LlmModelListSuccess entity instance. |
| `OutboundCall(data?)` | `OutboundCallEntity` | Create an OutboundCall entity instance. |
| `OutboundCallAcceptedSuccess(data?)` | `OutboundCallAcceptedSuccessEntity` | Create an OutboundCallAcceptedSuccess entity instance. |
| `OutboundDialStatusPayload(data?)` | `OutboundDialStatusPayloadEntity` | Create an OutboundDialStatusPayload entity instance. |
| `PortalLoginSuccess(data?)` | `PortalLoginSuccessEntity` | Create a PortalLoginSuccess entity instance. |
| `PreCall(data?)` | `PreCallEntity` | Create a PreCall entity instance. |
| `ProviderWallet(data?)` | `ProviderWalletEntity` | Create a ProviderWallet entity instance. |
| `ProviderWalletAssociationsSuccess(data?)` | `ProviderWalletAssociationsSuccessEntity` | Create a ProviderWalletAssociationsSuccess entity instance. |
| `ProviderWalletCatalogSuccess(data?)` | `ProviderWalletCatalogSuccessEntity` | Create a ProviderWalletCatalogSuccess entity instance. |
| `PublicRagSearchSuccess(data?)` | `PublicRagSearchSuccessEntity` | Create a PublicRagSearchSuccess entity instance. |
| `RagCollectionDeleteSuccess(data?)` | `RagCollectionDeleteSuccessEntity` | Create a RagCollectionDeleteSuccess entity instance. |
| `RagCollectionDocumentDeleteSuccess(data?)` | `RagCollectionDocumentDeleteSuccessEntity` | Create a RagCollectionDocumentDeleteSuccess entity instance. |
| `RagCollectionDocumentListSuccess(data?)` | `RagCollectionDocumentListSuccessEntity` | Create a RagCollectionDocumentListSuccess entity instance. |
| `RagCollectionDocumentTokenEstimateSuccess(data?)` | `RagCollectionDocumentTokenEstimateSuccessEntity` | Create a RagCollectionDocumentTokenEstimateSuccess entity instance. |
| `RagCollectionDocumentUploadStatusSuccess(data?)` | `RagCollectionDocumentUploadStatusSuccessEntity` | Create a RagCollectionDocumentUploadStatusSuccess entity instance. |
| `RagCollectionDocumentUploadSuccess(data?)` | `RagCollectionDocumentUploadSuccessEntity` | Create a RagCollectionDocumentUploadSuccess entity instance. |
| `RuntimeBinding(data?)` | `RuntimeBindingEntity` | Create a RuntimeBinding entity instance. |
| `Tts(data?)` | `TtsEntity` | Create a Tts entity instance. |
| `TtsVoiceListSuccess(data?)` | `TtsVoiceListSuccessEntity` | Create a TtsVoiceListSuccess entity instance. |
| `Voice(data?)` | `VoiceEntity` | Create a Voice entity instance. |
| `VoiceLlm(data?)` | `VoiceLlmEntity` | Create a VoiceLlm entity instance. |
| `VoiceLlmModelListSuccess(data?)` | `VoiceLlmModelListSuccessEntity` | Create a VoiceLlmModelListSuccess entity instance. |
| `tester(testopts?, sdkopts?)` | `Ai4callSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `Ai4callSDK.test(testopts?, sdkopts?)` | `Ai4callSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): Ai4callSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

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

Create an instance: `const account_allowed_ips_success = client.AccountAllowedIpsSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `addIps` | `any[]` | Value supplied for `addIps` in the `AccountAllowedIpsUpdateRequest` request. |
| `allowedIps` | `any[]` | Value supplied for `allowedIps` in the `AccountAllowedIpsUpdateRequest` request. |
| `data` | `Record<string, any>` |  |
| `deleteIps` | `any[]` | Value supplied for `deleteIps` in the `AccountAllowedIpsUpdateRequest` request. |
| `message` | `string` |  |
| `meta` | `Record<string, any>` |  |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const account_allowed_ips_success = await client.AccountAllowedIpsSuccess().load()
```


### AccountAvailablePluginsSuccess

Create an instance: `const account_available_plugins_success = client.AccountAvailablePluginsSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `message` | `string` |  |
| `meta` | `Record<string, any>` |  |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const account_available_plugins_success = await client.AccountAvailablePluginsSuccess().load()
```


### AccountCallLimitsSuccess

Create an instance: `const account_call_limits_success = client.AccountCallLimitsSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistants` | `any[]` | Value supplied for `assistants` in the `AccountCallLimitsUpdateRequest` request. |
| `data` | `Record<string, any>` |  |
| `message` | `string` |  |
| `meta` | `Record<string, any>` |  |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const account_call_limits_success = await client.AccountCallLimitsSuccess().load()
```


### AccountNumberRoutingSuccess

Create an instance: `const account_number_routing_success = client.AccountNumberRoutingSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `demoNumbers` | `any[]` | Value supplied for `demoNumbers` in the `AccountNumberRoutingUpdateRequest` request. |
| `message` | `string` |  |
| `meta` | `Record<string, any>` |  |
| `purchasedNumbers` | `any[]` | Value supplied for `purchasedNumbers` in the `AccountNumberRoutingUpdateRequest` request. |
| `requestId` | `string` |  |
| `success` | `boolean` |  |
| `userNumbers` | `any[]` | Value supplied for `userNumbers` in the `AccountNumberRoutingUpdateRequest` request. |

#### Example: Load

```ts
const account_number_routing_success = await client.AccountNumberRoutingSuccess().load()
```


### AccountPluginConfigurationSuccess

Create an instance: `const account_plugin_configuration_success = client.AccountPluginConfigurationSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `Record<string, any>` | Configuration contract and current values for one plugin instance. |
| `instanceName` | `string` | Value supplied for `instanceName` in the `AccountPluginConfigurationUpdateRequest` request. |
| `instance_name` | `string` | Legacy alias of `instanceName`. |
| `pluginName` | `string` | Value supplied for `pluginName` in the `AccountPluginConfigurationUpdateRequest` request. |
| `plugin_name` | `string` | Legacy alias of `pluginName`. |

#### Example: Load

```ts
const account_plugin_configuration_success = await client.AccountPluginConfigurationSuccess().load()
```


### AccountPluginInstanceSuccess

Create an instance: `const account_plugin_instance_success = client.AccountPluginInstanceSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `Record<string, any>` | Current lifecycle information for one purchased plugin instance. |
| `data` | `Record<string, any>` |  |
| `instanceName` | `string` | Value supplied for `instanceName` in the `AccountPluginPurchaseRequest` request. |
| `instance_name` | `string` | Legacy alias of `instanceName`. |
| `message` | `string` |  |
| `meta` | `Record<string, any>` |  |
| `newInstanceName` | `string` | Value supplied for `newInstanceName` in the `AccountPluginInstanceByIdUpdateRequest` request. |
| `new_instance_name` | `string` | Legacy alias of `newInstanceName`. |
| `pluginName` | `string` | Value supplied for `pluginName` in the `AccountPluginPurchaseRequest` request. |
| `plugin_name` | `string` | Legacy alias of `pluginName`. |
| `requestId` | `string` |  |
| `status` | `string` | Value supplied for `status` in the `AccountPluginInstanceUpdateRequest` request. |
| `success` | `boolean` |  |

#### Example: Load

```ts
const account_plugin_instance_success = await client.AccountPluginInstanceSuccess().load()
```

#### Example: Create

```ts
const account_plugin_instance_success = await client.AccountPluginInstanceSuccess().create({
  configuration: {},
  data: {},
  message: 'example_message',
  meta: {},
  requestId: 'example_requestId',
  success: true,
})
```


### AccountPluginPurchaseSuccess

Create an instance: `const account_plugin_purchase_success = client.AccountPluginPurchaseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `Record<string, any>` | Result of a plugin purchase, including charged prices and created instance data. |
| `instanceName` | `string` | Value supplied for `instanceName` in the `AccountPluginPurchaseRequest` request. |
| `instance_name` | `string` | Legacy alias of `instanceName`. |
| `pluginName` | `string` | Value supplied for `pluginName` in the `AccountPluginPurchaseRequest` request. |
| `plugin_name` | `string` | Legacy alias of `pluginName`. |


### AnalyticsCallsOutboundSuccess

Create an instance: `const analytics_calls_outbound_success = client.AnalyticsCallsOutboundSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `message` | `string` |  |
| `meta` | `Record<string, any>` |  |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const analytics_calls_outbound_success = await client.AnalyticsCallsOutboundSuccess().load()
```


### AnalyticsCallsSuccess

Create an instance: `const analytics_calls_success = client.AnalyticsCallsSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `message` | `string` |  |
| `meta` | `Record<string, any>` |  |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const analytics_calls_success = await client.AnalyticsCallsSuccess().load()
```


### AnalyticsPostCallSuccess

Create an instance: `const analytics_post_call_success = client.AnalyticsPostCallSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `message` | `string` |  |
| `meta` | `Record<string, any>` |  |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const analytics_post_call_success = await client.AnalyticsPostCallSuccess().load()
```


### AnalyticsPreCallSuccess

Create an instance: `const analytics_pre_call_success = client.AnalyticsPreCallSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `message` | `string` |  |
| `meta` | `Record<string, any>` |  |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const analytics_pre_call_success = await client.AnalyticsPreCallSuccess().load()
```


### AnalyticsRagSearchSuccess

Create an instance: `const analytics_rag_search_success = client.AnalyticsRagSearchSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `message` | `string` |  |
| `meta` | `Record<string, any>` |  |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const analytics_rag_search_success = await client.AnalyticsRagSearchSuccess().load()
```


### AnalyticsRagSuccess

Create an instance: `const analytics_rag_success = client.AnalyticsRagSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `message` | `string` |  |
| `meta` | `Record<string, any>` |  |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const analytics_rag_success = await client.AnalyticsRagSuccess().load()
```


### AnalyticsRechargesSuccess

Create an instance: `const analytics_recharges_success = client.AnalyticsRechargesSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `message` | `string` |  |
| `meta` | `Record<string, any>` |  |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const analytics_recharges_success = await client.AnalyticsRechargesSuccess().load()
```


### AnalyticsSmsSuccess

Create an instance: `const analytics_sms_success = client.AnalyticsSmsSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `message` | `string` |  |
| `meta` | `Record<string, any>` |  |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const analytics_sms_success = await client.AnalyticsSmsSuccess().load()
```


### AnalyticsToolResponsesSuccess

Create an instance: `const analytics_tool_responses_success = client.AnalyticsToolResponsesSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `message` | `string` |  |
| `meta` | `Record<string, any>` |  |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const analytics_tool_responses_success = await client.AnalyticsToolResponsesSuccess().load()
```


### Asr

Create an instance: `const asr = client.Asr()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `message` | `string` |  |
| `meta` | `Record<string, any>` | Collection metadata. |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const asr = await client.Asr().load()
```


### AsrModelListSuccess

Create an instance: `const asr_model_list_success = client.AsrModelListSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `message` | `string` |  |
| `meta` | `Record<string, any>` | Collection metadata. |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const asr_model_list_success = await client.AsrModelListSuccess().load({ assistant_id: 'assistant_id' })
```


### Assistant

Create an instance: `const assistant = client.Assistant()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistant` | `any` | Assistant detail response, including the legacy assistant API key during the v1 compatibility period. |
| `audioToAudio` | `any` | Initial audio-to-audio configuration, used when applicable to the selected mode. |
| `data` | `Record<string, any>` |  |
| `description` | `string` | Functional description of the assistant. |
| `firstMessage` | `Record<string, any>` | Partial update of the assistant's first-message configuration. |
| `id` | `string` |  |
| `message` | `string` |  |
| `meta` | `Record<string, any>` | Collection metadata. |
| `metadata` | `Record<string, any>` | Free-form metadata to store with the assistant. |
| `mode` | `string` | Runtime mode to use when creating the assistant. |
| `name` | `string` | Assistant name. |
| `network` | `Record<string, any>` | Network settings to update on the assistant. |
| `numbers` | `Record<string, any>` | Replacement values for assistant number lists when supplied. |
| `requestId` | `string` |  |
| `settings` | `Record<string, any>` | High-level assistant settings to update. |
| `status` | `string` | New lifecycle status for the assistant. |
| `success` | `boolean` |  |
| `voiceToVoice` | `Record<string, any>` | Legacy alias of `audioToAudio`. |

#### Example: Load

```ts
const assistant = await client.Assistant().load({ id: 'assistant_id' })
```

#### Example: Create

```ts
const assistant = await client.Assistant().create({
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


### AssistantAdvancedSettingsConfigurationSuccess

Create an instance: `const assistant_advanced_settings_configuration_success = client.AssistantAdvancedSettingsConfigurationSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const assistant_advanced_settings_configuration_success = await client.AssistantAdvancedSettingsConfigurationSuccess().load({ id: 'assistant_advanced_settings_configuration_success_id' })
```


### AssistantAdvancedSettingsRuntimeUpdateSuccess

Create an instance: `const assistant_advanced_settings_runtime_update_success = client.AssistantAdvancedSettingsRuntimeUpdateSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistantApiKey` | `string` |  |
| `assistantId` | `string` |  |
| `configuration` | `Record<string, any>` |  |
| `freqPenalty` | `number` | Value supplied for `freqPenalty` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `maxTokens` | `number` | Value supplied for `maxTokens` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `presencePenalty` | `number` | Value supplied for `presencePenalty` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `service` | `string` |  |
| `stopSequences` | `any[]` | Value supplied for `stopSequences` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `temperature` | `number` | Value supplied for `temperature` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `topK` | `number` | Value supplied for `topK` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `topP` | `number` | Value supplied for `topP` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |


### AssistantAsrRuntimeUpdateSuccess

Create an instance: `const assistant_asr_runtime_update_success = client.AssistantAsrRuntimeUpdateSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiKey` | `string` | API key of the customer's ASR provider. |
| `assistantApiKey` | `string` |  |
| `assistantId` | `string` |  |
| `configuration` | `Record<string, any>` | Actual resulting ASR runtime configuration after merge and backend resolution. |
| `engineCode` | `string` | ASR engine/provider code. |
| `providerWalletId` | `number` | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `runtimeBinding` | `Record<string, any>` |  |
| `service` | `string` |  |
| `sourceMode` | `string` | Runtime sourcing mode. |


### AssistantConversationWebhookRuntimeSuccess

Create an instance: `const assistant_conversation_webhook_runtime_success = client.AssistantConversationWebhookRuntimeSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authName` | `string` | Name of the saved authentication to apply to the request |
| `configuration` | `Record<string, any>` |  |
| `enabled` | `boolean` | Enable or disable sending the conversation to the webhook |
| `url` | `string` | Endpoint that receives the POST at the end of the call |

#### Example: Load

```ts
const assistant_conversation_webhook_runtime_success = await client.AssistantConversationWebhookRuntimeSuccess().load({ assistant_id: 'assistant_id' })
```


### AssistantDtmfConfigurationSuccess

Create an instance: `const assistant_dtmf_configuration_success = client.AssistantDtmfConfigurationSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const assistant_dtmf_configuration_success = await client.AssistantDtmfConfigurationSuccess().load({ id: 'assistant_dtmf_configuration_success_id' })
```


### AssistantDtmfRuntimeUpdateSuccess

Create an instance: `const assistant_dtmf_runtime_update_success = client.AssistantDtmfRuntimeUpdateSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acceptTimeout` | `number` | Value supplied for `acceptTimeout` in the `AssistantDtmfRuntimeUpdateRequest` request. |
| `assistantApiKey` | `string` |  |
| `assistantId` | `string` |  |
| `configuration` | `Record<string, any>` |  |
| `enabled` | `boolean` | Enable or disable DTMF reception. |
| `maxLength` | `number` | Value supplied for `maxLength` in the `AssistantDtmfRuntimeUpdateRequest` request. |
| `minLength` | `number` | Value supplied for `minLength` in the `AssistantDtmfRuntimeUpdateRequest` request. |
| `playEnabled` | `boolean` | Enable or disable DTMF sending during the call. |
| `service` | `string` |  |
| `terminationChars` | `string` | Value supplied for `terminationChars` in the `AssistantDtmfRuntimeUpdateRequest` request. |


### AssistantHangupConfigurationSuccess

Create an instance: `const assistant_hangup_configuration_success = client.AssistantHangupConfigurationSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const assistant_hangup_configuration_success = await client.AssistantHangupConfigurationSuccess().load({ id: 'assistant_hangup_configuration_success_id' })
```


### AssistantHangupRuntimeUpdateSuccess

Create an instance: `const assistant_hangup_runtime_update_success = client.AssistantHangupRuntimeUpdateSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistantApiKey` | `string` |  |
| `assistantId` | `string` |  |
| `availableAgents` | `any[]` | Value supplied for `availableAgents` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `configuration` | `Record<string, any>` |  |
| `enableHangup` | `boolean` | Value supplied for `enableHangup` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `enableRedirect` | `boolean` | Value supplied for `enableRedirect` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `enableTransferAgent` | `boolean` | Value supplied for `enableTransferAgent` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `service` | `string` |  |
| `transferAgentNotificationText` | `string` | Value supplied for `transferAgentNotificationText` in the `AssistantHangupRuntimeUpdateRequest` request. |


### AssistantHangupSchemaRuntimeSuccess

Create an instance: `const assistant_hangup_schema_runtime_success = client.AssistantHangupSchemaRuntimeSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `Record<string, any>` |  |
| `hangupUrl` | `string` | Hangup webhook URL (null to remove) |
| `schema` | `any[]` | Defining body fields (overrides the current schema) |

#### Example: Load

```ts
const assistant_hangup_schema_runtime_success = await client.AssistantHangupSchemaRuntimeSuccess().load({ assistant_id: 'assistant_id' })
```


### AssistantKnowledgeSuccess

Create an instance: `const assistant_knowledge_success = client.AssistantKnowledgeSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const assistant_knowledge_success = await client.AssistantKnowledgeSuccess().load({ id: 'assistant_knowledge_success_id' })
```


### AssistantLlmRuntimeUpdateSuccess

Create an instance: `const assistant_llm_runtime_update_success = client.AssistantLlmRuntimeUpdateSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiKey` | `string` | API key of the customer's LLM provider. |
| `assistantApiKey` | `string` |  |
| `assistantId` | `string` |  |
| `baseUrl` | `string` | Base custom URL of the LLM provider. |
| `configuration` | `Record<string, any>` | Actual resulting LLM runtime configuration after merge and backend resolution. |
| `engineCode` | `string` | LLM engine/provider code. |
| `modelCode` | `string` | LLM model code. |
| `providerWalletId` | `number` | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `runtimeBinding` | `Record<string, any>` |  |
| `service` | `string` |  |
| `sourceMode` | `string` | Runtime sourcing mode. |


### AssistantNumberRoutingCatalogSuccess

Create an instance: `const assistant_number_routing_catalog_success = client.AssistantNumberRoutingCatalogSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const assistant_number_routing_catalog_success = await client.AssistantNumberRoutingCatalogSuccess().load({ id: 'assistant_number_routing_catalog_success_id' })
```


### AssistantNumberRoutingRuntimeSuccess

Create an instance: `const assistant_number_routing_runtime_success = client.AssistantNumberRoutingRuntimeSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `Record<string, any>` |  |
| `demoNumbers` | `any[]` | Demo numbers to route to this assistant |
| `purchasedNumbers` | `any[]` | Purchased numbers to route to this assistant |
| `userNumbers` | `any[]` | Customer's own numbers (own PBX) to route to this assistant |


### AssistantPostcallMcpRuntimeSuccess

Create an instance: `const assistant_postcall_mcp_runtime_success = client.AssistantPostcallMcpRuntimeSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `Record<string, any>` | General configuration of the post-call phase. |
| `enabled` | `boolean` | Enable or disable the whole post-call phase without losing its configuration. |
| `globalPrompt` | `string` | Global post-call prompt. |
| `modelConfig` | `Record<string, any>` | Model configuration used by the MCP phase. |
| `tools` | `any[]` | Complete list of post-call tools to set up. |

#### Example: Load

```ts
const assistant_postcall_mcp_runtime_success = await client.AssistantPostcallMcpRuntimeSuccess().load({ assistant_id: 'assistant_id' })
```


### AssistantPrecallMcpRuntimeSuccess

Create an instance: `const assistant_precall_mcp_runtime_success = client.AssistantPrecallMcpRuntimeSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `Record<string, any>` | General configuration of the pre-call phase. |
| `earlyTerminationEnabled` | `boolean` | Enable/disable early termination. |
| `enabled` | `boolean` | Enable or disable the whole pre-call phase without losing its configuration. |
| `globalPrompt` | `string` | Global pre-call prompt. |
| `modelConfig` | `Record<string, any>` | Model configuration used by the MCP phase. |
| `outputSchema` | `Record<string, any>` | JSON schema of the expected pre-call output, as an alternative to `outputVariables`. |
| `outputVariables` | `any[]` | Variables to extract from the pre-call result. |
| `terminationMessage` | `string` | Early termination audio message. |
| `tools` | `any[]` | Complete list of pre-call tools to set (replaces the current ones). |
| `voiceConfig` | `Record<string, any>` | Voice/TTS configuration used to generate pre-call hold and termination audio. |
| `waitingAudioNonInterruptible` | `boolean` | `true` plays all on-hold audio, `false` allows the customer to speak over the audio. |
| `waitingAudioText` | `string` | Audio text on hold. |

#### Example: Load

```ts
const assistant_precall_mcp_runtime_success = await client.AssistantPrecallMcpRuntimeSuccess().load({ assistant_id: 'assistant_id' })
```


### AssistantPrecallValidationRuntimeSuccess

Create an instance: `const assistant_precall_validation_runtime_success = client.AssistantPrecallValidationRuntimeSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authPassword` | `string` | Basic auth password (null to remove it) |
| `authToken` | `string` | Bearer token or API key (null to remove it) |
| `authType` | `string` |  |
| `authUsername` | `string` | Value supplied for `authUsername` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `configuration` | `any` | null if no configuration is yet present |
| `headersJson` | `Record<string, any>` | Value supplied for `headersJson` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `isActive` | `boolean` | Value supplied for `isActive` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `method` | `string` |  |
| `name` | `string` | Value supplied for `name` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `numberLocation` | `string` | Where to insert the calling number in the HTTP request: - `query` — added as a query string (e.g. |
| `numberParamName` | `string` | Value supplied for `numberParamName` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `timeoutMs` | `number` | Value supplied for `timeoutMs` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `url` | `string` | Value supplied for `url` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |

#### Example: Load

```ts
const assistant_precall_validation_runtime_success = await client.AssistantPrecallValidationRuntimeSuccess().load({ assistant_id: 'assistant_id' })
```


### AssistantPromptSuccess

Create an instance: `const assistant_prompt_success = client.AssistantPromptSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const assistant_prompt_success = await client.AssistantPromptSuccess().load({ id: 'assistant_prompt_success_id' })
```


### AssistantRagConfigurationSuccess

Create an instance: `const assistant_rag_configuration_success = client.AssistantRagConfigurationSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` |  |
| `kbPrompt` | `string` |  |
| `name` | `string` |  |
| `returnedChunks` | `number` |  |

#### Example: Load

```ts
const assistant_rag_configuration_success = await client.AssistantRagConfigurationSuccess().load({ assistant_id: 'assistant_id' })
```


### AssistantRagRuntimeUpdateSuccess

Create an instance: `const assistant_rag_runtime_update_success = client.AssistantRagRuntimeUpdateSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistantApiKey` | `string` |  |
| `assistantId` | `string` |  |
| `configuration` | `Record<string, any>` | RAG configuration resulting after application merge. |
| `enabled` | `boolean` | Enable or disable RAG for the assistant. |
| `kbPrompt` | `string` | Assistant knowledge base instructions. |
| `name` | `string` | Name of the RAG collection to associate. |
| `returnedChunks` | `number` | Number of relevant fragments to return from the knowledge base. |
| `service` | `string` |  |


### AssistantSaveConversationRuntimeSuccess

Create an instance: `const assistant_save_conversation_runtime_success = client.AssistantSaveConversationRuntimeSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `Record<string, any>` |  |
| `emails` | `string` | One or more recipient emails separated by commas (e.g. |
| `enabled` | `boolean` | Enable or disable sending of the conversation summary via email |
| `smtpInstanceName` | `string` | Name of the SMTP plugin instance to use for sending |
| `smtp_instance_name` | `string` | Legacy alias of `smtpInstanceName`. |

#### Example: Load

```ts
const assistant_save_conversation_runtime_success = await client.AssistantSaveConversationRuntimeSuccess().load({ assistant_id: 'assistant_id' })
```


### AssistantSettingsConfigurationSuccess

Create an instance: `const assistant_settings_configuration_success = client.AssistantSettingsConfigurationSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const assistant_settings_configuration_success = await client.AssistantSettingsConfigurationSuccess().load({ id: 'assistant_settings_configuration_success_id' })
```


### AssistantSettingsRuntimeUpdateSuccess

Create an instance: `const assistant_settings_runtime_update_success = client.AssistantSettingsRuntimeUpdateSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asrInitialDelayMs` | `number` | Value supplied for `asrInitialDelayMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `asrSilenceMs` | `number` | Value supplied for `asrSilenceMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `assistantApiKey` | `string` |  |
| `assistantId` | `string` |  |
| `callPermissions` | `Record<string, any>` | Value supplied for `callPermissions` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `configuration` | `Record<string, any>` |  |
| `dynamicTimeoutMs` | `number` | Value supplied for `dynamicTimeoutMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `filler` | `Record<string, any>` | Value supplied for `filler` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `maxResponseLength` | `number` | Value supplied for `maxResponseLength` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `reprompt` | `Record<string, any>` | Value supplied for `reprompt` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `service` | `string` |  |
| `truncateInitialAudio` | `boolean` | Value supplied for `truncateInitialAudio` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `ttsInterruptionInConversation` | `boolean` | Value supplied for `ttsInterruptionInConversation` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `vad` | `boolean` | Value supplied for `vad` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `vadMinVoiceMs` | `number` | Value supplied for `vadMinVoiceMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `vadThreshold` | `number` | Value supplied for `vadThreshold` in the `AssistantSettingsRuntimeUpdateRequest` request. |


### AssistantToolsRuntimeUpdateSuccess

Create an instance: `const assistant_tools_runtime_update_success = client.AssistantToolsRuntimeUpdateSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistantApiKey` | `string` |  |
| `assistantId` | `string` |  |
| `configuration` | `Record<string, any>` | Resulting tool configuration after the update. |
| `service` | `string` |  |


### AssistantTtsRuntimeUpdateSuccess

Create an instance: `const assistant_tts_runtime_update_success = client.AssistantTtsRuntimeUpdateSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiKey` | `string` | API key of the customer's TTS provider. |
| `assistantApiKey` | `string` |  |
| `assistantId` | `string` |  |
| `configuration` | `Record<string, any>` | Actual resulting TTS runtime configuration after merge and backend resolution. |
| `engineCode` | `string` | TTS engine/provider code. |
| `providerWalletId` | `number` | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `region` | `string` | Region/provider area requested by some engine customers, in particular Azure. |
| `runtimeBinding` | `Record<string, any>` |  |
| `service` | `string` |  |
| `sourceMode` | `string` | Runtime sourcing mode. |
| `voiceCode` | `string` | TTS voice code. |


### AssistantVoiceToVoiceRuntimeUpdateSuccess

Create an instance: `const assistant_voice_to_voice_runtime_update_success = client.AssistantVoiceToVoiceRuntimeUpdateSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiKey` | `string` | Customer key provider API. |
| `assistantApiKey` | `string` |  |
| `assistantId` | `string` |  |
| `baseUrl` | `string` | Base custom URL. |
| `configuration` | `Record<string, any>` |  |
| `engineCode` | `string` | Provider/engine voice LLM. |
| `modelCode` | `string` | LLM voice model code. |
| `prompt` | `string` | Main prompt of the audio-to-audio runtime. |
| `providerWalletId` | `number` | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `service` | `string` |  |
| `voiceCode` | `string` | Model item code. |


### AssociatedRuntimeToolListSuccess

Create an instance: `const associated_runtime_tool_list_success = client.AssociatedRuntimeToolListSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `message` | `string` |  |
| `meta` | `Record<string, any>` |  |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const associated_runtime_tool_list_success = await client.AssociatedRuntimeToolListSuccess().load({ assistant_id: 'assistant_id' })
```


### AudioToAudio

Create an instance: `const audio_to_audio = client.AudioToAudio()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `message` | `string` |  |
| `meta` | `Record<string, any>` | Collection metadata. |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const audio_to_audio = await client.AudioToAudio().load()
```


### AvailableRuntimeToolListSuccess

Create an instance: `const available_runtime_tool_list_success = client.AvailableRuntimeToolListSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `message` | `string` |  |
| `meta` | `Record<string, any>` |  |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const available_runtime_tool_list_success = await client.AvailableRuntimeToolListSuccess().load()
```


### FillerPhraseList

Create an instance: `const filler_phrase_list = client.FillerPhraseList()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associations` | `Record<string, any>` |  |
| `data` | `Record<string, any>` |  |
| `id` | `string` | Value supplied for `id` in the `FillerPhraseListCreateRequest` request. |
| `list` | `Record<string, any>` |  |
| `message` | `string` |  |
| `meta` | `Record<string, any>` |  |
| `name` | `string` | Value supplied for `name` in the `FillerPhraseListCreateRequest` request. |
| `phrases` | `any[]` | Value supplied for `phrases` in the `FillerPhraseListCreateRequest` request. |
| `requestId` | `string` |  |
| `success` | `boolean` |  |
| `toolListIds` | `any[]` |  |
| `waitingListIds` | `any[]` |  |

#### Example: Load

```ts
const filler_phrase_list = await client.FillerPhraseList().load({ id: 'filler_phrase_list_id' })
```

#### Example: Create

```ts
const filler_phrase_list = await client.FillerPhraseList().create({
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


### Health

Create an instance: `const health = client.Health()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataSource` | `string` |  |
| `service` | `string` |  |
| `status` | `string` |  |

#### Example: Load

```ts
const health = await client.Health().load()
```


### Knowledge

Create an instance: `const knowledge = client.Knowledge()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `defaultPostAction` | `string` | Defaults to `ask_if_needs_more` when omitted |
| `defaultResponse` | `string` | Default answer used when a trigger has no specific response. |
| `id` | `string` |  |
| `knowledge` | `Record<string, any>` | A knowledge item: a set of recognised requests with their answers, folded into the prompt of every assistant it is associated with. |
| `message` | `string` |  |
| `meta` | `Record<string, any>` |  |
| `requestId` | `string` |  |
| `rules` | `string` | Optional constraints applied to the whole knowledge item. |
| `success` | `boolean` |  |
| `title` | `string` | Human-readable title of the new knowledge item. |
| `triggers` | `any[]` | Initial trigger list for the knowledge item. |

#### Example: Load

```ts
const knowledge = await client.Knowledge().load({ id: 1 })
```

#### Example: Create

```ts
const knowledge = await client.Knowledge().create({
  data: {},
  defaultResponse: 'example_defaultResponse',
  knowledge: {},
  message: 'example_message',
  requestId: 'example_requestId',
  success: true,
  title: 'example_title',
})
```


### Llm

Create an instance: `const llm = client.Llm()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `message` | `string` |  |
| `meta` | `Record<string, any>` | Collection metadata. |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const llm = await client.Llm().load()
```


### LlmModelListSuccess

Create an instance: `const llm_model_list_success = client.LlmModelListSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `message` | `string` |  |
| `meta` | `Record<string, any>` | Collection metadata. |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const llm_model_list_success = await client.LlmModelListSuccess().load({ assistant_id: 'assistant_id' })
```


### OutboundCall

Create an instance: `const outbound_call = client.OutboundCall()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `AddPrompt` | `string` | Legacy alias of `addPrompt`. |
| `addPrompt` | `string` | Optional additional prompt to customize assistant behavior. |
| `apiKey_assistente` | `string` | Legacy alias of `assistantApiKey`. |
| `assistantApiKey` | `string` | API key of the AI assistant that will talk to the callee. |
| `callId` | `string` | Technical call identifier, if already available when the response is returned. |
| `callResultUrl` | `string` | Optional HTTPS URL that AI4Call calls with the outcome notification. |
| `callbackConfigured` | `boolean` | Indicates whether the callback URL for the call outcome was configured. |
| `callerId` | `string` | Caller number displayed in E.164 format. |
| `dst` | `string` | Recipient number in E.164 format, example +3902XXXXXXXX. |
| `internalId` | `string` | UUID generated by AI4Call to correlate the outbound request, callback and final dial-status lookup. |
| `status` | `string` | Initial status of the outbound request. |
| `url_esito_chiamata` | `any` | Legacy alias of `callResultUrl`. |

#### Example: Create

```ts
const outbound_call = await client.OutboundCall().create({
  callbackConfigured: true,
  callerId: 'example_callerId',
  dst: 'example_dst',
  internalId: 'example_internalId',
  status: 'example_status',
})
```


### OutboundCallAcceptedSuccess

Create an instance: `const outbound_call_accepted_success = client.OutboundCallAcceptedSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `AddPrompt` | `string` | Legacy alias of `addPrompt`. |
| `addPrompt` | `string` | Optional additional prompt to customize assistant behavior. |
| `apiKey_assistente` | `string` | Legacy alias of `assistantApiKey`. |
| `assistantApiKey` | `string` | API key of the AI assistant that will talk to the callee. |
| `callId` | `string` | Technical call identifier, if already available when the response is returned. |
| `callResultUrl` | `string` | Optional HTTPS URL that AI4Call calls with the outcome notification. |
| `callbackConfigured` | `boolean` | Indicates whether the callback URL for the call outcome was configured. |
| `callerId` | `string` | Calling number displayed in the format required by the PBX, E.164 +3902XXXXXXXX or local 02XXXXXXXX. |
| `dst` | `string` | Recipient number in the format required by the PBX, E.164 +3902XXXXXXXX or local 02XXXXXXXX. |
| `internalId` | `string` | UUID generated by AI4Call to correlate the outbound request, callback and final dial-status lookup. |
| `ipPbx` | `string` | Public IP of the PBX, must be one of the authorized public IPs. |
| `ip_pbx` | `string` | Legacy alias of `ipPbx`. |
| `method_uac` | `boolean` | Selects the registered UAC mode. |
| `sipPort` | `string` | SIP port of the PBX, standard 5060. |
| `sip_port` | `string` | Legacy alias of `sipPort`. |
| `status` | `string` | Initial status of the outbound request. |
| `url_esito_chiamata` | `any` | Legacy alias of `callResultUrl`. |

#### Example: Create

```ts
const outbound_call_accepted_success = await client.OutboundCallAcceptedSuccess().create({
  callbackConfigured: true,
  callerId: 'example_callerId',
  dst: 'example_dst',
  internalId: 'example_internalId',
  status: 'example_status',
})
```


### OutboundDialStatusPayload

Create an instance: `const outbound_dial_status_payload = client.OutboundDialStatusPayload()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `billSec` | `number` | Billed duration in seconds. |
| `dialStatus` | `string` | Final dial result persisted in the outbound CDR. |
| `trafficCost` | `string` | Outbound traffic cost in EUR, expressed with six decimal places. |

#### Example: Load

```ts
const outbound_dial_status_payload = await client.OutboundDialStatusPayload().load({ uuid: 'uuid' })
```


### PortalLoginSuccess

Create an instance: `const portal_login_success = client.PortalLoginSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client` | `Record<string, any>` | Customer profile returned after successful portal credential verification. |
| `email` | `string` | Portal customer email. |
| `portalApiKey` | `string` | Static portal API key associated with the customer account. |

#### Example: Create

```ts
const portal_login_success = await client.PortalLoginSuccess().create({
  client: {},
  email: 'example_email',
  portalApiKey: 'example_portalApiKey',
})
```


### PreCall

Create an instance: `const pre_call = client.PreCall()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `Record<string, any>` |  |

#### Example: Load

```ts
const pre_call = await client.PreCall().load({ assistant_id: 'assistant_id' })
```


### ProviderWallet

Create an instance: `const provider_wallet = client.ProviderWallet()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `Record<string, any>` | Values of the fields declared by the catalog entry |
| `credential` | `Record<string, any>` | A credential saved by the customer. |
| `data` | `Record<string, any>` |  |
| `engine` | `string` | Engine code selected from the provider-wallet catalog. |
| `id` | `string` |  |
| `isActive` | `boolean` | Whether the saved credential can be used by assistant runtimes. |
| `message` | `string` |  |
| `meta` | `Record<string, any>` |  |
| `name` | `string` | Customer-defined name for the saved credential. |
| `provider` | `string` | Provider code selected from the provider-wallet catalog. |
| `requestId` | `string` |  |
| `serviceType` | `string` | Service category selected from the provider-wallet catalog. |
| `success` | `boolean` |  |

#### Example: Load

```ts
const provider_wallet = await client.ProviderWallet().load({ id: 1 })
```

#### Example: Create

```ts
const provider_wallet = await client.ProviderWallet().create({
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


### ProviderWalletAssociationsSuccess

Create an instance: `const provider_wallet_associations_success = client.ProviderWalletAssociationsSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `message` | `string` |  |
| `meta` | `Record<string, any>` |  |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const provider_wallet_associations_success = await client.ProviderWalletAssociationsSuccess().load({ assistant_id: 'assistant_id' })
```


### ProviderWalletCatalogSuccess

Create an instance: `const provider_wallet_catalog_success = client.ProviderWalletCatalogSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `message` | `string` |  |
| `meta` | `Record<string, any>` |  |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const provider_wallet_catalog_success = await client.ProviderWalletCatalogSuccess().load()
```


### PublicRagSearchSuccess

Create an instance: `const public_rag_search_success = client.PublicRagSearchSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` | Number of chunks returned by the search, up to the service limit of 4. |
| `query` | `string` | Normalized query text used for the search. |
| `rag_id` | `string` | Public RAG identifier supplied in the request and returned unchanged on success. |
| `results` | `any[]` | Chunks returned by the vector search. |

#### Example: Create

```ts
const public_rag_search_success = await client.PublicRagSearchSuccess().create({
  count: 1,
  query: 'example_query',
  rag_id: 'example_rag_id',
  results: [],
})
```


### RagCollectionDeleteSuccess

Create an instance: `const rag_collection_delete_success = client.RagCollectionDeleteSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `description` | `string` | Value supplied for `description` in the `RagCollectionCreateRequest` request. |
| `maxChunkSize` | `number` | Value supplied for `maxChunkSize` in the `RagCollectionCreateRequest` request. |
| `maxChunksPerFile` | `number` | Value supplied for `maxChunksPerFile` in the `RagCollectionCreateRequest` request. |
| `message` | `string` |  |
| `meta` | `Record<string, any>` | Collection metadata. |
| `name` | `string` | Value supplied for `name` in the `RagCollectionCreateRequest` request. |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const rag_collection_delete_success = await client.RagCollectionDeleteSuccess().load()
```

#### Example: Create

```ts
const rag_collection_delete_success = await client.RagCollectionDeleteSuccess().create({
  data: {},
  message: 'example_message',
  meta: {},
  name: 'example_name',
  requestId: 'example_requestId',
  success: true,
})
```


### RagCollectionDocumentDeleteSuccess

Create an instance: `const rag_collection_document_delete_success = client.RagCollectionDocumentDeleteSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### RagCollectionDocumentListSuccess

Create an instance: `const rag_collection_document_list_success = client.RagCollectionDocumentListSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `message` | `string` |  |
| `meta` | `Record<string, any>` | Collection metadata. |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const rag_collection_document_list_success = await client.RagCollectionDocumentListSuccess().load({ collection_id: 'collection_id' })
```


### RagCollectionDocumentTokenEstimateSuccess

Create an instance: `const rag_collection_document_token_estimate_success = client.RagCollectionDocumentTokenEstimateSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `estimatedCost` | `number` |  |
| `fileCount` | `number` |  |
| `fileDetails` | `any[]` |  |
| `processingTime` | `number` |  |
| `raw` | `Record<string, any>` |  |
| `totalTokens` | `number` |  |

#### Example: Create

```ts
const rag_collection_document_token_estimate_success = await client.RagCollectionDocumentTokenEstimateSuccess().create({
  estimatedCost: 1,
  fileCount: 1,
  fileDetails: [],
  processingTime: 1,
  raw: {},
  totalTokens: 1,
})
```


### RagCollectionDocumentUploadStatusSuccess

Create an instance: `const rag_collection_document_upload_status_success = client.RagCollectionDocumentUploadStatusSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `currentFile` | `string` |  |
| `errors` | `any[]` |  |
| `processedFiles` | `number` |  |
| `progress` | `number` |  |
| `raw` | `Record<string, any>` |  |
| `results` | `any[]` |  |
| `status` | `string` |  |
| `totalCost` | `number` |  |
| `totalFiles` | `number` |  |
| `totalTokens` | `number` |  |
| `uploadId` | `string` |  |

#### Example: Load

```ts
const rag_collection_document_upload_status_success = await client.RagCollectionDocumentUploadStatusSuccess().load({ upload_id: 'upload_id' })
```


### RagCollectionDocumentUploadSuccess

Create an instance: `const rag_collection_document_upload_success = client.RagCollectionDocumentUploadSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` | Result returned after starting a RAG document upload. |
| `message` | `string` |  |
| `meta` | `Record<string, any>` | Collection metadata. |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Create

```ts
const rag_collection_document_upload_success = await client.RagCollectionDocumentUploadSuccess().create({
  collection_id: 'example_collection_id',
  data: {},
  message: 'example_message',
  meta: {},
  requestId: 'example_requestId',
  success: true,
})
```


### RuntimeBinding

Create an instance: `const runtime_binding = client.RuntimeBinding()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistantApiKey` | `string` |  |
| `assistantId` | `string` |  |
| `runtimeBindings` | `Record<string, any>` |  |

#### Example: Load

```ts
const runtime_binding = await client.RuntimeBinding().load({ assistant_id: 'assistant_id' })
```


### Tts

Create an instance: `const tts = client.Tts()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `message` | `string` |  |
| `meta` | `Record<string, any>` | Collection metadata. |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const tts = await client.Tts().load()
```


### TtsVoiceListSuccess

Create an instance: `const tts_voice_list_success = client.TtsVoiceListSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `message` | `string` |  |
| `meta` | `Record<string, any>` | Collection metadata. |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const tts_voice_list_success = await client.TtsVoiceListSuccess().load({ assistant_id: 'assistant_id' })
```


### Voice

Create an instance: `const voice = client.Voice()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `message` | `string` |  |
| `meta` | `Record<string, any>` | Collection metadata. |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const voice = await client.Voice().load({ model_code: 'model_code' })
```


### VoiceLlm

Create an instance: `const voice_llm = client.VoiceLlm()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `message` | `string` |  |
| `meta` | `Record<string, any>` | Collection metadata. |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const voice_llm = await client.VoiceLlm().load()
```


### VoiceLlmModelListSuccess

Create an instance: `const voice_llm_model_list_success = client.VoiceLlmModelListSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `message` | `string` |  |
| `meta` | `Record<string, any>` | Collection metadata. |
| `requestId` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const voice_llm_model_list_success = await client.VoiceLlmModelListSuccess().load({ provider: 'provider' })
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

### Module structure

```
ai4call/
├── src/
│   ├── Ai4callSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { Ai4callSDK } from '@voxgig-sdk/ai4call-sdk'
```

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
