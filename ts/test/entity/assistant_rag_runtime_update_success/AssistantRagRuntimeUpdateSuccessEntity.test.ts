

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


describe('AssistantRagRuntimeUpdateSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
  afterEach(liveDelay('AI4CALL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Ai4callSDK.test()
    const ent = testsdk.AssistantRagRuntimeUpdateSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'assistant_rag_runtime_update_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"assistantApiKey":{"a":true,"h":"Assistant Api Key","n":"assistantApiKey","r":true,"t":"`$STRING`","key$":"assistantApiKey","index$":0},"assistantId":{"a":true,"h":"Assistant Id","n":"assistantId","r":true,"t":"`$STRING`","key$":"assistantId","index$":1},"configuration":{"a":true,"h":"Configuration","n":"configuration","r":true,"sh":"RAG configuration resulting after application merge.","t":"`$OBJECT`","key$":"configuration","index$":2},"enabled":{"a":true,"h":"Enabled","n":"enabled","r":false,"sh":"Enable or disable RAG for the assistant.","t":"`$BOOLEAN`","key$":"enabled","index$":3},"kbPrompt":{"a":true,"h":"Kb Prompt","n":"kbPrompt","r":false,"sh":"Assistant knowledge base instructions.","t":"`$STRING`","key$":"kbPrompt","index$":4},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name of the RAG collection to associate.","t":"`$STRING`","key$":"name","index$":5},"returnedChunks":{"a":true,"h":"Returned Chunks","n":"returnedChunks","r":false,"sh":"Number of relevant fragments to return from the knowledge base.","t":"`$INTEGER`","key$":"returnedChunks","index$":6},"service":{"a":true,"h":"Service","n":"service","r":true,"t":"`$STRING`","key$":"service","index$":7}},"name":"assistant_rag_runtime_update_success","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /api/v1/assistants/{assistantId}/runtime/rag","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"205","k":"param","n":"assistant_id","or":"assistantId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/api/v1/assistants/{assistantId}/runtime/rag","q":{"exist":["assistant_id"]},"r":{"param":{"assistantId":"assistant_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"assistants"},{"var":"assistant_id"},{"lit":"runtime"},{"lit":"rag"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.assistant"]]},"key$":"assistant_rag_runtime_update_success","name__orig":"assistant_rag_runtime_update_success","Name":"AssistantRagRuntimeUpdateSuccess","name_":"assistant_rag_runtime_update_success","name-":"assistant-rag-runtime-update-success","NAME":"ASSISTANT_RAG_RUNTIME_UPDATE_SUCCESS","index$":37}, {"active":true,"entity":"assistant_rag_runtime_update_success","key$":"BasicAssistantRagRuntimeUpdateSuccessFlow","kind":"basic","name":"BasicAssistantRagRuntimeUpdateSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"assistant_rag_runtime_update_success_ref01","srcdatavar":"assistant_rag_runtime_update_success_ref01_data","suffix":"_up0","textfield":"assistantApiKey"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-assistant_rag_runtime_update_success_ref01"}}],"v":[],"index$":0}]}, 'AssistantRagRuntimeUpdateSuccess', {"PATCH /api/v1/assistants/{assistantId}/runtime/rag":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","description":"PATCH merge of the assistant's RAG configuration, aligned with the portal behavior.\n\nOperational rules:\n- at least one of `enabled`, `name`, `returnedChunks`, `kbPrompt` must be present\n- use `GET /api/v1/catalog/rag/collections` to recover the `name`\n- `enabled: true` requires a valid and active collection\n- by sending `name` with a valid collection, the RAG is activated if it is not explicitly disabled\n- `enabled: false` removes RAG knowledge base from assistant and cleans `returnedChunks` and `kbPrompt`\n- `returnedChunks` follows the portal setting and must be between `1` and `10`\n- `kbPrompt: null` removes assistant knowledge base instructions\n- omitted fields retain the current value, if already present","properties":{"enabled":{"type":"boolean","description":"Enable or disable RAG for the assistant.\nIf `false`, the RAG knowledge base is removed.","key$":"enabled"},"name":{"type":"string","nullable":true,"description":"Name of the RAG collection to associate.\nIt must be recovered from `GET /api/v1/catalog/rag/collections`.\nIf `null`, the selection is reset.","key$":"name"},"returnedChunks":{"type":"integer","minimum":1,"maximum":10,"description":"Number of relevant fragments to return from the knowledge base.","key$":"returnedChunks"},"kbPrompt":{"type":"string","nullable":true,"description":"Assistant knowledge base instructions.\nIf `null`, the field is removed from the LLM runtime.","key$":"kbPrompt"}},"x-ref":"#/components/schemas/AssistantRagRuntimeUpdateRequest","index$":1},"examples":{"enableRag":{"summary":"Enable RAG with collections and settings","value":{"enabled":true,"name":"Listino AI4Call","returnedChunks":4,"kbPrompt":"Usa la knowledge base come fonte prioritaria."}},"changeSettings":{"summary":"Update chunks and instructions only","value":{"returnedChunks":6,"kbPrompt":"Rispondi solo con informazioni presenti nella knowledge base."}},"disableRag":{"summary":"Disable RAG","value":{"enabled":false}}}}}},"parameters":[{"name":"assistantId","in":"path","required":true,"description":"Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.","schema":{"type":"string","minLength":1,"maxLength":128,"pattern":"^[A-Za-z0-9_-]+$"},"example":"205","x-ref":"#/components/parameters/AssistantIdentifier","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let assistant_rag_runtime_update_success_ref01_data = Object.values(setup.data.existing.assistant_rag_runtime_update_success)[0] as any

    // UPDATE
    const assistant_rag_runtime_update_success_ref01_ent = client.AssistantRagRuntimeUpdateSuccess()
    const assistant_rag_runtime_update_success_ref01_data_up0: any = {}

    const assistant_rag_runtime_update_success_ref01_markdef_up0 = { name: 'assistantApiKey', value: 'Mark01-assistant_rag_runtime_update_success_ref01_' + setup.now }
    ;(assistant_rag_runtime_update_success_ref01_data_up0 as any)[assistant_rag_runtime_update_success_ref01_markdef_up0.name] = assistant_rag_runtime_update_success_ref01_markdef_up0.value

    const assistant_rag_runtime_update_success_ref01_resdata_up0 = (await assistant_rag_runtime_update_success_ref01_ent.update(assistant_rag_runtime_update_success_ref01_data_up0)).data()
    assert(null != assistant_rag_runtime_update_success_ref01_resdata_up0)

    assert((assistant_rag_runtime_update_success_ref01_resdata_up0 as any)[assistant_rag_runtime_update_success_ref01_markdef_up0.name] === assistant_rag_runtime_update_success_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/assistant_rag_runtime_update_success/AssistantRagRuntimeUpdateSuccessTestData.json')

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
    ['assistant_rag_runtime_update_success01','assistant_rag_runtime_update_success02','assistant_rag_runtime_update_success03','assistant01','assistant02','assistant03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AI4CALL_TEST_ASSISTANT_RAG_RUNTIME_UPDATE_SUCCESS_ENTID': idmap,
    'AI4CALL_TEST_LIVE': 'FALSE',
    'AI4CALL_TEST_EXPLAIN': 'FALSE',
    'AI4CALL_APIKEY': '',
  })

  idmap = env['AI4CALL_TEST_ASSISTANT_RAG_RUNTIME_UPDATE_SUCCESS_ENTID']

  const live = 'TRUE' === env.AI4CALL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AI4CALL_TEST_ASSISTANT_RAG_RUNTIME_UPDATE_SUCCESS_ENTID']
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
  
