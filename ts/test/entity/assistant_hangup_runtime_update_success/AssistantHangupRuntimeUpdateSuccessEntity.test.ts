

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


describe('AssistantHangupRuntimeUpdateSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
  afterEach(liveDelay('AI4CALL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Ai4callSDK.test()
    const ent = testsdk.AssistantHangupRuntimeUpdateSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'assistant_hangup_runtime_update_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"assistantApiKey":{"a":true,"h":"Assistant Api Key","n":"assistantApiKey","r":true,"t":"`$STRING`","key$":"assistantApiKey","index$":0},"assistantId":{"a":true,"h":"Assistant Id","n":"assistantId","r":true,"t":"`$STRING`","key$":"assistantId","index$":1},"availableAgents":{"a":true,"h":"Available Agents","n":"availableAgents","r":false,"sh":"Value supplied for `availableAgents` in the `AssistantHangupRuntimeUpdateRequest` request.","t":"`$ARRAY`","key$":"availableAgents","index$":2},"configuration":{"a":true,"h":"Configuration","n":"configuration","r":true,"t":"`$OBJECT`","key$":"configuration","index$":3},"enableHangup":{"a":true,"h":"Enable Hangup","n":"enableHangup","r":false,"sh":"Value supplied for `enableHangup` in the `AssistantHangupRuntimeUpdateRequest` request.","t":"`$BOOLEAN`","key$":"enableHangup","index$":4},"enableRedirect":{"a":true,"h":"Enable Redirect","n":"enableRedirect","r":false,"sh":"Value supplied for `enableRedirect` in the `AssistantHangupRuntimeUpdateRequest` request.","t":"`$BOOLEAN`","key$":"enableRedirect","index$":5},"enableTransferAgent":{"a":true,"h":"Enable Transfer Agent","n":"enableTransferAgent","r":false,"sh":"Value supplied for `enableTransferAgent` in the `AssistantHangupRuntimeUpdateRequest` request.","t":"`$BOOLEAN`","key$":"enableTransferAgent","index$":6},"service":{"a":true,"h":"Service","n":"service","r":true,"t":"`$STRING`","key$":"service","index$":7},"transferAgentNotificationText":{"a":true,"h":"Transfer Agent Notification Text","n":"transferAgentNotificationText","r":false,"sh":"Value supplied for `transferAgentNotificationText` in the `AssistantHangupRuntimeUpdateRequest` request.","t":"`$STRING`","key$":"transferAgentNotificationText","index$":8}},"name":"assistant_hangup_runtime_update_success","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /api/v1/assistants/{assistantId}/runtime/hangup","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"205","k":"param","n":"assistant_id","or":"assistantId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/api/v1/assistants/{assistantId}/runtime/hangup","q":{"exist":["assistant_id"]},"r":{"param":{"assistantId":"assistant_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"assistants"},{"var":"assistant_id"},{"lit":"runtime"},{"lit":"hangup"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.assistant"]]},"key$":"assistant_hangup_runtime_update_success","name__orig":"assistant_hangup_runtime_update_success","Name":"AssistantHangupRuntimeUpdateSuccess","name_":"assistant_hangup_runtime_update_success","name-":"assistant-hangup-runtime-update-success","NAME":"ASSISTANT_HANGUP_RUNTIME_UPDATE_SUCCESS","index$":26}, {"active":true,"entity":"assistant_hangup_runtime_update_success","key$":"BasicAssistantHangupRuntimeUpdateSuccessFlow","kind":"basic","name":"BasicAssistantHangupRuntimeUpdateSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"assistant_hangup_runtime_update_success_ref01","srcdatavar":"assistant_hangup_runtime_update_success_ref01_data","suffix":"_up0","textfield":"assistantApiKey"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-assistant_hangup_runtime_update_success_ref01"}}],"v":[],"index$":0}]}, 'AssistantHangupRuntimeUpdateSuccess', {"PATCH /api/v1/assistants/{assistantId}/runtime/hangup":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","description":"PATCH merge of assistant hangup/redirect/transfer configuration.\n\nOperational rules:\n- at least one of `enableHangup`, `enableRedirect`, `enableTransferAgent`, `transferAgentNotificationText`, `availableAgents` must be present\n- omitted fields retain the current value\n- use `GET /api/v1/catalog/assistants/{assistantApiKey}/hangup` to read the current state\n- use `GET /api/v1/assistants` to retrieve the `assistantApiKey` selectable for transfer\n- if `enableTransferAgent` and `true`, you need at least one `availableAgents` with a non-empty description\n- if you send `availableAgents` with `enableTransferAgent` omitted, the transfer is considered active\n- `enableTransferAgent: false` resets `transferAgentNotificationText` and `availableAgents`","properties":{"enableHangup":{"description":"Value supplied for `enableHangup` in the `AssistantHangupRuntimeUpdateRequest` request.","type":"boolean","key$":"enableHangup"},"enableRedirect":{"description":"Value supplied for `enableRedirect` in the `AssistantHangupRuntimeUpdateRequest` request.","type":"boolean","key$":"enableRedirect"},"enableTransferAgent":{"description":"Value supplied for `enableTransferAgent` in the `AssistantHangupRuntimeUpdateRequest` request.","type":"boolean","key$":"enableTransferAgent"},"transferAgentNotificationText":{"description":"Value supplied for `transferAgentNotificationText` in the `AssistantHangupRuntimeUpdateRequest` request.","type":"string","nullable":true,"key$":"transferAgentNotificationText"},"availableAgents":{"description":"Value supplied for `availableAgents` in the `AssistantHangupRuntimeUpdateRequest` request.","type":"array","items":{"type":"object","properties":{"assistantApiKey":{"description":"Value supplied for `assistantApiKey` in the `AssistantHangupTransferAgentRequest` request.","type":"string"},"description":{"description":"Value supplied for `description` in the `AssistantHangupTransferAgentRequest` request.","type":"string","nullable":true}},"required":["assistantApiKey","description"],"x-ref":"#/components/schemas/AssistantHangupTransferAgentRequest"},"key$":"availableAgents"}},"x-ref":"#/components/schemas/AssistantHangupRuntimeUpdateRequest","index$":1},"examples":{"toggleFlags":{"summary":"Only update the hangup and redirect toggles","value":{"enableHangup":true,"enableRedirect":true}},"enableTransfer":{"summary":"Activate the transfer with assistants and descriptions","value":{"enableTransferAgent":true,"transferAgentNotificationText":"Avvisa il cliente prima del trasferimento.","availableAgents":[{"assistantApiKey":"ai4call_sk_transfer_1","description":"Transfer for administrative requests."}]}},"disableTransfer":{"summary":"Disable the transfer and reset the targets","value":{"enableTransferAgent":false}}}}}},"parameters":[{"name":"assistantId","in":"path","required":true,"description":"Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.","schema":{"type":"string","minLength":1,"maxLength":128,"pattern":"^[A-Za-z0-9_-]+$"},"example":"205","x-ref":"#/components/parameters/AssistantIdentifier","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let assistant_hangup_runtime_update_success_ref01_data = Object.values(setup.data.existing.assistant_hangup_runtime_update_success)[0] as any

    // UPDATE
    const assistant_hangup_runtime_update_success_ref01_ent = client.AssistantHangupRuntimeUpdateSuccess()
    const assistant_hangup_runtime_update_success_ref01_data_up0: any = {}

    const assistant_hangup_runtime_update_success_ref01_markdef_up0 = { name: 'assistantApiKey', value: 'Mark01-assistant_hangup_runtime_update_success_ref01_' + setup.now }
    ;(assistant_hangup_runtime_update_success_ref01_data_up0 as any)[assistant_hangup_runtime_update_success_ref01_markdef_up0.name] = assistant_hangup_runtime_update_success_ref01_markdef_up0.value

    const assistant_hangup_runtime_update_success_ref01_resdata_up0 = (await assistant_hangup_runtime_update_success_ref01_ent.update(assistant_hangup_runtime_update_success_ref01_data_up0)).data()
    assert(null != assistant_hangup_runtime_update_success_ref01_resdata_up0)

    assert((assistant_hangup_runtime_update_success_ref01_resdata_up0 as any)[assistant_hangup_runtime_update_success_ref01_markdef_up0.name] === assistant_hangup_runtime_update_success_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/assistant_hangup_runtime_update_success/AssistantHangupRuntimeUpdateSuccessTestData.json')

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
    ['assistant_hangup_runtime_update_success01','assistant_hangup_runtime_update_success02','assistant_hangup_runtime_update_success03','assistant01','assistant02','assistant03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AI4CALL_TEST_ASSISTANT_HANGUP_RUNTIME_UPDATE_SUCCESS_ENTID': idmap,
    'AI4CALL_TEST_LIVE': 'FALSE',
    'AI4CALL_TEST_EXPLAIN': 'FALSE',
    'AI4CALL_APIKEY': '',
  })

  idmap = env['AI4CALL_TEST_ASSISTANT_HANGUP_RUNTIME_UPDATE_SUCCESS_ENTID']

  const live = 'TRUE' === env.AI4CALL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AI4CALL_TEST_ASSISTANT_HANGUP_RUNTIME_UPDATE_SUCCESS_ENTID']
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
  
