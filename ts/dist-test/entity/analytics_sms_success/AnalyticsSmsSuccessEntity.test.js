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
(0, node_test_1.describe)('AnalyticsSmsSuccessEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('AI4CALL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.Ai4callSDK.test();
        const ent = testsdk.AnalyticsSmsSuccess();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'analytics_sms_success.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "data": { "a": true, "h": "Data", "n": "data", "r": true, "t": "`$OBJECT`", "key$": "data", "index$": 0 }, "message": { "a": true, "h": "Message", "n": "message", "r": true, "t": "`$STRING`", "key$": "message", "index$": 1 }, "meta": { "a": true, "h": "Meta", "n": "meta", "r": true, "t": "`$OBJECT`", "key$": "meta", "index$": 2 }, "requestId": { "a": true, "h": "Request Id", "n": "requestId", "r": true, "t": "`$STRING`", "key$": "requestId", "index$": 3 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "t": "`$BOOLEAN`", "key$": "success", "index$": 4 } }, "name": "analytics_sms_success", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v1/account/analytics/sms", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "cursor", "or": "cursor", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "2026-04-24", "k": "query", "n": "end_date", "or": "endDate", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": 50, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "ex": "2026-04-01", "k": "query", "n": "start_date", "or": "startDate", "r": false, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/api/v1/account/analytics/sms", "q": { "exist": ["cursor", "end_date", "limit", "start_date"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "account" }, { "lit": "analytics" }, { "lit": "sms" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "analytics_sms_success", "name__orig": "analytics_sms_success", "Name": "AnalyticsSmsSuccess", "name_": "analytics_sms_success", "name-": "analytics-sms-success", "NAME": "ANALYTICS_SMS_SUCCESS", "index$": 14 }, { "active": true, "entity": "analytics_sms_success", "key$": "BasicAnalyticsSmsSuccessFlow", "kind": "basic", "name": "BasicAnalyticsSmsSuccessFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "analytics_sms_success_ref01", "srcdatavar": "analytics_sms_success_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-analytics_sms_success_ref01" } }] }] }, 'AnalyticsSmsSuccess', { "GET /api/v1/account/analytics/sms": { "protocol": "http", "parameters": [{ "in": "query", "name": "startDate", "required": false, "schema": { "type": "string", "format": "date" }, "description": "Filter start date (YYYY-MM-DD, included)", "example": "2026-04-01", "index$": 0 }, { "in": "query", "name": "endDate", "required": false, "schema": { "type": "string", "format": "date" }, "description": "Filter end date (YYYY-MM-DD, included)", "example": "2026-04-24", "index$": 1 }, { "in": "query", "name": "limit", "required": false, "schema": { "type": "integer", "minimum": 1, "maximum": 100 }, "description": "Maximum number of records. If omitted along with `cursor`, retains legacy non-paged behavior.", "example": 50, "index$": 2 }, { "in": "query", "name": "cursor", "required": false, "schema": { "type": "string" }, "description": "Opaque cursor returned in `meta.nextCursor` to read the next page.", "index$": 3 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let analytics_sms_success_ref01_data = Object.values(setup.data.existing.analytics_sms_success)[0];
        // LOAD
        const analytics_sms_success_ref01_ent = client.AnalyticsSmsSuccess();
        const analytics_sms_success_ref01_match_dt0 = {};
        const analytics_sms_success_ref01_data_dt0 = (await analytics_sms_success_ref01_ent.load(analytics_sms_success_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != analytics_sms_success_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/analytics_sms_success/AnalyticsSmsSuccessTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.Ai4callSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['analytics_sms_success01', 'analytics_sms_success02', 'analytics_sms_success03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'AI4CALL_TEST_ANALYTICS_SMS_SUCCESS_ENTID': idmap,
        'AI4CALL_TEST_LIVE': 'FALSE',
        'AI4CALL_TEST_EXPLAIN': 'FALSE',
        'AI4CALL_APIKEY': '',
    });
    idmap = env['AI4CALL_TEST_ANALYTICS_SMS_SUCCESS_ENTID'];
    const live = 'TRUE' === env.AI4CALL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['AI4CALL_TEST_ANALYTICS_SMS_SUCCESS_ENTID'];
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
//# sourceMappingURL=AnalyticsSmsSuccessEntity.test.js.map