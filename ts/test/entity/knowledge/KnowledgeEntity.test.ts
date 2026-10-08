

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


describe('KnowledgeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
  afterEach(liveDelay('AI4CALL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Ai4callSDK.test()
    const ent = testsdk.Knowledge()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'knowledge.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"data":{"a":true,"h":"Data","n":"data","r":true,"t":"`$OBJECT`","key$":"data","index$":0},"defaultPostAction":{"a":true,"h":"Default Post Action","n":"defaultPostAction","r":false,"sh":"Defaults to `ask_if_needs_more` when omitted","t":"`$STRING`","key$":"defaultPostAction","index$":1},"defaultResponse":{"a":true,"h":"Default Response","n":"defaultResponse","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"Default answer used when a trigger has no specific response.","t":"`$STRING`","key$":"defaultResponse","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":3},"knowledge":{"a":true,"h":"Knowledge","n":"knowledge","r":true,"sh":"A knowledge item: a set of recognised requests with their answers, folded into the prompt of every assistant it is associated with.","t":"`$OBJECT`","key$":"knowledge","index$":4},"message":{"a":true,"h":"Message","n":"message","r":true,"t":"`$STRING`","key$":"message","index$":5},"meta":{"a":true,"h":"Meta","n":"meta","r":false,"t":"`$OBJECT`","key$":"meta","index$":6},"requestId":{"a":true,"h":"Request Id","n":"requestId","r":true,"t":"`$STRING`","key$":"requestId","index$":7},"rules":{"a":true,"h":"Rules","n":"rules","r":false,"sh":"Optional constraints applied to the whole knowledge item.","t":"`$STRING`","key$":"rules","index$":8},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":9},"title":{"a":true,"h":"Title","n":"title","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"Human-readable title of the new knowledge item.","t":"`$STRING`","key$":"title","index$":10},"triggers":{"a":true,"h":"Triggers","n":"triggers","r":false,"sh":"Initial trigger list for the knowledge item.","t":"`$ARRAY`","key$":"triggers","index$":11}},"id":{"field":"id","name":"id"},"name":"knowledge","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v1/catalog/knowledge","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/v1/catalog/knowledge","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"catalog"},{"lit":"knowledge"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"POST /api/v1/knowledge","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/v1/knowledge","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"knowledge"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/catalog/knowledge","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/v1/catalog/knowledge","q":{"exist":["cursor","limit"]},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"catalog"},{"lit":"knowledge"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v1/knowledge","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/v1/knowledge","q":{"exist":["cursor","limit"]},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"knowledge"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /api/v1/catalog/knowledge/{knowledgeId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":7,"k":"param","n":"id","or":"knowledgeId","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/v1/catalog/knowledge/{knowledgeId}","q":{"exist":["id"]},"r":{"param":{"knowledgeId":"id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"catalog"},{"lit":"knowledge"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":2},{"a":true,"co":{"id":"GET /api/v1/knowledge/{knowledgeId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":7,"k":"param","n":"id","or":"knowledgeId","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/v1/knowledge/{knowledgeId}","q":{"exist":["id"]},"r":{"param":{"knowledgeId":"id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"knowledge"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/v1/catalog/knowledge/{knowledgeId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":7,"k":"param","n":"id","or":"knowledgeId","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"DELETE","o":"/api/v1/catalog/knowledge/{knowledgeId}","q":{"exist":["id"]},"r":{"param":{"knowledgeId":"id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"catalog"},{"lit":"knowledge"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"DELETE /api/v1/knowledge/{knowledgeId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":7,"k":"param","n":"id","or":"knowledgeId","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"DELETE","o":"/api/v1/knowledge/{knowledgeId}","q":{"exist":["id"]},"r":{"param":{"knowledgeId":"id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"knowledge"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":1}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /api/v1/catalog/knowledge/{knowledgeId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":7,"k":"param","n":"id","or":"knowledgeId","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PATCH","o":"/api/v1/catalog/knowledge/{knowledgeId}","q":{"exist":["id"]},"r":{"param":{"knowledgeId":"id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"catalog"},{"lit":"knowledge"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"PATCH /api/v1/knowledge/{knowledgeId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":7,"k":"param","n":"id","or":"knowledgeId","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PATCH","o":"/api/v1/knowledge/{knowledgeId}","q":{"exist":["id"]},"r":{"param":{"knowledgeId":"id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"knowledge"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"knowledge","name__orig":"knowledge","Name":"Knowledge","name_":"knowledge","name-":"knowledge","NAME":"KNOWLEDGE","index$":49}, {"active":true,"entity":"knowledge","key$":"BasicKnowledgeFlow","kind":"basic","name":"BasicKnowledgeFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"knowledge_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"knowledge_ref01","srcdatavar":"knowledge_ref01_data","suffix":"_up0","textfield":"defaultPostAction"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-knowledge_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"knowledge_ref01","srcdatavar":"knowledge_ref01_data","suffix":"_dt0"},"m":{"id":"knowledge01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-knowledge_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"knowledge_ref01","suffix":"_rm0"},"m":{"id":"knowledge01"},"o":"remove","s":[],"v":[],"index$":3}]}, 'Knowledge', {"POST /api/v1/catalog/knowledge":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","description":"Creation of a knowledge item.\n\n`triggers` may be omitted or empty: the item then always answers with `defaultResponse`.","properties":{"title":{"description":"Human-readable title of the new knowledge item.","type":"string","maxLength":255,"key$":"title"},"defaultResponse":{"description":"Default answer used when a trigger has no specific response.","type":"string","minLength":1,"key$":"defaultResponse"},"rules":{"description":"Optional constraints applied to the whole knowledge item.","type":"string","nullable":true,"key$":"rules"},"defaultPostAction":{"type":"string","maxLength":50,"description":"Defaults to `ask_if_needs_more` when omitted","key$":"defaultPostAction"},"triggers":{"description":"Initial trigger list for the knowledge item.","type":"array","items":{"description":"Input definition of a trigger used when creating or updating a knowledge item.","type":"object","properties":{"query":{"description":"Request text or intent recognised by the trigger.","type":"string","minLength":1},"aiInstructions":{"description":"Optional instructions injected before the trigger response.","type":"string","nullable":true},"specificResponse":{"description":"Optional response specific to this trigger.","type":"string","nullable":true},"postAction":{"description":"Optional action to perform after the trigger response.","type":"string","nullable":true},"sortOrder":{"type":"integer","minimum":0,"description":"Optional; when omitted, the order of the array is used"}},"required":["query"],"x-ref":"#/components/schemas/KnowledgeTriggerInput"},"key$":"triggers"}},"required":["title","defaultResponse"],"x-ref":"#/components/schemas/KnowledgeCreateRequest","index$":1},"examples":{"withTriggers":{"summary":"Item with two triggers","value":{"title":"Orari e sedi","defaultResponse":"Siamo aperti dal lunedì al venerdì, dalle 9 alle 18.","defaultPostAction":"ask_if_needs_more","triggers":[{"query":"Quali sono gli orari di apertura?"},{"query":"Siete aperti il sabato?","specificResponse":"Il sabato siamo chiusi."}]}},"answerOnly":{"summary":"Item without triggers, always the same answer","value":{"title":"Nota legale","defaultResponse":"La chiamata può essere registrata per finalità di qualità."}}}}}},"parameters":[]},"POST /api/v1/knowledge":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","description":"Creation of a knowledge item.\n\n`triggers` may be omitted or empty: the item then always answers with `defaultResponse`.","properties":{"title":{"description":"Human-readable title of the new knowledge item.","type":"string","maxLength":255,"key$":"title"},"defaultResponse":{"description":"Default answer used when a trigger has no specific response.","type":"string","minLength":1,"key$":"defaultResponse"},"rules":{"description":"Optional constraints applied to the whole knowledge item.","type":"string","nullable":true,"key$":"rules"},"defaultPostAction":{"type":"string","maxLength":50,"description":"Defaults to `ask_if_needs_more` when omitted","key$":"defaultPostAction"},"triggers":{"description":"Initial trigger list for the knowledge item.","type":"array","items":{"description":"Input definition of a trigger used when creating or updating a knowledge item.","type":"object","properties":{"query":{"description":"Request text or intent recognised by the trigger.","type":"string","minLength":1},"aiInstructions":{"description":"Optional instructions injected before the trigger response.","type":"string","nullable":true},"specificResponse":{"description":"Optional response specific to this trigger.","type":"string","nullable":true},"postAction":{"description":"Optional action to perform after the trigger response.","type":"string","nullable":true},"sortOrder":{"type":"integer","minimum":0,"description":"Optional; when omitted, the order of the array is used"}},"required":["query"],"x-ref":"#/components/schemas/KnowledgeTriggerInput"},"key$":"triggers"}},"required":["title","defaultResponse"],"x-ref":"#/components/schemas/KnowledgeCreateRequest","index$":1},"examples":{"withTriggers":{"summary":"Item with two triggers","value":{"title":"Orari e sedi","defaultResponse":"Siamo aperti dal lunedì al venerdì, dalle 9 alle 18.","defaultPostAction":"ask_if_needs_more","triggers":[{"query":"Quali sono gli orari di apertura?"},{"query":"Siete aperti il sabato?","specificResponse":"Il sabato siamo chiusi."}]}},"answerOnly":{"summary":"Item without triggers, always the same answer","value":{"title":"Nota legale","defaultResponse":"La chiamata può essere registrata per finalità di qualità."}}}}}},"parameters":[]},"GET /api/v1/catalog/knowledge":{"protocol":"http","parameters":[{"name":"limit","in":"query","required":false,"description":"Maximum number of items returned in one cursor-paginated page. Omit both limit and cursor to preserve the legacy unpaginated response.","schema":{"type":"integer","minimum":1,"maximum":100},"index$":0},{"name":"cursor","in":"query","required":false,"description":"Opaque cursor returned in meta.nextCursor by the previous page.","schema":{"type":"string"},"index$":1}]},"GET /api/v1/knowledge":{"protocol":"http","parameters":[{"name":"limit","in":"query","required":false,"description":"Maximum number of items returned in one cursor-paginated page. Omit both limit and cursor to preserve the legacy unpaginated response.","schema":{"type":"integer","minimum":1,"maximum":100},"index$":0},{"name":"cursor","in":"query","required":false,"description":"Opaque cursor returned in meta.nextCursor by the previous page.","schema":{"type":"string"},"index$":1}]},"GET /api/v1/catalog/knowledge/{knowledgeId}":{"protocol":"http","parameters":[{"in":"path","name":"knowledgeId","required":true,"schema":{"type":"integer","minimum":1},"description":"Id of the knowledge item","example":7,"index$":0}]},"GET /api/v1/knowledge/{knowledgeId}":{"protocol":"http","parameters":[{"in":"path","name":"knowledgeId","required":true,"schema":{"type":"integer","minimum":1},"description":"Id of the knowledge item","example":7,"index$":0}]},"DELETE /api/v1/catalog/knowledge/{knowledgeId}":{"protocol":"http","parameters":[{"in":"path","name":"knowledgeId","required":true,"schema":{"type":"integer","minimum":1},"description":"Id of the knowledge item","example":7,"index$":0}]},"DELETE /api/v1/knowledge/{knowledgeId}":{"protocol":"http","parameters":[{"in":"path","name":"knowledgeId","required":true,"schema":{"type":"integer","minimum":1},"description":"Id of the knowledge item","example":7,"index$":0}]},"PATCH /api/v1/catalog/knowledge/{knowledgeId}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","description":"PATCH merge of a knowledge item.\n\nOperational rules:\n- at least one field must be present\n- omitted fields keep their current value\n- `triggers`, when present, **replaces the whole list**: send it complete, or omit it to leave\n  the triggers untouched. Sending `[]` removes them all\n- items with `isShared: true` cannot be modified","properties":{"title":{"description":"New title for the knowledge item.","type":"string","maxLength":255,"key$":"title"},"defaultResponse":{"description":"New default response for the knowledge item.","type":"string","minLength":1,"key$":"defaultResponse"},"rules":{"description":"New optional constraints for the knowledge item.","type":"string","nullable":true,"key$":"rules"},"defaultPostAction":{"description":"New default post-action for triggers without their own value.","type":"string","maxLength":50,"key$":"defaultPostAction"},"triggers":{"description":"Complete replacement trigger list when this field is supplied.","type":"array","items":{"description":"Input definition of a trigger used when creating or updating a knowledge item.","type":"object","properties":{"query":{"description":"Request text or intent recognised by the trigger.","type":"string","minLength":1},"aiInstructions":{"description":"Optional instructions injected before the trigger response.","type":"string","nullable":true},"specificResponse":{"description":"Optional response specific to this trigger.","type":"string","nullable":true},"postAction":{"description":"Optional action to perform after the trigger response.","type":"string","nullable":true},"sortOrder":{"type":"integer","minimum":0,"description":"Optional; when omitted, the order of the array is used"}},"required":["query"],"x-ref":"#/components/schemas/KnowledgeTriggerInput"},"key$":"triggers"}},"minProperties":1,"x-ref":"#/components/schemas/KnowledgeUpdateRequest","index$":1},"examples":{"answerOnly":{"summary":"Change the default answer only","value":{"defaultResponse":"Siamo aperti dal lunedì al venerdì, dalle 9 alle 19."}},"replaceTriggers":{"summary":"Replace the whole trigger list","value":{"triggers":[{"query":"Quali sono gli orari?","aiInstructions":"Rispondi in modo breve, senza elencare le sedi."},{"query":"Siete aperti nel weekend?","specificResponse":"Nel weekend siamo chiusi."}]}},"clearTriggers":{"summary":"Remove every trigger","value":{"triggers":[]}}}}}},"parameters":[{"in":"path","name":"knowledgeId","required":true,"schema":{"type":"integer","minimum":1},"description":"Id of the knowledge item","example":7,"index$":0}]},"PATCH /api/v1/knowledge/{knowledgeId}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","description":"PATCH merge of a knowledge item.\n\nOperational rules:\n- at least one field must be present\n- omitted fields keep their current value\n- `triggers`, when present, **replaces the whole list**: send it complete, or omit it to leave\n  the triggers untouched. Sending `[]` removes them all\n- items with `isShared: true` cannot be modified","properties":{"title":{"description":"New title for the knowledge item.","type":"string","maxLength":255,"key$":"title"},"defaultResponse":{"description":"New default response for the knowledge item.","type":"string","minLength":1,"key$":"defaultResponse"},"rules":{"description":"New optional constraints for the knowledge item.","type":"string","nullable":true,"key$":"rules"},"defaultPostAction":{"description":"New default post-action for triggers without their own value.","type":"string","maxLength":50,"key$":"defaultPostAction"},"triggers":{"description":"Complete replacement trigger list when this field is supplied.","type":"array","items":{"description":"Input definition of a trigger used when creating or updating a knowledge item.","type":"object","properties":{"query":{"description":"Request text or intent recognised by the trigger.","type":"string","minLength":1},"aiInstructions":{"description":"Optional instructions injected before the trigger response.","type":"string","nullable":true},"specificResponse":{"description":"Optional response specific to this trigger.","type":"string","nullable":true},"postAction":{"description":"Optional action to perform after the trigger response.","type":"string","nullable":true},"sortOrder":{"type":"integer","minimum":0,"description":"Optional; when omitted, the order of the array is used"}},"required":["query"],"x-ref":"#/components/schemas/KnowledgeTriggerInput"},"key$":"triggers"}},"minProperties":1,"x-ref":"#/components/schemas/KnowledgeUpdateRequest","index$":1},"examples":{"answerOnly":{"summary":"Change the default answer only","value":{"defaultResponse":"Siamo aperti dal lunedì al venerdì, dalle 9 alle 19."}},"replaceTriggers":{"summary":"Replace the whole trigger list","value":{"triggers":[{"query":"Quali sono gli orari?","aiInstructions":"Rispondi in modo breve, senza elencare le sedi."},{"query":"Siete aperti nel weekend?","specificResponse":"Nel weekend siamo chiusi."}]}},"clearTriggers":{"summary":"Remove every trigger","value":{"triggers":[]}}}}}},"parameters":[{"in":"path","name":"knowledgeId","required":true,"schema":{"type":"integer","minimum":1},"description":"Id of the knowledge item","example":7,"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const knowledge_ref01_ent = client.Knowledge()
    let knowledge_ref01_data = setup.data.new.knowledge['knowledge_ref01']

    knowledge_ref01_data = (await knowledge_ref01_ent.create(knowledge_ref01_data)).data()
    assert(null != knowledge_ref01_data.id)


    // UPDATE
    const knowledge_ref01_data_up0: any = {}
    knowledge_ref01_data_up0.id = knowledge_ref01_data.id

    const knowledge_ref01_markdef_up0 = { name: 'defaultPostAction', value: 'Mark01-knowledge_ref01_' + setup.now }
    ;(knowledge_ref01_data_up0 as any)[knowledge_ref01_markdef_up0.name] = knowledge_ref01_markdef_up0.value

    const knowledge_ref01_resdata_up0 = (await knowledge_ref01_ent.update(knowledge_ref01_data_up0)).data()
    assert(knowledge_ref01_resdata_up0.id === knowledge_ref01_data_up0.id)

    assert((knowledge_ref01_resdata_up0 as any)[knowledge_ref01_markdef_up0.name] === knowledge_ref01_markdef_up0.value)


    // LOAD
    const knowledge_ref01_match_dt0: any = {}
    knowledge_ref01_match_dt0.id = knowledge_ref01_data.id
    const knowledge_ref01_data_dt0 = (await knowledge_ref01_ent.load(knowledge_ref01_match_dt0)).data()
    assert(knowledge_ref01_data_dt0.id === knowledge_ref01_data.id)


    // REMOVE
    const knowledge_ref01_match_rm0: any = { id: knowledge_ref01_data.id }
    await knowledge_ref01_ent.remove(knowledge_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/knowledge/KnowledgeTestData.json')

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
    ['knowledge01','knowledge02','knowledge03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AI4CALL_TEST_KNOWLEDGE_ENTID': idmap,
    'AI4CALL_TEST_LIVE': 'FALSE',
    'AI4CALL_TEST_EXPLAIN': 'FALSE',
    'AI4CALL_APIKEY': '',
  })

  idmap = env['AI4CALL_TEST_KNOWLEDGE_ENTID']

  const live = 'TRUE' === env.AI4CALL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AI4CALL_TEST_KNOWLEDGE_ENTID']
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
  
