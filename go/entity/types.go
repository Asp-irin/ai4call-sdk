// Typed models for the Ai4call SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/ai4call-sdk/go/core"
)

// AccountAllowedIpsSuccess is the typed data model for the account_allowed_ips_success entity.
type AccountAllowedIpsSuccess struct {
}

// AccountAllowedIpsSuccessLoadMatch is the typed request payload for AccountAllowedIpsSuccess.LoadTyped.
type AccountAllowedIpsSuccessLoadMatch struct {
	AddIps *[]any `json:"addIps,omitempty"`
	AllowedIps *[]any `json:"allowedIps,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	DeleteIps *[]any `json:"deleteIps,omitempty"`
	Message *string `json:"message,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	RequestId *string `json:"requestId,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// AccountAllowedIpsSuccessUpdateData is the typed request payload for AccountAllowedIpsSuccess.UpdateTyped.
type AccountAllowedIpsSuccessUpdateData struct {
	AddIps *[]any `json:"addIps,omitempty"`
	AllowedIps *[]any `json:"allowedIps,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	DeleteIps *[]any `json:"deleteIps,omitempty"`
	Message *string `json:"message,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	RequestId *string `json:"requestId,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// AccountAvailablePluginsSuccess is the typed data model for the account_available_plugins_success entity.
type AccountAvailablePluginsSuccess struct {
}

// AccountAvailablePluginsSuccessLoadMatch is the typed request payload for AccountAvailablePluginsSuccess.LoadTyped.
type AccountAvailablePluginsSuccessLoadMatch struct {
	Data *map[string]any `json:"data,omitempty"`
	Message *string `json:"message,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	RequestId *string `json:"requestId,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// AccountCallLimitsSuccess is the typed data model for the account_call_limits_success entity.
type AccountCallLimitsSuccess struct {
}

// AccountCallLimitsSuccessLoadMatch is the typed request payload for AccountCallLimitsSuccess.LoadTyped.
type AccountCallLimitsSuccessLoadMatch struct {
	Assistants *[]any `json:"assistants,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Message *string `json:"message,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	RequestId *string `json:"requestId,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// AccountCallLimitsSuccessUpdateData is the typed request payload for AccountCallLimitsSuccess.UpdateTyped.
type AccountCallLimitsSuccessUpdateData struct {
	Assistants *[]any `json:"assistants,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Message *string `json:"message,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	RequestId *string `json:"requestId,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// AccountNumberRoutingSuccess is the typed data model for the account_number_routing_success entity.
type AccountNumberRoutingSuccess struct {
}

// AccountNumberRoutingSuccessLoadMatch is the typed request payload for AccountNumberRoutingSuccess.LoadTyped.
type AccountNumberRoutingSuccessLoadMatch struct {
	Data *map[string]any `json:"data,omitempty"`
	DemoNumbers *[]any `json:"demoNumbers,omitempty"`
	Message *string `json:"message,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	PurchasedNumbers *[]any `json:"purchasedNumbers,omitempty"`
	RequestId *string `json:"requestId,omitempty"`
	Success *bool `json:"success,omitempty"`
	UserNumbers *[]any `json:"userNumbers,omitempty"`
}

// AccountNumberRoutingSuccessUpdateData is the typed request payload for AccountNumberRoutingSuccess.UpdateTyped.
type AccountNumberRoutingSuccessUpdateData struct {
	Data *map[string]any `json:"data,omitempty"`
	DemoNumbers *[]any `json:"demoNumbers,omitempty"`
	Message *string `json:"message,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	PurchasedNumbers *[]any `json:"purchasedNumbers,omitempty"`
	RequestId *string `json:"requestId,omitempty"`
	Success *bool `json:"success,omitempty"`
	UserNumbers *[]any `json:"userNumbers,omitempty"`
}

// AccountPluginConfigurationSuccess is the typed data model for the account_plugin_configuration_success entity.
type AccountPluginConfigurationSuccess struct {
}

// AccountPluginConfigurationSuccessLoadMatch is the typed request payload for AccountPluginConfigurationSuccess.LoadTyped.
type AccountPluginConfigurationSuccessLoadMatch struct {
	InstanceName *string `json:"instance_name,omitempty"`
	PluginName *string `json:"plugin_name,omitempty"`
}

// AccountPluginConfigurationSuccessUpdateData is the typed request payload for AccountPluginConfigurationSuccess.UpdateTyped.
type AccountPluginConfigurationSuccessUpdateData struct {
	Configuration *map[string]any `json:"configuration,omitempty"`
	InstanceName *string `json:"instanceName,omitempty"`
	InstanceName2 *string `json:"instance_name,omitempty"`
	PluginName *string `json:"pluginName,omitempty"`
	PluginName2 *string `json:"plugin_name,omitempty"`
}

// AccountPluginInstanceSuccess is the typed data model for the account_plugin_instance_success entity.
type AccountPluginInstanceSuccess struct {
}

// AccountPluginInstanceSuccessLoadMatch is the typed request payload for AccountPluginInstanceSuccess.LoadTyped.
type AccountPluginInstanceSuccessLoadMatch struct {
	Cursor *string `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
}

// AccountPluginInstanceSuccessCreateData is the typed request payload for AccountPluginInstanceSuccess.CreateTyped.
type AccountPluginInstanceSuccessCreateData struct {
	Configuration map[string]any `json:"configuration"`
	Data map[string]any `json:"data"`
	InstanceName *string `json:"instanceName,omitempty"`
	InstanceName2 *string `json:"instance_name,omitempty"`
	Message string `json:"message"`
	Meta map[string]any `json:"meta"`
	NewInstanceName *string `json:"newInstanceName,omitempty"`
	NewInstanceName2 *string `json:"new_instance_name,omitempty"`
	PluginName *string `json:"pluginName,omitempty"`
	PluginName2 *string `json:"plugin_name,omitempty"`
	RequestId string `json:"requestId"`
	Status *string `json:"status,omitempty"`
	Success bool `json:"success"`
}

// AccountPluginInstanceSuccessUpdateData is the typed request payload for AccountPluginInstanceSuccess.UpdateTyped.
type AccountPluginInstanceSuccessUpdateData struct {
	InstanceId string `json:"instance_id"`
	Configuration *map[string]any `json:"configuration,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	InstanceName *string `json:"instanceName,omitempty"`
	InstanceName2 *string `json:"instance_name,omitempty"`
	Message *string `json:"message,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	NewInstanceName *string `json:"newInstanceName,omitempty"`
	NewInstanceName2 *string `json:"new_instance_name,omitempty"`
	PluginName *string `json:"pluginName,omitempty"`
	PluginName2 *string `json:"plugin_name,omitempty"`
	RequestId *string `json:"requestId,omitempty"`
	Status *string `json:"status,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// AccountPluginInstanceSuccessRemoveMatch is the typed request payload for AccountPluginInstanceSuccess.RemoveTyped.
type AccountPluginInstanceSuccessRemoveMatch struct {
	InstanceId string `json:"instance_id"`
}

// AccountPluginPurchaseSuccess is the typed data model for the account_plugin_purchase_success entity.
type AccountPluginPurchaseSuccess struct {
}

// AccountPluginPurchaseSuccessUpdateData is the typed request payload for AccountPluginPurchaseSuccess.UpdateTyped.
type AccountPluginPurchaseSuccessUpdateData struct {
	Configuration *map[string]any `json:"configuration,omitempty"`
	InstanceName *string `json:"instanceName,omitempty"`
	InstanceName2 *string `json:"instance_name,omitempty"`
	PluginName *string `json:"pluginName,omitempty"`
	PluginName2 *string `json:"plugin_name,omitempty"`
}

// AnalyticsCallsOutboundSuccess is the typed data model for the analytics_calls_outbound_success entity.
type AnalyticsCallsOutboundSuccess struct {
}

// AnalyticsCallsOutboundSuccessLoadMatch is the typed request payload for AnalyticsCallsOutboundSuccess.LoadTyped.
type AnalyticsCallsOutboundSuccessLoadMatch struct {
	Cursor *string `json:"cursor,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	InternalId *string `json:"internal_id,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
}

// AnalyticsCallsSuccess is the typed data model for the analytics_calls_success entity.
type AnalyticsCallsSuccess struct {
}

// AnalyticsCallsSuccessLoadMatch is the typed request payload for AnalyticsCallsSuccess.LoadTyped.
type AnalyticsCallsSuccessLoadMatch struct {
	Cursor *string `json:"cursor,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
}

// AnalyticsPostCallSuccess is the typed data model for the analytics_post_call_success entity.
type AnalyticsPostCallSuccess struct {
}

// AnalyticsPostCallSuccessLoadMatch is the typed request payload for AnalyticsPostCallSuccess.LoadTyped.
type AnalyticsPostCallSuccessLoadMatch struct {
	Cursor *string `json:"cursor,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
}

// AnalyticsPreCallSuccess is the typed data model for the analytics_pre_call_success entity.
type AnalyticsPreCallSuccess struct {
}

// AnalyticsPreCallSuccessLoadMatch is the typed request payload for AnalyticsPreCallSuccess.LoadTyped.
type AnalyticsPreCallSuccessLoadMatch struct {
	Cursor *string `json:"cursor,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
}

// AnalyticsRagSearchSuccess is the typed data model for the analytics_rag_search_success entity.
type AnalyticsRagSearchSuccess struct {
}

// AnalyticsRagSearchSuccessLoadMatch is the typed request payload for AnalyticsRagSearchSuccess.LoadTyped.
type AnalyticsRagSearchSuccessLoadMatch struct {
	Cursor *string `json:"cursor,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
}

// AnalyticsRagSuccess is the typed data model for the analytics_rag_success entity.
type AnalyticsRagSuccess struct {
}

// AnalyticsRagSuccessLoadMatch is the typed request payload for AnalyticsRagSuccess.LoadTyped.
type AnalyticsRagSuccessLoadMatch struct {
	Cursor *string `json:"cursor,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
}

// AnalyticsRechargesSuccess is the typed data model for the analytics_recharges_success entity.
type AnalyticsRechargesSuccess struct {
}

// AnalyticsRechargesSuccessLoadMatch is the typed request payload for AnalyticsRechargesSuccess.LoadTyped.
type AnalyticsRechargesSuccessLoadMatch struct {
	Cursor *string `json:"cursor,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
}

// AnalyticsSmsSuccess is the typed data model for the analytics_sms_success entity.
type AnalyticsSmsSuccess struct {
}

// AnalyticsSmsSuccessLoadMatch is the typed request payload for AnalyticsSmsSuccess.LoadTyped.
type AnalyticsSmsSuccessLoadMatch struct {
	Cursor *string `json:"cursor,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
}

// AnalyticsToolResponsesSuccess is the typed data model for the analytics_tool_responses_success entity.
type AnalyticsToolResponsesSuccess struct {
}

// AnalyticsToolResponsesSuccessLoadMatch is the typed request payload for AnalyticsToolResponsesSuccess.LoadTyped.
type AnalyticsToolResponsesSuccessLoadMatch struct {
	Cursor *string `json:"cursor,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
}

// Asr is the typed data model for the asr entity.
type Asr struct {
}

// AsrLoadMatch is the typed request payload for Asr.LoadTyped.
type AsrLoadMatch struct {
	Data *map[string]any `json:"data,omitempty"`
	Message *string `json:"message,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	RequestId *string `json:"requestId,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// AsrModelListSuccess is the typed data model for the asr_model_list_success entity.
type AsrModelListSuccess struct {
}

// AsrModelListSuccessLoadMatch is the typed request payload for AsrModelListSuccess.LoadTyped.
type AsrModelListSuccessLoadMatch struct {
	AssistantId string `json:"assistant_id"`
}

// Assistant is the typed data model for the assistant entity.
type Assistant struct {
}

// AssistantLoadMatch is the typed request payload for Assistant.LoadTyped.
type AssistantLoadMatch struct {
	Id string `json:"id"`
}

// AssistantCreateData is the typed request payload for Assistant.CreateTyped.
type AssistantCreateData struct {
	Assistant any `json:"assistant"`
	AudioToAudio *any `json:"audioToAudio,omitempty"`
	Data map[string]any `json:"data"`
	Description string `json:"description"`
	FirstMessage *map[string]any `json:"firstMessage,omitempty"`
	Id *string `json:"id,omitempty"`
	Message string `json:"message"`
	Meta map[string]any `json:"meta"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	Network *map[string]any `json:"network,omitempty"`
	Numbers *map[string]any `json:"numbers,omitempty"`
	RequestId string `json:"requestId"`
	Settings *map[string]any `json:"settings,omitempty"`
	Status *string `json:"status,omitempty"`
	Success bool `json:"success"`
	VoiceToVoice *map[string]any `json:"voiceToVoice,omitempty"`
}

// AssistantUpdateData is the typed request payload for Assistant.UpdateTyped.
type AssistantUpdateData struct {
	Id string `json:"id"`
	Assistant *any `json:"assistant,omitempty"`
	AudioToAudio *any `json:"audioToAudio,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Description *string `json:"description,omitempty"`
	FirstMessage *map[string]any `json:"firstMessage,omitempty"`
	Message *string `json:"message,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name *string `json:"name,omitempty"`
	Network *map[string]any `json:"network,omitempty"`
	Numbers *map[string]any `json:"numbers,omitempty"`
	RequestId *string `json:"requestId,omitempty"`
	Settings *map[string]any `json:"settings,omitempty"`
	Status *string `json:"status,omitempty"`
	Success *bool `json:"success,omitempty"`
	VoiceToVoice *map[string]any `json:"voiceToVoice,omitempty"`
}

// AssistantRemoveMatch is the typed request payload for Assistant.RemoveTyped.
type AssistantRemoveMatch struct {
	Id string `json:"id"`
}

// AssistantAdvancedSettingsConfigurationSuccess is the typed data model for the assistant_advanced_settings_configuration_success entity.
type AssistantAdvancedSettingsConfigurationSuccess struct {
}

// AssistantAdvancedSettingsConfigurationSuccessLoadMatch is the typed request payload for AssistantAdvancedSettingsConfigurationSuccess.LoadTyped.
type AssistantAdvancedSettingsConfigurationSuccessLoadMatch struct {
	Id string `json:"id"`
}

// AssistantAdvancedSettingsRuntimeUpdateSuccess is the typed data model for the assistant_advanced_settings_runtime_update_success entity.
type AssistantAdvancedSettingsRuntimeUpdateSuccess struct {
}

// AssistantAdvancedSettingsRuntimeUpdateSuccessUpdateData is the typed request payload for AssistantAdvancedSettingsRuntimeUpdateSuccess.UpdateTyped.
type AssistantAdvancedSettingsRuntimeUpdateSuccessUpdateData struct {
	AssistantId string `json:"assistant_id"`
	AssistantApiKey *string `json:"assistantApiKey,omitempty"`
	AssistantId2 *string `json:"assistantId,omitempty"`
	Configuration *map[string]any `json:"configuration,omitempty"`
	FreqPenalty *float64 `json:"freqPenalty,omitempty"`
	MaxTokens *int `json:"maxTokens,omitempty"`
	PresencePenalty *float64 `json:"presencePenalty,omitempty"`
	Service *string `json:"service,omitempty"`
	StopSequences *[]any `json:"stopSequences,omitempty"`
	Temperature *float64 `json:"temperature,omitempty"`
	TopK *int `json:"topK,omitempty"`
	TopP *float64 `json:"topP,omitempty"`
}

// AssistantAsrRuntimeUpdateSuccess is the typed data model for the assistant_asr_runtime_update_success entity.
type AssistantAsrRuntimeUpdateSuccess struct {
}

// AssistantAsrRuntimeUpdateSuccessUpdateData is the typed request payload for AssistantAsrRuntimeUpdateSuccess.UpdateTyped.
type AssistantAsrRuntimeUpdateSuccessUpdateData struct {
	AssistantId string `json:"assistant_id"`
	ApiKey *string `json:"apiKey,omitempty"`
	AssistantApiKey *string `json:"assistantApiKey,omitempty"`
	AssistantId2 *string `json:"assistantId,omitempty"`
	Configuration *map[string]any `json:"configuration,omitempty"`
	EngineCode *string `json:"engineCode,omitempty"`
	ProviderWalletId *int `json:"providerWalletId,omitempty"`
	RuntimeBinding *map[string]any `json:"runtimeBinding,omitempty"`
	Service *string `json:"service,omitempty"`
	SourceMode *string `json:"sourceMode,omitempty"`
}

// AssistantConversationWebhookRuntimeSuccess is the typed data model for the assistant_conversation_webhook_runtime_success entity.
type AssistantConversationWebhookRuntimeSuccess struct {
}

// AssistantConversationWebhookRuntimeSuccessLoadMatch is the typed request payload for AssistantConversationWebhookRuntimeSuccess.LoadTyped.
type AssistantConversationWebhookRuntimeSuccessLoadMatch struct {
	AssistantId string `json:"assistant_id"`
}

// AssistantConversationWebhookRuntimeSuccessUpdateData is the typed request payload for AssistantConversationWebhookRuntimeSuccess.UpdateTyped.
type AssistantConversationWebhookRuntimeSuccessUpdateData struct {
	AssistantId string `json:"assistant_id"`
	AuthName *string `json:"authName,omitempty"`
	Configuration *map[string]any `json:"configuration,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Url *string `json:"url,omitempty"`
}

// AssistantDtmfConfigurationSuccess is the typed data model for the assistant_dtmf_configuration_success entity.
type AssistantDtmfConfigurationSuccess struct {
}

// AssistantDtmfConfigurationSuccessLoadMatch is the typed request payload for AssistantDtmfConfigurationSuccess.LoadTyped.
type AssistantDtmfConfigurationSuccessLoadMatch struct {
	Id string `json:"id"`
}

// AssistantDtmfRuntimeUpdateSuccess is the typed data model for the assistant_dtmf_runtime_update_success entity.
type AssistantDtmfRuntimeUpdateSuccess struct {
}

// AssistantDtmfRuntimeUpdateSuccessUpdateData is the typed request payload for AssistantDtmfRuntimeUpdateSuccess.UpdateTyped.
type AssistantDtmfRuntimeUpdateSuccessUpdateData struct {
	AssistantId string `json:"assistant_id"`
	AcceptTimeout *int `json:"acceptTimeout,omitempty"`
	AssistantApiKey *string `json:"assistantApiKey,omitempty"`
	AssistantId2 *string `json:"assistantId,omitempty"`
	Configuration *map[string]any `json:"configuration,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	MaxLength *int `json:"maxLength,omitempty"`
	MinLength *int `json:"minLength,omitempty"`
	PlayEnabled *bool `json:"playEnabled,omitempty"`
	Service *string `json:"service,omitempty"`
	TerminationChars *string `json:"terminationChars,omitempty"`
}

// AssistantHangupConfigurationSuccess is the typed data model for the assistant_hangup_configuration_success entity.
type AssistantHangupConfigurationSuccess struct {
}

// AssistantHangupConfigurationSuccessLoadMatch is the typed request payload for AssistantHangupConfigurationSuccess.LoadTyped.
type AssistantHangupConfigurationSuccessLoadMatch struct {
	Id string `json:"id"`
}

// AssistantHangupRuntimeUpdateSuccess is the typed data model for the assistant_hangup_runtime_update_success entity.
type AssistantHangupRuntimeUpdateSuccess struct {
}

// AssistantHangupRuntimeUpdateSuccessUpdateData is the typed request payload for AssistantHangupRuntimeUpdateSuccess.UpdateTyped.
type AssistantHangupRuntimeUpdateSuccessUpdateData struct {
	AssistantId string `json:"assistant_id"`
	AssistantApiKey *string `json:"assistantApiKey,omitempty"`
	AssistantId2 *string `json:"assistantId,omitempty"`
	AvailableAgents *[]any `json:"availableAgents,omitempty"`
	Configuration *map[string]any `json:"configuration,omitempty"`
	EnableHangup *bool `json:"enableHangup,omitempty"`
	EnableRedirect *bool `json:"enableRedirect,omitempty"`
	EnableTransferAgent *bool `json:"enableTransferAgent,omitempty"`
	Service *string `json:"service,omitempty"`
	TransferAgentNotificationText *string `json:"transferAgentNotificationText,omitempty"`
}

// AssistantHangupSchemaRuntimeSuccess is the typed data model for the assistant_hangup_schema_runtime_success entity.
type AssistantHangupSchemaRuntimeSuccess struct {
}

// AssistantHangupSchemaRuntimeSuccessLoadMatch is the typed request payload for AssistantHangupSchemaRuntimeSuccess.LoadTyped.
type AssistantHangupSchemaRuntimeSuccessLoadMatch struct {
	AssistantId string `json:"assistant_id"`
}

// AssistantHangupSchemaRuntimeSuccessUpdateData is the typed request payload for AssistantHangupSchemaRuntimeSuccess.UpdateTyped.
type AssistantHangupSchemaRuntimeSuccessUpdateData struct {
	AssistantId string `json:"assistant_id"`
	Configuration *map[string]any `json:"configuration,omitempty"`
	HangupUrl *string `json:"hangupUrl,omitempty"`
	Schema *[]any `json:"schema,omitempty"`
}

// AssistantKnowledgeSuccess is the typed data model for the assistant_knowledge_success entity.
type AssistantKnowledgeSuccess struct {
}

// AssistantKnowledgeSuccessLoadMatch is the typed request payload for AssistantKnowledgeSuccess.LoadTyped.
type AssistantKnowledgeSuccessLoadMatch struct {
	Id string `json:"id"`
}

// AssistantKnowledgeSuccessUpdateData is the typed request payload for AssistantKnowledgeSuccess.UpdateTyped.
type AssistantKnowledgeSuccessUpdateData struct {
	Id string `json:"id"`
}

// AssistantLlmRuntimeUpdateSuccess is the typed data model for the assistant_llm_runtime_update_success entity.
type AssistantLlmRuntimeUpdateSuccess struct {
}

// AssistantLlmRuntimeUpdateSuccessUpdateData is the typed request payload for AssistantLlmRuntimeUpdateSuccess.UpdateTyped.
type AssistantLlmRuntimeUpdateSuccessUpdateData struct {
	AssistantId string `json:"assistant_id"`
	ApiKey *string `json:"apiKey,omitempty"`
	AssistantApiKey *string `json:"assistantApiKey,omitempty"`
	AssistantId2 *string `json:"assistantId,omitempty"`
	BaseUrl *string `json:"baseUrl,omitempty"`
	Configuration *map[string]any `json:"configuration,omitempty"`
	EngineCode *string `json:"engineCode,omitempty"`
	ModelCode *string `json:"modelCode,omitempty"`
	ProviderWalletId *int `json:"providerWalletId,omitempty"`
	RuntimeBinding *map[string]any `json:"runtimeBinding,omitempty"`
	Service *string `json:"service,omitempty"`
	SourceMode *string `json:"sourceMode,omitempty"`
}

// AssistantNumberRoutingCatalogSuccess is the typed data model for the assistant_number_routing_catalog_success entity.
type AssistantNumberRoutingCatalogSuccess struct {
}

// AssistantNumberRoutingCatalogSuccessLoadMatch is the typed request payload for AssistantNumberRoutingCatalogSuccess.LoadTyped.
type AssistantNumberRoutingCatalogSuccessLoadMatch struct {
	Id string `json:"id"`
}

// AssistantNumberRoutingRuntimeSuccess is the typed data model for the assistant_number_routing_runtime_success entity.
type AssistantNumberRoutingRuntimeSuccess struct {
}

// AssistantNumberRoutingRuntimeSuccessUpdateData is the typed request payload for AssistantNumberRoutingRuntimeSuccess.UpdateTyped.
type AssistantNumberRoutingRuntimeSuccessUpdateData struct {
	AssistantId string `json:"assistant_id"`
	Configuration *map[string]any `json:"configuration,omitempty"`
	DemoNumbers *[]any `json:"demoNumbers,omitempty"`
	PurchasedNumbers *[]any `json:"purchasedNumbers,omitempty"`
	UserNumbers *[]any `json:"userNumbers,omitempty"`
}

// AssistantPostcallMcpRuntimeSuccess is the typed data model for the assistant_postcall_mcp_runtime_success entity.
type AssistantPostcallMcpRuntimeSuccess struct {
}

// AssistantPostcallMcpRuntimeSuccessLoadMatch is the typed request payload for AssistantPostcallMcpRuntimeSuccess.LoadTyped.
type AssistantPostcallMcpRuntimeSuccessLoadMatch struct {
	AssistantId string `json:"assistant_id"`
}

// AssistantPostcallMcpRuntimeSuccessUpdateData is the typed request payload for AssistantPostcallMcpRuntimeSuccess.UpdateTyped.
type AssistantPostcallMcpRuntimeSuccessUpdateData struct {
	AssistantId string `json:"assistant_id"`
	Configuration *map[string]any `json:"configuration,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	GlobalPrompt *string `json:"globalPrompt,omitempty"`
	ModelConfig *map[string]any `json:"modelConfig,omitempty"`
	Tools *[]any `json:"tools,omitempty"`
}

// AssistantPrecallMcpRuntimeSuccess is the typed data model for the assistant_precall_mcp_runtime_success entity.
type AssistantPrecallMcpRuntimeSuccess struct {
}

// AssistantPrecallMcpRuntimeSuccessLoadMatch is the typed request payload for AssistantPrecallMcpRuntimeSuccess.LoadTyped.
type AssistantPrecallMcpRuntimeSuccessLoadMatch struct {
	AssistantId string `json:"assistant_id"`
}

// AssistantPrecallMcpRuntimeSuccessUpdateData is the typed request payload for AssistantPrecallMcpRuntimeSuccess.UpdateTyped.
type AssistantPrecallMcpRuntimeSuccessUpdateData struct {
	AssistantId string `json:"assistant_id"`
	Configuration *map[string]any `json:"configuration,omitempty"`
	EarlyTerminationEnabled *bool `json:"earlyTerminationEnabled,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	GlobalPrompt *string `json:"globalPrompt,omitempty"`
	ModelConfig *map[string]any `json:"modelConfig,omitempty"`
	OutputSchema *map[string]any `json:"outputSchema,omitempty"`
	OutputVariables *[]any `json:"outputVariables,omitempty"`
	TerminationMessage *string `json:"terminationMessage,omitempty"`
	Tools *[]any `json:"tools,omitempty"`
	VoiceConfig *map[string]any `json:"voiceConfig,omitempty"`
	WaitingAudioNonInterruptible *bool `json:"waitingAudioNonInterruptible,omitempty"`
	WaitingAudioText *string `json:"waitingAudioText,omitempty"`
}

// AssistantPrecallValidationRuntimeSuccess is the typed data model for the assistant_precall_validation_runtime_success entity.
type AssistantPrecallValidationRuntimeSuccess struct {
}

// AssistantPrecallValidationRuntimeSuccessLoadMatch is the typed request payload for AssistantPrecallValidationRuntimeSuccess.LoadTyped.
type AssistantPrecallValidationRuntimeSuccessLoadMatch struct {
	AssistantId string `json:"assistant_id"`
}

// AssistantPrecallValidationRuntimeSuccessUpdateData is the typed request payload for AssistantPrecallValidationRuntimeSuccess.UpdateTyped.
type AssistantPrecallValidationRuntimeSuccessUpdateData struct {
	AssistantId string `json:"assistant_id"`
	AuthPassword *string `json:"authPassword,omitempty"`
	AuthToken *string `json:"authToken,omitempty"`
	AuthType *string `json:"authType,omitempty"`
	AuthUsername *string `json:"authUsername,omitempty"`
	Configuration *any `json:"configuration,omitempty"`
	HeadersJson *map[string]any `json:"headersJson,omitempty"`
	IsActive *bool `json:"isActive,omitempty"`
	Method *string `json:"method,omitempty"`
	Name *string `json:"name,omitempty"`
	NumberLocation *string `json:"numberLocation,omitempty"`
	NumberParamName *string `json:"numberParamName,omitempty"`
	TimeoutMs *int `json:"timeoutMs,omitempty"`
	Url *string `json:"url,omitempty"`
}

// AssistantPromptSuccess is the typed data model for the assistant_prompt_success entity.
type AssistantPromptSuccess struct {
}

// AssistantPromptSuccessLoadMatch is the typed request payload for AssistantPromptSuccess.LoadTyped.
type AssistantPromptSuccessLoadMatch struct {
	Id string `json:"id"`
}

// AssistantRagConfigurationSuccess is the typed data model for the assistant_rag_configuration_success entity.
type AssistantRagConfigurationSuccess struct {
}

// AssistantRagConfigurationSuccessLoadMatch is the typed request payload for AssistantRagConfigurationSuccess.LoadTyped.
type AssistantRagConfigurationSuccessLoadMatch struct {
	AssistantId string `json:"assistant_id"`
}

// AssistantRagRuntimeUpdateSuccess is the typed data model for the assistant_rag_runtime_update_success entity.
type AssistantRagRuntimeUpdateSuccess struct {
}

// AssistantRagRuntimeUpdateSuccessUpdateData is the typed request payload for AssistantRagRuntimeUpdateSuccess.UpdateTyped.
type AssistantRagRuntimeUpdateSuccessUpdateData struct {
	AssistantId string `json:"assistant_id"`
	AssistantApiKey *string `json:"assistantApiKey,omitempty"`
	AssistantId2 *string `json:"assistantId,omitempty"`
	Configuration *map[string]any `json:"configuration,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	KbPrompt *string `json:"kbPrompt,omitempty"`
	Name *string `json:"name,omitempty"`
	ReturnedChunks *int `json:"returnedChunks,omitempty"`
	Service *string `json:"service,omitempty"`
}

// AssistantSaveConversationRuntimeSuccess is the typed data model for the assistant_save_conversation_runtime_success entity.
type AssistantSaveConversationRuntimeSuccess struct {
}

// AssistantSaveConversationRuntimeSuccessLoadMatch is the typed request payload for AssistantSaveConversationRuntimeSuccess.LoadTyped.
type AssistantSaveConversationRuntimeSuccessLoadMatch struct {
	AssistantId string `json:"assistant_id"`
}

// AssistantSaveConversationRuntimeSuccessUpdateData is the typed request payload for AssistantSaveConversationRuntimeSuccess.UpdateTyped.
type AssistantSaveConversationRuntimeSuccessUpdateData struct {
	AssistantId string `json:"assistant_id"`
	Configuration *map[string]any `json:"configuration,omitempty"`
	Emails *string `json:"emails,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	SmtpInstanceName *string `json:"smtpInstanceName,omitempty"`
	SmtpInstanceName2 *string `json:"smtp_instance_name,omitempty"`
}

// AssistantSettingsConfigurationSuccess is the typed data model for the assistant_settings_configuration_success entity.
type AssistantSettingsConfigurationSuccess struct {
}

// AssistantSettingsConfigurationSuccessLoadMatch is the typed request payload for AssistantSettingsConfigurationSuccess.LoadTyped.
type AssistantSettingsConfigurationSuccessLoadMatch struct {
	Id string `json:"id"`
}

// AssistantSettingsRuntimeUpdateSuccess is the typed data model for the assistant_settings_runtime_update_success entity.
type AssistantSettingsRuntimeUpdateSuccess struct {
}

// AssistantSettingsRuntimeUpdateSuccessUpdateData is the typed request payload for AssistantSettingsRuntimeUpdateSuccess.UpdateTyped.
type AssistantSettingsRuntimeUpdateSuccessUpdateData struct {
	AssistantId string `json:"assistant_id"`
	AsrInitialDelayMs *int `json:"asrInitialDelayMs,omitempty"`
	AsrSilenceMs *int `json:"asrSilenceMs,omitempty"`
	AssistantApiKey *string `json:"assistantApiKey,omitempty"`
	AssistantId2 *string `json:"assistantId,omitempty"`
	CallPermissions *map[string]any `json:"callPermissions,omitempty"`
	Configuration *map[string]any `json:"configuration,omitempty"`
	DynamicTimeoutMs *int `json:"dynamicTimeoutMs,omitempty"`
	Filler *map[string]any `json:"filler,omitempty"`
	MaxResponseLength *int `json:"maxResponseLength,omitempty"`
	Reprompt *map[string]any `json:"reprompt,omitempty"`
	Service *string `json:"service,omitempty"`
	TruncateInitialAudio *bool `json:"truncateInitialAudio,omitempty"`
	TtsInterruptionInConversation *bool `json:"ttsInterruptionInConversation,omitempty"`
	Vad *bool `json:"vad,omitempty"`
	VadMinVoiceMs *int `json:"vadMinVoiceMs,omitempty"`
	VadThreshold *float64 `json:"vadThreshold,omitempty"`
}

// AssistantToolsRuntimeUpdateSuccess is the typed data model for the assistant_tools_runtime_update_success entity.
type AssistantToolsRuntimeUpdateSuccess struct {
}

// AssistantToolsRuntimeUpdateSuccessUpdateData is the typed request payload for AssistantToolsRuntimeUpdateSuccess.UpdateTyped.
type AssistantToolsRuntimeUpdateSuccessUpdateData struct {
	AssistantId string `json:"assistant_id"`
	AssistantApiKey *string `json:"assistantApiKey,omitempty"`
	AssistantId2 *string `json:"assistantId,omitempty"`
	Configuration *map[string]any `json:"configuration,omitempty"`
	Service *string `json:"service,omitempty"`
}

// AssistantTtsRuntimeUpdateSuccess is the typed data model for the assistant_tts_runtime_update_success entity.
type AssistantTtsRuntimeUpdateSuccess struct {
}

// AssistantTtsRuntimeUpdateSuccessUpdateData is the typed request payload for AssistantTtsRuntimeUpdateSuccess.UpdateTyped.
type AssistantTtsRuntimeUpdateSuccessUpdateData struct {
	AssistantId string `json:"assistant_id"`
	ApiKey *string `json:"apiKey,omitempty"`
	AssistantApiKey *string `json:"assistantApiKey,omitempty"`
	AssistantId2 *string `json:"assistantId,omitempty"`
	Configuration *map[string]any `json:"configuration,omitempty"`
	EngineCode *string `json:"engineCode,omitempty"`
	ProviderWalletId *int `json:"providerWalletId,omitempty"`
	Region *string `json:"region,omitempty"`
	RuntimeBinding *map[string]any `json:"runtimeBinding,omitempty"`
	Service *string `json:"service,omitempty"`
	SourceMode *string `json:"sourceMode,omitempty"`
	VoiceCode *string `json:"voiceCode,omitempty"`
}

// AssistantVoiceToVoiceRuntimeUpdateSuccess is the typed data model for the assistant_voice_to_voice_runtime_update_success entity.
type AssistantVoiceToVoiceRuntimeUpdateSuccess struct {
}

// AssistantVoiceToVoiceRuntimeUpdateSuccessUpdateData is the typed request payload for AssistantVoiceToVoiceRuntimeUpdateSuccess.UpdateTyped.
type AssistantVoiceToVoiceRuntimeUpdateSuccessUpdateData struct {
	AssistantId string `json:"assistant_id"`
	ApiKey *string `json:"apiKey,omitempty"`
	AssistantApiKey *string `json:"assistantApiKey,omitempty"`
	AssistantId2 *string `json:"assistantId,omitempty"`
	BaseUrl *string `json:"baseUrl,omitempty"`
	Configuration *map[string]any `json:"configuration,omitempty"`
	EngineCode *string `json:"engineCode,omitempty"`
	ModelCode *string `json:"modelCode,omitempty"`
	Prompt *string `json:"prompt,omitempty"`
	ProviderWalletId *int `json:"providerWalletId,omitempty"`
	Service *string `json:"service,omitempty"`
	VoiceCode *string `json:"voiceCode,omitempty"`
}

// AssociatedRuntimeToolListSuccess is the typed data model for the associated_runtime_tool_list_success entity.
type AssociatedRuntimeToolListSuccess struct {
}

// AssociatedRuntimeToolListSuccessLoadMatch is the typed request payload for AssociatedRuntimeToolListSuccess.LoadTyped.
type AssociatedRuntimeToolListSuccessLoadMatch struct {
	AssistantId string `json:"assistant_id"`
}

// AudioToAudio is the typed data model for the audio_to_audio entity.
type AudioToAudio struct {
}

// AudioToAudioLoadMatch is the typed request payload for AudioToAudio.LoadTyped.
type AudioToAudioLoadMatch struct {
	Data *map[string]any `json:"data,omitempty"`
	Message *string `json:"message,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	RequestId *string `json:"requestId,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// AvailableRuntimeToolListSuccess is the typed data model for the available_runtime_tool_list_success entity.
type AvailableRuntimeToolListSuccess struct {
}

// AvailableRuntimeToolListSuccessLoadMatch is the typed request payload for AvailableRuntimeToolListSuccess.LoadTyped.
type AvailableRuntimeToolListSuccessLoadMatch struct {
	Cursor *string `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
}

// FillerPhraseList is the typed data model for the filler_phrase_list entity.
type FillerPhraseList struct {
}

// FillerPhraseListLoadMatch is the typed request payload for FillerPhraseList.LoadTyped.
type FillerPhraseListLoadMatch struct {
	Id string `json:"id"`
}

// FillerPhraseListCreateData is the typed request payload for FillerPhraseList.CreateTyped.
type FillerPhraseListCreateData struct {
	Associations map[string]any `json:"associations"`
	Data map[string]any `json:"data"`
	Id string `json:"id"`
	List map[string]any `json:"list"`
	Message string `json:"message"`
	Meta *map[string]any `json:"meta,omitempty"`
	Name string `json:"name"`
	Phrases *[]any `json:"phrases,omitempty"`
	RequestId string `json:"requestId"`
	Success bool `json:"success"`
	ToolListIds []any `json:"toolListIds"`
	WaitingListIds []any `json:"waitingListIds"`
}

// FillerPhraseListUpdateData is the typed request payload for FillerPhraseList.UpdateTyped.
type FillerPhraseListUpdateData struct {
	Id string `json:"id"`
	Associations *map[string]any `json:"associations,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	List *map[string]any `json:"list,omitempty"`
	Message *string `json:"message,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	Name *string `json:"name,omitempty"`
	Phrases *[]any `json:"phrases,omitempty"`
	RequestId *string `json:"requestId,omitempty"`
	Success *bool `json:"success,omitempty"`
	ToolListIds *[]any `json:"toolListIds,omitempty"`
	WaitingListIds *[]any `json:"waitingListIds,omitempty"`
}

// FillerPhraseListRemoveMatch is the typed request payload for FillerPhraseList.RemoveTyped.
type FillerPhraseListRemoveMatch struct {
	Id string `json:"id"`
}

// Health is the typed data model for the health entity.
type Health struct {
}

// HealthLoadMatch is the typed request payload for Health.LoadTyped.
type HealthLoadMatch struct {
	DataSource *string `json:"dataSource,omitempty"`
	Service *string `json:"service,omitempty"`
	Status *string `json:"status,omitempty"`
}

// Knowledge is the typed data model for the knowledge entity.
type Knowledge struct {
}

// KnowledgeLoadMatch is the typed request payload for Knowledge.LoadTyped.
type KnowledgeLoadMatch struct {
	Id int `json:"id"`
}

// KnowledgeCreateData is the typed request payload for Knowledge.CreateTyped.
type KnowledgeCreateData struct {
	Data map[string]any `json:"data"`
	DefaultPostAction *string `json:"defaultPostAction,omitempty"`
	DefaultResponse string `json:"defaultResponse"`
	Id *string `json:"id,omitempty"`
	Knowledge map[string]any `json:"knowledge"`
	Message string `json:"message"`
	Meta *map[string]any `json:"meta,omitempty"`
	RequestId string `json:"requestId"`
	Rules *string `json:"rules,omitempty"`
	Success bool `json:"success"`
	Title string `json:"title"`
	Triggers *[]any `json:"triggers,omitempty"`
}

// KnowledgeUpdateData is the typed request payload for Knowledge.UpdateTyped.
type KnowledgeUpdateData struct {
	Id int `json:"id"`
	Data *map[string]any `json:"data,omitempty"`
	DefaultPostAction *string `json:"defaultPostAction,omitempty"`
	DefaultResponse *string `json:"defaultResponse,omitempty"`
	Knowledge *map[string]any `json:"knowledge,omitempty"`
	Message *string `json:"message,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	RequestId *string `json:"requestId,omitempty"`
	Rules *string `json:"rules,omitempty"`
	Success *bool `json:"success,omitempty"`
	Title *string `json:"title,omitempty"`
	Triggers *[]any `json:"triggers,omitempty"`
}

// KnowledgeRemoveMatch is the typed request payload for Knowledge.RemoveTyped.
type KnowledgeRemoveMatch struct {
	Id int `json:"id"`
}

// Llm is the typed data model for the llm entity.
type Llm struct {
}

// LlmLoadMatch is the typed request payload for Llm.LoadTyped.
type LlmLoadMatch struct {
	Data *map[string]any `json:"data,omitempty"`
	Message *string `json:"message,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	RequestId *string `json:"requestId,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// LlmModelListSuccess is the typed data model for the llm_model_list_success entity.
type LlmModelListSuccess struct {
}

// LlmModelListSuccessLoadMatch is the typed request payload for LlmModelListSuccess.LoadTyped.
type LlmModelListSuccessLoadMatch struct {
	AssistantId string `json:"assistant_id"`
}

// OutboundCall is the typed data model for the outbound_call entity.
type OutboundCall struct {
}

// OutboundCallCreateData is the typed request payload for OutboundCall.CreateTyped.
type OutboundCallCreateData struct {
	AddPrompt *string `json:"AddPrompt,omitempty"`
	AddPrompt2 *string `json:"addPrompt,omitempty"`
	ApiKeyAssistente *string `json:"apiKey_assistente,omitempty"`
	AssistantApiKey *string `json:"assistantApiKey,omitempty"`
	CallId *string `json:"callId,omitempty"`
	CallResultUrl *string `json:"callResultUrl,omitempty"`
	CallbackConfigured bool `json:"callbackConfigured"`
	CallerId string `json:"callerId"`
	Dst string `json:"dst"`
	InternalId string `json:"internalId"`
	Status string `json:"status"`
	UrlEsitoChiamata *any `json:"url_esito_chiamata,omitempty"`
}

// OutboundCallAcceptedSuccess is the typed data model for the outbound_call_accepted_success entity.
type OutboundCallAcceptedSuccess struct {
}

// OutboundCallAcceptedSuccessCreateData is the typed request payload for OutboundCallAcceptedSuccess.CreateTyped.
type OutboundCallAcceptedSuccessCreateData struct {
	AddPrompt *string `json:"AddPrompt,omitempty"`
	AddPrompt2 *string `json:"addPrompt,omitempty"`
	ApiKeyAssistente *string `json:"apiKey_assistente,omitempty"`
	AssistantApiKey *string `json:"assistantApiKey,omitempty"`
	CallId *string `json:"callId,omitempty"`
	CallResultUrl *string `json:"callResultUrl,omitempty"`
	CallbackConfigured bool `json:"callbackConfigured"`
	CallerId string `json:"callerId"`
	Dst string `json:"dst"`
	InternalId string `json:"internalId"`
	IpPbx *string `json:"ipPbx,omitempty"`
	IpPbx2 *string `json:"ip_pbx,omitempty"`
	MethodUac *bool `json:"method_uac,omitempty"`
	SipPort *string `json:"sipPort,omitempty"`
	SipPort2 *string `json:"sip_port,omitempty"`
	Status string `json:"status"`
	UrlEsitoChiamata *any `json:"url_esito_chiamata,omitempty"`
}

// OutboundDialStatusPayload is the typed data model for the outbound_dial_status_payload entity.
type OutboundDialStatusPayload struct {
}

// OutboundDialStatusPayloadLoadMatch is the typed request payload for OutboundDialStatusPayload.LoadTyped.
type OutboundDialStatusPayloadLoadMatch struct {
	Uuid string `json:"uuid"`
}

// PortalLoginSuccess is the typed data model for the portal_login_success entity.
type PortalLoginSuccess struct {
}

// PortalLoginSuccessCreateData is the typed request payload for PortalLoginSuccess.CreateTyped.
type PortalLoginSuccessCreateData struct {
	Client map[string]any `json:"client"`
	Email string `json:"email"`
	PortalApiKey string `json:"portalApiKey"`
}

// PreCall is the typed data model for the pre_call entity.
type PreCall struct {
}

// PreCallLoadMatch is the typed request payload for PreCall.LoadTyped.
type PreCallLoadMatch struct {
	AssistantId string `json:"assistant_id"`
}

// ProviderWallet is the typed data model for the provider_wallet entity.
type ProviderWallet struct {
}

// ProviderWalletLoadMatch is the typed request payload for ProviderWallet.LoadTyped.
type ProviderWalletLoadMatch struct {
	Id int `json:"id"`
}

// ProviderWalletCreateData is the typed request payload for ProviderWallet.CreateTyped.
type ProviderWalletCreateData struct {
	Config map[string]any `json:"config"`
	Credential map[string]any `json:"credential"`
	Data map[string]any `json:"data"`
	Engine string `json:"engine"`
	Id *string `json:"id,omitempty"`
	IsActive *bool `json:"isActive,omitempty"`
	Message string `json:"message"`
	Meta *map[string]any `json:"meta,omitempty"`
	Name string `json:"name"`
	Provider string `json:"provider"`
	RequestId string `json:"requestId"`
	ServiceType string `json:"serviceType"`
	Success bool `json:"success"`
}

// ProviderWalletUpdateData is the typed request payload for ProviderWallet.UpdateTyped.
type ProviderWalletUpdateData struct {
	Id int `json:"id"`
	Config *map[string]any `json:"config,omitempty"`
	Credential *map[string]any `json:"credential,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Engine *string `json:"engine,omitempty"`
	IsActive *bool `json:"isActive,omitempty"`
	Message *string `json:"message,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	Name *string `json:"name,omitempty"`
	Provider *string `json:"provider,omitempty"`
	RequestId *string `json:"requestId,omitempty"`
	ServiceType *string `json:"serviceType,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// ProviderWalletRemoveMatch is the typed request payload for ProviderWallet.RemoveTyped.
type ProviderWalletRemoveMatch struct {
	Id int `json:"id"`
}

// ProviderWalletAssociationsSuccess is the typed data model for the provider_wallet_associations_success entity.
type ProviderWalletAssociationsSuccess struct {
}

// ProviderWalletAssociationsSuccessLoadMatch is the typed request payload for ProviderWalletAssociationsSuccess.LoadTyped.
type ProviderWalletAssociationsSuccessLoadMatch struct {
	AssistantId string `json:"assistant_id"`
}

// ProviderWalletCatalogSuccess is the typed data model for the provider_wallet_catalog_success entity.
type ProviderWalletCatalogSuccess struct {
}

// ProviderWalletCatalogSuccessLoadMatch is the typed request payload for ProviderWalletCatalogSuccess.LoadTyped.
type ProviderWalletCatalogSuccessLoadMatch struct {
	Data *map[string]any `json:"data,omitempty"`
	Message *string `json:"message,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	RequestId *string `json:"requestId,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// PublicRagSearchSuccess is the typed data model for the public_rag_search_success entity.
type PublicRagSearchSuccess struct {
}

// PublicRagSearchSuccessCreateData is the typed request payload for PublicRagSearchSuccess.CreateTyped.
type PublicRagSearchSuccessCreateData struct {
	Count int `json:"count"`
	Query string `json:"query"`
	RagId string `json:"rag_id"`
	Results []any `json:"results"`
}

// RagCollectionDeleteSuccess is the typed data model for the rag_collection_delete_success entity.
type RagCollectionDeleteSuccess struct {
}

// RagCollectionDeleteSuccessLoadMatch is the typed request payload for RagCollectionDeleteSuccess.LoadTyped.
type RagCollectionDeleteSuccessLoadMatch struct {
	Cursor *string `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
}

// RagCollectionDeleteSuccessCreateData is the typed request payload for RagCollectionDeleteSuccess.CreateTyped.
type RagCollectionDeleteSuccessCreateData struct {
	Data map[string]any `json:"data"`
	Description *string `json:"description,omitempty"`
	MaxChunkSize *int `json:"maxChunkSize,omitempty"`
	MaxChunksPerFile *int `json:"maxChunksPerFile,omitempty"`
	Message string `json:"message"`
	Meta map[string]any `json:"meta"`
	Name string `json:"name"`
	RequestId string `json:"requestId"`
	Success bool `json:"success"`
}

// RagCollectionDeleteSuccessRemoveMatch is the typed request payload for RagCollectionDeleteSuccess.RemoveTyped.
type RagCollectionDeleteSuccessRemoveMatch struct {
	RagId string `json:"rag_id"`
}

// RagCollectionDocumentDeleteSuccess is the typed data model for the rag_collection_document_delete_success entity.
type RagCollectionDocumentDeleteSuccess struct {
}

// RagCollectionDocumentDeleteSuccessRemoveMatch is the typed request payload for RagCollectionDocumentDeleteSuccess.RemoveTyped.
type RagCollectionDocumentDeleteSuccessRemoveMatch struct {
	CollectionId string `json:"collection_id"`
	FileName string `json:"file_name"`
}

// RagCollectionDocumentListSuccess is the typed data model for the rag_collection_document_list_success entity.
type RagCollectionDocumentListSuccess struct {
}

// RagCollectionDocumentListSuccessLoadMatch is the typed request payload for RagCollectionDocumentListSuccess.LoadTyped.
type RagCollectionDocumentListSuccessLoadMatch struct {
	CollectionId string `json:"collection_id"`
	Cursor *string `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
}

// RagCollectionDocumentTokenEstimateSuccess is the typed data model for the rag_collection_document_token_estimate_success entity.
type RagCollectionDocumentTokenEstimateSuccess struct {
}

// RagCollectionDocumentTokenEstimateSuccessCreateData is the typed request payload for RagCollectionDocumentTokenEstimateSuccess.CreateTyped.
type RagCollectionDocumentTokenEstimateSuccessCreateData struct {
	EstimatedCost float64 `json:"estimatedCost"`
	FileCount int `json:"fileCount"`
	FileDetails []any `json:"fileDetails"`
	ProcessingTime int `json:"processingTime"`
	Raw map[string]any `json:"raw"`
	TotalTokens int `json:"totalTokens"`
}

// RagCollectionDocumentUploadStatusSuccess is the typed data model for the rag_collection_document_upload_status_success entity.
type RagCollectionDocumentUploadStatusSuccess struct {
}

// RagCollectionDocumentUploadStatusSuccessLoadMatch is the typed request payload for RagCollectionDocumentUploadStatusSuccess.LoadTyped.
type RagCollectionDocumentUploadStatusSuccessLoadMatch struct {
	UploadId string `json:"upload_id"`
}

// RagCollectionDocumentUploadSuccess is the typed data model for the rag_collection_document_upload_success entity.
type RagCollectionDocumentUploadSuccess struct {
}

// RagCollectionDocumentUploadSuccessCreateData is the typed request payload for RagCollectionDocumentUploadSuccess.CreateTyped.
type RagCollectionDocumentUploadSuccessCreateData struct {
	CollectionId string `json:"collection_id"`
	Data map[string]any `json:"data"`
	Message string `json:"message"`
	Meta map[string]any `json:"meta"`
	RequestId string `json:"requestId"`
	Success bool `json:"success"`
}

// RuntimeBinding is the typed data model for the runtime_binding entity.
type RuntimeBinding struct {
}

// RuntimeBindingLoadMatch is the typed request payload for RuntimeBinding.LoadTyped.
type RuntimeBindingLoadMatch struct {
	AssistantId string `json:"assistant_id"`
}

// Tts is the typed data model for the tts entity.
type Tts struct {
}

// TtsLoadMatch is the typed request payload for Tts.LoadTyped.
type TtsLoadMatch struct {
	Data *map[string]any `json:"data,omitempty"`
	Message *string `json:"message,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	RequestId *string `json:"requestId,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// TtsVoiceListSuccess is the typed data model for the tts_voice_list_success entity.
type TtsVoiceListSuccess struct {
}

// TtsVoiceListSuccessLoadMatch is the typed request payload for TtsVoiceListSuccess.LoadTyped.
type TtsVoiceListSuccessLoadMatch struct {
	AssistantId string `json:"assistant_id"`
}

// Voice is the typed data model for the voice entity.
type Voice struct {
}

// VoiceLoadMatch is the typed request payload for Voice.LoadTyped.
type VoiceLoadMatch struct {
	AssistantId *string `json:"assistant_id,omitempty"`
	ModelCode string `json:"model_code"`
}

// VoiceLlm is the typed data model for the voice_llm entity.
type VoiceLlm struct {
}

// VoiceLlmLoadMatch is the typed request payload for VoiceLlm.LoadTyped.
type VoiceLlmLoadMatch struct {
	Data *map[string]any `json:"data,omitempty"`
	Message *string `json:"message,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	RequestId *string `json:"requestId,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// VoiceLlmModelListSuccess is the typed data model for the voice_llm_model_list_success entity.
type VoiceLlmModelListSuccess struct {
}

// VoiceLlmModelListSuccessLoadMatch is the typed request payload for VoiceLlmModelListSuccess.LoadTyped.
type VoiceLlmModelListSuccessLoadMatch struct {
	Provider string `json:"provider"`
	SourceMode *string `json:"source_mode,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
