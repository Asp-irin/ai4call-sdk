package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAccountAllowedIpsSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAccountAvailablePluginsSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAccountCallLimitsSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAccountNumberRoutingSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAccountPluginConfigurationSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAccountPluginInstanceSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAccountPluginPurchaseSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAnalyticsCallsOutboundSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAnalyticsCallsSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAnalyticsPostCallSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAnalyticsPreCallSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAnalyticsRagSearchSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAnalyticsRagSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAnalyticsRechargesSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAnalyticsSmsSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAnalyticsToolResponsesSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAsrEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAsrModelListSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAssistantEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAssistantAdvancedSettingsConfigurationSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAssistantAdvancedSettingsRuntimeUpdateSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAssistantAsrRuntimeUpdateSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAssistantConversationWebhookRuntimeSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAssistantDtmfConfigurationSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAssistantDtmfRuntimeUpdateSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAssistantHangupConfigurationSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAssistantHangupRuntimeUpdateSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAssistantHangupSchemaRuntimeSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAssistantKnowledgeSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAssistantLlmRuntimeUpdateSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAssistantNumberRoutingCatalogSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAssistantNumberRoutingRuntimeSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAssistantPostcallMcpRuntimeSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAssistantPrecallMcpRuntimeSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAssistantPrecallValidationRuntimeSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAssistantPromptSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAssistantRagConfigurationSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAssistantRagRuntimeUpdateSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAssistantSaveConversationRuntimeSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAssistantSettingsConfigurationSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAssistantSettingsRuntimeUpdateSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAssistantToolsRuntimeUpdateSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAssistantTtsRuntimeUpdateSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAssistantVoiceToVoiceRuntimeUpdateSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAssociatedRuntimeToolListSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAudioToAudioEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewAvailableRuntimeToolListSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewFillerPhraseListEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewHealthEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewKnowledgeEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewLlmEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewLlmModelListSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewOutboundCallEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewOutboundCallAcceptedSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewOutboundDialStatusPayloadEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewPortalLoginSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewPreCallEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewProviderWalletEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewProviderWalletAssociationsSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewProviderWalletCatalogSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewPublicRagSearchSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewRagCollectionDeleteSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewRagCollectionDocumentDeleteSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewRagCollectionDocumentListSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewRagCollectionDocumentTokenEstimateSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewRagCollectionDocumentUploadStatusSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewRagCollectionDocumentUploadSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewRuntimeBindingEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewTtsEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewTtsVoiceListSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewVoiceEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewVoiceLlmEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

var NewVoiceLlmModelListSuccessEntityFunc func(client *Ai4callSDK, entopts map[string]any) Ai4callEntity

