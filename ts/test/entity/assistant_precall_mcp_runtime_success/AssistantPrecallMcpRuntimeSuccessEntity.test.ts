

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { Ai4callSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('AssistantPrecallMcpRuntimeSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
  afterEach(liveDelay('AI4CALL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Ai4callSDK.test()
    const ent = testsdk.AssistantPrecallMcpRuntimeSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'assistant_precall_mcp_runtime_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"configuration":{"a":true,"h":"Configuration","n":"configuration","r":true,"sh":"General configuration of the pre-call phase.","t":"`$OBJECT`","union":{"branches":2,"count":1,"depth":4},"key$":"configuration","index$":0},"earlyTerminationEnabled":{"a":true,"h":"Early Termination Enabled","n":"earlyTerminationEnabled","r":false,"sh":"Enable/disable early termination.","t":"`$BOOLEAN`","key$":"earlyTerminationEnabled","index$":1},"enabled":{"a":true,"h":"Enabled","n":"enabled","r":false,"sh":"Enable or disable the whole pre-call phase without losing its configuration.","t":"`$BOOLEAN`","key$":"enabled","index$":2},"globalPrompt":{"a":true,"h":"Global Prompt","n":"globalPrompt","r":false,"sh":"Global pre-call prompt.","t":"`$STRING`","key$":"globalPrompt","index$":3},"modelConfig":{"a":true,"h":"Model Config","n":"modelConfig","r":true,"sh":"Model configuration used by the MCP phase.","t":"`$OBJECT`","key$":"modelConfig","index$":4},"outputSchema":{"a":true,"h":"Output Schema","n":"outputSchema","r":false,"sh":"JSON schema of the expected pre-call output, as an alternative to `outputVariables`.","t":"`$OBJECT`","key$":"outputSchema","index$":5},"outputVariables":{"a":true,"h":"Output Variables","n":"outputVariables","r":false,"sh":"Variables to extract from the pre-call result.","t":"`$ARRAY`","key$":"outputVariables","index$":6},"terminationMessage":{"a":true,"h":"Termination Message","n":"terminationMessage","r":false,"sh":"Early termination audio message.","t":"`$STRING`","key$":"terminationMessage","index$":7},"tools":{"a":true,"h":"Tools","n":"tools","op":{"update":{"req":false,"type":"`$ARRAY`"}},"r":true,"sh":"Complete list of pre-call tools to set (replaces the current ones).","t":"`$ARRAY`","key$":"tools","index$":8},"voiceConfig":{"a":true,"h":"Voice Config","n":"voiceConfig","r":true,"sh":"Voice/TTS configuration used to generate pre-call hold and termination audio.","t":"`$OBJECT`","union":{"branches":2,"count":1,"depth":2},"key$":"voiceConfig","index$":9},"waitingAudioNonInterruptible":{"a":true,"h":"Waiting Audio Non Interruptible","n":"waitingAudioNonInterruptible","r":false,"sh":"`true` plays all on-hold audio, `false` allows the customer to speak over the audio.","t":"`$BOOLEAN`","key$":"waitingAudioNonInterruptible","index$":10},"waitingAudioText":{"a":true,"h":"Waiting Audio Text","n":"waitingAudioText","r":false,"sh":"Audio text on hold.","t":"`$STRING`","key$":"waitingAudioText","index$":11}},"name":"assistant_precall_mcp_runtime_success","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/assistants/{assistantId}/runtime/precall/mcp-config","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"205","k":"param","n":"assistant_id","or":"assistantId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v1/assistants/{assistantId}/runtime/precall/mcp-config","q":{"exist":["assistant_id"]},"r":{"param":{"assistantId":"assistant_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"assistants"},{"var":"assistant_id"},{"lit":"runtime"},{"lit":"precall"},{"lit":"mcp-config"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /api/v1/assistants/{assistantId}/runtime/precall/mcp-config","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"205","k":"param","n":"assistant_id","or":"assistantId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/api/v1/assistants/{assistantId}/runtime/precall/mcp-config","q":{"exist":["assistant_id"]},"r":{"param":{"assistantId":"assistant_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"assistants"},{"var":"assistant_id"},{"lit":"runtime"},{"lit":"precall"},{"lit":"mcp-config"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.assistant"]]},"key$":"assistant_precall_mcp_runtime_success","name__orig":"assistant_precall_mcp_runtime_success","Name":"AssistantPrecallMcpRuntimeSuccess","name_":"assistant_precall_mcp_runtime_success","name-":"assistant-precall-mcp-runtime-success","NAME":"ASSISTANT_PRECALL_MCP_RUNTIME_SUCCESS","index$":33}, {"active":true,"entity":"assistant_precall_mcp_runtime_success","key$":"BasicAssistantPrecallMcpRuntimeSuccessFlow","kind":"basic","name":"BasicAssistantPrecallMcpRuntimeSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"assistant_precall_mcp_runtime_success_ref01","srcdatavar":"assistant_precall_mcp_runtime_success_ref01_data","suffix":"_up0","textfield":"globalPrompt"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-assistant_precall_mcp_runtime_success_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"assistant_precall_mcp_runtime_success_ref01","srcdatavar":"assistant_precall_mcp_runtime_success_ref01_data","suffix":"_dt0"},"m":{"id":"assistant_precall_mcp_runtime_success01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-assistant_precall_mcp_runtime_success_ref01"}}],"index$":1}]}, 'AssistantPrecallMcpRuntimeSuccess', {"GET /api/v1/assistants/{assistantId}/runtime/precall/mcp-config":{"protocol":"http","parameters":[{"name":"assistantId","in":"path","required":true,"description":"Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.","schema":{"type":"string","minLength":1,"maxLength":128,"pattern":"^[A-Za-z0-9_-]+$"},"example":"205","x-ref":"#/components/parameters/AssistantIdentifier","index$":0}]},"PATCH /api/v1/assistants/{assistantId}/runtime/precall/mcp-config":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","description":"Update pre-call configuration with **PATCH merge** semantics.\nAt least one field must be present.\n\n### Tool management\n\nThe `tools` field **completely replaces** the pre-call tool list.\n- `tools: []` removes all pre-call tools and resets `globalPrompt`, `waitingAudioText`, `earlyTerminationEnabled`, `terminationMessage`, `waitingAudioNonInterruptible`, `modelConfig` and `voiceConfig`\n- `tools` omitted: keep current tools unchanged\n- If `order` is present, the execution order follows `order`\n- If `order` is omitted, the execution order follows the order of the sent array\n\nTo build the list use the records of\n`GET /api/v1/catalog/assistants/{assistantApiKey}/tools`.\nThe pre-call only accepts tools already associated with the assistant.","properties":{"enabled":{"type":"boolean","description":"Enable or disable the whole pre-call phase without losing its configuration.\nOmitted, it retains the current value.","key$":"enabled"},"tools":{"type":"array","items":{"type":"object","description":"Reference to a tool to be associated with the pre-call phase.\n\nHow to enhance fields using `GET /api/v1/catalog/tools`:\n\n| Tool type | `toolName` | `subscriptionName` |\n|---|---|---|\n| `custom_tool` (custom JSON tool) | `toolName` | `null` |\n| `plugin_tool` (MCP plugin) | `toolName` | `instanceName` |\n| `custom_mcp_tool` (MCP custom) | `toolName` | `instanceName` |","properties":{"toolName":{"type":"string","description":"Tool name (must match `toolName` in the catalog)."},"subscriptionName":{"type":"string","nullable":true,"description":"Name of the instance/subscription.\n`null` for custom tools (without subscription)."},"order":{"type":"integer","minimum":0,"description":"Tool execution order.\nIf omitted, the order of the array sent in the PATCH is used."},"tool_name":{"type":"string","deprecated":true,"description":"Legacy alias of `toolName`."},"subscription_name":{"type":"string","nullable":true,"deprecated":true,"description":"Legacy alias of `subscriptionName`."}},"allOf":[{"anyOf":[]},{"anyOf":[]}],"x-ref":"#/components/schemas/AssistantPrecallToolReference"},"description":"Complete list of pre-call tools to set (replaces the current ones).","key$":"tools"},"globalPrompt":{"type":"string","nullable":true,"description":"Global pre-call prompt. `null` to remove it.","key$":"globalPrompt"},"waitingAudioText":{"type":"string","nullable":true,"description":"Audio text on hold. `null` to remove it.","key$":"waitingAudioText"},"earlyTerminationEnabled":{"type":"boolean","description":"Enable/disable early termination.","key$":"earlyTerminationEnabled"},"terminationMessage":{"type":"string","nullable":true,"description":"Early termination audio message. `null` to remove it.","key$":"terminationMessage"},"waitingAudioNonInterruptible":{"type":"boolean","description":"`true` plays all on-hold audio, `false` allows the customer to speak over the audio.","key$":"waitingAudioNonInterruptible"},"modelConfig":{"type":"object","description":"Model configuration used by the MCP phase.\nThe API keys are not returned in clear text: `hasApiKey` is exposed in the responses.","properties":{"mode":{"description":"`default` uses the default service configuration, `assistant` uses the assistant model,\n`managed` uses AI4Call managed provider, `custom` uses customer provider/API key.","enum":["default","assistant","managed","custom"],"type":"string"},"provider":{"description":"LLM Providers.","nullable":true,"type":"string"},"model":{"description":"LLM model.","nullable":true,"type":"string"},"apiKey":{"description":"Customer API key to be sent only in PATCH.","nullable":true,"type":"string","writeOnly":true},"baseUrl":{"description":"Custom URL base, if provided by the provider.","nullable":true,"type":"string"},"hasApiKey":{"description":"`true` if an API key is configured.","readOnly":true,"type":"boolean"}},"required":["mode"],"x-ref":"#/components/schemas/McpModelConfig","key$":"modelConfig"},"voiceConfig":{"type":"object","description":"Voice/TTS configuration used to generate pre-call hold and termination audio.\nThe API keys are not returned in clear text: `hasApiKey` is exposed in the responses.","properties":{"mode":{"enum":["default","assistant","custom"],"type":"string"},"providerMode":{"description":"AI4Call managed provider or customer provider.","enum":["managed","custom"],"type":"string"},"provider":{"enum":["azure","google","elevenlabs"],"type":"string"},"engine":{"nullable":true,"type":"string"},"voice":{"oneOf":[{},{}]},"apiKey":{"nullable":true,"type":"string","writeOnly":true},"accountid":{"nullable":true,"type":"string"},"region":{"nullable":true,"type":"string"},"hasApiKey":{"readOnly":true,"type":"boolean"}},"required":["mode"],"x-ref":"#/components/schemas/PreCallVoiceConfig","key$":"voiceConfig"},"outputVariables":{"type":"array","description":"Variables to extract from the pre-call result. Replaces the current list entirely.","items":{"type":"object","description":"Variable extracted from the pre-call result and made available to the rest of the call.","properties":{"name":{"description":"Variable name","example":"customer_tier","type":"string"},"type":{"default":"string","description":"Variable type. Configurations saved before this field existed default to `string`.","enum":[],"type":"string"},"description":{"description":"What the variable contains, used to guide the extraction","nullable":true,"type":"string"},"required":{"description":"Whether the variable must always be produced","type":"boolean"}},"required":["name","type"],"x-ref":"#/components/schemas/PreCallOutputVariable"},"key$":"outputVariables"},"outputSchema":{"type":"object","additionalProperties":true,"description":"JSON schema of the expected pre-call output, as an alternative to `outputVariables`.","key$":"outputSchema"}},"x-ref":"#/components/schemas/AssistantPrecallMcpConfigRuntimeUpdateRequest","index$":1},"examples":{"mixedTools":{"summary":"Custom tools and MCP plugin together","value":{"tools":[{"toolName":"verifica_cliente","subscriptionName":null,"order":0},{"toolName":"get_customer_info","subscriptionName":"CRM Principale","order":1}],"globalPrompt":"Usa le informazioni recuperate per personalizzare la risposta.","waitingAudioText":"Sto verificando la tua identità, un momento...","earlyTerminationEnabled":true,"terminationMessage":"Non sei autorizzato a procedere. Arrivederci.","waitingAudioNonInterruptible":true,"modelConfig":{"mode":"assistant"},"voiceConfig":{"mode":"assistant"}}},"customToolOnly":{"summary":"Custom tools only (defined in the assistant JSON)","value":{"tools":[{"toolName":"verifica_cliente","subscriptionName":null}]}},"clearTools":{"summary":"Disable and reset pre-call completely","value":{"tools":[]}},"updatePromptOnly":{"summary":"Update the global prompt only","value":{"globalPrompt":"Analizza le informazioni del chiamante prima di rispondere."}},"disableEarlyTermination":{"summary":"Disable early termination","value":{"earlyTerminationEnabled":false,"terminationMessage":null}},"removeWaitingAudio":{"summary":"Removes hold audio","value":{"waitingAudioText":null}},"customModelAndVoice":{"summary":"Update pre-call model and voice","value":{"modelConfig":{"mode":"custom","provider":"openai","model":"gpt-4o-mini","apiKey":"sk-..."},"voiceConfig":{"mode":"custom","providerMode":"custom","provider":"elevenlabs","voice":"Rachel","apiKey":"xi-..."}}}}}}},"parameters":[{"name":"assistantId","in":"path","required":true,"description":"Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.","schema":{"type":"string","minLength":1,"maxLength":128,"pattern":"^[A-Za-z0-9_-]+$"},"example":"205","x-ref":"#/components/parameters/AssistantIdentifier","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let assistant_precall_mcp_runtime_success_ref01_data = Object.values(setup.data.existing.assistant_precall_mcp_runtime_success)[0] as any

    // UPDATE
    const assistant_precall_mcp_runtime_success_ref01_ent = client.AssistantPrecallMcpRuntimeSuccess()
    const assistant_precall_mcp_runtime_success_ref01_data_up0: any = {}

    const assistant_precall_mcp_runtime_success_ref01_markdef_up0 = { name: 'globalPrompt', value: 'Mark01-assistant_precall_mcp_runtime_success_ref01_' + setup.now }
    ;(assistant_precall_mcp_runtime_success_ref01_data_up0 as any)[assistant_precall_mcp_runtime_success_ref01_markdef_up0.name] = assistant_precall_mcp_runtime_success_ref01_markdef_up0.value

    const assistant_precall_mcp_runtime_success_ref01_resdata_up0 = (await assistant_precall_mcp_runtime_success_ref01_ent.update(assistant_precall_mcp_runtime_success_ref01_data_up0)).data()
    assert(null != assistant_precall_mcp_runtime_success_ref01_resdata_up0)

    assert((assistant_precall_mcp_runtime_success_ref01_resdata_up0 as any)[assistant_precall_mcp_runtime_success_ref01_markdef_up0.name] === assistant_precall_mcp_runtime_success_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/assistant_precall_mcp_runtime_success/AssistantPrecallMcpRuntimeSuccessTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = Ai4callSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['assistant_precall_mcp_runtime_success01','assistant_precall_mcp_runtime_success02','assistant_precall_mcp_runtime_success03','assistant01','assistant02','assistant03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AI4CALL_TEST_ASSISTANT_PRECALL_MCP_RUNTIME_SUCCESS_ENTID': idmap,
    'AI4CALL_TEST_LIVE': 'FALSE',
    'AI4CALL_TEST_EXPLAIN': 'FALSE',
    'AI4CALL_APIKEY': '',
  })

  idmap = env['AI4CALL_TEST_ASSISTANT_PRECALL_MCP_RUNTIME_SUCCESS_ENTID']

  const live = 'TRUE' === env.AI4CALL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AI4CALL_TEST_ASSISTANT_PRECALL_MCP_RUNTIME_SUCCESS_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new Ai4callSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.AI4CALL_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.AI4CALL_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
