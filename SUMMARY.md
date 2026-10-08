# AI4Call Client API

> Public OpenAPI contract for the AI4Call client-facing APIs.
>
> The primary service at `https://client-api.ai4call.com` covers authenticated account
> management, assistants and their runtime configuration, provider wallet, catalog resources,
> knowledge, RAG document management, tools and account analytics.
>
> Current Client API authentication flow:
> 1. `POST /api/v1/auth/portal/login` validates `email` and `portalApiKey`. It does not
>  issue an access token or create a server-side session.
> 2. Business calls accept `Authorization: Bearer &lt;portalApiKey&gt;` or the legacy pair
>  `x-client-email` and `x-portal-api-key`.
> 3. Operations on a single assistant use `assistantId`; legacy `assistantApiKey` path values
>  remain accepted during the v1 compatibility period.
>
> This document also contains operations hosted by dedicated services. Public RAG operations
> use their own Bearer authentication and outbound-call operations use their own API-key header;
> each such operation declares its dedicated server and security scheme.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 73 entities and 141 HTTP routes. There are 4 SDK targets.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### AccountAllowedIpsSuccess

Results: IP white list of the account; Updated IP white list.

SDK operations: `load`, `update`.

Key fields to recognise:

- `addIps`: Value supplied for `addIps` in the `AccountAllowedIpsUpdateRequest` request.
- `allowedIps`: Value supplied for `allowedIps` in the `AccountAllowedIpsUpdateRequest` request.
- `deleteIps`: Value supplied for `deleteIps` in the `AccountAllowedIpsUpdateRequest` request.
- `message`: Human-readable error summary.
- `requestId`: Request identifier used to correlate the error with server logs.

### AccountAvailablePluginsSuccess

Results: List of purchasable plugins.

SDK operations: `load`.

Key fields to recognise:

- `message`: Human-readable error summary.
- `requestId`: Request identifier used to correlate the error with server logs.
- `success`: Always false for an error response.

### AccountCallLimitsSuccess

Results: Account calling limits; Updated call limits.

SDK operations: `load`, `update`.

Key fields to recognise:

- `assistants`: Value supplied for `assistants` in the `AccountCallLimitsUpdateRequest` request.
- `message`: Human-readable error summary.
- `requestId`: Request identifier used to correlate the error with server logs.
- `success`: Always false for an error response.

### AccountNumberRoutingSuccess

Results: Routing account numbers; Updated number routing.

SDK operations: `load`, `update`.

Key fields to recognise:

- `demoNumbers`: Value supplied for `demoNumbers` in the `AccountNumberRoutingUpdateRequest` request.
- `message`: Human-readable error summary.
- `purchasedNumbers`: Value supplied for `purchasedNumbers` in the `AccountNumberRoutingUpdateRequest` request.
- `requestId`: Request identifier used to correlate the error with server logs.
- `success`: Always false for an error response.

### AccountPluginConfigurationSuccess

Results: Plugin configuration returned; Plugin configuration; Updated plugin configuration.

SDK operations: `load`, `update`.

Key fields to recognise:

- `configuration`: Configuration contract and current values for one plugin instance.
- `instanceName`: Value supplied for `instanceName` in the `AccountPluginConfigurationUpdateRequest` request.
- `instance_name`: Legacy alias of `instanceName`.
- `pluginName`: Value supplied for `pluginName` in the `AccountPluginConfigurationUpdateRequest` request.
- `plugin_name`: Legacy alias of `pluginName`.

### AccountPluginInstanceSuccess

Results: Plugin instance created successfully; List of active plugin instances purchased; Cancelled plugin instance; Updated plugin instance.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `configuration`: Result of a plugin purchase, including charged prices and created instance data.
- `instanceName`: Value supplied for `instanceName` in the `AccountPluginPurchaseRequest` request.
- `instance_name`: Legacy alias of `instanceName`.
- `message`: Human-readable error summary.
- `newInstanceName`: Value supplied for `newInstanceName` in the `AccountPluginInstanceByIdUpdateRequest` request.

### AccountPluginPurchaseSuccess

Results: Plugin purchased successfully.

SDK operations: `update`.

Key fields to recognise:

- `configuration`: Result of a plugin purchase, including charged prices and created instance data.
- `instanceName`: Value supplied for `instanceName` in the `AccountPluginPurchaseRequest` request.
- `instance_name`: Legacy alias of `instanceName`.
- `pluginName`: Value supplied for `pluginName` in the `AccountPluginPurchaseRequest` request.
- `plugin_name`: Legacy alias of `pluginName`.

### AnalyticsCallsOutboundSuccess

Results: Outbound call history.

SDK operations: `load`.

Key fields to recognise:

- `message`: Human-readable error summary.
- `requestId`: Request identifier used to correlate the error with server logs.
- `success`: Always false for an error response.

### AnalyticsCallsSuccess

Results: Inbound call history.

SDK operations: `load`.

Key fields to recognise:

- `message`: Human-readable error summary.
- `requestId`: Request identifier used to correlate the error with server logs.
- `success`: Always false for an error response.

### AnalyticsPostCallSuccess

Results: MCP Post-Call invocation history.

SDK operations: `load`.

Key fields to recognise:

- `message`: Human-readable error summary.
- `requestId`: Request identifier used to correlate the error with server logs.
- `success`: Always false for an error response.

### AnalyticsPreCallSuccess

Results: MCP Pre-Call invocation history.

SDK operations: `load`.

Key fields to recognise:

- `message`: Human-readable error summary.
- `requestId`: Request identifier used to correlate the error with server logs.
- `success`: Always false for an error response.

### AnalyticsRagSearchSuccess

