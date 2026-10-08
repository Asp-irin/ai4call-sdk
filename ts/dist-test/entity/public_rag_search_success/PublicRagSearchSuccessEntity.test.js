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
(0, node_test_1.describe)('PublicRagSearchSuccessEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('AI4CALL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.Ai4callSDK.test();
        const ent = testsdk.PublicRagSearchSuccess();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'public_rag_search_success.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "count": { "a": true, "h": "Count", "n": "count", "r": true, "sh": "Number of chunks returned by the search, up to the service limit of 4.", "t": "`$INTEGER`", "key$": "count", "index$": 0 }, "query": { "a": true, "h": "Query", "n": "query", "r": true, "sh": "Normalized query text used for the search.", "t": "`$STRING`", "key$": "query", "index$": 1 }, "rag_id": { "a": true, "h": "Rag Id", "n": "rag_id", "r": true, "sh": "Public RAG identifier supplied in the request and returned unchanged on success.", "t": "`$STRING`", "key$": "rag_id", "index$": 2 }, "results": { "a": true, "h": "Results", "n": "results", "r": true, "sh": "Chunks returned by the vector search.", "t": "`$ARRAY`", "key$": "results", "index$": 3 } }, "name": "public_rag_search_success", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /public/v1/rag/search", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/public/v1/rag/search", "q": {}, "r": {}, "s": [{ "lit": "public" }, { "lit": "v1" }, { "lit": "rag" }, { "lit": "search" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "public_rag_search_success", "name__orig": "public_rag_search_success", "Name": "PublicRagSearchSuccess", "name_": "public_rag_search_success", "name-": "public-rag-search-success", "NAME": "PUBLIC_RAG_SEARCH_SUCCESS", "index$": 60 }, { "active": true, "entity": "public_rag_search_success", "key$": "BasicPublicRagSearchSuccessFlow", "kind": "basic", "name": "BasicPublicRagSearchSuccessFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "public_rag_search_success_ref01" }, "m": {}, "o": "create", "s": [], "v": [] }] }, 'PublicRagSearchSuccess', { "POST /public/v1/rag/search": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "description": "Public RAG search request accepted by the dedicated RAG service.", "type": "object", "properties": { "rag_id": { "type": "string", "description": "Public API ID of the RAG collection shown in the portal UI", "example": "rag_8K2mP9zQ4xL7", "key$": "rag_id" }, "query": { "type": "string", "description": "Text to search semantically in the RAG collection", "example": "coca", "key$": "query" } }, "required": ["rag_id", "query"], "x-ref": "#/components/schemas/PublicRagSearchRequest", "index$": 1 }, "example": { "rag_id": "rag_8K2mP9zQ4xL7", "query": "coca" } } } }, "parameters": [] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const public_rag_search_success_ref01_ent = client.PublicRagSearchSuccess();
        let public_rag_search_success_ref01_data = setup.data.new.public_rag_search_success['public_rag_search_success_ref01'];
        public_rag_search_success_ref01_data = (await public_rag_search_success_ref01_ent.create(public_rag_search_success_ref01_data)).data();
        (0, node_assert_1.default)(null != public_rag_search_success_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/public_rag_search_success/PublicRagSearchSuccessTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.Ai4callSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['public_rag_search_success01', 'public_rag_search_success02', 'public_rag_search_success03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'AI4CALL_TEST_PUBLIC_RAG_SEARCH_SUCCESS_ENTID': idmap,
        'AI4CALL_TEST_LIVE': 'FALSE',
        'AI4CALL_TEST_EXPLAIN': 'FALSE',
        'AI4CALL_APIKEY': '',
    });
    idmap = env['AI4CALL_TEST_PUBLIC_RAG_SEARCH_SUCCESS_ENTID'];
    const live = 'TRUE' === env.AI4CALL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['AI4CALL_TEST_PUBLIC_RAG_SEARCH_SUCCESS_ENTID'];
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
//# sourceMappingURL=PublicRagSearchSuccessEntity.test.js.map