package voxgig.ai4callsdk.core;

import java.util.Map;

/**
 * Ai4call SDK client. All transport and pipeline behaviour lives in
 * the SdkClient base (core/SdkClient.java); this class binds the
 * API-specific entity accessors and the test-mode constructor.
 */
public class Ai4callSDK extends SdkClient {

  public Ai4callSDK() {
    this(null);
  }

  public Ai4callSDK(Map<String, Object> options) {
    super(options);
  }


  /**
   * Returns a account_allowed_ips_success entity bound to this client.
   * Idiomatic usage: client.accountAllowedIpsSuccess(null).list(null, null) or
   * client.accountAllowedIpsSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity accountAllowedIpsSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AccountAllowedIpsSuccessEntity(this, entopts);
  }

  /**
   * Returns a account_available_plugins_success entity bound to this client.
   * Idiomatic usage: client.accountAvailablePluginsSuccess(null).list(null, null) or
   * client.accountAvailablePluginsSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity accountAvailablePluginsSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AccountAvailablePluginsSuccessEntity(this, entopts);
  }

  /**
   * Returns a account_call_limits_success entity bound to this client.
   * Idiomatic usage: client.accountCallLimitsSuccess(null).list(null, null) or
   * client.accountCallLimitsSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity accountCallLimitsSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AccountCallLimitsSuccessEntity(this, entopts);
  }

  /**
   * Returns a account_number_routing_success entity bound to this client.
   * Idiomatic usage: client.accountNumberRoutingSuccess(null).list(null, null) or
   * client.accountNumberRoutingSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity accountNumberRoutingSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AccountNumberRoutingSuccessEntity(this, entopts);
  }

  /**
   * Returns a account_plugin_configuration_success entity bound to this client.
   * Idiomatic usage: client.accountPluginConfigurationSuccess(null).list(null, null) or
   * client.accountPluginConfigurationSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity accountPluginConfigurationSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AccountPluginConfigurationSuccessEntity(this, entopts);
  }

  /**
   * Returns a account_plugin_instance_success entity bound to this client.
   * Idiomatic usage: client.accountPluginInstanceSuccess(null).list(null, null) or
   * client.accountPluginInstanceSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity accountPluginInstanceSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AccountPluginInstanceSuccessEntity(this, entopts);
  }

  /**
   * Returns a account_plugin_purchase_success entity bound to this client.
   * Idiomatic usage: client.accountPluginPurchaseSuccess(null).list(null, null) or
   * client.accountPluginPurchaseSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity accountPluginPurchaseSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AccountPluginPurchaseSuccessEntity(this, entopts);
  }

  /**
   * Returns a analytics_calls_outbound_success entity bound to this client.
   * Idiomatic usage: client.analyticsCallsOutboundSuccess(null).list(null, null) or
   * client.analyticsCallsOutboundSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity analyticsCallsOutboundSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AnalyticsCallsOutboundSuccessEntity(this, entopts);
  }

  /**
   * Returns a analytics_calls_success entity bound to this client.
   * Idiomatic usage: client.analyticsCallsSuccess(null).list(null, null) or
   * client.analyticsCallsSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity analyticsCallsSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AnalyticsCallsSuccessEntity(this, entopts);
  }

  /**
   * Returns a analytics_post_call_success entity bound to this client.
   * Idiomatic usage: client.analyticsPostCallSuccess(null).list(null, null) or
   * client.analyticsPostCallSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity analyticsPostCallSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AnalyticsPostCallSuccessEntity(this, entopts);
  }

  /**
   * Returns a analytics_pre_call_success entity bound to this client.
   * Idiomatic usage: client.analyticsPreCallSuccess(null).list(null, null) or
   * client.analyticsPreCallSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity analyticsPreCallSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AnalyticsPreCallSuccessEntity(this, entopts);
  }

  /**
   * Returns a analytics_rag_search_success entity bound to this client.
   * Idiomatic usage: client.analyticsRagSearchSuccess(null).list(null, null) or
   * client.analyticsRagSearchSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity analyticsRagSearchSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AnalyticsRagSearchSuccessEntity(this, entopts);
  }

  /**
   * Returns a analytics_rag_success entity bound to this client.
   * Idiomatic usage: client.analyticsRagSuccess(null).list(null, null) or
   * client.analyticsRagSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity analyticsRagSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AnalyticsRagSuccessEntity(this, entopts);
  }

  /**
   * Returns a analytics_recharges_success entity bound to this client.
   * Idiomatic usage: client.analyticsRechargesSuccess(null).list(null, null) or
   * client.analyticsRechargesSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity analyticsRechargesSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AnalyticsRechargesSuccessEntity(this, entopts);
  }

  /**
   * Returns a analytics_sms_success entity bound to this client.
   * Idiomatic usage: client.analyticsSmsSuccess(null).list(null, null) or
   * client.analyticsSmsSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity analyticsSmsSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AnalyticsSmsSuccessEntity(this, entopts);
  }

  /**
   * Returns a analytics_tool_responses_success entity bound to this client.
   * Idiomatic usage: client.analyticsToolResponsesSuccess(null).list(null, null) or
   * client.analyticsToolResponsesSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity analyticsToolResponsesSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AnalyticsToolResponsesSuccessEntity(this, entopts);
  }

  /**
   * Returns a asr entity bound to this client.
   * Idiomatic usage: client.asr(null).list(null, null) or
   * client.asr(null).load(Map.of("id", ...), null).
   */
  public SdkEntity asr(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AsrEntity(this, entopts);
  }

