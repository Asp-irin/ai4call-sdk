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
(0, node_test_1.describe)('AssistantEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when AI4CALL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('AI4CALL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.Ai4callSDK.test();
        const ent = testsdk.Assistant();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.AI4CALL_TEST_LIVE;
        for (const op of ['create', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'assistant.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "assistant": { "a": true, "h": "Assistant", "n": "assistant", "r": true, "sh": "Assistant detail response, including the legacy assistant API key during the v1 compatibility period.", "t": "`$ANY`", "key$": "assistant", "index$": 0 }, "audioToAudio": { "a": true, "h": "Audio To Audio", "n": "audioToAudio", "r": false, "sh": "Initial audio-to-audio configuration, used when applicable to the selected mode.", "t": "`$ANY`", "key$": "audioToAudio", "index$": 1 }, "data": { "a": true, "h": "Data", "n": "data", "r": true, "t": "`$OBJECT`", "key$": "data", "index$": 2 }, "description": { "a": true, "h": "Description", "n": "description", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "Functional description of the assistant.", "t": "`$STRING`", "key$": "description", "index$": 3 }, "firstMessage": { "a": true, "h": "First Message", "n": "firstMessage", "r": false, "sh": "Partial update of the assistant's first-message configuration.", "t": "`$OBJECT`", "key$": "firstMessage", "index$": 4 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 5 }, "message": { "a": true, "h": "Message", "n": "message", "r": true, "t": "`$STRING`", "key$": "message", "index$": 6 }, "meta": { "a": true, "h": "Meta", "n": "meta", "r": true, "sh": "Collection metadata.", "t": "`$OBJECT`", "key$": "meta", "index$": 7 }, "metadata": { "a": true, "h": "Metadata", "n": "metadata", "r": false, "sh": "Free-form metadata to store with the assistant.", "t": "`$OBJECT`", "key$": "metadata", "index$": 8 }, "mode": { "a": true, "h": "Mode", "n": "mode", "r": false, "sh": "Runtime mode to use when creating the assistant.", "t": "`$STRING`", "key$": "mode", "index$": 9 }, "name": { "a": true, "h": "Name", "n": "name", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "Assistant name.", "t": "`$STRING`", "key$": "name", "index$": 10 }, "network": { "a": true, "h": "Network", "n": "network", "r": false, "sh": "Network settings to update on the assistant.", "t": "`$OBJECT`", "key$": "network", "index$": 11 }, "numbers": { "a": true, "h": "Numbers", "n": "numbers", "r": false, "sh": "Replacement values for assistant number lists when supplied.", "t": "`$OBJECT`", "key$": "numbers", "index$": 12 }, "requestId": { "a": true, "h": "Request Id", "n": "requestId", "r": true, "t": "`$STRING`", "key$": "requestId", "index$": 13 }, "settings": { "a": true, "h": "Settings", "n": "settings", "r": false, "sh": "High-level assistant settings to update.", "t": "`$OBJECT`", "key$": "settings", "index$": 14 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "sh": "New lifecycle status for the assistant.", "t": "`$STRING`", "key$": "status", "index$": 15 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "t": "`$BOOLEAN`", "key$": "success", "index$": 16 }, "voiceToVoice": { "a": true, "de": true, "h": "Voice To Voice", "n": "voiceToVoice", "r": false, "sh": "Legacy alias of `audioToAudio`.", "t": "`$OBJECT`", "key$": "voiceToVoice", "index$": 17 } }, "id": { "field": "id", "name": "id" }, "name": "assistant", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v1/assistants", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/v1/assistants", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "assistants" }], "t": { "req": { "audioToAudio": "`reqdata.audio_to_audio`", "description": "`reqdata.description`", "mode": "`reqdata.mode`", "name": "`reqdata.name`", "voiceToVoice": "`reqdata.voice_to_voice`" }, "res": "`body.data`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v1/assistants", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "cursor", "or": "cursor", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v1/assistants", "q": { "exist": ["cursor", "limit"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "assistants" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/v1/assistants/{assistantId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "205", "k": "param", "n": "id", "or": "assistantId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v1/assistants/{assistantId}", "q": { "exist": ["id"] }, "r": { "param": { "assistantId": "id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "assistants" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /api/v1/assistants/{assistantId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "205", "k": "param", "n": "id", "or": "assistantId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/api/v1/assistants/{assistantId}", "q": { "exist": ["id"] }, "r": { "param": { "assistantId": "id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "assistants" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /api/v1/assistants/{assistantId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "205", "k": "param", "n": "id", "or": "assistantId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/api/v1/assistants/{assistantId}", "q": { "exist": ["id"] }, "r": { "param": { "assistantId": "id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "assistants" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }, { "a": true, "co": { "id": "PATCH /api/v1/assistants/{assistantId}/prompt", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "205", "k": "param", "n": "id", "or": "assistantId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/api/v1/assistants/{assistantId}/prompt", "q": { "$action": "prompt", "exist": ["id"] }, "r": { "param": { "assistantId": "id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "assistants" }, { "var": "id" }, { "lit": "prompt" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 1 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "assistant", "name__orig": "assistant", "Name": "Assistant", "name_": "assistant", "name-": "assistant", "NAME": "ASSISTANT", "index$": 18 }, { "active": true, "entity": "assistant", "key$": "BasicAssistantFlow", "kind": "basic", "name": "BasicAssistantFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "assistant_ref01" }, "m": {}, "o": "create", "s": [], "v": [] }, { "a": true, "d": {}, "i": { "ref": "assistant_ref01", "srcdatavar": "assistant_ref01_data", "suffix": "_up0", "textfield": "description" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-assistant_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "assistant_ref01", "srcdatavar": "assistant_ref01_data", "suffix": "_dt0" }, "m": { "id": "assistant01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-assistant_ref01" } }] }, { "a": true, "d": {}, "i": { "ref": "assistant_ref01", "suffix": "_rm0" }, "m": { "id": "assistant01" }, "o": "remove", "s": [], "v": [] }] }, 'Assistant', { "POST /api/v1/assistants": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "additionalProperties": false, "description": "Minimum creation payload. The backend replicates the portal logic: generates `assistantApiKey`, `virtualNumber` and `jsonFilename`, initializes the runtime JSON with AI4Call defaults and starts provisioning the assistant. The assistant name is normalized by replacing spaces with `_`.", "properties": { "name": { "type": "string", "minLength": 3, "maxLength": 100, "description": "Assistant name. If it contains spaces, the backend automatically converts them to `_`.", "example": "Sales_Assistant", "key$": "name" }, "description": { "type": "string", "minLength": 1, "maxLength": 500, "description": "Functional description of the assistant.", "example": "Assistente demo per campagne commerciali inbound.", "key$": "description" }, "mode": { "type": "string", "enum": ["text", "audio_to_audio", "voice_to_voice"], "description": "Runtime mode to use when creating the assistant.", "default": "text", "x-ref": "#/components/schemas/AssistantMode", "key$": "mode" }, "audioToAudio": { "allOf": [{ "type": "object", "additionalProperties": false, "deprecated": true, "description": "Legacy schema name for the audio-to-audio runtime configuration.", "properties": { "engineCode": {}, "modelCode": {}, "voiceCode": {}, "apiKey": {}, "baseUrl": {}, "prompt": {} }, "x-ref": "#/components/schemas/VoiceToVoiceConfiguration" }], "description": "Initial audio-to-audio configuration, used when applicable to the selected mode.", "x-ref": "#/components/schemas/AudioToAudioConfiguration", "key$": "audioToAudio" }, "voiceToVoice": { "type": "object", "additionalProperties": false, "deprecated": true, "description": "Legacy alias of `audioToAudio`.", "properties": { "engineCode": { "type": "string", "description": "Provider/engine voice LLM.", "example": "openai" }, "modelCode": { "type": "string", "description": "LLM voice model code.", "example": "gpt-4o-realtime-preview" }, "voiceCode": { "type": "string", "description": "Voice code supported by the model.", "example": "alloy" }, "apiKey": { "type": "string", "nullable": true, "writeOnly": true, "description": "Provider API key when the runtime uses customer credentials." }, "baseUrl": { "type": "string", "nullable": true, "description": "Custom URL base for compatible providers." }, "prompt": { "type": "string", "description": "Main prompt of the audio-to-audio runtime." } }, "x-ref": "#/components/schemas/VoiceToVoiceConfiguration", "key$": "voiceToVoice" } }, "required": ["name", "description"], "x-ref": "#/components/schemas/CreateAssistantRequest", "index$": 1 }, "example": { "name": "Sales Assistant", "description": "Demo assistant for inbound commercial campaigns.", "mode": "text" } } } }, "parameters": [] }, "GET /api/v1/assistants": { "protocol": "http", "parameters": [{ "name": "limit", "in": "query", "required": false, "description": "Maximum number of items returned in one cursor-paginated page. Omit both limit and cursor to preserve the legacy unpaginated response.", "schema": { "type": "integer", "minimum": 1, "maximum": 100 }, "index$": 0 }, { "name": "cursor", "in": "query", "required": false, "description": "Opaque cursor returned in meta.nextCursor by the previous page.", "schema": { "type": "string" }, "index$": 1 }] }, "GET /api/v1/assistants/{assistantId}": { "protocol": "http", "parameters": [{ "name": "assistantId", "in": "path", "required": true, "description": "Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.", "schema": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^[A-Za-z0-9_-]+$" }, "example": "205", "x-ref": "#/components/parameters/AssistantIdentifier", "index$": 0 }] }, "DELETE /api/v1/assistants/{assistantId}": { "protocol": "http", "parameters": [{ "name": "assistantId", "in": "path", "required": true, "description": "Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.", "schema": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^[A-Za-z0-9_-]+$" }, "example": "205", "x-ref": "#/components/parameters/AssistantIdentifier", "index$": 0 }] }, "PATCH /api/v1/assistants/{assistantId}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "description": "PATCH payload used to update editable assistant fields.", "type": "object", "properties": { "name": { "type": "string", "minLength": 3, "maxLength": 100, "description": "If it contains spaces, the backend automatically converts them to `_`.", "key$": "name" }, "description": { "description": "New functional description; null removes the current description.", "type": "string", "maxLength": 500, "nullable": true, "key$": "description" }, "status": { "description": "New lifecycle status for the assistant.", "type": "string", "enum": ["draft", "active", "disabled"], "key$": "status" }, "audioToAudio": { "allOf": [{ "type": "object", "additionalProperties": false, "deprecated": true, "description": "Legacy schema name for the audio-to-audio runtime configuration.", "properties": { "engineCode": {}, "modelCode": {}, "voiceCode": {}, "apiKey": {}, "baseUrl": {}, "prompt": {} }, "x-ref": "#/components/schemas/VoiceToVoiceConfiguration" }], "description": "Partial update of the audio-to-audio configuration.", "x-ref": "#/components/schemas/AudioToAudioConfiguration", "key$": "audioToAudio" }, "voiceToVoice": { "type": "object", "additionalProperties": false, "deprecated": true, "description": "Legacy alias of `audioToAudio`.", "properties": { "engineCode": { "type": "string", "description": "Provider/engine voice LLM.", "example": "openai" }, "modelCode": { "type": "string", "description": "LLM voice model code.", "example": "gpt-4o-realtime-preview" }, "voiceCode": { "type": "string", "description": "Voice code supported by the model.", "example": "alloy" }, "apiKey": { "type": "string", "nullable": true, "writeOnly": true, "description": "Provider API key when the runtime uses customer credentials." }, "baseUrl": { "type": "string", "nullable": true, "description": "Custom URL base for compatible providers." }, "prompt": { "type": "string", "description": "Main prompt of the audio-to-audio runtime." } }, "x-ref": "#/components/schemas/VoiceToVoiceConfiguration", "key$": "voiceToVoice" }, "firstMessage": { "type": "object", "additionalProperties": false, "description": "Partial update of the assistant's first-message configuration.", "properties": { "text": { "type": "string", "nullable": true, "description": "Assistant's first static message.\n- omitted: keeps the current value\n- `null` or an empty string: deletes the saved message\n", "example": "Ciao, sono l'assistente virtuale. Come posso aiutarti?" }, "callerSpeaksFirst": { "type": "boolean", "description": "If `true`, the caller speaks first and the backend deletes the static message.", "example": false }, "uninterruptible": { "type": "boolean", "description": "If `true`, the first static message cannot be interrupted.", "example": false } }, "x-ref": "#/components/schemas/UpdateAssistantFirstMessage", "key$": "firstMessage" }, "numbers": { "description": "Replacement values for assistant number lists when supplied.", "type": "object", "properties": { "demo": { "type": "array", "items": { "type": "string" } }, "purchased": { "type": "array", "items": { "type": "string" } } }, "key$": "numbers" }, "network": { "description": "Network settings to update on the assistant.", "type": "object", "properties": { "allowedIps": { "type": "array", "items": { "type": "string", "format": "ipv4" } } }, "key$": "network" }, "settings": { "description": "High-level assistant settings to update.", "type": "object", "properties": { "model": { "type": "string" }, "voice": { "type": "string" }, "language": { "type": "string" }, "timezone": { "type": "string" }, "recordingEnabled": { "type": "boolean" } }, "key$": "settings" }, "metadata": { "description": "Free-form metadata to store with the assistant.", "type": "object", "additionalProperties": true, "key$": "metadata" } }, "x-ref": "#/components/schemas/UpdateAssistantRequest", "index$": 1 }, "example": { "status": "active", "firstMessage": { "text": "Ciao, sono l'assistente virtuale. Come posso aiutarti?", "callerSpeaksFirst": false, "uninterruptible": false } } } } }, "parameters": [{ "name": "assistantId", "in": "path", "required": true, "description": "Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.", "schema": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^[A-Za-z0-9_-]+$" }, "example": "205", "x-ref": "#/components/parameters/AssistantIdentifier", "index$": 0 }] }, "PATCH /api/v1/assistants/{assistantId}/prompt": { "protocol": "http", "requestBody": { "required": true, "description": "Prompt and first message update payload.\n\nUse one of the examples below depending on what you want to change:\n- prompts only\n- first message only\n- switch to `callerSpeaksFirst`", "content": { "application/json": { "schema": { "type": "object", "description": "PATCH merge the assistant prompt configuration.\n\nOperational rules:\n- omitted fields retain their current value\n- `prompt.text` updates only the editable part of the prompt\n- any automatic sections already present in the JSON, such as system and knowledge, are preserved\n- to delete the first static message, send `firstMessage.text: null` or `firstMessage.text: \"\"`\n- if after the merge `firstMessage.callerSpeaksFirst=true`, the backend:\n  - delete the first static message\n  - go `firstMessage.uninterruptible=false`", "properties": { "prompt": { "description": "Value supplied for `prompt` in the `AssistantPromptUpdateRequest` request.", "type": "object", "properties": { "text": { "type": "string", "description": "New editable prompt.\nIf omitted, the current prompt remains unchanged.", "example": "Rispondi in modo professionale e proponi sempre il passo successivo utile." } } }, "firstMessage": { "description": "Value supplied for `firstMessage` in the `AssistantPromptUpdateRequest` request.", "type": "object", "properties": { "text": { "type": "string", "nullable": true, "description": "Assistant's first static message.\n- omitted: keeps the current value\n- `null` or an empty string: deletes the saved message\n", "example": "Ciao, sono l'assistente virtuale. Come posso aiutarti?" }, "callerSpeaksFirst": { "type": "boolean", "description": "If `true`, the caller speaks first and the backend ignores the first static message.\nIf omitted, retains the current value.", "example": false }, "uninterruptible": { "type": "boolean", "description": "If `true`, the first static message cannot be interrupted.\nIf omitted, retains the current value.", "example": true } } } }, "x-ref": "#/components/schemas/AssistantPromptUpdateRequest" }, "examples": { "promptOnly": { "summary": "Update only the editable prompt", "value": { "prompt": { "text": "Sei un assistente commerciale chiaro, breve e orientato alla conversione." } } }, "firstMessageOnly": { "summary": "Update only the first message", "value": { "firstMessage": { "text": "Ciao, sono l'assistente virtuale di AI4Call. Come posso aiutarti oggi?", "uninterruptible": true } } }, "callerSpeaksFirst": { "summary": "The caller speaks first", "value": { "firstMessage": { "callerSpeaksFirst": true } } }, "clearFirstMessage": { "summary": "Delete the first static message", "value": { "firstMessage": { "text": null } } } } } } }, "parameters": [{ "name": "assistantId", "in": "path", "required": true, "description": "Public assistant identifier. The current numeric `assistantId` is canonical; the legacy `assistantApiKey` value remains accepted during the v1 compatibility period.", "schema": { "type": "string", "minLength": 1, "maxLength": 128, "pattern": "^[A-Za-z0-9_-]+$" }, "example": "205", "x-ref": "#/components/parameters/AssistantIdentifier", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const assistant_ref01_ent = client.Assistant();
        let assistant_ref01_data = setup.data.new.assistant['assistant_ref01'];
        assistant_ref01_data = (await assistant_ref01_ent.create(assistant_ref01_data)).data();
        (0, node_assert_1.default)(null != assistant_ref01_data.id);
        // UPDATE
        const assistant_ref01_data_up0 = {};
        assistant_ref01_data_up0.id = assistant_ref01_data.id;
        const assistant_ref01_markdef_up0 = { name: 'description', value: 'Mark01-assistant_ref01_' + setup.now };
        assistant_ref01_data_up0[assistant_ref01_markdef_up0.name] = assistant_ref01_markdef_up0.value;
        const assistant_ref01_resdata_up0 = (await assistant_ref01_ent.update(assistant_ref01_data_up0)).data();
        (0, node_assert_1.default)(assistant_ref01_resdata_up0.id === assistant_ref01_data_up0.id);
        (0, node_assert_1.default)(assistant_ref01_resdata_up0[assistant_ref01_markdef_up0.name] === assistant_ref01_markdef_up0.value);
        // LOAD
        const assistant_ref01_match_dt0 = {};
        assistant_ref01_match_dt0.id = assistant_ref01_data.id;
        const assistant_ref01_data_dt0 = (await assistant_ref01_ent.load(assistant_ref01_match_dt0)).data();
        (0, node_assert_1.default)(assistant_ref01_data_dt0.id === assistant_ref01_data.id);
        // REMOVE
        const assistant_ref01_match_rm0 = { id: assistant_ref01_data.id };
        await assistant_ref01_ent.remove(assistant_ref01_match_rm0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/assistant/AssistantTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.Ai4callSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['assistant01', 'assistant02', 'assistant03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'AI4CALL_TEST_ASSISTANT_ENTID': idmap,
        'AI4CALL_TEST_LIVE': 'FALSE',
        'AI4CALL_TEST_EXPLAIN': 'FALSE',
        'AI4CALL_APIKEY': '',
    });
    idmap = env['AI4CALL_TEST_ASSISTANT_ENTID'];
    const live = 'TRUE' === env.AI4CALL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['AI4CALL_TEST_ASSISTANT_ENTID'];
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
//# sourceMappingURL=AssistantEntity.test.js.map