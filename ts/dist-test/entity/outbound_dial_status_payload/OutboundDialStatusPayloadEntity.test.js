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
(0, node_test_1.describe)('OutboundDialStatusPayloadEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('AI4CALL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.Ai4callSDK.test();
        const ent = testsdk.OutboundDialStatusPayload();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'outbound_dial_status_payload.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "billSec": { "a": true, "h": "Bill Sec", "n": "billSec", "r": true, "sh": "Billed duration in seconds.", "t": "`$INTEGER`", "key$": "billSec", "index$": 0 }, "dialStatus": { "a": true, "h": "Dial Status", "n": "dialStatus", "r": true, "sh": "Final dial result persisted in the outbound CDR.", "t": "`$STRING`", "key$": "dialStatus", "index$": 1 }, "trafficCost": { "a": true, "h": "Traffic Cost", "n": "trafficCost", "r": true, "sh": "Outbound traffic cost in EUR, expressed with six decimal places.", "t": "`$STRING`", "key$": "trafficCost", "index$": 2 } }, "name": "outbound_dial_status_payload", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /getDialstatus/{uuid}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "4f9ab147-ef47-4b54-9987-1dd30288c610", "k": "param", "n": "uuid", "or": "uuid", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/getDialstatus/{uuid}", "q": { "exist": ["uuid"] }, "r": {}, "s": [{ "lit": "getDialstatus" }, { "var": "uuid" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "outbound_dial_status_payload", "name__orig": "outbound_dial_status_payload", "Name": "OutboundDialStatusPayload", "name_": "outbound_dial_status_payload", "name-": "outbound-dial-status-payload", "NAME": "OUTBOUND_DIAL_STATUS_PAYLOAD", "index$": 54 }, { "active": true, "entity": "outbound_dial_status_payload", "key$": "BasicOutboundDialStatusPayloadFlow", "kind": "basic", "name": "BasicOutboundDialStatusPayloadFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "outbound_dial_status_payload_ref01", "srcdatavar": "outbound_dial_status_payload_ref01_data", "suffix": "_dt0" }, "m": { "id": "outbound_dial_status_payload01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-outbound_dial_status_payload_ref01" } }] }] }, 'OutboundDialStatusPayload', { "GET /getDialstatus/{uuid}": { "protocol": "http", "parameters": [{ "name": "uuid", "in": "path", "required": true, "description": "Outbound internal ID received in the callback.", "schema": { "type": "string", "format": "uuid", "description": "UUID generated by AI4Call to correlate the outbound request, callback and final dial-status lookup.", "example": "4f9ab147-ef47-4b54-9987-1dd30288c610", "x-ref": "#/components/schemas/OutboundInternalId" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let outbound_dial_status_payload_ref01_data = Object.values(setup.data.existing.outbound_dial_status_payload)[0];
        // LOAD: skipped — no entity id field and load requires path params.
        // Entity-var is declared here so later flow steps still compile.
        const outbound_dial_status_payload_ref01_ent = client.OutboundDialStatusPayload();
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/outbound_dial_status_payload/OutboundDialStatusPayloadTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.Ai4callSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['outbound_dial_status_payload01', 'outbound_dial_status_payload02', 'outbound_dial_status_payload03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'AI4CALL_TEST_OUTBOUND_DIAL_STATUS_PAYLOAD_ENTID': idmap,
        'AI4CALL_TEST_LIVE': 'FALSE',
        'AI4CALL_TEST_EXPLAIN': 'FALSE',
        'AI4CALL_APIKEY': '',
    });
    idmap = env['AI4CALL_TEST_OUTBOUND_DIAL_STATUS_PAYLOAD_ENTID'];
    const live = 'TRUE' === env.AI4CALL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['AI4CALL_TEST_OUTBOUND_DIAL_STATUS_PAYLOAD_ENTID'];
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
//# sourceMappingURL=OutboundDialStatusPayloadEntity.test.js.map