# Ai4call Golang SDK



The Golang SDK for the Ai4call API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.AccountAllowedIpsSuccess(nil)` — each with the same small set of operations (`Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `java`, `py`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/ai4call-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/ai4call-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/ai4call-sdk/go=../ai4call-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/ai4call-sdk/go"
)

func main() {
    client := sdk.NewAi4callSDK(map[string]any{
        "apikey": os.Getenv("AI4CALL_APIKEY"),
    })

    // Load a single accountAllowedIpsSuccess — the value is the loaded record.
    accountAllowedIpsSuccess, err := client.AccountAllowedIpsSuccess(nil).Load(nil, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(accountAllowedIpsSuccess)

    // Update a accountAllowedIpsSuccess.
    updated, err := client.AccountAllowedIpsSuccess(nil).Update(map[string]any{"addIps": []any{}, "allowedIps": []any{}}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(updated)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
analyticsragsearchsuccess, err := client.AnalyticsRagSearchSuccess(nil).Load(nil, nil)
if err != nil {
    // handle err
    return
}
_ = analyticsragsearchsuccess
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

analyticsRagSearchSuccess, err := client.AnalyticsRagSearchSuccess(nil).Load(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(analyticsRagSearchSuccess) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewAi4callSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
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
cd go && go test ./test/...
```


## Reference

### NewAi4callSDK

```go
func NewAi4callSDK(options map[string]any) *Ai4callSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *Ai4callSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### Ai4callSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `AccountAllowedIpsSuccess` | `(data map[string]any) Ai4callEntity` | Create an AccountAllowedIpsSuccess entity instance. |
| `AccountAvailablePluginsSuccess` | `(data map[string]any) Ai4callEntity` | Create an AccountAvailablePluginsSuccess entity instance. |
| `AccountCallLimitsSuccess` | `(data map[string]any) Ai4callEntity` | Create an AccountCallLimitsSuccess entity instance. |
| `AccountNumberRoutingSuccess` | `(data map[string]any) Ai4callEntity` | Create an AccountNumberRoutingSuccess entity instance. |
| `AccountPluginConfigurationSuccess` | `(data map[string]any) Ai4callEntity` | Create an AccountPluginConfigurationSuccess entity instance. |
| `AccountPluginInstanceSuccess` | `(data map[string]any) Ai4callEntity` | Create an AccountPluginInstanceSuccess entity instance. |
| `AccountPluginPurchaseSuccess` | `(data map[string]any) Ai4callEntity` | Create an AccountPluginPurchaseSuccess entity instance. |
| `AnalyticsCallsOutboundSuccess` | `(data map[string]any) Ai4callEntity` | Create an AnalyticsCallsOutboundSuccess entity instance. |
| `AnalyticsCallsSuccess` | `(data map[string]any) Ai4callEntity` | Create an AnalyticsCallsSuccess entity instance. |
| `AnalyticsPostCallSuccess` | `(data map[string]any) Ai4callEntity` | Create an AnalyticsPostCallSuccess entity instance. |
| `AnalyticsPreCallSuccess` | `(data map[string]any) Ai4callEntity` | Create an AnalyticsPreCallSuccess entity instance. |
| `AnalyticsRagSearchSuccess` | `(data map[string]any) Ai4callEntity` | Create an AnalyticsRagSearchSuccess entity instance. |
| `AnalyticsRagSuccess` | `(data map[string]any) Ai4callEntity` | Create an AnalyticsRagSuccess entity instance. |
| `AnalyticsRechargesSuccess` | `(data map[string]any) Ai4callEntity` | Create an AnalyticsRechargesSuccess entity instance. |
| `AnalyticsSmsSuccess` | `(data map[string]any) Ai4callEntity` | Create an AnalyticsSmsSuccess entity instance. |
| `AnalyticsToolResponsesSuccess` | `(data map[string]any) Ai4callEntity` | Create an AnalyticsToolResponsesSuccess entity instance. |
| `Asr` | `(data map[string]any) Ai4callEntity` | Create an Asr entity instance. |
| `AsrModelListSuccess` | `(data map[string]any) Ai4callEntity` | Create an AsrModelListSuccess entity instance. |
| `Assistant` | `(data map[string]any) Ai4callEntity` | Create an Assistant entity instance. |
| `AssistantAdvancedSettingsConfigurationSuccess` | `(data map[string]any) Ai4callEntity` | Create an AssistantAdvancedSettingsConfigurationSuccess entity instance. |
| `AssistantAdvancedSettingsRuntimeUpdateSuccess` | `(data map[string]any) Ai4callEntity` | Create an AssistantAdvancedSettingsRuntimeUpdateSuccess entity instance. |
| `AssistantAsrRuntimeUpdateSuccess` | `(data map[string]any) Ai4callEntity` | Create an AssistantAsrRuntimeUpdateSuccess entity instance. |
| `AssistantConversationWebhookRuntimeSuccess` | `(data map[string]any) Ai4callEntity` | Create an AssistantConversationWebhookRuntimeSuccess entity instance. |
| `AssistantDtmfConfigurationSuccess` | `(data map[string]any) Ai4callEntity` | Create an AssistantDtmfConfigurationSuccess entity instance. |
| `AssistantDtmfRuntimeUpdateSuccess` | `(data map[string]any) Ai4callEntity` | Create an AssistantDtmfRuntimeUpdateSuccess entity instance. |
| `AssistantHangupConfigurationSuccess` | `(data map[string]any) Ai4callEntity` | Create an AssistantHangupConfigurationSuccess entity instance. |
| `AssistantHangupRuntimeUpdateSuccess` | `(data map[string]any) Ai4callEntity` | Create an AssistantHangupRuntimeUpdateSuccess entity instance. |
| `AssistantHangupSchemaRuntimeSuccess` | `(data map[string]any) Ai4callEntity` | Create an AssistantHangupSchemaRuntimeSuccess entity instance. |
| `AssistantKnowledgeSuccess` | `(data map[string]any) Ai4callEntity` | Create an AssistantKnowledgeSuccess entity instance. |
| `AssistantLlmRuntimeUpdateSuccess` | `(data map[string]any) Ai4callEntity` | Create an AssistantLlmRuntimeUpdateSuccess entity instance. |
| `AssistantNumberRoutingCatalogSuccess` | `(data map[string]any) Ai4callEntity` | Create an AssistantNumberRoutingCatalogSuccess entity instance. |
| `AssistantNumberRoutingRuntimeSuccess` | `(data map[string]any) Ai4callEntity` | Create an AssistantNumberRoutingRuntimeSuccess entity instance. |
| `AssistantPostcallMcpRuntimeSuccess` | `(data map[string]any) Ai4callEntity` | Create an AssistantPostcallMcpRuntimeSuccess entity instance. |
| `AssistantPrecallMcpRuntimeSuccess` | `(data map[string]any) Ai4callEntity` | Create an AssistantPrecallMcpRuntimeSuccess entity instance. |
| `AssistantPrecallValidationRuntimeSuccess` | `(data map[string]any) Ai4callEntity` | Create an AssistantPrecallValidationRuntimeSuccess entity instance. |
| `AssistantPromptSuccess` | `(data map[string]any) Ai4callEntity` | Create an AssistantPromptSuccess entity instance. |
| `AssistantRagConfigurationSuccess` | `(data map[string]any) Ai4callEntity` | Create an AssistantRagConfigurationSuccess entity instance. |
| `AssistantRagRuntimeUpdateSuccess` | `(data map[string]any) Ai4callEntity` | Create an AssistantRagRuntimeUpdateSuccess entity instance. |
| `AssistantSaveConversationRuntimeSuccess` | `(data map[string]any) Ai4callEntity` | Create an AssistantSaveConversationRuntimeSuccess entity instance. |
| `AssistantSettingsConfigurationSuccess` | `(data map[string]any) Ai4callEntity` | Create an AssistantSettingsConfigurationSuccess entity instance. |
| `AssistantSettingsRuntimeUpdateSuccess` | `(data map[string]any) Ai4callEntity` | Create an AssistantSettingsRuntimeUpdateSuccess entity instance. |
| `AssistantToolsRuntimeUpdateSuccess` | `(data map[string]any) Ai4callEntity` | Create an AssistantToolsRuntimeUpdateSuccess entity instance. |
| `AssistantTtsRuntimeUpdateSuccess` | `(data map[string]any) Ai4callEntity` | Create an AssistantTtsRuntimeUpdateSuccess entity instance. |
| `AssistantVoiceToVoiceRuntimeUpdateSuccess` | `(data map[string]any) Ai4callEntity` | Create an AssistantVoiceToVoiceRuntimeUpdateSuccess entity instance. |
| `AssociatedRuntimeToolListSuccess` | `(data map[string]any) Ai4callEntity` | Create an AssociatedRuntimeToolListSuccess entity instance. |
| `AudioToAudio` | `(data map[string]any) Ai4callEntity` | Create an AudioToAudio entity instance. |
| `AvailableRuntimeToolListSuccess` | `(data map[string]any) Ai4callEntity` | Create an AvailableRuntimeToolListSuccess entity instance. |
| `FillerPhraseList` | `(data map[string]any) Ai4callEntity` | Create a FillerPhraseList entity instance. |
| `Health` | `(data map[string]any) Ai4callEntity` | Create a Health entity instance. |
| `Knowledge` | `(data map[string]any) Ai4callEntity` | Create a Knowledge entity instance. |
| `Llm` | `(data map[string]any) Ai4callEntity` | Create a Llm entity instance. |
| `LlmModelListSuccess` | `(data map[string]any) Ai4callEntity` | Create a LlmModelListSuccess entity instance. |
| `OutboundCall` | `(data map[string]any) Ai4callEntity` | Create an OutboundCall entity instance. |
| `OutboundCallAcceptedSuccess` | `(data map[string]any) Ai4callEntity` | Create an OutboundCallAcceptedSuccess entity instance. |
| `OutboundDialStatusPayload` | `(data map[string]any) Ai4callEntity` | Create an OutboundDialStatusPayload entity instance. |
| `PortalLoginSuccess` | `(data map[string]any) Ai4callEntity` | Create a PortalLoginSuccess entity instance. |
| `PreCall` | `(data map[string]any) Ai4callEntity` | Create a PreCall entity instance. |
| `ProviderWallet` | `(data map[string]any) Ai4callEntity` | Create a ProviderWallet entity instance. |
| `ProviderWalletAssociationsSuccess` | `(data map[string]any) Ai4callEntity` | Create a ProviderWalletAssociationsSuccess entity instance. |
| `ProviderWalletCatalogSuccess` | `(data map[string]any) Ai4callEntity` | Create a ProviderWalletCatalogSuccess entity instance. |
| `PublicRagSearchSuccess` | `(data map[string]any) Ai4callEntity` | Create a PublicRagSearchSuccess entity instance. |
| `RagCollectionDeleteSuccess` | `(data map[string]any) Ai4callEntity` | Create a RagCollectionDeleteSuccess entity instance. |
| `RagCollectionDocumentDeleteSuccess` | `(data map[string]any) Ai4callEntity` | Create a RagCollectionDocumentDeleteSuccess entity instance. |
| `RagCollectionDocumentListSuccess` | `(data map[string]any) Ai4callEntity` | Create a RagCollectionDocumentListSuccess entity instance. |
| `RagCollectionDocumentTokenEstimateSuccess` | `(data map[string]any) Ai4callEntity` | Create a RagCollectionDocumentTokenEstimateSuccess entity instance. |
| `RagCollectionDocumentUploadStatusSuccess` | `(data map[string]any) Ai4callEntity` | Create a RagCollectionDocumentUploadStatusSuccess entity instance. |
| `RagCollectionDocumentUploadSuccess` | `(data map[string]any) Ai4callEntity` | Create a RagCollectionDocumentUploadSuccess entity instance. |
| `RuntimeBinding` | `(data map[string]any) Ai4callEntity` | Create a RuntimeBinding entity instance. |
| `Tts` | `(data map[string]any) Ai4callEntity` | Create a Tts entity instance. |
| `TtsVoiceListSuccess` | `(data map[string]any) Ai4callEntity` | Create a TtsVoiceListSuccess entity instance. |
| `Voice` | `(data map[string]any) Ai4callEntity` | Create a Voice entity instance. |
| `VoiceLlm` | `(data map[string]any) Ai4callEntity` | Create a VoiceLlm entity instance. |
| `VoiceLlmModelListSuccess` | `(data map[string]any) Ai4callEntity` | Create a VoiceLlmModelListSuccess entity instance. |

### Entity interface (Ai4callEntity)

All entities implement the `Ai4callEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    accountAllowedIpsSuccess, err := client.AccountAllowedIpsSuccess(nil).Load(nil, nil)
    if err != nil { /* handle */ }
    // accountAllowedIpsSuccess is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### AccountAllowedIpsSuccess

| Field | Description |
| --- | --- |
| `"addIps"` | Value supplied for `addIps` in the `AccountAllowedIpsUpdateRequest` request. |
| `"allowedIps"` | Value supplied for `allowedIps` in the `AccountAllowedIpsUpdateRequest` request. |
| `"data"` |  |
| `"deleteIps"` | Value supplied for `deleteIps` in the `AccountAllowedIpsUpdateRequest` request. |
| `"message"` |  |
| `"meta"` |  |
| `"requestId"` |  |
| `"success"` |  |

Operations: Load, Update.

API path: `/api/v1/account/allowed-ips`

#### AccountAvailablePluginsSuccess

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"message"` |  |
| `"meta"` |  |
| `"requestId"` |  |
| `"success"` |  |

Operations: Load.

API path: `/api/v1/account/plugins/available`

#### AccountCallLimitsSuccess

| Field | Description |
| --- | --- |
| `"assistants"` | Value supplied for `assistants` in the `AccountCallLimitsUpdateRequest` request. |
| `"data"` |  |
| `"message"` |  |
| `"meta"` |  |
| `"requestId"` |  |
| `"success"` |  |

Operations: Load, Update.

API path: `/api/v1/account/call-limits`

#### AccountNumberRoutingSuccess

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"demoNumbers"` | Value supplied for `demoNumbers` in the `AccountNumberRoutingUpdateRequest` request. |
| `"message"` |  |
| `"meta"` |  |
| `"purchasedNumbers"` | Value supplied for `purchasedNumbers` in the `AccountNumberRoutingUpdateRequest` request. |
| `"requestId"` |  |
| `"success"` |  |
| `"userNumbers"` | Value supplied for `userNumbers` in the `AccountNumberRoutingUpdateRequest` request. |

Operations: Load, Update.

API path: `/api/v1/account/number-routing`

#### AccountPluginConfigurationSuccess

| Field | Description |
| --- | --- |
| `"configuration"` | Configuration contract and current values for one plugin instance. |
| `"instanceName"` | Value supplied for `instanceName` in the `AccountPluginConfigurationUpdateRequest` request. |
| `"instance_name"` | Legacy alias of `instanceName`. |
| `"pluginName"` | Value supplied for `pluginName` in the `AccountPluginConfigurationUpdateRequest` request. |
| `"plugin_name"` | Legacy alias of `pluginName`. |

Operations: Load, Update.

API path: `/api/v1/account/plugins/configuration`

#### AccountPluginInstanceSuccess

| Field | Description |
| --- | --- |
| `"configuration"` | Current lifecycle information for one purchased plugin instance. |
| `"data"` |  |
| `"instanceName"` | Value supplied for `instanceName` in the `AccountPluginPurchaseRequest` request. |
| `"instance_name"` | Legacy alias of `instanceName`. |
| `"message"` |  |
| `"meta"` |  |
| `"newInstanceName"` | Value supplied for `newInstanceName` in the `AccountPluginInstanceByIdUpdateRequest` request. |
| `"new_instance_name"` | Legacy alias of `newInstanceName`. |
| `"pluginName"` | Value supplied for `pluginName` in the `AccountPluginPurchaseRequest` request. |
| `"plugin_name"` | Legacy alias of `pluginName`. |
| `"requestId"` |  |
| `"status"` | Value supplied for `status` in the `AccountPluginInstanceUpdateRequest` request. |
| `"success"` |  |

Operations: Create, Load, Remove, Update.

API path: `/api/v1/account/plugins/instances`

#### AccountPluginPurchaseSuccess

| Field | Description |
| --- | --- |
| `"configuration"` | Result of a plugin purchase, including charged prices and created instance data. |
| `"instanceName"` | Value supplied for `instanceName` in the `AccountPluginPurchaseRequest` request. |
| `"instance_name"` | Legacy alias of `instanceName`. |
| `"pluginName"` | Value supplied for `pluginName` in the `AccountPluginPurchaseRequest` request. |
| `"plugin_name"` | Legacy alias of `pluginName`. |

Operations: Update.

API path: `/api/v1/account/plugins/purchase`

#### AnalyticsCallsOutboundSuccess

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"message"` |  |
| `"meta"` |  |
| `"requestId"` |  |
| `"success"` |  |

Operations: Load.

API path: `/api/v1/account/analytics/calls-outbound`

#### AnalyticsCallsSuccess

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"message"` |  |
| `"meta"` |  |
| `"requestId"` |  |
| `"success"` |  |

Operations: Load.

API path: `/api/v1/account/analytics/calls`

#### AnalyticsPostCallSuccess

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"message"` |  |
| `"meta"` |  |
| `"requestId"` |  |
| `"success"` |  |

Operations: Load.

API path: `/api/v1/account/analytics/post-call`

#### AnalyticsPreCallSuccess

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"message"` |  |
| `"meta"` |  |
| `"requestId"` |  |
| `"success"` |  |

Operations: Load.

API path: `/api/v1/account/analytics/pre-call`

#### AnalyticsRagSearchSuccess

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"message"` |  |
| `"meta"` |  |
| `"requestId"` |  |
| `"success"` |  |

Operations: Load.

API path: `/api/v1/account/analytics/rag-searches`

#### AnalyticsRagSuccess

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"message"` |  |
| `"meta"` |  |
| `"requestId"` |  |
| `"success"` |  |

Operations: Load.

API path: `/api/v1/account/analytics/rag`

#### AnalyticsRechargesSuccess

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"message"` |  |
| `"meta"` |  |
| `"requestId"` |  |
| `"success"` |  |

Operations: Load.

API path: `/api/v1/account/analytics/recharges`

#### AnalyticsSmsSuccess

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"message"` |  |
| `"meta"` |  |
| `"requestId"` |  |
| `"success"` |  |

Operations: Load.

API path: `/api/v1/account/analytics/sms`

#### AnalyticsToolResponsesSuccess

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"message"` |  |
| `"meta"` |  |
| `"requestId"` |  |
| `"success"` |  |

Operations: Load.

API path: `/api/v1/account/analytics/tool-responses`

#### Asr

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"message"` |  |
| `"meta"` | Collection metadata. |
| `"requestId"` |  |
| `"success"` |  |

Operations: Load.

API path: `/api/v1/catalog/providers/asr`

#### AsrModelListSuccess

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"message"` |  |
| `"meta"` | Collection metadata. |
| `"requestId"` |  |
| `"success"` |  |

Operations: Load.

API path: `/api/v1/catalog/assistants/{assistantId}/asr/models`

#### Assistant

| Field | Description |
| --- | --- |
| `"assistant"` | Assistant detail response, including the legacy assistant API key during the v1 compatibility period. |
| `"audioToAudio"` | Initial audio-to-audio configuration, used when applicable to the selected mode. |
| `"data"` |  |
| `"description"` | Functional description of the assistant. |
| `"firstMessage"` | Partial update of the assistant's first-message configuration. |
| `"id"` |  |
| `"message"` |  |
| `"meta"` | Collection metadata. |
| `"metadata"` | Free-form metadata to store with the assistant. |
| `"mode"` | Runtime mode to use when creating the assistant. |
| `"name"` | Assistant name. |
| `"network"` | Network settings to update on the assistant. |
| `"numbers"` | Replacement values for assistant number lists when supplied. |
| `"requestId"` |  |
| `"settings"` | High-level assistant settings to update. |
| `"status"` | New lifecycle status for the assistant. |
| `"success"` |  |
| `"voiceToVoice"` | Legacy alias of `audioToAudio`. |

Operations: Create, Load, Remove, Update.

API path: `/api/v1/assistants`

#### AssistantAdvancedSettingsConfigurationSuccess

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Load.

API path: `/api/v1/catalog/assistants/{assistantId}/advanced-settings`

#### AssistantAdvancedSettingsRuntimeUpdateSuccess

| Field | Description |
| --- | --- |
| `"assistantApiKey"` |  |
| `"assistantId"` |  |
| `"configuration"` |  |
| `"freqPenalty"` | Value supplied for `freqPenalty` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `"maxTokens"` | Value supplied for `maxTokens` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `"presencePenalty"` | Value supplied for `presencePenalty` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `"service"` |  |
| `"stopSequences"` | Value supplied for `stopSequences` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `"temperature"` | Value supplied for `temperature` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `"topK"` | Value supplied for `topK` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `"topP"` | Value supplied for `topP` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |

Operations: Update.

API path: `/api/v1/assistants/{assistantId}/runtime/advanced-settings`

#### AssistantAsrRuntimeUpdateSuccess

| Field | Description |
| --- | --- |
| `"apiKey"` | API key of the customer's ASR provider. |
| `"assistantApiKey"` |  |
| `"assistantId"` |  |
| `"configuration"` | Actual resulting ASR runtime configuration after merge and backend resolution. |
| `"engineCode"` | ASR engine/provider code. |
| `"providerWalletId"` | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `"runtimeBinding"` |  |
| `"service"` |  |
| `"sourceMode"` | Runtime sourcing mode. |

Operations: Update.

API path: `/api/v1/assistants/{assistantId}/runtime/asr`

#### AssistantConversationWebhookRuntimeSuccess

| Field | Description |
| --- | --- |
| `"authName"` | Name of the saved authentication to apply to the request |
| `"configuration"` |  |
| `"enabled"` | Enable or disable sending the conversation to the webhook |
| `"url"` | Endpoint that receives the POST at the end of the call |

Operations: Load, Update.

API path: `/api/v1/assistants/{assistantId}/runtime/hangup/conversation-webhook`

#### AssistantDtmfConfigurationSuccess

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Load.

API path: `/api/v1/catalog/assistants/{assistantId}/dtmf`

#### AssistantDtmfRuntimeUpdateSuccess

| Field | Description |
| --- | --- |
| `"acceptTimeout"` | Value supplied for `acceptTimeout` in the `AssistantDtmfRuntimeUpdateRequest` request. |
| `"assistantApiKey"` |  |
| `"assistantId"` |  |
| `"configuration"` |  |
| `"enabled"` | Enable or disable DTMF reception. |
| `"maxLength"` | Value supplied for `maxLength` in the `AssistantDtmfRuntimeUpdateRequest` request. |
| `"minLength"` | Value supplied for `minLength` in the `AssistantDtmfRuntimeUpdateRequest` request. |
| `"playEnabled"` | Enable or disable DTMF sending during the call. |
| `"service"` |  |
| `"terminationChars"` | Value supplied for `terminationChars` in the `AssistantDtmfRuntimeUpdateRequest` request. |

Operations: Update.

API path: `/api/v1/assistants/{assistantId}/runtime/dtmf`

#### AssistantHangupConfigurationSuccess

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Load.

API path: `/api/v1/catalog/assistants/{assistantId}/hangup`

#### AssistantHangupRuntimeUpdateSuccess

| Field | Description |
| --- | --- |
| `"assistantApiKey"` |  |
| `"assistantId"` |  |
| `"availableAgents"` | Value supplied for `availableAgents` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `"configuration"` |  |
| `"enableHangup"` | Value supplied for `enableHangup` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `"enableRedirect"` | Value supplied for `enableRedirect` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `"enableTransferAgent"` | Value supplied for `enableTransferAgent` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `"service"` |  |
| `"transferAgentNotificationText"` | Value supplied for `transferAgentNotificationText` in the `AssistantHangupRuntimeUpdateRequest` request. |

Operations: Update.

API path: `/api/v1/assistants/{assistantId}/runtime/hangup`

#### AssistantHangupSchemaRuntimeSuccess

| Field | Description |
| --- | --- |
| `"configuration"` |  |
| `"hangupUrl"` | Hangup webhook URL (null to remove) |
| `"schema"` | Defining body fields (overrides the current schema) |

Operations: Load, Update.

API path: `/api/v1/assistants/{assistantId}/runtime/hangup/schema`

#### AssistantKnowledgeSuccess

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Load, Update.

API path: `/api/v1/assistants/{assistantId}/knowledge`

#### AssistantLlmRuntimeUpdateSuccess

| Field | Description |
| --- | --- |
| `"apiKey"` | API key of the customer's LLM provider. |
| `"assistantApiKey"` |  |
| `"assistantId"` |  |
| `"baseUrl"` | Base custom URL of the LLM provider. |
| `"configuration"` | Actual resulting LLM runtime configuration after merge and backend resolution. |
| `"engineCode"` | LLM engine/provider code. |
| `"modelCode"` | LLM model code. |
| `"providerWalletId"` | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `"runtimeBinding"` |  |
| `"service"` |  |
| `"sourceMode"` | Runtime sourcing mode. |

Operations: Update.

API path: `/api/v1/assistants/{assistantId}/runtime/llm`

#### AssistantNumberRoutingCatalogSuccess

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Load.

API path: `/api/v1/catalog/assistants/{assistantId}/number-routing`

#### AssistantNumberRoutingRuntimeSuccess

| Field | Description |
| --- | --- |
| `"configuration"` |  |
| `"demoNumbers"` | Demo numbers to route to this assistant |
| `"purchasedNumbers"` | Purchased numbers to route to this assistant |
| `"userNumbers"` | Customer's own numbers (own PBX) to route to this assistant |

Operations: Update.

API path: `/api/v1/assistants/{assistantId}/runtime/number-routing`

#### AssistantPostcallMcpRuntimeSuccess

| Field | Description |
| --- | --- |
| `"configuration"` | General configuration of the post-call phase. |
| `"enabled"` | Enable or disable the whole post-call phase without losing its configuration. |
| `"globalPrompt"` | Global post-call prompt. |
| `"modelConfig"` | Model configuration used by the MCP phase. |
| `"tools"` | Complete list of post-call tools to set up. |

Operations: Load, Update.

API path: `/api/v1/assistants/{assistantId}/runtime/postcall/mcp-config`

#### AssistantPrecallMcpRuntimeSuccess

| Field | Description |
| --- | --- |
| `"configuration"` | General configuration of the pre-call phase. |
| `"earlyTerminationEnabled"` | Enable/disable early termination. |
| `"enabled"` | Enable or disable the whole pre-call phase without losing its configuration. |
| `"globalPrompt"` | Global pre-call prompt. |
| `"modelConfig"` | Model configuration used by the MCP phase. |
| `"outputSchema"` | JSON schema of the expected pre-call output, as an alternative to `outputVariables`. |
| `"outputVariables"` | Variables to extract from the pre-call result. |
| `"terminationMessage"` | Early termination audio message. |
| `"tools"` | Complete list of pre-call tools to set (replaces the current ones). |
| `"voiceConfig"` | Voice/TTS configuration used to generate pre-call hold and termination audio. |
| `"waitingAudioNonInterruptible"` | `true` plays all on-hold audio, `false` allows the customer to speak over the audio. |
| `"waitingAudioText"` | Audio text on hold. |

Operations: Load, Update.

API path: `/api/v1/assistants/{assistantId}/runtime/precall/mcp-config`

#### AssistantPrecallValidationRuntimeSuccess

| Field | Description |
| --- | --- |
| `"authPassword"` | Basic auth password (null to remove it) |
| `"authToken"` | Bearer token or API key (null to remove it) |
| `"authType"` |  |
| `"authUsername"` | Value supplied for `authUsername` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `"configuration"` | null if no configuration is yet present |
| `"headersJson"` | Value supplied for `headersJson` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `"isActive"` | Value supplied for `isActive` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `"method"` |  |
| `"name"` | Value supplied for `name` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `"numberLocation"` | Where to insert the calling number in the HTTP request: - `query` — added as a query string (e.g. |
| `"numberParamName"` | Value supplied for `numberParamName` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `"timeoutMs"` | Value supplied for `timeoutMs` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `"url"` | Value supplied for `url` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |

Operations: Load, Update.

API path: `/api/v1/assistants/{assistantId}/runtime/precall/number-validation`

#### AssistantPromptSuccess

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Load.

API path: `/api/v1/assistants/{assistantId}/prompt`

#### AssistantRagConfigurationSuccess

| Field | Description |
| --- | --- |
| `"enabled"` |  |
| `"kbPrompt"` |  |
| `"name"` |  |
| `"returnedChunks"` |  |

Operations: Load.

API path: `/api/v1/assistants/{assistantId}/rag/collections`

#### AssistantRagRuntimeUpdateSuccess

| Field | Description |
| --- | --- |
| `"assistantApiKey"` |  |
| `"assistantId"` |  |
| `"configuration"` | RAG configuration resulting after application merge. |
| `"enabled"` | Enable or disable RAG for the assistant. |
| `"kbPrompt"` | Assistant knowledge base instructions. |
| `"name"` | Name of the RAG collection to associate. |
| `"returnedChunks"` | Number of relevant fragments to return from the knowledge base. |
| `"service"` |  |

Operations: Update.

API path: `/api/v1/assistants/{assistantId}/runtime/rag`

#### AssistantSaveConversationRuntimeSuccess

| Field | Description |
| --- | --- |
| `"configuration"` |  |
| `"emails"` | One or more recipient emails separated by commas (e.g. |
| `"enabled"` | Enable or disable sending of the conversation summary via email |
| `"smtpInstanceName"` | Name of the SMTP plugin instance to use for sending |
| `"smtp_instance_name"` | Legacy alias of `smtpInstanceName`. |

Operations: Load, Update.

API path: `/api/v1/assistants/{assistantId}/runtime/hangup/save-conversation`

#### AssistantSettingsConfigurationSuccess

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Load.

API path: `/api/v1/catalog/assistants/{assistantId}/settings`

#### AssistantSettingsRuntimeUpdateSuccess

| Field | Description |
| --- | --- |
| `"asrInitialDelayMs"` | Value supplied for `asrInitialDelayMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `"asrSilenceMs"` | Value supplied for `asrSilenceMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `"assistantApiKey"` |  |
| `"assistantId"` |  |
| `"callPermissions"` | Value supplied for `callPermissions` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `"configuration"` |  |
| `"dynamicTimeoutMs"` | Value supplied for `dynamicTimeoutMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `"filler"` | Value supplied for `filler` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `"maxResponseLength"` | Value supplied for `maxResponseLength` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `"reprompt"` | Value supplied for `reprompt` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `"service"` |  |
| `"truncateInitialAudio"` | Value supplied for `truncateInitialAudio` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `"ttsInterruptionInConversation"` | Value supplied for `ttsInterruptionInConversation` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `"vad"` | Value supplied for `vad` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `"vadMinVoiceMs"` | Value supplied for `vadMinVoiceMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `"vadThreshold"` | Value supplied for `vadThreshold` in the `AssistantSettingsRuntimeUpdateRequest` request. |

Operations: Update.

API path: `/api/v1/assistants/{assistantId}/runtime/settings`

#### AssistantToolsRuntimeUpdateSuccess

| Field | Description |
| --- | --- |
| `"assistantApiKey"` |  |
| `"assistantId"` |  |
| `"configuration"` | Resulting tool configuration after the update. |
| `"service"` |  |

Operations: Update.

API path: `/api/v1/assistants/{assistantId}/runtime/tools`

#### AssistantTtsRuntimeUpdateSuccess

| Field | Description |
| --- | --- |
| `"apiKey"` | API key of the customer's TTS provider. |
| `"assistantApiKey"` |  |
| `"assistantId"` |  |
| `"configuration"` | Actual resulting TTS runtime configuration after merge and backend resolution. |
| `"engineCode"` | TTS engine/provider code. |
| `"providerWalletId"` | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `"region"` | Region/provider area requested by some engine customers, in particular Azure. |
| `"runtimeBinding"` |  |
| `"service"` |  |
| `"sourceMode"` | Runtime sourcing mode. |
| `"voiceCode"` | TTS voice code. |

Operations: Update.

API path: `/api/v1/assistants/{assistantId}/runtime/tts`

#### AssistantVoiceToVoiceRuntimeUpdateSuccess

| Field | Description |
| --- | --- |
| `"apiKey"` | Customer key provider API. |
| `"assistantApiKey"` |  |
| `"assistantId"` |  |
| `"baseUrl"` | Base custom URL. |
| `"configuration"` |  |
| `"engineCode"` | Provider/engine voice LLM. |
| `"modelCode"` | LLM voice model code. |
| `"prompt"` | Main prompt of the audio-to-audio runtime. |
| `"providerWalletId"` | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `"service"` |  |
| `"voiceCode"` | Model item code. |

Operations: Update.

API path: `/api/v1/assistants/{assistantId}/runtime/audio-to-audio`

#### AssociatedRuntimeToolListSuccess

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"message"` |  |
| `"meta"` |  |
| `"requestId"` |  |
| `"success"` |  |

Operations: Load.

API path: `/api/v1/catalog/assistants/{assistantId}/tools`

#### AudioToAudio

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"message"` |  |
| `"meta"` | Collection metadata. |
| `"requestId"` |  |
| `"success"` |  |

Operations: Load.

API path: `/api/v1/catalog/providers/audio-to-audio`

#### AvailableRuntimeToolListSuccess

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"message"` |  |
| `"meta"` |  |
| `"requestId"` |  |
| `"success"` |  |

Operations: Load.

API path: `/api/v1/catalog/tools`

#### FillerPhraseList

| Field | Description |
| --- | --- |
| `"associations"` |  |
| `"data"` |  |
| `"id"` | Value supplied for `id` in the `FillerPhraseListCreateRequest` request. |
| `"list"` |  |
| `"message"` |  |
| `"meta"` |  |
| `"name"` | Value supplied for `name` in the `FillerPhraseListCreateRequest` request. |
| `"phrases"` | Value supplied for `phrases` in the `FillerPhraseListCreateRequest` request. |
| `"requestId"` |  |
| `"success"` |  |
| `"toolListIds"` |  |
| `"waitingListIds"` |  |

Operations: Create, Load, Remove, Update.

API path: `/api/v1/catalog/filler-phrase-lists`

#### Health

| Field | Description |
| --- | --- |
| `"dataSource"` |  |
| `"service"` |  |
| `"status"` |  |

Operations: Load.

API path: `/health`

#### Knowledge

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"defaultPostAction"` | Defaults to `ask_if_needs_more` when omitted |
| `"defaultResponse"` | Default answer used when a trigger has no specific response. |
| `"id"` |  |
| `"knowledge"` | A knowledge item: a set of recognised requests with their answers, folded into the prompt of every assistant it is associated with. |
| `"message"` |  |
| `"meta"` |  |
| `"requestId"` |  |
| `"rules"` | Optional constraints applied to the whole knowledge item. |
| `"success"` |  |
| `"title"` | Human-readable title of the new knowledge item. |
| `"triggers"` | Initial trigger list for the knowledge item. |

Operations: Create, Load, Remove, Update.

API path: `/api/v1/catalog/knowledge`

#### Llm

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"message"` |  |
| `"meta"` | Collection metadata. |
| `"requestId"` |  |
| `"success"` |  |

Operations: Load.

API path: `/api/v1/catalog/providers/llm`

#### LlmModelListSuccess

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"message"` |  |
| `"meta"` | Collection metadata. |
| `"requestId"` |  |
| `"success"` |  |

Operations: Load.

API path: `/api/v1/catalog/assistants/{assistantId}/llm/models`

#### OutboundCall

| Field | Description |
| --- | --- |
| `"AddPrompt"` | Legacy alias of `addPrompt`. |
| `"addPrompt"` | Optional additional prompt to customize assistant behavior. |
| `"apiKey_assistente"` | Legacy alias of `assistantApiKey`. |
| `"assistantApiKey"` | API key of the AI assistant that will talk to the callee. |
| `"callId"` | Technical call identifier, if already available when the response is returned. |
| `"callResultUrl"` | Optional HTTPS URL that AI4Call calls with the outcome notification. |
| `"callbackConfigured"` | Indicates whether the callback URL for the call outcome was configured. |
| `"callerId"` | Caller number displayed in E.164 format. |
| `"dst"` | Recipient number in E.164 format, example +3902XXXXXXXX. |
| `"internalId"` | UUID generated by AI4Call to correlate the outbound request, callback and final dial-status lookup. |
| `"status"` | Initial status of the outbound request. |
| `"url_esito_chiamata"` | Legacy alias of `callResultUrl`. |

Operations: Create.

API path: `/webhook/outbound_call`

#### OutboundCallAcceptedSuccess

| Field | Description |
| --- | --- |
| `"AddPrompt"` | Legacy alias of `addPrompt`. |
| `"addPrompt"` | Optional additional prompt to customize assistant behavior. |
| `"apiKey_assistente"` | Legacy alias of `assistantApiKey`. |
| `"assistantApiKey"` | API key of the AI assistant that will talk to the callee. |
| `"callId"` | Technical call identifier, if already available when the response is returned. |
| `"callResultUrl"` | Optional HTTPS URL that AI4Call calls with the outcome notification. |
| `"callbackConfigured"` | Indicates whether the callback URL for the call outcome was configured. |
| `"callerId"` | Calling number displayed in the format required by the PBX, E.164 +3902XXXXXXXX or local 02XXXXXXXX. |
| `"dst"` | Recipient number in the format required by the PBX, E.164 +3902XXXXXXXX or local 02XXXXXXXX. |
| `"internalId"` | UUID generated by AI4Call to correlate the outbound request, callback and final dial-status lookup. |
| `"ipPbx"` | Public IP of the PBX, must be one of the authorized public IPs. |
| `"ip_pbx"` | Legacy alias of `ipPbx`. |
| `"method_uac"` | Selects the registered UAC mode. |
| `"sipPort"` | SIP port of the PBX, standard 5060. |
| `"sip_port"` | Legacy alias of `sipPort`. |
| `"status"` | Initial status of the outbound request. |
| `"url_esito_chiamata"` | Legacy alias of `callResultUrl`. |

Operations: Create.

API path: `/webhook/outbound_call_pbx`

#### OutboundDialStatusPayload

| Field | Description |
| --- | --- |
| `"billSec"` | Billed duration in seconds. |
| `"dialStatus"` | Final dial result persisted in the outbound CDR. |
| `"trafficCost"` | Outbound traffic cost in EUR, expressed with six decimal places. |

Operations: Load.

API path: `/getDialstatus/{uuid}`

#### PortalLoginSuccess

| Field | Description |
| --- | --- |
| `"client"` | Customer profile returned after successful portal credential verification. |
| `"email"` | Portal customer email. |
| `"portalApiKey"` | Static portal API key associated with the customer account. |

Operations: Create.

API path: `/api/v1/auth/portal/login`

#### PreCall

| Field | Description |
| --- | --- |
| `"configuration"` |  |

Operations: Load.

API path: `/api/v1/catalog/assistants/{assistantId}/pre-call`

#### ProviderWallet

| Field | Description |
| --- | --- |
| `"config"` | Values of the fields declared by the catalog entry |
| `"credential"` | A credential saved by the customer. |
| `"data"` |  |
| `"engine"` | Engine code selected from the provider-wallet catalog. |
| `"id"` |  |
| `"isActive"` | Whether the saved credential can be used by assistant runtimes. |
| `"message"` |  |
| `"meta"` |  |
| `"name"` | Customer-defined name for the saved credential. |
| `"provider"` | Provider code selected from the provider-wallet catalog. |
| `"requestId"` |  |
| `"serviceType"` | Service category selected from the provider-wallet catalog. |
| `"success"` |  |

Operations: Create, Load, Remove, Update.

API path: `/api/v1/account/provider-wallet`

#### ProviderWalletAssociationsSuccess

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"message"` |  |
| `"meta"` |  |
| `"requestId"` |  |
| `"success"` |  |

Operations: Load.

API path: `/api/v1/account/provider-wallet/assistants/{assistantId}`

#### ProviderWalletCatalogSuccess

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"message"` |  |
| `"meta"` |  |
| `"requestId"` |  |
| `"success"` |  |

Operations: Load.

API path: `/api/v1/account/provider-wallet/catalog`

#### PublicRagSearchSuccess

| Field | Description |
| --- | --- |
| `"count"` | Number of chunks returned by the search, up to the service limit of 4. |
| `"query"` | Normalized query text used for the search. |
| `"rag_id"` | Public RAG identifier supplied in the request and returned unchanged on success. |
| `"results"` | Chunks returned by the vector search. |

Operations: Create.

API path: `/public/v1/rag/search`

#### RagCollectionDeleteSuccess

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"description"` | Value supplied for `description` in the `RagCollectionCreateRequest` request. |
| `"maxChunkSize"` | Value supplied for `maxChunkSize` in the `RagCollectionCreateRequest` request. |
| `"maxChunksPerFile"` | Value supplied for `maxChunksPerFile` in the `RagCollectionCreateRequest` request. |
| `"message"` |  |
| `"meta"` | Collection metadata. |
| `"name"` | Value supplied for `name` in the `RagCollectionCreateRequest` request. |
| `"requestId"` |  |
| `"success"` |  |

Operations: Create, Load, Remove.

API path: `/api/v1/catalog/rag/collections`

#### RagCollectionDocumentDeleteSuccess

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v1/catalog/rag/collections/{ragId}/documents/{fileName}`

#### RagCollectionDocumentListSuccess

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"message"` |  |
| `"meta"` | Collection metadata. |
| `"requestId"` |  |
| `"success"` |  |

Operations: Load.

API path: `/api/v1/catalog/rag/collections/{ragId}/documents`

#### RagCollectionDocumentTokenEstimateSuccess

| Field | Description |
| --- | --- |
| `"estimatedCost"` |  |
| `"fileCount"` |  |
| `"fileDetails"` |  |
| `"processingTime"` |  |
| `"raw"` |  |
| `"totalTokens"` |  |

Operations: Create.

API path: `/api/v1/catalog/rag/documents/estimate`

#### RagCollectionDocumentUploadStatusSuccess

| Field | Description |
| --- | --- |
| `"currentFile"` |  |
| `"errors"` |  |
| `"processedFiles"` |  |
| `"progress"` |  |
| `"raw"` |  |
| `"results"` |  |
| `"status"` |  |
| `"totalCost"` |  |
| `"totalFiles"` |  |
| `"totalTokens"` |  |
| `"uploadId"` |  |

Operations: Load.

API path: `/api/v1/catalog/rag/uploads/{uploadId}`

#### RagCollectionDocumentUploadSuccess

| Field | Description |
| --- | --- |
| `"data"` | Result returned after starting a RAG document upload. |
| `"message"` |  |
| `"meta"` | Collection metadata. |
| `"requestId"` |  |
| `"success"` |  |

Operations: Create.

API path: `/api/v1/catalog/rag/collections/{ragId}/documents`

#### RuntimeBinding

| Field | Description |
| --- | --- |
| `"assistantApiKey"` |  |
| `"assistantId"` |  |
| `"runtimeBindings"` |  |

Operations: Load.

API path: `/api/v1/catalog/assistants/{assistantId}/runtime-bindings`

#### Tts

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"message"` |  |
| `"meta"` | Collection metadata. |
| `"requestId"` |  |
| `"success"` |  |

Operations: Load.

API path: `/api/v1/catalog/providers/tts`

#### TtsVoiceListSuccess

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"message"` |  |
| `"meta"` | Collection metadata. |
| `"requestId"` |  |
| `"success"` |  |

Operations: Load.

API path: `/api/v1/catalog/assistants/{assistantId}/tts/voices`

#### Voice

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"message"` |  |
| `"meta"` | Collection metadata. |
| `"requestId"` |  |
| `"success"` |  |

Operations: Load.

API path: `/api/v1/catalog/assistants/{assistantId}/audio-to-audio/voices`

#### VoiceLlm

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"message"` |  |
| `"meta"` | Collection metadata. |
| `"requestId"` |  |
| `"success"` |  |

Operations: Load.

API path: `/api/v1/catalog/providers/voice-llm`

#### VoiceLlmModelListSuccess

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"message"` |  |
| `"meta"` | Collection metadata. |
| `"requestId"` |  |
| `"success"` |  |

Operations: Load.

API path: `/api/v1/catalog/audio-to-audio/models`



## Entities


### AccountAllowedIpsSuccess

Create an instance: `accountAllowedIpsSuccess := client.AccountAllowedIpsSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `addIps` | `[]any` | Value supplied for `addIps` in the `AccountAllowedIpsUpdateRequest` request. |
| `allowedIps` | `[]any` | Value supplied for `allowedIps` in the `AccountAllowedIpsUpdateRequest` request. |
| `data` | `map[string]any` |  |
| `deleteIps` | `[]any` | Value supplied for `deleteIps` in the `AccountAllowedIpsUpdateRequest` request. |
| `message` | `string` |  |
| `meta` | `map[string]any` |  |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
accountAllowedIpsSuccess, err := client.AccountAllowedIpsSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(accountAllowedIpsSuccess) // the loaded record
```


### AccountAvailablePluginsSuccess

Create an instance: `accountAvailablePluginsSuccess := client.AccountAvailablePluginsSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `message` | `string` |  |
| `meta` | `map[string]any` |  |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
accountAvailablePluginsSuccess, err := client.AccountAvailablePluginsSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(accountAvailablePluginsSuccess) // the loaded record
```


### AccountCallLimitsSuccess

Create an instance: `accountCallLimitsSuccess := client.AccountCallLimitsSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistants` | `[]any` | Value supplied for `assistants` in the `AccountCallLimitsUpdateRequest` request. |
| `data` | `map[string]any` |  |
| `message` | `string` |  |
| `meta` | `map[string]any` |  |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
accountCallLimitsSuccess, err := client.AccountCallLimitsSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(accountCallLimitsSuccess) // the loaded record
```


### AccountNumberRoutingSuccess

Create an instance: `accountNumberRoutingSuccess := client.AccountNumberRoutingSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `demoNumbers` | `[]any` | Value supplied for `demoNumbers` in the `AccountNumberRoutingUpdateRequest` request. |
| `message` | `string` |  |
| `meta` | `map[string]any` |  |
| `purchasedNumbers` | `[]any` | Value supplied for `purchasedNumbers` in the `AccountNumberRoutingUpdateRequest` request. |
| `requestId` | `string` |  |
| `success` | `bool` |  |
| `userNumbers` | `[]any` | Value supplied for `userNumbers` in the `AccountNumberRoutingUpdateRequest` request. |

#### Example: Load

```go
accountNumberRoutingSuccess, err := client.AccountNumberRoutingSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(accountNumberRoutingSuccess) // the loaded record
```


### AccountPluginConfigurationSuccess

Create an instance: `accountPluginConfigurationSuccess := client.AccountPluginConfigurationSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `map[string]any` | Configuration contract and current values for one plugin instance. |
| `instanceName` | `string` | Value supplied for `instanceName` in the `AccountPluginConfigurationUpdateRequest` request. |
| `instance_name` | `string` | Legacy alias of `instanceName`. |
| `pluginName` | `string` | Value supplied for `pluginName` in the `AccountPluginConfigurationUpdateRequest` request. |
| `plugin_name` | `string` | Legacy alias of `pluginName`. |

#### Example: Load

```go
accountPluginConfigurationSuccess, err := client.AccountPluginConfigurationSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(accountPluginConfigurationSuccess) // the loaded record
```


### AccountPluginInstanceSuccess

Create an instance: `accountPluginInstanceSuccess := client.AccountPluginInstanceSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `map[string]any` | Current lifecycle information for one purchased plugin instance. |
| `data` | `map[string]any` |  |
| `instanceName` | `string` | Value supplied for `instanceName` in the `AccountPluginPurchaseRequest` request. |
| `instance_name` | `string` | Legacy alias of `instanceName`. |
| `message` | `string` |  |
| `meta` | `map[string]any` |  |
| `newInstanceName` | `string` | Value supplied for `newInstanceName` in the `AccountPluginInstanceByIdUpdateRequest` request. |
| `new_instance_name` | `string` | Legacy alias of `newInstanceName`. |
| `pluginName` | `string` | Value supplied for `pluginName` in the `AccountPluginPurchaseRequest` request. |
| `plugin_name` | `string` | Legacy alias of `pluginName`. |
| `requestId` | `string` |  |
| `status` | `string` | Value supplied for `status` in the `AccountPluginInstanceUpdateRequest` request. |
| `success` | `bool` |  |

#### Example: Load

```go
accountPluginInstanceSuccess, err := client.AccountPluginInstanceSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(accountPluginInstanceSuccess) // the loaded record
```

#### Example: Create

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


### AccountPluginPurchaseSuccess

Create an instance: `accountPluginPurchaseSuccess := client.AccountPluginPurchaseSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `map[string]any` | Result of a plugin purchase, including charged prices and created instance data. |
| `instanceName` | `string` | Value supplied for `instanceName` in the `AccountPluginPurchaseRequest` request. |
| `instance_name` | `string` | Legacy alias of `instanceName`. |
| `pluginName` | `string` | Value supplied for `pluginName` in the `AccountPluginPurchaseRequest` request. |
| `plugin_name` | `string` | Legacy alias of `pluginName`. |


### AnalyticsCallsOutboundSuccess

Create an instance: `analyticsCallsOutboundSuccess := client.AnalyticsCallsOutboundSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `message` | `string` |  |
| `meta` | `map[string]any` |  |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
analyticsCallsOutboundSuccess, err := client.AnalyticsCallsOutboundSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(analyticsCallsOutboundSuccess) // the loaded record
```


### AnalyticsCallsSuccess

Create an instance: `analyticsCallsSuccess := client.AnalyticsCallsSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `message` | `string` |  |
| `meta` | `map[string]any` |  |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
analyticsCallsSuccess, err := client.AnalyticsCallsSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(analyticsCallsSuccess) // the loaded record
```


### AnalyticsPostCallSuccess

Create an instance: `analyticsPostCallSuccess := client.AnalyticsPostCallSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `message` | `string` |  |
| `meta` | `map[string]any` |  |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
analyticsPostCallSuccess, err := client.AnalyticsPostCallSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(analyticsPostCallSuccess) // the loaded record
```


### AnalyticsPreCallSuccess

Create an instance: `analyticsPreCallSuccess := client.AnalyticsPreCallSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `message` | `string` |  |
| `meta` | `map[string]any` |  |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
analyticsPreCallSuccess, err := client.AnalyticsPreCallSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(analyticsPreCallSuccess) // the loaded record
```


### AnalyticsRagSearchSuccess

Create an instance: `analyticsRagSearchSuccess := client.AnalyticsRagSearchSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `message` | `string` |  |
| `meta` | `map[string]any` |  |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
analyticsRagSearchSuccess, err := client.AnalyticsRagSearchSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(analyticsRagSearchSuccess) // the loaded record
```


### AnalyticsRagSuccess

Create an instance: `analyticsRagSuccess := client.AnalyticsRagSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `message` | `string` |  |
| `meta` | `map[string]any` |  |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
analyticsRagSuccess, err := client.AnalyticsRagSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(analyticsRagSuccess) // the loaded record
```


### AnalyticsRechargesSuccess

Create an instance: `analyticsRechargesSuccess := client.AnalyticsRechargesSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `message` | `string` |  |
| `meta` | `map[string]any` |  |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
analyticsRechargesSuccess, err := client.AnalyticsRechargesSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(analyticsRechargesSuccess) // the loaded record
```


### AnalyticsSmsSuccess

Create an instance: `analyticsSmsSuccess := client.AnalyticsSmsSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `message` | `string` |  |
| `meta` | `map[string]any` |  |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
analyticsSmsSuccess, err := client.AnalyticsSmsSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(analyticsSmsSuccess) // the loaded record
```


### AnalyticsToolResponsesSuccess

Create an instance: `analyticsToolResponsesSuccess := client.AnalyticsToolResponsesSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `message` | `string` |  |
| `meta` | `map[string]any` |  |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
analyticsToolResponsesSuccess, err := client.AnalyticsToolResponsesSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(analyticsToolResponsesSuccess) // the loaded record
```


### Asr

Create an instance: `asr := client.Asr(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `message` | `string` |  |
| `meta` | `map[string]any` | Collection metadata. |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
asr, err := client.Asr(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(asr) // the loaded record
```


### AsrModelListSuccess

Create an instance: `asrModelListSuccess := client.AsrModelListSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `message` | `string` |  |
| `meta` | `map[string]any` | Collection metadata. |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
asrModelListSuccess, err := client.AsrModelListSuccess(nil).Load(map[string]any{"assistant_id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(asrModelListSuccess) // the loaded record
```


### Assistant

Create an instance: `assistant := client.Assistant(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistant` | `any` | Assistant detail response, including the legacy assistant API key during the v1 compatibility period. |
| `audioToAudio` | `any` | Initial audio-to-audio configuration, used when applicable to the selected mode. |
| `data` | `map[string]any` |  |
| `description` | `string` | Functional description of the assistant. |
| `firstMessage` | `map[string]any` | Partial update of the assistant's first-message configuration. |
| `id` | `string` |  |
| `message` | `string` |  |
| `meta` | `map[string]any` | Collection metadata. |
| `metadata` | `map[string]any` | Free-form metadata to store with the assistant. |
| `mode` | `string` | Runtime mode to use when creating the assistant. |
| `name` | `string` | Assistant name. |
| `network` | `map[string]any` | Network settings to update on the assistant. |
| `numbers` | `map[string]any` | Replacement values for assistant number lists when supplied. |
| `requestId` | `string` |  |
| `settings` | `map[string]any` | High-level assistant settings to update. |
| `status` | `string` | New lifecycle status for the assistant. |
| `success` | `bool` |  |
| `voiceToVoice` | `map[string]any` | Legacy alias of `audioToAudio`. |

#### Example: Load

```go
assistant, err := client.Assistant(nil).Load(map[string]any{"id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(assistant) // the loaded record
```

#### Example: Create

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


### AssistantAdvancedSettingsConfigurationSuccess

Create an instance: `assistantAdvancedSettingsConfigurationSuccess := client.AssistantAdvancedSettingsConfigurationSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
assistantAdvancedSettingsConfigurationSuccess, err := client.AssistantAdvancedSettingsConfigurationSuccess(nil).Load(map[string]any{"id": "assistant_advanced_settings_configuration_success_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(assistantAdvancedSettingsConfigurationSuccess) // the loaded record
```


### AssistantAdvancedSettingsRuntimeUpdateSuccess

Create an instance: `assistantAdvancedSettingsRuntimeUpdateSuccess := client.AssistantAdvancedSettingsRuntimeUpdateSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistantApiKey` | `string` |  |
| `assistantId` | `string` |  |
| `configuration` | `map[string]any` |  |
| `freqPenalty` | `float64` | Value supplied for `freqPenalty` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `maxTokens` | `int` | Value supplied for `maxTokens` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `presencePenalty` | `float64` | Value supplied for `presencePenalty` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `service` | `string` |  |
| `stopSequences` | `[]any` | Value supplied for `stopSequences` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `temperature` | `float64` | Value supplied for `temperature` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `topK` | `int` | Value supplied for `topK` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |
| `topP` | `float64` | Value supplied for `topP` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request. |


### AssistantAsrRuntimeUpdateSuccess

Create an instance: `assistantAsrRuntimeUpdateSuccess := client.AssistantAsrRuntimeUpdateSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiKey` | `string` | API key of the customer's ASR provider. |
| `assistantApiKey` | `string` |  |
| `assistantId` | `string` |  |
| `configuration` | `map[string]any` | Actual resulting ASR runtime configuration after merge and backend resolution. |
| `engineCode` | `string` | ASR engine/provider code. |
| `providerWalletId` | `int` | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `runtimeBinding` | `map[string]any` |  |
| `service` | `string` |  |
| `sourceMode` | `string` | Runtime sourcing mode. |


### AssistantConversationWebhookRuntimeSuccess

Create an instance: `assistantConversationWebhookRuntimeSuccess := client.AssistantConversationWebhookRuntimeSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authName` | `string` | Name of the saved authentication to apply to the request |
| `configuration` | `map[string]any` |  |
| `enabled` | `bool` | Enable or disable sending the conversation to the webhook |
| `url` | `string` | Endpoint that receives the POST at the end of the call |

#### Example: Load

```go
assistantConversationWebhookRuntimeSuccess, err := client.AssistantConversationWebhookRuntimeSuccess(nil).Load(map[string]any{"assistant_id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(assistantConversationWebhookRuntimeSuccess) // the loaded record
```


### AssistantDtmfConfigurationSuccess

Create an instance: `assistantDtmfConfigurationSuccess := client.AssistantDtmfConfigurationSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
assistantDtmfConfigurationSuccess, err := client.AssistantDtmfConfigurationSuccess(nil).Load(map[string]any{"id": "assistant_dtmf_configuration_success_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(assistantDtmfConfigurationSuccess) // the loaded record
```


### AssistantDtmfRuntimeUpdateSuccess

Create an instance: `assistantDtmfRuntimeUpdateSuccess := client.AssistantDtmfRuntimeUpdateSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acceptTimeout` | `int` | Value supplied for `acceptTimeout` in the `AssistantDtmfRuntimeUpdateRequest` request. |
| `assistantApiKey` | `string` |  |
| `assistantId` | `string` |  |
| `configuration` | `map[string]any` |  |
| `enabled` | `bool` | Enable or disable DTMF reception. |
| `maxLength` | `int` | Value supplied for `maxLength` in the `AssistantDtmfRuntimeUpdateRequest` request. |
| `minLength` | `int` | Value supplied for `minLength` in the `AssistantDtmfRuntimeUpdateRequest` request. |
| `playEnabled` | `bool` | Enable or disable DTMF sending during the call. |
| `service` | `string` |  |
| `terminationChars` | `string` | Value supplied for `terminationChars` in the `AssistantDtmfRuntimeUpdateRequest` request. |


### AssistantHangupConfigurationSuccess

Create an instance: `assistantHangupConfigurationSuccess := client.AssistantHangupConfigurationSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
assistantHangupConfigurationSuccess, err := client.AssistantHangupConfigurationSuccess(nil).Load(map[string]any{"id": "assistant_hangup_configuration_success_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(assistantHangupConfigurationSuccess) // the loaded record
```


### AssistantHangupRuntimeUpdateSuccess

Create an instance: `assistantHangupRuntimeUpdateSuccess := client.AssistantHangupRuntimeUpdateSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistantApiKey` | `string` |  |
| `assistantId` | `string` |  |
| `availableAgents` | `[]any` | Value supplied for `availableAgents` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `configuration` | `map[string]any` |  |
| `enableHangup` | `bool` | Value supplied for `enableHangup` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `enableRedirect` | `bool` | Value supplied for `enableRedirect` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `enableTransferAgent` | `bool` | Value supplied for `enableTransferAgent` in the `AssistantHangupRuntimeUpdateRequest` request. |
| `service` | `string` |  |
| `transferAgentNotificationText` | `string` | Value supplied for `transferAgentNotificationText` in the `AssistantHangupRuntimeUpdateRequest` request. |


### AssistantHangupSchemaRuntimeSuccess

Create an instance: `assistantHangupSchemaRuntimeSuccess := client.AssistantHangupSchemaRuntimeSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `map[string]any` |  |
| `hangupUrl` | `string` | Hangup webhook URL (null to remove) |
| `schema` | `[]any` | Defining body fields (overrides the current schema) |

#### Example: Load

```go
assistantHangupSchemaRuntimeSuccess, err := client.AssistantHangupSchemaRuntimeSuccess(nil).Load(map[string]any{"assistant_id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(assistantHangupSchemaRuntimeSuccess) // the loaded record
```


### AssistantKnowledgeSuccess

Create an instance: `assistantKnowledgeSuccess := client.AssistantKnowledgeSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
assistantKnowledgeSuccess, err := client.AssistantKnowledgeSuccess(nil).Load(map[string]any{"id": "assistant_knowledge_success_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(assistantKnowledgeSuccess) // the loaded record
```


### AssistantLlmRuntimeUpdateSuccess

Create an instance: `assistantLlmRuntimeUpdateSuccess := client.AssistantLlmRuntimeUpdateSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiKey` | `string` | API key of the customer's LLM provider. |
| `assistantApiKey` | `string` |  |
| `assistantId` | `string` |  |
| `baseUrl` | `string` | Base custom URL of the LLM provider. |
| `configuration` | `map[string]any` | Actual resulting LLM runtime configuration after merge and backend resolution. |
| `engineCode` | `string` | LLM engine/provider code. |
| `modelCode` | `string` | LLM model code. |
| `providerWalletId` | `int` | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `runtimeBinding` | `map[string]any` |  |
| `service` | `string` |  |
| `sourceMode` | `string` | Runtime sourcing mode. |


### AssistantNumberRoutingCatalogSuccess

Create an instance: `assistantNumberRoutingCatalogSuccess := client.AssistantNumberRoutingCatalogSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
assistantNumberRoutingCatalogSuccess, err := client.AssistantNumberRoutingCatalogSuccess(nil).Load(map[string]any{"id": "assistant_number_routing_catalog_success_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(assistantNumberRoutingCatalogSuccess) // the loaded record
```


### AssistantNumberRoutingRuntimeSuccess

Create an instance: `assistantNumberRoutingRuntimeSuccess := client.AssistantNumberRoutingRuntimeSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `map[string]any` |  |
| `demoNumbers` | `[]any` | Demo numbers to route to this assistant |
| `purchasedNumbers` | `[]any` | Purchased numbers to route to this assistant |
| `userNumbers` | `[]any` | Customer's own numbers (own PBX) to route to this assistant |


### AssistantPostcallMcpRuntimeSuccess

Create an instance: `assistantPostcallMcpRuntimeSuccess := client.AssistantPostcallMcpRuntimeSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `map[string]any` | General configuration of the post-call phase. |
| `enabled` | `bool` | Enable or disable the whole post-call phase without losing its configuration. |
| `globalPrompt` | `string` | Global post-call prompt. |
| `modelConfig` | `map[string]any` | Model configuration used by the MCP phase. |
| `tools` | `[]any` | Complete list of post-call tools to set up. |

#### Example: Load

```go
assistantPostcallMcpRuntimeSuccess, err := client.AssistantPostcallMcpRuntimeSuccess(nil).Load(map[string]any{"assistant_id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(assistantPostcallMcpRuntimeSuccess) // the loaded record
```


### AssistantPrecallMcpRuntimeSuccess

Create an instance: `assistantPrecallMcpRuntimeSuccess := client.AssistantPrecallMcpRuntimeSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `map[string]any` | General configuration of the pre-call phase. |
| `earlyTerminationEnabled` | `bool` | Enable/disable early termination. |
| `enabled` | `bool` | Enable or disable the whole pre-call phase without losing its configuration. |
| `globalPrompt` | `string` | Global pre-call prompt. |
| `modelConfig` | `map[string]any` | Model configuration used by the MCP phase. |
| `outputSchema` | `map[string]any` | JSON schema of the expected pre-call output, as an alternative to `outputVariables`. |
| `outputVariables` | `[]any` | Variables to extract from the pre-call result. |
| `terminationMessage` | `string` | Early termination audio message. |
| `tools` | `[]any` | Complete list of pre-call tools to set (replaces the current ones). |
| `voiceConfig` | `map[string]any` | Voice/TTS configuration used to generate pre-call hold and termination audio. |
| `waitingAudioNonInterruptible` | `bool` | `true` plays all on-hold audio, `false` allows the customer to speak over the audio. |
| `waitingAudioText` | `string` | Audio text on hold. |

#### Example: Load

```go
assistantPrecallMcpRuntimeSuccess, err := client.AssistantPrecallMcpRuntimeSuccess(nil).Load(map[string]any{"assistant_id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(assistantPrecallMcpRuntimeSuccess) // the loaded record
```


### AssistantPrecallValidationRuntimeSuccess

Create an instance: `assistantPrecallValidationRuntimeSuccess := client.AssistantPrecallValidationRuntimeSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authPassword` | `string` | Basic auth password (null to remove it) |
| `authToken` | `string` | Bearer token or API key (null to remove it) |
| `authType` | `string` |  |
| `authUsername` | `string` | Value supplied for `authUsername` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `configuration` | `any` | null if no configuration is yet present |
| `headersJson` | `map[string]any` | Value supplied for `headersJson` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `isActive` | `bool` | Value supplied for `isActive` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `method` | `string` |  |
| `name` | `string` | Value supplied for `name` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `numberLocation` | `string` | Where to insert the calling number in the HTTP request: - `query` — added as a query string (e.g. |
| `numberParamName` | `string` | Value supplied for `numberParamName` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `timeoutMs` | `int` | Value supplied for `timeoutMs` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |
| `url` | `string` | Value supplied for `url` in the `AssistantPrecallValidationRuntimeUpdateRequest` request. |

#### Example: Load

```go
assistantPrecallValidationRuntimeSuccess, err := client.AssistantPrecallValidationRuntimeSuccess(nil).Load(map[string]any{"assistant_id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(assistantPrecallValidationRuntimeSuccess) // the loaded record
```


### AssistantPromptSuccess

Create an instance: `assistantPromptSuccess := client.AssistantPromptSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
assistantPromptSuccess, err := client.AssistantPromptSuccess(nil).Load(map[string]any{"id": "assistant_prompt_success_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(assistantPromptSuccess) // the loaded record
```


### AssistantRagConfigurationSuccess

Create an instance: `assistantRagConfigurationSuccess := client.AssistantRagConfigurationSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `bool` |  |
| `kbPrompt` | `string` |  |
| `name` | `string` |  |
| `returnedChunks` | `int` |  |

#### Example: Load

```go
assistantRagConfigurationSuccess, err := client.AssistantRagConfigurationSuccess(nil).Load(map[string]any{"assistant_id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(assistantRagConfigurationSuccess) // the loaded record
```


### AssistantRagRuntimeUpdateSuccess

Create an instance: `assistantRagRuntimeUpdateSuccess := client.AssistantRagRuntimeUpdateSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistantApiKey` | `string` |  |
| `assistantId` | `string` |  |
| `configuration` | `map[string]any` | RAG configuration resulting after application merge. |
| `enabled` | `bool` | Enable or disable RAG for the assistant. |
| `kbPrompt` | `string` | Assistant knowledge base instructions. |
| `name` | `string` | Name of the RAG collection to associate. |
| `returnedChunks` | `int` | Number of relevant fragments to return from the knowledge base. |
| `service` | `string` |  |


### AssistantSaveConversationRuntimeSuccess

Create an instance: `assistantSaveConversationRuntimeSuccess := client.AssistantSaveConversationRuntimeSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `map[string]any` |  |
| `emails` | `string` | One or more recipient emails separated by commas (e.g. |
| `enabled` | `bool` | Enable or disable sending of the conversation summary via email |
| `smtpInstanceName` | `string` | Name of the SMTP plugin instance to use for sending |
| `smtp_instance_name` | `string` | Legacy alias of `smtpInstanceName`. |

#### Example: Load

```go
assistantSaveConversationRuntimeSuccess, err := client.AssistantSaveConversationRuntimeSuccess(nil).Load(map[string]any{"assistant_id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(assistantSaveConversationRuntimeSuccess) // the loaded record
```


### AssistantSettingsConfigurationSuccess

Create an instance: `assistantSettingsConfigurationSuccess := client.AssistantSettingsConfigurationSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
assistantSettingsConfigurationSuccess, err := client.AssistantSettingsConfigurationSuccess(nil).Load(map[string]any{"id": "assistant_settings_configuration_success_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(assistantSettingsConfigurationSuccess) // the loaded record
```


### AssistantSettingsRuntimeUpdateSuccess

Create an instance: `assistantSettingsRuntimeUpdateSuccess := client.AssistantSettingsRuntimeUpdateSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asrInitialDelayMs` | `int` | Value supplied for `asrInitialDelayMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `asrSilenceMs` | `int` | Value supplied for `asrSilenceMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `assistantApiKey` | `string` |  |
| `assistantId` | `string` |  |
| `callPermissions` | `map[string]any` | Value supplied for `callPermissions` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `configuration` | `map[string]any` |  |
| `dynamicTimeoutMs` | `int` | Value supplied for `dynamicTimeoutMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `filler` | `map[string]any` | Value supplied for `filler` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `maxResponseLength` | `int` | Value supplied for `maxResponseLength` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `reprompt` | `map[string]any` | Value supplied for `reprompt` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `service` | `string` |  |
| `truncateInitialAudio` | `bool` | Value supplied for `truncateInitialAudio` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `ttsInterruptionInConversation` | `bool` | Value supplied for `ttsInterruptionInConversation` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `vad` | `bool` | Value supplied for `vad` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `vadMinVoiceMs` | `int` | Value supplied for `vadMinVoiceMs` in the `AssistantSettingsRuntimeUpdateRequest` request. |
| `vadThreshold` | `float64` | Value supplied for `vadThreshold` in the `AssistantSettingsRuntimeUpdateRequest` request. |


### AssistantToolsRuntimeUpdateSuccess

Create an instance: `assistantToolsRuntimeUpdateSuccess := client.AssistantToolsRuntimeUpdateSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistantApiKey` | `string` |  |
| `assistantId` | `string` |  |
| `configuration` | `map[string]any` | Resulting tool configuration after the update. |
| `service` | `string` |  |


### AssistantTtsRuntimeUpdateSuccess

Create an instance: `assistantTtsRuntimeUpdateSuccess := client.AssistantTtsRuntimeUpdateSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiKey` | `string` | API key of the customer's TTS provider. |
| `assistantApiKey` | `string` |  |
| `assistantId` | `string` |  |
| `configuration` | `map[string]any` | Actual resulting TTS runtime configuration after merge and backend resolution. |
| `engineCode` | `string` | TTS engine/provider code. |
| `providerWalletId` | `int` | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `region` | `string` | Region/provider area requested by some engine customers, in particular Azure. |
| `runtimeBinding` | `map[string]any` |  |
| `service` | `string` |  |
| `sourceMode` | `string` | Runtime sourcing mode. |
| `voiceCode` | `string` | TTS voice code. |


### AssistantVoiceToVoiceRuntimeUpdateSuccess

Create an instance: `assistantVoiceToVoiceRuntimeUpdateSuccess := client.AssistantVoiceToVoiceRuntimeUpdateSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiKey` | `string` | Customer key provider API. |
| `assistantApiKey` | `string` |  |
| `assistantId` | `string` |  |
| `baseUrl` | `string` | Base custom URL. |
| `configuration` | `map[string]any` |  |
| `engineCode` | `string` | Provider/engine voice LLM. |
| `modelCode` | `string` | LLM voice model code. |
| `prompt` | `string` | Main prompt of the audio-to-audio runtime. |
| `providerWalletId` | `int` | Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text. |
| `service` | `string` |  |
| `voiceCode` | `string` | Model item code. |


### AssociatedRuntimeToolListSuccess

Create an instance: `associatedRuntimeToolListSuccess := client.AssociatedRuntimeToolListSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `message` | `string` |  |
| `meta` | `map[string]any` |  |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
associatedRuntimeToolListSuccess, err := client.AssociatedRuntimeToolListSuccess(nil).Load(map[string]any{"assistant_id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(associatedRuntimeToolListSuccess) // the loaded record
```


### AudioToAudio

Create an instance: `audioToAudio := client.AudioToAudio(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `message` | `string` |  |
| `meta` | `map[string]any` | Collection metadata. |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
audioToAudio, err := client.AudioToAudio(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(audioToAudio) // the loaded record
```


### AvailableRuntimeToolListSuccess

Create an instance: `availableRuntimeToolListSuccess := client.AvailableRuntimeToolListSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `message` | `string` |  |
| `meta` | `map[string]any` |  |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
availableRuntimeToolListSuccess, err := client.AvailableRuntimeToolListSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(availableRuntimeToolListSuccess) // the loaded record
```


### FillerPhraseList

Create an instance: `fillerPhraseList := client.FillerPhraseList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associations` | `map[string]any` |  |
| `data` | `map[string]any` |  |
| `id` | `string` | Value supplied for `id` in the `FillerPhraseListCreateRequest` request. |
| `list` | `map[string]any` |  |
| `message` | `string` |  |
| `meta` | `map[string]any` |  |
| `name` | `string` | Value supplied for `name` in the `FillerPhraseListCreateRequest` request. |
| `phrases` | `[]any` | Value supplied for `phrases` in the `FillerPhraseListCreateRequest` request. |
| `requestId` | `string` |  |
| `success` | `bool` |  |
| `toolListIds` | `[]any` |  |
| `waitingListIds` | `[]any` |  |

#### Example: Load

```go
fillerPhraseList, err := client.FillerPhraseList(nil).Load(map[string]any{"id": "filler_phrase_list_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(fillerPhraseList) // the loaded record
```

#### Example: Create

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


### Health

Create an instance: `health := client.Health(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataSource` | `string` |  |
| `service` | `string` |  |
| `status` | `string` |  |

#### Example: Load

```go
health, err := client.Health(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(health) // the loaded record
```


### Knowledge

Create an instance: `knowledge := client.Knowledge(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `defaultPostAction` | `string` | Defaults to `ask_if_needs_more` when omitted |
| `defaultResponse` | `string` | Default answer used when a trigger has no specific response. |
| `id` | `string` |  |
| `knowledge` | `map[string]any` | A knowledge item: a set of recognised requests with their answers, folded into the prompt of every assistant it is associated with. |
| `message` | `string` |  |
| `meta` | `map[string]any` |  |
| `requestId` | `string` |  |
| `rules` | `string` | Optional constraints applied to the whole knowledge item. |
| `success` | `bool` |  |
| `title` | `string` | Human-readable title of the new knowledge item. |
| `triggers` | `[]any` | Initial trigger list for the knowledge item. |

#### Example: Load

```go
knowledge, err := client.Knowledge(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(knowledge) // the loaded record
```

#### Example: Create

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


### Llm

Create an instance: `llm := client.Llm(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `message` | `string` |  |
| `meta` | `map[string]any` | Collection metadata. |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
llm, err := client.Llm(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(llm) // the loaded record
```


### LlmModelListSuccess

Create an instance: `llmModelListSuccess := client.LlmModelListSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `message` | `string` |  |
| `meta` | `map[string]any` | Collection metadata. |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
llmModelListSuccess, err := client.LlmModelListSuccess(nil).Load(map[string]any{"assistant_id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(llmModelListSuccess) // the loaded record
```


### OutboundCall

Create an instance: `outboundCall := client.OutboundCall(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `AddPrompt` | `string` | Legacy alias of `addPrompt`. |
| `addPrompt` | `string` | Optional additional prompt to customize assistant behavior. |
| `apiKey_assistente` | `string` | Legacy alias of `assistantApiKey`. |
| `assistantApiKey` | `string` | API key of the AI assistant that will talk to the callee. |
| `callId` | `string` | Technical call identifier, if already available when the response is returned. |
| `callResultUrl` | `string` | Optional HTTPS URL that AI4Call calls with the outcome notification. |
| `callbackConfigured` | `bool` | Indicates whether the callback URL for the call outcome was configured. |
| `callerId` | `string` | Caller number displayed in E.164 format. |
| `dst` | `string` | Recipient number in E.164 format, example +3902XXXXXXXX. |
| `internalId` | `string` | UUID generated by AI4Call to correlate the outbound request, callback and final dial-status lookup. |
| `status` | `string` | Initial status of the outbound request. |
| `url_esito_chiamata` | `any` | Legacy alias of `callResultUrl`. |

#### Example: Create

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


### OutboundCallAcceptedSuccess

Create an instance: `outboundCallAcceptedSuccess := client.OutboundCallAcceptedSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `AddPrompt` | `string` | Legacy alias of `addPrompt`. |
| `addPrompt` | `string` | Optional additional prompt to customize assistant behavior. |
| `apiKey_assistente` | `string` | Legacy alias of `assistantApiKey`. |
| `assistantApiKey` | `string` | API key of the AI assistant that will talk to the callee. |
| `callId` | `string` | Technical call identifier, if already available when the response is returned. |
| `callResultUrl` | `string` | Optional HTTPS URL that AI4Call calls with the outcome notification. |
| `callbackConfigured` | `bool` | Indicates whether the callback URL for the call outcome was configured. |
| `callerId` | `string` | Calling number displayed in the format required by the PBX, E.164 +3902XXXXXXXX or local 02XXXXXXXX. |
| `dst` | `string` | Recipient number in the format required by the PBX, E.164 +3902XXXXXXXX or local 02XXXXXXXX. |
| `internalId` | `string` | UUID generated by AI4Call to correlate the outbound request, callback and final dial-status lookup. |
| `ipPbx` | `string` | Public IP of the PBX, must be one of the authorized public IPs. |
| `ip_pbx` | `string` | Legacy alias of `ipPbx`. |
| `method_uac` | `bool` | Selects the registered UAC mode. |
| `sipPort` | `string` | SIP port of the PBX, standard 5060. |
| `sip_port` | `string` | Legacy alias of `sipPort`. |
| `status` | `string` | Initial status of the outbound request. |
| `url_esito_chiamata` | `any` | Legacy alias of `callResultUrl`. |

#### Example: Create

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


### OutboundDialStatusPayload

Create an instance: `outboundDialStatusPayload := client.OutboundDialStatusPayload(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `billSec` | `int` | Billed duration in seconds. |
| `dialStatus` | `string` | Final dial result persisted in the outbound CDR. |
| `trafficCost` | `string` | Outbound traffic cost in EUR, expressed with six decimal places. |

#### Example: Load

```go
outboundDialStatusPayload, err := client.OutboundDialStatusPayload(nil).Load(map[string]any{"uuid": "uuid"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(outboundDialStatusPayload) // the loaded record
```


### PortalLoginSuccess

Create an instance: `portalLoginSuccess := client.PortalLoginSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client` | `map[string]any` | Customer profile returned after successful portal credential verification. |
| `email` | `string` | Portal customer email. |
| `portalApiKey` | `string` | Static portal API key associated with the customer account. |

#### Example: Create

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


### PreCall

Create an instance: `preCall := client.PreCall(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `map[string]any` |  |

#### Example: Load

```go
preCall, err := client.PreCall(nil).Load(map[string]any{"assistant_id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(preCall) // the loaded record
```


### ProviderWallet

Create an instance: `providerWallet := client.ProviderWallet(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `map[string]any` | Values of the fields declared by the catalog entry |
| `credential` | `map[string]any` | A credential saved by the customer. |
| `data` | `map[string]any` |  |
| `engine` | `string` | Engine code selected from the provider-wallet catalog. |
| `id` | `string` |  |
| `isActive` | `bool` | Whether the saved credential can be used by assistant runtimes. |
| `message` | `string` |  |
| `meta` | `map[string]any` |  |
| `name` | `string` | Customer-defined name for the saved credential. |
| `provider` | `string` | Provider code selected from the provider-wallet catalog. |
| `requestId` | `string` |  |
| `serviceType` | `string` | Service category selected from the provider-wallet catalog. |
| `success` | `bool` |  |

#### Example: Load

```go
providerWallet, err := client.ProviderWallet(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(providerWallet) // the loaded record
```

#### Example: Create

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


### ProviderWalletAssociationsSuccess

Create an instance: `providerWalletAssociationsSuccess := client.ProviderWalletAssociationsSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `message` | `string` |  |
| `meta` | `map[string]any` |  |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
providerWalletAssociationsSuccess, err := client.ProviderWalletAssociationsSuccess(nil).Load(map[string]any{"assistant_id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(providerWalletAssociationsSuccess) // the loaded record
```


### ProviderWalletCatalogSuccess

Create an instance: `providerWalletCatalogSuccess := client.ProviderWalletCatalogSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `message` | `string` |  |
| `meta` | `map[string]any` |  |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
providerWalletCatalogSuccess, err := client.ProviderWalletCatalogSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(providerWalletCatalogSuccess) // the loaded record
```


### PublicRagSearchSuccess

Create an instance: `publicRagSearchSuccess := client.PublicRagSearchSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` | Number of chunks returned by the search, up to the service limit of 4. |
| `query` | `string` | Normalized query text used for the search. |
| `rag_id` | `string` | Public RAG identifier supplied in the request and returned unchanged on success. |
| `results` | `[]any` | Chunks returned by the vector search. |

#### Example: Create

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


### RagCollectionDeleteSuccess

Create an instance: `ragCollectionDeleteSuccess := client.RagCollectionDeleteSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `description` | `string` | Value supplied for `description` in the `RagCollectionCreateRequest` request. |
| `maxChunkSize` | `int` | Value supplied for `maxChunkSize` in the `RagCollectionCreateRequest` request. |
| `maxChunksPerFile` | `int` | Value supplied for `maxChunksPerFile` in the `RagCollectionCreateRequest` request. |
| `message` | `string` |  |
| `meta` | `map[string]any` | Collection metadata. |
| `name` | `string` | Value supplied for `name` in the `RagCollectionCreateRequest` request. |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
ragCollectionDeleteSuccess, err := client.RagCollectionDeleteSuccess(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(ragCollectionDeleteSuccess) // the loaded record
```

#### Example: Create

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


### RagCollectionDocumentDeleteSuccess

Create an instance: `ragCollectionDocumentDeleteSuccess := client.RagCollectionDocumentDeleteSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### RagCollectionDocumentListSuccess

Create an instance: `ragCollectionDocumentListSuccess := client.RagCollectionDocumentListSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `message` | `string` |  |
| `meta` | `map[string]any` | Collection metadata. |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
ragCollectionDocumentListSuccess, err := client.RagCollectionDocumentListSuccess(nil).Load(map[string]any{"collection_id": "collection_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(ragCollectionDocumentListSuccess) // the loaded record
```


### RagCollectionDocumentTokenEstimateSuccess

Create an instance: `ragCollectionDocumentTokenEstimateSuccess := client.RagCollectionDocumentTokenEstimateSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `estimatedCost` | `float64` |  |
| `fileCount` | `int` |  |
| `fileDetails` | `[]any` |  |
| `processingTime` | `int` |  |
| `raw` | `map[string]any` |  |
| `totalTokens` | `int` |  |

#### Example: Create

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


### RagCollectionDocumentUploadStatusSuccess

Create an instance: `ragCollectionDocumentUploadStatusSuccess := client.RagCollectionDocumentUploadStatusSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `currentFile` | `string` |  |
| `errors` | `[]any` |  |
| `processedFiles` | `int` |  |
| `progress` | `float64` |  |
| `raw` | `map[string]any` |  |
| `results` | `[]any` |  |
| `status` | `string` |  |
| `totalCost` | `float64` |  |
| `totalFiles` | `int` |  |
| `totalTokens` | `int` |  |
| `uploadId` | `string` |  |

#### Example: Load

```go
ragCollectionDocumentUploadStatusSuccess, err := client.RagCollectionDocumentUploadStatusSuccess(nil).Load(map[string]any{"upload_id": "upload_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(ragCollectionDocumentUploadStatusSuccess) // the loaded record
```


### RagCollectionDocumentUploadSuccess

Create an instance: `ragCollectionDocumentUploadSuccess := client.RagCollectionDocumentUploadSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` | Result returned after starting a RAG document upload. |
| `message` | `string` |  |
| `meta` | `map[string]any` | Collection metadata. |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Create

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


### RuntimeBinding

Create an instance: `runtimeBinding := client.RuntimeBinding(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistantApiKey` | `string` |  |
| `assistantId` | `string` |  |
| `runtimeBindings` | `map[string]any` |  |

#### Example: Load

```go
runtimeBinding, err := client.RuntimeBinding(nil).Load(map[string]any{"assistant_id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(runtimeBinding) // the loaded record
```


### Tts

Create an instance: `tts := client.Tts(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `message` | `string` |  |
| `meta` | `map[string]any` | Collection metadata. |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
tts, err := client.Tts(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tts) // the loaded record
```


### TtsVoiceListSuccess

Create an instance: `ttsVoiceListSuccess := client.TtsVoiceListSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `message` | `string` |  |
| `meta` | `map[string]any` | Collection metadata. |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
ttsVoiceListSuccess, err := client.TtsVoiceListSuccess(nil).Load(map[string]any{"assistant_id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(ttsVoiceListSuccess) // the loaded record
```


### Voice

Create an instance: `voice := client.Voice(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `message` | `string` |  |
| `meta` | `map[string]any` | Collection metadata. |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
voice, err := client.Voice(nil).Load(map[string]any{"model_code": "model_code"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(voice) // the loaded record
```


### VoiceLlm

Create an instance: `voiceLlm := client.VoiceLlm(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `message` | `string` |  |
| `meta` | `map[string]any` | Collection metadata. |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
voiceLlm, err := client.VoiceLlm(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(voiceLlm) // the loaded record
```


### VoiceLlmModelListSuccess

Create an instance: `voiceLlmModelListSuccess := client.VoiceLlmModelListSuccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `message` | `string` |  |
| `meta` | `map[string]any` | Collection metadata. |
| `requestId` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
voiceLlmModelListSuccess, err := client.VoiceLlmModelListSuccess(nil).Load(map[string]any{"provider": "provider"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(voiceLlmModelListSuccess) // the loaded record
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/ai4call-sdk/go/
├── ai4call.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/ai4call-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
analyticsragsearchsuccess := client.AnalyticsRagSearchSuccess(nil)
analyticsragsearchsuccess.Load(nil, nil)

// analyticsragsearchsuccess.Data() now returns the analyticsragsearchsuccess data from the last load
// analyticsragsearchsuccess.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
