

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


describe('AccountPluginInstanceSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
  afterEach(liveDelay('AI4CALL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Ai4callSDK.test()
    const ent = testsdk.AccountPluginInstanceSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'account_plugin_instance_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"configuration":{"a":true,"h":"Configuration","n":"configuration","r":true,"sh":"Current lifecycle information for one purchased plugin instance.","t":"`$OBJECT`","key$":"configuration","index$":0},"data":{"a":true,"h":"Data","n":"data","r":true,"t":"`$OBJECT`","key$":"data","index$":1},"instanceName":{"a":true,"h":"Instance Name","n":"instanceName","r":false,"sh":"Value supplied for `instanceName` in the `AccountPluginPurchaseRequest` request.","t":"`$STRING`","key$":"instanceName","index$":2},"instance_name":{"a":true,"de":true,"h":"Instance Name","n":"instance_name","r":false,"sh":"Legacy alias of `instanceName`.","t":"`$STRING`","key$":"instance_name","index$":3},"message":{"a":true,"h":"Message","n":"message","r":true,"t":"`$STRING`","key$":"message","index$":4},"meta":{"a":true,"h":"Meta","n":"meta","r":true,"t":"`$OBJECT`","key$":"meta","index$":5},"newInstanceName":{"a":true,"h":"New Instance Name","n":"newInstanceName","r":false,"sh":"Value supplied for `newInstanceName` in the `AccountPluginInstanceByIdUpdateRequest` request.","t":"`$STRING`","key$":"newInstanceName","index$":6},"new_instance_name":{"a":true,"de":true,"h":"New Instance Name","n":"new_instance_name","r":false,"sh":"Legacy alias of `newInstanceName`.","t":"`$STRING`","key$":"new_instance_name","index$":7},"pluginName":{"a":true,"h":"Plugin Name","n":"pluginName","r":false,"sh":"Value supplied for `pluginName` in the `AccountPluginPurchaseRequest` request.","t":"`$STRING`","key$":"pluginName","index$":8},"plugin_name":{"a":true,"de":true,"h":"Plugin Name","n":"plugin_name","r":false,"sh":"Legacy alias of `pluginName`.","t":"`$STRING`","key$":"plugin_name","index$":9},"requestId":{"a":true,"h":"Request Id","n":"requestId","r":true,"t":"`$STRING`","key$":"requestId","index$":10},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"Value supplied for `status` in the `AccountPluginInstanceUpdateRequest` request.","t":"`$STRING`","key$":"status","index$":11},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":12}},"name":"account_plugin_instance_success","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v1/account/plugins/instances","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/v1/account/plugins/instances","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"account"},{"lit":"plugins"},{"lit":"instances"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/account/plugins/instances","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/v1/account/plugins/instances","q":{"exist":["cursor","limit"]},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"account"},{"lit":"plugins"},{"lit":"instances"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/v1/account/plugins/instances/{instanceId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"instance_id","or":"instanceId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/api/v1/account/plugins/instances/{instanceId}","q":{"exist":["instance_id"]},"r":{"param":{"instanceId":"instance_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"account"},{"lit":"plugins"},{"lit":"instances"},{"var":"instance_id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /api/v1/account/plugins/instances/{instanceId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"instance_id","or":"instanceId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/api/v1/account/plugins/instances/{instanceId}","q":{"exist":["instance_id"]},"r":{"param":{"instanceId":"instance_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"account"},{"lit":"plugins"},{"lit":"instances"},{"var":"instance_id"}],"t":{"req":{"newInstanceName":"`reqdata.new_instance_name`","new_instance_name":"`reqdata.new_instance_name`"},"res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"PATCH /api/v1/account/plugins/instances","source":"openapi3","version":2},"g":{},"k":"http","m":"PATCH","o":"/api/v1/account/plugins/instances","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"account"},{"lit":"plugins"},{"lit":"instances"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"account_plugin_instance_success","name__orig":"account_plugin_instance_success","Name":"AccountPluginInstanceSuccess","name_":"account_plugin_instance_success","name-":"account-plugin-instance-success","NAME":"ACCOUNT_PLUGIN_INSTANCE_SUCCESS","index$":5}, {"active":true,"entity":"account_plugin_instance_success","key$":"BasicAccountPluginInstanceSuccessFlow","kind":"basic","name":"BasicAccountPluginInstanceSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"account_plugin_instance_success_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"account_plugin_instance_success_ref01","srcdatavar":"account_plugin_instance_success_ref01_data","suffix":"_up0","textfield":"instanceName"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-account_plugin_instance_success_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"account_plugin_instance_success_ref01","srcdatavar":"account_plugin_instance_success_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-account_plugin_instance_success_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"account_plugin_instance_success_ref01","suffix":"_rm0"},"m":{"id":"account_plugin_instance_success01"},"o":"remove","s":[],"v":[],"index$":3}]}, 'AccountPluginInstanceSuccess', {"POST /api/v1/account/plugins/instances":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","description":"Purchase a plugin using the plugin name returned by `GET /api/v1/account/plugins/available`.\n\nOperational rules:\n- `pluginName` must match the value returned from the catalog\n- `instanceName` and optional\n- if `instanceName` is not present, the backend automatically generates `Istanza N`\n- legacy snake_case aliases remain accepted but are deprecated","properties":{"pluginName":{"description":"Value supplied for `pluginName` in the `AccountPluginPurchaseRequest` request.","type":"string","key$":"pluginName"},"instanceName":{"description":"Value supplied for `instanceName` in the `AccountPluginPurchaseRequest` request.","type":"string","key$":"instanceName"},"plugin_name":{"type":"string","deprecated":true,"description":"Legacy alias of `pluginName`.","key$":"plugin_name"},"instance_name":{"type":"string","deprecated":true,"description":"Legacy alias of `instanceName`.","key$":"instance_name"}},"anyOf":[{"required":["pluginName"]},{"required":["plugin_name"]}],"x-ref":"#/components/schemas/AccountPluginPurchaseRequest","index$":1},"examples":{"withCustomInstanceName":{"summary":"Purchase a plugin with an explicit instance name","value":{"pluginName":"Google Sheets","instanceName":"Sheets Produzione"}},"withGeneratedInstanceName":{"summary":"Purchase a plugin with an automatic instance name","value":{"pluginName":"Google Sheets"}}}}}},"parameters":[]},"GET /api/v1/account/plugins/instances":{"protocol":"http","parameters":[{"name":"limit","in":"query","required":false,"description":"Maximum number of items returned in one cursor-paginated page. Omit both limit and cursor to preserve the legacy unpaginated response.","schema":{"type":"integer","minimum":1,"maximum":100},"index$":0},{"name":"cursor","in":"query","required":false,"description":"Opaque cursor returned in meta.nextCursor by the previous page.","schema":{"type":"string"},"index$":1}]},"DELETE /api/v1/account/plugins/instances/{instanceId}":{"protocol":"http","parameters":[{"name":"instanceId","in":"path","required":true,"description":"Stable plugin subscription identifier returned by the instance list or create operation.","schema":{"type":"string","pattern":"^[0-9]+$"},"index$":0}]},"PATCH /api/v1/account/plugins/instances/{instanceId}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","additionalProperties":false,"description":"Rename a purchased plugin instance identified by its stable instanceId.","properties":{"newInstanceName":{"description":"Value supplied for `newInstanceName` in the `AccountPluginInstanceByIdUpdateRequest` request.","type":"string","key$":"newInstanceName"},"new_instance_name":{"type":"string","deprecated":true,"description":"Legacy alias of `newInstanceName`.","key$":"new_instance_name"}},"anyOf":[{"required":["newInstanceName"]},{"required":["new_instance_name"]}],"x-ref":"#/components/schemas/AccountPluginInstanceByIdUpdateRequest","index$":1},"example":{"newInstanceName":"Sheets Marketing"}}}},"parameters":[{"name":"instanceId","in":"path","required":true,"description":"Stable plugin subscription identifier returned by the instance list or create operation.","schema":{"type":"string","pattern":"^[0-9]+$"},"index$":0}]},"PATCH /api/v1/account/plugins/instances":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","description":"Edit an active plugin instance using the names returned by `GET /api/v1/account/plugins/instances`.\n\nOperational rules:\n- `pluginName` and `instanceName` identify the instance\n- at least one between `newInstanceName` and `status` must be present\n- `newInstanceName` renames the instance\n- `status` only supports `cancelled` and deactivates the instance\n- `newInstanceName` cannot be combined with `status`\n- legacy snake_case aliases remain accepted but are deprecated","properties":{"pluginName":{"description":"Value supplied for `pluginName` in the `AccountPluginInstanceUpdateRequest` request.","type":"string","key$":"pluginName"},"instanceName":{"description":"Value supplied for `instanceName` in the `AccountPluginInstanceUpdateRequest` request.","type":"string","key$":"instanceName"},"newInstanceName":{"description":"Value supplied for `newInstanceName` in the `AccountPluginInstanceUpdateRequest` request.","type":"string","key$":"newInstanceName"},"status":{"description":"Value supplied for `status` in the `AccountPluginInstanceUpdateRequest` request.","type":"string","enum":["cancelled"],"key$":"status"},"plugin_name":{"type":"string","deprecated":true,"description":"Legacy alias of `pluginName`.","key$":"plugin_name"},"instance_name":{"type":"string","deprecated":true,"description":"Legacy alias of `instanceName`.","key$":"instance_name"},"new_instance_name":{"type":"string","deprecated":true,"description":"Legacy alias of `newInstanceName`.","key$":"new_instance_name"}},"allOf":[{"anyOf":[{"required":["pluginName"]},{"required":["plugin_name"]}]},{"anyOf":[{"required":["instanceName"]},{"required":["instance_name"]}]}],"x-ref":"#/components/schemas/AccountPluginInstanceUpdateRequest","index$":1},"examples":{"rename":{"summary":"Rename an active instance","value":{"pluginName":"Google Sheets","instanceName":"Sheets Produzione","newInstanceName":"Sheets Marketing"}},"cancel":{"summary":"Deactivate an active instance","value":{"pluginName":"Google Sheets","instanceName":"Sheets Produzione","status":"cancelled"}}}}}},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const account_plugin_instance_success_ref01_ent = client.AccountPluginInstanceSuccess()
    let account_plugin_instance_success_ref01_data = setup.data.new.account_plugin_instance_success['account_plugin_instance_success_ref01']

    account_plugin_instance_success_ref01_data = (await account_plugin_instance_success_ref01_ent.create(account_plugin_instance_success_ref01_data)).data()
    assert(null != account_plugin_instance_success_ref01_data)


    // UPDATE
    const account_plugin_instance_success_ref01_data_up0: any = {}

    const account_plugin_instance_success_ref01_markdef_up0 = { name: 'instanceName', value: 'Mark01-account_plugin_instance_success_ref01_' + setup.now }
    ;(account_plugin_instance_success_ref01_data_up0 as any)[account_plugin_instance_success_ref01_markdef_up0.name] = account_plugin_instance_success_ref01_markdef_up0.value

    const account_plugin_instance_success_ref01_resdata_up0 = (await account_plugin_instance_success_ref01_ent.update(account_plugin_instance_success_ref01_data_up0)).data()
    assert(null != account_plugin_instance_success_ref01_resdata_up0)

    assert((account_plugin_instance_success_ref01_resdata_up0 as any)[account_plugin_instance_success_ref01_markdef_up0.name] === account_plugin_instance_success_ref01_markdef_up0.value)


    // LOAD
    const account_plugin_instance_success_ref01_match_dt0: any = {}
    const account_plugin_instance_success_ref01_data_dt0 = (await account_plugin_instance_success_ref01_ent.load(account_plugin_instance_success_ref01_match_dt0)).data()
    assert(null != account_plugin_instance_success_ref01_data_dt0)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/account_plugin_instance_success/AccountPluginInstanceSuccessTestData.json')

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
    ['account_plugin_instance_success01','account_plugin_instance_success02','account_plugin_instance_success03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AI4CALL_TEST_ACCOUNT_PLUGIN_INSTANCE_SUCCESS_ENTID': idmap,
    'AI4CALL_TEST_LIVE': 'FALSE',
    'AI4CALL_TEST_EXPLAIN': 'FALSE',
    'AI4CALL_APIKEY': '',
  })

  idmap = env['AI4CALL_TEST_ACCOUNT_PLUGIN_INSTANCE_SUCCESS_ENTID']

  const live = 'TRUE' === env.AI4CALL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AI4CALL_TEST_ACCOUNT_PLUGIN_INSTANCE_SUCCESS_ENTID']
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
  
