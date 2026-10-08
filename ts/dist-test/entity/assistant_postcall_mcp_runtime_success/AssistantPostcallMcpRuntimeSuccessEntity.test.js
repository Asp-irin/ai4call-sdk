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
(0, node_test_1.describe)('AssistantPostcallMcpRuntimeSuccessEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('AI4CALL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.Ai4callSDK.test();
        const ent = testsdk.AssistantPostcallMcpRuntimeSuccess();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'assistant_postcall_mcp_runtime_success.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "configuration": { "a": true, "h": "Configuration", "n": "configuration", "r": true, "sh": "General configuration of the post-call phase.", "t": "`$OBJECT`", "key$": "configuration", "index$": 0 }, "enabled": { "a": true, "h": "Enabled", "n": "enabled", "r": false, "sh": "Enable or disable the whole post-call phase without losing its configuration.", "t": "`$BOOLEAN`", "key$": "enabled", "index$": 1 }, "globalPrompt": { "a": true, "h": "Global Prompt", "n": "globalPrompt", "r": false, "sh": "Global post-call prompt.", "t": "`$STRING`", "key$": "globalPrompt", "index$": 2 }, "modelConfig": { "a": true, "h": "Model Config", "n": "modelConfig", "r": true, "sh": "Model configuration used by the MCP phase.", "t": "`$OBJECT`", "key$": "modelConfig", "index$": 3 }, "tools": { "a": true, "h": "Tools", "n": "tools", "op": { "update": { "req": false, "type": "`$ARRAY`" } }, "r": true, "sh": "Complete list of post-call tools to set up.", "t": "`$ARRAY`", "key$": "tools", "index$": 4 } }, "name": "assistant_postcall_mcp_runtime_success", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v1/assistants/{assistantId}/runtime/postcall/mcp-config", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "205", "k": "param", "n": "assistant_id", "or": "assistantId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v1/assistants/{assistantId}/runtime/postcall/mcp-config", "q": { "exist": ["assistant_id"] }, "r": { "param": { "assistantId": "assistant_id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "assistants" }, { "var": "assistant_id" }, { "lit": "runtime" }, { "lit": "postcall" }, { "lit": "mcp-config" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /api/v1/assistants/{assistantId}/runtime/postcall/mcp-config", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "205", "k": "param", "n": "assistant_id", "or": "assistantId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/api/v1/assistants/{assistantId}/runtime/postcall/mcp-config", "q": { "exist": ["assistant_id"] }, "r": { "param": { "assistantId": "assistant_id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "assistants" }, { "var": "assistant_id" }, { "lit": "runtime" }, { "lit": "postcall" }, { "lit": "mcp-config" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.assistant"]] }, "key$": "assistant_postcall_mcp_runtime_success", "name__orig": "assistant_postcall_mcp_runtime_success", "Name": "AssistantPostcallMcpRuntimeSuccess", "name_": "assistant_postcall_mcp_runtime_success", "name-": "assistant-postcall-mcp-runtime-success", "NAME": "ASSISTANT_POSTCALL_MCP_RUNTIME_SUCCESS", "index$": 32 }, { "active": true, "entity": "assistant_postcall_mcp_runtime_success", "key$": "BasicAssistantPostcallMcpRuntimeSuccessFlow", "kind": "basic", "name": "BasicAssistantPostcallMcpRuntimeSuccessFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "assistant_postcall_mcp_runtime_success_ref01", "srcdatavar": "assistant_postcall_mcp_runtime_success_ref01_data", "suffix": "_up0", "textfield": "globalPrompt" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-assistant_postcall_mcp_runtime_success_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "assistant_postcall_mcp_runtime_success_ref01", "srcdatavar": "assistant_postcall_mcp_runtime_success_ref01_data", "suffix": "_dt0" }, "m": { "id": "assistant_postcall_mcp_runtime_success01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-assistant_postcall_mcp_runtime_success_ref01" } }] }] }, 'AssistantPostcallMcpRuntimeSuccess', { "GET /api/v1/assistants/{assistantId}/runtime/postcall/mcp-config": { "protocol": "http", "parameters": [{ "name": "assistantId", "in": "path", "required": true, "description": "Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.", "schema": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^[A-Za-z0-9_-]+$" }, "example": "205", "x-ref": "#/components/parameters/AssistantIdentifier", "index$": 0 }] }, "PATCH /api/v1/assistants/{assistantId}/runtime/postcall/mcp-config": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "description": "Update post-call configuration with **PATCH merge** semantics.\nAt least one field must be present.\n\nThe `tools` field completely replaces the list of post-call tools.\n- `tools: []` removes all post-call tools and resets `globalPrompt` and `modelConfig`\n- `tools` omitted: keep current tools unchanged", "properties": { "enabled": { "type": "boolean", "description": "Enable or disable the whole post-call phase without losing its configuration.\nWhen `false` the end-of-call webhook is not sent. Omitted, it retains the current value.", "key$": "enabled" }, "tools": { "type": "array", "items": { "type": "object", "description": "Reference to a tool to be associated with the post-call phase.\n\nHow to enhance fields using `GET /api/v1/catalog/assistants/{assistantApiKey}/tools`:\n\n| Tool type | `toolName` | `subscriptionName` |\n|---|---|---|\n| `custom_tool` (custom JSON tool) | `toolName` | `null` |\n| `plugin_tool` (MCP plugin) | `toolName` | `instanceName` |\n| `custom_mcp_tool` (MCP custom) | `toolName` | `instanceName` |", "properties": { "toolName": { "type": "string", "description": "Tool name (must match `toolName` in the catalog)." }, "subscriptionName": { "type": "string", "nullable": true, "description": "Name of the instance/subscription. `null` for custom tools." }, "order": { "type": "integer", "minimum": 0, "description": "If omitted, the order of the array sent in the PATCH is used." }, "tool_name": { "type": "string", "deprecated": true, "description": "Legacy alias of `toolName`." }, "subscription_name": { "type": "string", "nullable": true, "deprecated": true, "description": "Legacy alias of `subscriptionName`." } }, "allOf": [{ "anyOf": [] }, { "anyOf": [] }], "x-ref": "#/components/schemas/AssistantPostcallToolReference" }, "description": "Complete list of post-call tools to set up.", "key$": "tools" }, "globalPrompt": { "type": "string", "nullable": true, "description": "Global post-call prompt. `null` to remove it.", "key$": "globalPrompt" }, "modelConfig": { "type": "object", "description": "Model configuration used by the MCP phase.\nThe API keys are not returned in clear text: `hasApiKey` is exposed in the responses.", "properties": { "mode": { "description": "`default` uses the default service configuration, `assistant` uses the assistant model,\n`managed` uses AI4Call managed provider, `custom` uses customer provider/API key.", "enum": ["default", "assistant", "managed", "custom"], "type": "string" }, "provider": { "description": "LLM Providers.", "nullable": true, "type": "string" }, "model": { "description": "LLM model.", "nullable": true, "type": "string" }, "apiKey": { "description": "Customer API key to be sent only in PATCH.", "nullable": true, "type": "string", "writeOnly": true }, "baseUrl": { "description": "Custom URL base, if provided by the provider.", "nullable": true, "type": "string" }, "hasApiKey": { "description": "`true` if an API key is configured.", "readOnly": true, "type": "boolean" } }, "required": ["mode"], "x-ref": "#/components/schemas/McpModelConfig", "key$": "modelConfig" } }, "x-ref": "#/components/schemas/AssistantPostcallMcpConfigRuntimeUpdateRequest", "index$": 1 }, "examples": { "setTools": { "summary": "Set post-call tool and model", "value": { "tools": [{ "toolName": "create_ticket", "subscriptionName": "CRM Principale", "order": 0 }], "globalPrompt": "Usa i risultati dei tool per aggiornare il CRM.", "modelConfig": { "mode": "assistant" } } }, "customModel": { "summary": "Update only the post-call model", "value": { "modelConfig": { "mode": "custom", "provider": "openai", "model": "gpt-4o-mini", "apiKey": "sk-..." } } }, "clearTools": { "summary": "Disable and reset post-call completely", "value": { "tools": [] } } } } } }, "parameters": [{ "name": "assistantId", "in": "path", "required": true, "description": "Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.", "schema": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^[A-Za-z0-9_-]+$" }, "example": "205", "x-ref": "#/components/parameters/AssistantIdentifier", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let assistant_postcall_mcp_runtime_success_ref01_data = Object.values(setup.data.existing.assistant_postcall_mcp_runtime_success)[0];
        // UPDATE
        const assistant_postcall_mcp_runtime_success_ref01_ent = client.AssistantPostcallMcpRuntimeSuccess();
        const assistant_postcall_mcp_runtime_success_ref01_data_up0 = {};
        const assistant_postcall_mcp_runtime_success_ref01_markdef_up0 = { name: 'globalPrompt', value: 'Mark01-assistant_postcall_mcp_runtime_success_ref01_' + setup.now };
        assistant_postcall_mcp_runtime_success_ref01_data_up0[assistant_postcall_mcp_runtime_success_ref01_markdef_up0.name] = assistant_postcall_mcp_runtime_success_ref01_markdef_up0.value;
        const assistant_postcall_mcp_runtime_success_ref01_resdata_up0 = (await assistant_postcall_mcp_runtime_success_ref01_ent.update(assistant_postcall_mcp_runtime_success_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != assistant_postcall_mcp_runtime_success_ref01_resdata_up0);
        (0, node_assert_1.default)(assistant_postcall_mcp_runtime_success_ref01_resdata_up0[assistant_postcall_mcp_runtime_success_ref01_markdef_up0.name] === assistant_postcall_mcp_runtime_success_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/assistant_postcall_mcp_runtime_success/AssistantPostcallMcpRuntimeSuccessTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.Ai4callSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['assistant_postcall_mcp_runtime_success01', 'assistant_postcall_mcp_runtime_success02', 'assistant_postcall_mcp_runtime_success03', 'assistant01', 'assistant02', 'assistant03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'AI4CALL_TEST_ASSISTANT_POSTCALL_MCP_RUNTIME_SUCCESS_ENTID': idmap,
        'AI4CALL_TEST_LIVE': 'FALSE',
        'AI4CALL_TEST_EXPLAIN': 'FALSE',
        'AI4CALL_APIKEY': '',
    });
    idmap = env['AI4CALL_TEST_ASSISTANT_POSTCALL_MCP_RUNTIME_SUCCESS_ENTID'];
    const live = 'TRUE' === env.AI4CALL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['AI4CALL_TEST_ASSISTANT_POSTCALL_MCP_RUNTIME_SUCCESS_ENTID'];
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
//# sourceMappingURL=AssistantPostcallMcpRuntimeSuccessEntity.test.js.map