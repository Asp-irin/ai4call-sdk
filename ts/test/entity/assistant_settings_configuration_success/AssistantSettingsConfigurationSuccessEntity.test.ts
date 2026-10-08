

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


describe('AssistantSettingsConfigurationSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
  afterEach(liveDelay('AI4CALL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Ai4callSDK.test()
    const ent = testsdk.AssistantSettingsConfigurationSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'assistant_settings_configuration_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"assistant_settings_configuration_success","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/catalog/assistants/{assistantId}/settings","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"205","k":"param","n":"id","or":"assistantId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v1/catalog/assistants/{assistantId}/settings","q":{"$action":"settings","exist":["id"]},"r":{"param":{"assistantId":"id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"catalog"},{"lit":"assistants"},{"var":"id"},{"lit":"settings"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"assistant_settings_configuration_success","name__orig":"assistant_settings_configuration_success","Name":"AssistantSettingsConfigurationSuccess","name_":"assistant_settings_configuration_success","name-":"assistant-settings-configuration-success","NAME":"ASSISTANT_SETTINGS_CONFIGURATION_SUCCESS","index$":39}, {"active":true,"entity":"assistant_settings_configuration_success","key$":"BasicAssistantSettingsConfigurationSuccessFlow","kind":"basic","name":"BasicAssistantSettingsConfigurationSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"assistant_settings_configuration_success_ref01","srcdatavar":"assistant_settings_configuration_success_ref01_data","suffix":"_dt0"},"m":{"id":"assistant_settings_configuration_success01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-assistant_settings_configuration_success_ref01"}}],"index$":0}]}, 'AssistantSettingsConfigurationSuccess', {"GET /api/v1/catalog/assistants/{assistantId}/settings":{"protocol":"http","parameters":[{"name":"assistantId","in":"path","required":true,"description":"Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.","schema":{"type":"string","minLength":1,"maxLength":128,"pattern":"^[A-Za-z0-9_-]+$"},"example":"205","x-ref":"#/components/parameters/AssistantIdentifier","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let assistant_settings_configuration_success_ref01_data = Object.values(setup.data.existing.assistant_settings_configuration_success)[0] as any

    // LOAD
    const assistant_settings_configuration_success_ref01_ent = client.AssistantSettingsConfigurationSuccess()
    const assistant_settings_configuration_success_ref01_match_dt0: any = {}
    assistant_settings_configuration_success_ref01_match_dt0.id = assistant_settings_configuration_success_ref01_data.id
    const assistant_settings_configuration_success_ref01_data_dt0 = (await assistant_settings_configuration_success_ref01_ent.load(assistant_settings_configuration_success_ref01_match_dt0)).data()
    assert(assistant_settings_configuration_success_ref01_data_dt0.id === assistant_settings_configuration_success_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/assistant_settings_configuration_success/AssistantSettingsConfigurationSuccessTestData.json')

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
    ['assistant_settings_configuration_success01','assistant_settings_configuration_success02','assistant_settings_configuration_success03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AI4CALL_TEST_ASSISTANT_SETTINGS_CONFIGURATION_SUCCESS_ENTID': idmap,
    'AI4CALL_TEST_LIVE': 'FALSE',
    'AI4CALL_TEST_EXPLAIN': 'FALSE',
    'AI4CALL_APIKEY': '',
  })

  idmap = env['AI4CALL_TEST_ASSISTANT_SETTINGS_CONFIGURATION_SUCCESS_ENTID']

  const live = 'TRUE' === env.AI4CALL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AI4CALL_TEST_ASSISTANT_SETTINGS_CONFIGURATION_SUCCESS_ENTID']
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
  
