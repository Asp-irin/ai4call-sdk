

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


describe('AccountCallLimitsSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
  afterEach(liveDelay('AI4CALL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Ai4callSDK.test()
    const ent = testsdk.AccountCallLimitsSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'account_call_limits_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"assistants":{"a":true,"h":"Assistants","n":"assistants","r":true,"sh":"Value supplied for `assistants` in the `AccountCallLimitsUpdateRequest` request.","t":"`$ARRAY`","key$":"assistants","index$":0},"data":{"a":true,"h":"Data","n":"data","r":true,"t":"`$OBJECT`","key$":"data","index$":1},"message":{"a":true,"h":"Message","n":"message","r":true,"t":"`$STRING`","key$":"message","index$":2},"meta":{"a":true,"h":"Meta","n":"meta","r":true,"t":"`$OBJECT`","key$":"meta","index$":3},"requestId":{"a":true,"h":"Request Id","n":"requestId","r":true,"t":"`$STRING`","key$":"requestId","index$":4},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":5}},"name":"account_call_limits_success","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/account/call-limits","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/v1/account/call-limits","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"account"},{"lit":"call-limits"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /api/v1/account/call-limits","source":"openapi3","version":2},"g":{},"k":"http","m":"PATCH","o":"/api/v1/account/call-limits","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"account"},{"lit":"call-limits"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"account_call_limits_success","name__orig":"account_call_limits_success","Name":"AccountCallLimitsSuccess","name_":"account_call_limits_success","name-":"account-call-limits-success","NAME":"ACCOUNT_CALL_LIMITS_SUCCESS","index$":2}, {"active":true,"entity":"account_call_limits_success","key$":"BasicAccountCallLimitsSuccessFlow","kind":"basic","name":"BasicAccountCallLimitsSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"account_call_limits_success_ref01","srcdatavar":"account_call_limits_success_ref01_data","suffix":"_up0","textfield":"message"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-account_call_limits_success_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"account_call_limits_success_ref01","srcdatavar":"account_call_limits_success_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-account_call_limits_success_ref01"}}],"index$":1}]}, 'AccountCallLimitsSuccess', {"GET /api/v1/account/call-limits":{"protocol":"http","parameters":[]},"PATCH /api/v1/account/call-limits":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","description":"PATCH merge the account's simultaneous call limits.\n\nOperational rules:\n- `assistants` is mandatory\n- each item updates only the indicated assistant\n- `maxConcurrentCalls: null` removes the limit configured for that assistant\n- if an assistant is not sent, its current limit does not change\n- `maxConcurrentCalls` must be an integer greater than or equal to `0`","properties":{"assistants":{"description":"Value supplied for `assistants` in the `AccountCallLimitsUpdateRequest` request.","type":"array","items":{"type":"object","properties":{"assistantApiKey":{"type":"string"},"maxConcurrentCalls":{"type":"integer","nullable":true,"minimum":0}},"required":["assistantApiKey","maxConcurrentCalls"],"x-ref":"#/components/schemas/AccountCallLimitMutationItem"},"key$":"assistants"}},"required":["assistants"],"x-ref":"#/components/schemas/AccountCallLimitsUpdateRequest","index$":1},"examples":{"updateTwoAssistants":{"summary":"Upgrade two assistants","value":{"assistants":[{"assistantApiKey":"ai4call_sk_abc123","maxConcurrentCalls":5},{"assistantApiKey":"ai4call_sk_sales456","maxConcurrentCalls":12}]}},"resetOneAssistant":{"summary":"Removes the limit configured by an assistant","value":{"assistants":[{"assistantApiKey":"ai4call_sk_abc123","maxConcurrentCalls":null}]}}}}}},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let account_call_limits_success_ref01_data = Object.values(setup.data.existing.account_call_limits_success)[0] as any

    // UPDATE
    const account_call_limits_success_ref01_ent = client.AccountCallLimitsSuccess()
    const account_call_limits_success_ref01_data_up0: any = {}

    const account_call_limits_success_ref01_markdef_up0 = { name: 'message', value: 'Mark01-account_call_limits_success_ref01_' + setup.now }
    ;(account_call_limits_success_ref01_data_up0 as any)[account_call_limits_success_ref01_markdef_up0.name] = account_call_limits_success_ref01_markdef_up0.value

    const account_call_limits_success_ref01_resdata_up0 = (await account_call_limits_success_ref01_ent.update(account_call_limits_success_ref01_data_up0)).data()
    assert(null != account_call_limits_success_ref01_resdata_up0)

    assert((account_call_limits_success_ref01_resdata_up0 as any)[account_call_limits_success_ref01_markdef_up0.name] === account_call_limits_success_ref01_markdef_up0.value)


    // LOAD
    const account_call_limits_success_ref01_match_dt0: any = {}
    const account_call_limits_success_ref01_data_dt0 = (await account_call_limits_success_ref01_ent.load(account_call_limits_success_ref01_match_dt0)).data()
    assert(null != account_call_limits_success_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/account_call_limits_success/AccountCallLimitsSuccessTestData.json')

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
    ['account_call_limits_success01','account_call_limits_success02','account_call_limits_success03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AI4CALL_TEST_ACCOUNT_CALL_LIMITS_SUCCESS_ENTID': idmap,
    'AI4CALL_TEST_LIVE': 'FALSE',
    'AI4CALL_TEST_EXPLAIN': 'FALSE',
    'AI4CALL_APIKEY': '',
  })

  idmap = env['AI4CALL_TEST_ACCOUNT_CALL_LIMITS_SUCCESS_ENTID']

  const live = 'TRUE' === env.AI4CALL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AI4CALL_TEST_ACCOUNT_CALL_LIMITS_SUCCESS_ENTID']
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
  