Results: Billed RAG searches history.

SDK operations: `load`.

Key fields to recognise:

- `message`: Human-readable error summary.
- `requestId`: Request identifier used to correlate the error with server logs.
- `success`: Always false for an error response.

### AnalyticsRagSuccess

Results: RAG consumption history.

SDK operations: `load`.

Key fields to recognise:

- `message`: Human-readable error summary.
- `requestId`: Request identifier used to correlate the error with server logs.
- `success`: Always false for an error response.

### AnalyticsRechargesSuccess

Results: Refill history.

SDK operations: `load`.

Key fields to recognise:

- `message`: Human-readable error summary.
- `requestId`: Request identifier used to correlate the error with server logs.
- `success`: Always false for an error response.

### AnalyticsSmsSuccess

Results: History of SMS sent.

SDK operations: `load`.

Key fields to recognise:

- `message`: Human-readable error summary.
- `requestId`: Request identifier used to correlate the error with server logs.
- `success`: Always false for an error response.

### AnalyticsToolResponsesSuccess

Results: Response history tool.

SDK operations: `load`.

Key fields to recognise:

- `message`: Human-readable error summary.
- `requestId`: Request identifier used to correlate the error with server logs.
- `success`: Always false for an error response.

### Asr

Results: ASR provider list.

SDK operations: `load`.

Key fields to recognise:

- `message`: Human-readable error summary.
- `meta`: Collection metadata. When cursor pagination is requested, it also reports the page size, total size and next cursor.
- `requestId`: Request identifier used to correlate the error with server logs.
- `success`: Always false for an error response.

### AsrModelListSuccess

Results: List of assistant ASR models.

SDK operations: `load`.

Key fields to recognise:

- `message`: Human-readable error summary.
- `meta`: Collection metadata. When cursor pagination is requested, it also reports the page size, total size and next cursor.
- `requestId`: Request identifier used to correlate the error with server logs.
- `success`: Always false for an error response.

### Assistant

Results: Assistant created; List of assistants; Assistant found; Assistant deleted; Updated assistant; Updated prompt configuration.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `assistant`: Assistant detail response, including the legacy assistant API key during the v1 compatibility period.
- `audioToAudio`: Initial audio-to-audio configuration, used when applicable to the selected mode.
- `data`: Response payload for assistant prompt configuration.
- `description`: Optional functional description of the assistant.
- `firstMessage`: First-message configuration of the assistant.

### AssistantAdvancedSettingsConfigurationSuccess

Results: Advanced assistant settings.

SDK operations: `load`.

### AssistantAdvancedSettingsRuntimeUpdateSuccess

Results: Advanced settings updated.

SDK operations: `update`.

Key fields to recognise:

- `freqPenalty`: Value supplied for `freqPenalty` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request.
- `maxTokens`: Value supplied for `maxTokens` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request.
- `presencePenalty`: Value supplied for `presencePenalty` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request.
- `stopSequences`: Value supplied for `stopSequences` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request.
- `temperature`: Value supplied for `temperature` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request.

### AssistantAsrRuntimeUpdateSuccess

Results: Updated ASR runtime configuration.

SDK operations: `update`.

Key fields to recognise:

- `apiKey`: API key of the customer&#39;s ASR provider.
- `configuration`: Actual resulting ASR runtime configuration after merge and backend resolution.
- `engineCode`: ASR engine/provider code.
- `providerWalletId`: Id of a credential saved in the customer&#39;s provider wallet, used instead of sending `apiKey` in clear text.
- `sourceMode`: Runtime sourcing mode.

### AssistantConversationWebhookRuntimeSuccess

Results: Recovered webhook configuration; Updated webhook configuration.

SDK operations: `load`, `update`.

Key fields to recognise:

- `authName`: Name of the applied authentication, `null` for an unauthenticated call
- `enabled`: Indicates whether sending to the webhook is enabled
- `url`: Configured destination endpoint

### AssistantDtmfConfigurationSuccess

Results: Assistant DTMF configuration.

SDK operations: `load`.

### AssistantDtmfRuntimeUpdateSuccess

Results: Updated DTMF runtime configuration.

SDK operations: `update`.

Key fields to recognise:

- `acceptTimeout`: Value supplied for `acceptTimeout` in the `AssistantDtmfRuntimeUpdateRequest` request.
- `enabled`: Enable or disable DTMF reception.
- `maxLength`: Value supplied for `maxLength` in the `AssistantDtmfRuntimeUpdateRequest` request.
- `minLength`: Value supplied for `minLength` in the `AssistantDtmfRuntimeUpdateRequest` request.
- `playEnabled`: Enable or disable DTMF sending during the call.

### AssistantHangupConfigurationSuccess

Results: Assistant hangup configuration.

SDK operations: `load`.

### AssistantHangupRuntimeUpdateSuccess

Results: Updated hangup runtime configuration.

SDK operations: `update`.

Key fields to recognise:

- `availableAgents`: Value supplied for `availableAgents` in the `AssistantHangupRuntimeUpdateRequest` request.
- `enableHangup`: Value supplied for `enableHangup` in the `AssistantHangupRuntimeUpdateRequest` request.
- `enableRedirect`: Value supplied for `enableRedirect` in the `AssistantHangupRuntimeUpdateRequest` request.
- `enableTransferAgent`: Value supplied for `enableTransferAgent` in the `AssistantHangupRuntimeUpdateRequest` request.
- `transferAgentNotificationText`: Value supplied for `transferAgentNotificationText` in the `AssistantHangupRuntimeUpdateRequest` request.

### AssistantHangupSchemaRuntimeSuccess

