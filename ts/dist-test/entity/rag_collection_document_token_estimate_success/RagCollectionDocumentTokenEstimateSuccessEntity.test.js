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
(0, node_test_1.describe)('RagCollectionDocumentTokenEstimateSuccessEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('AI4CALL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.Ai4callSDK.test();
        const ent = testsdk.RagCollectionDocumentTokenEstimateSuccess();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'rag_collection_document_token_estimate_success.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "estimatedCost": { "a": true, "h": "Estimated Cost", "n": "estimatedCost", "r": true, "t": "`$NUMBER`", "key$": "estimatedCost", "index$": 0 }, "fileCount": { "a": true, "h": "File Count", "n": "fileCount", "r": true, "t": "`$INTEGER`", "key$": "fileCount", "index$": 1 }, "fileDetails": { "a": true, "h": "File Details", "n": "fileDetails", "r": true, "t": "`$ARRAY`", "key$": "fileDetails", "index$": 2 }, "processingTime": { "a": true, "h": "Processing Time", "n": "processingTime", "r": true, "t": "`$INTEGER`", "key$": "processingTime", "index$": 3 }, "raw": { "a": true, "h": "Raw", "n": "raw", "r": true, "t": "`$OBJECT`", "key$": "raw", "index$": 4 }, "totalTokens": { "a": true, "h": "Total Tokens", "n": "totalTokens", "r": true, "t": "`$INTEGER`", "key$": "totalTokens", "index$": 5 } }, "name": "rag_collection_document_token_estimate_success", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v1/catalog/rag/documents/estimate", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/v1/catalog/rag/documents/estimate", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "catalog" }, { "lit": "rag" }, { "lit": "documents" }, { "lit": "estimate" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /api/v1/rag/documents/estimate", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/v1/rag/documents/estimate", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "rag" }, { "lit": "documents" }, { "lit": "estimate" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "rag_collection_document_token_estimate_success", "name__orig": "rag_collection_document_token_estimate_success", "Name": "RagCollectionDocumentTokenEstimateSuccess", "name_": "rag_collection_document_token_estimate_success", "name-": "rag-collection-document-token-estimate-success", "NAME": "RAG_COLLECTION_DOCUMENT_TOKEN_ESTIMATE_SUCCESS", "index$": 64 }, { "active": true, "entity": "rag_collection_document_token_estimate_success", "key$": "BasicRagCollectionDocumentTokenEstimateSuccessFlow", "kind": "basic", "name": "BasicRagCollectionDocumentTokenEstimateSuccessFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "rag_collection_document_token_estimate_success_ref01" }, "m": {}, "o": "create", "s": [], "v": [] }] }, 'RagCollectionDocumentTokenEstimateSuccess', { "POST /api/v1/catalog/rag/documents/estimate": { "protocol": "http", "requestBody": { "required": true, "content": { "multipart/form-data": { "schema": { "type": "object", "properties": { "files": { "type": "array", "items": { "type": "string", "format": "binary" } } }, "required": ["files"] }, "encoding": { "files": { "style": "form" } }, "example": { "files": ["listino.pdf", "faq.txt"] } } } }, "parameters": [] }, "POST /api/v1/rag/documents/estimate": { "protocol": "http", "requestBody": { "required": true, "content": { "multipart/form-data": { "schema": { "type": "object", "properties": { "files": { "type": "array", "items": { "type": "string", "format": "binary" } } }, "required": ["files"] }, "encoding": { "files": { "style": "form" } }, "example": { "files": ["listino.pdf", "faq.txt"] } } } }, "parameters": [] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const rag_collection_document_token_estimate_success_ref01_ent = client.RagCollectionDocumentTokenEstimateSuccess();
        let rag_collection_document_token_estimate_success_ref01_data = setup.data.new.rag_collection_document_token_estimate_success['rag_collection_document_token_estimate_success_ref01'];
        rag_collection_document_token_estimate_success_ref01_data = (await rag_collection_document_token_estimate_success_ref01_ent.create(rag_collection_document_token_estimate_success_ref01_data)).data();
        (0, node_assert_1.default)(null != rag_collection_document_token_estimate_success_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/rag_collection_document_token_estimate_success/RagCollectionDocumentTokenEstimateSuccessTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.Ai4callSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['rag_collection_document_token_estimate_success01', 'rag_collection_document_token_estimate_success02', 'rag_collection_document_token_estimate_success03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'AI4CALL_TEST_RAG_COLLECTION_DOCUMENT_TOKEN_ESTIMATE_SUCCESS_ENTID': idmap,
        'AI4CALL_TEST_LIVE': 'FALSE',
        'AI4CALL_TEST_EXPLAIN': 'FALSE',
        'AI4CALL_APIKEY': '',
    });
    idmap = env['AI4CALL_TEST_RAG_COLLECTION_DOCUMENT_TOKEN_ESTIMATE_SUCCESS_ENTID'];
    const live = 'TRUE' === env.AI4CALL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['AI4CALL_TEST_RAG_COLLECTION_DOCUMENT_TOKEN_ESTIMATE_SUCCESS_ENTID'];
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
//# sourceMappingURL=RagCollectionDocumentTokenEstimateSuccessEntity.test.js.map