package voxgig.ai4callsdk.core;

// Typed reference models for the Ai4call SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels (source of truth: @voxgig/apidef VALID_CANON). Do
// not edit by hand.
//
// These records are documentation/DX reference shapes ONLY. The SDK ops take
// and return the loose object model (Map<String, Object> / Object) at runtime,
// so these types are not wired into the op signatures — use them to describe a
// payload before converting it to a map. Every component is a boxed (nullable)
// type, so an optional (req:false) key needs no distinct rendering.

import java.util.List;
import java.util.Map;

public final class Ai4callTypes {

  private Ai4callTypes() {}

  public record AccountAllowedIpsSuccess(List<Object> addIps, List<Object> allowedIps, Map<String, Object> data, List<Object> deleteIps, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record AccountAllowedIpsSuccessLoadMatch(List<Object> addIps, List<Object> allowedIps, Map<String, Object> data, List<Object> deleteIps, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record AccountAllowedIpsSuccessUpdateData(List<Object> addIps, List<Object> allowedIps, Map<String, Object> data, List<Object> deleteIps, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record AccountAvailablePluginsSuccess(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record AccountAvailablePluginsSuccessLoadMatch(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record AccountCallLimitsSuccess(List<Object> assistants, Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record AccountCallLimitsSuccessLoadMatch(List<Object> assistants, Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record AccountCallLimitsSuccessUpdateData(List<Object> assistants, Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record AccountNumberRoutingSuccess(Map<String, Object> data, List<Object> demoNumbers, String message, Map<String, Object> meta, List<Object> purchasedNumbers, String requestId, Boolean success, List<Object> userNumbers) {}

  public record AccountNumberRoutingSuccessLoadMatch(Map<String, Object> data, List<Object> demoNumbers, String message, Map<String, Object> meta, List<Object> purchasedNumbers, String requestId, Boolean success, List<Object> userNumbers) {}

  public record AccountNumberRoutingSuccessUpdateData(Map<String, Object> data, List<Object> demoNumbers, String message, Map<String, Object> meta, List<Object> purchasedNumbers, String requestId, Boolean success, List<Object> userNumbers) {}

  public record AccountPluginConfigurationSuccess(Map<String, Object> configuration, String instanceName, String instance_name, String pluginName, String plugin_name) {}

  public record AccountPluginConfigurationSuccessLoadMatch(String instance_name, String plugin_name) {}

  public record AccountPluginConfigurationSuccessUpdateData(Map<String, Object> configuration, String instanceName, String instance_name, String pluginName, String plugin_name) {}

  public record AccountPluginInstanceSuccess(Map<String, Object> configuration, Map<String, Object> data, String instanceName, String instance_name, String message, Map<String, Object> meta, String newInstanceName, String new_instance_name, String pluginName, String plugin_name, String requestId, String status, Boolean success) {}

  public record AccountPluginInstanceSuccessLoadMatch(String cursor, Long limit) {}

  public record AccountPluginInstanceSuccessCreateData(Map<String, Object> configuration, Map<String, Object> data, String instanceName, String instance_name, String message, Map<String, Object> meta, String newInstanceName, String new_instance_name, String pluginName, String plugin_name, String requestId, String status, Boolean success) {}

  public record AccountPluginInstanceSuccessUpdateData(String instance_id, Map<String, Object> configuration, Map<String, Object> data, String instanceName, String instance_name, String message, Map<String, Object> meta, String newInstanceName, String new_instance_name, String pluginName, String plugin_name, String requestId, String status, Boolean success) {}

  public record AccountPluginInstanceSuccessRemoveMatch(String instance_id) {}

  public record AccountPluginPurchaseSuccess(Map<String, Object> configuration, String instanceName, String instance_name, String pluginName, String plugin_name) {}

  public record AccountPluginPurchaseSuccessUpdateData(Map<String, Object> configuration, String instanceName, String instance_name, String pluginName, String plugin_name) {}

  public record AnalyticsCallsOutboundSuccess(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record AnalyticsCallsOutboundSuccessLoadMatch(String cursor, String end_date, String internal_id, Long limit, String start_date) {}

  public record AnalyticsCallsSuccess(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record AnalyticsCallsSuccessLoadMatch(String cursor, String end_date, Long limit, String start_date) {}

  public record AnalyticsPostCallSuccess(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record AnalyticsPostCallSuccessLoadMatch(String cursor, String end_date, Long limit, String start_date) {}

  public record AnalyticsPreCallSuccess(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record AnalyticsPreCallSuccessLoadMatch(String cursor, String end_date, Long limit, String start_date) {}

  public record AnalyticsRagSearchSuccess(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record AnalyticsRagSearchSuccessLoadMatch(String cursor, String end_date, Long limit, String start_date) {}

  public record AnalyticsRagSuccess(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record AnalyticsRagSuccessLoadMatch(String cursor, String end_date, Long limit, String start_date) {}

  public record AnalyticsRechargesSuccess(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record AnalyticsRechargesSuccessLoadMatch(String cursor, String end_date, Long limit, String start_date) {}

  public record AnalyticsSmsSuccess(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record AnalyticsSmsSuccessLoadMatch(String cursor, String end_date, Long limit, String start_date) {}

  public record AnalyticsToolResponsesSuccess(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record AnalyticsToolResponsesSuccessLoadMatch(String cursor, String end_date, Long limit, String start_date) {}

  public record Asr(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record AsrLoadMatch(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record AsrModelListSuccess(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record AsrModelListSuccessLoadMatch(String assistant_id) {}

  public record Assistant(Object assistant, Object audioToAudio, Map<String, Object> data, String description, Map<String, Object> firstMessage, String id, String message, Map<String, Object> meta, Map<String, Object> metadata, String mode, String name, Map<String, Object> network, Map<String, Object> numbers, String requestId, Map<String, Object> settings, String status, Boolean success, Map<String, Object> voiceToVoice) {}

  public record AssistantLoadMatch(String id) {}

  public record AssistantCreateData(Object assistant, Object audioToAudio, Map<String, Object> data, String description, Map<String, Object> firstMessage, String id, String message, Map<String, Object> meta, Map<String, Object> metadata, String mode, String name, Map<String, Object> network, Map<String, Object> numbers, String requestId, Map<String, Object> settings, String status, Boolean success, Map<String, Object> voiceToVoice) {}

  public record AssistantUpdateData(String id, Object assistant, Object audioToAudio, Map<String, Object> data, String description, Map<String, Object> firstMessage, String message, Map<String, Object> meta, Map<String, Object> metadata, String mode, String name, Map<String, Object> network, Map<String, Object> numbers, String requestId, Map<String, Object> settings, String status, Boolean success, Map<String, Object> voiceToVoice) {}

  public record AssistantRemoveMatch(String id) {}

  public record AssistantAdvancedSettingsConfigurationSuccess(String id) {}

  public record AssistantAdvancedSettingsConfigurationSuccessLoadMatch(String id) {}

  public record AssistantAdvancedSettingsRuntimeUpdateSuccess(String assistantApiKey, String assistantId, Map<String, Object> configuration, Double freqPenalty, Long maxTokens, Double presencePenalty, String service, List<Object> stopSequences, Double temperature, Long topK, Double topP) {}

  public record AssistantAdvancedSettingsRuntimeUpdateSuccessUpdateData(String assistant_id, String assistantApiKey, String assistantId, Map<String, Object> configuration, Double freqPenalty, Long maxTokens, Double presencePenalty, String service, List<Object> stopSequences, Double temperature, Long topK, Double topP) {}

  public record AssistantAsrRuntimeUpdateSuccess(String apiKey, String assistantApiKey, String assistantId, Map<String, Object> configuration, String engineCode, Long providerWalletId, Map<String, Object> runtimeBinding, String service, String sourceMode) {}

  public record AssistantAsrRuntimeUpdateSuccessUpdateData(String assistant_id, String apiKey, String assistantApiKey, String assistantId, Map<String, Object> configuration, String engineCode, Long providerWalletId, Map<String, Object> runtimeBinding, String service, String sourceMode) {}

  public record AssistantConversationWebhookRuntimeSuccess(String authName, Map<String, Object> configuration, Boolean enabled, String url) {}

  public record AssistantConversationWebhookRuntimeSuccessLoadMatch(String assistant_id) {}

  public record AssistantConversationWebhookRuntimeSuccessUpdateData(String assistant_id, String authName, Map<String, Object> configuration, Boolean enabled, String url) {}

  public record AssistantDtmfConfigurationSuccess(String id) {}

  public record AssistantDtmfConfigurationSuccessLoadMatch(String id) {}

  public record AssistantDtmfRuntimeUpdateSuccess(Long acceptTimeout, String assistantApiKey, String assistantId, Map<String, Object> configuration, Boolean enabled, Long maxLength, Long minLength, Boolean playEnabled, String service, String terminationChars) {}

  public record AssistantDtmfRuntimeUpdateSuccessUpdateData(String assistant_id, Long acceptTimeout, String assistantApiKey, String assistantId, Map<String, Object> configuration, Boolean enabled, Long maxLength, Long minLength, Boolean playEnabled, String service, String terminationChars) {}

  public record AssistantHangupConfigurationSuccess(String id) {}

  public record AssistantHangupConfigurationSuccessLoadMatch(String id) {}

  public record AssistantHangupRuntimeUpdateSuccess(String assistantApiKey, String assistantId, List<Object> availableAgents, Map<String, Object> configuration, Boolean enableHangup, Boolean enableRedirect, Boolean enableTransferAgent, String service, String transferAgentNotificationText) {}

  public record AssistantHangupRuntimeUpdateSuccessUpdateData(String assistant_id, String assistantApiKey, String assistantId, List<Object> availableAgents, Map<String, Object> configuration, Boolean enableHangup, Boolean enableRedirect, Boolean enableTransferAgent, String service, String transferAgentNotificationText) {}

  public record AssistantHangupSchemaRuntimeSuccess(Map<String, Object> configuration, String hangupUrl, List<Object> schema) {}

  public record AssistantHangupSchemaRuntimeSuccessLoadMatch(String assistant_id) {}

  public record AssistantHangupSchemaRuntimeSuccessUpdateData(String assistant_id, Map<String, Object> configuration, String hangupUrl, List<Object> schema) {}

  public record AssistantKnowledgeSuccess(String id) {}

  public record AssistantKnowledgeSuccessLoadMatch(String id) {}

  public record AssistantKnowledgeSuccessUpdateData(String id) {}

  public record AssistantLlmRuntimeUpdateSuccess(String apiKey, String assistantApiKey, String assistantId, String baseUrl, Map<String, Object> configuration, String engineCode, String modelCode, Long providerWalletId, Map<String, Object> runtimeBinding, String service, String sourceMode) {}

  public record AssistantLlmRuntimeUpdateSuccessUpdateData(String assistant_id, String apiKey, String assistantApiKey, String assistantId, String baseUrl, Map<String, Object> configuration, String engineCode, String modelCode, Long providerWalletId, Map<String, Object> runtimeBinding, String service, String sourceMode) {}

  public record AssistantNumberRoutingCatalogSuccess(String id) {}

  public record AssistantNumberRoutingCatalogSuccessLoadMatch(String id) {}

  public record AssistantNumberRoutingRuntimeSuccess(Map<String, Object> configuration, List<Object> demoNumbers, List<Object> purchasedNumbers, List<Object> userNumbers) {}

  public record AssistantNumberRoutingRuntimeSuccessUpdateData(String assistant_id, Map<String, Object> configuration, List<Object> demoNumbers, List<Object> purchasedNumbers, List<Object> userNumbers) {}

  public record AssistantPostcallMcpRuntimeSuccess(Map<String, Object> configuration, Boolean enabled, String globalPrompt, Map<String, Object> modelConfig, List<Object> tools) {}

  public record AssistantPostcallMcpRuntimeSuccessLoadMatch(String assistant_id) {}

  public record AssistantPostcallMcpRuntimeSuccessUpdateData(String assistant_id, Map<String, Object> configuration, Boolean enabled, String globalPrompt, Map<String, Object> modelConfig, List<Object> tools) {}

  public record AssistantPrecallMcpRuntimeSuccess(Map<String, Object> configuration, Boolean earlyTerminationEnabled, Boolean enabled, String globalPrompt, Map<String, Object> modelConfig, Map<String, Object> outputSchema, List<Object> outputVariables, String terminationMessage, List<Object> tools, Map<String, Object> voiceConfig, Boolean waitingAudioNonInterruptible, String waitingAudioText) {}

  public record AssistantPrecallMcpRuntimeSuccessLoadMatch(String assistant_id) {}

  public record AssistantPrecallMcpRuntimeSuccessUpdateData(String assistant_id, Map<String, Object> configuration, Boolean earlyTerminationEnabled, Boolean enabled, String globalPrompt, Map<String, Object> modelConfig, Map<String, Object> outputSchema, List<Object> outputVariables, String terminationMessage, List<Object> tools, Map<String, Object> voiceConfig, Boolean waitingAudioNonInterruptible, String waitingAudioText) {}

  public record AssistantPrecallValidationRuntimeSuccess(String authPassword, String authToken, String authType, String authUsername, Object configuration, Map<String, Object> headersJson, Boolean isActive, String method, String name, String numberLocation, String numberParamName, Long timeoutMs, String url) {}

  public record AssistantPrecallValidationRuntimeSuccessLoadMatch(String assistant_id) {}

  public record AssistantPrecallValidationRuntimeSuccessUpdateData(String assistant_id, String authPassword, String authToken, String authType, String authUsername, Object configuration, Map<String, Object> headersJson, Boolean isActive, String method, String name, String numberLocation, String numberParamName, Long timeoutMs, String url) {}

  public record AssistantPromptSuccess(String id) {}

  public record AssistantPromptSuccessLoadMatch(String id) {}

  public record AssistantRagConfigurationSuccess(Boolean enabled, String kbPrompt, String name, Long returnedChunks) {}

  public record AssistantRagConfigurationSuccessLoadMatch(String assistant_id) {}

  public record AssistantRagRuntimeUpdateSuccess(String assistantApiKey, String assistantId, Map<String, Object> configuration, Boolean enabled, String kbPrompt, String name, Long returnedChunks, String service) {}

  public record AssistantRagRuntimeUpdateSuccessUpdateData(String assistant_id, String assistantApiKey, String assistantId, Map<String, Object> configuration, Boolean enabled, String kbPrompt, String name, Long returnedChunks, String service) {}

  public record AssistantSaveConversationRuntimeSuccess(Map<String, Object> configuration, String emails, Boolean enabled, String smtpInstanceName, String smtp_instance_name) {}

  public record AssistantSaveConversationRuntimeSuccessLoadMatch(String assistant_id) {}

  public record AssistantSaveConversationRuntimeSuccessUpdateData(String assistant_id, Map<String, Object> configuration, String emails, Boolean enabled, String smtpInstanceName, String smtp_instance_name) {}

  public record AssistantSettingsConfigurationSuccess(String id) {}

  public record AssistantSettingsConfigurationSuccessLoadMatch(String id) {}

  public record AssistantSettingsRuntimeUpdateSuccess(Long asrInitialDelayMs, Long asrSilenceMs, String assistantApiKey, String assistantId, Map<String, Object> callPermissions, Map<String, Object> configuration, Long dynamicTimeoutMs, Map<String, Object> filler, Long maxResponseLength, Map<String, Object> reprompt, String service, Boolean truncateInitialAudio, Boolean ttsInterruptionInConversation, Boolean vad, Long vadMinVoiceMs, Double vadThreshold) {}

  public record AssistantSettingsRuntimeUpdateSuccessUpdateData(String assistant_id, Long asrInitialDelayMs, Long asrSilenceMs, String assistantApiKey, String assistantId, Map<String, Object> callPermissions, Map<String, Object> configuration, Long dynamicTimeoutMs, Map<String, Object> filler, Long maxResponseLength, Map<String, Object> reprompt, String service, Boolean truncateInitialAudio, Boolean ttsInterruptionInConversation, Boolean vad, Long vadMinVoiceMs, Double vadThreshold) {}

  public record AssistantToolsRuntimeUpdateSuccess(String assistantApiKey, String assistantId, Map<String, Object> configuration, String service) {}

  public record AssistantToolsRuntimeUpdateSuccessUpdateData(String assistant_id, String assistantApiKey, String assistantId, Map<String, Object> configuration, String service) {}

  public record AssistantTtsRuntimeUpdateSuccess(String apiKey, String assistantApiKey, String assistantId, Map<String, Object> configuration, String engineCode, Long providerWalletId, String region, Map<String, Object> runtimeBinding, String service, String sourceMode, String voiceCode) {}

  public record AssistantTtsRuntimeUpdateSuccessUpdateData(String assistant_id, String apiKey, String assistantApiKey, String assistantId, Map<String, Object> configuration, String engineCode, Long providerWalletId, String region, Map<String, Object> runtimeBinding, String service, String sourceMode, String voiceCode) {}

  public record AssistantVoiceToVoiceRuntimeUpdateSuccess(String apiKey, String assistantApiKey, String assistantId, String baseUrl, Map<String, Object> configuration, String engineCode, String modelCode, String prompt, Long providerWalletId, String service, String voiceCode) {}

  public record AssistantVoiceToVoiceRuntimeUpdateSuccessUpdateData(String assistant_id, String apiKey, String assistantApiKey, String assistantId, String baseUrl, Map<String, Object> configuration, String engineCode, String modelCode, String prompt, Long providerWalletId, String service, String voiceCode) {}

  public record AssociatedRuntimeToolListSuccess(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record AssociatedRuntimeToolListSuccessLoadMatch(String assistant_id) {}

  public record AudioToAudio(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record AudioToAudioLoadMatch(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record AvailableRuntimeToolListSuccess(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record AvailableRuntimeToolListSuccessLoadMatch(String cursor, Long limit) {}

  public record FillerPhraseList(Map<String, Object> associations, Map<String, Object> data, String id, Map<String, Object> list, String message, Map<String, Object> meta, String name, List<Object> phrases, String requestId, Boolean success, List<Object> toolListIds, List<Object> waitingListIds) {}

  public record FillerPhraseListLoadMatch(String id) {}

  public record FillerPhraseListCreateData(Map<String, Object> associations, Map<String, Object> data, String id, Map<String, Object> list, String message, Map<String, Object> meta, String name, List<Object> phrases, String requestId, Boolean success, List<Object> toolListIds, List<Object> waitingListIds) {}

  public record FillerPhraseListUpdateData(String id, Map<String, Object> associations, Map<String, Object> data, Map<String, Object> list, String message, Map<String, Object> meta, String name, List<Object> phrases, String requestId, Boolean success, List<Object> toolListIds, List<Object> waitingListIds) {}

  public record FillerPhraseListRemoveMatch(String id) {}

  public record Health(String dataSource, String service, String status) {}

  public record HealthLoadMatch(String dataSource, String service, String status) {}

  public record Knowledge(Map<String, Object> data, String defaultPostAction, String defaultResponse, String id, Map<String, Object> knowledge, String message, Map<String, Object> meta, String requestId, String rules, Boolean success, String title, List<Object> triggers) {}

  public record KnowledgeLoadMatch(Long id) {}

  public record KnowledgeCreateData(Map<String, Object> data, String defaultPostAction, String defaultResponse, String id, Map<String, Object> knowledge, String message, Map<String, Object> meta, String requestId, String rules, Boolean success, String title, List<Object> triggers) {}

  public record KnowledgeUpdateData(Long id, Map<String, Object> data, String defaultPostAction, String defaultResponse, Map<String, Object> knowledge, String message, Map<String, Object> meta, String requestId, String rules, Boolean success, String title, List<Object> triggers) {}

  public record KnowledgeRemoveMatch(Long id) {}

  public record Llm(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record LlmLoadMatch(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record LlmModelListSuccess(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record LlmModelListSuccessLoadMatch(String assistant_id) {}

  public record OutboundCall(String AddPrompt, String addPrompt, String apiKey_assistente, String assistantApiKey, String callId, String callResultUrl, Boolean callbackConfigured, String callerId, String dst, String internalId, String status, Object url_esito_chiamata) {}

  public record OutboundCallCreateData(String AddPrompt, String addPrompt, String apiKey_assistente, String assistantApiKey, String callId, String callResultUrl, Boolean callbackConfigured, String callerId, String dst, String internalId, String status, Object url_esito_chiamata) {}

  public record OutboundCallAcceptedSuccess(String AddPrompt, String addPrompt, String apiKey_assistente, String assistantApiKey, String callId, String callResultUrl, Boolean callbackConfigured, String callerId, String dst, String internalId, String ipPbx, String ip_pbx, Boolean method_uac, String sipPort, String sip_port, String status, Object url_esito_chiamata) {}

  public record OutboundCallAcceptedSuccessCreateData(String AddPrompt, String addPrompt, String apiKey_assistente, String assistantApiKey, String callId, String callResultUrl, Boolean callbackConfigured, String callerId, String dst, String internalId, String ipPbx, String ip_pbx, Boolean method_uac, String sipPort, String sip_port, String status, Object url_esito_chiamata) {}

  public record OutboundDialStatusPayload(Long billSec, String dialStatus, String trafficCost) {}

  public record OutboundDialStatusPayloadLoadMatch(String uuid) {}

  public record PortalLoginSuccess(Map<String, Object> client, String email, String portalApiKey) {}

  public record PortalLoginSuccessCreateData(Map<String, Object> client, String email, String portalApiKey) {}

  public record PreCall(Map<String, Object> configuration) {}

  public record PreCallLoadMatch(String assistant_id) {}

  public record ProviderWallet(Map<String, Object> config, Map<String, Object> credential, Map<String, Object> data, String engine, String id, Boolean isActive, String message, Map<String, Object> meta, String name, String provider, String requestId, String serviceType, Boolean success) {}

  public record ProviderWalletLoadMatch(Long id) {}

  public record ProviderWalletCreateData(Map<String, Object> config, Map<String, Object> credential, Map<String, Object> data, String engine, String id, Boolean isActive, String message, Map<String, Object> meta, String name, String provider, String requestId, String serviceType, Boolean success) {}

  public record ProviderWalletUpdateData(Long id, Map<String, Object> config, Map<String, Object> credential, Map<String, Object> data, String engine, Boolean isActive, String message, Map<String, Object> meta, String name, String provider, String requestId, String serviceType, Boolean success) {}

  public record ProviderWalletRemoveMatch(Long id) {}

  public record ProviderWalletAssociationsSuccess(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record ProviderWalletAssociationsSuccessLoadMatch(String assistant_id) {}

  public record ProviderWalletCatalogSuccess(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record ProviderWalletCatalogSuccessLoadMatch(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record PublicRagSearchSuccess(Long count, String query, String rag_id, List<Object> results) {}

  public record PublicRagSearchSuccessCreateData(Long count, String query, String rag_id, List<Object> results) {}

  public record RagCollectionDeleteSuccess(Map<String, Object> data, String description, Long maxChunkSize, Long maxChunksPerFile, String message, Map<String, Object> meta, String name, String requestId, Boolean success) {}

  public record RagCollectionDeleteSuccessLoadMatch(String cursor, Long limit) {}

  public record RagCollectionDeleteSuccessCreateData(Map<String, Object> data, String description, Long maxChunkSize, Long maxChunksPerFile, String message, Map<String, Object> meta, String name, String requestId, Boolean success) {}

  public record RagCollectionDeleteSuccessRemoveMatch(String rag_id) {}

  public record RagCollectionDocumentDeleteSuccess() {}

  public record RagCollectionDocumentDeleteSuccessRemoveMatch(String collection_id, String file_name) {}

  public record RagCollectionDocumentListSuccess(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record RagCollectionDocumentListSuccessLoadMatch(String collection_id, String cursor, Long limit) {}

  public record RagCollectionDocumentTokenEstimateSuccess(Double estimatedCost, Long fileCount, List<Object> fileDetails, Long processingTime, Map<String, Object> raw, Long totalTokens) {}

  public record RagCollectionDocumentTokenEstimateSuccessCreateData(Double estimatedCost, Long fileCount, List<Object> fileDetails, Long processingTime, Map<String, Object> raw, Long totalTokens) {}

  public record RagCollectionDocumentUploadStatusSuccess(String currentFile, List<Object> errors, Long processedFiles, Double progress, Map<String, Object> raw, List<Object> results, String status, Double totalCost, Long totalFiles, Long totalTokens, String uploadId) {}

  public record RagCollectionDocumentUploadStatusSuccessLoadMatch(String upload_id) {}

  public record RagCollectionDocumentUploadSuccess(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record RagCollectionDocumentUploadSuccessCreateData(String collection_id, Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record RuntimeBinding(String assistantApiKey, String assistantId, Map<String, Object> runtimeBindings) {}

  public record RuntimeBindingLoadMatch(String assistant_id) {}

  public record Tts(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record TtsLoadMatch(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record TtsVoiceListSuccess(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record TtsVoiceListSuccessLoadMatch(String assistant_id) {}

  public record Voice(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record VoiceLoadMatch(String assistant_id, String model_code) {}

  public record VoiceLlm(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record VoiceLlmLoadMatch(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record VoiceLlmModelListSuccess(Map<String, Object> data, String message, Map<String, Object> meta, String requestId, Boolean success) {}

  public record VoiceLlmModelListSuccessLoadMatch(String provider, String source_mode) {}

}
