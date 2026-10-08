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
(0, node_test_1.describe)('RagCollectionDocumentDeleteSuccessEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('AI4CALL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.Ai4callSDK.test();
        const ent = testsdk.RagCollectionDocumentDeleteSuccess();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE;
        for (const op of []) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'rag_collection_document_delete_success.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": {}, "name": "rag_collection_document_delete_success", "op": { "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /api/v1/catalog/rag/collections/{ragId}/documents/{fileName}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "collection_id", "or": "ragId", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "file_name", "or": "fileName", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/api/v1/catalog/rag/collections/{ragId}/documents/{fileName}", "q": { "exist": ["collection_id", "file_name"] }, "r": { "param": { "fileName": "file_name", "ragId": "collection_id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "catalog" }, { "lit": "rag" }, { "lit": "collections" }, { "var": "collection_id" }, { "lit": "documents" }, { "var": "file_name" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /api/v1/rag/collections/{ragId}/documents/{fileName}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "collection_id", "or": "ragId", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "file_name", "or": "fileName", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/api/v1/rag/collections/{ragId}/documents/{fileName}", "q": { "exist": ["collection_id", "file_name"] }, "r": { "param": { "fileName": "file_name", "ragId": "collection_id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "rag" }, { "lit": "collections" }, { "var": "collection_id" }, { "lit": "documents" }, { "var": "file_name" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 1 }], "key$": "remove" } }, "relations": { "ancestors": [] }, "key$": "rag_collection_document_delete_success", "name__orig": "rag_collection_document_delete_success", "Name": "RagCollectionDocumentDeleteSuccess", "name_": "rag_collection_document_delete_success", "name-": "rag-collection-document-delete-success", "NAME": "RAG_COLLECTION_DOCUMENT_DELETE_SUCCESS", "index$": 62 }, { "active": true, "entity": "rag_collection_document_delete_success", "key$": "BasicRagCollectionDocumentDeleteSuccessFlow", "kind": "basic", "name": "BasicRagCollectionDocumentDeleteSuccessFlow", "param": {}, "step": [] }, 'RagCollectionDocumentDeleteSuccess', { "DELETE /api/v1/catalog/rag/collections/{ragId}/documents/{fileName}": { "protocol": "http", "parameters": [{ "name": "ragId", "in": "path", "required": true, "schema": { "type": "string" }, "description": "Stable `publicRagId` of the RAG collection. Legacy `collectionName` and `name` values remain accepted.", "index$": 0 }, { "name": "fileName", "in": "path", "required": true, "schema": { "type": "string" }, "description": "File name to delete, taken from `data.documents[].fileName`.", "index$": 1 }] }, "DELETE /api/v1/rag/collections/{ragId}/documents/{fileName}": { "protocol": "http", "parameters": [{ "name": "ragId", "in": "path", "required": true, "schema": { "type": "string" }, "description": "Stable `publicRagId` of the RAG collection. Legacy `collectionName` and `name` values remain accepted.", "index$": 0 }, { "name": "fileName", "in": "path", "required": true, "schema": { "type": "string" }, "description": "File name to delete, taken from `data.documents[].fileName`.", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let rag_collection_document_delete_success_ref01_data = Object.values(setup.data.existing.rag_collection_document_delete_success)[0];
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/rag_collection_document_delete_success/RagCollectionDocumentDeleteSuccessTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.Ai4callSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['rag_collection_document_delete_success01', 'rag_collection_document_delete_success02', 'rag_collection_document_delete_success03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'AI4CALL_TEST_RAG_COLLECTION_DOCUMENT_DELETE_SUCCESS_ENTID': idmap,
        'AI4CALL_TEST_LIVE': 'FALSE',
        'AI4CALL_TEST_EXPLAIN': 'FALSE',
        'AI4CALL_APIKEY': '',
    });
    idmap = env['AI4CALL_TEST_RAG_COLLECTION_DOCUMENT_DELETE_SUCCESS_ENTID'];
    const live = 'TRUE' === env.AI4CALL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['AI4CALL_TEST_RAG_COLLECTION_DOCUMENT_DELETE_SUCCESS_ENTID'];
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
//# sourceMappingURL=RagCollectionDocumentDeleteSuccessEntity.test.js.map