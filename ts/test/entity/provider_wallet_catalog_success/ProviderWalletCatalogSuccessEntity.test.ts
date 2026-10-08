

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


describe('ProviderWalletCatalogSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
  afterEach(liveDelay('AI4CALL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Ai4callSDK.test()
    const ent = testsdk.ProviderWalletCatalogSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'provider_wallet_catalog_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"data":{"a":true,"h":"Data","n":"data","r":true,"t":"`$OBJECT`","key$":"data","index$":0},"message":{"a":true,"h":"Message","n":"message","r":true,"t":"`$STRING`","key$":"message","index$":1},"meta":{"a":true,"h":"Meta","n":"meta","r":false,"t":"`$OBJECT`","key$":"meta","index$":2},"requestId":{"a":true,"h":"Request Id","n":"requestId","r":true,"t":"`$STRING`","key$":"requestId","index$":3},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":4}},"name":"provider_wallet_catalog_success","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/account/provider-wallet/catalog","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/v1/account/provider-wallet/catalog","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"account"},{"lit":"provider-wallet"},{"lit":"catalog"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"provider_wallet_catalog_success","name__orig":"provider_wallet_catalog_success","Name":"ProviderWalletCatalogSuccess","name_":"provider_wallet_catalog_success","name-":"provider-wallet-catalog-success","NAME":"PROVIDER_WALLET_CATALOG_SUCCESS","index$":59}, {"active":true,"entity":"provider_wallet_catalog_success","key$":"BasicProviderWalletCatalogSuccessFlow","kind":"basic","name":"BasicProviderWalletCatalogSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"provider_wallet_catalog_success_ref01","srcdatavar":"provider_wallet_catalog_success_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-provider_wallet_catalog_success_ref01"}}],"index$":0}]}, 'ProviderWalletCatalogSuccess', {"GET /api/v1/account/provider-wallet/catalog":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let provider_wallet_catalog_success_ref01_data = Object.values(setup.data.existing.provider_wallet_catalog_success)[0] as any

    // LOAD
    const provider_wallet_catalog_success_ref01_ent = client.ProviderWalletCatalogSuccess()
    const provider_wallet_catalog_success_ref01_match_dt0: any = {}
    const provider_wallet_catalog_success_ref01_data_dt0 = (await provider_wallet_catalog_success_ref01_ent.load(provider_wallet_catalog_success_ref01_match_dt0)).data()
    assert(null != provider_wallet_catalog_success_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/provider_wallet_catalog_success/ProviderWalletCatalogSuccessTestData.json')

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
    ['provider_wallet_catalog_success01','provider_wallet_catalog_success02','provider_wallet_catalog_success03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AI4CALL_TEST_PROVIDER_WALLET_CATALOG_SUCCESS_ENTID': idmap,
    'AI4CALL_TEST_LIVE': 'FALSE',
    'AI4CALL_TEST_EXPLAIN': 'FALSE',
    'AI4CALL_APIKEY': '',
  })

  idmap = env['AI4CALL_TEST_PROVIDER_WALLET_CATALOG_SUCCESS_ENTID']

  const live = 'TRUE' === env.AI4CALL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AI4CALL_TEST_PROVIDER_WALLET_CATALOG_SUCCESS_ENTID']
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
  
