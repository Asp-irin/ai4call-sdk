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
(0, node_test_1.describe)('AccountAllowedIpsSuccessEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('AI4CALL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.Ai4callSDK.test();
        const ent = testsdk.AccountAllowedIpsSuccess();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'account_allowed_ips_success.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "addIps": { "a": true, "h": "Add Ips", "n": "addIps", "r": false, "sh": "Value supplied for `addIps` in the `AccountAllowedIpsUpdateRequest` request.", "t": "`$ARRAY`", "key$": "addIps", "index$": 0 }, "allowedIps": { "a": true, "h": "Allowed Ips", "n": "allowedIps", "r": false, "sh": "Value supplied for `allowedIps` in the `AccountAllowedIpsUpdateRequest` request.", "t": "`$ARRAY`", "key$": "allowedIps", "index$": 1 }, "data": { "a": true, "h": "Data", "n": "data", "r": true, "t": "`$OBJECT`", "key$": "data", "index$": 2 }, "deleteIps": { "a": true, "h": "Delete Ips", "n": "deleteIps", "r": false, "sh": "Value supplied for `deleteIps` in the `AccountAllowedIpsUpdateRequest` request.", "t": "`$ARRAY`", "key$": "deleteIps", "index$": 3 }, "message": { "a": true, "h": "Message", "n": "message", "r": true, "t": "`$STRING`", "key$": "message", "index$": 4 }, "meta": { "a": true, "h": "Meta", "n": "meta", "r": true, "t": "`$OBJECT`", "key$": "meta", "index$": 5 }, "requestId": { "a": true, "h": "Request Id", "n": "requestId", "r": true, "t": "`$STRING`", "key$": "requestId", "index$": 6 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "t": "`$BOOLEAN`", "key$": "success", "index$": 7 } }, "name": "account_allowed_ips_success", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v1/account/allowed-ips", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/api/v1/account/allowed-ips", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "account" }, { "lit": "allowed-ips" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /api/v1/account/allowed-ips", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "PATCH", "o": "/api/v1/account/allowed-ips", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "account" }, { "lit": "allowed-ips" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "account_allowed_ips_success", "name__orig": "account_allowed_ips_success", "Name": "AccountAllowedIpsSuccess", "name_": "account_allowed_ips_success", "name-": "account-allowed-ips-success", "NAME": "ACCOUNT_ALLOWED_IPS_SUCCESS", "index$": 0 }, { "active": true, "entity": "account_allowed_ips_success", "key$": "BasicAccountAllowedIpsSuccessFlow", "kind": "basic", "name": "BasicAccountAllowedIpsSuccessFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "account_allowed_ips_success_ref01", "srcdatavar": "account_allowed_ips_success_ref01_data", "suffix": "_up0", "textfield": "message" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-account_allowed_ips_success_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "account_allowed_ips_success_ref01", "srcdatavar": "account_allowed_ips_success_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-account_allowed_ips_success_ref01" } }] }] }, 'AccountAllowedIpsSuccess', { "GET /api/v1/account/allowed-ips": { "protocol": "http", "parameters": [] }, "PATCH /api/v1/account/allowed-ips": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "description": "PATCH merge the account's allowed IP configuration.\n\nOperational rules:\n- `allowedIps` completely replaces the current list\n- `addIps` adds new IPs or updates the `description` of an already existing IP\n- `deleteIps` removes the indicated IPs\n- `allowedIps` cannot be combined with `addIps` or `deleteIps`\n- `allowedIps: []` removes all IPs\n- `description: null` or empty string removes the IP description", "properties": { "allowedIps": { "description": "Value supplied for `allowedIps` in the `AccountAllowedIpsUpdateRequest` request.", "type": "array", "items": { "type": "object", "properties": { "ip": { "type": "string", "format": "ipv4" }, "description": { "type": "string", "nullable": true } }, "required": ["ip"], "x-ref": "#/components/schemas/AccountAllowedIpMutationItem" }, "key$": "allowedIps" }, "addIps": { "description": "Value supplied for `addIps` in the `AccountAllowedIpsUpdateRequest` request.", "type": "array", "items": { "type": "object", "properties": { "ip": { "type": "string", "format": "ipv4" }, "description": { "type": "string", "nullable": true } }, "required": ["ip"], "x-ref": "#/components/schemas/AccountAllowedIpMutationItem" }, "key$": "addIps" }, "deleteIps": { "description": "Value supplied for `deleteIps` in the `AccountAllowedIpsUpdateRequest` request.", "type": "array", "items": { "type": "string", "format": "ipv4" }, "key$": "deleteIps" } }, "x-ref": "#/components/schemas/AccountAllowedIpsUpdateRequest", "index$": 1 }, "examples": { "replaceAll": { "summary": "Completely replaces the list", "value": { "allowedIps": [{ "ip": "10.10.10.5", "description": "Main office" }, { "ip": "192.168.1.20", "description": "House" }] } }, "addIp": { "summary": "Adds a new IP", "value": { "addIps": [{ "ip": "203.0.113.10", "description": "VPN" }] } }, "updateDescription": { "summary": "Update the description of an IP already present", "value": { "addIps": [{ "ip": "10.10.10.5", "description": "Milan office" }] } }, "deleteIp": { "summary": "Remove one or more IPs", "value": { "deleteIps": ["192.168.1.20", "203.0.113.10"] } } } } } }, "parameters": [] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let account_allowed_ips_success_ref01_data = Object.values(setup.data.existing.account_allowed_ips_success)[0];
        // UPDATE
        const account_allowed_ips_success_ref01_ent = client.AccountAllowedIpsSuccess();
        const account_allowed_ips_success_ref01_data_up0 = {};
        const account_allowed_ips_success_ref01_markdef_up0 = { name: 'message', value: 'Mark01-account_allowed_ips_success_ref01_' + setup.now };
        account_allowed_ips_success_ref01_data_up0[account_allowed_ips_success_ref01_markdef_up0.name] = account_allowed_ips_success_ref01_markdef_up0.value;
        const account_allowed_ips_success_ref01_resdata_up0 = (await account_allowed_ips_success_ref01_ent.update(account_allowed_ips_success_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != account_allowed_ips_success_ref01_resdata_up0);
        (0, node_assert_1.default)(account_allowed_ips_success_ref01_resdata_up0[account_allowed_ips_success_ref01_markdef_up0.name] === account_allowed_ips_success_ref01_markdef_up0.value);
        // LOAD
        const account_allowed_ips_success_ref01_match_dt0 = {};
        const account_allowed_ips_success_ref01_data_dt0 = (await account_allowed_ips_success_ref01_ent.load(account_allowed_ips_success_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != account_allowed_ips_success_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/account_allowed_ips_success/AccountAllowedIpsSuccessTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.Ai4callSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['account_allowed_ips_success01', 'account_allowed_ips_success02', 'account_allowed_ips_success03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'AI4CALL_TEST_ACCOUNT_ALLOWED_IPS_SUCCESS_ENTID': idmap,
        'AI4CALL_TEST_LIVE': 'FALSE',
        'AI4CALL_TEST_EXPLAIN': 'FALSE',
        'AI4CALL_APIKEY': '',
    });
    idmap = env['AI4CALL_TEST_ACCOUNT_ALLOWED_IPS_SUCCESS_ENTID'];
    const live = 'TRUE' === env.AI4CALL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['AI4CALL_TEST_ACCOUNT_ALLOWED_IPS_SUCCESS_ENTID'];
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
//# sourceMappingURL=AccountAllowedIpsSuccessEntity.test.js.map