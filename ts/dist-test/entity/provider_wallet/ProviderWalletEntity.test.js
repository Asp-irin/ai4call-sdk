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
(0, node_test_1.describe)('ProviderWalletEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('AI4CALL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.Ai4callSDK.test();
        const ent = testsdk.ProviderWallet();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE;
        for (const op of ['create', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'provider_wallet.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "config": { "a": true, "h": "Config", "n": "config", "op": { "update": { "req": false, "type": "`$OBJECT`" } }, "r": true, "sh": "Values of the fields declared by the catalog entry", "t": "`$OBJECT`", "key$": "config", "index$": 0 }, "credential": { "a": true, "h": "Credential", "n": "credential", "r": true, "sh": "A credential saved by the customer.", "t": "`$OBJECT`", "key$": "credential", "index$": 1 }, "data": { "a": true, "h": "Data", "n": "data", "r": true, "t": "`$OBJECT`", "key$": "data", "index$": 2 }, "engine": { "a": true, "h": "Engine", "n": "engine", "r": true, "sh": "Engine code selected from the provider-wallet catalog.", "t": "`$STRING`", "key$": "engine", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 4 }, "isActive": { "a": true, "h": "Is Active", "n": "isActive", "r": false, "sh": "Whether the saved credential can be used by assistant runtimes.", "t": "`$BOOLEAN`", "key$": "isActive", "index$": 5 }, "message": { "a": true, "h": "Message", "n": "message", "r": true, "t": "`$STRING`", "key$": "message", "index$": 6 }, "meta": { "a": true, "h": "Meta", "n": "meta", "r": false, "t": "`$OBJECT`", "key$": "meta", "index$": 7 }, "name": { "a": true, "h": "Name", "n": "name", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "Customer-defined name for the saved credential.", "t": "`$STRING`", "key$": "name", "index$": 8 }, "provider": { "a": true, "h": "Provider", "n": "provider", "r": true, "sh": "Provider code selected from the provider-wallet catalog.", "t": "`$STRING`", "key$": "provider", "index$": 9 }, "requestId": { "a": true, "h": "Request Id", "n": "requestId", "r": true, "t": "`$STRING`", "key$": "requestId", "index$": 10 }, "serviceType": { "a": true, "h": "Service Type", "n": "serviceType", "r": true, "sh": "Service category selected from the provider-wallet catalog.", "t": "`$STRING`", "key$": "serviceType", "index$": 11 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "t": "`$BOOLEAN`", "key$": "success", "index$": 12 } }, "id": { "field": "id", "name": "id" }, "name": "provider_wallet", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v1/account/provider-wallet", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/v1/account/provider-wallet", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "account" }, { "lit": "provider-wallet" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v1/account/provider-wallet", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "cursor", "or": "cursor", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v1/account/provider-wallet", "q": { "exist": ["cursor", "limit"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "account" }, { "lit": "provider-wallet" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/v1/account/provider-wallet/{providerWalletId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": 42, "k": "param", "n": "id", "or": "providerWalletId", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v1/account/provider-wallet/{providerWalletId}", "q": { "exist": ["id"] }, "r": { "param": { "providerWalletId": "id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "account" }, { "lit": "provider-wallet" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /api/v1/account/provider-wallet/{providerWalletId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": 42, "k": "param", "n": "id", "or": "providerWalletId", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/api/v1/account/provider-wallet/{providerWalletId}", "q": { "exist": ["id"] }, "r": { "param": { "providerWalletId": "id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "account" }, { "lit": "provider-wallet" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /api/v1/account/provider-wallet/{providerWalletId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": 42, "k": "param", "n": "id", "or": "providerWalletId", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/api/v1/account/provider-wallet/{providerWalletId}", "q": { "exist": ["id"] }, "r": { "param": { "providerWalletId": "id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "account" }, { "lit": "provider-wallet" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "provider_wallet", "name__orig": "provider_wallet", "Name": "ProviderWallet", "name_": "provider_wallet", "name-": "provider-wallet", "NAME": "PROVIDER_WALLET", "index$": 57 }, { "active": true, "entity": "provider_wallet", "key$": "BasicProviderWalletFlow", "kind": "basic", "name": "BasicProviderWalletFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "provider_wallet_ref01" }, "m": {}, "o": "create", "s": [], "v": [] }, { "a": true, "d": {}, "i": { "ref": "provider_wallet_ref01", "srcdatavar": "provider_wallet_ref01_data", "suffix": "_up0", "textfield": "engine" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-provider_wallet_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "provider_wallet_ref01", "srcdatavar": "provider_wallet_ref01_data", "suffix": "_dt0" }, "m": { "id": "provider_wallet01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-provider_wallet_ref01" } }] }, { "a": true, "d": {}, "i": { "ref": "provider_wallet_ref01", "suffix": "_rm0" }, "m": { "id": "provider_wallet01" }, "o": "remove", "s": [], "v": [] }] }, 'ProviderWallet', { "POST /api/v1/account/provider-wallet": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "description": "Creation of a credential in the wallet.\n\nOperational rules:\n- `serviceType`, `provider` and `engine` must match an entry returned by\n  `GET /api/v1/account/provider-wallet/catalog`\n- `config` accepts only the keys declared by that entry's `fields`; any other key is rejected\n- every field marked `required` must be present and non-empty", "properties": { "serviceType": { "type": "string", "enum": ["llm", "tts", "asr", "voice_llm"], "description": "Service category selected from the provider-wallet catalog.", "x-ref": "#/components/schemas/ProviderWalletServiceType", "key$": "serviceType" }, "provider": { "description": "Provider code selected from the provider-wallet catalog.", "type": "string", "example": "openai", "key$": "provider" }, "engine": { "description": "Engine code selected from the provider-wallet catalog.", "type": "string", "example": "openai", "key$": "engine" }, "name": { "description": "Customer-defined name for the saved credential.", "type": "string", "maxLength": 120, "example": "OpenAI produzione", "key$": "name" }, "config": { "type": "object", "additionalProperties": { "type": "string" }, "description": "Values of the fields declared by the catalog entry", "example": { "apiKey": "sk-proj-example" }, "key$": "config" } }, "required": ["serviceType", "provider", "engine", "name", "config"], "x-ref": "#/components/schemas/ProviderWalletCreateRequest", "index$": 1 }, "examples": { "openAiKey": { "summary": "OpenAI API key", "value": { "serviceType": "llm", "provider": "openai", "engine": "openai", "name": "OpenAI produzione", "config": { "apiKey": "sk-proj-example" } } }, "azureTts": { "summary": "Azure speech synthesis, key plus region", "value": { "serviceType": "tts", "provider": "Azure", "engine": "tts_live_azure_multi", "name": "Azure TTS", "config": { "apiKey": "azure-example-key", "region": "westeurope" } } }, "ollamaSelfHosted": { "summary": "Self-hosted Ollama, no key", "value": { "serviceType": "llm", "provider": "ollama", "engine": "ollama", "name": "Ollama interno", "config": { "baseUrl": "http://ollama.local:11434/v1" } } } } } } }, "parameters": [] }, "GET /api/v1/account/provider-wallet": { "protocol": "http", "parameters": [{ "name": "limit", "in": "query", "required": false, "description": "Maximum number of items returned in one cursor-paginated page. Omit both limit and cursor to preserve the legacy unpaginated response.", "schema": { "type": "integer", "minimum": 1, "maximum": 100 }, "index$": 0 }, { "name": "cursor", "in": "query", "required": false, "description": "Opaque cursor returned in meta.nextCursor by the previous page.", "schema": { "type": "string" }, "index$": 1 }] }, "GET /api/v1/account/provider-wallet/{providerWalletId}": { "protocol": "http", "parameters": [{ "in": "path", "name": "providerWalletId", "required": true, "schema": { "type": "integer", "minimum": 1 }, "description": "Id of the credential, returned when it was created or by the list endpoint", "example": 42, "index$": 0 }] }, "DELETE /api/v1/account/provider-wallet/{providerWalletId}": { "protocol": "http", "parameters": [{ "in": "path", "name": "providerWalletId", "required": true, "schema": { "type": "integer", "minimum": 1 }, "description": "Id of the credential, returned when it was created or by the list endpoint", "example": 42, "index$": 0 }] }, "PATCH /api/v1/account/provider-wallet/{providerWalletId}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "description": "PATCH merge of a credential.\n\nOperational rules:\n- at least one of `name`, `isActive` and `config` must be present\n- `serviceType`, `provider` and `engine` cannot be changed: to switch provider, create a new credential\n- inside `config`, an omitted or empty field keeps the value already saved — useful for secrets,\n  which the client can never read back", "properties": { "name": { "description": "New customer-defined credential name.", "type": "string", "maxLength": 120, "key$": "name" }, "isActive": { "description": "Whether the saved credential can be used by assistant runtimes.", "type": "boolean", "key$": "isActive" }, "config": { "description": "Credential fields to merge into the saved configuration.", "type": "object", "additionalProperties": { "type": "string" }, "key$": "config" } }, "minProperties": 1, "x-ref": "#/components/schemas/ProviderWalletUpdateRequest", "index$": 1 }, "examples": { "renameOnly": { "summary": "Rename, keeping the saved key", "value": { "name": "OpenAI produzione (rinnovata)" } }, "rotateKey": { "summary": "Replace the key", "value": { "config": { "apiKey": "sk-proj-new-value" } } }, "deactivate": { "summary": "Deactivate without deleting", "value": { "isActive": false } } } } } }, "parameters": [{ "in": "path", "name": "providerWalletId", "required": true, "schema": { "type": "integer", "minimum": 1 }, "description": "Id of the credential, returned when it was created or by the list endpoint", "example": 42, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const provider_wallet_ref01_ent = client.ProviderWallet();
        let provider_wallet_ref01_data = setup.data.new.provider_wallet['provider_wallet_ref01'];
        provider_wallet_ref01_data = (await provider_wallet_ref01_ent.create(provider_wallet_ref01_data)).data();
        (0, node_assert_1.default)(null != provider_wallet_ref01_data.id);
        // UPDATE
        const provider_wallet_ref01_data_up0 = {};
        provider_wallet_ref01_data_up0.id = provider_wallet_ref01_data.id;
        const provider_wallet_ref01_markdef_up0 = { name: 'engine', value: 'Mark01-provider_wallet_ref01_' + setup.now };
        provider_wallet_ref01_data_up0[provider_wallet_ref01_markdef_up0.name] = provider_wallet_ref01_markdef_up0.value;
        const provider_wallet_ref01_resdata_up0 = (await provider_wallet_ref01_ent.update(provider_wallet_ref01_data_up0)).data();
        (0, node_assert_1.default)(provider_wallet_ref01_resdata_up0.id === provider_wallet_ref01_data_up0.id);
        (0, node_assert_1.default)(provider_wallet_ref01_resdata_up0[provider_wallet_ref01_markdef_up0.name] === provider_wallet_ref01_markdef_up0.value);
        // LOAD
        const provider_wallet_ref01_match_dt0 = {};
        provider_wallet_ref01_match_dt0.id = provider_wallet_ref01_data.id;
        const provider_wallet_ref01_data_dt0 = (await provider_wallet_ref01_ent.load(provider_wallet_ref01_match_dt0)).data();
        (0, node_assert_1.default)(provider_wallet_ref01_data_dt0.id === provider_wallet_ref01_data.id);
        // REMOVE
        const provider_wallet_ref01_match_rm0 = { id: provider_wallet_ref01_data.id };
        await provider_wallet_ref01_ent.remove(provider_wallet_ref01_match_rm0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/provider_wallet/ProviderWalletTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.Ai4callSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['provider_wallet01', 'provider_wallet02', 'provider_wallet03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'AI4CALL_TEST_PROVIDER_WALLET_ENTID': idmap,
        'AI4CALL_TEST_LIVE': 'FALSE',
        'AI4CALL_TEST_EXPLAIN': 'FALSE',
        'AI4CALL_APIKEY': '',
    });
    idmap = env['AI4CALL_TEST_PROVIDER_WALLET_ENTID'];
    const live = 'TRUE' === env.AI4CALL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['AI4CALL_TEST_PROVIDER_WALLET_ENTID'];
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
//# sourceMappingURL=ProviderWalletEntity.test.js.map