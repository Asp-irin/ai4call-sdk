

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


describe('AssistantKnowledgeSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
  afterEach(liveDelay('AI4CALL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Ai4callSDK.test()
    const ent = testsdk.AssistantKnowledgeSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'assistant_knowledge_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"assistant_knowledge_success","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/assistants/{assistantId}/knowledge","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"205","k":"param","n":"id","or":"assistantId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v1/assistants/{assistantId}/knowledge","q":{"$action":"knowledge","exist":["id"]},"r":{"param":{"assistantId":"id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"assistants"},{"var":"id"},{"lit":"knowledge"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v1/catalog/assistants/{assistantId}/knowledge","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"205","k":"param","n":"id","or":"assistantId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v1/catalog/assistants/{assistantId}/knowledge","q":{"$action":"knowledge","exist":["id"]},"r":{"param":{"assistantId":"id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"catalog"},{"lit":"assistants"},{"var":"id"},{"lit":"knowledge"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/v1/assistants/{assistantId}/knowledge","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"205","k":"param","n":"id","or":"assistantId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/api/v1/assistants/{assistantId}/knowledge","q":{"$action":"knowledge","exist":["id"]},"r":{"param":{"assistantId":"id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"assistants"},{"var":"id"},{"lit":"knowledge"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /api/v1/catalog/assistants/{assistantId}/knowledge","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"205","k":"param","n":"id","or":"assistantId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/api/v1/catalog/assistants/{assistantId}/knowledge","q":{"$action":"knowledge","exist":["id"]},"r":{"param":{"assistantId":"id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"catalog"},{"lit":"assistants"},{"var":"id"},{"lit":"knowledge"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"assistant_knowledge_success","name__orig":"assistant_knowledge_success","Name":"AssistantKnowledgeSuccess","name_":"assistant_knowledge_success","name-":"assistant-knowledge-success","NAME":"ASSISTANT_KNOWLEDGE_SUCCESS","index$":28}, {"active":true,"entity":"assistant_knowledge_success","key$":"BasicAssistantKnowledgeSuccessFlow","kind":"basic","name":"BasicAssistantKnowledgeSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"assistant_knowledge_success_ref01","srcdatavar":"assistant_knowledge_success_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-assistant_knowledge_success_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"assistant_knowledge_success_ref01","srcdatavar":"assistant_knowledge_success_ref01_data","suffix":"_dt0"},"m":{"id":"assistant_knowledge_success01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-assistant_knowledge_success_ref01"}}],"index$":1}]}, 'AssistantKnowledgeSuccess', {"GET /api/v1/assistants/{assistantId}/knowledge":{"protocol":"http","parameters":[{"name":"assistantId","in":"path","required":true,"description":"Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.","schema":{"type":"string","minLength":1,"maxLength":128,"pattern":"^[A-Za-z0-9_-]+$"},"example":"205","x-ref":"#/components/parameters/AssistantIdentifier","index$":0}]},"GET /api/v1/catalog/assistants/{assistantId}/knowledge":{"protocol":"http","parameters":[{"name":"assistantId","in":"path","required":true,"description":"Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.","schema":{"type":"string","minLength":1,"maxLength":128,"pattern":"^[A-Za-z0-9_-]+$"},"example":"205","x-ref":"#/components/parameters/AssistantIdentifier","index$":0}]},"PUT /api/v1/assistants/{assistantId}/knowledge":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","description":"Replaces the assistant's knowledge associations entirely.\n\nSend `associations` when the order matters, `knowledgeIds` when the order of the array is\nenough. The two are mutually exclusive; an empty list detaches everything.\n\nBoth your own items and the shared ones can be associated.","properties":{"associations":{"description":"Value supplied for `associations` in the `AssistantKnowledgeAssociationsRequest` request.","type":"array","items":{"type":"object","properties":{"knowledgeId":{"type":"integer"},"sortOrder":{"type":"integer","minimum":0}},"required":["knowledgeId"]}},"knowledgeIds":{"description":"Value supplied for `knowledgeIds` in the `AssistantKnowledgeAssociationsRequest` request.","type":"array","items":{"type":"integer"}}},"minProperties":1,"x-ref":"#/components/schemas/AssistantKnowledgeAssociationsRequest"},"examples":{"byIds":{"summary":"Associate two items, in the order sent","value":{"knowledgeIds":[7,12]}},"withExplicitOrder":{"summary":"State the order explicitly","value":{"associations":[{"knowledgeId":12,"sortOrder":1},{"knowledgeId":7,"sortOrder":2}]}},"detachAll":{"summary":"Detach every item","value":{"knowledgeIds":[]}}}}}},"parameters":[{"name":"assistantId","in":"path","required":true,"description":"Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.","schema":{"type":"string","minLength":1,"maxLength":128,"pattern":"^[A-Za-z0-9_-]+$"},"example":"205","x-ref":"#/components/parameters/AssistantIdentifier","index$":0}]},"PUT /api/v1/catalog/assistants/{assistantId}/knowledge":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","description":"Replaces the assistant's knowledge associations entirely.\n\nSend `associations` when the order matters, `knowledgeIds` when the order of the array is\nenough. The two are mutually exclusive; an empty list detaches everything.\n\nBoth your own items and the shared ones can be associated.","properties":{"associations":{"description":"Value supplied for `associations` in the `AssistantKnowledgeAssociationsRequest` request.","type":"array","items":{"type":"object","properties":{"knowledgeId":{"type":"integer"},"sortOrder":{"type":"integer","minimum":0}},"required":["knowledgeId"]}},"knowledgeIds":{"description":"Value supplied for `knowledgeIds` in the `AssistantKnowledgeAssociationsRequest` request.","type":"array","items":{"type":"integer"}}},"minProperties":1,"x-ref":"#/components/schemas/AssistantKnowledgeAssociationsRequest"},"examples":{"byIds":{"summary":"Associate two items, in the order sent","value":{"knowledgeIds":[7,12]}},"withExplicitOrder":{"summary":"State the order explicitly","value":{"associations":[{"knowledgeId":12,"sortOrder":1},{"knowledgeId":7,"sortOrder":2}]}},"detachAll":{"summary":"Detach every item","value":{"knowledgeIds":[]}}}}}},"parameters":[{"name":"assistantId","in":"path","required":true,"description":"Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.","schema":{"type":"string","minLength":1,"maxLength":128,"pattern":"^[A-Za-z0-9_-]+$"},"example":"205","x-ref":"#/components/parameters/AssistantIdentifier","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let assistant_knowledge_success_ref01_data = Object.values(setup.data.existing.assistant_knowledge_success)[0] as any

    // UPDATE
    const assistant_knowledge_success_ref01_ent = client.AssistantKnowledgeSuccess()
    const assistant_knowledge_success_ref01_data_up0: any = {}
    assistant_knowledge_success_ref01_data_up0.id = assistant_knowledge_success_ref01_data.id

    const assistant_knowledge_success_ref01_resdata_up0 = (await assistant_knowledge_success_ref01_ent.update(assistant_knowledge_success_ref01_data_up0)).data()
    assert(assistant_knowledge_success_ref01_resdata_up0.id === assistant_knowledge_success_ref01_data_up0.id)


    // LOAD
    const assistant_knowledge_success_ref01_match_dt0: any = {}
    assistant_knowledge_success_ref01_match_dt0.id = assistant_knowledge_success_ref01_data.id
    const assistant_knowledge_success_ref01_data_dt0 = (await assistant_knowledge_success_ref01_ent.load(assistant_knowledge_success_ref01_match_dt0)).data()
    assert(assistant_knowledge_success_ref01_data_dt0.id === assistant_knowledge_success_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/assistant_knowledge_success/AssistantKnowledgeSuccessTestData.json')

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
    ['assistant_knowledge_success01','assistant_knowledge_success02','assistant_knowledge_success03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AI4CALL_TEST_ASSISTANT_KNOWLEDGE_SUCCESS_ENTID': idmap,
    'AI4CALL_TEST_LIVE': 'FALSE',
    'AI4CALL_TEST_EXPLAIN': 'FALSE',
    'AI4CALL_APIKEY': '',
  })

  idmap = env['AI4CALL_TEST_ASSISTANT_KNOWLEDGE_SUCCESS_ENTID']

  const live = 'TRUE' === env.AI4CALL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AI4CALL_TEST_ASSISTANT_KNOWLEDGE_SUCCESS_ENTID']
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
  
