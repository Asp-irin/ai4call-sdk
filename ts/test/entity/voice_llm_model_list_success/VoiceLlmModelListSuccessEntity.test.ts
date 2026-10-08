

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


describe('VoiceLlmModelListSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
  afterEach(liveDelay('AI4CALL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Ai4callSDK.test()
    const ent = testsdk.VoiceLlmModelListSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'voice_llm_model_list_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"data":{"a":true,"h":"Data","n":"data","r":true,"t":"`$OBJECT`","key$":"data","index$":0},"message":{"a":true,"h":"Message","n":"message","r":true,"t":"`$STRING`","key$":"message","index$":1},"meta":{"a":true,"h":"Meta","n":"meta","r":true,"sh":"Collection metadata.","t":"`$OBJECT`","key$":"meta","index$":2},"requestId":{"a":true,"h":"Request Id","n":"requestId","r":true,"t":"`$STRING`","key$":"requestId","index$":3},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":4}},"name":"voice_llm_model_list_success","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/catalog/audio-to-audio/models","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"openai","k":"query","n":"provider","or":"provider","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"ai4call","k":"query","n":"source_mode","or":"sourceMode","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v1/catalog/audio-to-audio/models","q":{"exist":["provider","source_mode"]},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"catalog"},{"lit":"audio-to-audio"},{"lit":"models"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v1/catalog/voice-to-voice/models","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"openai","k":"query","n":"provider","or":"provider","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"ai4call","k":"query","n":"source_mode","or":"sourceMode","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v1/catalog/voice-to-voice/models","q":{"exist":["provider","source_mode"]},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"catalog"},{"lit":"voice-to-voice"},{"lit":"models"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /api/v1/catalog/assistants/{assistantId}/audio-to-audio/models","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"205","k":"param","n":"assistant_id","or":"assistantId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v1/catalog/assistants/{assistantId}/audio-to-audio/models","q":{"exist":["assistant_id"]},"r":{"param":{"assistantId":"assistant_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"catalog"},{"lit":"assistants"},{"var":"assistant_id"},{"lit":"audio-to-audio"},{"lit":"models"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /api/v1/catalog/assistants/{assistantId}/voice-to-voice/models","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"205","k":"param","n":"assistant_id","or":"assistantId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v1/catalog/assistants/{assistantId}/voice-to-voice/models","q":{"exist":["assistant_id"]},"r":{"param":{"assistantId":"assistant_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"catalog"},{"lit":"assistants"},{"var":"assistant_id"},{"lit":"voice-to-voice"},{"lit":"models"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.assistant"]]},"key$":"voice_llm_model_list_success","name__orig":"voice_llm_model_list_success","Name":"VoiceLlmModelListSuccess","name_":"voice_llm_model_list_success","name-":"voice-llm-model-list-success","NAME":"VOICE_LLM_MODEL_LIST_SUCCESS","index$":72}, {"active":true,"entity":"voice_llm_model_list_success","key$":"BasicVoiceLlmModelListSuccessFlow","kind":"basic","name":"BasicVoiceLlmModelListSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"voice_llm_model_list_success_ref01","srcdatavar":"voice_llm_model_list_success_ref01_data","suffix":"_dt0"},"m":{"id":"voice_llm_model_list_success01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-voice_llm_model_list_success_ref01"}}],"index$":0}]}, 'VoiceLlmModelListSuccess', {"GET /api/v1/catalog/audio-to-audio/models":{"protocol":"http","parameters":[{"in":"query","name":"provider","required":true,"schema":{"type":"string"},"example":"openai","index$":0},{"in":"query","name":"sourceMode","required":false,"schema":{"type":"string","enum":["ai4call","customer"],"default":"ai4call"},"index$":1}]},"GET /api/v1/catalog/voice-to-voice/models":{"protocol":"http","parameters":[{"in":"query","name":"provider","required":true,"schema":{"type":"string"},"example":"openai","index$":0},{"in":"query","name":"sourceMode","required":false,"schema":{"type":"string","enum":["ai4call","customer"],"default":"ai4call"},"index$":1}]},"GET /api/v1/catalog/assistants/{assistantId}/audio-to-audio/models":{"protocol":"http","parameters":[{"name":"assistantId","in":"path","required":true,"description":"Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.","schema":{"type":"string","minLength":1,"maxLength":128,"pattern":"^[A-Za-z0-9_-]+$"},"example":"205","x-ref":"#/components/parameters/AssistantIdentifier","index$":0}]},"GET /api/v1/catalog/assistants/{assistantId}/voice-to-voice/models":{"protocol":"http","parameters":[{"name":"assistantId","in":"path","required":true,"description":"Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.","schema":{"type":"string","minLength":1,"maxLength":128,"pattern":"^[A-Za-z0-9_-]+$"},"example":"205","x-ref":"#/components/parameters/AssistantIdentifier","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let voice_llm_model_list_success_ref01_data = Object.values(setup.data.existing.voice_llm_model_list_success)[0] as any

    // LOAD
    const voice_llm_model_list_success_ref01_ent = client.VoiceLlmModelListSuccess()
    const voice_llm_model_list_success_ref01_match_dt0: any = {}
    const voice_llm_model_list_success_ref01_data_dt0 = (await voice_llm_model_list_success_ref01_ent.load(voice_llm_model_list_success_ref01_match_dt0)).data()
    assert(null != voice_llm_model_list_success_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/voice_llm_model_list_success/VoiceLlmModelListSuccessTestData.json')

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
    ['voice_llm_model_list_success01','voice_llm_model_list_success02','voice_llm_model_list_success03','assistant01','assistant02','assistant03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AI4CALL_TEST_VOICE_LLM_MODEL_LIST_SUCCESS_ENTID': idmap,
    'AI4CALL_TEST_LIVE': 'FALSE',
    'AI4CALL_TEST_EXPLAIN': 'FALSE',
    'AI4CALL_APIKEY': '',
  })

  idmap = env['AI4CALL_TEST_VOICE_LLM_MODEL_LIST_SUCCESS_ENTID']

  const live = 'TRUE' === env.AI4CALL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AI4CALL_TEST_VOICE_LLM_MODEL_LIST_SUCCESS_ENTID']
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
  
