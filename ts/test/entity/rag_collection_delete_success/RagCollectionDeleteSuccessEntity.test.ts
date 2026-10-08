

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


describe('RagCollectionDeleteSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
  afterEach(liveDelay('AI4CALL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Ai4callSDK.test()
    const ent = testsdk.RagCollectionDeleteSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE
    for (const op of ['create', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'rag_collection_delete_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"data":{"a":true,"h":"Data","n":"data","r":true,"t":"`$OBJECT`","key$":"data","index$":0},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Value supplied for `description` in the `RagCollectionCreateRequest` request.","t":"`$STRING`","key$":"description","index$":1},"maxChunkSize":{"a":true,"h":"Max Chunk Size","n":"maxChunkSize","r":false,"sh":"Value supplied for `maxChunkSize` in the `RagCollectionCreateRequest` request.","t":"`$INTEGER`","key$":"maxChunkSize","index$":2},"maxChunksPerFile":{"a":true,"h":"Max Chunks Per File","n":"maxChunksPerFile","r":false,"sh":"Value supplied for `maxChunksPerFile` in the `RagCollectionCreateRequest` request.","t":"`$INTEGER`","key$":"maxChunksPerFile","index$":3},"message":{"a":true,"h":"Message","n":"message","r":true,"t":"`$STRING`","key$":"message","index$":4},"meta":{"a":true,"h":"Meta","n":"meta","r":true,"sh":"Collection metadata.","t":"`$OBJECT`","key$":"meta","index$":5},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Value supplied for `name` in the `RagCollectionCreateRequest` request.","t":"`$STRING`","key$":"name","index$":6},"requestId":{"a":true,"h":"Request Id","n":"requestId","r":true,"t":"`$STRING`","key$":"requestId","index$":7},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":8}},"name":"rag_collection_delete_success","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v1/catalog/rag/collections","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/v1/catalog/rag/collections","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"catalog"},{"lit":"rag"},{"lit":"collections"}],"t":{"req":{"description":"`reqdata.description`","maxChunkSize":"`reqdata.max_chunk_size`","maxChunksPerFile":"`reqdata.max_chunks_per_file`","name":"`reqdata.name`"},"res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"POST /api/v1/rag/collections","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/v1/rag/collections","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"rag"},{"lit":"collections"}],"t":{"req":{"description":"`reqdata.description`","maxChunkSize":"`reqdata.max_chunk_size`","maxChunksPerFile":"`reqdata.max_chunks_per_file`","name":"`reqdata.name`"},"res":"`body.data`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/catalog/rag/collections","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/v1/catalog/rag/collections","q":{"exist":["cursor","limit"]},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"catalog"},{"lit":"rag"},{"lit":"collections"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v1/rag/collections","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/v1/rag/collections","q":{"exist":["cursor","limit"]},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"rag"},{"lit":"collections"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/v1/catalog/rag/collections/{ragId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"rag_id","or":"ragId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/api/v1/catalog/rag/collections/{ragId}","q":{"exist":["rag_id"]},"r":{"param":{"ragId":"rag_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"catalog"},{"lit":"rag"},{"lit":"collections"},{"var":"rag_id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"DELETE /api/v1/rag/collections/{ragId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"rag_id","or":"ragId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/api/v1/rag/collections/{ragId}","q":{"exist":["rag_id"]},"r":{"param":{"ragId":"rag_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"rag"},{"lit":"collections"},{"var":"rag_id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":1}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"rag_collection_delete_success","name__orig":"rag_collection_delete_success","Name":"RagCollectionDeleteSuccess","name_":"rag_collection_delete_success","name-":"rag-collection-delete-success","NAME":"RAG_COLLECTION_DELETE_SUCCESS","index$":61}, {"active":true,"entity":"rag_collection_delete_success","key$":"BasicRagCollectionDeleteSuccessFlow","kind":"basic","name":"BasicRagCollectionDeleteSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"rag_collection_delete_success_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"rag_collection_delete_success_ref01","srcdatavar":"rag_collection_delete_success_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-rag_collection_delete_success_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"rag_collection_delete_success_ref01","suffix":"_rm0"},"m":{"id":"rag_collection_delete_success01"},"o":"remove","s":[],"v":[],"index$":2}]}, 'RagCollectionDeleteSuccess', {"POST /api/v1/catalog/rag/collections":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","additionalProperties":false,"description":"Create a customer-owned RAG collection and provision the corresponding vector-store collection.","properties":{"name":{"description":"Value supplied for `name` in the `RagCollectionCreateRequest` request.","type":"string","minLength":1,"key$":"name"},"description":{"description":"Value supplied for `description` in the `RagCollectionCreateRequest` request.","type":"string","nullable":true,"key$":"description"},"maxChunkSize":{"description":"Value supplied for `maxChunkSize` in the `RagCollectionCreateRequest` request.","type":"integer","minimum":500,"maximum":10000,"default":5000,"key$":"maxChunkSize"},"maxChunksPerFile":{"description":"Value supplied for `maxChunksPerFile` in the `RagCollectionCreateRequest` request.","type":"integer","minimum":1,"nullable":true,"key$":"maxChunksPerFile"}},"required":["name"],"x-ref":"#/components/schemas/RagCollectionCreateRequest","index$":1},"example":{"name":"Product Knowledge","description":"Product documentation","maxChunkSize":5000,"maxChunksPerFile":null}}}},"parameters":[]},"POST /api/v1/rag/collections":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","additionalProperties":false,"description":"Create a customer-owned RAG collection and provision the corresponding vector-store collection.","properties":{"name":{"description":"Value supplied for `name` in the `RagCollectionCreateRequest` request.","type":"string","minLength":1,"key$":"name"},"description":{"description":"Value supplied for `description` in the `RagCollectionCreateRequest` request.","type":"string","nullable":true,"key$":"description"},"maxChunkSize":{"description":"Value supplied for `maxChunkSize` in the `RagCollectionCreateRequest` request.","type":"integer","minimum":500,"maximum":10000,"default":5000,"key$":"maxChunkSize"},"maxChunksPerFile":{"description":"Value supplied for `maxChunksPerFile` in the `RagCollectionCreateRequest` request.","type":"integer","minimum":1,"nullable":true,"key$":"maxChunksPerFile"}},"required":["name"],"x-ref":"#/components/schemas/RagCollectionCreateRequest","index$":1},"example":{"name":"Product Knowledge","description":"Product documentation","maxChunkSize":5000,"maxChunksPerFile":null}}}},"parameters":[]},"GET /api/v1/catalog/rag/collections":{"protocol":"http","parameters":[{"name":"limit","in":"query","required":false,"description":"Maximum number of items returned in one cursor-paginated page. Omit both limit and cursor to preserve the legacy unpaginated response.","schema":{"type":"integer","minimum":1,"maximum":100},"index$":0},{"name":"cursor","in":"query","required":false,"description":"Opaque cursor returned in meta.nextCursor by the previous page.","schema":{"type":"string"},"index$":1}]},"GET /api/v1/rag/collections":{"protocol":"http","parameters":[{"name":"limit","in":"query","required":false,"description":"Maximum number of items returned in one cursor-paginated page. Omit both limit and cursor to preserve the legacy unpaginated response.","schema":{"type":"integer","minimum":1,"maximum":100},"index$":0},{"name":"cursor","in":"query","required":false,"description":"Opaque cursor returned in meta.nextCursor by the previous page.","schema":{"type":"string"},"index$":1}]},"DELETE /api/v1/catalog/rag/collections/{ragId}":{"protocol":"http","parameters":[{"name":"ragId","in":"path","required":true,"description":"Stable `publicRagId` of the RAG collection. Legacy `collectionName` and `name` values remain accepted.","schema":{"type":"string"},"index$":0}]},"DELETE /api/v1/rag/collections/{ragId}":{"protocol":"http","parameters":[{"name":"ragId","in":"path","required":true,"description":"Stable `publicRagId` of the RAG collection. Legacy `collectionName` and `name` values remain accepted.","schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const rag_collection_delete_success_ref01_ent = client.RagCollectionDeleteSuccess()
    let rag_collection_delete_success_ref01_data = setup.data.new.rag_collection_delete_success['rag_collection_delete_success_ref01']

    rag_collection_delete_success_ref01_data = (await rag_collection_delete_success_ref01_ent.create(rag_collection_delete_success_ref01_data)).data()
    assert(null != rag_collection_delete_success_ref01_data)


    // LOAD
    const rag_collection_delete_success_ref01_match_dt0: any = {}
    const rag_collection_delete_success_ref01_data_dt0 = (await rag_collection_delete_success_ref01_ent.load(rag_collection_delete_success_ref01_match_dt0)).data()
    assert(null != rag_collection_delete_success_ref01_data_dt0)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/rag_collection_delete_success/RagCollectionDeleteSuccessTestData.json')

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
    ['rag_collection_delete_success01','rag_collection_delete_success02','rag_collection_delete_success03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AI4CALL_TEST_RAG_COLLECTION_DELETE_SUCCESS_ENTID': idmap,
    'AI4CALL_TEST_LIVE': 'FALSE',
    'AI4CALL_TEST_EXPLAIN': 'FALSE',
    'AI4CALL_APIKEY': '',
  })

  idmap = env['AI4CALL_TEST_RAG_COLLECTION_DELETE_SUCCESS_ENTID']

  const live = 'TRUE' === env.AI4CALL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AI4CALL_TEST_RAG_COLLECTION_DELETE_SUCCESS_ENTID']
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
  
