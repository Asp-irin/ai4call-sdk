

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


describe('RagCollectionDocumentTokenEstimateSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
  afterEach(liveDelay('AI4CALL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Ai4callSDK.test()
    const ent = testsdk.RagCollectionDocumentTokenEstimateSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'rag_collection_document_token_estimate_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"estimatedCost":{"a":true,"h":"Estimated Cost","n":"estimatedCost","r":true,"t":"`$NUMBER`","key$":"estimatedCost","index$":0},"fileCount":{"a":true,"h":"File Count","n":"fileCount","r":true,"t":"`$INTEGER`","key$":"fileCount","index$":1},"fileDetails":{"a":true,"h":"File Details","n":"fileDetails","r":true,"t":"`$ARRAY`","key$":"fileDetails","index$":2},"processingTime":{"a":true,"h":"Processing Time","n":"processingTime","r":true,"t":"`$INTEGER`","key$":"processingTime","index$":3},"raw":{"a":true,"h":"Raw","n":"raw","r":true,"t":"`$OBJECT`","key$":"raw","index$":4},"totalTokens":{"a":true,"h":"Total Tokens","n":"totalTokens","r":true,"t":"`$INTEGER`","key$":"totalTokens","index$":5}},"name":"rag_collection_document_token_estimate_success","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v1/catalog/rag/documents/estimate","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/v1/catalog/rag/documents/estimate","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"catalog"},{"lit":"rag"},{"lit":"documents"},{"lit":"estimate"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"POST /api/v1/rag/documents/estimate","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/v1/rag/documents/estimate","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"rag"},{"lit":"documents"},{"lit":"estimate"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"rag_collection_document_token_estimate_success","name__orig":"rag_collection_document_token_estimate_success","Name":"RagCollectionDocumentTokenEstimateSuccess","name_":"rag_collection_document_token_estimate_success","name-":"rag-collection-document-token-estimate-success","NAME":"RAG_COLLECTION_DOCUMENT_TOKEN_ESTIMATE_SUCCESS","index$":64}, {"active":true,"entity":"rag_collection_document_token_estimate_success","key$":"BasicRagCollectionDocumentTokenEstimateSuccessFlow","kind":"basic","name":"BasicRagCollectionDocumentTokenEstimateSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"rag_collection_document_token_estimate_success_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'RagCollectionDocumentTokenEstimateSuccess', {"POST /api/v1/catalog/rag/documents/estimate":{"protocol":"http","requestBody":{"required":true,"content":{"multipart/form-data":{"schema":{"type":"object","properties":{"files":{"type":"array","items":{"type":"string","format":"binary"}}},"required":["files"]},"encoding":{"files":{"style":"form"}},"example":{"files":["listino.pdf","faq.txt"]}}}},"parameters":[]},"POST /api/v1/rag/documents/estimate":{"protocol":"http","requestBody":{"required":true,"content":{"multipart/form-data":{"schema":{"type":"object","properties":{"files":{"type":"array","items":{"type":"string","format":"binary"}}},"required":["files"]},"encoding":{"files":{"style":"form"}},"example":{"files":["listino.pdf","faq.txt"]}}}},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const rag_collection_document_token_estimate_success_ref01_ent = client.RagCollectionDocumentTokenEstimateSuccess()
    let rag_collection_document_token_estimate_success_ref01_data = setup.data.new.rag_collection_document_token_estimate_success['rag_collection_document_token_estimate_success_ref01']

    rag_collection_document_token_estimate_success_ref01_data = (await rag_collection_document_token_estimate_success_ref01_ent.create(rag_collection_document_token_estimate_success_ref01_data)).data()
    assert(null != rag_collection_document_token_estimate_success_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/rag_collection_document_token_estimate_success/RagCollectionDocumentTokenEstimateSuccessTestData.json')

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
    ['rag_collection_document_token_estimate_success01','rag_collection_document_token_estimate_success02','rag_collection_document_token_estimate_success03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AI4CALL_TEST_RAG_COLLECTION_DOCUMENT_TOKEN_ESTIMATE_SUCCESS_ENTID': idmap,
    'AI4CALL_TEST_LIVE': 'FALSE',
    'AI4CALL_TEST_EXPLAIN': 'FALSE',
    'AI4CALL_APIKEY': '',
  })

  idmap = env['AI4CALL_TEST_RAG_COLLECTION_DOCUMENT_TOKEN_ESTIMATE_SUCCESS_ENTID']

  const live = 'TRUE' === env.AI4CALL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AI4CALL_TEST_RAG_COLLECTION_DOCUMENT_TOKEN_ESTIMATE_SUCCESS_ENTID']
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
  
