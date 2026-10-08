

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


describe('AccountPluginConfigurationSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
  afterEach(liveDelay('AI4CALL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Ai4callSDK.test()
    const ent = testsdk.AccountPluginConfigurationSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'account_plugin_configuration_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"configuration":{"a":true,"h":"Configuration","n":"configuration","r":true,"sh":"Configuration contract and current values for one plugin instance.","t":"`$OBJECT`","key$":"configuration","index$":0},"instanceName":{"a":true,"h":"Instance Name","n":"instanceName","r":false,"sh":"Value supplied for `instanceName` in the `AccountPluginConfigurationUpdateRequest` request.","t":"`$STRING`","key$":"instanceName","index$":1},"instance_name":{"a":true,"de":true,"h":"Instance Name","n":"instance_name","r":false,"sh":"Legacy alias of `instanceName`.","t":"`$STRING`","key$":"instance_name","index$":2},"pluginName":{"a":true,"h":"Plugin Name","n":"pluginName","r":false,"sh":"Value supplied for `pluginName` in the `AccountPluginConfigurationUpdateRequest` request.","t":"`$STRING`","key$":"pluginName","index$":3},"plugin_name":{"a":true,"de":true,"h":"Plugin Name","n":"plugin_name","r":false,"sh":"Legacy alias of `pluginName`.","t":"`$STRING`","key$":"plugin_name","index$":4}},"name":"account_plugin_configuration_success","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/account/plugins/configuration","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"instance_name","or":"instanceName","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"instance_name","or":"instance_name","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"plugin_name","or":"pluginName","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"plugin_name","or":"plugin_name","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/api/v1/account/plugins/configuration","q":{"exist":["instance_name","plugin_name"]},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"account"},{"lit":"plugins"},{"lit":"configuration"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"GET /api/v1/account/plugins/instances/{instanceId}/configuration","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"instance_id","or":"instanceId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v1/account/plugins/instances/{instanceId}/configuration","q":{"exist":["instance_id"]},"r":{"param":{"instanceId":"instance_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"account"},{"lit":"plugins"},{"lit":"instances"},{"var":"instance_id"},{"lit":"configuration"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":1}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /api/v1/account/plugins/instances/{instanceId}/configuration","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"instance_id","or":"instanceId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/api/v1/account/plugins/instances/{instanceId}/configuration","q":{"exist":["instance_id"]},"r":{"param":{"instanceId":"instance_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"account"},{"lit":"plugins"},{"lit":"instances"},{"var":"instance_id"},{"lit":"configuration"}],"t":{"req":{"configuration":"`reqdata.configuration`"},"res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"PATCH /api/v1/account/plugins/configuration","source":"openapi3","version":2},"g":{},"k":"http","m":"PATCH","o":"/api/v1/account/plugins/configuration","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"account"},{"lit":"plugins"},{"lit":"configuration"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"account_plugin_configuration_success","name__orig":"account_plugin_configuration_success","Name":"AccountPluginConfigurationSuccess","name_":"account_plugin_configuration_success","name-":"account-plugin-configuration-success","NAME":"ACCOUNT_PLUGIN_CONFIGURATION_SUCCESS","index$":4}, {"active":true,"entity":"account_plugin_configuration_success","key$":"BasicAccountPluginConfigurationSuccessFlow","kind":"basic","name":"BasicAccountPluginConfigurationSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"account_plugin_configuration_success_ref01","srcdatavar":"account_plugin_configuration_success_ref01_data","suffix":"_up0","textfield":"instanceName"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-account_plugin_configuration_success_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"account_plugin_configuration_success_ref01","srcdatavar":"account_plugin_configuration_success_ref01_data","suffix":"_dt0"},"m":{"id":"account_plugin_configuration_success01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-account_plugin_configuration_success_ref01"}}],"index$":1}]}, 'AccountPluginConfigurationSuccess', {"GET /api/v1/account/plugins/configuration":{"protocol":"http","parameters":[{"in":"query","name":"pluginName","required":false,"schema":{"type":"string"},"description":"Value `pluginName` taken from `GET /api/v1/account/plugins/instances`.","index$":0},{"in":"query","name":"instanceName","required":false,"schema":{"type":"string"},"description":"Value `instanceName` taken from `GET /api/v1/account/plugins/instances`.","index$":1},{"in":"query","name":"plugin_name","required":false,"deprecated":true,"schema":{"type":"string"},"description":"Legacy alias of `pluginName`. At least one of the two names is mandatory.","index$":2},{"in":"query","name":"instance_name","required":false,"deprecated":true,"schema":{"type":"string"},"description":"Legacy alias of `instanceName`.","index$":3}]},"GET /api/v1/account/plugins/instances/{instanceId}/configuration":{"protocol":"http","parameters":[{"name":"instanceId","in":"path","required":true,"description":"Stable identifier of the acquired plugin instance.","schema":{"type":"string"},"index$":0}]},"PATCH /api/v1/account/plugins/instances/{instanceId}/configuration":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","additionalProperties":false,"description":"Configuration PATCH body addressed by a stable plugin instanceId.","properties":{"configuration":{"type":"object","description":"Plugin-specific fields to merge into the saved configuration.","additionalProperties":true,"key$":"configuration"}},"required":["configuration"],"x-ref":"#/components/schemas/AccountPluginConfigurationByInstanceIdUpdateRequest","index$":1}}}},"parameters":[{"name":"instanceId","in":"path","required":true,"description":"Stable identifier of the acquired plugin instance.","schema":{"type":"string"},"index$":0}]},"PATCH /api/v1/account/plugins/configuration":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","description":"Update the configuration of a plugin instance using only human-readable names.\n\nHow to recover data:\n- use `GET /api/v1/account/plugins/instances` to get `pluginName` and `instanceName`\n- use `GET /api/v1/account/plugins/configuration?pluginName=...&instanceName=...` to read configurable fields and current values\n\nPATCH semantics:\n- `configuration` and merge-based: you can send only the fields to be modified or the complete object\n- if you send `users` for Telegram, the user list is completely replaced\n- if you send `channels` for Teams, the channel list is completely replaced\n\nSupported fields for plugins:\n- Email: `smtp_host`, `smtp_port`, `smtp_user`, `smtp_pass`, `smtp_security`, `from_name`, `test_mode_enabled`, `test_attempts_remaining`\n- WhatsApp: `access_token`, `phone_number_id`, `template_name`, `test_mode_enabled`, `test_attempts_remaining`\n- Telegram: `bot_token`, `enabled`, `users`\n- Teams: `method`, `webhook_url`, `client_id`, `client_secret`, `tenant_id`, `channels`\n- Condomatica: `api_key`, `codice_amministratore`, `enabled`\n- n8n: `url`, `auth_type`, `auth_value`, `enabled`\n- Zapier: `url`, `enabled`\n- Zammad: `url`, `apiKey`, `enabled`\n- Calendly: `bearerToken`, `enabled`\n- CalDAV Apple: `apple_id`, `app_password`, `enabled`\n- CalDAV Zimbra: `url`, `email`, `password`, `enabled`\n- Assieasy: `username`, `password`, `secret`, `smtpInstanceName`, `enabledTools`","properties":{"pluginName":{"description":"Value supplied for `pluginName` in the `AccountPluginConfigurationUpdateRequest` request.","type":"string","key$":"pluginName"},"instanceName":{"description":"Value supplied for `instanceName` in the `AccountPluginConfigurationUpdateRequest` request.","type":"string","key$":"instanceName"},"configuration":{"description":"Value supplied for `configuration` in the `AccountPluginConfigurationUpdateRequest` request.","type":"object","additionalProperties":true,"key$":"configuration"},"plugin_name":{"type":"string","deprecated":true,"description":"Legacy alias of `pluginName`.","key$":"plugin_name"},"instance_name":{"type":"string","deprecated":true,"description":"Legacy alias of `instanceName`.","key$":"instance_name"}},"required":["configuration"],"allOf":[{"anyOf":[{"required":["pluginName"]},{"required":["plugin_name"]}]},{"anyOf":[{"required":["instanceName"]},{"required":["instance_name"]}]}],"x-ref":"#/components/schemas/AccountPluginConfigurationUpdateRequest","index$":1},"examples":{"email":{"summary":"Update SMTP","value":{"pluginName":"Email","instanceName":"SMTP Produzione","configuration":{"smtp_host":"smtp.example.com","smtp_port":587,"smtp_security":"TLS"}}},"telegram":{"summary":"Update Telegram bots and replace users","value":{"pluginName":"Telegram","instanceName":"Notifiche Telegram","configuration":{"bot_token":"123456:ABC","users":[{"chat_id":"123456789","username":"mario","firstName":"Mario","lastName":"Rossi"}]}}},"teams":{"summary":"Updates Teams Graph and replaces channels","value":{"pluginName":"Teams","instanceName":"Teams Supporto","configuration":{"method":"graph","client_id":"client-id","client_secret":"client-secret","tenant_id":"tenant-id","channels":[{"channel_name":"Supporto","channel_id":"19:channel-id","webhook_url":"","team_id":"6c0d-team-id"}]}}},"assieasy":{"summary":"Update Assieasy","value":{"pluginName":"Assieasy","instanceName":"Assieasy Produzione","configuration":{"username":"api-user","password":"api-password","secret":"api-secret","smtpInstanceName":"SMTP Produzione","enabledTools":{"search_by_phone":true,"get_documents":true,"send_document":true,"get_policies":false}}}}}}}},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let account_plugin_configuration_success_ref01_data = Object.values(setup.data.existing.account_plugin_configuration_success)[0] as any

    // UPDATE
    const account_plugin_configuration_success_ref01_ent = client.AccountPluginConfigurationSuccess()
    const account_plugin_configuration_success_ref01_data_up0: any = {}

    const account_plugin_configuration_success_ref01_markdef_up0 = { name: 'instanceName', value: 'Mark01-account_plugin_configuration_success_ref01_' + setup.now }
    ;(account_plugin_configuration_success_ref01_data_up0 as any)[account_plugin_configuration_success_ref01_markdef_up0.name] = account_plugin_configuration_success_ref01_markdef_up0.value

    const account_plugin_configuration_success_ref01_resdata_up0 = (await account_plugin_configuration_success_ref01_ent.update(account_plugin_configuration_success_ref01_data_up0)).data()
    assert(null != account_plugin_configuration_success_ref01_resdata_up0)

    assert((account_plugin_configuration_success_ref01_resdata_up0 as any)[account_plugin_configuration_success_ref01_markdef_up0.name] === account_plugin_configuration_success_ref01_markdef_up0.value)


    // LOAD
    const account_plugin_configuration_success_ref01_match_dt0: any = {}
    const account_plugin_configuration_success_ref01_data_dt0 = (await account_plugin_configuration_success_ref01_ent.load(account_plugin_configuration_success_ref01_match_dt0)).data()
    assert(null != account_plugin_configuration_success_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/account_plugin_configuration_success/AccountPluginConfigurationSuccessTestData.json')

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
    ['account_plugin_configuration_success01','account_plugin_configuration_success02','account_plugin_configuration_success03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AI4CALL_TEST_ACCOUNT_PLUGIN_CONFIGURATION_SUCCESS_ENTID': idmap,
    'AI4CALL_TEST_LIVE': 'FALSE',
    'AI4CALL_TEST_EXPLAIN': 'FALSE',
    'AI4CALL_APIKEY': '',
  })

  idmap = env['AI4CALL_TEST_ACCOUNT_PLUGIN_CONFIGURATION_SUCCESS_ENTID']

  const live = 'TRUE' === env.AI4CALL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AI4CALL_TEST_ACCOUNT_PLUGIN_CONFIGURATION_SUCCESS_ENTID']
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
  
