

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


describe('AssistantConversationWebhookRuntimeSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
  afterEach(liveDelay('AI4CALL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Ai4callSDK.test()
    const ent = testsdk.AssistantConversationWebhookRuntimeSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'assistant_conversation_webhook_runtime_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"authName":{"a":true,"h":"Auth Name","n":"authName","r":false,"sh":"Name of the saved authentication to apply to the request","t":"`$STRING`","key$":"authName","index$":0},"configuration":{"a":true,"h":"Configuration","n":"configuration","r":true,"t":"`$OBJECT`","key$":"configuration","index$":1},"enabled":{"a":true,"h":"Enabled","n":"enabled","r":false,"sh":"Enable or disable sending the conversation to the webhook","t":"`$BOOLEAN`","key$":"enabled","index$":2},"url":{"a":true,"h":"Url","n":"url","r":false,"sh":"Endpoint that receives the POST at the end of the call","t":"`$STRING`","key$":"url","index$":3}},"name":"assistant_conversation_webhook_runtime_success","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/assistants/{assistantId}/runtime/hangup/conversation-webhook","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"205","k":"param","n":"assistant_id","or":"assistantId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v1/assistants/{assistantId}/runtime/hangup/conversation-webhook","q":{"exist":["assistant_id"]},"r":{"param":{"assistantId":"assistant_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"assistants"},{"var":"assistant_id"},{"lit":"runtime"},{"lit":"hangup"},{"lit":"conversation-webhook"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /api/v1/assistants/{assistantId}/runtime/hangup/conversation-webhook","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"205","k":"param","n":"assistant_id","or":"assistantId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/api/v1/assistants/{assistantId}/runtime/hangup/conversation-webhook","q":{"exist":["assistant_id"]},"r":{"param":{"assistantId":"assistant_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"assistants"},{"var":"assistant_id"},{"lit":"runtime"},{"lit":"hangup"},{"lit":"conversation-webhook"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.assistant"]]},"key$":"assistant_conversation_webhook_runtime_success","name__orig":"assistant_conversation_webhook_runtime_success","Name":"AssistantConversationWebhookRuntimeSuccess","name_":"assistant_conversation_webhook_runtime_success","name-":"assistant-conversation-webhook-runtime-success","NAME":"ASSISTANT_CONVERSATION_WEBHOOK_RUNTIME_SUCCESS","index$":22}, {"active":true,"entity":"assistant_conversation_webhook_runtime_success","key$":"BasicAssistantConversationWebhookRuntimeSuccessFlow","kind":"basic","name":"BasicAssistantConversationWebhookRuntimeSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"assistant_conversation_webhook_runtime_success_ref01","srcdatavar":"assistant_conversation_webhook_runtime_success_ref01_data","suffix":"_up0","textfield":"authName"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-assistant_conversation_webhook_runtime_success_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"assistant_conversation_webhook_runtime_success_ref01","srcdatavar":"assistant_conversation_webhook_runtime_success_ref01_data","suffix":"_dt0"},"m":{"id":"assistant_conversation_webhook_runtime_success01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-assistant_conversation_webhook_runtime_success_ref01"}}],"index$":1}]}, 'AssistantConversationWebhookRuntimeSuccess', {"GET /api/v1/assistants/{assistantId}/runtime/hangup/conversation-webhook":{"protocol":"http","parameters":[{"name":"assistantId","in":"path","required":true,"description":"Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.","schema":{"type":"string","minLength":1,"maxLength":128,"pattern":"^[A-Za-z0-9_-]+$"},"example":"205","x-ref":"#/components/parameters/AssistantIdentifier","index$":0}]},"PATCH /api/v1/assistants/{assistantId}/runtime/hangup/conversation-webhook":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","description":"PATCH merge of the assistant end-of-conversation webhook configuration.\n\nOperational rules:\n- at least one of `enabled`, `url` and `authName` must be present\n- omitted fields retain the current value\n- if `enabled: true`, `url` must be a valid `http://` or `https://` address\n- `authName` matches the name of an authentication already saved by the customer;\n  credentials are resolved server side and never travel in this payload\n- setting `authName: null` sends the webhook without authentication","properties":{"enabled":{"type":"boolean","description":"Enable or disable sending the conversation to the webhook","key$":"enabled"},"url":{"type":"string","nullable":true,"description":"Endpoint that receives the POST at the end of the call","example":"https://example.com/hooks/ai4call","key$":"url"},"authName":{"type":"string","nullable":true,"description":"Name of the saved authentication to apply to the request","example":"crm-bearer","key$":"authName"}},"minProperties":1,"x-ref":"#/components/schemas/AssistantConversationWebhookRuntimeUpdateRequest","index$":1},"examples":{"enableWithAuth":{"summary":"Enable sending with saved authentication","value":{"enabled":true,"url":"https://example.com/hooks/ai4call","authName":"crm-bearer"}},"changeUrlOnly":{"summary":"Change destination only","value":{"url":"https://example.com/hooks/ai4call-v2"}},"removeAuthentication":{"summary":"Send without authentication","value":{"authName":null}},"disable":{"summary":"Disable sending","value":{"enabled":false}}}}}},"parameters":[{"name":"assistantId","in":"path","required":true,"description":"Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.","schema":{"type":"string","minLength":1,"maxLength":128,"pattern":"^[A-Za-z0-9_-]+$"},"example":"205","x-ref":"#/components/parameters/AssistantIdentifier","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let assistant_conversation_webhook_runtime_success_ref01_data = Object.values(setup.data.existing.assistant_conversation_webhook_runtime_success)[0] as any

    // UPDATE
    const assistant_conversation_webhook_runtime_success_ref01_ent = client.AssistantConversationWebhookRuntimeSuccess()
    const assistant_conversation_webhook_runtime_success_ref01_data_up0: any = {}

    const assistant_conversation_webhook_runtime_success_ref01_markdef_up0 = { name: 'authName', value: 'Mark01-assistant_conversation_webhook_runtime_success_ref01_' + setup.now }
    ;(assistant_conversation_webhook_runtime_success_ref01_data_up0 as any)[assistant_conversation_webhook_runtime_success_ref01_markdef_up0.name] = assistant_conversation_webhook_runtime_success_ref01_markdef_up0.value

    const assistant_conversation_webhook_runtime_success_ref01_resdata_up0 = (await assistant_conversation_webhook_runtime_success_ref01_ent.update(assistant_conversation_webhook_runtime_success_ref01_data_up0)).data()
    assert(null != assistant_conversation_webhook_runtime_success_ref01_resdata_up0)

    assert((assistant_conversation_webhook_runtime_success_ref01_resdata_up0 as any)[assistant_conversation_webhook_runtime_success_ref01_markdef_up0.name] === assistant_conversation_webhook_runtime_success_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/assistant_conversation_webhook_runtime_success/AssistantConversationWebhookRuntimeSuccessTestData.json')

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
    ['assistant_conversation_webhook_runtime_success01','assistant_conversation_webhook_runtime_success02','assistant_conversation_webhook_runtime_success03','assistant01','assistant02','assistant03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AI4CALL_TEST_ASSISTANT_CONVERSATION_WEBHOOK_RUNTIME_SUCCESS_ENTID': idmap,
    'AI4CALL_TEST_LIVE': 'FALSE',
    'AI4CALL_TEST_EXPLAIN': 'FALSE',
    'AI4CALL_APIKEY': '',
  })

  idmap = env['AI4CALL_TEST_ASSISTANT_CONVERSATION_WEBHOOK_RUNTIME_SUCCESS_ENTID']

  const live = 'TRUE' === env.AI4CALL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AI4CALL_TEST_ASSISTANT_CONVERSATION_WEBHOOK_RUNTIME_SUCCESS_ENTID']
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
  
