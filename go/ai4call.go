package voxgigai4callsdk

import (
	"github.com/voxgig-sdk/ai4call-sdk/go/core"
	"github.com/voxgig-sdk/ai4call-sdk/go/entity"
	"github.com/voxgig-sdk/ai4call-sdk/go/feature"
	_ "github.com/voxgig-sdk/ai4call-sdk/go/utility"
)

// Type aliases preserve external API.
type Ai4callSDK = core.Ai4callSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type Ai4callEntity = core.Ai4callEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type Ai4callError = core.Ai4callError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAccountAllowedIpsSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAccountAllowedIpsSuccessEntity(client, entopts)
	}
	core.NewAccountAvailablePluginsSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAccountAvailablePluginsSuccessEntity(client, entopts)
	}
	core.NewAccountCallLimitsSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAccountCallLimitsSuccessEntity(client, entopts)
	}
	core.NewAccountNumberRoutingSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAccountNumberRoutingSuccessEntity(client, entopts)
	}
	core.NewAccountPluginConfigurationSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAccountPluginConfigurationSuccessEntity(client, entopts)
	}
	core.NewAccountPluginInstanceSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAccountPluginInstanceSuccessEntity(client, entopts)
	}
	core.NewAccountPluginPurchaseSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAccountPluginPurchaseSuccessEntity(client, entopts)
	}
	core.NewAnalyticsCallsOutboundSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAnalyticsCallsOutboundSuccessEntity(client, entopts)
	}
	core.NewAnalyticsCallsSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAnalyticsCallsSuccessEntity(client, entopts)
	}
	core.NewAnalyticsPostCallSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAnalyticsPostCallSuccessEntity(client, entopts)
	}
	core.NewAnalyticsPreCallSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAnalyticsPreCallSuccessEntity(client, entopts)
	}
	core.NewAnalyticsRagSearchSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAnalyticsRagSearchSuccessEntity(client, entopts)
	}
	core.NewAnalyticsRagSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAnalyticsRagSuccessEntity(client, entopts)
	}
	core.NewAnalyticsRechargesSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAnalyticsRechargesSuccessEntity(client, entopts)
	}
	core.NewAnalyticsSmsSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAnalyticsSmsSuccessEntity(client, entopts)
	}
	core.NewAnalyticsToolResponsesSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAnalyticsToolResponsesSuccessEntity(client, entopts)
	}
	core.NewAsrEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAsrEntity(client, entopts)
	}
	core.NewAsrModelListSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAsrModelListSuccessEntity(client, entopts)
	}
	core.NewAssistantEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAssistantEntity(client, entopts)
	}
	core.NewAssistantAdvancedSettingsConfigurationSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAssistantAdvancedSettingsConfigurationSuccessEntity(client, entopts)
	}
	core.NewAssistantAdvancedSettingsRuntimeUpdateSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAssistantAdvancedSettingsRuntimeUpdateSuccessEntity(client, entopts)
	}
	core.NewAssistantAsrRuntimeUpdateSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAssistantAsrRuntimeUpdateSuccessEntity(client, entopts)
	}
	core.NewAssistantConversationWebhookRuntimeSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAssistantConversationWebhookRuntimeSuccessEntity(client, entopts)
	}
	core.NewAssistantDtmfConfigurationSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAssistantDtmfConfigurationSuccessEntity(client, entopts)
	}
	core.NewAssistantDtmfRuntimeUpdateSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAssistantDtmfRuntimeUpdateSuccessEntity(client, entopts)
	}
	core.NewAssistantHangupConfigurationSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAssistantHangupConfigurationSuccessEntity(client, entopts)
	}
	core.NewAssistantHangupRuntimeUpdateSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAssistantHangupRuntimeUpdateSuccessEntity(client, entopts)
	}
	core.NewAssistantHangupSchemaRuntimeSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAssistantHangupSchemaRuntimeSuccessEntity(client, entopts)
	}
	core.NewAssistantKnowledgeSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAssistantKnowledgeSuccessEntity(client, entopts)
	}
	core.NewAssistantLlmRuntimeUpdateSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAssistantLlmRuntimeUpdateSuccessEntity(client, entopts)
	}
	core.NewAssistantNumberRoutingCatalogSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAssistantNumberRoutingCatalogSuccessEntity(client, entopts)
	}
	core.NewAssistantNumberRoutingRuntimeSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAssistantNumberRoutingRuntimeSuccessEntity(client, entopts)
	}
	core.NewAssistantPostcallMcpRuntimeSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAssistantPostcallMcpRuntimeSuccessEntity(client, entopts)
	}
	core.NewAssistantPrecallMcpRuntimeSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAssistantPrecallMcpRuntimeSuccessEntity(client, entopts)
	}
	core.NewAssistantPrecallValidationRuntimeSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAssistantPrecallValidationRuntimeSuccessEntity(client, entopts)
	}
	core.NewAssistantPromptSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAssistantPromptSuccessEntity(client, entopts)
	}
	core.NewAssistantRagConfigurationSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAssistantRagConfigurationSuccessEntity(client, entopts)
	}
	core.NewAssistantRagRuntimeUpdateSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAssistantRagRuntimeUpdateSuccessEntity(client, entopts)
	}
	core.NewAssistantSaveConversationRuntimeSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAssistantSaveConversationRuntimeSuccessEntity(client, entopts)
	}
	core.NewAssistantSettingsConfigurationSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAssistantSettingsConfigurationSuccessEntity(client, entopts)
	}
	core.NewAssistantSettingsRuntimeUpdateSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAssistantSettingsRuntimeUpdateSuccessEntity(client, entopts)
	}
	core.NewAssistantToolsRuntimeUpdateSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAssistantToolsRuntimeUpdateSuccessEntity(client, entopts)
	}
	core.NewAssistantTtsRuntimeUpdateSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAssistantTtsRuntimeUpdateSuccessEntity(client, entopts)
	}
	core.NewAssistantVoiceToVoiceRuntimeUpdateSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAssistantVoiceToVoiceRuntimeUpdateSuccessEntity(client, entopts)
	}
	core.NewAssociatedRuntimeToolListSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAssociatedRuntimeToolListSuccessEntity(client, entopts)
	}
	core.NewAudioToAudioEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAudioToAudioEntity(client, entopts)
	}
	core.NewAvailableRuntimeToolListSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewAvailableRuntimeToolListSuccessEntity(client, entopts)
	}
	core.NewFillerPhraseListEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewFillerPhraseListEntity(client, entopts)
	}
	core.NewHealthEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewHealthEntity(client, entopts)
	}
	core.NewKnowledgeEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewKnowledgeEntity(client, entopts)
	}
	core.NewLlmEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewLlmEntity(client, entopts)
	}
	core.NewLlmModelListSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewLlmModelListSuccessEntity(client, entopts)
	}
	core.NewOutboundCallEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewOutboundCallEntity(client, entopts)
	}
	core.NewOutboundCallAcceptedSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewOutboundCallAcceptedSuccessEntity(client, entopts)
	}
	core.NewOutboundDialStatusPayloadEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewOutboundDialStatusPayloadEntity(client, entopts)
	}
	core.NewPortalLoginSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewPortalLoginSuccessEntity(client, entopts)
	}
	core.NewPreCallEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewPreCallEntity(client, entopts)
	}
	core.NewProviderWalletEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewProviderWalletEntity(client, entopts)
	}
	core.NewProviderWalletAssociationsSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewProviderWalletAssociationsSuccessEntity(client, entopts)
	}
	core.NewProviderWalletCatalogSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewProviderWalletCatalogSuccessEntity(client, entopts)
	}
	core.NewPublicRagSearchSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewPublicRagSearchSuccessEntity(client, entopts)
	}
	core.NewRagCollectionDeleteSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewRagCollectionDeleteSuccessEntity(client, entopts)
	}
	core.NewRagCollectionDocumentDeleteSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewRagCollectionDocumentDeleteSuccessEntity(client, entopts)
	}
	core.NewRagCollectionDocumentListSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewRagCollectionDocumentListSuccessEntity(client, entopts)
	}
	core.NewRagCollectionDocumentTokenEstimateSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewRagCollectionDocumentTokenEstimateSuccessEntity(client, entopts)
	}
	core.NewRagCollectionDocumentUploadStatusSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewRagCollectionDocumentUploadStatusSuccessEntity(client, entopts)
	}
	core.NewRagCollectionDocumentUploadSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewRagCollectionDocumentUploadSuccessEntity(client, entopts)
	}
	core.NewRuntimeBindingEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewRuntimeBindingEntity(client, entopts)
	}
	core.NewTtsEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewTtsEntity(client, entopts)
	}
	core.NewTtsVoiceListSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewTtsVoiceListSuccessEntity(client, entopts)
	}
	core.NewVoiceEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewVoiceEntity(client, entopts)
	}
	core.NewVoiceLlmEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewVoiceLlmEntity(client, entopts)
	}
	core.NewVoiceLlmModelListSuccessEntityFunc = func(client *core.Ai4callSDK, entopts map[string]any) core.Ai4callEntity {
		return entity.NewVoiceLlmModelListSuccessEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewAi4callSDK = core.NewAi4callSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewAi4callSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *Ai4callSDK  { return NewAi4callSDK(nil) }
func Test() *Ai4callSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
