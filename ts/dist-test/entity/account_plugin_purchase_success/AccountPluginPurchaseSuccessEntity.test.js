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
(0, node_test_1.describe)('AccountPluginPurchaseSuccessEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('AI4CALL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.Ai4callSDK.test();
        const ent = testsdk.AccountPluginPurchaseSuccess();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE;
        for (const op of ['update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'account_plugin_purchase_success.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "configuration": { "a": true, "h": "Configuration", "n": "configuration", "r": true, "sh": "Result of a plugin purchase, including charged prices and created instance data.", "t": "`$OBJECT`", "key$": "configuration", "index$": 0 }, "instanceName": { "a": true, "h": "Instance Name", "n": "instanceName", "r": false, "sh": "Value supplied for `instanceName` in the `AccountPluginPurchaseRequest` request.", "t": "`$STRING`", "key$": "instanceName", "index$": 1 }, "instance_name": { "a": true, "de": true, "h": "Instance Name", "n": "instance_name", "r": false, "sh": "Legacy alias of `instanceName`.", "t": "`$STRING`", "key$": "instance_name", "index$": 2 }, "pluginName": { "a": true, "h": "Plugin Name", "n": "pluginName", "r": false, "sh": "Value supplied for `pluginName` in the `AccountPluginPurchaseRequest` request.", "t": "`$STRING`", "key$": "pluginName", "index$": 3 }, "plugin_name": { "a": true, "de": true, "h": "Plugin Name", "n": "plugin_name", "r": false, "sh": "Legacy alias of `pluginName`.", "t": "`$STRING`", "key$": "plugin_name", "index$": 4 } }, "name": "account_plugin_purchase_success", "op": { "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /api/v1/account/plugins/purchase", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "PATCH", "o": "/api/v1/account/plugins/purchase", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "account" }, { "lit": "plugins" }, { "lit": "purchase" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "account_plugin_purchase_success", "name__orig": "account_plugin_purchase_success", "Name": "AccountPluginPurchaseSuccess", "name_": "account_plugin_purchase_success", "name-": "account-plugin-purchase-success", "NAME": "ACCOUNT_PLUGIN_PURCHASE_SUCCESS", "index$": 6 }, { "active": true, "entity": "account_plugin_purchase_success", "key$": "BasicAccountPluginPurchaseSuccessFlow", "kind": "basic", "name": "BasicAccountPluginPurchaseSuccessFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "account_plugin_purchase_success_ref01", "srcdatavar": "account_plugin_purchase_success_ref01_data", "suffix": "_up0", "textfield": "instanceName" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-account_plugin_purchase_success_ref01" } }], "v": [] }] }, 'AccountPluginPurchaseSuccess', { "PATCH /api/v1/account/plugins/purchase": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "description": "Purchase a plugin using the plugin name returned by `GET /api/v1/account/plugins/available`.\n\nOperational rules:\n- `pluginName` must match the value returned from the catalog\n- `instanceName` and optional\n- if `instanceName` is not present, the backend automatically generates `Istanza N`\n- legacy snake_case aliases remain accepted but are deprecated", "properties": { "pluginName": { "description": "Value supplied for `pluginName` in the `AccountPluginPurchaseRequest` request.", "type": "string", "key$": "pluginName" }, "instanceName": { "description": "Value supplied for `instanceName` in the `AccountPluginPurchaseRequest` request.", "type": "string", "key$": "instanceName" }, "plugin_name": { "type": "string", "deprecated": true, "description": "Legacy alias of `pluginName`.", "key$": "plugin_name" }, "instance_name": { "type": "string", "deprecated": true, "description": "Legacy alias of `instanceName`.", "key$": "instance_name" } }, "anyOf": [{ "required": ["pluginName"] }, { "required": ["plugin_name"] }], "x-ref": "#/components/schemas/AccountPluginPurchaseRequest", "index$": 1 }, "examples": { "withCustomInstanceName": { "summary": "Purchase a plugin with an explicit instance name", "value": { "pluginName": "Google Sheets", "instanceName": "Sheets Produzione" } }, "withGeneratedInstanceName": { "summary": "Purchase a plugin with an automatic instance name", "value": { "pluginName": "Google Sheets" } } } } } }, "parameters": [] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let account_plugin_purchase_success_ref01_data = Object.values(setup.data.existing.account_plugin_purchase_success)[0];
        // UPDATE
        const account_plugin_purchase_success_ref01_ent = client.AccountPluginPurchaseSuccess();
        const account_plugin_purchase_success_ref01_data_up0 = {};
        const account_plugin_purchase_success_ref01_markdef_up0 = { name: 'instanceName', value: 'Mark01-account_plugin_purchase_success_ref01_' + setup.now };
        account_plugin_purchase_success_ref01_data_up0[account_plugin_purchase_success_ref01_markdef_up0.name] = account_plugin_purchase_success_ref01_markdef_up0.value;
        const account_plugin_purchase_success_ref01_resdata_up0 = (await account_plugin_purchase_success_ref01_ent.update(account_plugin_purchase_success_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != account_plugin_purchase_success_ref01_resdata_up0);
        (0, node_assert_1.default)(account_plugin_purchase_success_ref01_resdata_up0[account_plugin_purchase_success_ref01_markdef_up0.name] === account_plugin_purchase_success_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/account_plugin_purchase_success/AccountPluginPurchaseSuccessTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.Ai4callSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['account_plugin_purchase_success01', 'account_plugin_purchase_success02', 'account_plugin_purchase_success03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'AI4CALL_TEST_ACCOUNT_PLUGIN_PURCHASE_SUCCESS_ENTID': idmap,
        'AI4CALL_TEST_LIVE': 'FALSE',
        'AI4CALL_TEST_EXPLAIN': 'FALSE',
        'AI4CALL_APIKEY': '',
    });
    idmap = env['AI4CALL_TEST_ACCOUNT_PLUGIN_PURCHASE_SUCCESS_ENTID'];
    const live = 'TRUE' === env.AI4CALL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['AI4CALL_TEST_ACCOUNT_PLUGIN_PURCHASE_SUCCESS_ENTID'];
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
//# sourceMappingURL=AccountPluginPurchaseSuccessEntity.test.js.map