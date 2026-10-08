

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


describe('PortalLoginSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
  afterEach(liveDelay('AI4CALL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Ai4callSDK.test()
    const ent = testsdk.PortalLoginSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'portal_login_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"client":{"a":true,"h":"Client","n":"client","r":true,"sh":"Customer profile returned after successful portal credential verification.","t":"`$OBJECT`","key$":"client","index$":0},"email":{"a":true,"fo":"email","h":"Email","n":"email","r":true,"sh":"Portal customer email.","t":"`$STRING`","key$":"email","index$":1},"portalApiKey":{"a":true,"h":"Portal Api Key","n":"portalApiKey","r":true,"sh":"Static portal API key associated with the customer account.","t":"`$STRING`","key$":"portalApiKey","index$":2}},"name":"portal_login_success","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v1/auth/portal/login","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/v1/auth/portal/login","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"auth"},{"lit":"portal"},{"lit":"login"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"portal_login_success","name__orig":"portal_login_success","Name":"PortalLoginSuccess","name_":"portal_login_success","name-":"portal-login-success","NAME":"PORTAL_LOGIN_SUCCESS","index$":55}, {"active":true,"entity":"portal_login_success","key$":"BasicPortalLoginSuccessFlow","kind":"basic","name":"BasicPortalLoginSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"portal_login_success_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'PortalLoginSuccess', {"POST /api/v1/auth/portal/login":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"description":"Credentials used to verify a portal customer. This request does not create a session or issue an access token.","type":"object","properties":{"email":{"description":"Portal customer email.","type":"string","format":"email","key$":"email"},"portalApiKey":{"description":"Static portal API key associated with the customer account.","type":"string","minLength":10,"key$":"portalApiKey"}},"required":["email","portalApiKey"],"x-ref":"#/components/schemas/PortalLoginRequest","index$":1},"example":{"email":"developer@example.com","portalApiKey":"portal_demo_key_123456789"}}}},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const portal_login_success_ref01_ent = client.PortalLoginSuccess()
    let portal_login_success_ref01_data = setup.data.new.portal_login_success['portal_login_success_ref01']

    portal_login_success_ref01_data = (await portal_login_success_ref01_ent.create(portal_login_success_ref01_data)).data()
    assert(null != portal_login_success_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/portal_login_success/PortalLoginSuccessTestData.json')

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
    ['portal_login_success01','portal_login_success02','portal_login_success03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AI4CALL_TEST_PORTAL_LOGIN_SUCCESS_ENTID': idmap,
    'AI4CALL_TEST_LIVE': 'FALSE',
    'AI4CALL_TEST_EXPLAIN': 'FALSE',
    'AI4CALL_APIKEY': '',
  })

  idmap = env['AI4CALL_TEST_PORTAL_LOGIN_SUCCESS_ENTID']

  const live = 'TRUE' === env.AI4CALL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AI4CALL_TEST_PORTAL_LOGIN_SUCCESS_ENTID']
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
  
