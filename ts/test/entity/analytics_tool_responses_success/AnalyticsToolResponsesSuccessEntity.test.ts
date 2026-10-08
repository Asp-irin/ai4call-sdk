

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


describe('AnalyticsToolResponsesSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
  afterEach(liveDelay('AI4CALL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Ai4callSDK.test()
    const ent = testsdk.AnalyticsToolResponsesSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'analytics_tool_responses_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"data":{"a":true,"h":"Data","n":"data","r":true,"t":"`$OBJECT`","key$":"data","index$":0},"message":{"a":true,"h":"Message","n":"message","r":true,"t":"`$STRING`","key$":"message","index$":1},"meta":{"a":true,"h":"Meta","n":"meta","r":true,"t":"`$OBJECT`","key$":"meta","index$":2},"requestId":{"a":true,"h":"Request Id","n":"requestId","r":true,"t":"`$STRING`","key$":"requestId","index$":3},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":4}},"name":"analytics_tool_responses_success","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/account/analytics/tool-responses","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"2026-04-24","k":"query","n":"end_date","or":"endDate","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":50,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":"2026-04-01","k":"query","n":"start_date","or":"startDate","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/api/v1/account/analytics/tool-responses","q":{"exist":["cursor","end_date","limit","start_date"]},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"account"},{"lit":"analytics"},{"lit":"tool-responses"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"analytics_tool_responses_success","name__orig":"analytics_tool_responses_success","Name":"AnalyticsToolResponsesSuccess","name_":"analytics_tool_responses_success","name-":"analytics-tool-responses-success","NAME":"ANALYTICS_TOOL_RESPONSES_SUCCESS","index$":15}, {"active":true,"entity":"analytics_tool_responses_success","key$":"BasicAnalyticsToolResponsesSuccessFlow","kind":"basic","name":"BasicAnalyticsToolResponsesSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"analytics_tool_responses_success_ref01","srcdatavar":"analytics_tool_responses_success_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-analytics_tool_responses_success_ref01"}}],"index$":0}]}, 'AnalyticsToolResponsesSuccess', {"GET /api/v1/account/analytics/tool-responses":{"protocol":"http","parameters":[{"in":"query","name":"startDate","required":false,"schema":{"type":"string","format":"date"},"description":"Filter start date (YYYY-MM-DD, included)","example":"2026-04-01","index$":0},{"in":"query","name":"endDate","required":false,"schema":{"type":"string","format":"date"},"description":"Filter end date (YYYY-MM-DD, included)","example":"2026-04-24","index$":1},{"in":"query","name":"limit","required":false,"schema":{"type":"integer","minimum":1,"maximum":100},"description":"Maximum number of records. If omitted along with `cursor`, retains legacy non-paged behavior.","example":50,"index$":2},{"in":"query","name":"cursor","required":false,"schema":{"type":"string"},"description":"Opaque cursor returned in `meta.nextCursor` to read the next page.","index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let analytics_tool_responses_success_ref01_data = Object.values(setup.data.existing.analytics_tool_responses_success)[0] as any

    // LOAD
    const analytics_tool_responses_success_ref01_ent = client.AnalyticsToolResponsesSuccess()
    const analytics_tool_responses_success_ref01_match_dt0: any = {}
    const analytics_tool_responses_success_ref01_data_dt0 = (await analytics_tool_responses_success_ref01_ent.load(analytics_tool_responses_success_ref01_match_dt0)).data()
    assert(null != analytics_tool_responses_success_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/analytics_tool_responses_success/AnalyticsToolResponsesSuccessTestData.json')

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
    ['analytics_tool_responses_success01','analytics_tool_responses_success02','analytics_tool_responses_success03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AI4CALL_TEST_ANALYTICS_TOOL_RESPONSES_SUCCESS_ENTID': idmap,
    'AI4CALL_TEST_LIVE': 'FALSE',
    'AI4CALL_TEST_EXPLAIN': 'FALSE',
    'AI4CALL_APIKEY': '',
  })

  idmap = env['AI4CALL_TEST_ANALYTICS_TOOL_RESPONSES_SUCCESS_ENTID']

  const live = 'TRUE' === env.AI4CALL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AI4CALL_TEST_ANALYTICS_TOOL_RESPONSES_SUCCESS_ENTID']
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
  
