

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


describe('AssistantNumberRoutingRuntimeSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
  afterEach(liveDelay('AI4CALL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Ai4callSDK.test()
    const ent = testsdk.AssistantNumberRoutingRuntimeSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'assistant_number_routing_runtime_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"configuration":{"a":true,"h":"Configuration","n":"configuration","r":true,"t":"`$OBJECT`","key$":"configuration","index$":0},"demoNumbers":{"a":true,"h":"Demo Numbers","n":"demoNumbers","r":false,"sh":"Demo numbers to route to this assistant","t":"`$ARRAY`","key$":"demoNumbers","index$":1},"purchasedNumbers":{"a":true,"h":"Purchased Numbers","n":"purchasedNumbers","r":false,"sh":"Purchased numbers to route to this assistant","t":"`$ARRAY`","key$":"purchasedNumbers","index$":2},"userNumbers":{"a":true,"h":"User Numbers","n":"userNumbers","r":false,"sh":"Customer's own numbers (own PBX) to route to this assistant","t":"`$ARRAY`","key$":"userNumbers","index$":3}},"name":"assistant_number_routing_runtime_success","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /api/v1/assistants/{assistantId}/runtime/number-routing","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"205","k":"param","n":"assistant_id","or":"assistantId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/api/v1/assistants/{assistantId}/runtime/number-routing","q":{"exist":["assistant_id"]},"r":{"param":{"assistantId":"assistant_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"assistants"},{"var":"assistant_id"},{"lit":"runtime"},{"lit":"number-routing"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.assistant"]]},"key$":"assistant_number_routing_runtime_success","name__orig":"assistant_number_routing_runtime_success","Name":"AssistantNumberRoutingRuntimeSuccess","name_":"assistant_number_routing_runtime_success","name-":"assistant-number-routing-runtime-success","NAME":"ASSISTANT_NUMBER_ROUTING_RUNTIME_SUCCESS","index$":31}, {"active":true,"entity":"assistant_number_routing_runtime_success","key$":"BasicAssistantNumberRoutingRuntimeSuccessFlow","kind":"basic","name":"BasicAssistantNumberRoutingRuntimeSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"assistant_number_routing_runtime_success_ref01","srcdatavar":"assistant_number_routing_runtime_success_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-assistant_number_routing_runtime_success_ref01"}}],"v":[],"index$":0}]}, 'AssistantNumberRoutingRuntimeSuccess', {"PATCH /api/v1/assistants/{assistantId}/runtime/number-routing":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","description":"PATCH merge of the numbers routed to the assistant.\n\nOperational rules:\n- at least one of `demoNumbers`, `purchasedNumbers` and `userNumbers` must be present\n- omitted lists retain the current value\n- each list replaces the previous one entirely: to remove all numbers of a kind, send `[]`\n- only numbers already available on the customer account can be assigned\n- a number assigned to another assistant is moved to this one","properties":{"demoNumbers":{"type":"array","description":"Demo numbers to route to this assistant","items":{"type":"string"},"example":["+390211223344"],"key$":"demoNumbers"},"purchasedNumbers":{"type":"array","description":"Purchased numbers to route to this assistant","items":{"type":"string"},"example":["+390255667788"],"key$":"purchasedNumbers"},"userNumbers":{"type":"array","description":"Customer's own numbers (own PBX) to route to this assistant","items":{"type":"string"},"key$":"userNumbers"}},"minProperties":1,"x-ref":"#/components/schemas/AssistantNumberRoutingRuntimeUpdateRequest","index$":1},"examples":{"assignDemoNumber":{"summary":"Route a demo number","value":{"demoNumbers":["+390211223344"]}},"replacePurchased":{"summary":"Replace purchased numbers","value":{"purchasedNumbers":["+390255667788","+390255667799"]}},"freeDemoNumbers":{"summary":"Free all demo numbers","value":{"demoNumbers":[]}}}}}},"parameters":[{"name":"assistantId","in":"path","required":true,"description":"Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.","schema":{"type":"string","minLength":1,"maxLength":128,"pattern":"^[A-Za-z0-9_-]+$"},"example":"205","x-ref":"#/components/parameters/AssistantIdentifier","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let assistant_number_routing_runtime_success_ref01_data = Object.values(setup.data.existing.assistant_number_routing_runtime_success)[0] as any

    // UPDATE
    const assistant_number_routing_runtime_success_ref01_ent = client.AssistantNumberRoutingRuntimeSuccess()
    const assistant_number_routing_runtime_success_ref01_data_up0: any = {}

    const assistant_number_routing_runtime_success_ref01_resdata_up0 = (await assistant_number_routing_runtime_success_ref01_ent.update(assistant_number_routing_runtime_success_ref01_data_up0)).data()
    assert(null != assistant_number_routing_runtime_success_ref01_resdata_up0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/assistant_number_routing_runtime_success/AssistantNumberRoutingRuntimeSuccessTestData.json')

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
    ['assistant_number_routing_runtime_success01','assistant_number_routing_runtime_success02','assistant_number_routing_runtime_success03','assistant01','assistant02','assistant03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AI4CALL_TEST_ASSISTANT_NUMBER_ROUTING_RUNTIME_SUCCESS_ENTID': idmap,
    'AI4CALL_TEST_LIVE': 'FALSE',
    'AI4CALL_TEST_EXPLAIN': 'FALSE',
    'AI4CALL_APIKEY': '',
  })

  idmap = env['AI4CALL_TEST_ASSISTANT_NUMBER_ROUTING_RUNTIME_SUCCESS_ENTID']

  const live = 'TRUE' === env.AI4CALL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AI4CALL_TEST_ASSISTANT_NUMBER_ROUTING_RUNTIME_SUCCESS_ENTID']
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
  
