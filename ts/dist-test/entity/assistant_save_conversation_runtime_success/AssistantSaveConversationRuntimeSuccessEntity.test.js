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
(0, node_test_1.describe)('AssistantSaveConversationRuntimeSuccessEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('AI4CALL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.Ai4callSDK.test();
        const ent = testsdk.AssistantSaveConversationRuntimeSuccess();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'assistant_save_conversation_runtime_success.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "configuration": { "a": true, "h": "Configuration", "n": "configuration", "r": true, "t": "`$OBJECT`", "key$": "configuration", "index$": 0 }, "emails": { "a": true, "h": "Emails", "n": "emails", "r": false, "sh": "One or more recipient emails separated by commas (e.g.", "t": "`$STRING`", "key$": "emails", "index$": 1 }, "enabled": { "a": true, "h": "Enabled", "n": "enabled", "r": false, "sh": "Enable or disable sending of the conversation summary via email", "t": "`$BOOLEAN`", "key$": "enabled", "index$": 2 }, "smtpInstanceName": { "a": true, "h": "Smtp Instance Name", "n": "smtpInstanceName", "r": false, "sh": "Name of the SMTP plugin instance to use for sending", "t": "`$STRING`", "key$": "smtpInstanceName", "index$": 3 }, "smtp_instance_name": { "a": true, "de": true, "h": "Smtp Instance Name", "n": "smtp_instance_name", "r": false, "sh": "Legacy alias of `smtpInstanceName`.", "t": "`$STRING`", "key$": "smtp_instance_name", "index$": 4 } }, "name": "assistant_save_conversation_runtime_success", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v1/assistants/{assistantId}/runtime/hangup/save-conversation", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "205", "k": "param", "n": "assistant_id", "or": "assistantId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v1/assistants/{assistantId}/runtime/hangup/save-conversation", "q": { "exist": ["assistant_id"] }, "r": { "param": { "assistantId": "assistant_id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "assistants" }, { "var": "assistant_id" }, { "lit": "runtime" }, { "lit": "hangup" }, { "lit": "save-conversation" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /api/v1/assistants/{assistantId}/runtime/hangup/save-conversation", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "205", "k": "param", "n": "assistant_id", "or": "assistantId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/api/v1/assistants/{assistantId}/runtime/hangup/save-conversation", "q": { "exist": ["assistant_id"] }, "r": { "param": { "assistantId": "assistant_id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "assistants" }, { "var": "assistant_id" }, { "lit": "runtime" }, { "lit": "hangup" }, { "lit": "save-conversation" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.assistant"]] }, "key$": "assistant_save_conversation_runtime_success", "name__orig": "assistant_save_conversation_runtime_success", "Name": "AssistantSaveConversationRuntimeSuccess", "name_": "assistant_save_conversation_runtime_success", "name-": "assistant-save-conversation-runtime-success", "NAME": "ASSISTANT_SAVE_CONVERSATION_RUNTIME_SUCCESS", "index$": 38 }, { "active": true, "entity": "assistant_save_conversation_runtime_success", "key$": "BasicAssistantSaveConversationRuntimeSuccessFlow", "kind": "basic", "name": "BasicAssistantSaveConversationRuntimeSuccessFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "assistant_save_conversation_runtime_success_ref01", "srcdatavar": "assistant_save_conversation_runtime_success_ref01_data", "suffix": "_up0", "textfield": "emails" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-assistant_save_conversation_runtime_success_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "assistant_save_conversation_runtime_success_ref01", "srcdatavar": "assistant_save_conversation_runtime_success_ref01_data", "suffix": "_dt0" }, "m": { "id": "assistant_save_conversation_runtime_success01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-assistant_save_conversation_runtime_success_ref01" } }] }] }, 'AssistantSaveConversationRuntimeSuccess', { "GET /api/v1/assistants/{assistantId}/runtime/hangup/save-conversation": { "protocol": "http", "parameters": [{ "name": "assistantId", "in": "path", "required": true, "description": "Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.", "schema": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^[A-Za-z0-9_-]+$" }, "example": "205", "x-ref": "#/components/parameters/AssistantIdentifier", "index$": 0 }] }, "PATCH /api/v1/assistants/{assistantId}/runtime/hangup/save-conversation": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "description": "PATCH merge of the assistant conversation saving configuration.\n\nOperational rules:\n- at least one of `enabled`, `emails` and `smtpInstanceName` must be present\n- omitted fields retain the current value\n- `smtpInstanceName` matches the `instanceName` of the customer's active SMTP subscription\n- if `enabled: true`, an active SMTP plugin must be configured\n- `emails` accepts a string with one or more comma-separated emails", "properties": { "enabled": { "type": "boolean", "description": "Enable or disable sending of the conversation summary via email", "key$": "enabled" }, "emails": { "type": "string", "nullable": true, "description": "One or more recipient emails separated by commas (e.g. email1@example.com, email2@example.com)", "example": "email1@example.com, email2@example.com", "key$": "emails" }, "smtpInstanceName": { "type": "string", "nullable": true, "description": "Name of the SMTP plugin instance to use for sending", "example": "smtp-principale", "key$": "smtpInstanceName" }, "smtp_instance_name": { "type": "string", "nullable": true, "deprecated": true, "description": "Legacy alias of `smtpInstanceName`.", "key$": "smtp_instance_name" } }, "minProperties": 1, "x-ref": "#/components/schemas/AssistantSaveConversationRuntimeUpdateRequest", "index$": 1 }, "examples": { "enableWithEmails": { "summary": "Enable saving with email and SMTP instance", "value": { "enabled": true, "emails": "admin@example.com, report@example.com", "smtpInstanceName": "smtp-principale" } }, "updateEmailsOnly": { "summary": "Update email recipients only", "value": { "emails": "nuovo@example.com" } }, "disable": { "summary": "Disable conversation saving", "value": { "enabled": false } }, "removeSMTP": { "summary": "Removes the link to the SMTP instance", "value": { "smtpInstanceName": null } } } } } }, "parameters": [{ "name": "assistantId", "in": "path", "required": true, "description": "Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.", "schema": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^[A-Za-z0-9_-]+$" }, "example": "205", "x-ref": "#/components/parameters/AssistantIdentifier", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let assistant_save_conversation_runtime_success_ref01_data = Object.values(setup.data.existing.assistant_save_conversation_runtime_success)[0];
        // UPDATE
        const assistant_save_conversation_runtime_success_ref01_ent = client.AssistantSaveConversationRuntimeSuccess();
        const assistant_save_conversation_runtime_success_ref01_data_up0 = {};
        const assistant_save_conversation_runtime_success_ref01_markdef_up0 = { name: 'emails', value: 'Mark01-assistant_save_conversation_runtime_success_ref01_' + setup.now };
        assistant_save_conversation_runtime_success_ref01_data_up0[assistant_save_conversation_runtime_success_ref01_markdef_up0.name] = assistant_save_conversation_runtime_success_ref01_markdef_up0.value;
        const assistant_save_conversation_runtime_success_ref01_resdata_up0 = (await assistant_save_conversation_runtime_success_ref01_ent.update(assistant_save_conversation_runtime_success_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != assistant_save_conversation_runtime_success_ref01_resdata_up0);
        (0, node_assert_1.default)(assistant_save_conversation_runtime_success_ref01_resdata_up0[assistant_save_conversation_runtime_success_ref01_markdef_up0.name] === assistant_save_conversation_runtime_success_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/assistant_save_conversation_runtime_success/AssistantSaveConversationRuntimeSuccessTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.Ai4callSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['assistant_save_conversation_runtime_success01', 'assistant_save_conversation_runtime_success02', 'assistant_save_conversation_runtime_success03', 'assistant01', 'assistant02', 'assistant03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'AI4CALL_TEST_ASSISTANT_SAVE_CONVERSATION_RUNTIME_SUCCESS_ENTID': idmap,
        'AI4CALL_TEST_LIVE': 'FALSE',
        'AI4CALL_TEST_EXPLAIN': 'FALSE',
        'AI4CALL_APIKEY': '',
    });
    idmap = env['AI4CALL_TEST_ASSISTANT_SAVE_CONVERSATION_RUNTIME_SUCCESS_ENTID'];
    const live = 'TRUE' === env.AI4CALL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['AI4CALL_TEST_ASSISTANT_SAVE_CONVERSATION_RUNTIME_SUCCESS_ENTID'];
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
//# sourceMappingURL=AssistantSaveConversationRuntimeSuccessEntity.test.js.map