Results: Hangup pattern successfully recovered; Hangup diagram updated successfully.

SDK operations: `load`, `update`.

Key fields to recognise:

- `hangupUrl`: URL of the webhook called to the hangup
- `schema`: Fields of the body sent to the hangup URL

### AssistantKnowledgeSuccess

Results: Associated knowledge items; Associations updated.

SDK operations: `load`, `update`.

Key fields to recognise:

- `id`: Identifier of the knowledge item.

### AssistantLlmRuntimeUpdateSuccess

Results: Updated LLM runtime configuration.

SDK operations: `update`.

Key fields to recognise:

- `apiKey`: API key of the customer&#39;s LLM provider.
- `baseUrl`: Base custom URL of the LLM provider.
- `configuration`: Actual resulting LLM runtime configuration after merge and backend resolution.
- `engineCode`: LLM engine/provider code.
- `modelCode`: LLM model code.

### AssistantNumberRoutingCatalogSuccess

Results: Numbers with their routing state.

SDK operations: `load`.

### AssistantNumberRoutingRuntimeSuccess

Results: Updated routing.

SDK operations: `update`.

Key fields to recognise:

- `demoNumbers`: Demo numbers currently routed
- `purchasedNumbers`: Purchased numbers currently routed
- `userNumbers`: Own numbers currently routed

### AssistantPostcallMcpRuntimeSuccess

Results: Post-call configuration recovered; Updated post-call configuration.

SDK operations: `load`, `update`.

Key fields to recognise:

- `configuration`: General configuration of the post-call phase.
- `enabled`: Master switch of the phase. When `false` the configuration is kept but not executed at call time. Assistants configured before this flag existed default to `true`.
- `globalPrompt`: Global prompt used after the call to interpret the results of the tools.
- `modelConfig`: Model configuration used by the MCP phase. The API keys are not returned in clear text: `hasApiKey` is exposed in the responses.
- `tools`: Complete list of post-call tools to set up.

### AssistantPrecallMcpRuntimeSuccess

Results: Pre-call configuration recovered; Updated pre-call configuration.

SDK operations: `load`, `update`.

Key fields to recognise:

- `configuration`: General configuration of the pre-call phase.
- `earlyTerminationEnabled`: `true` whether the pre-call can end early based on the results of the tools.
- `enabled`: Master switch of the phase. When `false` the configuration is kept but not executed at call time. Assistants configured before this flag existed default to `true`.
- `globalPrompt`: Global prompt injected during the pre-call phase.
- `modelConfig`: Model configuration used by the MCP phase. The API keys are not returned in clear text: `hasApiKey` is exposed in the responses.

### AssistantPrecallValidationRuntimeSuccess

Results: Number verification configuration recovered; Updated number verification configuration.

SDK operations: `load`, `update`.

Key fields to recognise:

- `authPassword`: Basic auth password (null to remove it)
- `authToken`: Bearer token or API key (null to remove it)
- `authUsername`: Username for Basic authentication
- `configuration`: null if no configuration is yet present
- `headersJson`: Custom HTTP header (key-value)

### AssistantPromptSuccess

Results: Prompt configuration recovered.

SDK operations: `load`.

### AssistantRagConfigurationSuccess

Results: Assistant runtime RAG configuration.

SDK operations: `load`.

### AssistantRagRuntimeUpdateSuccess

Results: Updated RAG runtime configuration.

SDK operations: `update`.

Key fields to recognise:

- `configuration`: RAG configuration resulting after application merge.
- `enabled`: Enable or disable RAG for the assistant.
- `kbPrompt`: Assistant knowledge base instructions.
- `name`: Name of the RAG collection to associate.
- `returnedChunks`: Number of relevant fragments to return from the knowledge base.

### AssistantSaveConversationRuntimeSuccess

Results: Recovered conversation saving configuration; Updated conversation saving configuration.

SDK operations: `load`, `update`.

Key fields to recognise:

- `emails`: Recipient emails separated by commas
- `enabled`: Indicates whether email conversation saving is enabled
- `smtpInstanceName`: Name of the configured SMTP instance
- `smtp_instance_name`: Legacy alias of `smtpInstanceName`.

### AssistantSettingsConfigurationSuccess

Results: Assistant settings.

SDK operations: `load`.

### AssistantSettingsRuntimeUpdateSuccess

Results: Settings updated.

SDK operations: `update`.

Key fields to recognise:

- `asrInitialDelayMs`: Value supplied for `asrInitialDelayMs` in the `AssistantSettingsRuntimeUpdateRequest` request.
- `asrSilenceMs`: Value supplied for `asrSilenceMs` in the `AssistantSettingsRuntimeUpdateRequest` request.
- `callPermissions`: Value supplied for `callPermissions` in the `AssistantSettingsRuntimeUpdateRequest` request.
- `dynamicTimeoutMs`: Value supplied for `dynamicTimeoutMs` in the `AssistantSettingsRuntimeUpdateRequest` request.
- `filler`: Value supplied for `filler` in the `AssistantSettingsRuntimeUpdateRequest` request.

### AssistantToolsRuntimeUpdateSuccess

Results: Updated tool associations.

SDK operations: `update`.

Key fields to recognise:

- `configuration`: Resulting tool configuration after the update.

### AssistantTtsRuntimeUpdateSuccess

Results: Updated TTS runtime configuration.

SDK operations: `update`.

Key fields to recognise:

- `apiKey`: API key of the customer&#39;s TTS provider.
- `configuration`: Actual resulting TTS runtime configuration after merge and backend resolution.
- `engineCode`: TTS engine/provider code.
- `providerWalletId`: Id of a credential saved in the customer&#39;s provider wallet, used instead of sending `apiKey` in clear text.
- `region`: Region/provider area requested by some engine customers, in particular Azure.

