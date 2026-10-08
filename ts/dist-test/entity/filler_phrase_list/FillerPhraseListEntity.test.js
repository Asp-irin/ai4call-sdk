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
(0, node_test_1.describe)('FillerPhraseListEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('AI4CALL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.Ai4callSDK.test();
        const ent = testsdk.FillerPhraseList();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE;
        for (const op of ['create', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'filler_phrase_list.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "associations": { "a": true, "h": "Associations", "n": "associations", "r": true, "t": "`$OBJECT`", "key$": "associations", "index$": 0 }, "data": { "a": true, "h": "Data", "n": "data", "r": true, "t": "`$OBJECT`", "key$": "data", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Value supplied for `id` in the `FillerPhraseListCreateRequest` request.", "t": "`$STRING`", "key$": "id", "index$": 2 }, "list": { "a": true, "h": "List", "n": "list", "r": true, "t": "`$OBJECT`", "key$": "list", "index$": 3 }, "message": { "a": true, "h": "Message", "n": "message", "r": true, "t": "`$STRING`", "key$": "message", "index$": 4 }, "meta": { "a": true, "h": "Meta", "n": "meta", "r": false, "t": "`$OBJECT`", "key$": "meta", "index$": 5 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "Value supplied for `name` in the `FillerPhraseListCreateRequest` request.", "t": "`$STRING`", "key$": "name", "index$": 6 }, "phrases": { "a": true, "h": "Phrases", "n": "phrases", "r": false, "sh": "Value supplied for `phrases` in the `FillerPhraseListCreateRequest` request.", "t": "`$ARRAY`", "key$": "phrases", "index$": 7 }, "requestId": { "a": true, "h": "Request Id", "n": "requestId", "r": true, "t": "`$STRING`", "key$": "requestId", "index$": 8 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "t": "`$BOOLEAN`", "key$": "success", "index$": 9 }, "toolListIds": { "a": true, "h": "Tool List Ids", "n": "toolListIds", "r": true, "t": "`$ARRAY`", "key$": "toolListIds", "index$": 10 }, "waitingListIds": { "a": true, "h": "Waiting List Ids", "n": "waitingListIds", "r": true, "t": "`$ARRAY`", "key$": "waitingListIds", "index$": 11 } }, "id": { "field": "id", "name": "id" }, "name": "filler_phrase_list", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v1/catalog/filler-phrase-lists", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/v1/catalog/filler-phrase-lists", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "catalog" }, { "lit": "filler-phrase-lists" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /api/v1/filler-phrase-lists", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/v1/filler-phrase-lists", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "filler-phrase-lists" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v1/catalog/filler-phrase-lists", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "cursor", "or": "cursor", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v1/catalog/filler-phrase-lists", "q": { "exist": ["cursor", "limit"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "catalog" }, { "lit": "filler-phrase-lists" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/v1/filler-phrase-lists", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "cursor", "or": "cursor", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v1/filler-phrase-lists", "q": { "exist": ["cursor", "limit"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "filler-phrase-lists" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /api/v1/assistants/{assistantId}/filler-phrase-lists", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "205", "k": "param", "n": "assistant_id", "or": "assistantId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v1/assistants/{assistantId}/filler-phrase-lists", "q": { "exist": ["assistant_id"] }, "r": { "param": { "assistantId": "assistant_id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "assistants" }, { "var": "assistant_id" }, { "lit": "filler-phrase-lists" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 2 }, { "a": true, "co": { "id": "GET /api/v1/catalog/assistants/{assistantId}/filler-phrase-lists", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "205", "k": "param", "n": "assistant_id", "or": "assistantId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v1/catalog/assistants/{assistantId}/filler-phrase-lists", "q": { "exist": ["assistant_id"] }, "r": { "param": { "assistantId": "assistant_id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "catalog" }, { "lit": "assistants" }, { "var": "assistant_id" }, { "lit": "filler-phrase-lists" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 3 }, { "a": true, "co": { "id": "GET /api/v1/catalog/filler-phrase-lists/{listId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "listId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v1/catalog/filler-phrase-lists/{listId}", "q": { "exist": ["id"] }, "r": { "param": { "listId": "id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "catalog" }, { "lit": "filler-phrase-lists" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 4 }, { "a": true, "co": { "id": "GET /api/v1/filler-phrase-lists/{listId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "listId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v1/filler-phrase-lists/{listId}", "q": { "exist": ["id"] }, "r": { "param": { "listId": "id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "filler-phrase-lists" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /api/v1/catalog/filler-phrase-lists/{listId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "listId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/api/v1/catalog/filler-phrase-lists/{listId}", "q": { "exist": ["id"] }, "r": { "param": { "listId": "id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "catalog" }, { "lit": "filler-phrase-lists" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /api/v1/filler-phrase-lists/{listId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "listId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/api/v1/filler-phrase-lists/{listId}", "q": { "exist": ["id"] }, "r": { "param": { "listId": "id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "filler-phrase-lists" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 1 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /api/v1/assistants/{assistantId}/filler-phrase-lists", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "205", "k": "param", "n": "assistant_id", "or": "assistantId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/v1/assistants/{assistantId}/filler-phrase-lists", "q": { "exist": ["assistant_id"] }, "r": { "param": { "assistantId": "assistant_id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "assistants" }, { "var": "assistant_id" }, { "lit": "filler-phrase-lists" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }, { "a": true, "co": { "id": "PUT /api/v1/catalog/assistants/{assistantId}/filler-phrase-lists", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "205", "k": "param", "n": "assistant_id", "or": "assistantId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/v1/catalog/assistants/{assistantId}/filler-phrase-lists", "q": { "exist": ["assistant_id"] }, "r": { "param": { "assistantId": "assistant_id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "catalog" }, { "lit": "assistants" }, { "var": "assistant_id" }, { "lit": "filler-phrase-lists" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 1 }, { "a": true, "co": { "id": "PUT /api/v1/catalog/filler-phrase-lists/{listId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "listId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/v1/catalog/filler-phrase-lists/{listId}", "q": { "exist": ["id"] }, "r": { "param": { "listId": "id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "catalog" }, { "lit": "filler-phrase-lists" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 2 }, { "a": true, "co": { "id": "PUT /api/v1/filler-phrase-lists/{listId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "listId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/v1/filler-phrase-lists/{listId}", "q": { "exist": ["id"] }, "r": { "param": { "listId": "id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "filler-phrase-lists" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.assistant"]] }, "key$": "filler_phrase_list", "name__orig": "filler_phrase_list", "Name": "FillerPhraseList", "name_": "filler_phrase_list", "name-": "filler-phrase-list", "NAME": "FILLER_PHRASE_LIST", "index$": 47 }, { "active": true, "entity": "filler_phrase_list", "key$": "BasicFillerPhraseListFlow", "kind": "basic", "name": "BasicFillerPhraseListFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "filler_phrase_list_ref01" }, "m": {}, "o": "create", "s": [], "v": [] }, { "a": true, "d": {}, "i": { "ref": "filler_phrase_list_ref01", "srcdatavar": "filler_phrase_list_ref01_data", "suffix": "_up0", "textfield": "message" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-filler_phrase_list_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "filler_phrase_list_ref01", "srcdatavar": "filler_phrase_list_ref01_data", "suffix": "_dt0" }, "m": { "id": "filler_phrase_list01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-filler_phrase_list_ref01" } }] }, { "a": true, "d": {}, "i": { "ref": "filler_phrase_list_ref01", "suffix": "_rm0" }, "m": { "id": "filler_phrase_list01" }, "o": "remove", "s": [], "v": [] }] }, 'FillerPhraseList', { "POST /api/v1/catalog/filler-phrase-lists": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "id": { "description": "Value supplied for `id` in the `FillerPhraseListCreateRequest` request.", "type": "string", "maxLength": 100, "key$": "id" }, "name": { "description": "Value supplied for `name` in the `FillerPhraseListCreateRequest` request.", "type": "string", "maxLength": 255, "key$": "name" }, "phrases": { "description": "Value supplied for `phrases` in the `FillerPhraseListCreateRequest` request.", "type": "array", "items": { "type": "string" }, "default": [], "key$": "phrases" } }, "required": ["id", "name"], "x-ref": "#/components/schemas/FillerPhraseListCreateRequest", "index$": 1 }, "example": { "id": "support_waiting", "name": "Attesa supporto", "phrases": ["Un attimo, sto verificando.", "Rimanga in linea, controllo subito."] } } } }, "parameters": [] }, "POST /api/v1/filler-phrase-lists": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "id": { "description": "Value supplied for `id` in the `FillerPhraseListCreateRequest` request.", "type": "string", "maxLength": 100, "key$": "id" }, "name": { "description": "Value supplied for `name` in the `FillerPhraseListCreateRequest` request.", "type": "string", "maxLength": 255, "key$": "name" }, "phrases": { "description": "Value supplied for `phrases` in the `FillerPhraseListCreateRequest` request.", "type": "array", "items": { "type": "string" }, "default": [], "key$": "phrases" } }, "required": ["id", "name"], "x-ref": "#/components/schemas/FillerPhraseListCreateRequest", "index$": 1 }, "example": { "id": "support_waiting", "name": "Attesa supporto", "phrases": ["Un attimo, sto verificando.", "Rimanga in linea, controllo subito."] } } } }, "parameters": [] }, "GET /api/v1/catalog/filler-phrase-lists": { "protocol": "http", "parameters": [{ "name": "limit", "in": "query", "required": false, "description": "Maximum number of items returned in one cursor-paginated page. Omit both limit and cursor to preserve the legacy unpaginated response.", "schema": { "type": "integer", "minimum": 1, "maximum": 100 }, "index$": 0 }, { "name": "cursor", "in": "query", "required": false, "description": "Opaque cursor returned in meta.nextCursor by the previous page.", "schema": { "type": "string" }, "index$": 1 }] }, "GET /api/v1/filler-phrase-lists": { "protocol": "http", "parameters": [{ "name": "limit", "in": "query", "required": false, "description": "Maximum number of items returned in one cursor-paginated page. Omit both limit and cursor to preserve the legacy unpaginated response.", "schema": { "type": "integer", "minimum": 1, "maximum": 100 }, "index$": 0 }, { "name": "cursor", "in": "query", "required": false, "description": "Opaque cursor returned in meta.nextCursor by the previous page.", "schema": { "type": "string" }, "index$": 1 }] }, "GET /api/v1/assistants/{assistantId}/filler-phrase-lists": { "protocol": "http", "parameters": [{ "name": "assistantId", "in": "path", "required": true, "description": "Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.", "schema": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^[A-Za-z0-9_-]+$" }, "example": "205", "x-ref": "#/components/parameters/AssistantIdentifier", "index$": 0 }] }, "GET /api/v1/catalog/assistants/{assistantId}/filler-phrase-lists": { "protocol": "http", "parameters": [{ "name": "assistantId", "in": "path", "required": true, "description": "Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.", "schema": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^[A-Za-z0-9_-]+$" }, "example": "205", "x-ref": "#/components/parameters/AssistantIdentifier", "index$": 0 }] }, "GET /api/v1/catalog/filler-phrase-lists/{listId}": { "protocol": "http", "parameters": [{ "name": "listId", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "GET /api/v1/filler-phrase-lists/{listId}": { "protocol": "http", "parameters": [{ "name": "listId", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "DELETE /api/v1/catalog/filler-phrase-lists/{listId}": { "protocol": "http", "parameters": [{ "name": "listId", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "DELETE /api/v1/filler-phrase-lists/{listId}": { "protocol": "http", "parameters": [{ "name": "listId", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "PUT /api/v1/assistants/{assistantId}/filler-phrase-lists": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "waitingListIds": { "items": { "type": "string" }, "type": "array", "key$": "waitingListIds" }, "toolListIds": { "items": { "type": "string" }, "type": "array", "key$": "toolListIds" } }, "required": ["waitingListIds", "toolListIds"], "x-ref": "#/components/schemas/FillerPhraseListAssociations", "index$": 1 }, "example": { "waitingListIds": ["default_waiting", "support_waiting"], "toolListIds": ["default_tool"] } } } }, "parameters": [{ "name": "assistantId", "in": "path", "required": true, "description": "Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.", "schema": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^[A-Za-z0-9_-]+$" }, "example": "205", "x-ref": "#/components/parameters/AssistantIdentifier", "index$": 0 }] }, "PUT /api/v1/catalog/assistants/{assistantId}/filler-phrase-lists": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "waitingListIds": { "items": { "type": "string" }, "type": "array", "key$": "waitingListIds" }, "toolListIds": { "items": { "type": "string" }, "type": "array", "key$": "toolListIds" } }, "required": ["waitingListIds", "toolListIds"], "x-ref": "#/components/schemas/FillerPhraseListAssociations", "index$": 1 }, "example": { "waitingListIds": ["default_waiting", "support_waiting"], "toolListIds": ["default_tool"] } } } }, "parameters": [{ "name": "assistantId", "in": "path", "required": true, "description": "Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.", "schema": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^[A-Za-z0-9_-]+$" }, "example": "205", "x-ref": "#/components/parameters/AssistantIdentifier", "index$": 0 }] }, "PUT /api/v1/catalog/filler-phrase-lists/{listId}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "name": { "description": "Value supplied for `name` in the `FillerPhraseListUpdateRequest` request.", "type": "string", "maxLength": 255, "key$": "name" }, "phrases": { "description": "Value supplied for `phrases` in the `FillerPhraseListUpdateRequest` request.", "type": "array", "items": { "type": "string" }, "default": [], "key$": "phrases" } }, "required": ["name"], "x-ref": "#/components/schemas/FillerPhraseListUpdateRequest", "index$": 1 }, "example": { "name": "Attesa supporto aggiornata", "phrases": ["Un attimo, sto verificando."] } } } }, "parameters": [{ "name": "listId", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "PUT /api/v1/filler-phrase-lists/{listId}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "name": { "description": "Value supplied for `name` in the `FillerPhraseListUpdateRequest` request.", "type": "string", "maxLength": 255, "key$": "name" }, "phrases": { "description": "Value supplied for `phrases` in the `FillerPhraseListUpdateRequest` request.", "type": "array", "items": { "type": "string" }, "default": [], "key$": "phrases" } }, "required": ["name"], "x-ref": "#/components/schemas/FillerPhraseListUpdateRequest", "index$": 1 }, "example": { "name": "Attesa supporto aggiornata", "phrases": ["Un attimo, sto verificando."] } } } }, "parameters": [{ "name": "listId", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const filler_phrase_list_ref01_ent = client.FillerPhraseList();
        let filler_phrase_list_ref01_data = setup.data.new.filler_phrase_list['filler_phrase_list_ref01'];
        filler_phrase_list_ref01_data = (await filler_phrase_list_ref01_ent.create(filler_phrase_list_ref01_data)).data();
        (0, node_assert_1.default)(null != filler_phrase_list_ref01_data.id);
        // UPDATE
        const filler_phrase_list_ref01_data_up0 = {};
        filler_phrase_list_ref01_data_up0.id = filler_phrase_list_ref01_data.id;
        const filler_phrase_list_ref01_markdef_up0 = { name: 'message', value: 'Mark01-filler_phrase_list_ref01_' + setup.now };
        filler_phrase_list_ref01_data_up0[filler_phrase_list_ref01_markdef_up0.name] = filler_phrase_list_ref01_markdef_up0.value;
        const filler_phrase_list_ref01_resdata_up0 = (await filler_phrase_list_ref01_ent.update(filler_phrase_list_ref01_data_up0)).data();
        (0, node_assert_1.default)(filler_phrase_list_ref01_resdata_up0.id === filler_phrase_list_ref01_data_up0.id);
        (0, node_assert_1.default)(filler_phrase_list_ref01_resdata_up0[filler_phrase_list_ref01_markdef_up0.name] === filler_phrase_list_ref01_markdef_up0.value);
        // LOAD
        const filler_phrase_list_ref01_match_dt0 = {};
        filler_phrase_list_ref01_match_dt0.id = filler_phrase_list_ref01_data.id;
        const filler_phrase_list_ref01_data_dt0 = (await filler_phrase_list_ref01_ent.load(filler_phrase_list_ref01_match_dt0)).data();
        (0, node_assert_1.default)(filler_phrase_list_ref01_data_dt0.id === filler_phrase_list_ref01_data.id);
        // REMOVE
        const filler_phrase_list_ref01_match_rm0 = { id: filler_phrase_list_ref01_data.id };
        await filler_phrase_list_ref01_ent.remove(filler_phrase_list_ref01_match_rm0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/filler_phrase_list/FillerPhraseListTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.Ai4callSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['filler_phrase_list01', 'filler_phrase_list02', 'filler_phrase_list03', 'assistant01', 'assistant02', 'assistant03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'AI4CALL_TEST_FILLER_PHRASE_LIST_ENTID': idmap,
        'AI4CALL_TEST_LIVE': 'FALSE',
        'AI4CALL_TEST_EXPLAIN': 'FALSE',
        'AI4CALL_APIKEY': '',
    });
    idmap = env['AI4CALL_TEST_FILLER_PHRASE_LIST_ENTID'];
    const live = 'TRUE' === env.AI4CALL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['AI4CALL_TEST_FILLER_PHRASE_LIST_ENTID'];
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
//# sourceMappingURL=FillerPhraseListEntity.test.js.map