  /**
   * Returns a asr_model_list_success entity bound to this client.
   * Idiomatic usage: client.asrModelListSuccess(null).list(null, null) or
   * client.asrModelListSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity asrModelListSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AsrModelListSuccessEntity(this, entopts);
  }

  /**
   * Returns a assistant entity bound to this client.
   * Idiomatic usage: client.assistant(null).list(null, null) or
   * client.assistant(null).load(Map.of("id", ...), null).
   */
  public SdkEntity assistant(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AssistantEntity(this, entopts);
  }

  /**
   * Returns a assistant_advanced_settings_configuration_success entity bound to this client.
   * Idiomatic usage: client.assistantAdvancedSettingsConfigurationSuccess(null).list(null, null) or
   * client.assistantAdvancedSettingsConfigurationSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity assistantAdvancedSettingsConfigurationSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AssistantAdvancedSettingsConfigurationSuccessEntity(this, entopts);
  }

  /**
   * Returns a assistant_advanced_settings_runtime_update_success entity bound to this client.
   * Idiomatic usage: client.assistantAdvancedSettingsRuntimeUpdateSuccess(null).list(null, null) or
   * client.assistantAdvancedSettingsRuntimeUpdateSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity assistantAdvancedSettingsRuntimeUpdateSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AssistantAdvancedSettingsRuntimeUpdateSuccessEntity(this, entopts);
  }

  /**
   * Returns a assistant_asr_runtime_update_success entity bound to this client.
   * Idiomatic usage: client.assistantAsrRuntimeUpdateSuccess(null).list(null, null) or
   * client.assistantAsrRuntimeUpdateSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity assistantAsrRuntimeUpdateSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AssistantAsrRuntimeUpdateSuccessEntity(this, entopts);
  }

  /**
   * Returns a assistant_conversation_webhook_runtime_success entity bound to this client.
   * Idiomatic usage: client.assistantConversationWebhookRuntimeSuccess(null).list(null, null) or
   * client.assistantConversationWebhookRuntimeSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity assistantConversationWebhookRuntimeSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AssistantConversationWebhookRuntimeSuccessEntity(this, entopts);
  }

  /**
   * Returns a assistant_dtmf_configuration_success entity bound to this client.
   * Idiomatic usage: client.assistantDtmfConfigurationSuccess(null).list(null, null) or
   * client.assistantDtmfConfigurationSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity assistantDtmfConfigurationSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AssistantDtmfConfigurationSuccessEntity(this, entopts);
  }

  /**
   * Returns a assistant_dtmf_runtime_update_success entity bound to this client.
   * Idiomatic usage: client.assistantDtmfRuntimeUpdateSuccess(null).list(null, null) or
   * client.assistantDtmfRuntimeUpdateSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity assistantDtmfRuntimeUpdateSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AssistantDtmfRuntimeUpdateSuccessEntity(this, entopts);
  }

  /**
   * Returns a assistant_hangup_configuration_success entity bound to this client.
   * Idiomatic usage: client.assistantHangupConfigurationSuccess(null).list(null, null) or
   * client.assistantHangupConfigurationSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity assistantHangupConfigurationSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AssistantHangupConfigurationSuccessEntity(this, entopts);
  }

  /**
   * Returns a assistant_hangup_runtime_update_success entity bound to this client.
   * Idiomatic usage: client.assistantHangupRuntimeUpdateSuccess(null).list(null, null) or
   * client.assistantHangupRuntimeUpdateSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity assistantHangupRuntimeUpdateSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AssistantHangupRuntimeUpdateSuccessEntity(this, entopts);
  }

  /**
   * Returns a assistant_hangup_schema_runtime_success entity bound to this client.
   * Idiomatic usage: client.assistantHangupSchemaRuntimeSuccess(null).list(null, null) or
   * client.assistantHangupSchemaRuntimeSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity assistantHangupSchemaRuntimeSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AssistantHangupSchemaRuntimeSuccessEntity(this, entopts);
  }

  /**
   * Returns a assistant_knowledge_success entity bound to this client.
   * Idiomatic usage: client.assistantKnowledgeSuccess(null).list(null, null) or
   * client.assistantKnowledgeSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity assistantKnowledgeSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AssistantKnowledgeSuccessEntity(this, entopts);
  }

  /**
   * Returns a assistant_llm_runtime_update_success entity bound to this client.
   * Idiomatic usage: client.assistantLlmRuntimeUpdateSuccess(null).list(null, null) or
   * client.assistantLlmRuntimeUpdateSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity assistantLlmRuntimeUpdateSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AssistantLlmRuntimeUpdateSuccessEntity(this, entopts);
  }

  /**
   * Returns a assistant_number_routing_catalog_success entity bound to this client.
   * Idiomatic usage: client.assistantNumberRoutingCatalogSuccess(null).list(null, null) or
   * client.assistantNumberRoutingCatalogSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity assistantNumberRoutingCatalogSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AssistantNumberRoutingCatalogSuccessEntity(this, entopts);
  }

  /**
   * Returns a assistant_number_routing_runtime_success entity bound to this client.
   * Idiomatic usage: client.assistantNumberRoutingRuntimeSuccess(null).list(null, null) or
   * client.assistantNumberRoutingRuntimeSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity assistantNumberRoutingRuntimeSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AssistantNumberRoutingRuntimeSuccessEntity(this, entopts);
  }

  /**
   * Returns a assistant_postcall_mcp_runtime_success entity bound to this client.
   * Idiomatic usage: client.assistantPostcallMcpRuntimeSuccess(null).list(null, null) or
   * client.assistantPostcallMcpRuntimeSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity assistantPostcallMcpRuntimeSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AssistantPostcallMcpRuntimeSuccessEntity(this, entopts);
  }

  /**
   * Returns a assistant_precall_mcp_runtime_success entity bound to this client.
   * Idiomatic usage: client.assistantPrecallMcpRuntimeSuccess(null).list(null, null) or
   * client.assistantPrecallMcpRuntimeSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity assistantPrecallMcpRuntimeSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AssistantPrecallMcpRuntimeSuccessEntity(this, entopts);
  }

  /**
   * Returns a assistant_precall_validation_runtime_success entity bound to this client.
   * Idiomatic usage: client.assistantPrecallValidationRuntimeSuccess(null).list(null, null) or
   * client.assistantPrecallValidationRuntimeSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity assistantPrecallValidationRuntimeSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AssistantPrecallValidationRuntimeSuccessEntity(this, entopts);
  }

  /**
   * Returns a assistant_prompt_success entity bound to this client.
   * Idiomatic usage: client.assistantPromptSuccess(null).list(null, null) or
   * client.assistantPromptSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity assistantPromptSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AssistantPromptSuccessEntity(this, entopts);
  }

  /**
   * Returns a assistant_rag_configuration_success entity bound to this client.
   * Idiomatic usage: client.assistantRagConfigurationSuccess(null).list(null, null) or
   * client.assistantRagConfigurationSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity assistantRagConfigurationSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AssistantRagConfigurationSuccessEntity(this, entopts);
  }

  /**
   * Returns a assistant_rag_runtime_update_success entity bound to this client.
   * Idiomatic usage: client.assistantRagRuntimeUpdateSuccess(null).list(null, null) or
   * client.assistantRagRuntimeUpdateSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity assistantRagRuntimeUpdateSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AssistantRagRuntimeUpdateSuccessEntity(this, entopts);
  }

  /**
   * Returns a assistant_save_conversation_runtime_success entity bound to this client.
   * Idiomatic usage: client.assistantSaveConversationRuntimeSuccess(null).list(null, null) or
   * client.assistantSaveConversationRuntimeSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity assistantSaveConversationRuntimeSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AssistantSaveConversationRuntimeSuccessEntity(this, entopts);
  }

  /**
   * Returns a assistant_settings_configuration_success entity bound to this client.
   * Idiomatic usage: client.assistantSettingsConfigurationSuccess(null).list(null, null) or
   * client.assistantSettingsConfigurationSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity assistantSettingsConfigurationSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AssistantSettingsConfigurationSuccessEntity(this, entopts);
  }

  /**
   * Returns a assistant_settings_runtime_update_success entity bound to this client.
   * Idiomatic usage: client.assistantSettingsRuntimeUpdateSuccess(null).list(null, null) or
   * client.assistantSettingsRuntimeUpdateSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity assistantSettingsRuntimeUpdateSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AssistantSettingsRuntimeUpdateSuccessEntity(this, entopts);
  }

  /**
   * Returns a assistant_tools_runtime_update_success entity bound to this client.
   * Idiomatic usage: client.assistantToolsRuntimeUpdateSuccess(null).list(null, null) or
   * client.assistantToolsRuntimeUpdateSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity assistantToolsRuntimeUpdateSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AssistantToolsRuntimeUpdateSuccessEntity(this, entopts);
  }

  /**
   * Returns a assistant_tts_runtime_update_success entity bound to this client.
   * Idiomatic usage: client.assistantTtsRuntimeUpdateSuccess(null).list(null, null) or
   * client.assistantTtsRuntimeUpdateSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity assistantTtsRuntimeUpdateSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AssistantTtsRuntimeUpdateSuccessEntity(this, entopts);
  }

  /**
   * Returns a assistant_voice_to_voice_runtime_update_success entity bound to this client.
   * Idiomatic usage: client.assistantVoiceToVoiceRuntimeUpdateSuccess(null).list(null, null) or
   * client.assistantVoiceToVoiceRuntimeUpdateSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity assistantVoiceToVoiceRuntimeUpdateSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AssistantVoiceToVoiceRuntimeUpdateSuccessEntity(this, entopts);
  }

  /**
   * Returns a associated_runtime_tool_list_success entity bound to this client.
   * Idiomatic usage: client.associatedRuntimeToolListSuccess(null).list(null, null) or
   * client.associatedRuntimeToolListSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity associatedRuntimeToolListSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AssociatedRuntimeToolListSuccessEntity(this, entopts);
  }

  /**
   * Returns a audio_to_audio entity bound to this client.
   * Idiomatic usage: client.audioToAudio(null).list(null, null) or
   * client.audioToAudio(null).load(Map.of("id", ...), null).
   */
  public SdkEntity audioToAudio(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AudioToAudioEntity(this, entopts);
  }