### AssistantVoiceToVoiceRuntimeUpdateSuccess

Results: Updated audio-to-audio runtime.

SDK operations: `update`.

Key fields to recognise:

- `apiKey`: Customer key provider API.
- `baseUrl`: Base custom URL.
- `engineCode`: Provider/engine voice LLM.
- `modelCode`: LLM voice model code.
- `prompt`: Main prompt of the audio-to-audio runtime.

### AssociatedRuntimeToolListSuccess

Results: Unified list of plugin tools, custom MCP tools and custom tools associated with the assistant.

SDK operations: `load`.

Key fields to recognise:

- `message`: Human-readable error summary.
- `requestId`: Request identifier used to correlate the error with server logs.
- `success`: Always false for an error response.

### AudioToAudio

Results: LLM voice provider list.

SDK operations: `load`.

Key fields to recognise:

- `message`: Human-readable error summary.
- `meta`: Collection metadata. When cursor pagination is requested, it also reports the page size, total size and next cursor.
- `requestId`: Request identifier used to correlate the error with server logs.
- `success`: Always false for an error response.

### AvailableRuntimeToolListSuccess

Results: Unified list of plugin tools, custom MCP tools and custom tools without assistantApiKey as input.

SDK operations: `load`.

Key fields to recognise:

- `message`: Human-readable error summary.
- `requestId`: Request identifier used to correlate the error with server logs.
- `success`: Always false for an error response.

### FillerPhraseList

Results: Filler list created; Filler lists available; Filler list associations; Filler list found; Filler list removed; Saved filler list associations; Updated filler list.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `id`: Value supplied for `id` in the `FillerPhraseListCreateRequest` request.
- `message`: Human-readable error summary.
- `name`: Value supplied for `name` in the `FillerPhraseListCreateRequest` request.
- `phrases`: Value supplied for `phrases` in the `FillerPhraseListCreateRequest` request.
- `requestId`: Request identifier used to correlate the error with server logs.

### Health

Results: Active service.

SDK operations: `load`.

### Knowledge

Results: Knowledge item created; Knowledge items available to the customer; Knowledge item found; Knowledge item deleted; Knowledge item updated.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `defaultPostAction`: Behaviour after answering, when the trigger does not define its own
- `defaultResponse`: Answer used by the triggers that do not define their own
- `id`: Identifier of the knowledge item.
- `knowledge`: A knowledge item: a set of recognised requests with their answers, folded into the prompt of every assistant it is associated with.
- `message`: Human-readable error summary.

### Llm

Results: LLM provider list.

SDK operations: `load`.

Key fields to recognise:

- `message`: Human-readable error summary.
- `meta`: Collection metadata. When cursor pagination is requested, it also reports the page size, total size and next cursor.
- `requestId`: Request identifier used to correlate the error with server logs.
- `success`: Always false for an error response.

### LlmModelListSuccess

Results: Assistant LLM Model List.

SDK operations: `load`.

Key fields to recognise:

- `message`: Human-readable error summary.
- `meta`: Collection metadata. When cursor pagination is requested, it also reports the page size, total size and next cursor.
- `requestId`: Request identifier used to correlate the error with server logs.
- `success`: Always false for an error response.

### OutboundCall

Results: Call request accepted.

SDK operations: `create`.

Key fields to recognise:

- `AddPrompt`: Legacy alias of `addPrompt`.
- `addPrompt`: Optional additional prompt to customize assistant behavior.
- `apiKey_assistente`: Legacy alias of `assistantApiKey`.
- `assistantApiKey`: API key of the AI assistant that will talk to the callee.
- `callId`: Technical call identifier, if already available when the response is returned.

### OutboundCallAcceptedSuccess

Results: Call request accepted.

SDK operations: `create`.

Key fields to recognise:

- `AddPrompt`: Legacy alias of `addPrompt`.
- `addPrompt`: Optional additional prompt to customize assistant behavior.
- `apiKey_assistente`: Legacy alias of `assistantApiKey`.
- `assistantApiKey`: API key of the AI assistant that will talk to the callee.
- `callId`: Technical call identifier, if already available when the response is returned.

### OutboundDialStatusPayload

Results: Persisted outbound call status.

SDK operations: `load`.

Key fields to recognise:

- `billSec`: Billed duration in seconds.
- `dialStatus`: Final dial result persisted in the outbound CDR.
- `trafficCost`: Outbound traffic cost in EUR, expressed with six decimal places.

### PortalLoginSuccess

Results: Authenticated customer.

SDK operations: `create`.

Key fields to recognise:

- `client`: Customer profile returned after successful portal credential verification.
- `email`: Authenticated customer email.
- `portalApiKey`: Static portal API key associated with the customer account.

### PreCall

Results: Pre-call configuration.

SDK operations: `load`.

### ProviderWallet

Results: Credential saved; Saved credentials; Credential found; Credential deleted; Credential updated.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `config`: Values of the fields declared by the catalog entry
- `credential`: A credential saved by the customer. The configuration is never returned in clear text: `preview` carries the non-secret values plus the secrets truncated to their first characters.
- `engine`: Engine code of the saved credential.
- `id`: Id to send as `providerWalletId` on the assistant runtime endpoints
- `isActive`: An inactive credential is kept but is not applied to the runtimes

### ProviderWalletAssociationsSuccess

Results: Associations of the assistant.

SDK operations: `load`.

Key fields to recognise:

- `message`: Human-readable error summary.
- `requestId`: Request identifier used to correlate the error with server logs.
- `success`: Always false for an error response.

