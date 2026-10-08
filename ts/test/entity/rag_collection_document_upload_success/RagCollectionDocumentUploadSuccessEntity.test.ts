

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


describe('RagCollectionDocumentUploadSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
  afterEach(liveDelay('AI4CALL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Ai4callSDK.test()
    const ent = testsdk.RagCollectionDocumentUploadSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'rag_collection_document_upload_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"data":{"a":true,"h":"Data","n":"data","r":true,"sh":"Result returned after starting a RAG document upload.","t":"`$OBJECT`","key$":"data","index$":0},"message":{"a":true,"h":"Message","n":"message","r":true,"t":"`$STRING`","key$":"message","index$":1},"meta":{"a":true,"h":"Meta","n":"meta","r":true,"sh":"Collection metadata.","t":"`$OBJECT`","key$":"meta","index$":2},"requestId":{"a":true,"h":"Request Id","n":"requestId","r":true,"t":"`$STRING`","key$":"requestId","index$":3},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":4}},"name":"rag_collection_document_upload_success","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v1/catalog/rag/collections/{ragId}/documents","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"collection_id","or":"ragId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/v1/catalog/rag/collections/{ragId}/documents","q":{"exist":["collection_id"]},"r":{"param":{"ragId":"collection_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"catalog"},{"lit":"rag"},{"lit":"collections"},{"var":"collection_id"},{"lit":"documents"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/v1/rag/collections/{ragId}/documents","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"collection_id","or":"ragId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/v1/rag/collections/{ragId}/documents","q":{"exist":["collection_id"]},"r":{"param":{"ragId":"collection_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"rag"},{"lit":"collections"},{"var":"collection_id"},{"lit":"documents"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"rag_collection_document_upload_success","name__orig":"rag_collection_document_upload_success","Name":"RagCollectionDocumentUploadSuccess","name_":"rag_collection_document_upload_success","name-":"rag-collection-document-upload-success","NAME":"RAG_COLLECTION_DOCUMENT_UPLOAD_SUCCESS","index$":66}, {"active":true,"entity":"rag_collection_document_upload_success","key$":"BasicRagCollectionDocumentUploadSuccessFlow","kind":"basic","name":"BasicRagCollectionDocumentUploadSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"rag_collection_document_upload_success_ref01"},"m":{"collection_id":"collection01"},"o":"create","s":[],"v":[],"index$":0}]}, 'RagCollectionDocumentUploadSuccess', {"POST /api/v1/catalog/rag/collections/{ragId}/documents":{"protocol":"http","requestBody":{"required":true,"content":{"multipart/form-data":{"schema":{"type":"object","properties":{"files":{"type":"array","items":{"type":"string","format":"binary"}}},"required":["files"]},"encoding":{"files":{"style":"form"}},"example":{"files":["listino.pdf","faq.txt"]}}}},"parameters":[{"name":"ragId","in":"path","required":true,"schema":{"type":"string"},"description":"Stable `publicRagId` of the RAG collection. Legacy `collectionName` and `name` values remain accepted.","index$":0}]},"POST /api/v1/rag/collections/{ragId}/documents":{"protocol":"http","requestBody":{"required":true,"content":{"multipart/form-data":{"schema":{"type":"object","properties":{"files":{"type":"array","items":{"type":"string","format":"binary"}}},"required":["files"]},"encoding":{"files":{"style":"form"}},"example":{"files":["listino.pdf","faq.txt"]}}}},"parameters":[{"name":"ragId","in":"path","required":true,"schema":{"type":"string"},"description":"Stable `publicRagId` of the RAG collection. Legacy `collectionName` and `name` values remain accepted.","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const rag_collection_document_upload_success_ref01_ent = client.RagCollectionDocumentUploadSuccess()
    let rag_collection_document_upload_success_ref01_data = setup.data.new.rag_collection_document_upload_success['rag_collection_document_upload_success_ref01']
    rag_collection_document_upload_success_ref01_data['collection_id'] = setup.idmap['collection01']

    rag_collection_document_upload_success_ref01_data = (await rag_collection_document_upload_success_ref01_ent.create(rag_collection_document_upload_success_ref01_data)).data()
    assert(null != rag_collection_document_upload_success_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/rag_collection_document_upload_success/RagCollectionDocumentUploadSuccessTestData.json')

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
    ['rag_collection_document_upload_success01','rag_collection_document_upload_success02','rag_collection_document_upload_success03','collection01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AI4CALL_TEST_RAG_COLLECTION_DOCUMENT_UPLOAD_SUCCESS_ENTID': idmap,
    'AI4CALL_TEST_LIVE': 'FALSE',
    'AI4CALL_TEST_EXPLAIN': 'FALSE',
    'AI4CALL_APIKEY': '',
  })

  idmap = env['AI4CALL_TEST_RAG_COLLECTION_DOCUMENT_UPLOAD_SUCCESS_ENTID']

  const live = 'TRUE' === env.AI4CALL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AI4CALL_TEST_RAG_COLLECTION_DOCUMENT_UPLOAD_SUCCESS_ENTID']
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
  