  /**
   * Returns a available_runtime_tool_list_success entity bound to this client.
   * Idiomatic usage: client.availableRuntimeToolListSuccess(null).list(null, null) or
   * client.availableRuntimeToolListSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity availableRuntimeToolListSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.AvailableRuntimeToolListSuccessEntity(this, entopts);
  }

  /**
   * Returns a filler_phrase_list entity bound to this client.
   * Idiomatic usage: client.fillerPhraseList(null).list(null, null) or
   * client.fillerPhraseList(null).load(Map.of("id", ...), null).
   */
  public SdkEntity fillerPhraseList(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.FillerPhraseListEntity(this, entopts);
  }

  /**
   * Returns a health entity bound to this client.
   * Idiomatic usage: client.health(null).list(null, null) or
   * client.health(null).load(Map.of("id", ...), null).
   */
  public SdkEntity health(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.HealthEntity(this, entopts);
  }

  /**
   * Returns a knowledge entity bound to this client.
   * Idiomatic usage: client.knowledge(null).list(null, null) or
   * client.knowledge(null).load(Map.of("id", ...), null).
   */
  public SdkEntity knowledge(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.KnowledgeEntity(this, entopts);
  }

  /**
   * Returns a llm entity bound to this client.
   * Idiomatic usage: client.llm(null).list(null, null) or
   * client.llm(null).load(Map.of("id", ...), null).
   */
  public SdkEntity llm(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.LlmEntity(this, entopts);
  }

