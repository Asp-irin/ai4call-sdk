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
(0, node_test_1.describe)('AssistantKnowledgeSuccessEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('AI4CALL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.Ai4callSDK.test();
        const ent = testsdk.AssistantKnowledgeSuccess();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'assistant_knowledge_success.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 } }, "id": { "field": "id", "name": "id" }, "name": "assistant_knowledge_success", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v1/assistants/{assistantId}/knowledge", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "205", "k": "param", "n": "id", "or": "assistantId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v1/assistants/{assistantId}/knowledge", "q": { "$action": "knowledge", "exist": ["id"] }, "r": { "param": { "assistantId": "id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "assistants" }, { "var": "id" }, { "lit": "knowledge" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/v1/catalog/assistants/{assistantId}/knowledge", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "205", "k": "param", "n": "id", "or": "assistantId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v1/catalog/assistants/{assistantId}/knowledge", "q": { "$action": "knowledge", "exist": ["id"] }, "r": { "param": { "assistantId": "id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "catalog" }, { "lit": "assistants" }, { "var": "id" }, { "lit": "knowledge" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /api/v1/assistants/{assistantId}/knowledge", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "205", "k": "param", "n": "id", "or": "assistantId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/v1/assistants/{assistantId}/knowledge", "q": { "$action": "knowledge", "exist": ["id"] }, "r": { "param": { "assistantId": "id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "assistants" }, { "var": "id" }, { "lit": "knowledge" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "PUT /api/v1/catalog/assistants/{assistantId}/knowledge", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "205", "k": "param", "n": "id", "or": "assistantId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/v1/catalog/assistants/{assistantId}/knowledge", "q": { "$action": "knowledge", "exist": ["id"] }, "r": { "param": { "assistantId": "id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "catalog" }, { "lit": "assistants" }, { "var": "id" }, { "lit": "knowledge" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "assistant_knowledge_success", "name__orig": "assistant_knowledge_success", "Name": "AssistantKnowledgeSuccess", "name_": "assistant_knowledge_success", "name-": "assistant-knowledge-success", "NAME": "ASSISTANT_KNOWLEDGE_SUCCESS", "index$": 28 }, { "active": true, "entity": "assistant_knowledge_success", "key$": "BasicAssistantKnowledgeSuccessFlow", "kind": "basic", "name": "BasicAssistantKnowledgeSuccessFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "assistant_knowledge_success_ref01", "srcdatavar": "assistant_knowledge_success_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-assistant_knowledge_success_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "assistant_knowledge_success_ref01", "srcdatavar": "assistant_knowledge_success_ref01_data", "suffix": "_dt0" }, "m": { "id": "assistant_knowledge_success01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-assistant_knowledge_success_ref01" } }] }] }, 'AssistantKnowledgeSuccess', { "GET /api/v1/assistants/{assistantId}/knowledge": { "protocol": "http", "parameters": [{ "name": "assistantId", "in": "path", "required": true, "description": "Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.", "schema": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^[A-Za-z0-9_-]+$" }, "example": "205", "x-ref": "#/components/parameters/AssistantIdentifier", "index$": 0 }] }, "GET /api/v1/catalog/assistants/{assistantId}/knowledge": { "protocol": "http", "parameters": [{ "name": "assistantId", "in": "path", "required": true, "description": "Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.", "schema": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^[A-Za-z0-9_-]+$" }, "example": "205", "x-ref": "#/components/parameters/AssistantIdentifier", "index$": 0 }] }, "PUT /api/v1/assistants/{assistantId}/knowledge": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "description": "Replaces the assistant's knowledge associations entirely.\n\nSend `associations` when the order matters, `knowledgeIds` when the order of the array is\nenough. The two are mutually exclusive; an empty list detaches everything.\n\nBoth your own items and the shared ones can be associated.", "properties": { "associations": { "description": "Value supplied for `associations` in the `AssistantKnowledgeAssociationsRequest` request.", "type": "array", "items": { "type": "object", "properties": { "knowledgeId": { "type": "integer" }, "sortOrder": { "type": "integer", "minimum": 0 } }, "required": ["knowledgeId"] } }, "knowledgeIds": { "description": "Value supplied for `knowledgeIds` in the `AssistantKnowledgeAssociationsRequest` request.", "type": "array", "items": { "type": "integer" } } }, "minProperties": 1, "x-ref": "#/components/schemas/AssistantKnowledgeAssociationsRequest" }, "examples": { "byIds": { "summary": "Associate two items, in the order sent", "value": { "knowledgeIds": [7, 12] } }, "withExplicitOrder": { "summary": "State the order explicitly", "value": { "associations": [{ "knowledgeId": 12, "sortOrder": 1 }, { "knowledgeId": 7, "sortOrder": 2 }] } }, "detachAll": { "summary": "Detach every item", "value": { "knowledgeIds": [] } } } } } }, "parameters": [{ "name": "assistantId", "in": "path", "required": true, "description": "Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.", "schema": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^[A-Za-z0-9_-]+$" }, "example": "205", "x-ref": "#/components/parameters/AssistantIdentifier", "index$": 0 }] }, "PUT /api/v1/catalog/assistants/{assistantId}/knowledge": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "description": "Replaces the assistant's knowledge associations entirely.\n\nSend `associations` when the order matters, `knowledgeIds` when the order of the array is\nenough. The two are mutually exclusive; an empty list detaches everything.\n\nBoth your own items and the shared ones can be associated.", "properties": { "associations": { "description": "Value supplied for `associations` in the `AssistantKnowledgeAssociationsRequest` request.", "type": "array", "items": { "type": "object", "properties": { "knowledgeId": { "type": "integer" }, "sortOrder": { "type": "integer", "minimum": 0 } }, "required": ["knowledgeId"] } }, "knowledgeIds": { "description": "Value supplied for `knowledgeIds` in the `AssistantKnowledgeAssociationsRequest` request.", "type": "array", "items": { "type": "integer" } } }, "minProperties": 1, "x-ref": "#/components/schemas/AssistantKnowledgeAssociationsRequest" }, "examples": { "byIds": { "summary": "Associate two items, in the order sent", "value": { "knowledgeIds": [7, 12] } }, "withExplicitOrder": { "summary": "State the order explicitly", "value": { "associations": [{ "knowledgeId": 12, "sortOrder": 1 }, { "knowledgeId": 7, "sortOrder": 2 }] } }, "detachAll": { "summary": "Detach every item", "value": { "knowledgeIds": [] } } } } } }, "parameters": [{ "name": "assistantId", "in": "path", "required": true, "description": "Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.", "schema": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^[A-Za-z0-9_-]+$" }, "example": "205", "x-ref": "#/components/parameters/AssistantIdentifier", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let assistant_knowledge_success_ref01_data = Object.values(setup.data.existing.assistant_knowledge_success)[0];
        // UPDATE
        const assistant_knowledge_success_ref01_ent = client.AssistantKnowledgeSuccess();
        const assistant_knowledge_success_ref01_data_up0 = {};
        assistant_knowledge_success_ref01_data_up0.id = assistant_knowledge_success_ref01_data.id;
        const assistant_knowledge_success_ref01_resdata_up0 = (await assistant_knowledge_success_ref01_ent.update(assistant_knowledge_success_ref01_data_up0)).data();
        (0, node_assert_1.default)(assistant_knowledge_success_ref01_resdata_up0.id === assistant_knowledge_success_ref01_data_up0.id);
        // LOAD
        const assistant_knowledge_success_ref01_match_dt0 = {};
        assistant_knowledge_success_ref01_match_dt0.id = assistant_knowledge_success_ref01_data.id;
        const assistant_knowledge_success_ref01_data_dt0 = (await assistant_knowledge_success_ref01_ent.load(assistant_knowledge_success_ref01_match_dt0)).data();
        (0, node_assert_1.default)(assistant_knowledge_success_ref01_data_dt0.id === assistant_knowledge_success_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/assistant_knowledge_success/AssistantKnowledgeSuccessTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.Ai4callSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['assistant_knowledge_success01', 'assistant_knowledge_success02', 'assistant_knowledge_success03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'AI4CALL_TEST_ASSISTANT_KNOWLEDGE_SUCCESS_ENTID': idmap,
        'AI4CALL_TEST_LIVE': 'FALSE',
        'AI4CALL_TEST_EXPLAIN': 'FALSE',
        'AI4CALL_APIKEY': '',
    });
    idmap = env['AI4CALL_TEST_ASSISTANT_KNOWLEDGE_SUCCESS_ENTID'];
    const live = 'TRUE' === env.AI4CALL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['AI4CALL_TEST_ASSISTANT_KNOWLEDGE_SUCCESS_ENTID'];
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
//# sourceMappingURL=AssistantKnowledgeSuccessEntity.test.js.map