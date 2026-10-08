"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Ai4call',
        slug: "ai4call",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
    };
    options = {
        base: "https://client-api.ai4call.com",
        auth: {
            prefix: '',
            name: 'x-client-email',
        },
        headers: {
            "content-type": "application/json"
        },
        entity: {
            account_allowed_ips_success: {},
            account_available_plugins_success: {},
            account_call_limits_success: {},
            account_number_routing_success: {},
            account_plugin_configuration_success: {},
            account_plugin_instance_success: {},
            account_plugin_purchase_success: {},
            analytics_calls_outbound_success: {},
            analytics_calls_success: {},
            analytics_post_call_success: {},
            analytics_pre_call_success: {},
            analytics_rag_search_success: {},
            analytics_rag_success: {},
            analytics_recharges_success: {},
            analytics_sms_success: {},
            analytics_tool_responses_success: {},
            asr: {},
            asr_model_list_success: {},
            assistant: {},
            assistant_advanced_settings_configuration_success: {},
            assistant_advanced_settings_runtime_update_success: {},
            assistant_asr_runtime_update_success: {},
            assistant_conversation_webhook_runtime_success: {},
            assistant_dtmf_configuration_success: {},
            assistant_dtmf_runtime_update_success: {},
            assistant_hangup_configuration_success: {},
            assistant_hangup_runtime_update_success: {},
            assistant_hangup_schema_runtime_success: {},
            assistant_knowledge_success: {},
            assistant_llm_runtime_update_success: {},
            assistant_number_routing_catalog_success: {},
            assistant_number_routing_runtime_success: {},
            assistant_postcall_mcp_runtime_success: {},
            assistant_precall_mcp_runtime_success: {},
            assistant_precall_validation_runtime_success: {},
            assistant_prompt_success: {},
            assistant_rag_configuration_success: {},
            assistant_rag_runtime_update_success: {},
            assistant_save_conversation_runtime_success: {},
            assistant_settings_configuration_success: {},
            assistant_settings_runtime_update_success: {},
            assistant_tools_runtime_update_success: {},
            assistant_tts_runtime_update_success: {},
            assistant_voice_to_voice_runtime_update_success: {},
            associated_runtime_tool_list_success: {},
            audio_to_audio: {},
            available_runtime_tool_list_success: {},
            filler_phrase_list: {},
            health: {},
            knowledge: {},
            llm: {},
            llm_model_list_success: {},
            outbound_call: {},
            outbound_call_accepted_success: {},
            outbound_dial_status_payload: {},
            portal_login_success: {},
            pre_call: {},
            provider_wallet: {},
            provider_wallet_associations_success: {},
            provider_wallet_catalog_success: {},
            public_rag_search_success: {},
            rag_collection_delete_success: {},
            rag_collection_document_delete_success: {},
            rag_collection_document_list_success: {},
            rag_collection_document_token_estimate_success: {},
            rag_collection_document_upload_status_success: {},
            rag_collection_document_upload_success: {},
            runtime_binding: {},
            tts: {},
            tts_voice_list_success: {},
            voice: {},
            voice_llm: {},
            voice_llm_model_list_success: {},
        }
    };
    entity = {
        "account_allowed_ips_success": {
            "fields": [
                {
                    "name": "addIps",
                    "title": "Add Ips",
                    "type": "`$ARRAY`",
                    "short": "Value supplied for `addIps` in the `AccountAllowedIpsUpdateRequest` request."
                },
                {
                    "name": "allowedIps",
                    "title": "Allowed Ips",
                    "type": "`$ARRAY`",
                    "short": "Value supplied for `allowedIps` in the `AccountAllowedIpsUpdateRequest` request."
                },
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "deleteIps",
                    "title": "Delete Ips",
                    "type": "`$ARRAY`",
                    "short": "Value supplied for `deleteIps` in the `AccountAllowedIpsUpdateRequest` request."
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "account_allowed_ips_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/account/allowed-ips",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "allowed-ips"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "allowed-ips"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/account/allowed-ips",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "allowed-ips"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "allowed-ips"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "account_available_plugins_success": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "account_available_plugins_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/account/plugins/available",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "plugins"
                                },
                                {
                                    "lit": "available"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "plugins",
                                "available"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "account_call_limits_success": {
            "fields": [
                {
                    "name": "assistants",
                    "title": "Assistants",
                    "type": "`$ARRAY`",
                    "req": true,
                    "short": "Value supplied for `assistants` in the `AccountCallLimitsUpdateRequest` request."
                },
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "account_call_limits_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/account/call-limits",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "call-limits"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "call-limits"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/account/call-limits",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "call-limits"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "call-limits"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "account_number_routing_success": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "demoNumbers",
                    "title": "Demo Numbers",
                    "type": "`$ARRAY`",
                    "short": "Value supplied for `demoNumbers` in the `AccountNumberRoutingUpdateRequest` request."
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "purchasedNumbers",
                    "title": "Purchased Numbers",
                    "type": "`$ARRAY`",
                    "short": "Value supplied for `purchasedNumbers` in the `AccountNumberRoutingUpdateRequest` request."
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                },
                {
                    "name": "userNumbers",
                    "title": "User Numbers",
                    "type": "`$ARRAY`",
                    "short": "Value supplied for `userNumbers` in the `AccountNumberRoutingUpdateRequest` request."
                }
            ],
            "name": "account_number_routing_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/account/number-routing",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "number-routing"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "number-routing"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/account/number-routing",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "number-routing"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "number-routing"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "account_plugin_configuration_success": {
            "fields": [
                {
                    "name": "configuration",
                    "title": "Configuration",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Configuration contract and current values for one plugin instance."
                },
                {
                    "name": "instanceName",
                    "title": "Instance Name",
                    "type": "`$STRING`",
                    "short": "Value supplied for `instanceName` in the `AccountPluginConfigurationUpdateRequest` request."
                },
                {
                    "name": "instance_name",
                    "title": "Instance Name",
                    "type": "`$STRING`",
                    "short": "Legacy alias of `instanceName`.",
                    "deprecated": true
                },
                {
                    "name": "pluginName",
                    "title": "Plugin Name",
                    "type": "`$STRING`",
                    "short": "Value supplied for `pluginName` in the `AccountPluginConfigurationUpdateRequest` request."
                },
                {
                    "name": "plugin_name",
                    "title": "Plugin Name",
                    "type": "`$STRING`",
                    "short": "Legacy alias of `pluginName`.",
                    "deprecated": true
                }
            ],
            "name": "account_plugin_configuration_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/account/plugins/configuration",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "plugins"
                                },
                                {
                                    "lit": "configuration"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "plugins",
                                "configuration"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "instance_name",
                                        "orig": "instanceName",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "instance_name",
                                        "orig": "instance_name",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "plugin_name",
                                        "orig": "pluginName",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "plugin_name",
                                        "orig": "plugin_name",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "instance_name",
                                    "plugin_name"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/account/plugins/instances/{instanceId}/configuration",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "plugins"
                                },
                                {
                                    "lit": "instances"
                                },
                                {
                                    "var": "instance_id"
                                },
                                {
                                    "lit": "configuration"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "plugins",
                                "instances",
                                "{instance_id}",
                                "configuration"
                            ],
                            "rename": {
                                "param": {
                                    "instanceId": "instance_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "instance_id",
                                        "orig": "instanceId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "instance_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/account/plugins/instances/{instanceId}/configuration",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "plugins"
                                },
                                {
                                    "lit": "instances"
                                },
                                {
                                    "var": "instance_id"
                                },
                                {
                                    "lit": "configuration"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "plugins",
                                "instances",
                                "{instance_id}",
                                "configuration"
                            ],
                            "rename": {
                                "param": {
                                    "instanceId": "instance_id"
                                }
                            },
                            "transform": {
                                "req": {
                                    "configuration": "`reqdata.configuration`"
                                },
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "instance_id",
                                        "orig": "instanceId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "instance_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/account/plugins/configuration",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "plugins"
                                },
                                {
                                    "lit": "configuration"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "plugins",
                                "configuration"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "account_plugin_instance_success": {
            "fields": [
                {
                    "name": "configuration",
                    "title": "Configuration",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Current lifecycle information for one purchased plugin instance."
                },
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "instanceName",
                    "title": "Instance Name",
                    "type": "`$STRING`",
                    "short": "Value supplied for `instanceName` in the `AccountPluginPurchaseRequest` request."
                },
                {
                    "name": "instance_name",
                    "title": "Instance Name",
                    "type": "`$STRING`",
                    "short": "Legacy alias of `instanceName`.",
                    "deprecated": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "newInstanceName",
                    "title": "New Instance Name",
                    "type": "`$STRING`",
                    "short": "Value supplied for `newInstanceName` in the `AccountPluginInstanceByIdUpdateRequest` request."
                },
                {
                    "name": "new_instance_name",
                    "title": "New Instance Name",
                    "type": "`$STRING`",
                    "short": "Legacy alias of `newInstanceName`.",
                    "deprecated": true
                },
                {
                    "name": "pluginName",
                    "title": "Plugin Name",
                    "type": "`$STRING`",
                    "short": "Value supplied for `pluginName` in the `AccountPluginPurchaseRequest` request."
                },
                {
                    "name": "plugin_name",
                    "title": "Plugin Name",
                    "type": "`$STRING`",
                    "short": "Legacy alias of `pluginName`.",
                    "deprecated": true
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "status",
                    "title": "Status",
                    "type": "`$STRING`",
                    "short": "Value supplied for `status` in the `AccountPluginInstanceUpdateRequest` request."
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "account_plugin_instance_success",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/api/v1/account/plugins/instances",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "plugins"
                                },
                                {
                                    "lit": "instances"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "plugins",
                                "instances"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/account/plugins/instances",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "plugins"
                                },
                                {
                                    "lit": "instances"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "plugins",
                                "instances"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "cursor",
                                        "orig": "cursor",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "cursor",
                                    "limit"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/api/v1/account/plugins/instances/{instanceId}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "plugins"
                                },
                                {
                                    "lit": "instances"
                                },
                                {
                                    "var": "instance_id"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "plugins",
                                "instances",
                                "{instance_id}"
                            ],
                            "rename": {
                                "param": {
                                    "instanceId": "instance_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "instance_id",
                                        "orig": "instanceId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "instance_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/account/plugins/instances/{instanceId}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "plugins"
                                },
                                {
                                    "lit": "instances"
                                },
                                {
                                    "var": "instance_id"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "plugins",
                                "instances",
                                "{instance_id}"
                            ],
                            "rename": {
                                "param": {
                                    "instanceId": "instance_id"
                                }
                            },
                            "transform": {
                                "req": {
                                    "newInstanceName": "`reqdata.new_instance_name`",
                                    "new_instance_name": "`reqdata.new_instance_name`"
                                },
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "instance_id",
                                        "orig": "instanceId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "instance_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/account/plugins/instances",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "plugins"
                                },
                                {
                                    "lit": "instances"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "plugins",
                                "instances"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "account_plugin_purchase_success": {
            "fields": [
                {
                    "name": "configuration",
                    "title": "Configuration",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Result of a plugin purchase, including charged prices and created instance data."
                },
                {
                    "name": "instanceName",
                    "title": "Instance Name",
                    "type": "`$STRING`",
                    "short": "Value supplied for `instanceName` in the `AccountPluginPurchaseRequest` request."
                },
                {
                    "name": "instance_name",
                    "title": "Instance Name",
                    "type": "`$STRING`",
                    "short": "Legacy alias of `instanceName`.",
                    "deprecated": true
                },
                {
                    "name": "pluginName",
                    "title": "Plugin Name",
                    "type": "`$STRING`",
                    "short": "Value supplied for `pluginName` in the `AccountPluginPurchaseRequest` request."
                },
                {
                    "name": "plugin_name",
                    "title": "Plugin Name",
                    "type": "`$STRING`",
                    "short": "Legacy alias of `pluginName`.",
                    "deprecated": true
                }
            ],
            "name": "account_plugin_purchase_success",
            "op": {
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/account/plugins/purchase",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "plugins"
                                },
                                {
                                    "lit": "purchase"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "plugins",
                                "purchase"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "analytics_calls_outbound_success": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "analytics_calls_outbound_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/account/analytics/calls-outbound",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "analytics"
                                },
                                {
                                    "lit": "calls-outbound"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "analytics",
                                "calls-outbound"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "cursor",
                                        "orig": "cursor",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_date",
                                        "orig": "endDate",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "2026-04-24"
                                    },
                                    {
                                        "name": "internal_id",
                                        "orig": "internalId",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "4f9ab147-ef47-4b54-9987-1dd30288c610"
                                    },
                                    {
                                        "name": "internal_id",
                                        "orig": "internal_id",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "4f9ab147-ef47-4b54-9987-1dd30288c610"
                                    },
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "startDate",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "2026-04-01"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "cursor",
                                    "end_date",
                                    "internal_id",
                                    "limit",
                                    "start_date"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "analytics_calls_success": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "analytics_calls_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/account/analytics/calls",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "analytics"
                                },
                                {
                                    "lit": "calls"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "analytics",
                                "calls"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "cursor",
                                        "orig": "cursor",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_date",
                                        "orig": "endDate",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "2026-04-24"
                                    },
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "startDate",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "2026-04-01"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "cursor",
                                    "end_date",
                                    "limit",
                                    "start_date"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "analytics_post_call_success": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "analytics_post_call_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/account/analytics/post-call",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "analytics"
                                },
                                {
                                    "lit": "post-call"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "analytics",
                                "post-call"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "cursor",
                                        "orig": "cursor",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_date",
                                        "orig": "endDate",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "2026-04-24"
                                    },
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "startDate",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "2026-04-01"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "cursor",
                                    "end_date",
                                    "limit",
                                    "start_date"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "analytics_pre_call_success": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "analytics_pre_call_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/account/analytics/pre-call",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "analytics"
                                },
                                {
                                    "lit": "pre-call"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "analytics",
                                "pre-call"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "cursor",
                                        "orig": "cursor",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_date",
                                        "orig": "endDate",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "2026-04-24"
                                    },
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "startDate",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "2026-04-01"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "cursor",
                                    "end_date",
                                    "limit",
                                    "start_date"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "analytics_rag_search_success": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "analytics_rag_search_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/account/analytics/rag-searches",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "analytics"
                                },
                                {
                                    "lit": "rag-searches"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "analytics",
                                "rag-searches"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "cursor",
                                        "orig": "cursor",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_date",
                                        "orig": "endDate",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "2026-08-28"
                                    },
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "startDate",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "2026-08-01"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "cursor",
                                    "end_date",
                                    "limit",
                                    "start_date"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "analytics_rag_success": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "analytics_rag_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/account/analytics/rag",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "analytics"
                                },
                                {
                                    "lit": "rag"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "analytics",
                                "rag"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "cursor",
                                        "orig": "cursor",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_date",
                                        "orig": "endDate",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "2026-04-24"
                                    },
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "startDate",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "2026-04-01"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "cursor",
                                    "end_date",
                                    "limit",
                                    "start_date"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "analytics_recharges_success": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "analytics_recharges_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/account/analytics/recharges",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "analytics"
                                },
                                {
                                    "lit": "recharges"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "analytics",
                                "recharges"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "cursor",
                                        "orig": "cursor",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_date",
                                        "orig": "endDate",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "2026-04-24"
                                    },
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "startDate",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "2026-04-01"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "cursor",
                                    "end_date",
                                    "limit",
                                    "start_date"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "analytics_sms_success": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "analytics_sms_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/account/analytics/sms",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "analytics"
                                },
                                {
                                    "lit": "sms"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "analytics",
                                "sms"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "cursor",
                                        "orig": "cursor",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_date",
                                        "orig": "endDate",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "2026-04-24"
                                    },
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "startDate",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "2026-04-01"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "cursor",
                                    "end_date",
                                    "limit",
                                    "start_date"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "analytics_tool_responses_success": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "analytics_tool_responses_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/account/analytics/tool-responses",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "analytics"
                                },
                                {
                                    "lit": "tool-responses"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "analytics",
                                "tool-responses"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "cursor",
                                        "orig": "cursor",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_date",
                                        "orig": "endDate",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "2026-04-24"
                                    },
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "startDate",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "2026-04-01"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "cursor",
                                    "end_date",
                                    "limit",
                                    "start_date"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "asr": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Collection metadata."
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "asr",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/providers/asr",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "providers"
                                },
                                {
                                    "lit": "asr"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "providers",
                                "asr"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "asr_model_list_success": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Collection metadata."
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "asr_model_list_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/assistants/{assistantId}/asr/models",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "asr"
                                },
                                {
                                    "lit": "models"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "assistants",
                                "{assistant_id}",
                                "asr",
                                "models"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.assistant"
                    ]
                ]
            }
        },
        "assistant": {
            "fields": [
                {
                    "name": "assistant",
                    "title": "Assistant",
                    "type": "`$ANY`",
                    "req": true,
                    "short": "Assistant detail response, including the legacy assistant API key during the v1 compatibility period."
                },
                {
                    "name": "audioToAudio",
                    "title": "Audio To Audio",
                    "type": "`$ANY`",
                    "short": "Initial audio-to-audio configuration, used when applicable to the selected mode."
                },
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`",
                    "req": true,
                    "op": {
                        "update": {
                            "type": "`$STRING`"
                        }
                    },
                    "short": "Functional description of the assistant."
                },
                {
                    "name": "firstMessage",
                    "title": "First Message",
                    "type": "`$OBJECT`",
                    "short": "Partial update of the assistant's first-message configuration."
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Collection metadata."
                },
                {
                    "name": "metadata",
                    "title": "Metadata",
                    "type": "`$OBJECT`",
                    "short": "Free-form metadata to store with the assistant."
                },
                {
                    "name": "mode",
                    "title": "Mode",
                    "type": "`$STRING`",
                    "short": "Runtime mode to use when creating the assistant."
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "req": true,
                    "op": {
                        "update": {
                            "type": "`$STRING`"
                        }
                    },
                    "short": "Assistant name."
                },
                {
                    "name": "network",
                    "title": "Network",
                    "type": "`$OBJECT`",
                    "short": "Network settings to update on the assistant."
                },
                {
                    "name": "numbers",
                    "title": "Numbers",
                    "type": "`$OBJECT`",
                    "short": "Replacement values for assistant number lists when supplied."
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "settings",
                    "title": "Settings",
                    "type": "`$OBJECT`",
                    "short": "High-level assistant settings to update."
                },
                {
                    "name": "status",
                    "title": "Status",
                    "type": "`$STRING`",
                    "short": "New lifecycle status for the assistant."
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                },
                {
                    "name": "voiceToVoice",
                    "title": "Voice To Voice",
                    "type": "`$OBJECT`",
                    "short": "Legacy alias of `audioToAudio`.",
                    "deprecated": true
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "assistant",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/api/v1/assistants",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants"
                            ],
                            "rename": {},
                            "transform": {
                                "req": {
                                    "audioToAudio": "`reqdata.audio_to_audio`",
                                    "description": "`reqdata.description`",
                                    "mode": "`reqdata.mode`",
                                    "name": "`reqdata.name`",
                                    "voiceToVoice": "`reqdata.voice_to_voice`"
                                },
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/assistants",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "cursor",
                                        "orig": "cursor",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "cursor",
                                    "limit"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/assistants/{assistantId}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/api/v1/assistants/{assistantId}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/assistants/{assistantId}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/assistants/{assistantId}/prompt",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "prompt"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{id}",
                                "prompt"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "prompt",
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "assistant_advanced_settings_configuration_success": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "assistant_advanced_settings_configuration_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/assistants/{assistantId}/advanced-settings",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "advanced-settings"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "assistants",
                                "{id}",
                                "advanced-settings"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "advanced-settings",
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "assistant_advanced_settings_runtime_update_success": {
            "fields": [
                {
                    "name": "assistantApiKey",
                    "title": "Assistant Api Key",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "assistantId",
                    "title": "Assistant Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "configuration",
                    "title": "Configuration",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "freqPenalty",
                    "title": "Freq Penalty",
                    "type": "`$NUMBER`",
                    "short": "Value supplied for `freqPenalty` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request."
                },
                {
                    "name": "maxTokens",
                    "title": "Max Tokens",
                    "type": "`$INTEGER`",
                    "short": "Value supplied for `maxTokens` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request."
                },
                {
                    "name": "presencePenalty",
                    "title": "Presence Penalty",
                    "type": "`$NUMBER`",
                    "short": "Value supplied for `presencePenalty` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request."
                },
                {
                    "name": "service",
                    "title": "Service",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "stopSequences",
                    "title": "Stop Sequences",
                    "type": "`$ARRAY`",
                    "short": "Value supplied for `stopSequences` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request."
                },
                {
                    "name": "temperature",
                    "title": "Temperature",
                    "type": "`$NUMBER`",
                    "short": "Value supplied for `temperature` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request."
                },
                {
                    "name": "topK",
                    "title": "Top K",
                    "type": "`$INTEGER`",
                    "short": "Value supplied for `topK` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request."
                },
                {
                    "name": "topP",
                    "title": "Top P",
                    "type": "`$NUMBER`",
                    "short": "Value supplied for `topP` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request."
                }
            ],
            "name": "assistant_advanced_settings_runtime_update_success",
            "op": {
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/assistants/{assistantId}/runtime/advanced-settings",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "runtime"
                                },
                                {
                                    "lit": "advanced-settings"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{assistant_id}",
                                "runtime",
                                "advanced-settings"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.assistant"
                    ]
                ]
            }
        },
        "assistant_asr_runtime_update_success": {
            "fields": [
                {
                    "name": "apiKey",
                    "title": "Api Key",
                    "type": "`$STRING`",
                    "short": "API key of the customer's ASR provider.",
                    "writeOnly": true
                },
                {
                    "name": "assistantApiKey",
                    "title": "Assistant Api Key",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "assistantId",
                    "title": "Assistant Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "configuration",
                    "title": "Configuration",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Actual resulting ASR runtime configuration after merge and backend resolution."
                },
                {
                    "name": "engineCode",
                    "title": "Engine Code",
                    "type": "`$STRING`",
                    "short": "ASR engine/provider code."
                },
                {
                    "name": "providerWalletId",
                    "title": "Provider Wallet Id",
                    "type": "`$INTEGER`",
                    "short": "Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text."
                },
                {
                    "name": "runtimeBinding",
                    "title": "Runtime Binding",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "service",
                    "title": "Service",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "sourceMode",
                    "title": "Source Mode",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Runtime sourcing mode."
                }
            ],
            "name": "assistant_asr_runtime_update_success",
            "op": {
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/assistants/{assistantId}/runtime/asr",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "runtime"
                                },
                                {
                                    "lit": "asr"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{assistant_id}",
                                "runtime",
                                "asr"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.assistant"
                    ]
                ]
            }
        },
        "assistant_conversation_webhook_runtime_success": {
            "fields": [
                {
                    "name": "authName",
                    "title": "Auth Name",
                    "type": "`$STRING`",
                    "short": "Name of the saved authentication to apply to the request"
                },
                {
                    "name": "configuration",
                    "title": "Configuration",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "enabled",
                    "title": "Enabled",
                    "type": "`$BOOLEAN`",
                    "short": "Enable or disable sending the conversation to the webhook"
                },
                {
                    "name": "url",
                    "title": "Url",
                    "type": "`$STRING`",
                    "short": "Endpoint that receives the POST at the end of the call"
                }
            ],
            "name": "assistant_conversation_webhook_runtime_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/assistants/{assistantId}/runtime/hangup/conversation-webhook",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "runtime"
                                },
                                {
                                    "lit": "hangup"
                                },
                                {
                                    "lit": "conversation-webhook"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{assistant_id}",
                                "runtime",
                                "hangup",
                                "conversation-webhook"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/assistants/{assistantId}/runtime/hangup/conversation-webhook",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "runtime"
                                },
                                {
                                    "lit": "hangup"
                                },
                                {
                                    "lit": "conversation-webhook"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{assistant_id}",
                                "runtime",
                                "hangup",
                                "conversation-webhook"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.assistant"
                    ]
                ]
            }
        },
        "assistant_dtmf_configuration_success": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "assistant_dtmf_configuration_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/assistants/{assistantId}/dtmf",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "dtmf"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "assistants",
                                "{id}",
                                "dtmf"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "dtmf",
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "assistant_dtmf_runtime_update_success": {
            "fields": [
                {
                    "name": "acceptTimeout",
                    "title": "Accept Timeout",
                    "type": "`$INTEGER`",
                    "short": "Value supplied for `acceptTimeout` in the `AssistantDtmfRuntimeUpdateRequest` request."
                },
                {
                    "name": "assistantApiKey",
                    "title": "Assistant Api Key",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "assistantId",
                    "title": "Assistant Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "configuration",
                    "title": "Configuration",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "enabled",
                    "title": "Enabled",
                    "type": "`$BOOLEAN`",
                    "short": "Enable or disable DTMF reception."
                },
                {
                    "name": "maxLength",
                    "title": "Max Length",
                    "type": "`$INTEGER`",
                    "short": "Value supplied for `maxLength` in the `AssistantDtmfRuntimeUpdateRequest` request."
                },
                {
                    "name": "minLength",
                    "title": "Min Length",
                    "type": "`$INTEGER`",
                    "short": "Value supplied for `minLength` in the `AssistantDtmfRuntimeUpdateRequest` request."
                },
                {
                    "name": "playEnabled",
                    "title": "Play Enabled",
                    "type": "`$BOOLEAN`",
                    "short": "Enable or disable DTMF sending during the call."
                },
                {
                    "name": "service",
                    "title": "Service",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "terminationChars",
                    "title": "Termination Chars",
                    "type": "`$STRING`",
                    "short": "Value supplied for `terminationChars` in the `AssistantDtmfRuntimeUpdateRequest` request."
                }
            ],
            "name": "assistant_dtmf_runtime_update_success",
            "op": {
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/assistants/{assistantId}/runtime/dtmf",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "runtime"
                                },
                                {
                                    "lit": "dtmf"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{assistant_id}",
                                "runtime",
                                "dtmf"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.assistant"
                    ]
                ]
            }
        },
        "assistant_hangup_configuration_success": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "assistant_hangup_configuration_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/assistants/{assistantId}/hangup",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "hangup"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "assistants",
                                "{id}",
                                "hangup"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "hangup",
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "assistant_hangup_runtime_update_success": {
            "fields": [
                {
                    "name": "assistantApiKey",
                    "title": "Assistant Api Key",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "assistantId",
                    "title": "Assistant Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "availableAgents",
                    "title": "Available Agents",
                    "type": "`$ARRAY`",
                    "short": "Value supplied for `availableAgents` in the `AssistantHangupRuntimeUpdateRequest` request."
                },
                {
                    "name": "configuration",
                    "title": "Configuration",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "enableHangup",
                    "title": "Enable Hangup",
                    "type": "`$BOOLEAN`",
                    "short": "Value supplied for `enableHangup` in the `AssistantHangupRuntimeUpdateRequest` request."
                },
                {
                    "name": "enableRedirect",
                    "title": "Enable Redirect",
                    "type": "`$BOOLEAN`",
                    "short": "Value supplied for `enableRedirect` in the `AssistantHangupRuntimeUpdateRequest` request."
                },
                {
                    "name": "enableTransferAgent",
                    "title": "Enable Transfer Agent",
                    "type": "`$BOOLEAN`",
                    "short": "Value supplied for `enableTransferAgent` in the `AssistantHangupRuntimeUpdateRequest` request."
                },
                {
                    "name": "service",
                    "title": "Service",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "transferAgentNotificationText",
                    "title": "Transfer Agent Notification Text",
                    "type": "`$STRING`",
                    "short": "Value supplied for `transferAgentNotificationText` in the `AssistantHangupRuntimeUpdateRequest` request."
                }
            ],
            "name": "assistant_hangup_runtime_update_success",
            "op": {
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/assistants/{assistantId}/runtime/hangup",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "runtime"
                                },
                                {
                                    "lit": "hangup"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{assistant_id}",
                                "runtime",
                                "hangup"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.assistant"
                    ]
                ]
            }
        },
        "assistant_hangup_schema_runtime_success": {
            "fields": [
                {
                    "name": "configuration",
                    "title": "Configuration",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "hangupUrl",
                    "title": "Hangup Url",
                    "type": "`$STRING`",
                    "short": "Hangup webhook URL (null to remove)"
                },
                {
                    "name": "schema",
                    "title": "Schema",
                    "type": "`$ARRAY`",
                    "short": "Defining body fields (overrides the current schema)"
                }
            ],
            "name": "assistant_hangup_schema_runtime_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/assistants/{assistantId}/runtime/hangup/schema",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "runtime"
                                },
                                {
                                    "lit": "hangup"
                                },
                                {
                                    "lit": "schema"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{assistant_id}",
                                "runtime",
                                "hangup",
                                "schema"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/assistants/{assistantId}/runtime/hangup/schema",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "runtime"
                                },
                                {
                                    "lit": "hangup"
                                },
                                {
                                    "lit": "schema"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{assistant_id}",
                                "runtime",
                                "hangup",
                                "schema"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": {
                                    "hangupUrl": "`reqdata.hangup_url`",
                                    "schema": "`reqdata.schema`"
                                },
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.assistant"
                    ]
                ]
            }
        },
        "assistant_knowledge_success": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "assistant_knowledge_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/assistants/{assistantId}/knowledge",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "knowledge"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{id}",
                                "knowledge"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "knowledge",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/assistants/{assistantId}/knowledge",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "knowledge"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "assistants",
                                "{id}",
                                "knowledge"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "knowledge",
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/api/v1/assistants/{assistantId}/knowledge",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "knowledge"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{id}",
                                "knowledge"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "knowledge",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/api/v1/catalog/assistants/{assistantId}/knowledge",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "knowledge"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "assistants",
                                "{id}",
                                "knowledge"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "knowledge",
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "assistant_llm_runtime_update_success": {
            "fields": [
                {
                    "name": "apiKey",
                    "title": "Api Key",
                    "type": "`$STRING`",
                    "short": "API key of the customer's LLM provider.",
                    "writeOnly": true
                },
                {
                    "name": "assistantApiKey",
                    "title": "Assistant Api Key",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "assistantId",
                    "title": "Assistant Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "baseUrl",
                    "title": "Base Url",
                    "type": "`$STRING`",
                    "short": "Base custom URL of the LLM provider."
                },
                {
                    "name": "configuration",
                    "title": "Configuration",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Actual resulting LLM runtime configuration after merge and backend resolution."
                },
                {
                    "name": "engineCode",
                    "title": "Engine Code",
                    "type": "`$STRING`",
                    "short": "LLM engine/provider code."
                },
                {
                    "name": "modelCode",
                    "title": "Model Code",
                    "type": "`$STRING`",
                    "short": "LLM model code."
                },
                {
                    "name": "providerWalletId",
                    "title": "Provider Wallet Id",
                    "type": "`$INTEGER`",
                    "short": "Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text."
                },
                {
                    "name": "runtimeBinding",
                    "title": "Runtime Binding",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "service",
                    "title": "Service",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "sourceMode",
                    "title": "Source Mode",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Runtime sourcing mode."
                }
            ],
            "name": "assistant_llm_runtime_update_success",
            "op": {
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/assistants/{assistantId}/runtime/llm",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "runtime"
                                },
                                {
                                    "lit": "llm"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{assistant_id}",
                                "runtime",
                                "llm"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.assistant"
                    ]
                ]
            }
        },
        "assistant_number_routing_catalog_success": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "assistant_number_routing_catalog_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/assistants/{assistantId}/number-routing",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "number-routing"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "assistants",
                                "{id}",
                                "number-routing"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "number-routing",
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "assistant_number_routing_runtime_success": {
            "fields": [
                {
                    "name": "configuration",
                    "title": "Configuration",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "demoNumbers",
                    "title": "Demo Numbers",
                    "type": "`$ARRAY`",
                    "short": "Demo numbers to route to this assistant"
                },
                {
                    "name": "purchasedNumbers",
                    "title": "Purchased Numbers",
                    "type": "`$ARRAY`",
                    "short": "Purchased numbers to route to this assistant"
                },
                {
                    "name": "userNumbers",
                    "title": "User Numbers",
                    "type": "`$ARRAY`",
                    "short": "Customer's own numbers (own PBX) to route to this assistant"
                }
            ],
            "name": "assistant_number_routing_runtime_success",
            "op": {
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/assistants/{assistantId}/runtime/number-routing",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "runtime"
                                },
                                {
                                    "lit": "number-routing"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{assistant_id}",
                                "runtime",
                                "number-routing"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.assistant"
                    ]
                ]
            }
        },
        "assistant_postcall_mcp_runtime_success": {
            "fields": [
                {
                    "name": "configuration",
                    "title": "Configuration",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "General configuration of the post-call phase."
                },
                {
                    "name": "enabled",
                    "title": "Enabled",
                    "type": "`$BOOLEAN`",
                    "short": "Enable or disable the whole post-call phase without losing its configuration."
                },
                {
                    "name": "globalPrompt",
                    "title": "Global Prompt",
                    "type": "`$STRING`",
                    "short": "Global post-call prompt."
                },
                {
                    "name": "modelConfig",
                    "title": "Model Config",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Model configuration used by the MCP phase."
                },
                {
                    "name": "tools",
                    "title": "Tools",
                    "type": "`$ARRAY`",
                    "req": true,
                    "op": {
                        "update": {
                            "type": "`$ARRAY`"
                        }
                    },
                    "short": "Complete list of post-call tools to set up."
                }
            ],
            "name": "assistant_postcall_mcp_runtime_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/assistants/{assistantId}/runtime/postcall/mcp-config",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "runtime"
                                },
                                {
                                    "lit": "postcall"
                                },
                                {
                                    "lit": "mcp-config"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{assistant_id}",
                                "runtime",
                                "postcall",
                                "mcp-config"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/assistants/{assistantId}/runtime/postcall/mcp-config",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "runtime"
                                },
                                {
                                    "lit": "postcall"
                                },
                                {
                                    "lit": "mcp-config"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{assistant_id}",
                                "runtime",
                                "postcall",
                                "mcp-config"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.assistant"
                    ]
                ]
            }
        },
        "assistant_precall_mcp_runtime_success": {
            "fields": [
                {
                    "name": "configuration",
                    "title": "Configuration",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "General configuration of the pre-call phase."
                },
                {
                    "name": "earlyTerminationEnabled",
                    "title": "Early Termination Enabled",
                    "type": "`$BOOLEAN`",
                    "short": "Enable/disable early termination."
                },
                {
                    "name": "enabled",
                    "title": "Enabled",
                    "type": "`$BOOLEAN`",
                    "short": "Enable or disable the whole pre-call phase without losing its configuration."
                },
                {
                    "name": "globalPrompt",
                    "title": "Global Prompt",
                    "type": "`$STRING`",
                    "short": "Global pre-call prompt."
                },
                {
                    "name": "modelConfig",
                    "title": "Model Config",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Model configuration used by the MCP phase."
                },
                {
                    "name": "outputSchema",
                    "title": "Output Schema",
                    "type": "`$OBJECT`",
                    "short": "JSON schema of the expected pre-call output, as an alternative to `outputVariables`."
                },
                {
                    "name": "outputVariables",
                    "title": "Output Variables",
                    "type": "`$ARRAY`",
                    "short": "Variables to extract from the pre-call result."
                },
                {
                    "name": "terminationMessage",
                    "title": "Termination Message",
                    "type": "`$STRING`",
                    "short": "Early termination audio message."
                },
                {
                    "name": "tools",
                    "title": "Tools",
                    "type": "`$ARRAY`",
                    "req": true,
                    "op": {
                        "update": {
                            "type": "`$ARRAY`"
                        }
                    },
                    "short": "Complete list of pre-call tools to set (replaces the current ones)."
                },
                {
                    "name": "voiceConfig",
                    "title": "Voice Config",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Voice/TTS configuration used to generate pre-call hold and termination audio."
                },
                {
                    "name": "waitingAudioNonInterruptible",
                    "title": "Waiting Audio Non Interruptible",
                    "type": "`$BOOLEAN`",
                    "short": "`true` plays all on-hold audio, `false` allows the customer to speak over the audio."
                },
                {
                    "name": "waitingAudioText",
                    "title": "Waiting Audio Text",
                    "type": "`$STRING`",
                    "short": "Audio text on hold."
                }
            ],
            "name": "assistant_precall_mcp_runtime_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/assistants/{assistantId}/runtime/precall/mcp-config",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "runtime"
                                },
                                {
                                    "lit": "precall"
                                },
                                {
                                    "lit": "mcp-config"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{assistant_id}",
                                "runtime",
                                "precall",
                                "mcp-config"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/assistants/{assistantId}/runtime/precall/mcp-config",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "runtime"
                                },
                                {
                                    "lit": "precall"
                                },
                                {
                                    "lit": "mcp-config"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{assistant_id}",
                                "runtime",
                                "precall",
                                "mcp-config"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.assistant"
                    ]
                ]
            }
        },
        "assistant_precall_validation_runtime_success": {
            "fields": [
                {
                    "name": "authPassword",
                    "title": "Auth Password",
                    "type": "`$STRING`",
                    "short": "Basic auth password (null to remove it)"
                },
                {
                    "name": "authToken",
                    "title": "Auth Token",
                    "type": "`$STRING`",
                    "short": "Bearer token or API key (null to remove it)"
                },
                {
                    "name": "authType",
                    "title": "Auth Type",
                    "type": "`$STRING`"
                },
                {
                    "name": "authUsername",
                    "title": "Auth Username",
                    "type": "`$STRING`",
                    "short": "Value supplied for `authUsername` in the `AssistantPrecallValidationRuntimeUpdateRequest` request."
                },
                {
                    "name": "configuration",
                    "title": "Configuration",
                    "type": "`$ANY`",
                    "req": true,
                    "short": "null if no configuration is yet present"
                },
                {
                    "name": "headersJson",
                    "title": "Headers Json",
                    "type": "`$OBJECT`",
                    "short": "Value supplied for `headersJson` in the `AssistantPrecallValidationRuntimeUpdateRequest` request."
                },
                {
                    "name": "isActive",
                    "title": "Is Active",
                    "type": "`$BOOLEAN`",
                    "short": "Value supplied for `isActive` in the `AssistantPrecallValidationRuntimeUpdateRequest` request."
                },
                {
                    "name": "method",
                    "title": "Method",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "short": "Value supplied for `name` in the `AssistantPrecallValidationRuntimeUpdateRequest` request."
                },
                {
                    "name": "numberLocation",
                    "title": "Number Location",
                    "type": "`$STRING`",
                    "short": "Where to insert the calling number in the HTTP request: - `query` — added as a query string (e.g."
                },
                {
                    "name": "numberParamName",
                    "title": "Number Param Name",
                    "type": "`$STRING`",
                    "short": "Value supplied for `numberParamName` in the `AssistantPrecallValidationRuntimeUpdateRequest` request."
                },
                {
                    "name": "timeoutMs",
                    "title": "Timeout Ms",
                    "type": "`$INTEGER`",
                    "short": "Value supplied for `timeoutMs` in the `AssistantPrecallValidationRuntimeUpdateRequest` request."
                },
                {
                    "name": "url",
                    "title": "Url",
                    "type": "`$STRING`",
                    "short": "Value supplied for `url` in the `AssistantPrecallValidationRuntimeUpdateRequest` request.",
                    "format": "uri"
                }
            ],
            "name": "assistant_precall_validation_runtime_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/assistants/{assistantId}/runtime/precall/number-validation",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "runtime"
                                },
                                {
                                    "lit": "precall"
                                },
                                {
                                    "lit": "number-validation"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{assistant_id}",
                                "runtime",
                                "precall",
                                "number-validation"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/assistants/{assistantId}/runtime/precall/number-validation",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "runtime"
                                },
                                {
                                    "lit": "precall"
                                },
                                {
                                    "lit": "number-validation"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{assistant_id}",
                                "runtime",
                                "precall",
                                "number-validation"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": {
                                    "authPassword": "`reqdata.auth_password`",
                                    "authToken": "`reqdata.auth_token`",
                                    "authType": "`reqdata.auth_type`",
                                    "authUsername": "`reqdata.auth_username`",
                                    "headersJson": "`reqdata.headers_json`",
                                    "isActive": "`reqdata.is_active`",
                                    "method": "`reqdata.method`",
                                    "name": "`reqdata.name`",
                                    "numberLocation": "`reqdata.number_location`",
                                    "numberParamName": "`reqdata.number_param_name`",
                                    "timeoutMs": "`reqdata.timeout_m`",
                                    "url": "`reqdata.url`"
                                },
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.assistant"
                    ]
                ]
            }
        },
        "assistant_prompt_success": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "assistant_prompt_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/assistants/{assistantId}/prompt",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "prompt"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{id}",
                                "prompt"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "prompt",
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "assistant_rag_configuration_success": {
            "fields": [
                {
                    "name": "enabled",
                    "title": "Enabled",
                    "type": "`$BOOLEAN`",
                    "req": true
                },
                {
                    "name": "kbPrompt",
                    "title": "Kb Prompt",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "returnedChunks",
                    "title": "Returned Chunks",
                    "type": "`$INTEGER`",
                    "req": true
                }
            ],
            "name": "assistant_rag_configuration_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/assistants/{assistantId}/rag/collections",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "rag"
                                },
                                {
                                    "lit": "collections"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{assistant_id}",
                                "rag",
                                "collections"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/assistants/{assistantId}/rag/collections",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "rag"
                                },
                                {
                                    "lit": "collections"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "assistants",
                                "{assistant_id}",
                                "rag",
                                "collections"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.assistant"
                    ]
                ]
            }
        },
        "assistant_rag_runtime_update_success": {
            "fields": [
                {
                    "name": "assistantApiKey",
                    "title": "Assistant Api Key",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "assistantId",
                    "title": "Assistant Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "configuration",
                    "title": "Configuration",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "RAG configuration resulting after application merge."
                },
                {
                    "name": "enabled",
                    "title": "Enabled",
                    "type": "`$BOOLEAN`",
                    "short": "Enable or disable RAG for the assistant."
                },
                {
                    "name": "kbPrompt",
                    "title": "Kb Prompt",
                    "type": "`$STRING`",
                    "short": "Assistant knowledge base instructions."
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "short": "Name of the RAG collection to associate."
                },
                {
                    "name": "returnedChunks",
                    "title": "Returned Chunks",
                    "type": "`$INTEGER`",
                    "short": "Number of relevant fragments to return from the knowledge base."
                },
                {
                    "name": "service",
                    "title": "Service",
                    "type": "`$STRING`",
                    "req": true
                }
            ],
            "name": "assistant_rag_runtime_update_success",
            "op": {
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/assistants/{assistantId}/runtime/rag",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "runtime"
                                },
                                {
                                    "lit": "rag"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{assistant_id}",
                                "runtime",
                                "rag"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.assistant"
                    ]
                ]
            }
        },
        "assistant_save_conversation_runtime_success": {
            "fields": [
                {
                    "name": "configuration",
                    "title": "Configuration",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "emails",
                    "title": "Emails",
                    "type": "`$STRING`",
                    "short": "One or more recipient emails separated by commas (e.g."
                },
                {
                    "name": "enabled",
                    "title": "Enabled",
                    "type": "`$BOOLEAN`",
                    "short": "Enable or disable sending of the conversation summary via email"
                },
                {
                    "name": "smtpInstanceName",
                    "title": "Smtp Instance Name",
                    "type": "`$STRING`",
                    "short": "Name of the SMTP plugin instance to use for sending"
                },
                {
                    "name": "smtp_instance_name",
                    "title": "Smtp Instance Name",
                    "type": "`$STRING`",
                    "short": "Legacy alias of `smtpInstanceName`.",
                    "deprecated": true
                }
            ],
            "name": "assistant_save_conversation_runtime_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/assistants/{assistantId}/runtime/hangup/save-conversation",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "runtime"
                                },
                                {
                                    "lit": "hangup"
                                },
                                {
                                    "lit": "save-conversation"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{assistant_id}",
                                "runtime",
                                "hangup",
                                "save-conversation"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/assistants/{assistantId}/runtime/hangup/save-conversation",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "runtime"
                                },
                                {
                                    "lit": "hangup"
                                },
                                {
                                    "lit": "save-conversation"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{assistant_id}",
                                "runtime",
                                "hangup",
                                "save-conversation"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.assistant"
                    ]
                ]
            }
        },
        "assistant_settings_configuration_success": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "assistant_settings_configuration_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/assistants/{assistantId}/settings",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "settings"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "assistants",
                                "{id}",
                                "settings"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "settings",
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "assistant_settings_runtime_update_success": {
            "fields": [
                {
                    "name": "asrInitialDelayMs",
                    "title": "Asr Initial Delay Ms",
                    "type": "`$INTEGER`",
                    "short": "Value supplied for `asrInitialDelayMs` in the `AssistantSettingsRuntimeUpdateRequest` request."
                },
                {
                    "name": "asrSilenceMs",
                    "title": "Asr Silence Ms",
                    "type": "`$INTEGER`",
                    "short": "Value supplied for `asrSilenceMs` in the `AssistantSettingsRuntimeUpdateRequest` request."
                },
                {
                    "name": "assistantApiKey",
                    "title": "Assistant Api Key",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "assistantId",
                    "title": "Assistant Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "callPermissions",
                    "title": "Call Permissions",
                    "type": "`$OBJECT`",
                    "short": "Value supplied for `callPermissions` in the `AssistantSettingsRuntimeUpdateRequest` request."
                },
                {
                    "name": "configuration",
                    "title": "Configuration",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "dynamicTimeoutMs",
                    "title": "Dynamic Timeout Ms",
                    "type": "`$INTEGER`",
                    "short": "Value supplied for `dynamicTimeoutMs` in the `AssistantSettingsRuntimeUpdateRequest` request."
                },
                {
                    "name": "filler",
                    "title": "Filler",
                    "type": "`$OBJECT`",
                    "short": "Value supplied for `filler` in the `AssistantSettingsRuntimeUpdateRequest` request."
                },
                {
                    "name": "maxResponseLength",
                    "title": "Max Response Length",
                    "type": "`$INTEGER`",
                    "short": "Value supplied for `maxResponseLength` in the `AssistantSettingsRuntimeUpdateRequest` request."
                },
                {
                    "name": "reprompt",
                    "title": "Reprompt",
                    "type": "`$OBJECT`",
                    "short": "Value supplied for `reprompt` in the `AssistantSettingsRuntimeUpdateRequest` request."
                },
                {
                    "name": "service",
                    "title": "Service",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "truncateInitialAudio",
                    "title": "Truncate Initial Audio",
                    "type": "`$BOOLEAN`",
                    "short": "Value supplied for `truncateInitialAudio` in the `AssistantSettingsRuntimeUpdateRequest` request."
                },
                {
                    "name": "ttsInterruptionInConversation",
                    "title": "Tts Interruption In Conversation",
                    "type": "`$BOOLEAN`",
                    "short": "Value supplied for `ttsInterruptionInConversation` in the `AssistantSettingsRuntimeUpdateRequest` request."
                },
                {
                    "name": "vad",
                    "title": "Vad",
                    "type": "`$BOOLEAN`",
                    "short": "Value supplied for `vad` in the `AssistantSettingsRuntimeUpdateRequest` request."
                },
                {
                    "name": "vadMinVoiceMs",
                    "title": "Vad Min Voice Ms",
                    "type": "`$INTEGER`",
                    "short": "Value supplied for `vadMinVoiceMs` in the `AssistantSettingsRuntimeUpdateRequest` request."
                },
                {
                    "name": "vadThreshold",
                    "title": "Vad Threshold",
                    "type": "`$NUMBER`",
                    "short": "Value supplied for `vadThreshold` in the `AssistantSettingsRuntimeUpdateRequest` request.",
                    "format": "float"
                }
            ],
            "name": "assistant_settings_runtime_update_success",
            "op": {
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/assistants/{assistantId}/runtime/settings",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "runtime"
                                },
                                {
                                    "lit": "settings"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{assistant_id}",
                                "runtime",
                                "settings"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.assistant"
                    ]
                ]
            }
        },
        "assistant_tools_runtime_update_success": {
            "fields": [
                {
                    "name": "assistantApiKey",
                    "title": "Assistant Api Key",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "assistantId",
                    "title": "Assistant Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "configuration",
                    "title": "Configuration",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Resulting tool configuration after the update."
                },
                {
                    "name": "service",
                    "title": "Service",
                    "type": "`$STRING`",
                    "req": true
                }
            ],
            "name": "assistant_tools_runtime_update_success",
            "op": {
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/assistants/{assistantId}/runtime/tools",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "runtime"
                                },
                                {
                                    "lit": "tools"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{assistant_id}",
                                "runtime",
                                "tools"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.assistant"
                    ]
                ]
            }
        },
        "assistant_tts_runtime_update_success": {
            "fields": [
                {
                    "name": "apiKey",
                    "title": "Api Key",
                    "type": "`$STRING`",
                    "short": "API key of the customer's TTS provider.",
                    "writeOnly": true
                },
                {
                    "name": "assistantApiKey",
                    "title": "Assistant Api Key",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "assistantId",
                    "title": "Assistant Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "configuration",
                    "title": "Configuration",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Actual resulting TTS runtime configuration after merge and backend resolution."
                },
                {
                    "name": "engineCode",
                    "title": "Engine Code",
                    "type": "`$STRING`",
                    "short": "TTS engine/provider code."
                },
                {
                    "name": "providerWalletId",
                    "title": "Provider Wallet Id",
                    "type": "`$INTEGER`",
                    "short": "Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text."
                },
                {
                    "name": "region",
                    "title": "Region",
                    "type": "`$STRING`",
                    "short": "Region/provider area requested by some engine customers, in particular Azure."
                },
                {
                    "name": "runtimeBinding",
                    "title": "Runtime Binding",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "service",
                    "title": "Service",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "sourceMode",
                    "title": "Source Mode",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Runtime sourcing mode."
                },
                {
                    "name": "voiceCode",
                    "title": "Voice Code",
                    "type": "`$STRING`",
                    "short": "TTS voice code."
                }
            ],
            "name": "assistant_tts_runtime_update_success",
            "op": {
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/assistants/{assistantId}/runtime/tts",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "runtime"
                                },
                                {
                                    "lit": "tts"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{assistant_id}",
                                "runtime",
                                "tts"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.assistant"
                    ]
                ]
            }
        },
        "assistant_voice_to_voice_runtime_update_success": {
            "fields": [
                {
                    "name": "apiKey",
                    "title": "Api Key",
                    "type": "`$STRING`",
                    "short": "Customer key provider API.",
                    "writeOnly": true
                },
                {
                    "name": "assistantApiKey",
                    "title": "Assistant Api Key",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "assistantId",
                    "title": "Assistant Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "baseUrl",
                    "title": "Base Url",
                    "type": "`$STRING`",
                    "short": "Base custom URL."
                },
                {
                    "name": "configuration",
                    "title": "Configuration",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "engineCode",
                    "title": "Engine Code",
                    "type": "`$STRING`",
                    "short": "Provider/engine voice LLM."
                },
                {
                    "name": "modelCode",
                    "title": "Model Code",
                    "type": "`$STRING`",
                    "short": "LLM voice model code."
                },
                {
                    "name": "prompt",
                    "title": "Prompt",
                    "type": "`$STRING`",
                    "short": "Main prompt of the audio-to-audio runtime."
                },
                {
                    "name": "providerWalletId",
                    "title": "Provider Wallet Id",
                    "type": "`$INTEGER`",
                    "short": "Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text."
                },
                {
                    "name": "service",
                    "title": "Service",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "voiceCode",
                    "title": "Voice Code",
                    "type": "`$STRING`",
                    "short": "Model item code."
                }
            ],
            "name": "assistant_voice_to_voice_runtime_update_success",
            "op": {
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/assistants/{assistantId}/runtime/audio-to-audio",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "runtime"
                                },
                                {
                                    "lit": "audio-to-audio"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{assistant_id}",
                                "runtime",
                                "audio-to-audio"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": {
                                    "apiKey": "`reqdata.api_key`",
                                    "baseUrl": "`reqdata.base_url`",
                                    "engineCode": "`reqdata.engine_code`",
                                    "modelCode": "`reqdata.model_code`",
                                    "prompt": "`reqdata.prompt`",
                                    "providerWalletId": "`reqdata.provider_wallet_id`",
                                    "voiceCode": "`reqdata.voice_code`"
                                },
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/assistants/{assistantId}/runtime/voice-to-voice",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "runtime"
                                },
                                {
                                    "lit": "voice-to-voice"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{assistant_id}",
                                "runtime",
                                "voice-to-voice"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": {
                                    "apiKey": "`reqdata.api_key`",
                                    "baseUrl": "`reqdata.base_url`",
                                    "engineCode": "`reqdata.engine_code`",
                                    "modelCode": "`reqdata.model_code`",
                                    "prompt": "`reqdata.prompt`",
                                    "providerWalletId": "`reqdata.provider_wallet_id`",
                                    "voiceCode": "`reqdata.voice_code`"
                                },
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.assistant"
                    ]
                ]
            }
        },
        "associated_runtime_tool_list_success": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "associated_runtime_tool_list_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/assistants/{assistantId}/tools",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "tools"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "assistants",
                                "{assistant_id}",
                                "tools"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.assistant"
                    ]
                ]
            }
        },
        "audio_to_audio": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Collection metadata."
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "audio_to_audio",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/providers/audio-to-audio",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "providers"
                                },
                                {
                                    "lit": "audio-to-audio"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "providers",
                                "audio-to-audio"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "available_runtime_tool_list_success": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "available_runtime_tool_list_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/tools",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "tools"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "tools"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "cursor",
                                        "orig": "cursor",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "cursor",
                                    "limit"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "filler_phrase_list": {
            "fields": [
                {
                    "name": "associations",
                    "title": "Associations",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Value supplied for `id` in the `FillerPhraseListCreateRequest` request."
                },
                {
                    "name": "list",
                    "title": "List",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Value supplied for `name` in the `FillerPhraseListCreateRequest` request."
                },
                {
                    "name": "phrases",
                    "title": "Phrases",
                    "type": "`$ARRAY`",
                    "short": "Value supplied for `phrases` in the `FillerPhraseListCreateRequest` request."
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                },
                {
                    "name": "toolListIds",
                    "title": "Tool List Ids",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "waitingListIds",
                    "title": "Waiting List Ids",
                    "type": "`$ARRAY`",
                    "req": true
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "filler_phrase_list",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/api/v1/catalog/filler-phrase-lists",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "filler-phrase-lists"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "filler-phrase-lists"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {}
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/api/v1/filler-phrase-lists",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "filler-phrase-lists"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "filler-phrase-lists"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/filler-phrase-lists",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "filler-phrase-lists"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "filler-phrase-lists"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "cursor",
                                        "orig": "cursor",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "cursor",
                                    "limit"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/filler-phrase-lists",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "filler-phrase-lists"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "filler-phrase-lists"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "cursor",
                                        "orig": "cursor",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "cursor",
                                    "limit"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/assistants/{assistantId}/filler-phrase-lists",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "filler-phrase-lists"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{assistant_id}",
                                "filler-phrase-lists"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/assistants/{assistantId}/filler-phrase-lists",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "filler-phrase-lists"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "assistants",
                                "{assistant_id}",
                                "filler-phrase-lists"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/filler-phrase-lists/{listId}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "filler-phrase-lists"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "filler-phrase-lists",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "listId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "listId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/filler-phrase-lists/{listId}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "filler-phrase-lists"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "filler-phrase-lists",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "listId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "listId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/api/v1/catalog/filler-phrase-lists/{listId}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "filler-phrase-lists"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "filler-phrase-lists",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "listId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "listId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/api/v1/filler-phrase-lists/{listId}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "filler-phrase-lists"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "filler-phrase-lists",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "listId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "listId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/api/v1/assistants/{assistantId}/filler-phrase-lists",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "filler-phrase-lists"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "assistants",
                                "{assistant_id}",
                                "filler-phrase-lists"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/api/v1/catalog/assistants/{assistantId}/filler-phrase-lists",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "filler-phrase-lists"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "assistants",
                                "{assistant_id}",
                                "filler-phrase-lists"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/api/v1/catalog/filler-phrase-lists/{listId}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "filler-phrase-lists"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "filler-phrase-lists",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "listId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "listId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/api/v1/filler-phrase-lists/{listId}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "filler-phrase-lists"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "filler-phrase-lists",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "listId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "listId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.assistant"
                    ]
                ]
            }
        },
        "health": {
            "fields": [
                {
                    "name": "dataSource",
                    "title": "Data Source",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "service",
                    "title": "Service",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "status",
                    "title": "Status",
                    "type": "`$STRING`",
                    "req": true
                }
            ],
            "name": "health",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/health",
                            "segments": [
                                {
                                    "lit": "health"
                                }
                            ],
                            "parts": [
                                "health"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "knowledge": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "defaultPostAction",
                    "title": "Default Post Action",
                    "type": "`$STRING`",
                    "short": "Defaults to `ask_if_needs_more` when omitted"
                },
                {
                    "name": "defaultResponse",
                    "title": "Default Response",
                    "type": "`$STRING`",
                    "req": true,
                    "op": {
                        "update": {
                            "type": "`$STRING`"
                        }
                    },
                    "short": "Default answer used when a trigger has no specific response."
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "knowledge",
                    "title": "Knowledge",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "A knowledge item: a set of recognised requests with their answers, folded into the prompt of every assistant it is associated with."
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "rules",
                    "title": "Rules",
                    "type": "`$STRING`",
                    "short": "Optional constraints applied to the whole knowledge item."
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                },
                {
                    "name": "title",
                    "title": "Title",
                    "type": "`$STRING`",
                    "req": true,
                    "op": {
                        "update": {
                            "type": "`$STRING`"
                        }
                    },
                    "short": "Human-readable title of the new knowledge item."
                },
                {
                    "name": "triggers",
                    "title": "Triggers",
                    "type": "`$ARRAY`",
                    "short": "Initial trigger list for the knowledge item."
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "knowledge",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/api/v1/catalog/knowledge",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "knowledge"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "knowledge"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {}
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/api/v1/knowledge",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "knowledge"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "knowledge"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/knowledge",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "knowledge"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "knowledge"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "cursor",
                                        "orig": "cursor",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "cursor",
                                    "limit"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/knowledge",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "knowledge"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "knowledge"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "cursor",
                                        "orig": "cursor",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "cursor",
                                    "limit"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/knowledge/{knowledgeId}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "knowledge"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "knowledge",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "knowledgeId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "knowledgeId",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 7
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/knowledge/{knowledgeId}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "knowledge"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "knowledge",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "knowledgeId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "knowledgeId",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 7
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/api/v1/catalog/knowledge/{knowledgeId}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "knowledge"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "knowledge",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "knowledgeId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "knowledgeId",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 7
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/api/v1/knowledge/{knowledgeId}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "knowledge"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "knowledge",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "knowledgeId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "knowledgeId",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 7
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/catalog/knowledge/{knowledgeId}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "knowledge"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "knowledge",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "knowledgeId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "knowledgeId",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 7
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/knowledge/{knowledgeId}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "knowledge"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "knowledge",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "knowledgeId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "knowledgeId",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 7
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "llm": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Collection metadata."
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "llm",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/providers/llm",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "providers"
                                },
                                {
                                    "lit": "llm"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "providers",
                                "llm"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "llm_model_list_success": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Collection metadata."
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "llm_model_list_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/assistants/{assistantId}/llm/models",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "llm"
                                },
                                {
                                    "lit": "models"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "assistants",
                                "{assistant_id}",
                                "llm",
                                "models"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.assistant"
                    ]
                ]
            }
        },
        "outbound_call": {
            "fields": [
                {
                    "name": "AddPrompt",
                    "title": "Add Prompt",
                    "type": "`$STRING`",
                    "short": "Legacy alias of `addPrompt`.",
                    "deprecated": true
                },
                {
                    "name": "addPrompt",
                    "title": "Add Prompt",
                    "type": "`$STRING`",
                    "short": "Optional additional prompt to customize assistant behavior."
                },
                {
                    "name": "apiKey_assistente",
                    "title": "Api Key Assistente",
                    "type": "`$STRING`",
                    "short": "Legacy alias of `assistantApiKey`.",
                    "deprecated": true
                },
                {
                    "name": "assistantApiKey",
                    "title": "Assistant Api Key",
                    "type": "`$STRING`",
                    "short": "API key of the AI assistant that will talk to the callee."
                },
                {
                    "name": "callId",
                    "title": "Call Id",
                    "type": "`$STRING`",
                    "short": "Technical call identifier, if already available when the response is returned."
                },
                {
                    "name": "callResultUrl",
                    "title": "Call Result Url",
                    "type": "`$STRING`",
                    "short": "Optional HTTPS URL that AI4Call calls with the outcome notification.",
                    "format": "uri"
                },
                {
                    "name": "callbackConfigured",
                    "title": "Callback Configured",
                    "type": "`$BOOLEAN`",
                    "req": true,
                    "short": "Indicates whether the callback URL for the call outcome was configured."
                },
                {
                    "name": "callerId",
                    "title": "Caller Id",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Caller number displayed in E.164 format."
                },
                {
                    "name": "dst",
                    "title": "Dst",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Recipient number in E.164 format, example +3902XXXXXXXX."
                },
                {
                    "name": "internalId",
                    "title": "Internal Id",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "UUID generated by AI4Call to correlate the outbound request, callback and final dial-status lookup.",
                    "format": "uuid"
                },
                {
                    "name": "status",
                    "title": "Status",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Initial status of the outbound request."
                },
                {
                    "name": "url_esito_chiamata",
                    "title": "Url Esito Chiamata",
                    "type": "`$ANY`",
                    "short": "Legacy alias of `callResultUrl`.",
                    "deprecated": true
                }
            ],
            "name": "outbound_call",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/webhook/outbound_call",
                            "segments": [
                                {
                                    "lit": "webhook"
                                },
                                {
                                    "lit": "outbound_call"
                                }
                            ],
                            "parts": [
                                "webhook",
                                "outbound_call"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "outbound_call_accepted_success": {
            "fields": [
                {
                    "name": "AddPrompt",
                    "title": "Add Prompt",
                    "type": "`$STRING`",
                    "short": "Legacy alias of `addPrompt`.",
                    "deprecated": true
                },
                {
                    "name": "addPrompt",
                    "title": "Add Prompt",
                    "type": "`$STRING`",
                    "short": "Optional additional prompt to customize assistant behavior."
                },
                {
                    "name": "apiKey_assistente",
                    "title": "Api Key Assistente",
                    "type": "`$STRING`",
                    "short": "Legacy alias of `assistantApiKey`.",
                    "deprecated": true
                },
                {
                    "name": "assistantApiKey",
                    "title": "Assistant Api Key",
                    "type": "`$STRING`",
                    "short": "API key of the AI assistant that will talk to the callee."
                },
                {
                    "name": "callId",
                    "title": "Call Id",
                    "type": "`$STRING`",
                    "short": "Technical call identifier, if already available when the response is returned."
                },
                {
                    "name": "callResultUrl",
                    "title": "Call Result Url",
                    "type": "`$STRING`",
                    "short": "Optional HTTPS URL that AI4Call calls with the outcome notification.",
                    "format": "uri"
                },
                {
                    "name": "callbackConfigured",
                    "title": "Callback Configured",
                    "type": "`$BOOLEAN`",
                    "req": true,
                    "short": "Indicates whether the callback URL for the call outcome was configured."
                },
                {
                    "name": "callerId",
                    "title": "Caller Id",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Calling number displayed in the format required by the PBX, E.164 +3902XXXXXXXX or local 02XXXXXXXX."
                },
                {
                    "name": "dst",
                    "title": "Dst",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Recipient number in the format required by the PBX, E.164 +3902XXXXXXXX or local 02XXXXXXXX."
                },
                {
                    "name": "internalId",
                    "title": "Internal Id",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "UUID generated by AI4Call to correlate the outbound request, callback and final dial-status lookup.",
                    "format": "uuid"
                },
                {
                    "name": "ipPbx",
                    "title": "Ip Pbx",
                    "type": "`$STRING`",
                    "short": "Public IP of the PBX, must be one of the authorized public IPs."
                },
                {
                    "name": "ip_pbx",
                    "title": "Ip Pbx",
                    "type": "`$STRING`",
                    "short": "Legacy alias of `ipPbx`.",
                    "deprecated": true
                },
                {
                    "name": "method_uac",
                    "title": "Method Uac",
                    "type": "`$BOOLEAN`",
                    "short": "Selects the registered UAC mode."
                },
                {
                    "name": "sipPort",
                    "title": "Sip Port",
                    "type": "`$STRING`",
                    "short": "SIP port of the PBX, standard 5060."
                },
                {
                    "name": "sip_port",
                    "title": "Sip Port",
                    "type": "`$STRING`",
                    "short": "Legacy alias of `sipPort`.",
                    "deprecated": true
                },
                {
                    "name": "status",
                    "title": "Status",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Initial status of the outbound request."
                },
                {
                    "name": "url_esito_chiamata",
                    "title": "Url Esito Chiamata",
                    "type": "`$ANY`",
                    "short": "Legacy alias of `callResultUrl`.",
                    "deprecated": true
                }
            ],
            "name": "outbound_call_accepted_success",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/webhook/outbound_call_pbx",
                            "segments": [
                                {
                                    "lit": "webhook"
                                },
                                {
                                    "lit": "outbound_call_pbx"
                                }
                            ],
                            "parts": [
                                "webhook",
                                "outbound_call_pbx"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "outbound_dial_status_payload": {
            "fields": [
                {
                    "name": "billSec",
                    "title": "Bill Sec",
                    "type": "`$INTEGER`",
                    "req": true,
                    "short": "Billed duration in seconds."
                },
                {
                    "name": "dialStatus",
                    "title": "Dial Status",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Final dial result persisted in the outbound CDR."
                },
                {
                    "name": "trafficCost",
                    "title": "Traffic Cost",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Outbound traffic cost in EUR, expressed with six decimal places."
                }
            ],
            "name": "outbound_dial_status_payload",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/getDialstatus/{uuid}",
                            "segments": [
                                {
                                    "lit": "getDialstatus"
                                },
                                {
                                    "var": "uuid"
                                }
                            ],
                            "parts": [
                                "getDialstatus",
                                "{uuid}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "uuid",
                                        "orig": "uuid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "4f9ab147-ef47-4b54-9987-1dd30288c610"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "uuid"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "portal_login_success": {
            "fields": [
                {
                    "name": "client",
                    "title": "Client",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Customer profile returned after successful portal credential verification."
                },
                {
                    "name": "email",
                    "title": "Email",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Portal customer email.",
                    "format": "email"
                },
                {
                    "name": "portalApiKey",
                    "title": "Portal Api Key",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Static portal API key associated with the customer account."
                }
            ],
            "name": "portal_login_success",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/api/v1/auth/portal/login",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "auth"
                                },
                                {
                                    "lit": "portal"
                                },
                                {
                                    "lit": "login"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "auth",
                                "portal",
                                "login"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "pre_call": {
            "fields": [
                {
                    "name": "configuration",
                    "title": "Configuration",
                    "type": "`$OBJECT`",
                    "req": true
                }
            ],
            "name": "pre_call",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/assistants/{assistantId}/pre-call",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "pre-call"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "assistants",
                                "{assistant_id}",
                                "pre-call"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.assistant"
                    ]
                ]
            }
        },
        "provider_wallet": {
            "fields": [
                {
                    "name": "config",
                    "title": "Config",
                    "type": "`$OBJECT`",
                    "req": true,
                    "op": {
                        "update": {
                            "type": "`$OBJECT`"
                        }
                    },
                    "short": "Values of the fields declared by the catalog entry"
                },
                {
                    "name": "credential",
                    "title": "Credential",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "A credential saved by the customer."
                },
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "engine",
                    "title": "Engine",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Engine code selected from the provider-wallet catalog."
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "isActive",
                    "title": "Is Active",
                    "type": "`$BOOLEAN`",
                    "short": "Whether the saved credential can be used by assistant runtimes."
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "req": true,
                    "op": {
                        "update": {
                            "type": "`$STRING`"
                        }
                    },
                    "short": "Customer-defined name for the saved credential."
                },
                {
                    "name": "provider",
                    "title": "Provider",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Provider code selected from the provider-wallet catalog."
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "serviceType",
                    "title": "Service Type",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Service category selected from the provider-wallet catalog."
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "provider_wallet",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/api/v1/account/provider-wallet",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "provider-wallet"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "provider-wallet"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/account/provider-wallet",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "provider-wallet"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "provider-wallet"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "cursor",
                                        "orig": "cursor",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "cursor",
                                    "limit"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/account/provider-wallet/{providerWalletId}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "provider-wallet"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "provider-wallet",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "providerWalletId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "providerWalletId",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 42
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/api/v1/account/provider-wallet/{providerWalletId}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "provider-wallet"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "provider-wallet",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "providerWalletId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "providerWalletId",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 42
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/api/v1/account/provider-wallet/{providerWalletId}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "provider-wallet"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "provider-wallet",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "providerWalletId": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "providerWalletId",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 42
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "provider_wallet_associations_success": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "provider_wallet_associations_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/account/provider-wallet/assistants/{assistantId}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "provider-wallet"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "provider-wallet",
                                "assistants",
                                "{assistant_id}"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.assistant"
                    ]
                ]
            }
        },
        "provider_wallet_catalog_success": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "provider_wallet_catalog_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/account/provider-wallet/catalog",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "lit": "provider-wallet"
                                },
                                {
                                    "lit": "catalog"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "account",
                                "provider-wallet",
                                "catalog"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "public_rag_search_success": {
            "fields": [
                {
                    "name": "count",
                    "title": "Count",
                    "type": "`$INTEGER`",
                    "req": true,
                    "short": "Number of chunks returned by the search, up to the service limit of 4."
                },
                {
                    "name": "query",
                    "title": "Query",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Normalized query text used for the search."
                },
                {
                    "name": "rag_id",
                    "title": "Rag Id",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Public RAG identifier supplied in the request and returned unchanged on success."
                },
                {
                    "name": "results",
                    "title": "Results",
                    "type": "`$ARRAY`",
                    "req": true,
                    "short": "Chunks returned by the vector search."
                }
            ],
            "name": "public_rag_search_success",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/public/v1/rag/search",
                            "segments": [
                                {
                                    "lit": "public"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "rag"
                                },
                                {
                                    "lit": "search"
                                }
                            ],
                            "parts": [
                                "public",
                                "v1",
                                "rag",
                                "search"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "rag_collection_delete_success": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`",
                    "short": "Value supplied for `description` in the `RagCollectionCreateRequest` request."
                },
                {
                    "name": "maxChunkSize",
                    "title": "Max Chunk Size",
                    "type": "`$INTEGER`",
                    "short": "Value supplied for `maxChunkSize` in the `RagCollectionCreateRequest` request."
                },
                {
                    "name": "maxChunksPerFile",
                    "title": "Max Chunks Per File",
                    "type": "`$INTEGER`",
                    "short": "Value supplied for `maxChunksPerFile` in the `RagCollectionCreateRequest` request."
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Collection metadata."
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Value supplied for `name` in the `RagCollectionCreateRequest` request."
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "rag_collection_delete_success",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/api/v1/catalog/rag/collections",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "rag"
                                },
                                {
                                    "lit": "collections"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "rag",
                                "collections"
                            ],
                            "rename": {},
                            "transform": {
                                "req": {
                                    "description": "`reqdata.description`",
                                    "maxChunkSize": "`reqdata.max_chunk_size`",
                                    "maxChunksPerFile": "`reqdata.max_chunks_per_file`",
                                    "name": "`reqdata.name`"
                                },
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {}
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/api/v1/rag/collections",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "rag"
                                },
                                {
                                    "lit": "collections"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "rag",
                                "collections"
                            ],
                            "rename": {},
                            "transform": {
                                "req": {
                                    "description": "`reqdata.description`",
                                    "maxChunkSize": "`reqdata.max_chunk_size`",
                                    "maxChunksPerFile": "`reqdata.max_chunks_per_file`",
                                    "name": "`reqdata.name`"
                                },
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/rag/collections",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "rag"
                                },
                                {
                                    "lit": "collections"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "rag",
                                "collections"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "cursor",
                                        "orig": "cursor",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "cursor",
                                    "limit"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/rag/collections",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "rag"
                                },
                                {
                                    "lit": "collections"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "rag",
                                "collections"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "cursor",
                                        "orig": "cursor",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "cursor",
                                    "limit"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/api/v1/catalog/rag/collections/{ragId}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "rag"
                                },
                                {
                                    "lit": "collections"
                                },
                                {
                                    "var": "rag_id"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "rag",
                                "collections",
                                "{rag_id}"
                            ],
                            "rename": {
                                "param": {
                                    "ragId": "rag_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "rag_id",
                                        "orig": "ragId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "rag_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/api/v1/rag/collections/{ragId}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "rag"
                                },
                                {
                                    "lit": "collections"
                                },
                                {
                                    "var": "rag_id"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "rag",
                                "collections",
                                "{rag_id}"
                            ],
                            "rename": {
                                "param": {
                                    "ragId": "rag_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "rag_id",
                                        "orig": "ragId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "rag_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "rag_collection_document_delete_success": {
            "fields": [],
            "name": "rag_collection_document_delete_success",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/api/v1/catalog/rag/collections/{ragId}/documents/{fileName}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "rag"
                                },
                                {
                                    "lit": "collections"
                                },
                                {
                                    "var": "collection_id"
                                },
                                {
                                    "lit": "documents"
                                },
                                {
                                    "var": "file_name"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "rag",
                                "collections",
                                "{collection_id}",
                                "documents",
                                "{file_name}"
                            ],
                            "rename": {
                                "param": {
                                    "fileName": "file_name",
                                    "ragId": "collection_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "collection_id",
                                        "orig": "ragId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "file_name",
                                        "orig": "fileName",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "collection_id",
                                    "file_name"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/api/v1/rag/collections/{ragId}/documents/{fileName}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "rag"
                                },
                                {
                                    "lit": "collections"
                                },
                                {
                                    "var": "collection_id"
                                },
                                {
                                    "lit": "documents"
                                },
                                {
                                    "var": "file_name"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "rag",
                                "collections",
                                "{collection_id}",
                                "documents",
                                "{file_name}"
                            ],
                            "rename": {
                                "param": {
                                    "fileName": "file_name",
                                    "ragId": "collection_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "collection_id",
                                        "orig": "ragId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "file_name",
                                        "orig": "fileName",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "collection_id",
                                    "file_name"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "rag_collection_document_list_success": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Collection metadata."
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "rag_collection_document_list_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/rag/collections/{ragId}/documents",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "rag"
                                },
                                {
                                    "lit": "collections"
                                },
                                {
                                    "var": "collection_id"
                                },
                                {
                                    "lit": "documents"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "rag",
                                "collections",
                                "{collection_id}",
                                "documents"
                            ],
                            "rename": {
                                "param": {
                                    "ragId": "collection_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "collection_id",
                                        "orig": "ragId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "cursor",
                                        "orig": "cursor",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "collection_id",
                                    "cursor",
                                    "limit"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/rag/collections/{ragId}/documents",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "rag"
                                },
                                {
                                    "lit": "collections"
                                },
                                {
                                    "var": "collection_id"
                                },
                                {
                                    "lit": "documents"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "rag",
                                "collections",
                                "{collection_id}",
                                "documents"
                            ],
                            "rename": {
                                "param": {
                                    "ragId": "collection_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "collection_id",
                                        "orig": "ragId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "cursor",
                                        "orig": "cursor",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "collection_id",
                                    "cursor",
                                    "limit"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "rag_collection_document_token_estimate_success": {
            "fields": [
                {
                    "name": "estimatedCost",
                    "title": "Estimated Cost",
                    "type": "`$NUMBER`",
                    "req": true
                },
                {
                    "name": "fileCount",
                    "title": "File Count",
                    "type": "`$INTEGER`",
                    "req": true
                },
                {
                    "name": "fileDetails",
                    "title": "File Details",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "processingTime",
                    "title": "Processing Time",
                    "type": "`$INTEGER`",
                    "req": true
                },
                {
                    "name": "raw",
                    "title": "Raw",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "totalTokens",
                    "title": "Total Tokens",
                    "type": "`$INTEGER`",
                    "req": true
                }
            ],
            "name": "rag_collection_document_token_estimate_success",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/api/v1/catalog/rag/documents/estimate",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "rag"
                                },
                                {
                                    "lit": "documents"
                                },
                                {
                                    "lit": "estimate"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "rag",
                                "documents",
                                "estimate"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {}
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/api/v1/rag/documents/estimate",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "rag"
                                },
                                {
                                    "lit": "documents"
                                },
                                {
                                    "lit": "estimate"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "rag",
                                "documents",
                                "estimate"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "rag_collection_document_upload_status_success": {
            "fields": [
                {
                    "name": "currentFile",
                    "title": "Current File",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "errors",
                    "title": "Errors",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "processedFiles",
                    "title": "Processed Files",
                    "type": "`$INTEGER`",
                    "req": true
                },
                {
                    "name": "progress",
                    "title": "Progress",
                    "type": "`$NUMBER`",
                    "req": true
                },
                {
                    "name": "raw",
                    "title": "Raw",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "results",
                    "title": "Results",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "status",
                    "title": "Status",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "totalCost",
                    "title": "Total Cost",
                    "type": "`$NUMBER`",
                    "req": true
                },
                {
                    "name": "totalFiles",
                    "title": "Total Files",
                    "type": "`$INTEGER`",
                    "req": true
                },
                {
                    "name": "totalTokens",
                    "title": "Total Tokens",
                    "type": "`$INTEGER`",
                    "req": true
                },
                {
                    "name": "uploadId",
                    "title": "Upload Id",
                    "type": "`$STRING`",
                    "req": true
                }
            ],
            "name": "rag_collection_document_upload_status_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/rag/uploads/{uploadId}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "rag"
                                },
                                {
                                    "lit": "uploads"
                                },
                                {
                                    "var": "upload_id"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "rag",
                                "uploads",
                                "{upload_id}"
                            ],
                            "rename": {
                                "param": {
                                    "uploadId": "upload_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "upload_id",
                                        "orig": "uploadId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "upload_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/rag/uploads/{uploadId}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "rag"
                                },
                                {
                                    "lit": "uploads"
                                },
                                {
                                    "var": "upload_id"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "rag",
                                "uploads",
                                "{upload_id}"
                            ],
                            "rename": {
                                "param": {
                                    "uploadId": "upload_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "upload_id",
                                        "orig": "uploadId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "upload_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "rag_collection_document_upload_success": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Result returned after starting a RAG document upload."
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Collection metadata."
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "rag_collection_document_upload_success",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/api/v1/catalog/rag/collections/{ragId}/documents",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "rag"
                                },
                                {
                                    "lit": "collections"
                                },
                                {
                                    "var": "collection_id"
                                },
                                {
                                    "lit": "documents"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "rag",
                                "collections",
                                "{collection_id}",
                                "documents"
                            ],
                            "rename": {
                                "param": {
                                    "ragId": "collection_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "collection_id",
                                        "orig": "ragId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "collection_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/api/v1/rag/collections/{ragId}/documents",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "rag"
                                },
                                {
                                    "lit": "collections"
                                },
                                {
                                    "var": "collection_id"
                                },
                                {
                                    "lit": "documents"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "rag",
                                "collections",
                                "{collection_id}",
                                "documents"
                            ],
                            "rename": {
                                "param": {
                                    "ragId": "collection_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "collection_id",
                                        "orig": "ragId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "collection_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "runtime_binding": {
            "fields": [
                {
                    "name": "assistantApiKey",
                    "title": "Assistant Api Key",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "assistantId",
                    "title": "Assistant Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "runtimeBindings",
                    "title": "Runtime Bindings",
                    "type": "`$OBJECT`",
                    "req": true
                }
            ],
            "name": "runtime_binding",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/assistants/{assistantId}/runtime-bindings",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "runtime-bindings"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "assistants",
                                "{assistant_id}",
                                "runtime-bindings"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.assistant"
                    ]
                ]
            }
        },
        "tts": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Collection metadata."
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "tts",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/providers/tts",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "providers"
                                },
                                {
                                    "lit": "tts"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "providers",
                                "tts"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tts_voice_list_success": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Collection metadata."
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "tts_voice_list_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/assistants/{assistantId}/tts/voices",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "tts"
                                },
                                {
                                    "lit": "voices"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "assistants",
                                "{assistant_id}",
                                "tts",
                                "voices"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.assistant"
                    ]
                ]
            }
        },
        "voice": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Collection metadata."
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "voice",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/assistants/{assistantId}/audio-to-audio/voices",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "audio-to-audio"
                                },
                                {
                                    "lit": "voices"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "assistants",
                                "{assistant_id}",
                                "audio-to-audio",
                                "voices"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "model_code",
                                        "orig": "modelCode",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "gpt-4o-realtime-preview"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id",
                                    "model_code"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/assistants/{assistantId}/voice-to-voice/voices",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "voice-to-voice"
                                },
                                {
                                    "lit": "voices"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "assistants",
                                "{assistant_id}",
                                "voice-to-voice",
                                "voices"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "model_code",
                                        "orig": "modelCode",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "gpt-4o-realtime-preview"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id",
                                    "model_code"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/audio-to-audio/voices",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "audio-to-audio"
                                },
                                {
                                    "lit": "voices"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "audio-to-audio",
                                "voices"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "model_code",
                                        "orig": "modelCode",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "gpt-4o-realtime-preview"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "model_code"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/voice-to-voice/voices",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "voice-to-voice"
                                },
                                {
                                    "lit": "voices"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "voice-to-voice",
                                "voices"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "model_code",
                                        "orig": "modelCode",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "gpt-4o-realtime-preview"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "model_code"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.assistant"
                    ]
                ]
            }
        },
        "voice_llm": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Collection metadata."
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "voice_llm",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/providers/voice-llm",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "providers"
                                },
                                {
                                    "lit": "voice-llm"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "providers",
                                "voice-llm"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "voice_llm_model_list_success": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Collection metadata."
                },
                {
                    "name": "requestId",
                    "title": "Request Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "name": "voice_llm_model_list_success",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/audio-to-audio/models",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "audio-to-audio"
                                },
                                {
                                    "lit": "models"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "audio-to-audio",
                                "models"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "provider",
                                        "orig": "provider",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "openai"
                                    },
                                    {
                                        "name": "source_mode",
                                        "orig": "sourceMode",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "ai4call"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "provider",
                                    "source_mode"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/voice-to-voice/models",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "voice-to-voice"
                                },
                                {
                                    "lit": "models"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "voice-to-voice",
                                "models"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "provider",
                                        "orig": "provider",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "openai"
                                    },
                                    {
                                        "name": "source_mode",
                                        "orig": "sourceMode",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "ai4call"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "provider",
                                    "source_mode"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/assistants/{assistantId}/audio-to-audio/models",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "audio-to-audio"
                                },
                                {
                                    "lit": "models"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "assistants",
                                "{assistant_id}",
                                "audio-to-audio",
                                "models"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/catalog/assistants/{assistantId}/voice-to-voice/models",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "assistants"
                                },
                                {
                                    "var": "assistant_id"
                                },
                                {
                                    "lit": "voice-to-voice"
                                },
                                {
                                    "lit": "models"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "catalog",
                                "assistants",
                                "{assistant_id}",
                                "voice-to-voice",
                                "models"
                            ],
                            "rename": {
                                "param": {
                                    "assistantId": "assistant_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "assistant_id",
                                        "orig": "assistantId",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "205"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "assistant_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.assistant"
                    ]
                ]
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map