

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


describe('AssistantHangupSchemaRuntimeSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
  afterEach(liveDelay('AI4CALL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Ai4callSDK.test()
    const ent = testsdk.AssistantHangupSchemaRuntimeSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'assistant_hangup_schema_runtime_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"configuration":{"a":true,"h":"Configuration","n":"configuration","r":true,"t":"`$OBJECT`","key$":"configuration","index$":0},"hangupUrl":{"a":true,"h":"Hangup Url","n":"hangupUrl","r":false,"sh":"Hangup webhook URL (null to remove)","t":"`$STRING`","key$":"hangupUrl","index$":1},"schema":{"a":true,"h":"Schema","n":"schema","r":false,"sh":"Defining body fields (overrides the current schema)","t":"`$ARRAY`","key$":"schema","index$":2}},"name":"assistant_hangup_schema_runtime_success","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/assistants/{assistantId}/runtime/hangup/schema","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"205","k":"param","n":"assistant_id","or":"assistantId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v1/assistants/{assistantId}/runtime/hangup/schema","q":{"exist":["assistant_id"]},"r":{"param":{"assistantId":"assistant_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"assistants"},{"var":"assistant_id"},{"lit":"runtime"},{"lit":"hangup"},{"lit":"schema"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /api/v1/assistants/{assistantId}/runtime/hangup/schema","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"205","k":"param","n":"assistant_id","or":"assistantId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/api/v1/assistants/{assistantId}/runtime/hangup/schema","q":{"exist":["assistant_id"]},"r":{"param":{"assistantId":"assistant_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"assistants"},{"var":"assistant_id"},{"lit":"runtime"},{"lit":"hangup"},{"lit":"schema"}],"t":{"req":{"hangupUrl":"`reqdata.hangup_url`","schema":"`reqdata.schema`"},"res":"`body.data`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.assistant"]]},"key$":"assistant_hangup_schema_runtime_success","name__orig":"assistant_hangup_schema_runtime_success","Name":"AssistantHangupSchemaRuntimeSuccess","name_":"assistant_hangup_schema_runtime_success","name-":"assistant-hangup-schema-runtime-success","NAME":"ASSISTANT_HANGUP_SCHEMA_RUNTIME_SUCCESS","index$":27}, {"active":true,"entity":"assistant_hangup_schema_runtime_success","key$":"BasicAssistantHangupSchemaRuntimeSuccessFlow","kind":"basic","name":"BasicAssistantHangupSchemaRuntimeSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"assistant_hangup_schema_runtime_success_ref01","srcdatavar":"assistant_hangup_schema_runtime_success_ref01_data","suffix":"_up0","textfield":"hangupUrl"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-assistant_hangup_schema_runtime_success_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"assistant_hangup_schema_runtime_success_ref01","srcdatavar":"assistant_hangup_schema_runtime_success_ref01_data","suffix":"_dt0"},"m":{"id":"assistant_hangup_schema_runtime_success01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-assistant_hangup_schema_runtime_success_ref01"}}],"index$":1}]}, 'AssistantHangupSchemaRuntimeSuccess', {"GET /api/v1/assistants/{assistantId}/runtime/hangup/schema":{"protocol":"http","parameters":[{"name":"assistantId","in":"path","required":true,"description":"Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.","schema":{"type":"string","minLength":1,"maxLength":128,"pattern":"^[A-Za-z0-9_-]+$"},"example":"205","x-ref":"#/components/parameters/AssistantIdentifier","index$":0}]},"PATCH /api/v1/assistants/{assistantId}/runtime/hangup/schema":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"hangupUrl":{"type":"string","nullable":true,"description":"Hangup webhook URL (null to remove)","key$":"hangupUrl"},"schema":{"type":"array","description":"Defining body fields (overrides the current schema)","items":{"type":"object","required":["name","type"],"properties":{"name":{"minLength":1,"type":"string"},"type":{"enum":[],"type":"string","x-ref":"#/components/schemas/HangupSchemaPropertyType"},"description":{"type":"string"},"required":{"type":"boolean"},"enumValues":{"items":{},"type":"array"},"children":{"items":{},"type":"array"}},"x-ref":"#/components/schemas/HangupSchemaProperty"},"key$":"schema"}},"additionalProperties":false,"x-ref":"#/components/schemas/AssistantHangupSchemaRuntimeUpdateRequest","index$":1},"examples":{"setUrlAndSchema":{"summary":"Set URL and full scheme","value":{"hangupUrl":"https://webhook.example.com/hangup","schema":[{"name":"motivo","type":"string","description":"Reason for hangup","required":true},{"name":"esito","type":"enum","description":"Result of the call","required":true,"enumValues":["positivo","negativo","richiamata"]},{"name":"dati_cliente","type":"object","description":"Data collected about the customer","children":[{},{}]}]}},"updateUrlOnly":{"summary":"Update only the webhook URL","value":{"hangupUrl":"https://nuovo-webhook.example.com/hangup"}},"clearSchema":{"summary":"Clear schema (no fields sent to hangup)","value":{"schema":[]}},"removeUrl":{"summary":"Removes the URL webhook","value":{"hangupUrl":null}}}}}},"parameters":[{"name":"assistantId","in":"path","required":true,"description":"Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.","schema":{"type":"string","minLength":1,"maxLength":128,"pattern":"^[A-Za-z0-9_-]+$"},"example":"205","x-ref":"#/components/parameters/AssistantIdentifier","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let assistant_hangup_schema_runtime_success_ref01_data = Object.values(setup.data.existing.assistant_hangup_schema_runtime_success)[0] as any

    // UPDATE
    const assistant_hangup_schema_runtime_success_ref01_ent = client.AssistantHangupSchemaRuntimeSuccess()
    const assistant_hangup_schema_runtime_success_ref01_data_up0: any = {}

    const assistant_hangup_schema_runtime_success_ref01_markdef_up0 = { name: 'hangupUrl', value: 'Mark01-assistant_hangup_schema_runtime_success_ref01_' + setup.now }
    ;(assistant_hangup_schema_runtime_success_ref01_data_up0 as any)[assistant_hangup_schema_runtime_success_ref01_markdef_up0.name] = assistant_hangup_schema_runtime_success_ref01_markdef_up0.value

    const assistant_hangup_schema_runtime_success_ref01_resdata_up0 = (await assistant_hangup_schema_runtime_success_ref01_ent.update(assistant_hangup_schema_runtime_success_ref01_data_up0)).data()
    assert(null != assistant_hangup_schema_runtime_success_ref01_resdata_up0)

    assert((assistant_hangup_schema_runtime_success_ref01_resdata_up0 as any)[assistant_hangup_schema_runtime_success_ref01_markdef_up0.name] === assistant_hangup_schema_runtime_success_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/assistant_hangup_schema_runtime_success/AssistantHangupSchemaRuntimeSuccessTestData.json')

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
    ['assistant_hangup_schema_runtime_success01','assistant_hangup_schema_runtime_success02','assistant_hangup_schema_runtime_success03','assistant01','assistant02','assistant03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AI4CALL_TEST_ASSISTANT_HANGUP_SCHEMA_RUNTIME_SUCCESS_ENTID': idmap,
    'AI4CALL_TEST_LIVE': 'FALSE',
    'AI4CALL_TEST_EXPLAIN': 'FALSE',
    'AI4CALL_APIKEY': '',
  })

  idmap = env['AI4CALL_TEST_ASSISTANT_HANGUP_SCHEMA_RUNTIME_SUCCESS_ENTID']

  const live = 'TRUE' === env.AI4CALL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AI4CALL_TEST_ASSISTANT_HANGUP_SCHEMA_RUNTIME_SUCCESS_ENTID']
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
  
