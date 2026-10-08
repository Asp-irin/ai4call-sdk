

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


describe('AssistantPrecallValidationRuntimeSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
  afterEach(liveDelay('AI4CALL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Ai4callSDK.test()
    const ent = testsdk.AssistantPrecallValidationRuntimeSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'assistant_precall_validation_runtime_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"authPassword":{"a":true,"h":"Auth Password","n":"authPassword","r":false,"sh":"Basic auth password (null to remove it)","t":"`$STRING`","key$":"authPassword","index$":0},"authToken":{"a":true,"h":"Auth Token","n":"authToken","r":false,"sh":"Bearer token or API key (null to remove it)","t":"`$STRING`","key$":"authToken","index$":1},"authType":{"a":true,"h":"Auth Type","n":"authType","r":false,"t":"`$STRING`","key$":"authType","index$":2},"authUsername":{"a":true,"h":"Auth Username","n":"authUsername","r":false,"sh":"Value supplied for `authUsername` in the `AssistantPrecallValidationRuntimeUpdateRequest` request.","t":"`$STRING`","key$":"authUsername","index$":3},"configuration":{"a":true,"h":"Configuration","n":"configuration","r":true,"sh":"null if no configuration is yet present","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"configuration","index$":4},"headersJson":{"a":true,"h":"Headers Json","n":"headersJson","r":false,"sh":"Value supplied for `headersJson` in the `AssistantPrecallValidationRuntimeUpdateRequest` request.","t":"`$OBJECT`","key$":"headersJson","index$":5},"isActive":{"a":true,"h":"Is Active","n":"isActive","r":false,"sh":"Value supplied for `isActive` in the `AssistantPrecallValidationRuntimeUpdateRequest` request.","t":"`$BOOLEAN`","key$":"isActive","index$":6},"method":{"a":true,"h":"Method","n":"method","r":false,"t":"`$STRING`","key$":"method","index$":7},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Value supplied for `name` in the `AssistantPrecallValidationRuntimeUpdateRequest` request.","t":"`$STRING`","key$":"name","index$":8},"numberLocation":{"a":true,"h":"Number Location","n":"numberLocation","r":false,"sh":"Where to insert the calling number in the HTTP request: - `query` — added as a query string (e.g.","t":"`$STRING`","key$":"numberLocation","index$":9},"numberParamName":{"a":true,"h":"Number Param Name","n":"numberParamName","r":false,"sh":"Value supplied for `numberParamName` in the `AssistantPrecallValidationRuntimeUpdateRequest` request.","t":"`$STRING`","key$":"numberParamName","index$":10},"timeoutMs":{"a":true,"h":"Timeout Ms","n":"timeoutMs","r":false,"sh":"Value supplied for `timeoutMs` in the `AssistantPrecallValidationRuntimeUpdateRequest` request.","t":"`$INTEGER`","key$":"timeoutMs","index$":11},"url":{"a":true,"fo":"uri","h":"Url","n":"url","r":false,"sh":"Value supplied for `url` in the `AssistantPrecallValidationRuntimeUpdateRequest` request.","t":"`$STRING`","key$":"url","index$":12}},"name":"assistant_precall_validation_runtime_success","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/assistants/{assistantId}/runtime/precall/number-validation","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"205","k":"param","n":"assistant_id","or":"assistantId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v1/assistants/{assistantId}/runtime/precall/number-validation","q":{"exist":["assistant_id"]},"r":{"param":{"assistantId":"assistant_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"assistants"},{"var":"assistant_id"},{"lit":"runtime"},{"lit":"precall"},{"lit":"number-validation"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /api/v1/assistants/{assistantId}/runtime/precall/number-validation","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"205","k":"param","n":"assistant_id","or":"assistantId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/api/v1/assistants/{assistantId}/runtime/precall/number-validation","q":{"exist":["assistant_id"]},"r":{"param":{"assistantId":"assistant_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"assistants"},{"var":"assistant_id"},{"lit":"runtime"},{"lit":"precall"},{"lit":"number-validation"}],"t":{"req":{"authPassword":"`reqdata.auth_password`","authToken":"`reqdata.auth_token`","authType":"`reqdata.auth_type`","authUsername":"`reqdata.auth_username`","headersJson":"`reqdata.headers_json`","isActive":"`reqdata.is_active`","method":"`reqdata.method`","name":"`reqdata.name`","numberLocation":"`reqdata.number_location`","numberParamName":"`reqdata.number_param_name`","timeoutMs":"`reqdata.timeout_m`","url":"`reqdata.url`"},"res":"`body.data`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.assistant"]]},"key$":"assistant_precall_validation_runtime_success","name__orig":"assistant_precall_validation_runtime_success","Name":"AssistantPrecallValidationRuntimeSuccess","name_":"assistant_precall_validation_runtime_success","name-":"assistant-precall-validation-runtime-success","NAME":"ASSISTANT_PRECALL_VALIDATION_RUNTIME_SUCCESS","index$":34}, {"active":true,"entity":"assistant_precall_validation_runtime_success","key$":"BasicAssistantPrecallValidationRuntimeSuccessFlow","kind":"basic","name":"BasicAssistantPrecallValidationRuntimeSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"assistant_precall_validation_runtime_success_ref01","srcdatavar":"assistant_precall_validation_runtime_success_ref01_data","suffix":"_up0","textfield":"authPassword"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-assistant_precall_validation_runtime_success_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"assistant_precall_validation_runtime_success_ref01","srcdatavar":"assistant_precall_validation_runtime_success_ref01_data","suffix":"_dt0"},"m":{"id":"assistant_precall_validation_runtime_success01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-assistant_precall_validation_runtime_success_ref01"}}],"index$":1}]}, 'AssistantPrecallValidationRuntimeSuccess', {"GET /api/v1/assistants/{assistantId}/runtime/precall/number-validation":{"protocol":"http","parameters":[{"name":"assistantId","in":"path","required":true,"description":"Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.","schema":{"type":"string","minLength":1,"maxLength":128,"pattern":"^[A-Za-z0-9_-]+$"},"example":"205","x-ref":"#/components/parameters/AssistantIdentifier","index$":0}]},"PATCH /api/v1/assistants/{assistantId}/runtime/precall/number-validation":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"description":"Value supplied for `name` in the `AssistantPrecallValidationRuntimeUpdateRequest` request.","type":"string","minLength":1,"key$":"name"},"method":{"type":"string","enum":["GET","POST","PUT","PATCH","DELETE"],"x-ref":"#/components/schemas/PrecallValidationMethod","key$":"method"},"url":{"description":"Value supplied for `url` in the `AssistantPrecallValidationRuntimeUpdateRequest` request.","type":"string","format":"uri","key$":"url"},"numberLocation":{"type":"string","enum":["body","query","params"],"description":"Where to insert the calling number in the HTTP request:\n- `query` — added as a query string (e.g. `?number=0391234567`)\n- `body` — inserted in the JSON body (e.g. `{ \"number\": \"0391234567\" }`)\n- `params` — replaces a segment of the URL (e.g. `/validate/0391234567`)","x-ref":"#/components/schemas/PrecallValidationNumberLocation","key$":"numberLocation"},"numberParamName":{"description":"Value supplied for `numberParamName` in the `AssistantPrecallValidationRuntimeUpdateRequest` request.","type":"string","minLength":1,"key$":"numberParamName"},"headersJson":{"description":"Value supplied for `headersJson` in the `AssistantPrecallValidationRuntimeUpdateRequest` request.","type":"object","nullable":true,"additionalProperties":{"type":"string"},"key$":"headersJson"},"authType":{"type":"string","enum":["none","bearer","api_key","basic"],"x-ref":"#/components/schemas/PrecallValidationAuthType","key$":"authType"},"authToken":{"type":"string","nullable":true,"description":"Bearer token or API key (null to remove it)","key$":"authToken"},"authUsername":{"description":"Value supplied for `authUsername` in the `AssistantPrecallValidationRuntimeUpdateRequest` request.","type":"string","nullable":true,"key$":"authUsername"},"authPassword":{"type":"string","nullable":true,"description":"Basic auth password (null to remove it)","key$":"authPassword"},"timeoutMs":{"description":"Value supplied for `timeoutMs` in the `AssistantPrecallValidationRuntimeUpdateRequest` request.","type":"integer","minimum":500,"maximum":30000,"key$":"timeoutMs"},"isActive":{"description":"Value supplied for `isActive` in the `AssistantPrecallValidationRuntimeUpdateRequest` request.","type":"boolean","key$":"isActive"}},"additionalProperties":false,"x-ref":"#/components/schemas/AssistantPrecallValidationRuntimeUpdateRequest","index$":1},"examples":{"createComplete":{"summary":"First complete configuration (POST → body, Bearer auth)","value":{"name":"Verifica CRM","method":"POST","url":"https://api.example.com/validate-caller","numberLocation":"body","numberParamName":"caller_id","headersJson":{"X-Api-Version":"2","Accept-Language":"it"},"authType":"bearer","authToken":"eyJhbGciOiJIUzI1NiJ9...","timeoutMs":5000,"isActive":true}},"queryGet":{"summary":"Webhook GET with number in query string, no auth","value":{"name":"Whitelist Numeri","method":"GET","url":"https://api.example.com/whitelist","numberLocation":"query","numberParamName":"number","authType":"none","timeoutMs":3000,"isActive":true}},"basicAuth":{"summary":"Webhooks with Basic authentication","value":{"method":"POST","url":"https://secure.example.com/check","numberLocation":"body","numberParamName":"phone","authType":"basic","authUsername":"api-user","authPassword":"s3cr3t","timeoutMs":8000}},"deleteConfig":{"summary":"Delete configuration (isActive false = complete reset)","value":{"isActive":false}},"updateUrlOnly":{"summary":"Update only the webhook URL","value":{"url":"https://nuovo-crm.example.com/validate"}},"removeAuth":{"summary":"Removes the authentication token","value":{"authType":"none","authToken":null}}}}}},"parameters":[{"name":"assistantId","in":"path","required":true,"description":"Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.","schema":{"type":"string","minLength":1,"maxLength":128,"pattern":"^[A-Za-z0-9_-]+$"},"example":"205","x-ref":"#/components/parameters/AssistantIdentifier","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let assistant_precall_validation_runtime_success_ref01_data = Object.values(setup.data.existing.assistant_precall_validation_runtime_success)[0] as any

    // UPDATE
    const assistant_precall_validation_runtime_success_ref01_ent = client.AssistantPrecallValidationRuntimeSuccess()
    const assistant_precall_validation_runtime_success_ref01_data_up0: any = {}

    const assistant_precall_validation_runtime_success_ref01_markdef_up0 = { name: 'authPassword', value: 'Mark01-assistant_precall_validation_runtime_success_ref01_' + setup.now }
    ;(assistant_precall_validation_runtime_success_ref01_data_up0 as any)[assistant_precall_validation_runtime_success_ref01_markdef_up0.name] = assistant_precall_validation_runtime_success_ref01_markdef_up0.value

    const assistant_precall_validation_runtime_success_ref01_resdata_up0 = (await assistant_precall_validation_runtime_success_ref01_ent.update(assistant_precall_validation_runtime_success_ref01_data_up0)).data()
    assert(null != assistant_precall_validation_runtime_success_ref01_resdata_up0)

    assert((assistant_precall_validation_runtime_success_ref01_resdata_up0 as any)[assistant_precall_validation_runtime_success_ref01_markdef_up0.name] === assistant_precall_validation_runtime_success_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/assistant_precall_validation_runtime_success/AssistantPrecallValidationRuntimeSuccessTestData.json')

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
    ['assistant_precall_validation_runtime_success01','assistant_precall_validation_runtime_success02','assistant_precall_validation_runtime_success03','assistant01','assistant02','assistant03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AI4CALL_TEST_ASSISTANT_PRECALL_VALIDATION_RUNTIME_SUCCESS_ENTID': idmap,
    'AI4CALL_TEST_LIVE': 'FALSE',
    'AI4CALL_TEST_EXPLAIN': 'FALSE',
    'AI4CALL_APIKEY': '',
  })

  idmap = env['AI4CALL_TEST_ASSISTANT_PRECALL_VALIDATION_RUNTIME_SUCCESS_ENTID']

  const live = 'TRUE' === env.AI4CALL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AI4CALL_TEST_ASSISTANT_PRECALL_VALIDATION_RUNTIME_SUCCESS_ENTID']
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
  
