"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('AssistantVoiceToVoiceRuntimeUpdateSuccessEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('AI4CALL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.Ai4callSDK.test();
        const ent = testsdk.AssistantVoiceToVoiceRuntimeUpdateSuccess();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE;
        for (const op of ['update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'assistant_voice_to_voice_runtime_update_success.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "apiKey": { "a": true, "h": "Api Key", "n": "apiKey", "r": false, "sh": "Customer key provider API.", "t": "`$STRING`", "wo": true, "key$": "apiKey", "index$": 0 }, "assistantApiKey": { "a": true, "h": "Assistant Api Key", "n": "assistantApiKey", "r": true, "t": "`$STRING`", "key$": "assistantApiKey", "index$": 1 }, "assistantId": { "a": true, "h": "Assistant Id", "n": "assistantId", "r": true, "t": "`$STRING`", "key$": "assistantId", "index$": 2 }, "baseUrl": { "a": true, "h": "Base Url", "n": "baseUrl", "r": false, "sh": "Base custom URL.", "t": "`$STRING`", "key$": "baseUrl", "index$": 3 }, "configuration": { "a": true, "h": "Configuration", "n": "configuration", "r": true, "t": "`$OBJECT`", "key$": "configuration", "index$": 4 }, "engineCode": { "a": true, "h": "Engine Code", "n": "engineCode", "r": false, "sh": "Provider/engine voice LLM.", "t": "`$STRING`", "key$": "engineCode", "index$": 5 }, "modelCode": { "a": true, "h": "Model Code", "n": "modelCode", "r": false, "sh": "LLM voice model code.", "t": "`$STRING`", "key$": "modelCode", "index$": 6 }, "prompt": { "a": true, "h": "Prompt", "n": "prompt", "r": false, "sh": "Main prompt of the audio-to-audio runtime.", "t": "`$STRING`", "key$": "prompt", "index$": 7 }, "providerWalletId": { "a": true, "h": "Provider Wallet Id", "n": "providerWalletId", "r": false, "sh": "Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text.", "t": "`$INTEGER`", "key$": "providerWalletId", "index$": 8 }, "service": { "a": true, "h": "Service", "n": "service", "r": true, "t": "`$STRING`", "key$": "service", "index$": 9 }, "voiceCode": { "a": true, "h": "Voice Code", "n": "voiceCode", "r": false, "sh": "Model item code.", "t": "`$STRING`", "key$": "voiceCode", "index$": 10 } }, "name": "assistant_voice_to_voice_runtime_update_success", "op": { "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /api/v1/assistants/{assistantId}/runtime/audio-to-audio", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "205", "k": "param", "n": "assistant_id", "or": "assistantId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/api/v1/assistants/{assistantId}/runtime/audio-to-audio", "q": { "exist": ["assistant_id"] }, "r": { "param": { "assistantId": "assistant_id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "assistants" }, { "var": "assistant_id" }, { "lit": "runtime" }, { "lit": "audio-to-audio" }], "t": { "req": { "apiKey": "`reqdata.api_key`", "baseUrl": "`reqdata.base_url`", "engineCode": "`reqdata.engine_code`", "modelCode": "`reqdata.model_code`", "prompt": "`reqdata.prompt`", "providerWalletId": "`reqdata.provider_wallet_id`", "voiceCode": "`reqdata.voice_code`" }, "res": "`body.data`" }, "index$": 0 }, { "a": true, "co": { "id": "PATCH /api/v1/assistants/{assistantId}/runtime/voice-to-voice", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "205", "k": "param", "n": "assistant_id", "or": "assistantId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/api/v1/assistants/{assistantId}/runtime/voice-to-voice", "q": { "exist": ["assistant_id"] }, "r": { "param": { "assistantId": "assistant_id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "assistants" }, { "var": "assistant_id" }, { "lit": "runtime" }, { "lit": "voice-to-voice" }], "t": { "req": { "apiKey": "`reqdata.api_key`", "baseUrl": "`reqdata.base_url`", "engineCode": "`reqdata.engine_code`", "modelCode": "`reqdata.model_code`", "prompt": "`reqdata.prompt`", "providerWalletId": "`reqdata.provider_wallet_id`", "voiceCode": "`reqdata.voice_code`" }, "res": "`body.data`" }, "index$": 1 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.assistant"]] }, "key$": "assistant_voice_to_voice_runtime_update_success", "name__orig": "assistant_voice_to_voice_runtime_update_success", "Name": "AssistantVoiceToVoiceRuntimeUpdateSuccess", "name_": "assistant_voice_to_voice_runtime_update_success", "name-": "assistant-voice-to-voice-runtime-update-success", "NAME": "ASSISTANT_VOICE_TO_VOICE_RUNTIME_UPDATE_SUCCESS", "index$": 43 }, { "active": true, "entity": "assistant_voice_to_voice_runtime_update_success", "key$": "BasicAssistantVoiceToVoiceRuntimeUpdateSuccessFlow", "kind": "basic", "name": "BasicAssistantVoiceToVoiceRuntimeUpdateSuccessFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "assistant_voice_to_voice_runtime_update_success_ref01", "srcdatavar": "assistant_voice_to_voice_runtime_update_success_ref01_data", "suffix": "_up0", "textfield": "apiKey" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-assistant_voice_to_voice_runtime_update_success_ref01" } }], "v": [] }] }, 'AssistantVoiceToVoiceRuntimeUpdateSuccess', { "PATCH /api/v1/assistants/{assistantId}/runtime/audio-to-audio": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "additionalProperties": false, "description": "PATCH merge of the audio-to-audio runtime configuration.\n\nUpdate the server's JSON `configType: voice-llm`. At least one field\nbetween `engineCode`, `modelCode`, `voiceCode`, `providerWalletId`, `apiKey`, `baseUrl`\nor `prompt` must be present.", "properties": { "engineCode": { "type": "string", "description": "Provider/engine voice LLM.", "example": "openai", "key$": "engineCode" }, "modelCode": { "type": "string", "description": "LLM voice model code.", "example": "gpt-4o-realtime-preview", "key$": "modelCode" }, "voiceCode": { "type": "string", "description": "Model item code.", "example": "alloy", "key$": "voiceCode" }, "apiKey": { "type": "string", "nullable": true, "writeOnly": true, "description": "Customer key provider API. Send `null` to remove it from the JSON.", "key$": "apiKey" }, "baseUrl": { "type": "string", "nullable": true, "description": "Base custom URL. Send `null` to remove it from the JSON.", "key$": "baseUrl" }, "prompt": { "type": "string", "description": "Main prompt of the audio-to-audio runtime.", "key$": "prompt" }, "providerWalletId": { "type": "integer", "nullable": true, "description": "Id of a credential saved in the customer's provider wallet, used instead of sending\n`apiKey` in clear text.\n\nWhen present, the credentials are read from the wallet, applied to the runtime and the\nassociation is stored on the assistant. `null` removes the association and falls back to\nthe values sent explicitly.\n\nWallet credentials are created and managed from the AI4CALL portal.", "example": 42, "key$": "providerWalletId" } }, "x-ref": "#/components/schemas/AssistantVoiceToVoiceRuntimeUpdateRequest", "index$": 1 }, "example": { "engineCode": "openai", "modelCode": "gpt-4o-realtime-preview", "voiceCode": "alloy" } } } }, "parameters": [{ "name": "assistantId", "in": "path", "required": true, "description": "Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.", "schema": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^[A-Za-z0-9_-]+$" }, "example": "205", "x-ref": "#/components/parameters/AssistantIdentifier", "index$": 0 }] }, "PATCH /api/v1/assistants/{assistantId}/runtime/voice-to-voice": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "additionalProperties": false, "description": "PATCH merge of the audio-to-audio runtime configuration.\n\nUpdate the server's JSON `configType: voice-llm`. At least one field\nbetween `engineCode`, `modelCode`, `voiceCode`, `providerWalletId`, `apiKey`, `baseUrl`\nor `prompt` must be present.", "properties": { "engineCode": { "type": "string", "description": "Provider/engine voice LLM.", "example": "openai", "key$": "engineCode" }, "modelCode": { "type": "string", "description": "LLM voice model code.", "example": "gpt-4o-realtime-preview", "key$": "modelCode" }, "voiceCode": { "type": "string", "description": "Model item code.", "example": "alloy", "key$": "voiceCode" }, "apiKey": { "type": "string", "nullable": true, "writeOnly": true, "description": "Customer key provider API. Send `null` to remove it from the JSON.", "key$": "apiKey" }, "baseUrl": { "type": "string", "nullable": true, "description": "Base custom URL. Send `null` to remove it from the JSON.", "key$": "baseUrl" }, "prompt": { "type": "string", "description": "Main prompt of the audio-to-audio runtime.", "key$": "prompt" }, "providerWalletId": { "type": "integer", "nullable": true, "description": "Id of a credential saved in the customer's provider wallet, used instead of sending\n`apiKey` in clear text.\n\nWhen present, the credentials are read from the wallet, applied to the runtime and the\nassociation is stored on the assistant. `null` removes the association and falls back to\nthe values sent explicitly.\n\nWallet credentials are created and managed from the AI4CALL portal.", "example": 42, "key$": "providerWalletId" } }, "x-ref": "#/components/schemas/AssistantVoiceToVoiceRuntimeUpdateRequest", "index$": 1 }, "example": { "engineCode": "openai", "modelCode": "gpt-4o-realtime-preview", "voiceCode": "alloy" } } } }, "parameters": [{ "name": "assistantId", "in": "path", "required": true, "description": "Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.", "schema": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^[A-Za-z0-9_-]+$" }, "example": "205", "x-ref": "#/components/parameters/AssistantIdentifier", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let assistant_voice_to_voice_runtime_update_success_ref01_data = Object.values(setup.data.existing.assistant_voice_to_voice_runtime_update_success)[0];
        // UPDATE
        const assistant_voice_to_voice_runtime_update_success_ref01_ent = client.AssistantVoiceToVoiceRuntimeUpdateSuccess();
        const assistant_voice_to_voice_runtime_update_success_ref01_data_up0 = {};
        const assistant_voice_to_voice_runtime_update_success_ref01_markdef_up0 = { name: 'apiKey', value: 'Mark01-assistant_voice_to_voice_runtime_update_success_ref01_' + setup.now };
        assistant_voice_to_voice_runtime_update_success_ref01_data_up0[assistant_voice_to_voice_runtime_update_success_ref01_markdef_up0.name] = assistant_voice_to_voice_runtime_update_success_ref01_markdef_up0.value;
        const assistant_voice_to_voice_runtime_update_success_ref01_resdata_up0 = (await assistant_voice_to_voice_runtime_update_success_ref01_ent.update(assistant_voice_to_voice_runtime_update_success_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != assistant_voice_to_voice_runtime_update_success_ref01_resdata_up0);
        (0, node_assert_1.default)(assistant_voice_to_voice_runtime_update_success_ref01_resdata_up0[assistant_voice_to_voice_runtime_update_success_ref01_markdef_up0.name] === assistant_voice_to_voice_runtime_update_success_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/assistant_voice_to_voice_runtime_update_success/AssistantVoiceToVoiceRuntimeUpdateSuccessTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.Ai4callSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['assistant_voice_to_voice_runtime_update_success01', 'assistant_voice_to_voice_runtime_update_success02', 'assistant_voice_to_voice_runtime_update_success03', 'assistant01', 'assistant02', 'assistant03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'AI4CALL_TEST_ASSISTANT_VOICE_TO_VOICE_RUNTIME_UPDATE_SUCCESS_ENTID': idmap,
        'AI4CALL_TEST_LIVE': 'FALSE',
        'AI4CALL_TEST_EXPLAIN': 'FALSE',
        'AI4CALL_APIKEY': '',
    });
    idmap = env['AI4CALL_TEST_ASSISTANT_VOICE_TO_VOICE_RUNTIME_UPDATE_SUCCESS_ENTID'];
    const live = 'TRUE' === env.AI4CALL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['AI4CALL_TEST_ASSISTANT_VOICE_TO_VOICE_RUNTIME_UPDATE_SUCCESS_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.Ai4callSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
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
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=AssistantVoiceToVoiceRuntimeUpdateSuccessEntity.test.js.map