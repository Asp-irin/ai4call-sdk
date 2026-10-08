

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


describe('AccountPluginPurchaseSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
  afterEach(liveDelay('AI4CALL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Ai4callSDK.test()
    const ent = testsdk.AccountPluginPurchaseSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'account_plugin_purchase_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"configuration":{"a":true,"h":"Configuration","n":"configuration","r":true,"sh":"Result of a plugin purchase, including charged prices and created instance data.","t":"`$OBJECT`","key$":"configuration","index$":0},"instanceName":{"a":true,"h":"Instance Name","n":"instanceName","r":false,"sh":"Value supplied for `instanceName` in the `AccountPluginPurchaseRequest` request.","t":"`$STRING`","key$":"instanceName","index$":1},"instance_name":{"a":true,"de":true,"h":"Instance Name","n":"instance_name","r":false,"sh":"Legacy alias of `instanceName`.","t":"`$STRING`","key$":"instance_name","index$":2},"pluginName":{"a":true,"h":"Plugin Name","n":"pluginName","r":false,"sh":"Value supplied for `pluginName` in the `AccountPluginPurchaseRequest` request.","t":"`$STRING`","key$":"pluginName","index$":3},"plugin_name":{"a":true,"de":true,"h":"Plugin Name","n":"plugin_name","r":false,"sh":"Legacy alias of `pluginName`.","t":"`$STRING`","key$":"plugin_name","index$":4}},"name":"account_plugin_purchase_success","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /api/v1/account/plugins/purchase","source":"openapi3","version":2},"g":{},"k":"http","m":"PATCH","o":"/api/v1/account/plugins/purchase","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"account"},{"lit":"plugins"},{"lit":"purchase"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"account_plugin_purchase_success","name__orig":"account_plugin_purchase_success","Name":"AccountPluginPurchaseSuccess","name_":"account_plugin_purchase_success","name-":"account-plugin-purchase-success","NAME":"ACCOUNT_PLUGIN_PURCHASE_SUCCESS","index$":6}, {"active":true,"entity":"account_plugin_purchase_success","key$":"BasicAccountPluginPurchaseSuccessFlow","kind":"basic","name":"BasicAccountPluginPurchaseSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"account_plugin_purchase_success_ref01","srcdatavar":"account_plugin_purchase_success_ref01_data","suffix":"_up0","textfield":"instanceName"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-account_plugin_purchase_success_ref01"}}],"v":[],"index$":0}]}, 'AccountPluginPurchaseSuccess', {"PATCH /api/v1/account/plugins/purchase":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","description":"Purchase a plugin using the plugin name returned by `GET /api/v1/account/plugins/available`.\n\nOperational rules:\n- `pluginName` must match the value returned from the catalog\n- `instanceName` and optional\n- if `instanceName` is not present, the backend automatically generates `Istanza N`\n- legacy snake_case aliases remain accepted but are deprecated","properties":{"pluginName":{"description":"Value supplied for `pluginName` in the `AccountPluginPurchaseRequest` request.","type":"string","key$":"pluginName"},"instanceName":{"description":"Value supplied for `instanceName` in the `AccountPluginPurchaseRequest` request.","type":"string","key$":"instanceName"},"plugin_name":{"type":"string","deprecated":true,"description":"Legacy alias of `pluginName`.","key$":"plugin_name"},"instance_name":{"type":"string","deprecated":true,"description":"Legacy alias of `instanceName`.","key$":"instance_name"}},"anyOf":[{"required":["pluginName"]},{"required":["plugin_name"]}],"x-ref":"#/components/schemas/AccountPluginPurchaseRequest","index$":1},"examples":{"withCustomInstanceName":{"summary":"Purchase a plugin with an explicit instance name","value":{"pluginName":"Google Sheets","instanceName":"Sheets Produzione"}},"withGeneratedInstanceName":{"summary":"Purchase a plugin with an automatic instance name","value":{"pluginName":"Google Sheets"}}}}}},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let account_plugin_purchase_success_ref01_data = Object.values(setup.data.existing.account_plugin_purchase_success)[0] as any

    // UPDATE
    const account_plugin_purchase_success_ref01_ent = client.AccountPluginPurchaseSuccess()
    const account_plugin_purchase_success_ref01_data_up0: any = {}

    const account_plugin_purchase_success_ref01_markdef_up0 = { name: 'instanceName', value: 'Mark01-account_plugin_purchase_success_ref01_' + setup.now }
    ;(account_plugin_purchase_success_ref01_data_up0 as any)[account_plugin_purchase_success_ref01_markdef_up0.name] = account_plugin_purchase_success_ref01_markdef_up0.value

    const account_plugin_purchase_success_ref01_resdata_up0 = (await account_plugin_purchase_success_ref01_ent.update(account_plugin_purchase_success_ref01_data_up0)).data()
    assert(null != account_plugin_purchase_success_ref01_resdata_up0)

    assert((account_plugin_purchase_success_ref01_resdata_up0 as any)[account_plugin_purchase_success_ref01_markdef_up0.name] === account_plugin_purchase_success_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/account_plugin_purchase_success/AccountPluginPurchaseSuccessTestData.json')

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
    ['account_plugin_purchase_success01','account_plugin_purchase_success02','account_plugin_purchase_success03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AI4CALL_TEST_ACCOUNT_PLUGIN_PURCHASE_SUCCESS_ENTID': idmap,
    'AI4CALL_TEST_LIVE': 'FALSE',
    'AI4CALL_TEST_EXPLAIN': 'FALSE',
    'AI4CALL_APIKEY': '',
  })

  idmap = env['AI4CALL_TEST_ACCOUNT_PLUGIN_PURCHASE_SUCCESS_ENTID']

  const live = 'TRUE' === env.AI4CALL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AI4CALL_TEST_ACCOUNT_PLUGIN_PURCHASE_SUCCESS_ENTID']
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
  
