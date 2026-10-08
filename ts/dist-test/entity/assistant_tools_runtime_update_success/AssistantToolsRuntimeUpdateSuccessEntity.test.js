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
(0, node_test_1.describe)('AssistantToolsRuntimeUpdateSuccessEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('AI4CALL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.Ai4callSDK.test();
        const ent = testsdk.AssistantToolsRuntimeUpdateSuccess();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE;
        for (const op of ['update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'assistant_tools_runtime_update_success.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "assistantApiKey": { "a": true, "h": "Assistant Api Key", "n": "assistantApiKey", "r": true, "t": "`$STRING`", "key$": "assistantApiKey", "index$": 0 }, "assistantId": { "a": true, "h": "Assistant Id", "n": "assistantId", "r": true, "t": "`$STRING`", "key$": "assistantId", "index$": 1 }, "configuration": { "a": true, "h": "Configuration", "n": "configuration", "r": true, "sh": "Resulting tool configuration after the update.", "t": "`$OBJECT`", "key$": "configuration", "index$": 2 }, "service": { "a": true, "h": "Service", "n": "service", "r": true, "t": "`$STRING`", "key$": "service", "index$": 3 } }, "name": "assistant_tools_runtime_update_success", "op": { "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /api/v1/assistants/{assistantId}/runtime/tools", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "205", "k": "param", "n": "assistant_id", "or": "assistantId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/api/v1/assistants/{assistantId}/runtime/tools", "q": { "exist": ["assistant_id"] }, "r": { "param": { "assistantId": "assistant_id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "assistants" }, { "var": "assistant_id" }, { "lit": "runtime" }, { "lit": "tools" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.assistant"]] }, "key$": "assistant_tools_runtime_update_success", "name__orig": "assistant_tools_runtime_update_success", "Name": "AssistantToolsRuntimeUpdateSuccess", "name_": "assistant_tools_runtime_update_success", "name-": "assistant-tools-runtime-update-success", "NAME": "ASSISTANT_TOOLS_RUNTIME_UPDATE_SUCCESS", "index$": 41 }, { "active": true, "entity": "assistant_tools_runtime_update_success", "key$": "BasicAssistantToolsRuntimeUpdateSuccessFlow", "kind": "basic", "name": "BasicAssistantToolsRuntimeUpdateSuccessFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "assistant_tools_runtime_update_success_ref01", "srcdatavar": "assistant_tools_runtime_update_success_ref01_data", "suffix": "_up0", "textfield": "assistantApiKey" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-assistant_tools_runtime_update_success_ref01" } }], "v": [] }] }, 'AssistantToolsRuntimeUpdateSuccess', { "PATCH /api/v1/assistants/{assistantId}/runtime/tools": { "protocol": "http", "requestBody": { "required": true, "description": "Tool association update payload.\n\nYou can update just the classic tools, just the MCP tools, or both in the same call.\nIf you use shape by-name, the values ​​should always be taken from the `GET` catalogs documented above.", "content": { "application/json": { "schema": { "oneOf": [{ "type": "object", "additionalProperties": false, "description": "High-level payload by-name.\n\nOperational rules:\n- `tools` adds the indicated tools to the current state of the assistant\n- `deleteTools` removes the indicated tools from the current state\n- if the same tool appears in both lists, the final add prevails\n- to compile `tools` use the records of `GET /api/v1/catalog/tools`\n- to compile `deleteTools` use the records of `GET /api/v1/catalog/assistants/{assistantApiKey}/tools`\n- use `toolName` and `subscriptionName`; for classic tools `subscriptionName` applies to `null`", "properties": { "tools": { "description": "Value supplied for `tools` in the `AssistantToolsRuntimeByNameRequest` request.", "type": "array", "items": { "type": "object", "description": "High-level reference to a runtime tool.\n\nHow to enhance the fields using the `GET` catalog:\n- to add tools use `GET /api/v1/catalog/tools`\n- to remove tools use `GET /api/v1/catalog/assistants/{assistantApiKey}/tools`\n- always use `toolName` from the catalog as `toolName`\n- if the record has `toolType: custom_tool`, send `subscriptionName: null`\n- if the record has `toolType: plugin_tool` or `custom_mcp_tool`, use `instanceName` as `subscriptionName`\n- legacy snake_case aliases remain accepted but are deprecated", "properties": {}, "allOf": [], "x-ref": "#/components/schemas/AssistantNamedToolReference" } }, "deleteTools": { "description": "Value supplied for `deleteTools` in the `AssistantToolsRuntimeByNameRequest` request.", "type": "array", "items": { "type": "object", "description": "High-level reference to a runtime tool.\n\nHow to enhance the fields using the `GET` catalog:\n- to add tools use `GET /api/v1/catalog/tools`\n- to remove tools use `GET /api/v1/catalog/assistants/{assistantApiKey}/tools`\n- always use `toolName` from the catalog as `toolName`\n- if the record has `toolType: custom_tool`, send `subscriptionName: null`\n- if the record has `toolType: plugin_tool` or `custom_mcp_tool`, use `instanceName` as `subscriptionName`\n- legacy snake_case aliases remain accepted but are deprecated", "properties": {}, "allOf": [], "x-ref": "#/components/schemas/AssistantNamedToolReference" } }, "delete_tools": { "type": "array", "deprecated": true, "description": "Legacy alias of `deleteTools`.", "items": { "type": "object", "description": "High-level reference to a runtime tool.\n\nHow to enhance the fields using the `GET` catalog:\n- to add tools use `GET /api/v1/catalog/tools`\n- to remove tools use `GET /api/v1/catalog/assistants/{assistantApiKey}/tools`\n- always use `toolName` from the catalog as `toolName`\n- if the record has `toolType: custom_tool`, send `subscriptionName: null`\n- if the record has `toolType: plugin_tool` or `custom_mcp_tool`, use `instanceName` as `subscriptionName`\n- legacy snake_case aliases remain accepted but are deprecated", "properties": {}, "allOf": [], "x-ref": "#/components/schemas/AssistantNamedToolReference" } } }, "x-ref": "#/components/schemas/AssistantToolsRuntimeByNameRequest" }, { "type": "object", "additionalProperties": false, "description": "PATCH merge of assistant tool associations.\n\nOperational rules:\n- at least one between `toolIds` and `mcpToolsBySubscription` must be present\n- `toolIds` omitted: retains current classical associations\n- `toolIds: []`: removes all classic tools\n- `mcpToolsBySubscription` omitted: keep the current MCP configuration\n- `mcpToolsBySubscription: {}`: remove all assistant MCP tools\n- for each `subscriptionId/pluginCode` provided, omitted fields retain their current value", "properties": { "toolIds": { "type": "array", "items": { "type": "string" }, "description": "Complete list of classic `toolId` to be associated with the assistant.\nIt must only contain custom tools of the authenticated customer." }, "mcpToolsBySubscription": { "type": "object", "description": "Nested map with the same batch shape as the portal:\n`subscriptionId -> pluginCode -> { tools, description, subscriptionName }`.", "additionalProperties": { "type": "object", "additionalProperties": {} } } }, "x-ref": "#/components/schemas/AssistantToolsRuntimeLowLevelUpdateRequest" }], "x-ref": "#/components/schemas/AssistantToolsRuntimeUpdateRequest", "index$": 1 }, "examples": { "byNameAddAndDelete": { "summary": "Adds and removes tools by-name", "value": { "tools": [{ "toolName": "send_email", "subscriptionName": null }, { "toolName": "create_ticket", "subscriptionName": "Webhook CRM" }, { "toolName": "sheets_append_row", "subscriptionName": "Google Sheets Produzione" }], "deleteTools": [{ "toolName": "send_sms", "subscriptionName": null }, { "toolName": "sheets_search_rows", "subscriptionName": "Google Sheets Produzione" }] } }, "lowLevelMcpOnly": { "summary": "Compatible with low-level MCP payloads", "value": { "mcpToolsBySubscription": { "401": { "smtp": { "tools": [], "description": "Main SMTP", "subscriptionName": "SMTP produzione" } } } } }, "lowLevelCombined": { "summary": "Compatible with classic payload + low-level MCP", "value": { "toolIds": ["12"], "mcpToolsBySubscription": { "401": { "smtp": { "tools": [], "description": "Main SMTP", "subscriptionName": "SMTP produzione" } }, "SB_123": { "custom-webhook": { "tools": [], "description": "Custom webhooks", "subscriptionName": "SB_123" } } } } } } } } }, "parameters": [{ "name": "assistantId", "in": "path", "required": true, "description": "Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.", "schema": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^[A-Za-z0-9_-]+$" }, "example": "205", "x-ref": "#/components/parameters/AssistantIdentifier", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let assistant_tools_runtime_update_success_ref01_data = Object.values(setup.data.existing.assistant_tools_runtime_update_success)[0];
        // UPDATE
        const assistant_tools_runtime_update_success_ref01_ent = client.AssistantToolsRuntimeUpdateSuccess();
        const assistant_tools_runtime_update_success_ref01_data_up0 = {};
        const assistant_tools_runtime_update_success_ref01_markdef_up0 = { name: 'assistantApiKey', value: 'Mark01-assistant_tools_runtime_update_success_ref01_' + setup.now };
        assistant_tools_runtime_update_success_ref01_data_up0[assistant_tools_runtime_update_success_ref01_markdef_up0.name] = assistant_tools_runtime_update_success_ref01_markdef_up0.value;
        const assistant_tools_runtime_update_success_ref01_resdata_up0 = (await assistant_tools_runtime_update_success_ref01_ent.update(assistant_tools_runtime_update_success_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != assistant_tools_runtime_update_success_ref01_resdata_up0);
        (0, node_assert_1.default)(assistant_tools_runtime_update_success_ref01_resdata_up0[assistant_tools_runtime_update_success_ref01_markdef_up0.name] === assistant_tools_runtime_update_success_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/assistant_tools_runtime_update_success/AssistantToolsRuntimeUpdateSuccessTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.Ai4callSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['assistant_tools_runtime_update_success01', 'assistant_tools_runtime_update_success02', 'assistant_tools_runtime_update_success03', 'assistant01', 'assistant02', 'assistant03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'AI4CALL_TEST_ASSISTANT_TOOLS_RUNTIME_UPDATE_SUCCESS_ENTID': idmap,
        'AI4CALL_TEST_LIVE': 'FALSE',
        'AI4CALL_TEST_EXPLAIN': 'FALSE',
        'AI4CALL_APIKEY': '',
    });
    idmap = env['AI4CALL_TEST_ASSISTANT_TOOLS_RUNTIME_UPDATE_SUCCESS_ENTID'];
    const live = 'TRUE' === env.AI4CALL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['AI4CALL_TEST_ASSISTANT_TOOLS_RUNTIME_UPDATE_SUCCESS_ENTID'];
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
//# sourceMappingURL=AssistantToolsRuntimeUpdateSuccessEntity.test.js.map