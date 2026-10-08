

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


describe('AssistantSettingsRuntimeUpdateSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
  afterEach(liveDelay('AI4CALL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Ai4callSDK.test()
    const ent = testsdk.AssistantSettingsRuntimeUpdateSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'assistant_settings_runtime_update_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"asrInitialDelayMs":{"a":true,"h":"Asr Initial Delay Ms","n":"asrInitialDelayMs","r":false,"sh":"Value supplied for `asrInitialDelayMs` in the `AssistantSettingsRuntimeUpdateRequest` request.","t":"`$INTEGER`","key$":"asrInitialDelayMs","index$":0},"asrSilenceMs":{"a":true,"h":"Asr Silence Ms","n":"asrSilenceMs","r":false,"sh":"Value supplied for `asrSilenceMs` in the `AssistantSettingsRuntimeUpdateRequest` request.","t":"`$INTEGER`","key$":"asrSilenceMs","index$":1},"assistantApiKey":{"a":true,"h":"Assistant Api Key","n":"assistantApiKey","r":true,"t":"`$STRING`","key$":"assistantApiKey","index$":2},"assistantId":{"a":true,"h":"Assistant Id","n":"assistantId","r":true,"t":"`$STRING`","key$":"assistantId","index$":3},"callPermissions":{"a":true,"h":"Call Permissions","n":"callPermissions","r":false,"sh":"Value supplied for `callPermissions` in the `AssistantSettingsRuntimeUpdateRequest` request.","t":"`$OBJECT`","key$":"callPermissions","index$":4},"configuration":{"a":true,"h":"Configuration","n":"configuration","r":true,"t":"`$OBJECT`","key$":"configuration","index$":5},"dynamicTimeoutMs":{"a":true,"h":"Dynamic Timeout Ms","n":"dynamicTimeoutMs","r":false,"sh":"Value supplied for `dynamicTimeoutMs` in the `AssistantSettingsRuntimeUpdateRequest` request.","t":"`$INTEGER`","key$":"dynamicTimeoutMs","index$":6},"filler":{"a":true,"h":"Filler","n":"filler","r":false,"sh":"Value supplied for `filler` in the `AssistantSettingsRuntimeUpdateRequest` request.","t":"`$OBJECT`","key$":"filler","index$":7},"maxResponseLength":{"a":true,"h":"Max Response Length","n":"maxResponseLength","r":false,"sh":"Value supplied for `maxResponseLength` in the `AssistantSettingsRuntimeUpdateRequest` request.","t":"`$INTEGER`","key$":"maxResponseLength","index$":8},"reprompt":{"a":true,"h":"Reprompt","n":"reprompt","r":false,"sh":"Value supplied for `reprompt` in the `AssistantSettingsRuntimeUpdateRequest` request.","t":"`$OBJECT`","key$":"reprompt","index$":9},"service":{"a":true,"h":"Service","n":"service","r":true,"t":"`$STRING`","key$":"service","index$":10},"truncateInitialAudio":{"a":true,"h":"Truncate Initial Audio","n":"truncateInitialAudio","r":false,"sh":"Value supplied for `truncateInitialAudio` in the `AssistantSettingsRuntimeUpdateRequest` request.","t":"`$BOOLEAN`","key$":"truncateInitialAudio","index$":11},"ttsInterruptionInConversation":{"a":true,"h":"Tts Interruption In Conversation","n":"ttsInterruptionInConversation","r":false,"sh":"Value supplied for `ttsInterruptionInConversation` in the `AssistantSettingsRuntimeUpdateRequest` request.","t":"`$BOOLEAN`","key$":"ttsInterruptionInConversation","index$":12},"vad":{"a":true,"h":"Vad","n":"vad","r":false,"sh":"Value supplied for `vad` in the `AssistantSettingsRuntimeUpdateRequest` request.","t":"`$BOOLEAN`","key$":"vad","index$":13},"vadMinVoiceMs":{"a":true,"h":"Vad Min Voice Ms","n":"vadMinVoiceMs","r":false,"sh":"Value supplied for `vadMinVoiceMs` in the `AssistantSettingsRuntimeUpdateRequest` request.","t":"`$INTEGER`","key$":"vadMinVoiceMs","index$":14},"vadThreshold":{"a":true,"fo":"float","h":"Vad Threshold","n":"vadThreshold","r":false,"sh":"Value supplied for `vadThreshold` in the `AssistantSettingsRuntimeUpdateRequest` request.","t":"`$NUMBER`","key$":"vadThreshold","index$":15}},"name":"assistant_settings_runtime_update_success","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /api/v1/assistants/{assistantId}/runtime/settings","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"205","k":"param","n":"assistant_id","or":"assistantId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/api/v1/assistants/{assistantId}/runtime/settings","q":{"exist":["assistant_id"]},"r":{"param":{"assistantId":"assistant_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"assistants"},{"var":"assistant_id"},{"lit":"runtime"},{"lit":"settings"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.assistant"]]},"key$":"assistant_settings_runtime_update_success","name__orig":"assistant_settings_runtime_update_success","Name":"AssistantSettingsRuntimeUpdateSuccess","name_":"assistant_settings_runtime_update_success","name-":"assistant-settings-runtime-update-success","NAME":"ASSISTANT_SETTINGS_RUNTIME_UPDATE_SUCCESS","index$":40}, {"active":true,"entity":"assistant_settings_runtime_update_success","key$":"BasicAssistantSettingsRuntimeUpdateSuccessFlow","kind":"basic","name":"BasicAssistantSettingsRuntimeUpdateSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"assistant_settings_runtime_update_success_ref01","srcdatavar":"assistant_settings_runtime_update_success_ref01_data","suffix":"_up0","textfield":"assistantApiKey"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-assistant_settings_runtime_update_success_ref01"}}],"v":[],"index$":0}]}, 'AssistantSettingsRuntimeUpdateSuccess', {"PATCH /api/v1/assistants/{assistantId}/runtime/settings":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","description":"PATCH merge of server settings.\n\nHow to recover current data:\n- use `GET /api/v1/catalog/assistants/{assistantApiKey}/settings`\n\nOperational rules:\n- send only the fields to be modified\n- `filler`, `reprompt` and `callPermissions` use partial merge on sent fields\n- `callPermissions` uses partial merge on sent fields\n- `country`, `prefixMobile` and `prefixFixed` can be sent to `null` to remove the saved value","properties":{"asrSilenceMs":{"description":"Value supplied for `asrSilenceMs` in the `AssistantSettingsRuntimeUpdateRequest` request.","type":"integer","minimum":500,"maximum":5000,"key$":"asrSilenceMs"},"asrInitialDelayMs":{"description":"Value supplied for `asrInitialDelayMs` in the `AssistantSettingsRuntimeUpdateRequest` request.","type":"integer","minimum":0,"maximum":10000,"key$":"asrInitialDelayMs"},"truncateInitialAudio":{"description":"Value supplied for `truncateInitialAudio` in the `AssistantSettingsRuntimeUpdateRequest` request.","type":"boolean","key$":"truncateInitialAudio"},"dynamicTimeoutMs":{"description":"Value supplied for `dynamicTimeoutMs` in the `AssistantSettingsRuntimeUpdateRequest` request.","type":"integer","minimum":5000,"maximum":300000,"key$":"dynamicTimeoutMs"},"vad":{"description":"Value supplied for `vad` in the `AssistantSettingsRuntimeUpdateRequest` request.","type":"boolean","key$":"vad"},"vadThreshold":{"description":"Value supplied for `vadThreshold` in the `AssistantSettingsRuntimeUpdateRequest` request.","type":"number","format":"float","minimum":0,"maximum":1,"key$":"vadThreshold"},"vadMinVoiceMs":{"description":"Value supplied for `vadMinVoiceMs` in the `AssistantSettingsRuntimeUpdateRequest` request.","type":"integer","minimum":0,"key$":"vadMinVoiceMs"},"ttsInterruptionInConversation":{"description":"Value supplied for `ttsInterruptionInConversation` in the `AssistantSettingsRuntimeUpdateRequest` request.","type":"boolean","key$":"ttsInterruptionInConversation"},"filler":{"description":"Value supplied for `filler` in the `AssistantSettingsRuntimeUpdateRequest` request.","type":"object","properties":{"enabled":{"type":"boolean"},"delayMs":{"type":"integer","minimum":0,"maximum":10000},"waitingListIds":{"type":"array","items":{"type":"string"}},"toolListIds":{"type":"array","items":{"type":"string"}},"waiting":{"type":"array","items":{"type":"string"}},"tool":{"type":"array","items":{"type":"string"}}},"key$":"filler"},"reprompt":{"description":"Value supplied for `reprompt` in the `AssistantSettingsRuntimeUpdateRequest` request.","type":"object","properties":{"enabled":{"type":"boolean"},"mode":{"type":"string","enum":["llm","text"]},"text":{"type":"array","items":{"type":"string"}},"repeatMaxLength":{"type":"integer","minimum":0,"maximum":1000},"maxRetries":{"type":"integer","minimum":1,"maximum":5}},"key$":"reprompt"},"maxResponseLength":{"description":"Value supplied for `maxResponseLength` in the `AssistantSettingsRuntimeUpdateRequest` request.","type":"integer","minimum":1000,"maximum":10000000,"key$":"maxResponseLength"},"callPermissions":{"description":"Value supplied for `callPermissions` in the `AssistantSettingsRuntimeUpdateRequest` request.","type":"object","properties":{"checkVerifyNumber":{"type":"boolean"},"allowForeignNumbers":{"type":"boolean"},"allowInternationalNumbers":{"type":"boolean"},"allowMobileNumbers":{"type":"boolean"},"allowFixedNumbers":{"type":"boolean"},"country":{"type":"string","nullable":true},"prefixMobile":{"type":"string","nullable":true},"prefixFixed":{"type":"string","nullable":true}},"key$":"callPermissions"}},"x-ref":"#/components/schemas/AssistantSettingsRuntimeUpdateRequest","index$":1},"examples":{"changeTimeouts":{"summary":"Update timeouts and VAD only","value":{"asrSilenceMs":750,"asrInitialDelayMs":250,"dynamicTimeoutMs":12000,"vad":true,"vadThreshold":0.55,"vadMinVoiceMs":180,"truncateInitialAudio":false}},"changeFillerReprompt":{"summary":"Update filler, reprompt and TTS interrupt","value":{"filler":{"enabled":true,"delayMs":1200,"waitingListIds":["default_waiting","support_waiting"],"waiting":["Un attimo, sto verificando."]},"reprompt":{"enabled":true,"mode":"text","text":["E ancora in linea?"],"repeatMaxLength":180,"maxRetries":1},"ttsInterruptionInConversation":true}},"changeCallPermissions":{"summary":"Update calling permissions only","value":{"callPermissions":{"checkVerifyNumber":true,"allowMobileNumbers":true,"prefixMobile":"33,34,35,36"}}},"changeMaxResponseLength":{"summary":"Only update the maximum response length","value":{"maxResponseLength":60000}}}}}},"parameters":[{"name":"assistantId","in":"path","required":true,"description":"Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.","schema":{"type":"string","minLength":1,"maxLength":128,"pattern":"^[A-Za-z0-9_-]+$"},"example":"205","x-ref":"#/components/parameters/AssistantIdentifier","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let assistant_settings_runtime_update_success_ref01_data = Object.values(setup.data.existing.assistant_settings_runtime_update_success)[0] as any

    // UPDATE
    const assistant_settings_runtime_update_success_ref01_ent = client.AssistantSettingsRuntimeUpdateSuccess()
    const assistant_settings_runtime_update_success_ref01_data_up0: any = {}

    const assistant_settings_runtime_update_success_ref01_markdef_up0 = { name: 'assistantApiKey', value: 'Mark01-assistant_settings_runtime_update_success_ref01_' + setup.now }
    ;(assistant_settings_runtime_update_success_ref01_data_up0 as any)[assistant_settings_runtime_update_success_ref01_markdef_up0.name] = assistant_settings_runtime_update_success_ref01_markdef_up0.value

    const assistant_settings_runtime_update_success_ref01_resdata_up0 = (await assistant_settings_runtime_update_success_ref01_ent.update(assistant_settings_runtime_update_success_ref01_data_up0)).data()
    assert(null != assistant_settings_runtime_update_success_ref01_resdata_up0)

    assert((assistant_settings_runtime_update_success_ref01_resdata_up0 as any)[assistant_settings_runtime_update_success_ref01_markdef_up0.name] === assistant_settings_runtime_update_success_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/assistant_settings_runtime_update_success/AssistantSettingsRuntimeUpdateSuccessTestData.json')

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
    ['assistant_settings_runtime_update_success01','assistant_settings_runtime_update_success02','assistant_settings_runtime_update_success03','assistant01','assistant02','assistant03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AI4CALL_TEST_ASSISTANT_SETTINGS_RUNTIME_UPDATE_SUCCESS_ENTID': idmap,
    'AI4CALL_TEST_LIVE': 'FALSE',
    'AI4CALL_TEST_EXPLAIN': 'FALSE',
    'AI4CALL_APIKEY': '',
  })

  idmap = env['AI4CALL_TEST_ASSISTANT_SETTINGS_RUNTIME_UPDATE_SUCCESS_ENTID']

  const live = 'TRUE' === env.AI4CALL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AI4CALL_TEST_ASSISTANT_SETTINGS_RUNTIME_UPDATE_SUCCESS_ENTID']
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
  