  /**
   * Returns a llm_model_list_success entity bound to this client.
   * Idiomatic usage: client.llmModelListSuccess(null).list(null, null) or
   * client.llmModelListSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity llmModelListSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.LlmModelListSuccessEntity(this, entopts);
  }

  /**
   * Returns a outbound_call entity bound to this client.
   * Idiomatic usage: client.outboundCall(null).list(null, null) or
   * client.outboundCall(null).load(Map.of("id", ...), null).
   */
  public SdkEntity outboundCall(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.OutboundCallEntity(this, entopts);
  }

  /**
   * Returns a outbound_call_accepted_success entity bound to this client.
   * Idiomatic usage: client.outboundCallAcceptedSuccess(null).list(null, null) or
   * client.outboundCallAcceptedSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity outboundCallAcceptedSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.OutboundCallAcceptedSuccessEntity(this, entopts);
  }

  /**
   * Returns a outbound_dial_status_payload entity bound to this client.
   * Idiomatic usage: client.outboundDialStatusPayload(null).list(null, null) or
   * client.outboundDialStatusPayload(null).load(Map.of("id", ...), null).
   */
  public SdkEntity outboundDialStatusPayload(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.OutboundDialStatusPayloadEntity(this, entopts);
  }

  /**
   * Returns a portal_login_success entity bound to this client.
   * Idiomatic usage: client.portalLoginSuccess(null).list(null, null) or
   * client.portalLoginSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity portalLoginSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.PortalLoginSuccessEntity(this, entopts);
  }

  /**
   * Returns a pre_call entity bound to this client.
   * Idiomatic usage: client.preCall(null).list(null, null) or
   * client.preCall(null).load(Map.of("id", ...), null).
   */
  public SdkEntity preCall(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.PreCallEntity(this, entopts);
  }

