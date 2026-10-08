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
(0, node_test_1.describe)('AssistantTtsRuntimeUpdateSuccessEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('AI4CALL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.Ai4callSDK.test();
        const ent = testsdk.AssistantTtsRuntimeUpdateSuccess();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE;
        for (const op of ['update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'assistant_tts_runtime_update_success.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "apiKey": { "a": true, "h": "Api Key", "n": "apiKey", "r": false, "sh": "API key of the customer's TTS provider.", "t": "`$STRING`", "wo": true, "key$": "apiKey", "index$": 0 }, "assistantApiKey": { "a": true, "h": "Assistant Api Key", "n": "assistantApiKey", "r": true, "t": "`$STRING`", "key$": "assistantApiKey", "index$": 1 }, "assistantId": { "a": true, "h": "Assistant Id", "n": "assistantId", "r": true, "t": "`$STRING`", "key$": "assistantId", "index$": 2 }, "configuration": { "a": true, "h": "Configuration", "n": "configuration", "r": true, "sh": "Actual resulting TTS runtime configuration after merge and backend resolution.", "t": "`$OBJECT`", "key$": "configuration", "index$": 3 }, "engineCode": { "a": true, "h": "Engine Code", "n": "engineCode", "r": false, "sh": "TTS engine/provider code.", "t": "`$STRING`", "key$": "engineCode", "index$": 4 }, "providerWalletId": { "a": true, "h": "Provider Wallet Id", "n": "providerWalletId", "r": false, "sh": "Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text.", "t": "`$INTEGER`", "key$": "providerWalletId", "index$": 5 }, "region": { "a": true, "h": "Region", "n": "region", "r": false, "sh": "Region/provider area requested by some engine customers, in particular Azure.", "t": "`$STRING`", "key$": "region", "index$": 6 }, "runtimeBinding": { "a": true, "h": "Runtime Binding", "n": "runtimeBinding", "r": true, "t": "`$OBJECT`", "key$": "runtimeBinding", "index$": 7 }, "service": { "a": true, "h": "Service", "n": "service", "r": true, "t": "`$STRING`", "key$": "service", "index$": 8 }, "sourceMode": { "a": true, "h": "Source Mode", "n": "sourceMode", "r": true, "sh": "Runtime sourcing mode.", "t": "`$STRING`", "key$": "sourceMode", "index$": 9 }, "voiceCode": { "a": true, "h": "Voice Code", "n": "voiceCode", "r": false, "sh": "TTS voice code.", "t": "`$STRING`", "key$": "voiceCode", "index$": 10 } }, "name": "assistant_tts_runtime_update_success", "op": { "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /api/v1/assistants/{assistantId}/runtime/tts", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "205", "k": "param", "n": "assistant_id", "or": "assistantId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/api/v1/assistants/{assistantId}/runtime/tts", "q": { "exist": ["assistant_id"] }, "r": { "param": { "assistantId": "assistant_id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "assistants" }, { "var": "assistant_id" }, { "lit": "runtime" }, { "lit": "tts" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.assistant"]] }, "key$": "assistant_tts_runtime_update_success", "name__orig": "assistant_tts_runtime_update_success", "Name": "AssistantTtsRuntimeUpdateSuccess", "name_": "assistant_tts_runtime_update_success", "name-": "assistant-tts-runtime-update-success", "NAME": "ASSISTANT_TTS_RUNTIME_UPDATE_SUCCESS", "index$": 42 }, { "active": true, "entity": "assistant_tts_runtime_update_success", "key$": "BasicAssistantTtsRuntimeUpdateSuccessFlow", "kind": "basic", "name": "BasicAssistantTtsRuntimeUpdateSuccessFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "assistant_tts_runtime_update_success_ref01", "srcdatavar": "assistant_tts_runtime_update_success_ref01_data", "suffix": "_up0", "textfield": "apiKey" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-assistant_tts_runtime_update_success_ref01" } }], "v": [] }] }, 'AssistantTtsRuntimeUpdateSuccess', { "PATCH /api/v1/assistants/{assistantId}/runtime/tts": { "protocol": "http", "requestBody": { "required": true, "description": "Choose one of the examples below based on the mode you want to set.\n\n- `ai4call`: selection of an item from the AI4Call catalogue\n- `customer`: direct configuration with customer provider parameters", "content": { "application/json": { "schema": { "type": "object", "description": "PATCH merge of the assistant's TTS configuration.\n\nOperational rules:\n- `sourceMode` and always mandatory\n- omitted fields retain the current value already saved, if present\n- in `ai4call` the backend resolves the configuration starting from `voiceCode`\n- in `customer` the configuration uses direct customer parameters\n\nApplication constraints:\n- `customer`: `engineCode`, `voiceCode` and `API key` must be completed after the merge\n- `customer` with Azure: `region` must be completed after the merge\n- `ai4call`: use `voiceCode`; `engineCode` is optional and serves only as a consistency check", "properties": { "sourceMode": { "type": "string", "enum": ["ai4call", "customer"], "description": "Runtime sourcing mode.\n- `ai4call`: uses a provider/model present in the customer's AI4Call price lists\n- `customer`: Use direct customer credentials and configuration", "example": "customer", "key$": "sourceMode" }, "engineCode": { "type": "string", "nullable": true, "description": "TTS engine/provider code.\nIn `customer` identifies the engine to use.\nIn `ai4call` it is optional and, if sent, is only used to verify that the `voiceCode` belongs to that engine.", "example": "tts_live_azure_multi", "key$": "engineCode" }, "voiceCode": { "type": "string", "nullable": true, "description": "TTS voice code.\nIn `ai4call` is the main parameter to select the entry from the AI4Call catalog.\nIn `customer` it must identify the valid entry for the chosen provider/engine.", "example": "it-IT-DiegoNeural", "key$": "voiceCode" }, "apiKey": { "type": "string", "nullable": true, "writeOnly": true, "description": "API key of the customer's TTS provider.\nIt should only be sent in `customer`.\nIn `ai4call` it should be omitted.", "example": "azure_customer_key_123", "key$": "apiKey" }, "region": { "type": "string", "nullable": true, "description": "Region/provider area requested by some engine customers, in particular Azure.\nRequired for Azure in `customer`.\nIn `ai4call` it should be omitted.", "example": "westeurope", "key$": "region" }, "providerWalletId": { "type": "integer", "nullable": true, "description": "Id of a credential saved in the customer's provider wallet, used instead of sending\n`apiKey` in clear text.\n\nWhen present, the credentials are read from the wallet, applied to the runtime and the\nassociation is stored on the assistant. `null` removes the association and falls back to\nthe values sent explicitly.\n\nWallet credentials are created and managed from the AI4CALL portal.", "example": 42, "key$": "providerWalletId" } }, "required": ["sourceMode"], "x-ref": "#/components/schemas/AssistantTtsRuntimeUpdateRequest", "index$": 1 }, "examples": { "ai4call": { "summary": "AI4Call voice selection", "description": "Use an entry in the authenticated customer's AI4Call catalog.", "value": { "sourceMode": "ai4call", "voiceCode": "it-IT-DiegoNeural" } }, "customerAzure": { "summary": "Azure customer configuration", "description": "Direct configuration with customer credentials and Azure region.", "value": { "sourceMode": "customer", "engineCode": "tts_live_azure_multi", "voiceCode": "it-IT-DiegoNeural", "apiKey": "azure_customer_key_123", "region": "westeurope" } } } } } }, "parameters": [{ "name": "assistantId", "in": "path", "required": true, "description": "Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.", "schema": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^[A-Za-z0-9_-]+$" }, "example": "205", "x-ref": "#/components/parameters/AssistantIdentifier", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let assistant_tts_runtime_update_success_ref01_data = Object.values(setup.data.existing.assistant_tts_runtime_update_success)[0];
        // UPDATE
        const assistant_tts_runtime_update_success_ref01_ent = client.AssistantTtsRuntimeUpdateSuccess();
        const assistant_tts_runtime_update_success_ref01_data_up0 = {};
        const assistant_tts_runtime_update_success_ref01_markdef_up0 = { name: 'apiKey', value: 'Mark01-assistant_tts_runtime_update_success_ref01_' + setup.now };
        assistant_tts_runtime_update_success_ref01_data_up0[assistant_tts_runtime_update_success_ref01_markdef_up0.name] = assistant_tts_runtime_update_success_ref01_markdef_up0.value;
        const assistant_tts_runtime_update_success_ref01_resdata_up0 = (await assistant_tts_runtime_update_success_ref01_ent.update(assistant_tts_runtime_update_success_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != assistant_tts_runtime_update_success_ref01_resdata_up0);
        (0, node_assert_1.default)(assistant_tts_runtime_update_success_ref01_resdata_up0[assistant_tts_runtime_update_success_ref01_markdef_up0.name] === assistant_tts_runtime_update_success_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/assistant_tts_runtime_update_success/AssistantTtsRuntimeUpdateSuccessTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.Ai4callSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['assistant_tts_runtime_update_success01', 'assistant_tts_runtime_update_success02', 'assistant_tts_runtime_update_success03', 'assistant01', 'assistant02', 'assistant03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'AI4CALL_TEST_ASSISTANT_TTS_RUNTIME_UPDATE_SUCCESS_ENTID': idmap,
        'AI4CALL_TEST_LIVE': 'FALSE',
        'AI4CALL_TEST_EXPLAIN': 'FALSE',
        'AI4CALL_APIKEY': '',
    });
    idmap = env['AI4CALL_TEST_ASSISTANT_TTS_RUNTIME_UPDATE_SUCCESS_ENTID'];
    const live = 'TRUE' === env.AI4CALL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['AI4CALL_TEST_ASSISTANT_TTS_RUNTIME_UPDATE_SUCCESS_ENTID'];
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
//# sourceMappingURL=AssistantTtsRuntimeUpdateSuccessEntity.test.js.map