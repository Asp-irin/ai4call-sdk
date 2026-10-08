

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


describe('AccountNumberRoutingSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
  afterEach(liveDelay('AI4CALL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Ai4callSDK.test()
    const ent = testsdk.AccountNumberRoutingSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'account_number_routing_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"data":{"a":true,"h":"Data","n":"data","r":true,"t":"`$OBJECT`","key$":"data","index$":0},"demoNumbers":{"a":true,"h":"Demo Numbers","n":"demoNumbers","r":false,"sh":"Value supplied for `demoNumbers` in the `AccountNumberRoutingUpdateRequest` request.","t":"`$ARRAY`","key$":"demoNumbers","index$":1},"message":{"a":true,"h":"Message","n":"message","r":true,"t":"`$STRING`","key$":"message","index$":2},"meta":{"a":true,"h":"Meta","n":"meta","r":true,"t":"`$OBJECT`","key$":"meta","index$":3},"purchasedNumbers":{"a":true,"h":"Purchased Numbers","n":"purchasedNumbers","r":false,"sh":"Value supplied for `purchasedNumbers` in the `AccountNumberRoutingUpdateRequest` request.","t":"`$ARRAY`","key$":"purchasedNumbers","index$":4},"requestId":{"a":true,"h":"Request Id","n":"requestId","r":true,"t":"`$STRING`","key$":"requestId","index$":5},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":6},"userNumbers":{"a":true,"h":"User Numbers","n":"userNumbers","r":false,"sh":"Value supplied for `userNumbers` in the `AccountNumberRoutingUpdateRequest` request.","t":"`$ARRAY`","key$":"userNumbers","index$":7}},"name":"account_number_routing_success","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/account/number-routing","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/v1/account/number-routing","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"account"},{"lit":"number-routing"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /api/v1/account/number-routing","source":"openapi3","version":2},"g":{},"k":"http","m":"PATCH","o":"/api/v1/account/number-routing","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"account"},{"lit":"number-routing"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"account_number_routing_success","name__orig":"account_number_routing_success","Name":"AccountNumberRoutingSuccess","name_":"account_number_routing_success","name-":"account-number-routing-success","NAME":"ACCOUNT_NUMBER_ROUTING_SUCCESS","index$":3}, {"active":true,"entity":"account_number_routing_success","key$":"BasicAccountNumberRoutingSuccessFlow","kind":"basic","name":"BasicAccountNumberRoutingSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"account_number_routing_success_ref01","srcdatavar":"account_number_routing_success_ref01_data","suffix":"_up0","textfield":"message"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-account_number_routing_success_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"account_number_routing_success_ref01","srcdatavar":"account_number_routing_success_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-account_number_routing_success_ref01"}}],"index$":1}]}, 'AccountNumberRoutingSuccess', {"GET /api/v1/account/number-routing":{"protocol":"http","parameters":[]},"PATCH /api/v1/account/number-routing":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","description":"PATCH merge of account number routing.\n\nOperational rules:\n- at least one of `demoNumbers`, `purchasedNumbers`, `userNumbers` must be present\n- each item updates only the indicated number\n- `assistantApiKey: null` releases the number\n- `assistantApiKey: \"...\"` connect or move the number to that assistant\n- if a number was connected to another assistant, it is dropped and reconnected to the new one\n- for demo numbers, if the target assistant already had another demo number, the old one is released\n- omitted fields are not modified","properties":{"demoNumbers":{"description":"Value supplied for `demoNumbers` in the `AccountNumberRoutingUpdateRequest` request.","type":"array","items":{"type":"object","properties":{"phoneNumber":{"type":"string"},"assistantApiKey":{"type":"string","nullable":true}},"required":["phoneNumber","assistantApiKey"],"x-ref":"#/components/schemas/AccountNumberRoutingMutationItem"},"key$":"demoNumbers"},"purchasedNumbers":{"description":"Value supplied for `purchasedNumbers` in the `AccountNumberRoutingUpdateRequest` request.","type":"array","items":{"type":"object","properties":{"phoneNumber":{"type":"string"},"assistantApiKey":{"type":"string","nullable":true}},"required":["phoneNumber","assistantApiKey"],"x-ref":"#/components/schemas/AccountNumberRoutingMutationItem"},"key$":"purchasedNumbers"},"userNumbers":{"description":"Value supplied for `userNumbers` in the `AccountNumberRoutingUpdateRequest` request.","type":"array","items":{"type":"object","properties":{"phoneNumber":{"type":"string"},"assistantApiKey":{"type":"string","nullable":true}},"required":["phoneNumber","assistantApiKey"],"x-ref":"#/components/schemas/AccountNumberRoutingMutationItem"},"key$":"userNumbers"}},"x-ref":"#/components/schemas/AccountNumberRoutingUpdateRequest","index$":1},"examples":{"assignAndRelease":{"summary":"Connect and drop numbers","value":{"demoNumbers":[{"phoneNumber":"000012345678","assistantApiKey":"ai4call_sk_abc123"}],"purchasedNumbers":[{"phoneNumber":"+390201234567","assistantApiKey":"ai4call_sk_sales456"}],"userNumbers":[{"phoneNumber":"+390612345678","assistantApiKey":null}]}},"moveNumber":{"summary":"Move a number to another assistant","value":{"purchasedNumbers":[{"phoneNumber":"+390201234567","assistantApiKey":"ai4call_sk_new999"}]}}}}}},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let account_number_routing_success_ref01_data = Object.values(setup.data.existing.account_number_routing_success)[0] as any

    // UPDATE
    const account_number_routing_success_ref01_ent = client.AccountNumberRoutingSuccess()
    const account_number_routing_success_ref01_data_up0: any = {}

    const account_number_routing_success_ref01_markdef_up0 = { name: 'message', value: 'Mark01-account_number_routing_success_ref01_' + setup.now }
    ;(account_number_routing_success_ref01_data_up0 as any)[account_number_routing_success_ref01_markdef_up0.name] = account_number_routing_success_ref01_markdef_up0.value

    const account_number_routing_success_ref01_resdata_up0 = (await account_number_routing_success_ref01_ent.update(account_number_routing_success_ref01_data_up0)).data()
    assert(null != account_number_routing_success_ref01_resdata_up0)

    assert((account_number_routing_success_ref01_resdata_up0 as any)[account_number_routing_success_ref01_markdef_up0.name] === account_number_routing_success_ref01_markdef_up0.value)


    // LOAD
    const account_number_routing_success_ref01_match_dt0: any = {}
    const account_number_routing_success_ref01_data_dt0 = (await account_number_routing_success_ref01_ent.load(account_number_routing_success_ref01_match_dt0)).data()
    assert(null != account_number_routing_success_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/account_number_routing_success/AccountNumberRoutingSuccessTestData.json')

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
    ['account_number_routing_success01','account_number_routing_success02','account_number_routing_success03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AI4CALL_TEST_ACCOUNT_NUMBER_ROUTING_SUCCESS_ENTID': idmap,
    'AI4CALL_TEST_LIVE': 'FALSE',
    'AI4CALL_TEST_EXPLAIN': 'FALSE',
    'AI4CALL_APIKEY': '',
  })

  idmap = env['AI4CALL_TEST_ACCOUNT_NUMBER_ROUTING_SUCCESS_ENTID']

  const live = 'TRUE' === env.AI4CALL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AI4CALL_TEST_ACCOUNT_NUMBER_ROUTING_SUCCESS_ENTID']
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
  
