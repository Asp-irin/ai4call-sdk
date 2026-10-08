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
(0, node_test_1.describe)('RagCollectionDocumentUploadStatusSuccessEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('AI4CALL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.Ai4callSDK.test();
        const ent = testsdk.RagCollectionDocumentUploadStatusSuccess();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'rag_collection_document_upload_status_success.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "currentFile": { "a": true, "h": "Current File", "n": "currentFile", "r": true, "t": "`$STRING`", "key$": "currentFile", "index$": 0 }, "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 1 }, "processedFiles": { "a": true, "h": "Processed Files", "n": "processedFiles", "r": true, "t": "`$INTEGER`", "key$": "processedFiles", "index$": 2 }, "progress": { "a": true, "h": "Progress", "n": "progress", "r": true, "t": "`$NUMBER`", "key$": "progress", "index$": 3 }, "raw": { "a": true, "h": "Raw", "n": "raw", "r": true, "t": "`$OBJECT`", "key$": "raw", "index$": 4 }, "results": { "a": true, "h": "Results", "n": "results", "r": true, "t": "`$ARRAY`", "key$": "results", "index$": 5 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "t": "`$STRING`", "key$": "status", "index$": 6 }, "totalCost": { "a": true, "h": "Total Cost", "n": "totalCost", "r": true, "t": "`$NUMBER`", "key$": "totalCost", "index$": 7 }, "totalFiles": { "a": true, "h": "Total Files", "n": "totalFiles", "r": true, "t": "`$INTEGER`", "key$": "totalFiles", "index$": 8 }, "totalTokens": { "a": true, "h": "Total Tokens", "n": "totalTokens", "r": true, "t": "`$INTEGER`", "key$": "totalTokens", "index$": 9 }, "uploadId": { "a": true, "h": "Upload Id", "n": "uploadId", "r": true, "t": "`$STRING`", "key$": "uploadId", "index$": 10 } }, "name": "rag_collection_document_upload_status_success", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v1/catalog/rag/uploads/{uploadId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "upload_id", "or": "uploadId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v1/catalog/rag/uploads/{uploadId}", "q": { "exist": ["upload_id"] }, "r": { "param": { "uploadId": "upload_id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "catalog" }, { "lit": "rag" }, { "lit": "uploads" }, { "var": "upload_id" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/v1/rag/uploads/{uploadId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "upload_id", "or": "uploadId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v1/rag/uploads/{uploadId}", "q": { "exist": ["upload_id"] }, "r": { "param": { "uploadId": "upload_id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "rag" }, { "lit": "uploads" }, { "var": "upload_id" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "rag_collection_document_upload_status_success", "name__orig": "rag_collection_document_upload_status_success", "Name": "RagCollectionDocumentUploadStatusSuccess", "name_": "rag_collection_document_upload_status_success", "name-": "rag-collection-document-upload-status-success", "NAME": "RAG_COLLECTION_DOCUMENT_UPLOAD_STATUS_SUCCESS", "index$": 65 }, { "active": true, "entity": "rag_collection_document_upload_status_success", "key$": "BasicRagCollectionDocumentUploadStatusSuccessFlow", "kind": "basic", "name": "BasicRagCollectionDocumentUploadStatusSuccessFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "rag_collection_document_upload_status_success_ref01", "srcdatavar": "rag_collection_document_upload_status_success_ref01_data", "suffix": "_dt0" }, "m": { "id": "rag_collection_document_upload_status_success01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-rag_collection_document_upload_status_success_ref01" } }] }] }, 'RagCollectionDocumentUploadStatusSuccess', { "GET /api/v1/catalog/rag/uploads/{uploadId}": { "protocol": "http", "parameters": [{ "name": "uploadId", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "GET /api/v1/rag/uploads/{uploadId}": { "protocol": "http", "parameters": [{ "name": "uploadId", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let rag_collection_document_upload_status_success_ref01_data = Object.values(setup.data.existing.rag_collection_document_upload_status_success)[0];
        // LOAD: skipped — no entity id field and load requires path params.
        // Entity-var is declared here so later flow steps still compile.
        const rag_collection_document_upload_status_success_ref01_ent = client.RagCollectionDocumentUploadStatusSuccess();
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/rag_collection_document_upload_status_success/RagCollectionDocumentUploadStatusSuccessTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.Ai4callSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['rag_collection_document_upload_status_success01', 'rag_collection_document_upload_status_success02', 'rag_collection_document_upload_status_success03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'AI4CALL_TEST_RAG_COLLECTION_DOCUMENT_UPLOAD_STATUS_SUCCESS_ENTID': idmap,
        'AI4CALL_TEST_LIVE': 'FALSE',
        'AI4CALL_TEST_EXPLAIN': 'FALSE',
        'AI4CALL_APIKEY': '',
    });
    idmap = env['AI4CALL_TEST_RAG_COLLECTION_DOCUMENT_UPLOAD_STATUS_SUCCESS_ENTID'];
    const live = 'TRUE' === env.AI4CALL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['AI4CALL_TEST_RAG_COLLECTION_DOCUMENT_UPLOAD_STATUS_SUCCESS_ENTID'];
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
//# sourceMappingURL=RagCollectionDocumentUploadStatusSuccessEntity.test.js.map