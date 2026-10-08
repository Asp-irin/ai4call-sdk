

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


describe('RuntimeBindingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
  afterEach(liveDelay('AI4CALL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Ai4callSDK.test()
    const ent = testsdk.RuntimeBinding()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'runtime_binding.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"assistantApiKey":{"a":true,"h":"Assistant Api Key","n":"assistantApiKey","r":true,"t":"`$STRING`","key$":"assistantApiKey","index$":0},"assistantId":{"a":true,"h":"Assistant Id","n":"assistantId","r":true,"t":"`$STRING`","key$":"assistantId","index$":1},"runtimeBindings":{"a":true,"h":"Runtime Bindings","n":"runtimeBindings","r":true,"t":"`$OBJECT`","key$":"runtimeBindings","index$":2}},"name":"runtime_binding","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/catalog/assistants/{assistantId}/runtime-bindings","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"205","k":"param","n":"assistant_id","or":"assistantId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v1/catalog/assistants/{assistantId}/runtime-bindings","q":{"exist":["assistant_id"]},"r":{"param":{"assistantId":"assistant_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"catalog"},{"lit":"assistants"},{"var":"assistant_id"},{"lit":"runtime-bindings"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.assistant"]]},"key$":"runtime_binding","name__orig":"runtime_binding","Name":"RuntimeBinding","name_":"runtime_binding","name-":"runtime-binding","NAME":"RUNTIME_BINDING","index$":67}, {"active":true,"entity":"runtime_binding","key$":"BasicRuntimeBindingFlow","kind":"basic","name":"BasicRuntimeBindingFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"runtime_binding_ref01","srcdatavar":"runtime_binding_ref01_data","suffix":"_dt0"},"m":{"id":"runtime_binding01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-runtime_binding_ref01"}}],"index$":0}]}, 'RuntimeBinding', {"GET /api/v1/catalog/assistants/{assistantId}/runtime-bindings":{"protocol":"http","parameters":[{"name":"assistantId","in":"path","required":true,"description":"Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.","schema":{"type":"string","minLength":1,"maxLength":128,"pattern":"^[A-Za-z0-9_-]+$"},"example":"205","x-ref":"#/components/parameters/AssistantIdentifier","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let runtime_binding_ref01_data = Object.values(setup.data.existing.runtime_binding)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const runtime_binding_ref01_ent = client.RuntimeBinding()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/runtime_binding/RuntimeBindingTestData.json')

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
    ['runtime_binding01','runtime_binding02','runtime_binding03','assistant01','assistant02','assistant03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AI4CALL_TEST_RUNTIME_BINDING_ENTID': idmap,
    'AI4CALL_TEST_LIVE': 'FALSE',
    'AI4CALL_TEST_EXPLAIN': 'FALSE',
    'AI4CALL_APIKEY': '',
  })

  idmap = env['AI4CALL_TEST_RUNTIME_BINDING_ENTID']

  const live = 'TRUE' === env.AI4CALL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AI4CALL_TEST_RUNTIME_BINDING_ENTID']
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
  
