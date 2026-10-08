

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


describe('RagCollectionDocumentListSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
  afterEach(liveDelay('AI4CALL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Ai4callSDK.test()
    const ent = testsdk.RagCollectionDocumentListSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'rag_collection_document_list_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"data":{"a":true,"h":"Data","n":"data","r":true,"t":"`$OBJECT`","key$":"data","index$":0},"message":{"a":true,"h":"Message","n":"message","r":true,"t":"`$STRING`","key$":"message","index$":1},"meta":{"a":true,"h":"Meta","n":"meta","r":true,"sh":"Collection metadata.","t":"`$OBJECT`","key$":"meta","index$":2},"requestId":{"a":true,"h":"Request Id","n":"requestId","r":true,"t":"`$STRING`","key$":"requestId","index$":3},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":4}},"name":"rag_collection_document_list_success","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/catalog/rag/collections/{ragId}/documents","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"collection_id","or":"ragId","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/v1/catalog/rag/collections/{ragId}/documents","q":{"exist":["collection_id","cursor","limit"]},"r":{"param":{"ragId":"collection_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"catalog"},{"lit":"rag"},{"lit":"collections"},{"var":"collection_id"},{"lit":"documents"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v1/rag/collections/{ragId}/documents","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"collection_id","or":"ragId","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/v1/rag/collections/{ragId}/documents","q":{"exist":["collection_id","cursor","limit"]},"r":{"param":{"ragId":"collection_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"rag"},{"lit":"collections"},{"var":"collection_id"},{"lit":"documents"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"rag_collection_document_list_success","name__orig":"rag_collection_document_list_success","Name":"RagCollectionDocumentListSuccess","name_":"rag_collection_document_list_success","name-":"rag-collection-document-list-success","NAME":"RAG_COLLECTION_DOCUMENT_LIST_SUCCESS","index$":63}, {"active":true,"entity":"rag_collection_document_list_success","key$":"BasicRagCollectionDocumentListSuccessFlow","kind":"basic","name":"BasicRagCollectionDocumentListSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"rag_collection_document_list_success_ref01","srcdatavar":"rag_collection_document_list_success_ref01_data","suffix":"_dt0"},"m":{"id":"rag_collection_document_list_success01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-rag_collection_document_list_success_ref01"}}],"index$":0}]}, 'RagCollectionDocumentListSuccess', {"GET /api/v1/catalog/rag/collections/{ragId}/documents":{"protocol":"http","parameters":[{"name":"ragId","in":"path","required":true,"schema":{"type":"string"},"description":"Stable `publicRagId` of the RAG collection. Legacy `collectionName` and `name` values remain accepted.","index$":0},{"name":"limit","in":"query","required":false,"description":"Maximum number of items returned in one cursor-paginated page. Omit both limit and cursor to preserve the legacy unpaginated response.","schema":{"type":"integer","minimum":1,"maximum":100},"index$":1},{"name":"cursor","in":"query","required":false,"description":"Opaque cursor returned in meta.nextCursor by the previous page.","schema":{"type":"string"},"index$":2}]},"GET /api/v1/rag/collections/{ragId}/documents":{"protocol":"http","parameters":[{"name":"ragId","in":"path","required":true,"schema":{"type":"string"},"description":"Stable `publicRagId` of the RAG collection. Legacy `collectionName` and `name` values remain accepted.","index$":0},{"name":"limit","in":"query","required":false,"description":"Maximum number of items returned in one cursor-paginated page. Omit both limit and cursor to preserve the legacy unpaginated response.","schema":{"type":"integer","minimum":1,"maximum":100},"index$":1},{"name":"cursor","in":"query","required":false,"description":"Opaque cursor returned in meta.nextCursor by the previous page.","schema":{"type":"string"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let rag_collection_document_list_success_ref01_data = Object.values(setup.data.existing.rag_collection_document_list_success)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const rag_collection_document_list_success_ref01_ent = client.RagCollectionDocumentListSuccess()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/rag_collection_document_list_success/RagCollectionDocumentListSuccessTestData.json')

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
    ['rag_collection_document_list_success01','rag_collection_document_list_success02','rag_collection_document_list_success03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AI4CALL_TEST_RAG_COLLECTION_DOCUMENT_LIST_SUCCESS_ENTID': idmap,
    'AI4CALL_TEST_LIVE': 'FALSE',
    'AI4CALL_TEST_EXPLAIN': 'FALSE',
    'AI4CALL_APIKEY': '',
  })

  idmap = env['AI4CALL_TEST_RAG_COLLECTION_DOCUMENT_LIST_SUCCESS_ENTID']

  const live = 'TRUE' === env.AI4CALL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AI4CALL_TEST_RAG_COLLECTION_DOCUMENT_LIST_SUCCESS_ENTID']
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
  
