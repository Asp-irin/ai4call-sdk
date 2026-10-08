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
(0, node_test_1.describe)('AssistantDtmfRuntimeUpdateSuccessEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('AI4CALL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.Ai4callSDK.test();
        const ent = testsdk.AssistantDtmfRuntimeUpdateSuccess();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE;
        for (const op of ['update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'assistant_dtmf_runtime_update_success.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "acceptTimeout": { "a": true, "h": "Accept Timeout", "n": "acceptTimeout", "r": false, "sh": "Value supplied for `acceptTimeout` in the `AssistantDtmfRuntimeUpdateRequest` request.", "t": "`$INTEGER`", "key$": "acceptTimeout", "index$": 0 }, "assistantApiKey": { "a": true, "h": "Assistant Api Key", "n": "assistantApiKey", "r": true, "t": "`$STRING`", "key$": "assistantApiKey", "index$": 1 }, "assistantId": { "a": true, "h": "Assistant Id", "n": "assistantId", "r": true, "t": "`$STRING`", "key$": "assistantId", "index$": 2 }, "configuration": { "a": true, "h": "Configuration", "n": "configuration", "r": true, "t": "`$OBJECT`", "key$": "configuration", "index$": 3 }, "enabled": { "a": true, "h": "Enabled", "n": "enabled", "r": false, "sh": "Enable or disable DTMF reception.", "t": "`$BOOLEAN`", "key$": "enabled", "index$": 4 }, "maxLength": { "a": true, "h": "Max Length", "n": "maxLength", "r": false, "sh": "Value supplied for `maxLength` in the `AssistantDtmfRuntimeUpdateRequest` request.", "t": "`$INTEGER`", "key$": "maxLength", "index$": 5 }, "minLength": { "a": true, "h": "Min Length", "n": "minLength", "r": false, "sh": "Value supplied for `minLength` in the `AssistantDtmfRuntimeUpdateRequest` request.", "t": "`$INTEGER`", "key$": "minLength", "index$": 6 }, "playEnabled": { "a": true, "h": "Play Enabled", "n": "playEnabled", "r": false, "sh": "Enable or disable DTMF sending during the call.", "t": "`$BOOLEAN`", "key$": "playEnabled", "index$": 7 }, "service": { "a": true, "h": "Service", "n": "service", "r": true, "t": "`$STRING`", "key$": "service", "index$": 8 }, "terminationChars": { "a": true, "h": "Termination Chars", "n": "terminationChars", "r": false, "sh": "Value supplied for `terminationChars` in the `AssistantDtmfRuntimeUpdateRequest` request.", "t": "`$STRING`", "key$": "terminationChars", "index$": 9 } }, "name": "assistant_dtmf_runtime_update_success", "op": { "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /api/v1/assistants/{assistantId}/runtime/dtmf", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "205", "k": "param", "n": "assistant_id", "or": "assistantId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/api/v1/assistants/{assistantId}/runtime/dtmf", "q": { "exist": ["assistant_id"] }, "r": { "param": { "assistantId": "assistant_id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "assistants" }, { "var": "assistant_id" }, { "lit": "runtime" }, { "lit": "dtmf" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.assistant"]] }, "key$": "assistant_dtmf_runtime_update_success", "name__orig": "assistant_dtmf_runtime_update_success", "Name": "AssistantDtmfRuntimeUpdateSuccess", "name_": "assistant_dtmf_runtime_update_success", "name-": "assistant-dtmf-runtime-update-success", "NAME": "ASSISTANT_DTMF_RUNTIME_UPDATE_SUCCESS", "index$": 24 }, { "active": true, "entity": "assistant_dtmf_runtime_update_success", "key$": "BasicAssistantDtmfRuntimeUpdateSuccessFlow", "kind": "basic", "name": "BasicAssistantDtmfRuntimeUpdateSuccessFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "assistant_dtmf_runtime_update_success_ref01", "srcdatavar": "assistant_dtmf_runtime_update_success_ref01_data", "suffix": "_up0", "textfield": "assistantApiKey" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-assistant_dtmf_runtime_update_success_ref01" } }], "v": [] }] }, 'AssistantDtmfRuntimeUpdateSuccess', { "PATCH /api/v1/assistants/{assistantId}/runtime/dtmf": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "description": "PATCH merge of the assistant's DTMF configuration.\n\nOperational rules:\n- at least one of `enabled`, `playEnabled`, `acceptTimeout`, `minLength`, `maxLength`, `terminationChars` must be present\n- omitted fields retain the current value\n- by sending one of the DTMF settings with `enabled` omitted, DTMF is considered enabled\n- `enabled: false` resets `acceptTimeout`, `minLength`, `maxLength` and `terminationChars`\n- `playEnabled` controls DTMF sending during the call", "properties": { "enabled": { "type": "boolean", "description": "Enable or disable DTMF reception.", "key$": "enabled" }, "playEnabled": { "type": "boolean", "description": "Enable or disable DTMF sending during the call.", "key$": "playEnabled" }, "acceptTimeout": { "description": "Value supplied for `acceptTimeout` in the `AssistantDtmfRuntimeUpdateRequest` request.", "type": "integer", "nullable": true, "minimum": 0, "key$": "acceptTimeout" }, "minLength": { "description": "Value supplied for `minLength` in the `AssistantDtmfRuntimeUpdateRequest` request.", "type": "integer", "nullable": true, "minimum": 0, "key$": "minLength" }, "maxLength": { "description": "Value supplied for `maxLength` in the `AssistantDtmfRuntimeUpdateRequest` request.", "type": "integer", "nullable": true, "minimum": 0, "key$": "maxLength" }, "terminationChars": { "description": "Value supplied for `terminationChars` in the `AssistantDtmfRuntimeUpdateRequest` request.", "type": "string", "nullable": true, "key$": "terminationChars" } }, "x-ref": "#/components/schemas/AssistantDtmfRuntimeUpdateRequest", "index$": 1 }, "examples": { "enableDtmf": { "summary": "Enable DTMF and set the settings", "value": { "enabled": true, "acceptTimeout": 3000, "minLength": 1, "maxLength": 6, "terminationChars": "#" } }, "enablePlayDtmf": { "summary": "Enable DTMF sending only", "value": { "playEnabled": true } }, "disableDtmf": { "summary": "Disable DTMF and reset settings", "value": { "enabled": false } } } } } }, "parameters": [{ "name": "assistantId", "in": "path", "required": true, "description": "Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.", "schema": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^[A-Za-z0-9_-]+$" }, "example": "205", "x-ref": "#/components/parameters/AssistantIdentifier", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let assistant_dtmf_runtime_update_success_ref01_data = Object.values(setup.data.existing.assistant_dtmf_runtime_update_success)[0];
        // UPDATE
        const assistant_dtmf_runtime_update_success_ref01_ent = client.AssistantDtmfRuntimeUpdateSuccess();
        const assistant_dtmf_runtime_update_success_ref01_data_up0 = {};
        const assistant_dtmf_runtime_update_success_ref01_markdef_up0 = { name: 'assistantApiKey', value: 'Mark01-assistant_dtmf_runtime_update_success_ref01_' + setup.now };
        assistant_dtmf_runtime_update_success_ref01_data_up0[assistant_dtmf_runtime_update_success_ref01_markdef_up0.name] = assistant_dtmf_runtime_update_success_ref01_markdef_up0.value;
        const assistant_dtmf_runtime_update_success_ref01_resdata_up0 = (await assistant_dtmf_runtime_update_success_ref01_ent.update(assistant_dtmf_runtime_update_success_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != assistant_dtmf_runtime_update_success_ref01_resdata_up0);
        (0, node_assert_1.default)(assistant_dtmf_runtime_update_success_ref01_resdata_up0[assistant_dtmf_runtime_update_success_ref01_markdef_up0.name] === assistant_dtmf_runtime_update_success_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/assistant_dtmf_runtime_update_success/AssistantDtmfRuntimeUpdateSuccessTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.Ai4callSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['assistant_dtmf_runtime_update_success01', 'assistant_dtmf_runtime_update_success02', 'assistant_dtmf_runtime_update_success03', 'assistant01', 'assistant02', 'assistant03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'AI4CALL_TEST_ASSISTANT_DTMF_RUNTIME_UPDATE_SUCCESS_ENTID': idmap,
        'AI4CALL_TEST_LIVE': 'FALSE',
        'AI4CALL_TEST_EXPLAIN': 'FALSE',
        'AI4CALL_APIKEY': '',
    });
    idmap = env['AI4CALL_TEST_ASSISTANT_DTMF_RUNTIME_UPDATE_SUCCESS_ENTID'];
    const live = 'TRUE' === env.AI4CALL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['AI4CALL_TEST_ASSISTANT_DTMF_RUNTIME_UPDATE_SUCCESS_ENTID'];
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
//# sourceMappingURL=AssistantDtmfRuntimeUpdateSuccessEntity.test.js.map