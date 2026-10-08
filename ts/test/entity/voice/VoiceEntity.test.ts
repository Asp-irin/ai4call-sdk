

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


describe('VoiceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
  afterEach(liveDelay('AI4CALL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Ai4callSDK.test()
    const ent = testsdk.Voice()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'voice.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"data":{"a":true,"h":"Data","n":"data","r":true,"t":"`$OBJECT`","key$":"data","index$":0},"message":{"a":true,"h":"Message","n":"message","r":true,"t":"`$STRING`","key$":"message","index$":1},"meta":{"a":true,"h":"Meta","n":"meta","r":true,"sh":"Collection metadata.","t":"`$OBJECT`","key$":"meta","index$":2},"requestId":{"a":true,"h":"Request Id","n":"requestId","r":true,"t":"`$STRING`","key$":"requestId","index$":3},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":4}},"name":"voice","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/catalog/assistants/{assistantId}/audio-to-audio/voices","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"205","k":"param","n":"assistant_id","or":"assistantId","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"gpt-4o-realtime-preview","k":"query","n":"model_code","or":"modelCode","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v1/catalog/assistants/{assistantId}/audio-to-audio/voices","q":{"exist":["assistant_id","model_code"]},"r":{"param":{"assistantId":"assistant_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"catalog"},{"lit":"assistants"},{"var":"assistant_id"},{"lit":"audio-to-audio"},{"lit":"voices"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v1/catalog/assistants/{assistantId}/voice-to-voice/voices","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"205","k":"param","n":"assistant_id","or":"assistantId","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"gpt-4o-realtime-preview","k":"query","n":"model_code","or":"modelCode","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v1/catalog/assistants/{assistantId}/voice-to-voice/voices","q":{"exist":["assistant_id","model_code"]},"r":{"param":{"assistantId":"assistant_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"catalog"},{"lit":"assistants"},{"var":"assistant_id"},{"lit":"voice-to-voice"},{"lit":"voices"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /api/v1/catalog/audio-to-audio/voices","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"gpt-4o-realtime-preview","k":"query","n":"model_code","or":"modelCode","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v1/catalog/audio-to-audio/voices","q":{"exist":["model_code"]},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"catalog"},{"lit":"audio-to-audio"},{"lit":"voices"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /api/v1/catalog/voice-to-voice/voices","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"gpt-4o-realtime-preview","k":"query","n":"model_code","or":"modelCode","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v1/catalog/voice-to-voice/voices","q":{"exist":["model_code"]},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"catalog"},{"lit":"voice-to-voice"},{"lit":"voices"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.assistant"]]},"key$":"voice","name__orig":"voice","Name":"Voice","name_":"voice","name-":"voice","NAME":"VOICE","index$":70}, {"active":true,"entity":"voice","key$":"BasicVoiceFlow","kind":"basic","name":"BasicVoiceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"voice_ref01","srcdatavar":"voice_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-voice_ref01"}}],"index$":0}]}, 'Voice', {"GET /api/v1/catalog/assistants/{assistantId}/audio-to-audio/voices":{"protocol":"http","parameters":[{"name":"assistantId","in":"path","required":true,"description":"Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.","schema":{"type":"string","minLength":1,"maxLength":128,"pattern":"^[A-Za-z0-9_-]+$"},"example":"205","x-ref":"#/components/parameters/AssistantIdentifier","index$":0},{"in":"query","name":"modelCode","required":true,"schema":{"type":"string"},"example":"gpt-4o-realtime-preview","index$":1}]},"GET /api/v1/catalog/assistants/{assistantId}/voice-to-voice/voices":{"protocol":"http","parameters":[{"name":"assistantId","in":"path","required":true,"description":"Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.","schema":{"type":"string","minLength":1,"maxLength":128,"pattern":"^[A-Za-z0-9_-]+$"},"example":"205","x-ref":"#/components/parameters/AssistantIdentifier","index$":0},{"in":"query","name":"modelCode","required":true,"schema":{"type":"string"},"example":"gpt-4o-realtime-preview","index$":1}]},"GET /api/v1/catalog/audio-to-audio/voices":{"protocol":"http","parameters":[{"in":"query","name":"modelCode","required":true,"schema":{"type":"string"},"example":"gpt-4o-realtime-preview","index$":0}]},"GET /api/v1/catalog/voice-to-voice/voices":{"protocol":"http","parameters":[{"in":"query","name":"modelCode","required":true,"schema":{"type":"string"},"example":"gpt-4o-realtime-preview","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let voice_ref01_data = Object.values(setup.data.existing.voice)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const voice_ref01_ent = client.Voice()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/voice/VoiceTestData.json')

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
    ['voice01','voice02','voice03','assistant01','assistant02','assistant03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AI4CALL_TEST_VOICE_ENTID': idmap,
    'AI4CALL_TEST_LIVE': 'FALSE',
    'AI4CALL_TEST_EXPLAIN': 'FALSE',
    'AI4CALL_APIKEY': '',
  })

  idmap = env['AI4CALL_TEST_VOICE_ENTID']

  const live = 'TRUE' === env.AI4CALL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AI4CALL_TEST_VOICE_ENTID']
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
  