  /**
   * Returns a provider_wallet entity bound to this client.
   * Idiomatic usage: client.providerWallet(null).list(null, null) or
   * client.providerWallet(null).load(Map.of("id", ...), null).
   */
  public SdkEntity providerWallet(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.ProviderWalletEntity(this, entopts);
  }

  /**
   * Returns a provider_wallet_associations_success entity bound to this client.
   * Idiomatic usage: client.providerWalletAssociationsSuccess(null).list(null, null) or
   * client.providerWalletAssociationsSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity providerWalletAssociationsSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.ProviderWalletAssociationsSuccessEntity(this, entopts);
  }

  /**
   * Returns a provider_wallet_catalog_success entity bound to this client.
   * Idiomatic usage: client.providerWalletCatalogSuccess(null).list(null, null) or
   * client.providerWalletCatalogSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity providerWalletCatalogSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.ProviderWalletCatalogSuccessEntity(this, entopts);
  }

  /**
   * Returns a public_rag_search_success entity bound to this client.
   * Idiomatic usage: client.publicRagSearchSuccess(null).list(null, null) or
   * client.publicRagSearchSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity publicRagSearchSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.PublicRagSearchSuccessEntity(this, entopts);
  }

  /**
   * Returns a rag_collection_delete_success entity bound to this client.
   * Idiomatic usage: client.ragCollectionDeleteSuccess(null).list(null, null) or
   * client.ragCollectionDeleteSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity ragCollectionDeleteSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.RagCollectionDeleteSuccessEntity(this, entopts);
  }

  /**
   * Returns a rag_collection_document_delete_success entity bound to this client.
   * Idiomatic usage: client.ragCollectionDocumentDeleteSuccess(null).list(null, null) or
   * client.ragCollectionDocumentDeleteSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity ragCollectionDocumentDeleteSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.RagCollectionDocumentDeleteSuccessEntity(this, entopts);
  }

  /**
   * Returns a rag_collection_document_list_success entity bound to this client.
   * Idiomatic usage: client.ragCollectionDocumentListSuccess(null).list(null, null) or
   * client.ragCollectionDocumentListSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity ragCollectionDocumentListSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.RagCollectionDocumentListSuccessEntity(this, entopts);
  }

  /**
   * Returns a rag_collection_document_token_estimate_success entity bound to this client.
   * Idiomatic usage: client.ragCollectionDocumentTokenEstimateSuccess(null).list(null, null) or
   * client.ragCollectionDocumentTokenEstimateSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity ragCollectionDocumentTokenEstimateSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.RagCollectionDocumentTokenEstimateSuccessEntity(this, entopts);
  }

  /**
   * Returns a rag_collection_document_upload_status_success entity bound to this client.
   * Idiomatic usage: client.ragCollectionDocumentUploadStatusSuccess(null).list(null, null) or
   * client.ragCollectionDocumentUploadStatusSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity ragCollectionDocumentUploadStatusSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.RagCollectionDocumentUploadStatusSuccessEntity(this, entopts);
  }

  /**
   * Returns a rag_collection_document_upload_success entity bound to this client.
   * Idiomatic usage: client.ragCollectionDocumentUploadSuccess(null).list(null, null) or
   * client.ragCollectionDocumentUploadSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity ragCollectionDocumentUploadSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.RagCollectionDocumentUploadSuccessEntity(this, entopts);
  }

  /**
   * Returns a runtime_binding entity bound to this client.
   * Idiomatic usage: client.runtimeBinding(null).list(null, null) or
   * client.runtimeBinding(null).load(Map.of("id", ...), null).
   */
  public SdkEntity runtimeBinding(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.RuntimeBindingEntity(this, entopts);
  }