### ProviderWalletCatalogSuccess

Results: Catalog of supported providers.

SDK operations: `load`.

Key fields to recognise:

- `message`: Human-readable error summary.
- `requestId`: Request identifier used to correlate the error with server logs.
- `success`: Always false for an error response.

### PublicRagSearchSuccess

Results: RAG search results.

SDK operations: `create`.

Key fields to recognise:

- `count`: Number of chunks returned by the search, up to the service limit of 4.
- `query`: Normalized query text used for the search.
- `rag_id`: Public RAG identifier supplied in the request and returned unchanged on success.
- `results`: Chunks returned by the vector search.

### RagCollectionDeleteSuccess

Results: RAG collection created; Complete list of the customer&#39;s RAG collections, even those not associated with any assistant; RAG collection deleted.

SDK operations: `create`, `load`, `remove`.

Key fields to recognise:

- `data`: Result of deleting one customer RAG collection.
- `description`: Value supplied for `description` in the `RagCollectionCreateRequest` request.
- `maxChunkSize`: Value supplied for `maxChunkSize` in the `RagCollectionCreateRequest` request.
- `maxChunksPerFile`: Value supplied for `maxChunksPerFile` in the `RagCollectionCreateRequest` request.
- `message`: Human-readable error summary.

### RagCollectionDocumentDeleteSuccess

Results: File deleted from RAG collection.

SDK operations: `remove`.

### RagCollectionDocumentListSuccess

Results: Files present in the RAG collection.

SDK operations: `load`.

Key fields to recognise:

- `message`: Human-readable error summary.
- `meta`: Collection metadata. When cursor pagination is requested, it also reports the page size, total size and next cursor.
- `requestId`: Request identifier used to correlate the error with server logs.
- `success`: Always false for an error response.

### RagCollectionDocumentTokenEstimateSuccess

Results: Upload token estimate.

SDK operations: `create`.

### RagCollectionDocumentUploadStatusSuccess

Results: Current upload status.

SDK operations: `load`.

Key fields to recognise:

- `errors`: Structured application errors associated with the failed request.

### RagCollectionDocumentUploadSuccess

Results: Upload accepted and file metadata saved.

SDK operations: `create`.

Key fields to recognise:

- `data`: Result returned after starting a RAG document upload.
- `message`: Human-readable error summary.
- `meta`: Collection metadata. When cursor pagination is requested, it also reports the page size, total size and next cursor.
- `requestId`: Request identifier used to correlate the error with server logs.
- `success`: Always false for an error response.

### RuntimeBinding

Results: Assistant runtime binding.

SDK operations: `load`.

### Tts

Results: TTS provider list.

SDK operations: `load`.

Key fields to recognise:

- `message`: Human-readable error summary.
- `meta`: Collection metadata. When cursor pagination is requested, it also reports the page size, total size and next cursor.
- `requestId`: Request identifier used to correlate the error with server logs.
- `success`: Always false for an error response.

### TtsVoiceListSuccess

Results: Assistant TTS voice list.

SDK operations: `load`.

Key fields to recognise:

- `message`: Human-readable error summary.
- `meta`: Collection metadata. When cursor pagination is requested, it also reports the page size, total size and next cursor.
- `requestId`: Request identifier used to correlate the error with server logs.
- `success`: Always false for an error response.

### Voice

Results: List of assistant voice LLM entries; List of voice LLM entries.

SDK operations: `load`.

Key fields to recognise:

- `message`: Human-readable error summary.
- `meta`: Collection metadata. When cursor pagination is requested, it also reports the page size, total size and next cursor.
- `requestId`: Request identifier used to correlate the error with server logs.
- `success`: Always false for an error response.

### VoiceLlm

Results: LLM voice provider list.

SDK operations: `load`.

Key fields to recognise:

- `message`: Human-readable error summary.
- `meta`: Collection metadata. When cursor pagination is requested, it also reports the page size, total size and next cursor.
- `requestId`: Request identifier used to correlate the error with server logs.
- `success`: Always false for an error response.

### VoiceLlmModelListSuccess

Results: LLM voice model list; List of assistant voice LLM models.

SDK operations: `load`.

Key fields to recognise:

- `message`: Human-readable error summary.
- `meta`: Collection metadata. When cursor pagination is requested, it also reports the page size, total size and next cursor.
- `requestId`: Request identifier used to correlate the error with server logs.
- `success`: Always false for an error response.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| AccountAllowedIpsSuccess | `load` | `GET /api/v1/account/allowed-ips` | Required |
| AccountAllowedIpsSuccess | `update` | `PATCH /api/v1/account/allowed-ips` | Required |
| AccountAvailablePluginsSuccess | `load` | `GET /api/v1/account/plugins/available` | Required |
| AccountCallLimitsSuccess | `load` | `GET /api/v1/account/call-limits` | Required |
| AccountCallLimitsSuccess | `update` | `PATCH /api/v1/account/call-limits` | Required |
| AccountNumberRoutingSuccess | `load` | `GET /api/v1/account/number-routing` | Required |
| AccountNumberRoutingSuccess | `update` | `PATCH /api/v1/account/number-routing` | Required |
| AccountPluginConfigurationSuccess | `load` | `GET /api/v1/account/plugins/configuration` | Required |
| AccountPluginConfigurationSuccess | `load` | `GET /api/v1/account/plugins/instances/{instanceId}/configuration` | Required |
| AccountPluginConfigurationSuccess | `update` | `PATCH /api/v1/account/plugins/instances/{instanceId}/configuration` | Required |
| AccountPluginConfigurationSuccess | `update` | `PATCH /api/v1/account/plugins/configuration` | Required |
| AccountPluginInstanceSuccess | `create` | `POST /api/v1/account/plugins/instances` | Required |
| AccountPluginInstanceSuccess | `load` | `GET /api/v1/account/plugins/instances` | Required |
| AccountPluginInstanceSuccess | `remove` | `DELETE /api/v1/account/plugins/instances/{instanceId}` | Required |
| AccountPluginInstanceSuccess | `update` | `PATCH /api/v1/account/plugins/instances/{instanceId}` | Required |
| AccountPluginInstanceSuccess | `update` | `PATCH /api/v1/account/plugins/instances` | Required |
| AccountPluginPurchaseSuccess | `update` | `PATCH /api/v1/account/plugins/purchase` | Required |
| AnalyticsCallsOutboundSuccess | `load` | `GET /api/v1/account/analytics/calls-outbound` | Required |
| AnalyticsCallsSuccess | `load` | `GET /api/v1/account/analytics/calls` | Required |
| AnalyticsPostCallSuccess | `load` | `GET /api/v1/account/analytics/post-call` | Required |
| AnalyticsPreCallSuccess | `load` | `GET /api/v1/account/analytics/pre-call` | Required |
| AnalyticsRagSearchSuccess | `load` | `GET /api/v1/account/analytics/rag-searches` | Required |
| AnalyticsRagSuccess | `load` | `GET /api/v1/account/analytics/rag` | Required |
| AnalyticsRechargesSuccess | `load` | `GET /api/v1/account/analytics/recharges` | Required |
| AnalyticsSmsSuccess | `load` | `GET /api/v1/account/analytics/sms` | Required |
| AnalyticsToolResponsesSuccess | `load` | `GET /api/v1/account/analytics/tool-responses` | Required |
| Asr | `load` | `GET /api/v1/catalog/providers/asr` | Required |
| AsrModelListSuccess | `load` | `GET /api/v1/catalog/assistants/{assistantId}/asr/models` | Required |
| Assistant | `create` | `POST /api/v1/assistants` | Required |
| Assistant | `load` | `GET /api/v1/assistants` | Required |
| Assistant | `load` | `GET /api/v1/assistants/{assistantId}` | Required |
| Assistant | `remove` | `DELETE /api/v1/assistants/{assistantId}` | Required |
| Assistant | `update` | `PATCH /api/v1/assistants/{assistantId}` | Required |
| Assistant | `update` | `PATCH /api/v1/assistants/{assistantId}/prompt` | Required |
| AssistantAdvancedSettingsConfigurationSuccess | `load` | `GET /api/v1/catalog/assistants/{assistantId}/advanced-settings` | Required |
| AssistantAdvancedSettingsRuntimeUpdateSuccess | `update` | `PATCH /api/v1/assistants/{assistantId}/runtime/advanced-settings` | Required |
| AssistantAsrRuntimeUpdateSuccess | `update` | `PATCH /api/v1/assistants/{assistantId}/runtime/asr` | Required |
| AssistantConversationWebhookRuntimeSuccess | `load` | `GET /api/v1/assistants/{assistantId}/runtime/hangup/conversation-webhook` | Required |
| AssistantConversationWebhookRuntimeSuccess | `update` | `PATCH /api/v1/assistants/{assistantId}/runtime/hangup/conversation-webhook` | Required |
| AssistantDtmfConfigurationSuccess | `load` | `GET /api/v1/catalog/assistants/{assistantId}/dtmf` | Required |
| AssistantDtmfRuntimeUpdateSuccess | `update` | `PATCH /api/v1/assistants/{assistantId}/runtime/dtmf` | Required |
| AssistantHangupConfigurationSuccess | `load` | `GET /api/v1/catalog/assistants/{assistantId}/hangup` | Required |
| AssistantHangupRuntimeUpdateSuccess | `update` | `PATCH /api/v1/assistants/{assistantId}/runtime/hangup` | Required |
| AssistantHangupSchemaRuntimeSuccess | `load` | `GET /api/v1/assistants/{assistantId}/runtime/hangup/schema` | Required |
| AssistantHangupSchemaRuntimeSuccess | `update` | `PATCH /api/v1/assistants/{assistantId}/runtime/hangup/schema` | Required |
| AssistantKnowledgeSuccess | `load` | `GET /api/v1/assistants/{assistantId}/knowledge` | Required |
| AssistantKnowledgeSuccess | `load` | `GET /api/v1/catalog/assistants/{assistantId}/knowledge` | Required |
| AssistantKnowledgeSuccess | `update` | `PUT /api/v1/assistants/{assistantId}/knowledge` | Required |
| AssistantKnowledgeSuccess | `update` | `PUT /api/v1/catalog/assistants/{assistantId}/knowledge` | Required |
| AssistantLlmRuntimeUpdateSuccess | `update` | `PATCH /api/v1/assistants/{assistantId}/runtime/llm` | Required |
| AssistantNumberRoutingCatalogSuccess | `load` | `GET /api/v1/catalog/assistants/{assistantId}/number-routing` | Required |
| AssistantNumberRoutingRuntimeSuccess | `update` | `PATCH /api/v1/assistants/{assistantId}/runtime/number-routing` | Required |
| AssistantPostcallMcpRuntimeSuccess | `load` | `GET /api/v1/assistants/{assistantId}/runtime/postcall/mcp-config` | Required |
| AssistantPostcallMcpRuntimeSuccess | `update` | `PATCH /api/v1/assistants/{assistantId}/runtime/postcall/mcp-config` | Required |
| AssistantPrecallMcpRuntimeSuccess | `load` | `GET /api/v1/assistants/{assistantId}/runtime/precall/mcp-config` | Required |
| AssistantPrecallMcpRuntimeSuccess | `update` | `PATCH /api/v1/assistants/{assistantId}/runtime/precall/mcp-config` | Required |
| AssistantPrecallValidationRuntimeSuccess | `load` | `GET /api/v1/assistants/{assistantId}/runtime/precall/number-validation` | Required |
| AssistantPrecallValidationRuntimeSuccess | `update` | `PATCH /api/v1/assistants/{assistantId}/runtime/precall/number-validation` | Required |
| AssistantPromptSuccess | `load` | `GET /api/v1/assistants/{assistantId}/prompt` | Required |
| AssistantRagConfigurationSuccess | `load` | `GET /api/v1/assistants/{assistantId}/rag/collections` | Required |
| AssistantRagConfigurationSuccess | `load` | `GET /api/v1/catalog/assistants/{assistantId}/rag/collections` | Required |
| AssistantRagRuntimeUpdateSuccess | `update` | `PATCH /api/v1/assistants/{assistantId}/runtime/rag` | Required |
| AssistantSaveConversationRuntimeSuccess | `load` | `GET /api/v1/assistants/{assistantId}/runtime/hangup/save-conversation` | Required |
| AssistantSaveConversationRuntimeSuccess | `update` | `PATCH /api/v1/assistants/{assistantId}/runtime/hangup/save-conversation` | Required |
| AssistantSettingsConfigurationSuccess | `load` | `GET /api/v1/catalog/assistants/{assistantId}/settings` | Required |
| AssistantSettingsRuntimeUpdateSuccess | `update` | `PATCH /api/v1/assistants/{assistantId}/runtime/settings` | Required |
| AssistantToolsRuntimeUpdateSuccess | `update` | `PATCH /api/v1/assistants/{assistantId}/runtime/tools` | Required |
| AssistantTtsRuntimeUpdateSuccess | `update` | `PATCH /api/v1/assistants/{assistantId}/runtime/tts` | Required |
| AssistantVoiceToVoiceRuntimeUpdateSuccess | `update` | `PATCH /api/v1/assistants/{assistantId}/runtime/audio-to-audio` | Required |
| AssistantVoiceToVoiceRuntimeUpdateSuccess | `update` | `PATCH /api/v1/assistants/{assistantId}/runtime/voice-to-voice` | Required |
| AssociatedRuntimeToolListSuccess | `load` | `GET /api/v1/catalog/assistants/{assistantId}/tools` | Required |
| AudioToAudio | `load` | `GET /api/v1/catalog/providers/audio-to-audio` | Required |
| AvailableRuntimeToolListSuccess | `load` | `GET /api/v1/catalog/tools` | Required |
| FillerPhraseList | `create` | `POST /api/v1/catalog/filler-phrase-lists` | Required |
| FillerPhraseList | `create` | `POST /api/v1/filler-phrase-lists` | Required |
| FillerPhraseList | `load` | `GET /api/v1/catalog/filler-phrase-lists` | Required |
| FillerPhraseList | `load` | `GET /api/v1/filler-phrase-lists` | Required |
| FillerPhraseList | `load` | `GET /api/v1/assistants/{assistantId}/filler-phrase-lists` | Required |
| FillerPhraseList | `load` | `GET /api/v1/catalog/assistants/{assistantId}/filler-phrase-lists` | Required |
| FillerPhraseList | `load` | `GET /api/v1/catalog/filler-phrase-lists/{listId}` | Required |
| FillerPhraseList | `load` | `GET /api/v1/filler-phrase-lists/{listId}` | Required |
| FillerPhraseList | `remove` | `DELETE /api/v1/catalog/filler-phrase-lists/{listId}` | Required |
| FillerPhraseList | `remove` | `DELETE /api/v1/filler-phrase-lists/{listId}` | Required |
| FillerPhraseList | `update` | `PUT /api/v1/assistants/{assistantId}/filler-phrase-lists` | Required |
| FillerPhraseList | `update` | `PUT /api/v1/catalog/assistants/{assistantId}/filler-phrase-lists` | Required |
| FillerPhraseList | `update` | `PUT /api/v1/catalog/filler-phrase-lists/{listId}` | Required |
| FillerPhraseList | `update` | `PUT /api/v1/filler-phrase-lists/{listId}` | Required |
| Health | `load` | `GET /health` | Not required |
| Knowledge | `create` | `POST /api/v1/catalog/knowledge` | Required |
| Knowledge | `create` | `POST /api/v1/knowledge` | Required |
| Knowledge | `load` | `GET /api/v1/catalog/knowledge` | Required |
| Knowledge | `load` | `GET /api/v1/knowledge` | Required |
| Knowledge | `load` | `GET /api/v1/catalog/knowledge/{knowledgeId}` | Required |
| Knowledge | `load` | `GET /api/v1/knowledge/{knowledgeId}` | Required |
| Knowledge | `remove` | `DELETE /api/v1/catalog/knowledge/{knowledgeId}` | Required |
| Knowledge | `remove` | `DELETE /api/v1/knowledge/{knowledgeId}` | Required |
| Knowledge | `update` | `PATCH /api/v1/catalog/knowledge/{knowledgeId}` | Required |
| Knowledge | `update` | `PATCH /api/v1/knowledge/{knowledgeId}` | Required |
| Llm | `load` | `GET /api/v1/catalog/providers/llm` | Required |
| LlmModelListSuccess | `load` | `GET /api/v1/catalog/assistants/{assistantId}/llm/models` | Required |
| OutboundCall | `create` | `POST /webhook/outbound_call` | Required |
| OutboundCallAcceptedSuccess | `create` | `POST /webhook/outbound_call_pbx` | Required |
| OutboundDialStatusPayload | `load` | `GET /getDialstatus/{uuid}` | Required |
| PortalLoginSuccess | `create` | `POST /api/v1/auth/portal/login` | Not required |
| PreCall | `load` | `GET /api/v1/catalog/assistants/{assistantId}/pre-call` | Required |
| ProviderWallet | `create` | `POST /api/v1/account/provider-wallet` | Required |
| ProviderWallet | `load` | `GET /api/v1/account/provider-wallet` | Required |
| ProviderWallet | `load` | `GET /api/v1/account/provider-wallet/{providerWalletId}` | Required |
| ProviderWallet | `remove` | `DELETE /api/v1/account/provider-wallet/{providerWalletId}` | Required |
| ProviderWallet | `update` | `PATCH /api/v1/account/provider-wallet/{providerWalletId}` | Required |
| ProviderWalletAssociationsSuccess | `load` | `GET /api/v1/account/provider-wallet/assistants/{assistantId}` | Required |
| ProviderWalletCatalogSuccess | `load` | `GET /api/v1/account/provider-wallet/catalog` | Required |
| PublicRagSearchSuccess | `create` | `POST /public/v1/rag/search` | Required |
| RagCollectionDeleteSuccess | `create` | `POST /api/v1/catalog/rag/collections` | Required |
| RagCollectionDeleteSuccess | `create` | `POST /api/v1/rag/collections` | Required |
| RagCollectionDeleteSuccess | `load` | `GET /api/v1/catalog/rag/collections` | Required |
| RagCollectionDeleteSuccess | `load` | `GET /api/v1/rag/collections` | Required |
| RagCollectionDeleteSuccess | `remove` | `DELETE /api/v1/catalog/rag/collections/{ragId}` | Required |
| RagCollectionDeleteSuccess | `remove` | `DELETE /api/v1/rag/collections/{ragId}` | Required |
| RagCollectionDocumentDeleteSuccess | `remove` | `DELETE /api/v1/catalog/rag/collections/{ragId}/documents/{fileName}` | Required |
| RagCollectionDocumentDeleteSuccess | `remove` | `DELETE /api/v1/rag/collections/{ragId}/documents/{fileName}` | Required |
| RagCollectionDocumentListSuccess | `load` | `GET /api/v1/catalog/rag/collections/{ragId}/documents` | Required |
| RagCollectionDocumentListSuccess | `load` | `GET /api/v1/rag/collections/{ragId}/documents` | Required |
| RagCollectionDocumentTokenEstimateSuccess | `create` | `POST /api/v1/catalog/rag/documents/estimate` | Required |
| RagCollectionDocumentTokenEstimateSuccess | `create` | `POST /api/v1/rag/documents/estimate` | Required |
| RagCollectionDocumentUploadStatusSuccess | `load` | `GET /api/v1/catalog/rag/uploads/{uploadId}` | Required |
| RagCollectionDocumentUploadStatusSuccess | `load` | `GET /api/v1/rag/uploads/{uploadId}` | Required |
| RagCollectionDocumentUploadSuccess | `create` | `POST /api/v1/catalog/rag/collections/{ragId}/documents` | Required |
| RagCollectionDocumentUploadSuccess | `create` | `POST /api/v1/rag/collections/{ragId}/documents` | Required |
| RuntimeBinding | `load` | `GET /api/v1/catalog/assistants/{assistantId}/runtime-bindings` | Required |
| Tts | `load` | `GET /api/v1/catalog/providers/tts` | Required |
| TtsVoiceListSuccess | `load` | `GET /api/v1/catalog/assistants/{assistantId}/tts/voices` | Required |
| Voice | `load` | `GET /api/v1/catalog/assistants/{assistantId}/audio-to-audio/voices` | Required |
| Voice | `load` | `GET /api/v1/catalog/assistants/{assistantId}/voice-to-voice/voices` | Required |
| Voice | `load` | `GET /api/v1/catalog/audio-to-audio/voices` | Required |
| Voice | `load` | `GET /api/v1/catalog/voice-to-voice/voices` | Required |
| VoiceLlm | `load` | `GET /api/v1/catalog/providers/voice-llm` | Required |
| VoiceLlmModelListSuccess | `load` | `GET /api/v1/catalog/audio-to-audio/models` | Required |
| VoiceLlmModelListSuccess | `load` | `GET /api/v1/catalog/voice-to-voice/models` | Required |
| VoiceLlmModelListSuccess | `load` | `GET /api/v1/catalog/assistants/{assistantId}/audio-to-audio/models` | Required |
| VoiceLlmModelListSuccess | `load` | `GET /api/v1/catalog/assistants/{assistantId}/voice-to-voice/models` | Required |

## Connect to the API

- Production client API: `https://client-api.ai4call.com`

The default credential is sent in the `x-client-email` header.

Email of the customer authenticated on the AI4Call portal

Customer API key generated by the AI4Call portal

Preferred Client API authentication using a portal API key.

API key generated by the portal in the SECURITY -&gt; API key section

API key generated by the AI4Call portal in the Security -&gt; API Key section

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

A read request without required parameters or authentication is `GET /health`. For example:

```sh
curl --fail-with-body --silent --show-error 'https://client-api.ai4call.com/health'
```

Inspect the response using the Health reference. This checks the public route; authenticated operations need their own credentials and request data.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| Golang | `go/` | Build from source |
| Java | `java/` | Build from source |
| Python | `py/` | Build from source |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `test`: In-memory mock transport for testing without a live server

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

