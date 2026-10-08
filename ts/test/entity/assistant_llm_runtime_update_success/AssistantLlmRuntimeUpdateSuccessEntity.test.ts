

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


describe('AssistantLlmRuntimeUpdateSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
  afterEach(liveDelay('AI4CALL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Ai4callSDK.test()
    const ent = testsdk.AssistantLlmRuntimeUpdateSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'assistant_llm_runtime_update_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"apiKey":{"a":true,"h":"Api Key","n":"apiKey","r":false,"sh":"API key of the customer's LLM provider.","t":"`$STRING`","wo":true,"key$":"apiKey","index$":0},"assistantApiKey":{"a":true,"h":"Assistant Api Key","n":"assistantApiKey","r":true,"t":"`$STRING`","key$":"assistantApiKey","index$":1},"assistantId":{"a":true,"h":"Assistant Id","n":"assistantId","r":true,"t":"`$STRING`","key$":"assistantId","index$":2},"baseUrl":{"a":true,"h":"Base Url","n":"baseUrl","r":false,"sh":"Base custom URL of the LLM provider.","t":"`$STRING`","key$":"baseUrl","index$":3},"configuration":{"a":true,"h":"Configuration","n":"configuration","r":true,"sh":"Actual resulting LLM runtime configuration after merge and backend resolution.","t":"`$OBJECT`","key$":"configuration","index$":4},"engineCode":{"a":true,"h":"Engine Code","n":"engineCode","r":false,"sh":"LLM engine/provider code.","t":"`$STRING`","key$":"engineCode","index$":5},"modelCode":{"a":true,"h":"Model Code","n":"modelCode","r":false,"sh":"LLM model code.","t":"`$STRING`","key$":"modelCode","index$":6},"providerWalletId":{"a":true,"h":"Provider Wallet Id","n":"providerWalletId","r":false,"sh":"Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text.","t":"`$INTEGER`","key$":"providerWalletId","index$":7},"runtimeBinding":{"a":true,"h":"Runtime Binding","n":"runtimeBinding","r":true,"t":"`$OBJECT`","key$":"runtimeBinding","index$":8},"service":{"a":true,"h":"Service","n":"service","r":true,"t":"`$STRING`","key$":"service","index$":9},"sourceMode":{"a":true,"h":"Source Mode","n":"sourceMode","r":true,"sh":"Runtime sourcing mode.","t":"`$STRING`","key$":"sourceMode","index$":10}},"name":"assistant_llm_runtime_update_success","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /api/v1/assistants/{assistantId}/runtime/llm","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"205","k":"param","n":"assistant_id","or":"assistantId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/api/v1/assistants/{assistantId}/runtime/llm","q":{"exist":["assistant_id"]},"r":{"param":{"assistantId":"assistant_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"assistants"},{"var":"assistant_id"},{"lit":"runtime"},{"lit":"llm"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.assistant"]]},"key$":"assistant_llm_runtime_update_success","name__orig":"assistant_llm_runtime_update_success","Name":"AssistantLlmRuntimeUpdateSuccess","name_":"assistant_llm_runtime_update_success","name-":"assistant-llm-runtime-update-success","NAME":"ASSISTANT_LLM_RUNTIME_UPDATE_SUCCESS","index$":29}, {"active":true,"entity":"assistant_llm_runtime_update_success","key$":"BasicAssistantLlmRuntimeUpdateSuccessFlow","kind":"basic","name":"BasicAssistantLlmRuntimeUpdateSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"assistant_llm_runtime_update_success_ref01","srcdatavar":"assistant_llm_runtime_update_success_ref01_data","suffix":"_up0","textfield":"apiKey"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-assistant_llm_runtime_update_success_ref01"}}],"v":[],"index$":0}]}, 'AssistantLlmRuntimeUpdateSuccess', {"PATCH /api/v1/assistants/{assistantId}/runtime/llm":{"protocol":"http","requestBody":{"required":true,"description":"Choose one of the examples below based on the mode you want to set.\n\n- `ai4call`: selection of a model from the AI4Call catalogue\n- `customer`: direct configuration with the customer's provider","content":{"application/json":{"schema":{"type":"object","description":"PATCH merge the assistant's LLM configuration.\n\nOperational rules:\n- `sourceMode` and always mandatory\n- omitted fields retain the current value already saved, if present\n- in `ai4call` the backend resolves the configuration starting from `modelCode`\n- in `customer` the configuration uses direct customer parameters\n\nApplication constraints:\n- `customer`: `engineCode` and `modelCode` must be completed after the merge\n- `customer` with `ollama`: `baseUrl` must be completed after the merge\n- `customer` with engines other than `ollama`: `API key` must be completed after the merge\n- `ai4call`: use `modelCode`; `engineCode` is optional and serves only as a consistency check","properties":{"sourceMode":{"type":"string","enum":["ai4call","customer"],"description":"Runtime sourcing mode.\n- `ai4call`: uses a model present in the customer's AI4Call price lists\n- `customer`: Use direct customer credentials and configuration","example":"customer","key$":"sourceMode"},"engineCode":{"type":"string","nullable":true,"description":"LLM engine/provider code.\nIn `customer` identifies the provider to use.\nIn `ai4call` it is optional and, if sent, is only used to verify that the `modelCode` belongs to that engine.","example":"openai","key$":"engineCode"},"modelCode":{"type":"string","nullable":true,"description":"LLM model code.\nIn `ai4call` is the main parameter to select the model from the AI4Call catalog.\nIn `customer` it must identify the valid model for the chosen provider.","example":"gpt-4.1-mini","key$":"modelCode"},"apiKey":{"type":"string","nullable":true,"writeOnly":true,"description":"API key of the customer's LLM provider.\nIt must be sent in `customer` for providers who request it.\nFor `ollama` it is normally not needed.\nIn `ai4call` it should be omitted.","example":"sk-proj-example","key$":"apiKey"},"baseUrl":{"type":"string","nullable":true,"description":"Base custom URL of the LLM provider.\nTypically used for `ollama` or self-hosted OpenAI compatible endpoints.\nIn `customer` with `ollama` and mandatory.\nIn `ai4call` it should be omitted.","example":"http://ollama.local:11434/v1","key$":"baseUrl"},"providerWalletId":{"type":"integer","nullable":true,"description":"Id of a credential saved in the customer's provider wallet, used instead of sending\n`apiKey` in clear text.\n\nWhen present, the credentials are read from the wallet, applied to the runtime and the\nassociation is stored on the assistant. `null` removes the association and falls back to\nthe values sent explicitly.\n\nWallet credentials are created and managed from the AI4CALL portal.","example":42,"key$":"providerWalletId"}},"required":["sourceMode"],"x-ref":"#/components/schemas/AssistantLlmRuntimeUpdateRequest","index$":1},"examples":{"ai4call":{"summary":"AI4Call model selection","description":"Use a model present in the authenticated customer's AI4Call catalog.","value":{"sourceMode":"ai4call","modelCode":"gpt-4.1-mini"}},"customerOpenAi":{"summary":"OpenAI customer configuration","description":"Direct configuration with OpenAI provider and customer API key.","value":{"sourceMode":"customer","engineCode":"openai","modelCode":"gpt-4.1-mini","apiKey":"sk-proj-example"}},"customerOllama":{"summary":"Ollama customer configuration","description":"Direct configuration for OpenAI compatible Ollama endpoints.","value":{"sourceMode":"customer","engineCode":"ollama","modelCode":"llama3.1:8b","baseUrl":"http://ollama.local:11434/v1"}}}}}},"parameters":[{"name":"assistantId","in":"path","required":true,"description":"Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.","schema":{"type":"string","minLength":1,"maxLength":128,"pattern":"^[A-Za-z0-9_-]+$"},"example":"205","x-ref":"#/components/parameters/AssistantIdentifier","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let assistant_llm_runtime_update_success_ref01_data = Object.values(setup.data.existing.assistant_llm_runtime_update_success)[0] as any

    // UPDATE
    const assistant_llm_runtime_update_success_ref01_ent = client.AssistantLlmRuntimeUpdateSuccess()
    const assistant_llm_runtime_update_success_ref01_data_up0: any = {}

    const assistant_llm_runtime_update_success_ref01_markdef_up0 = { name: 'apiKey', value: 'Mark01-assistant_llm_runtime_update_success_ref01_' + setup.now }
    ;(assistant_llm_runtime_update_success_ref01_data_up0 as any)[assistant_llm_runtime_update_success_ref01_markdef_up0.name] = assistant_llm_runtime_update_success_ref01_markdef_up0.value

    const assistant_llm_runtime_update_success_ref01_resdata_up0 = (await assistant_llm_runtime_update_success_ref01_ent.update(assistant_llm_runtime_update_success_ref01_data_up0)).data()
    assert(null != assistant_llm_runtime_update_success_ref01_resdata_up0)

    assert((assistant_llm_runtime_update_success_ref01_resdata_up0 as any)[assistant_llm_runtime_update_success_ref01_markdef_up0.name] === assistant_llm_runtime_update_success_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/assistant_llm_runtime_update_success/AssistantLlmRuntimeUpdateSuccessTestData.json')

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
    ['assistant_llm_runtime_update_success01','assistant_llm_runtime_update_success02','assistant_llm_runtime_update_success03','assistant01','assistant02','assistant03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AI4CALL_TEST_ASSISTANT_LLM_RUNTIME_UPDATE_SUCCESS_ENTID': idmap,
    'AI4CALL_TEST_LIVE': 'FALSE',
    'AI4CALL_TEST_EXPLAIN': 'FALSE',
    'AI4CALL_APIKEY': '',
  })

  idmap = env['AI4CALL_TEST_ASSISTANT_LLM_RUNTIME_UPDATE_SUCCESS_ENTID']

  const live = 'TRUE' === env.AI4CALL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AI4CALL_TEST_ASSISTANT_LLM_RUNTIME_UPDATE_SUCCESS_ENTID']
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
  