  /**
   * Returns a tts entity bound to this client.
   * Idiomatic usage: client.tts(null).list(null, null) or
   * client.tts(null).load(Map.of("id", ...), null).
   */
  public SdkEntity tts(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.TtsEntity(this, entopts);
  }

  /**
   * Returns a tts_voice_list_success entity bound to this client.
   * Idiomatic usage: client.ttsVoiceListSuccess(null).list(null, null) or
   * client.ttsVoiceListSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity ttsVoiceListSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.TtsVoiceListSuccessEntity(this, entopts);
  }

  /**
   * Returns a voice entity bound to this client.
   * Idiomatic usage: client.voice(null).list(null, null) or
   * client.voice(null).load(Map.of("id", ...), null).
   */
  public SdkEntity voice(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.VoiceEntity(this, entopts);
  }

  /**
   * Returns a voice_llm entity bound to this client.
   * Idiomatic usage: client.voiceLlm(null).list(null, null) or
   * client.voiceLlm(null).load(Map.of("id", ...), null).
   */
  public SdkEntity voiceLlm(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.VoiceLlmEntity(this, entopts);
  }

  /**
   * Returns a voice_llm_model_list_success entity bound to this client.
   * Idiomatic usage: client.voiceLlmModelListSuccess(null).list(null, null) or
   * client.voiceLlmModelListSuccess(null).load(Map.of("id", ...), null).
   */
  public SdkEntity voiceLlmModelListSuccess(Map<String, Object> entopts) {
    return new voxgig.ai4callsdk.entity.VoiceLlmModelListSuccessEntity(this, entopts);
  }


  // testSDK builds a client in test mode: the test feature is activated,
  // installing the in-memory mock transport (no network activity).
  public static Ai4callSDK testSDK() {
    return testSDK(null, null);
  }

  public static Ai4callSDK testSDK(
      Map<String, Object> testopts, Map<String, Object> sdkopts) {
    Ai4callSDK sdk = new Ai4callSDK(SdkClient.testOptions(testopts, sdkopts));
    sdk.mode = "test";
    return sdk;
  }
}
