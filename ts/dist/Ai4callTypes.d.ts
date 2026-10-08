export interface AccountAllowedIpsSuccess {
    addIps?: any[];
    allowedIps?: any[];
    data: Record<string, any>;
    deleteIps?: any[];
    message: string;
    meta: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface AccountAllowedIpsSuccessLoadMatch {
    addIps?: any[];
    allowedIps?: any[];
    data?: Record<string, any>;
    deleteIps?: any[];
    message?: string;
    meta?: Record<string, any>;
    requestId?: string;
    success?: boolean;
}
export interface AccountAllowedIpsSuccessUpdateData {
    addIps?: any[];
    allowedIps?: any[];
    data?: Record<string, any>;
    deleteIps?: any[];
    message?: string;
    meta?: Record<string, any>;
    requestId?: string;
    success?: boolean;
}
export interface AccountAvailablePluginsSuccess {
    data: Record<string, any>;
    message: string;
    meta: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface AccountAvailablePluginsSuccessLoadMatch {
    data?: Record<string, any>;
    message?: string;
    meta?: Record<string, any>;
    requestId?: string;
    success?: boolean;
}
export interface AccountCallLimitsSuccess {
    assistants: any[];
    data: Record<string, any>;
    message: string;
    meta: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface AccountCallLimitsSuccessLoadMatch {
    assistants?: any[];
    data?: Record<string, any>;
    message?: string;
    meta?: Record<string, any>;
    requestId?: string;
    success?: boolean;
}
export interface AccountCallLimitsSuccessUpdateData {
    assistants?: any[];
    data?: Record<string, any>;
    message?: string;
    meta?: Record<string, any>;
    requestId?: string;
    success?: boolean;
}
export interface AccountNumberRoutingSuccess {
    data: Record<string, any>;
    demoNumbers?: any[];
    message: string;
    meta: Record<string, any>;
    purchasedNumbers?: any[];
    requestId: string;
    success: boolean;
    userNumbers?: any[];
}
export interface AccountNumberRoutingSuccessLoadMatch {
    data?: Record<string, any>;
    demoNumbers?: any[];
    message?: string;
    meta?: Record<string, any>;
    purchasedNumbers?: any[];
    requestId?: string;
    success?: boolean;
    userNumbers?: any[];
}
export interface AccountNumberRoutingSuccessUpdateData {
    data?: Record<string, any>;
    demoNumbers?: any[];
    message?: string;
    meta?: Record<string, any>;
    purchasedNumbers?: any[];
    requestId?: string;
    success?: boolean;
    userNumbers?: any[];
}
export interface AccountPluginConfigurationSuccess {
    configuration: Record<string, any>;
    instanceName?: string;
    instance_name?: string;
    pluginName?: string;
    plugin_name?: string;
}
export interface AccountPluginConfigurationSuccessLoadMatch {
    instance_name?: string;
    plugin_name?: string;
}
export interface AccountPluginConfigurationSuccessUpdateData {
    configuration?: Record<string, any>;
    instanceName?: string;
    instance_name?: string;
    pluginName?: string;
    plugin_name?: string;
}
export interface AccountPluginInstanceSuccess {
    configuration: Record<string, any>;
    data: Record<string, any>;
    instanceName?: string;
    instance_name?: string;
    message: string;
    meta: Record<string, any>;
    newInstanceName?: string;
    new_instance_name?: string;
    pluginName?: string;
    plugin_name?: string;
    requestId: string;
    status?: string;
    success: boolean;
}
export interface AccountPluginInstanceSuccessLoadMatch {
    cursor?: string;
    limit?: number;
}
export interface AccountPluginInstanceSuccessCreateData {
    configuration: Record<string, any>;
    data: Record<string, any>;
    instanceName?: string;
    instance_name?: string;
    message: string;
    meta: Record<string, any>;
    newInstanceName?: string;
    new_instance_name?: string;
    pluginName?: string;
    plugin_name?: string;
    requestId: string;
    status?: string;
    success: boolean;
}
export interface AccountPluginInstanceSuccessUpdateData {
    instance_id: string;
    configuration?: Record<string, any>;
    data?: Record<string, any>;
    instanceName?: string;
    instance_name?: string;
    message?: string;
    meta?: Record<string, any>;
    newInstanceName?: string;
    new_instance_name?: string;
    pluginName?: string;
    plugin_name?: string;
    requestId?: string;
    status?: string;
    success?: boolean;
}
export interface AccountPluginInstanceSuccessRemoveMatch {
    instance_id: string;
}
export interface AccountPluginPurchaseSuccess {
    configuration: Record<string, any>;
    instanceName?: string;
    instance_name?: string;
    pluginName?: string;
    plugin_name?: string;
}
export interface AccountPluginPurchaseSuccessUpdateData {
    configuration?: Record<string, any>;
    instanceName?: string;
    instance_name?: string;
    pluginName?: string;
    plugin_name?: string;
}
export interface AnalyticsCallsOutboundSuccess {
    data: Record<string, any>;
    message: string;
    meta: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface AnalyticsCallsOutboundSuccessLoadMatch {
    cursor?: string;
    end_date?: string;
    internal_id?: string;
    limit?: number;
    start_date?: string;
}
export interface AnalyticsCallsSuccess {
    data: Record<string, any>;
    message: string;
    meta: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface AnalyticsCallsSuccessLoadMatch {
    cursor?: string;
    end_date?: string;
    limit?: number;
    start_date?: string;
}
export interface AnalyticsPostCallSuccess {
    data: Record<string, any>;
    message: string;
    meta: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface AnalyticsPostCallSuccessLoadMatch {
    cursor?: string;
    end_date?: string;
    limit?: number;
    start_date?: string;
}
export interface AnalyticsPreCallSuccess {
    data: Record<string, any>;
    message: string;
    meta: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface AnalyticsPreCallSuccessLoadMatch {
    cursor?: string;
    end_date?: string;
    limit?: number;
    start_date?: string;
}
export interface AnalyticsRagSearchSuccess {
    data: Record<string, any>;
    message: string;
    meta: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface AnalyticsRagSearchSuccessLoadMatch {
    cursor?: string;
    end_date?: string;
    limit?: number;
    start_date?: string;
}
export interface AnalyticsRagSuccess {
    data: Record<string, any>;
    message: string;
    meta: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface AnalyticsRagSuccessLoadMatch {
    cursor?: string;
    end_date?: string;
    limit?: number;
    start_date?: string;
}
export interface AnalyticsRechargesSuccess {
    data: Record<string, any>;
    message: string;
    meta: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface AnalyticsRechargesSuccessLoadMatch {
    cursor?: string;
    end_date?: string;
    limit?: number;
    start_date?: string;
}
export interface AnalyticsSmsSuccess {
    data: Record<string, any>;
    message: string;
    meta: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface AnalyticsSmsSuccessLoadMatch {
    cursor?: string;
    end_date?: string;
    limit?: number;
    start_date?: string;
}
export interface AnalyticsToolResponsesSuccess {
    data: Record<string, any>;
    message: string;
    meta: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface AnalyticsToolResponsesSuccessLoadMatch {
    cursor?: string;
    end_date?: string;
    limit?: number;
    start_date?: string;
}
export interface Asr {
    data: Record<string, any>;
    message: string;
    meta: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface AsrLoadMatch {
    data?: Record<string, any>;
    message?: string;
    meta?: Record<string, any>;
    requestId?: string;
    success?: boolean;
}
export interface AsrModelListSuccess {
    data: Record<string, any>;
    message: string;
    meta: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface AsrModelListSuccessLoadMatch {
    assistant_id: string;
}
export interface Assistant {
    assistant: any;
    audioToAudio?: any;
    data: Record<string, any>;
    description: string;
    firstMessage?: Record<string, any>;
    id?: string;
    message: string;
    meta: Record<string, any>;
    metadata?: Record<string, any>;
    mode?: string;
    name: string;
    network?: Record<string, any>;
    numbers?: Record<string, any>;
    requestId: string;
    settings?: Record<string, any>;
    status?: string;
    success: boolean;
    voiceToVoice?: Record<string, any>;
}
export interface AssistantLoadMatch {
    id: string;
}
export interface AssistantCreateData {
    assistant: any;
    audioToAudio?: any;
    data: Record<string, any>;
    description: string;
    firstMessage?: Record<string, any>;
    id?: string;
    message: string;
    meta: Record<string, any>;
    metadata?: Record<string, any>;
    mode?: string;
    name: string;
    network?: Record<string, any>;
    numbers?: Record<string, any>;
    requestId: string;
    settings?: Record<string, any>;
    status?: string;
    success: boolean;
    voiceToVoice?: Record<string, any>;
}
export interface AssistantUpdateData {
    id: string;
    assistant?: any;
    audioToAudio?: any;
    data?: Record<string, any>;
    description?: string;
    firstMessage?: Record<string, any>;
    message?: string;
    meta?: Record<string, any>;
    metadata?: Record<string, any>;
    mode?: string;
    name?: string;
    network?: Record<string, any>;
    numbers?: Record<string, any>;
    requestId?: string;
    settings?: Record<string, any>;
    status?: string;
    success?: boolean;
    voiceToVoice?: Record<string, any>;
    $action?: string;
    [action: string]: any;
}
export interface AssistantRemoveMatch {
    id: string;
}
export interface AssistantAdvancedSettingsConfigurationSuccess {
    id?: string;
}
export interface AssistantAdvancedSettingsConfigurationSuccessLoadMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface AssistantAdvancedSettingsRuntimeUpdateSuccess {
    assistantApiKey: string;
    assistantId: string;
    configuration: Record<string, any>;
    freqPenalty?: number;
    maxTokens?: number;
    presencePenalty?: number;
    service: string;
    stopSequences?: any[];
    temperature?: number;
    topK?: number;
    topP?: number;
}
export interface AssistantAdvancedSettingsRuntimeUpdateSuccessUpdateData {
    assistant_id: string;
    assistantApiKey?: string;
    assistantId?: string;
    configuration?: Record<string, any>;
    freqPenalty?: number;
    maxTokens?: number;
    presencePenalty?: number;
    service?: string;
    stopSequences?: any[];
    temperature?: number;
    topK?: number;
    topP?: number;
}
export interface AssistantAsrRuntimeUpdateSuccess {
    apiKey?: string;
    assistantApiKey: string;
    assistantId: string;
    configuration: Record<string, any>;
    engineCode?: string;
    providerWalletId?: number;
    runtimeBinding: Record<string, any>;
    service: string;
    sourceMode: string;
}
export interface AssistantAsrRuntimeUpdateSuccessUpdateData {
    assistant_id: string;
    apiKey?: string;
    assistantApiKey?: string;
    assistantId?: string;
    configuration?: Record<string, any>;
    engineCode?: string;
    providerWalletId?: number;
    runtimeBinding?: Record<string, any>;
    service?: string;
    sourceMode?: string;
}
export interface AssistantConversationWebhookRuntimeSuccess {
    authName?: string;
    configuration: Record<string, any>;
    enabled?: boolean;
    url?: string;
}
export interface AssistantConversationWebhookRuntimeSuccessLoadMatch {
    assistant_id: string;
}
export interface AssistantConversationWebhookRuntimeSuccessUpdateData {
    assistant_id: string;
    authName?: string;
    configuration?: Record<string, any>;
    enabled?: boolean;
    url?: string;
}
export interface AssistantDtmfConfigurationSuccess {
    id?: string;
}
export interface AssistantDtmfConfigurationSuccessLoadMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface AssistantDtmfRuntimeUpdateSuccess {
    acceptTimeout?: number;
    assistantApiKey: string;
    assistantId: string;
    configuration: Record<string, any>;
    enabled?: boolean;
    maxLength?: number;
    minLength?: number;
    playEnabled?: boolean;
    service: string;
    terminationChars?: string;
}
export interface AssistantDtmfRuntimeUpdateSuccessUpdateData {
    assistant_id: string;
    acceptTimeout?: number;
    assistantApiKey?: string;
    assistantId?: string;
    configuration?: Record<string, any>;
    enabled?: boolean;
    maxLength?: number;
    minLength?: number;
    playEnabled?: boolean;
    service?: string;
    terminationChars?: string;
}
export interface AssistantHangupConfigurationSuccess {
    id?: string;
}
export interface AssistantHangupConfigurationSuccessLoadMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface AssistantHangupRuntimeUpdateSuccess {
    assistantApiKey: string;
    assistantId: string;
    availableAgents?: any[];
    configuration: Record<string, any>;
    enableHangup?: boolean;
    enableRedirect?: boolean;
    enableTransferAgent?: boolean;
    service: string;
    transferAgentNotificationText?: string;
}
export interface AssistantHangupRuntimeUpdateSuccessUpdateData {
    assistant_id: string;
    assistantApiKey?: string;
    assistantId?: string;
    availableAgents?: any[];
    configuration?: Record<string, any>;
    enableHangup?: boolean;
    enableRedirect?: boolean;
    enableTransferAgent?: boolean;
    service?: string;
    transferAgentNotificationText?: string;
}
export interface AssistantHangupSchemaRuntimeSuccess {
    configuration: Record<string, any>;
    hangupUrl?: string;
    schema?: any[];
}
export interface AssistantHangupSchemaRuntimeSuccessLoadMatch {
    assistant_id: string;
}
export interface AssistantHangupSchemaRuntimeSuccessUpdateData {
    assistant_id: string;
    configuration?: Record<string, any>;
    hangupUrl?: string;
    schema?: any[];
}
export interface AssistantKnowledgeSuccess {
    id?: string;
}
export interface AssistantKnowledgeSuccessLoadMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface AssistantKnowledgeSuccessUpdateData {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface AssistantLlmRuntimeUpdateSuccess {
    apiKey?: string;
    assistantApiKey: string;
    assistantId: string;
    baseUrl?: string;
    configuration: Record<string, any>;
    engineCode?: string;
    modelCode?: string;
    providerWalletId?: number;
    runtimeBinding: Record<string, any>;
    service: string;
    sourceMode: string;
}
export interface AssistantLlmRuntimeUpdateSuccessUpdateData {
    assistant_id: string;
    apiKey?: string;
    assistantApiKey?: string;
    assistantId?: string;
    baseUrl?: string;
    configuration?: Record<string, any>;
    engineCode?: string;
    modelCode?: string;
    providerWalletId?: number;
    runtimeBinding?: Record<string, any>;
    service?: string;
    sourceMode?: string;
}
export interface AssistantNumberRoutingCatalogSuccess {
    id?: string;
}
export interface AssistantNumberRoutingCatalogSuccessLoadMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface AssistantNumberRoutingRuntimeSuccess {
    configuration: Record<string, any>;
    demoNumbers?: any[];
    purchasedNumbers?: any[];
    userNumbers?: any[];
}
export interface AssistantNumberRoutingRuntimeSuccessUpdateData {
    assistant_id: string;
    configuration?: Record<string, any>;
    demoNumbers?: any[];
    purchasedNumbers?: any[];
    userNumbers?: any[];
}
export interface AssistantPostcallMcpRuntimeSuccess {
    configuration: Record<string, any>;
    enabled?: boolean;
    globalPrompt?: string;
    modelConfig: Record<string, any>;
    tools: any[];
}
export interface AssistantPostcallMcpRuntimeSuccessLoadMatch {
    assistant_id: string;
}
export interface AssistantPostcallMcpRuntimeSuccessUpdateData {
    assistant_id: string;
    configuration?: Record<string, any>;
    enabled?: boolean;
    globalPrompt?: string;
    modelConfig?: Record<string, any>;
    tools?: any[];
}
export interface AssistantPrecallMcpRuntimeSuccess {
    configuration: Record<string, any>;
    earlyTerminationEnabled?: boolean;
    enabled?: boolean;
    globalPrompt?: string;
    modelConfig: Record<string, any>;
    outputSchema?: Record<string, any>;
    outputVariables?: any[];
    terminationMessage?: string;
    tools: any[];
    voiceConfig: Record<string, any>;
    waitingAudioNonInterruptible?: boolean;
    waitingAudioText?: string;
}
export interface AssistantPrecallMcpRuntimeSuccessLoadMatch {
    assistant_id: string;
}
export interface AssistantPrecallMcpRuntimeSuccessUpdateData {
    assistant_id: string;
    configuration?: Record<string, any>;
    earlyTerminationEnabled?: boolean;
    enabled?: boolean;
    globalPrompt?: string;
    modelConfig?: Record<string, any>;
    outputSchema?: Record<string, any>;
    outputVariables?: any[];
    terminationMessage?: string;
    tools?: any[];
    voiceConfig?: Record<string, any>;
    waitingAudioNonInterruptible?: boolean;
    waitingAudioText?: string;
}
export interface AssistantPrecallValidationRuntimeSuccess {
    authPassword?: string;
    authToken?: string;
    authType?: string;
    authUsername?: string;
    configuration: any;
    headersJson?: Record<string, any>;
    isActive?: boolean;
    method?: string;
    name?: string;
    numberLocation?: string;
    numberParamName?: string;
    timeoutMs?: number;
    url?: string;
}
export interface AssistantPrecallValidationRuntimeSuccessLoadMatch {
    assistant_id: string;
}
export interface AssistantPrecallValidationRuntimeSuccessUpdateData {
    assistant_id: string;
    authPassword?: string;
    authToken?: string;
    authType?: string;
    authUsername?: string;
    configuration?: any;
    headersJson?: Record<string, any>;
    isActive?: boolean;
    method?: string;
    name?: string;
    numberLocation?: string;
    numberParamName?: string;
    timeoutMs?: number;
    url?: string;
}
export interface AssistantPromptSuccess {
    id?: string;
}
export interface AssistantPromptSuccessLoadMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface AssistantRagConfigurationSuccess {
    enabled: boolean;
    kbPrompt: string;
    name: string;
    returnedChunks: number;
}
export interface AssistantRagConfigurationSuccessLoadMatch {
    assistant_id: string;
}
export interface AssistantRagRuntimeUpdateSuccess {
    assistantApiKey: string;
    assistantId: string;
    configuration: Record<string, any>;
    enabled?: boolean;
    kbPrompt?: string;
    name?: string;
    returnedChunks?: number;
    service: string;
}
export interface AssistantRagRuntimeUpdateSuccessUpdateData {
    assistant_id: string;
    assistantApiKey?: string;
    assistantId?: string;
    configuration?: Record<string, any>;
    enabled?: boolean;
    kbPrompt?: string;
    name?: string;
    returnedChunks?: number;
    service?: string;
}
export interface AssistantSaveConversationRuntimeSuccess {
    configuration: Record<string, any>;
    emails?: string;
    enabled?: boolean;
    smtpInstanceName?: string;
    smtp_instance_name?: string;
}
export interface AssistantSaveConversationRuntimeSuccessLoadMatch {
    assistant_id: string;
}
export interface AssistantSaveConversationRuntimeSuccessUpdateData {
    assistant_id: string;
    configuration?: Record<string, any>;
    emails?: string;
    enabled?: boolean;
    smtpInstanceName?: string;
    smtp_instance_name?: string;
}
export interface AssistantSettingsConfigurationSuccess {
    id?: string;
}
export interface AssistantSettingsConfigurationSuccessLoadMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface AssistantSettingsRuntimeUpdateSuccess {
    asrInitialDelayMs?: number;
    asrSilenceMs?: number;
    assistantApiKey: string;
    assistantId: string;
    callPermissions?: Record<string, any>;
    configuration: Record<string, any>;
    dynamicTimeoutMs?: number;
    filler?: Record<string, any>;
    maxResponseLength?: number;
    reprompt?: Record<string, any>;
    service: string;
    truncateInitialAudio?: boolean;
    ttsInterruptionInConversation?: boolean;
    vad?: boolean;
    vadMinVoiceMs?: number;
    vadThreshold?: number;
}
export interface AssistantSettingsRuntimeUpdateSuccessUpdateData {
    assistant_id: string;
    asrInitialDelayMs?: number;
    asrSilenceMs?: number;
    assistantApiKey?: string;
    assistantId?: string;
    callPermissions?: Record<string, any>;
    configuration?: Record<string, any>;
    dynamicTimeoutMs?: number;
    filler?: Record<string, any>;
    maxResponseLength?: number;
    reprompt?: Record<string, any>;
    service?: string;
    truncateInitialAudio?: boolean;
    ttsInterruptionInConversation?: boolean;
    vad?: boolean;
    vadMinVoiceMs?: number;
    vadThreshold?: number;
}
export interface AssistantToolsRuntimeUpdateSuccess {
    assistantApiKey: string;
    assistantId: string;
    configuration: Record<string, any>;
    service: string;
}
export interface AssistantToolsRuntimeUpdateSuccessUpdateData {
    assistant_id: string;
    assistantApiKey?: string;
    assistantId?: string;
    configuration?: Record<string, any>;
    service?: string;
}
export interface AssistantTtsRuntimeUpdateSuccess {
    apiKey?: string;
    assistantApiKey: string;
    assistantId: string;
    configuration: Record<string, any>;
    engineCode?: string;
    providerWalletId?: number;
    region?: string;
    runtimeBinding: Record<string, any>;
    service: string;
    sourceMode: string;
    voiceCode?: string;
}
export interface AssistantTtsRuntimeUpdateSuccessUpdateData {
    assistant_id: string;
    apiKey?: string;
    assistantApiKey?: string;
    assistantId?: string;
    configuration?: Record<string, any>;
    engineCode?: string;
    providerWalletId?: number;
    region?: string;
    runtimeBinding?: Record<string, any>;
    service?: string;
    sourceMode?: string;
    voiceCode?: string;
}
export interface AssistantVoiceToVoiceRuntimeUpdateSuccess {
    apiKey?: string;
    assistantApiKey: string;
    assistantId: string;
    baseUrl?: string;
    configuration: Record<string, any>;
    engineCode?: string;
    modelCode?: string;
    prompt?: string;
    providerWalletId?: number;
    service: string;
    voiceCode?: string;
}
export interface AssistantVoiceToVoiceRuntimeUpdateSuccessUpdateData {
    assistant_id: string;
    apiKey?: string;
    assistantApiKey?: string;
    assistantId?: string;
    baseUrl?: string;
    configuration?: Record<string, any>;
    engineCode?: string;
    modelCode?: string;
    prompt?: string;
    providerWalletId?: number;
    service?: string;
    voiceCode?: string;
}
export interface AssociatedRuntimeToolListSuccess {
    data: Record<string, any>;
    message: string;
    meta: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface AssociatedRuntimeToolListSuccessLoadMatch {
    assistant_id: string;
}
export interface AudioToAudio {
    data: Record<string, any>;
    message: string;
    meta: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface AudioToAudioLoadMatch {
    data?: Record<string, any>;
    message?: string;
    meta?: Record<string, any>;
    requestId?: string;
    success?: boolean;
}
export interface AvailableRuntimeToolListSuccess {
    data: Record<string, any>;
    message: string;
    meta: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface AvailableRuntimeToolListSuccessLoadMatch {
    cursor?: string;
    limit?: number;
}
export interface FillerPhraseList {
    associations: Record<string, any>;
    data: Record<string, any>;
    id: string;
    list: Record<string, any>;
    message: string;
    meta?: Record<string, any>;
    name: string;
    phrases?: any[];
    requestId: string;
    success: boolean;
    toolListIds: any[];
    waitingListIds: any[];
}
export interface FillerPhraseListLoadMatch {
    id: string;
}
export interface FillerPhraseListCreateData {
    associations: Record<string, any>;
    data: Record<string, any>;
    id: string;
    list: Record<string, any>;
    message: string;
    meta?: Record<string, any>;
    name: string;
    phrases?: any[];
    requestId: string;
    success: boolean;
    toolListIds: any[];
    waitingListIds: any[];
}
export interface FillerPhraseListUpdateData {
    id: string;
    associations?: Record<string, any>;
    data?: Record<string, any>;
    list?: Record<string, any>;
    message?: string;
    meta?: Record<string, any>;
    name?: string;
    phrases?: any[];
    requestId?: string;
    success?: boolean;
    toolListIds?: any[];
    waitingListIds?: any[];
}
export interface FillerPhraseListRemoveMatch {
    id: string;
}
export interface Health {
    dataSource: string;
    service: string;
    status: string;
}
export interface HealthLoadMatch {
    dataSource?: string;
    service?: string;
    status?: string;
}
export interface Knowledge {
    data: Record<string, any>;
    defaultPostAction?: string;
    defaultResponse: string;
    id?: string;
    knowledge: Record<string, any>;
    message: string;
    meta?: Record<string, any>;
    requestId: string;
    rules?: string;
    success: boolean;
    title: string;
    triggers?: any[];
}
export interface KnowledgeLoadMatch {
    id: number;
}
export interface KnowledgeCreateData {
    data: Record<string, any>;
    defaultPostAction?: string;
    defaultResponse: string;
    id?: string;
    knowledge: Record<string, any>;
    message: string;
    meta?: Record<string, any>;
    requestId: string;
    rules?: string;
    success: boolean;
    title: string;
    triggers?: any[];
}
export interface KnowledgeUpdateData {
    id: number;
    data?: Record<string, any>;
    defaultPostAction?: string;
    defaultResponse?: string;
    knowledge?: Record<string, any>;
    message?: string;
    meta?: Record<string, any>;
    requestId?: string;
    rules?: string;
    success?: boolean;
    title?: string;
    triggers?: any[];
}
export interface KnowledgeRemoveMatch {
    id: number;
}
export interface Llm {
    data: Record<string, any>;
    message: string;
    meta: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface LlmLoadMatch {
    data?: Record<string, any>;
    message?: string;
    meta?: Record<string, any>;
    requestId?: string;
    success?: boolean;
}
export interface LlmModelListSuccess {
    data: Record<string, any>;
    message: string;
    meta: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface LlmModelListSuccessLoadMatch {
    assistant_id: string;
}
export interface OutboundCall {
    AddPrompt?: string;
    addPrompt?: string;
    apiKey_assistente?: string;
    assistantApiKey?: string;
    callId?: string;
    callResultUrl?: string;
    callbackConfigured: boolean;
    callerId: string;
    dst: string;
    internalId: string;
    status: string;
    url_esito_chiamata?: any;
}
export interface OutboundCallCreateData {
    AddPrompt?: string;
    addPrompt?: string;
    apiKey_assistente?: string;
    assistantApiKey?: string;
    callId?: string;
    callResultUrl?: string;
    callbackConfigured: boolean;
    callerId: string;
    dst: string;
    internalId: string;
    status: string;
    url_esito_chiamata?: any;
}
export interface OutboundCallAcceptedSuccess {
    AddPrompt?: string;
    addPrompt?: string;
    apiKey_assistente?: string;
    assistantApiKey?: string;
    callId?: string;
    callResultUrl?: string;
    callbackConfigured: boolean;
    callerId: string;
    dst: string;
    internalId: string;
    ipPbx?: string;
    ip_pbx?: string;
    method_uac?: boolean;
    sipPort?: string;
    sip_port?: string;
    status: string;
    url_esito_chiamata?: any;
}
export interface OutboundCallAcceptedSuccessCreateData {
    AddPrompt?: string;
    addPrompt?: string;
    apiKey_assistente?: string;
    assistantApiKey?: string;
    callId?: string;
    callResultUrl?: string;
    callbackConfigured: boolean;
    callerId: string;
    dst: string;
    internalId: string;
    ipPbx?: string;
    ip_pbx?: string;
    method_uac?: boolean;
    sipPort?: string;
    sip_port?: string;
    status: string;
    url_esito_chiamata?: any;
}
export interface OutboundDialStatusPayload {
    billSec: number;
    dialStatus: string;
    trafficCost: string;
}
export interface OutboundDialStatusPayloadLoadMatch {
    uuid: string;
}
export interface PortalLoginSuccess {
    client: Record<string, any>;
    email: string;
    portalApiKey: string;
}
export interface PortalLoginSuccessCreateData {
    client: Record<string, any>;
    email: string;
    portalApiKey: string;
}
export interface PreCall {
    configuration: Record<string, any>;
}
export interface PreCallLoadMatch {
    assistant_id: string;
}
export interface ProviderWallet {
    config: Record<string, any>;
    credential: Record<string, any>;
    data: Record<string, any>;
    engine: string;
    id?: string;
    isActive?: boolean;
    message: string;
    meta?: Record<string, any>;
    name: string;
    provider: string;
    requestId: string;
    serviceType: string;
    success: boolean;
}
export interface ProviderWalletLoadMatch {
    id: number;
}
export interface ProviderWalletCreateData {
    config: Record<string, any>;
    credential: Record<string, any>;
    data: Record<string, any>;
    engine: string;
    id?: string;
    isActive?: boolean;
    message: string;
    meta?: Record<string, any>;
    name: string;
    provider: string;
    requestId: string;
    serviceType: string;
    success: boolean;
}
export interface ProviderWalletUpdateData {
    id: number;
    config?: Record<string, any>;
    credential?: Record<string, any>;
    data?: Record<string, any>;
    engine?: string;
    isActive?: boolean;
    message?: string;
    meta?: Record<string, any>;
    name?: string;
    provider?: string;
    requestId?: string;
    serviceType?: string;
    success?: boolean;
}
export interface ProviderWalletRemoveMatch {
    id: number;
}
export interface ProviderWalletAssociationsSuccess {
    data: Record<string, any>;
    message: string;
    meta?: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface ProviderWalletAssociationsSuccessLoadMatch {
    assistant_id: string;
}
export interface ProviderWalletCatalogSuccess {
    data: Record<string, any>;
    message: string;
    meta?: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface ProviderWalletCatalogSuccessLoadMatch {
    data?: Record<string, any>;
    message?: string;
    meta?: Record<string, any>;
    requestId?: string;
    success?: boolean;
}
export interface PublicRagSearchSuccess {
    count: number;
    query: string;
    rag_id: string;
    results: any[];
}
export interface PublicRagSearchSuccessCreateData {
    count: number;
    query: string;
    rag_id: string;
    results: any[];
}
export interface RagCollectionDeleteSuccess {
    data: Record<string, any>;
    description?: string;
    maxChunkSize?: number;
    maxChunksPerFile?: number;
    message: string;
    meta: Record<string, any>;
    name: string;
    requestId: string;
    success: boolean;
}
export interface RagCollectionDeleteSuccessLoadMatch {
    cursor?: string;
    limit?: number;
}
export interface RagCollectionDeleteSuccessCreateData {
    data: Record<string, any>;
    description?: string;
    maxChunkSize?: number;
    maxChunksPerFile?: number;
    message: string;
    meta: Record<string, any>;
    name: string;
    requestId: string;
    success: boolean;
}
export interface RagCollectionDeleteSuccessRemoveMatch {
    rag_id: string;
}
export interface RagCollectionDocumentDeleteSuccess {
}
export interface RagCollectionDocumentDeleteSuccessRemoveMatch {
    collection_id: string;
    file_name: string;
}
export interface RagCollectionDocumentListSuccess {
    data: Record<string, any>;
    message: string;
    meta: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface RagCollectionDocumentListSuccessLoadMatch {
    collection_id: string;
    cursor?: string;
    limit?: number;
}
export interface RagCollectionDocumentTokenEstimateSuccess {
    estimatedCost: number;
    fileCount: number;
    fileDetails: any[];
    processingTime: number;
    raw: Record<string, any>;
    totalTokens: number;
}
export interface RagCollectionDocumentTokenEstimateSuccessCreateData {
    estimatedCost: number;
    fileCount: number;
    fileDetails: any[];
    processingTime: number;
    raw: Record<string, any>;
    totalTokens: number;
}
export interface RagCollectionDocumentUploadStatusSuccess {
    currentFile: string;
    errors: any[];
    processedFiles: number;
    progress: number;
    raw: Record<string, any>;
    results: any[];
    status: string;
    totalCost: number;
    totalFiles: number;
    totalTokens: number;
    uploadId: string;
}
export interface RagCollectionDocumentUploadStatusSuccessLoadMatch {
    upload_id: string;
}
export interface RagCollectionDocumentUploadSuccess {
    data: Record<string, any>;
    message: string;
    meta: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface RagCollectionDocumentUploadSuccessCreateData {
    collection_id: string;
    data: Record<string, any>;
    message: string;
    meta: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface RuntimeBinding {
    assistantApiKey: string;
    assistantId: string;
    runtimeBindings: Record<string, any>;
}
export interface RuntimeBindingLoadMatch {
    assistant_id: string;
}
export interface Tts {
    data: Record<string, any>;
    message: string;
    meta: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface TtsLoadMatch {
    data?: Record<string, any>;
    message?: string;
    meta?: Record<string, any>;
    requestId?: string;
    success?: boolean;
}
export interface TtsVoiceListSuccess {
    data: Record<string, any>;
    message: string;
    meta: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface TtsVoiceListSuccessLoadMatch {
    assistant_id: string;
}
export interface Voice {
    data: Record<string, any>;
    message: string;
    meta: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface VoiceLoadMatch {
    assistant_id?: string;
    model_code: string;
}
export interface VoiceLlm {
    data: Record<string, any>;
    message: string;
    meta: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface VoiceLlmLoadMatch {
    data?: Record<string, any>;
    message?: string;
    meta?: Record<string, any>;
    requestId?: string;
    success?: boolean;
}
export interface VoiceLlmModelListSuccess {
    data: Record<string, any>;
    message: string;
    meta: Record<string, any>;
    requestId: string;
    success: boolean;
}
export interface VoiceLlmModelListSuccessLoadMatch {
    provider: string;
    source_mode?: string;
}
