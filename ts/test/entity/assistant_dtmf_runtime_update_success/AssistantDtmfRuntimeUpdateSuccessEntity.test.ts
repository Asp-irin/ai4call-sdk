

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


describe('AssistantDtmfRuntimeUpdateSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
  afterEach(liveDelay('AI4CALL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Ai4callSDK.test()
    const ent = testsdk.AssistantDtmfRuntimeUpdateSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'assistant_dtmf_runtime_update_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"acceptTimeout":{"a":true,"h":"Accept Timeout","n":"acceptTimeout","r":false,"sh":"Value supplied for `acceptTimeout` in the `AssistantDtmfRuntimeUpdateRequest` request.","t":"`$INTEGER`","key$":"acceptTimeout","index$":0},"assistantApiKey":{"a":true,"h":"Assistant Api Key","n":"assistantApiKey","r":true,"t":"`$STRING`","key$":"assistantApiKey","index$":1},"assistantId":{"a":true,"h":"Assistant Id","n":"assistantId","r":true,"t":"`$STRING`","key$":"assistantId","index$":2},"configuration":{"a":true,"h":"Configuration","n":"configuration","r":true,"t":"`$OBJECT`","key$":"configuration","index$":3},"enabled":{"a":true,"h":"Enabled","n":"enabled","r":false,"sh":"Enable or disable DTMF reception.","t":"`$BOOLEAN`","key$":"enabled","index$":4},"maxLength":{"a":true,"h":"Max Length","n":"maxLength","r":false,"sh":"Value supplied for `maxLength` in the `AssistantDtmfRuntimeUpdateRequest` request.","t":"`$INTEGER`","key$":"maxLength","index$":5},"minLength":{"a":true,"h":"Min Length","n":"minLength","r":false,"sh":"Value supplied for `minLength` in the `AssistantDtmfRuntimeUpdateRequest` request.","t":"`$INTEGER`","key$":"minLength","index$":6},"playEnabled":{"a":true,"h":"Play Enabled","n":"playEnabled","r":false,"sh":"Enable or disable DTMF sending during the call.","t":"`$BOOLEAN`","key$":"playEnabled","index$":7},"service":{"a":true,"h":"Service","n":"service","r":true,"t":"`$STRING`","key$":"service","index$":8},"terminationChars":{"a":true,"h":"Termination Chars","n":"terminationChars","r":false,"sh":"Value supplied for `terminationChars` in the `AssistantDtmfRuntimeUpdateRequest` request.","t":"`$STRING`","key$":"terminationChars","index$":9}},"name":"assistant_dtmf_runtime_update_success","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /api/v1/assistants/{assistantId}/runtime/dtmf","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"205","k":"param","n":"assistant_id","or":"assistantId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/api/v1/assistants/{assistantId}/runtime/dtmf","q":{"exist":["assistant_id"]},"r":{"param":{"assistantId":"assistant_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"assistants"},{"var":"assistant_id"},{"lit":"runtime"},{"lit":"dtmf"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.assistant"]]},"key$":"assistant_dtmf_runtime_update_success","name__orig":"assistant_dtmf_runtime_update_success","Name":"AssistantDtmfRuntimeUpdateSuccess","name_":"assistant_dtmf_runtime_update_success","name-":"assistant-dtmf-runtime-update-success","NAME":"ASSISTANT_DTMF_RUNTIME_UPDATE_SUCCESS","index$":24}, {"active":true,"entity":"assistant_dtmf_runtime_update_success","key$":"BasicAssistantDtmfRuntimeUpdateSuccessFlow","kind":"basic","name":"BasicAssistantDtmfRuntimeUpdateSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"assistant_dtmf_runtime_update_success_ref01","srcdatavar":"assistant_dtmf_runtime_update_success_ref01_data","suffix":"_up0","textfield":"assistantApiKey"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-assistant_dtmf_runtime_update_success_ref01"}}],"v":[],"index$":0}]}, 'AssistantDtmfRuntimeUpdateSuccess', {"PATCH /api/v1/assistants/{assistantId}/runtime/dtmf":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","description":"PATCH merge of the assistant's DTMF configuration.\n\nOperational rules:\n- at least one of `enabled`, `playEnabled`, `acceptTimeout`, `minLength`, `maxLength`, `terminationChars` must be present\n- omitted fields retain the current value\n- by sending one of the DTMF settings with `enabled` omitted, DTMF is considered enabled\n- `enabled: false` resets `acceptTimeout`, `minLength`, `maxLength` and `terminationChars`\n- `playEnabled` controls DTMF sending during the call","properties":{"enabled":{"type":"boolean","description":"Enable or disable DTMF reception.","key$":"enabled"},"playEnabled":{"type":"boolean","description":"Enable or disable DTMF sending during the call.","key$":"playEnabled"},"acceptTimeout":{"description":"Value supplied for `acceptTimeout` in the `AssistantDtmfRuntimeUpdateRequest` request.","type":"integer","nullable":true,"minimum":0,"key$":"acceptTimeout"},"minLength":{"description":"Value supplied for `minLength` in the `AssistantDtmfRuntimeUpdateRequest` request.","type":"integer","nullable":true,"minimum":0,"key$":"minLength"},"maxLength":{"description":"Value supplied for `maxLength` in the `AssistantDtmfRuntimeUpdateRequest` request.","type":"integer","nullable":true,"minimum":0,"key$":"maxLength"},"terminationChars":{"description":"Value supplied for `terminationChars` in the `AssistantDtmfRuntimeUpdateRequest` request.","type":"string","nullable":true,"key$":"terminationChars"}},"x-ref":"#/components/schemas/AssistantDtmfRuntimeUpdateRequest","index$":1},"examples":{"enableDtmf":{"summary":"Enable DTMF and set the settings","value":{"enabled":true,"acceptTimeout":3000,"minLength":1,"maxLength":6,"terminationChars":"#"}},"enablePlayDtmf":{"summary":"Enable DTMF sending only","value":{"playEnabled":true}},"disableDtmf":{"summary":"Disable DTMF and reset settings","value":{"enabled":false}}}}}},"parameters":[{"name":"assistantId","in":"path","required":true,"description":"Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.","schema":{"type":"string","minLength":1,"maxLength":128,"pattern":"^[A-Za-z0-9_-]+$"},"example":"205","x-ref":"#/components/parameters/AssistantIdentifier","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let assistant_dtmf_runtime_update_success_ref01_data = Object.values(setup.data.existing.assistant_dtmf_runtime_update_success)[0] as any

    // UPDATE
    const assistant_dtmf_runtime_update_success_ref01_ent = client.AssistantDtmfRuntimeUpdateSuccess()
    const assistant_dtmf_runtime_update_success_ref01_data_up0: any = {}

    const assistant_dtmf_runtime_update_success_ref01_markdef_up0 = { name: 'assistantApiKey', value: 'Mark01-assistant_dtmf_runtime_update_success_ref01_' + setup.now }
    ;(assistant_dtmf_runtime_update_success_ref01_data_up0 as any)[assistant_dtmf_runtime_update_success_ref01_markdef_up0.name] = assistant_dtmf_runtime_update_success_ref01_markdef_up0.value

    const assistant_dtmf_runtime_update_success_ref01_resdata_up0 = (await assistant_dtmf_runtime_update_success_ref01_ent.update(assistant_dtmf_runtime_update_success_ref01_data_up0)).data()
    assert(null != assistant_dtmf_runtime_update_success_ref01_resdata_up0)

    assert((assistant_dtmf_runtime_update_success_ref01_resdata_up0 as any)[assistant_dtmf_runtime_update_success_ref01_markdef_up0.name] === assistant_dtmf_runtime_update_success_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/assistant_dtmf_runtime_update_success/AssistantDtmfRuntimeUpdateSuccessTestData.json')

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
    ['assistant_dtmf_runtime_update_success01','assistant_dtmf_runtime_update_success02','assistant_dtmf_runtime_update_success03','assistant01','assistant02','assistant03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AI4CALL_TEST_ASSISTANT_DTMF_RUNTIME_UPDATE_SUCCESS_ENTID': idmap,
    'AI4CALL_TEST_LIVE': 'FALSE',
    'AI4CALL_TEST_EXPLAIN': 'FALSE',
    'AI4CALL_APIKEY': '',
  })

  idmap = env['AI4CALL_TEST_ASSISTANT_DTMF_RUNTIME_UPDATE_SUCCESS_ENTID']

  const live = 'TRUE' === env.AI4CALL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AI4CALL_TEST_ASSISTANT_DTMF_RUNTIME_UPDATE_SUCCESS_ENTID']
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
  
