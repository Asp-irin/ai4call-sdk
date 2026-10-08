package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Ai4call",
			"slug": "ai4call",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://client-api.ai4call.com",
			"auth": map[string]any{
				"prefix": "",
				"name": "x-client-email",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"account_allowed_ips_success": map[string]any{},
				"account_available_plugins_success": map[string]any{},
				"account_call_limits_success": map[string]any{},
				"account_number_routing_success": map[string]any{},
				"account_plugin_configuration_success": map[string]any{},
				"account_plugin_instance_success": map[string]any{},
				"account_plugin_purchase_success": map[string]any{},
				"analytics_calls_outbound_success": map[string]any{},
				"analytics_calls_success": map[string]any{},
				"analytics_post_call_success": map[string]any{},
				"analytics_pre_call_success": map[string]any{},
				"analytics_rag_search_success": map[string]any{},
				"analytics_rag_success": map[string]any{},
				"analytics_recharges_success": map[string]any{},
				"analytics_sms_success": map[string]any{},
				"analytics_tool_responses_success": map[string]any{},
				"asr": map[string]any{},
				"asr_model_list_success": map[string]any{},
				"assistant": map[string]any{},
				"assistant_advanced_settings_configuration_success": map[string]any{},
				"assistant_advanced_settings_runtime_update_success": map[string]any{},
				"assistant_asr_runtime_update_success": map[string]any{},
				"assistant_conversation_webhook_runtime_success": map[string]any{},
				"assistant_dtmf_configuration_success": map[string]any{},
				"assistant_dtmf_runtime_update_success": map[string]any{},
				"assistant_hangup_configuration_success": map[string]any{},
				"assistant_hangup_runtime_update_success": map[string]any{},
				"assistant_hangup_schema_runtime_success": map[string]any{},
				"assistant_knowledge_success": map[string]any{},
				"assistant_llm_runtime_update_success": map[string]any{},
				"assistant_number_routing_catalog_success": map[string]any{},
				"assistant_number_routing_runtime_success": map[string]any{},
				"assistant_postcall_mcp_runtime_success": map[string]any{},
				"assistant_precall_mcp_runtime_success": map[string]any{},
				"assistant_precall_validation_runtime_success": map[string]any{},
				"assistant_prompt_success": map[string]any{},
				"assistant_rag_configuration_success": map[string]any{},
				"assistant_rag_runtime_update_success": map[string]any{},
				"assistant_save_conversation_runtime_success": map[string]any{},
				"assistant_settings_configuration_success": map[string]any{},
				"assistant_settings_runtime_update_success": map[string]any{},
				"assistant_tools_runtime_update_success": map[string]any{},
				"assistant_tts_runtime_update_success": map[string]any{},
				"assistant_voice_to_voice_runtime_update_success": map[string]any{},
				"associated_runtime_tool_list_success": map[string]any{},
				"audio_to_audio": map[string]any{},
				"available_runtime_tool_list_success": map[string]any{},
				"filler_phrase_list": map[string]any{},
				"health": map[string]any{},
				"knowledge": map[string]any{},
				"llm": map[string]any{},
				"llm_model_list_success": map[string]any{},
				"outbound_call": map[string]any{},
				"outbound_call_accepted_success": map[string]any{},
				"outbound_dial_status_payload": map[string]any{},
				"portal_login_success": map[string]any{},
				"pre_call": map[string]any{},
				"provider_wallet": map[string]any{},
				"provider_wallet_associations_success": map[string]any{},
				"provider_wallet_catalog_success": map[string]any{},
				"public_rag_search_success": map[string]any{},
				"rag_collection_delete_success": map[string]any{},
				"rag_collection_document_delete_success": map[string]any{},
				"rag_collection_document_list_success": map[string]any{},
				"rag_collection_document_token_estimate_success": map[string]any{},
				"rag_collection_document_upload_status_success": map[string]any{},
				"rag_collection_document_upload_success": map[string]any{},
				"runtime_binding": map[string]any{},
				"tts": map[string]any{},
				"tts_voice_list_success": map[string]any{},
				"voice": map[string]any{},
				"voice_llm": map[string]any{},
				"voice_llm_model_list_success": map[string]any{},
			},
		},
		"entity": map[string]any{
			"account_allowed_ips_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "addIps",
						"title": "Add Ips",
						"type": "`$ARRAY`",
						"short": "Value supplied for `addIps` in the `AccountAllowedIpsUpdateRequest` request.",
					},
					map[string]any{
						"name": "allowedIps",
						"title": "Allowed Ips",
						"type": "`$ARRAY`",
						"short": "Value supplied for `allowedIps` in the `AccountAllowedIpsUpdateRequest` request.",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "deleteIps",
						"title": "Delete Ips",
						"type": "`$ARRAY`",
						"short": "Value supplied for `deleteIps` in the `AccountAllowedIpsUpdateRequest` request.",
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "account_allowed_ips_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/account/allowed-ips",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "allowed-ips",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"allowed-ips",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/account/allowed-ips",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "allowed-ips",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"allowed-ips",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"account_available_plugins_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "account_available_plugins_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/account/plugins/available",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "plugins",
									},
									map[string]any{
										"lit": "available",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"plugins",
									"available",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"account_call_limits_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "assistants",
						"title": "Assistants",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Value supplied for `assistants` in the `AccountCallLimitsUpdateRequest` request.",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "account_call_limits_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/account/call-limits",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "call-limits",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"call-limits",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/account/call-limits",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "call-limits",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"call-limits",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"account_number_routing_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "demoNumbers",
						"title": "Demo Numbers",
						"type": "`$ARRAY`",
						"short": "Value supplied for `demoNumbers` in the `AccountNumberRoutingUpdateRequest` request.",
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "purchasedNumbers",
						"title": "Purchased Numbers",
						"type": "`$ARRAY`",
						"short": "Value supplied for `purchasedNumbers` in the `AccountNumberRoutingUpdateRequest` request.",
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "userNumbers",
						"title": "User Numbers",
						"type": "`$ARRAY`",
						"short": "Value supplied for `userNumbers` in the `AccountNumberRoutingUpdateRequest` request.",
					},
				},
				"name": "account_number_routing_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/account/number-routing",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "number-routing",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"number-routing",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/account/number-routing",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "number-routing",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"number-routing",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"account_plugin_configuration_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "configuration",
						"title": "Configuration",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Configuration contract and current values for one plugin instance.",
					},
					map[string]any{
						"name": "instanceName",
						"title": "Instance Name",
						"type": "`$STRING`",
						"short": "Value supplied for `instanceName` in the `AccountPluginConfigurationUpdateRequest` request.",
					},
					map[string]any{
						"name": "instance_name",
						"title": "Instance Name",
						"type": "`$STRING`",
						"short": "Legacy alias of `instanceName`.",
						"deprecated": true,
					},
					map[string]any{
						"name": "pluginName",
						"title": "Plugin Name",
						"type": "`$STRING`",
						"short": "Value supplied for `pluginName` in the `AccountPluginConfigurationUpdateRequest` request.",
					},
					map[string]any{
						"name": "plugin_name",
						"title": "Plugin Name",
						"type": "`$STRING`",
						"short": "Legacy alias of `pluginName`.",
						"deprecated": true,
					},
				},
				"name": "account_plugin_configuration_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/account/plugins/configuration",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "plugins",
									},
									map[string]any{
										"lit": "configuration",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"plugins",
									"configuration",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "instance_name",
											"orig": "instanceName",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "instance_name",
											"orig": "instance_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "plugin_name",
											"orig": "pluginName",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "plugin_name",
											"orig": "plugin_name",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"instance_name",
										"plugin_name",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/account/plugins/instances/{instanceId}/configuration",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "plugins",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
									map[string]any{
										"lit": "configuration",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"plugins",
									"instances",
									"{instance_id}",
									"configuration",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"instanceId": "instance_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "instance_id",
											"orig": "instanceId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"instance_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/account/plugins/instances/{instanceId}/configuration",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "plugins",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
									map[string]any{
										"lit": "configuration",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"plugins",
									"instances",
									"{instance_id}",
									"configuration",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"instanceId": "instance_id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"configuration": "`reqdata.configuration`",
									},
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "instance_id",
											"orig": "instanceId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"instance_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/account/plugins/configuration",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "plugins",
									},
									map[string]any{
										"lit": "configuration",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"plugins",
									"configuration",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"account_plugin_instance_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "configuration",
						"title": "Configuration",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Current lifecycle information for one purchased plugin instance.",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "instanceName",
						"title": "Instance Name",
						"type": "`$STRING`",
						"short": "Value supplied for `instanceName` in the `AccountPluginPurchaseRequest` request.",
					},
					map[string]any{
						"name": "instance_name",
						"title": "Instance Name",
						"type": "`$STRING`",
						"short": "Legacy alias of `instanceName`.",
						"deprecated": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "newInstanceName",
						"title": "New Instance Name",
						"type": "`$STRING`",
						"short": "Value supplied for `newInstanceName` in the `AccountPluginInstanceByIdUpdateRequest` request.",
					},
					map[string]any{
						"name": "new_instance_name",
						"title": "New Instance Name",
						"type": "`$STRING`",
						"short": "Legacy alias of `newInstanceName`.",
						"deprecated": true,
					},
					map[string]any{
						"name": "pluginName",
						"title": "Plugin Name",
						"type": "`$STRING`",
						"short": "Value supplied for `pluginName` in the `AccountPluginPurchaseRequest` request.",
					},
					map[string]any{
						"name": "plugin_name",
						"title": "Plugin Name",
						"type": "`$STRING`",
						"short": "Legacy alias of `pluginName`.",
						"deprecated": true,
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"short": "Value supplied for `status` in the `AccountPluginInstanceUpdateRequest` request.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "account_plugin_instance_success",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/account/plugins/instances",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "plugins",
									},
									map[string]any{
										"lit": "instances",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"plugins",
									"instances",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/account/plugins/instances",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "plugins",
									},
									map[string]any{
										"lit": "instances",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"plugins",
									"instances",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"limit",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v1/account/plugins/instances/{instanceId}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "plugins",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"plugins",
									"instances",
									"{instance_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"instanceId": "instance_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "instance_id",
											"orig": "instanceId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"instance_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/account/plugins/instances/{instanceId}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "plugins",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"plugins",
									"instances",
									"{instance_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"instanceId": "instance_id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"newInstanceName": "`reqdata.new_instance_name`",
										"new_instance_name": "`reqdata.new_instance_name`",
									},
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "instance_id",
											"orig": "instanceId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"instance_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/account/plugins/instances",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "plugins",
									},
									map[string]any{
										"lit": "instances",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"plugins",
									"instances",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"account_plugin_purchase_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "configuration",
						"title": "Configuration",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Result of a plugin purchase, including charged prices and created instance data.",
					},
					map[string]any{
						"name": "instanceName",
						"title": "Instance Name",
						"type": "`$STRING`",
						"short": "Value supplied for `instanceName` in the `AccountPluginPurchaseRequest` request.",
					},
					map[string]any{
						"name": "instance_name",
						"title": "Instance Name",
						"type": "`$STRING`",
						"short": "Legacy alias of `instanceName`.",
						"deprecated": true,
					},
					map[string]any{
						"name": "pluginName",
						"title": "Plugin Name",
						"type": "`$STRING`",
						"short": "Value supplied for `pluginName` in the `AccountPluginPurchaseRequest` request.",
					},
					map[string]any{
						"name": "plugin_name",
						"title": "Plugin Name",
						"type": "`$STRING`",
						"short": "Legacy alias of `pluginName`.",
						"deprecated": true,
					},
				},
				"name": "account_plugin_purchase_success",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/account/plugins/purchase",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "plugins",
									},
									map[string]any{
										"lit": "purchase",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"plugins",
									"purchase",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"analytics_calls_outbound_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "analytics_calls_outbound_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/account/analytics/calls-outbound",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "calls-outbound",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"analytics",
									"calls-outbound",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_date",
											"orig": "endDate",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2026-04-24",
										},
										map[string]any{
											"name": "internal_id",
											"orig": "internalId",
											"type": "`$STRING`",
											"kind": "query",
											"example": "4f9ab147-ef47-4b54-9987-1dd30288c610",
										},
										map[string]any{
											"name": "internal_id",
											"orig": "internal_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "4f9ab147-ef47-4b54-9987-1dd30288c610",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "start_date",
											"orig": "startDate",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2026-04-01",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"end_date",
										"internal_id",
										"limit",
										"start_date",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"analytics_calls_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "analytics_calls_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/account/analytics/calls",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "calls",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"analytics",
									"calls",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_date",
											"orig": "endDate",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2026-04-24",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "start_date",
											"orig": "startDate",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2026-04-01",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"end_date",
										"limit",
										"start_date",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"analytics_post_call_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "analytics_post_call_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/account/analytics/post-call",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "post-call",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"analytics",
									"post-call",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_date",
											"orig": "endDate",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2026-04-24",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "start_date",
											"orig": "startDate",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2026-04-01",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"end_date",
										"limit",
										"start_date",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"analytics_pre_call_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "analytics_pre_call_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/account/analytics/pre-call",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "pre-call",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"analytics",
									"pre-call",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_date",
											"orig": "endDate",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2026-04-24",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "start_date",
											"orig": "startDate",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2026-04-01",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"end_date",
										"limit",
										"start_date",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"analytics_rag_search_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "analytics_rag_search_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/account/analytics/rag-searches",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "rag-searches",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"analytics",
									"rag-searches",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_date",
											"orig": "endDate",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2026-08-28",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "start_date",
											"orig": "startDate",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2026-08-01",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"end_date",
										"limit",
										"start_date",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"analytics_rag_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "analytics_rag_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/account/analytics/rag",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "rag",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"analytics",
									"rag",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_date",
											"orig": "endDate",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2026-04-24",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "start_date",
											"orig": "startDate",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2026-04-01",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"end_date",
										"limit",
										"start_date",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"analytics_recharges_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "analytics_recharges_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/account/analytics/recharges",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "recharges",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"analytics",
									"recharges",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_date",
											"orig": "endDate",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2026-04-24",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "start_date",
											"orig": "startDate",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2026-04-01",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"end_date",
										"limit",
										"start_date",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"analytics_sms_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "analytics_sms_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/account/analytics/sms",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "sms",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"analytics",
									"sms",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_date",
											"orig": "endDate",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2026-04-24",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "start_date",
											"orig": "startDate",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2026-04-01",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"end_date",
										"limit",
										"start_date",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"analytics_tool_responses_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "analytics_tool_responses_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/account/analytics/tool-responses",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "tool-responses",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"analytics",
									"tool-responses",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_date",
											"orig": "endDate",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2026-04-24",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "start_date",
											"orig": "startDate",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2026-04-01",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"end_date",
										"limit",
										"start_date",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"asr": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Collection metadata.",
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "asr",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/providers/asr",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "providers",
									},
									map[string]any{
										"lit": "asr",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"providers",
									"asr",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"asr_model_list_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Collection metadata.",
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "asr_model_list_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/assistants/{assistantId}/asr/models",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "asr",
									},
									map[string]any{
										"lit": "models",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"assistants",
									"{assistant_id}",
									"asr",
									"models",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.assistant",
						},
					},
				},
			},
			"assistant": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "assistant",
						"title": "Assistant",
						"type": "`$ANY`",
						"req": true,
						"short": "Assistant detail response, including the legacy assistant API key during the v1 compatibility period.",
					},
					map[string]any{
						"name": "audioToAudio",
						"title": "Audio To Audio",
						"type": "`$ANY`",
						"short": "Initial audio-to-audio configuration, used when applicable to the selected mode.",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Functional description of the assistant.",
					},
					map[string]any{
						"name": "firstMessage",
						"title": "First Message",
						"type": "`$OBJECT`",
						"short": "Partial update of the assistant's first-message configuration.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Collection metadata.",
					},
					map[string]any{
						"name": "metadata",
						"title": "Metadata",
						"type": "`$OBJECT`",
						"short": "Free-form metadata to store with the assistant.",
					},
					map[string]any{
						"name": "mode",
						"title": "Mode",
						"type": "`$STRING`",
						"short": "Runtime mode to use when creating the assistant.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Assistant name.",
					},
					map[string]any{
						"name": "network",
						"title": "Network",
						"type": "`$OBJECT`",
						"short": "Network settings to update on the assistant.",
					},
					map[string]any{
						"name": "numbers",
						"title": "Numbers",
						"type": "`$OBJECT`",
						"short": "Replacement values for assistant number lists when supplied.",
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "settings",
						"title": "Settings",
						"type": "`$OBJECT`",
						"short": "High-level assistant settings to update.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"short": "New lifecycle status for the assistant.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "voiceToVoice",
						"title": "Voice To Voice",
						"type": "`$OBJECT`",
						"short": "Legacy alias of `audioToAudio`.",
						"deprecated": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "assistant",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/assistants",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"audioToAudio": "`reqdata.audio_to_audio`",
										"description": "`reqdata.description`",
										"mode": "`reqdata.mode`",
										"name": "`reqdata.name`",
										"voiceToVoice": "`reqdata.voice_to_voice`",
									},
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/assistants",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"limit",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/assistants/{assistantId}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v1/assistants/{assistantId}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/assistants/{assistantId}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/assistants/{assistantId}/prompt",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "prompt",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{id}",
									"prompt",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"$action": "prompt",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"assistant_advanced_settings_configuration_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "assistant_advanced_settings_configuration_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/assistants/{assistantId}/advanced-settings",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "advanced-settings",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"assistants",
									"{id}",
									"advanced-settings",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"$action": "advanced-settings",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"assistant_advanced_settings_runtime_update_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "assistantApiKey",
						"title": "Assistant Api Key",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "assistantId",
						"title": "Assistant Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "configuration",
						"title": "Configuration",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "freqPenalty",
						"title": "Freq Penalty",
						"type": "`$NUMBER`",
						"short": "Value supplied for `freqPenalty` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "maxTokens",
						"title": "Max Tokens",
						"type": "`$INTEGER`",
						"short": "Value supplied for `maxTokens` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "presencePenalty",
						"title": "Presence Penalty",
						"type": "`$NUMBER`",
						"short": "Value supplied for `presencePenalty` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "service",
						"title": "Service",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "stopSequences",
						"title": "Stop Sequences",
						"type": "`$ARRAY`",
						"short": "Value supplied for `stopSequences` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "temperature",
						"title": "Temperature",
						"type": "`$NUMBER`",
						"short": "Value supplied for `temperature` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "topK",
						"title": "Top K",
						"type": "`$INTEGER`",
						"short": "Value supplied for `topK` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "topP",
						"title": "Top P",
						"type": "`$NUMBER`",
						"short": "Value supplied for `topP` in the `AssistantAdvancedSettingsRuntimeUpdateRequest` request.",
					},
				},
				"name": "assistant_advanced_settings_runtime_update_success",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/assistants/{assistantId}/runtime/advanced-settings",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "runtime",
									},
									map[string]any{
										"lit": "advanced-settings",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{assistant_id}",
									"runtime",
									"advanced-settings",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.assistant",
						},
					},
				},
			},
			"assistant_asr_runtime_update_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "apiKey",
						"title": "Api Key",
						"type": "`$STRING`",
						"short": "API key of the customer's ASR provider.",
						"writeOnly": true,
					},
					map[string]any{
						"name": "assistantApiKey",
						"title": "Assistant Api Key",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "assistantId",
						"title": "Assistant Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "configuration",
						"title": "Configuration",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Actual resulting ASR runtime configuration after merge and backend resolution.",
					},
					map[string]any{
						"name": "engineCode",
						"title": "Engine Code",
						"type": "`$STRING`",
						"short": "ASR engine/provider code.",
					},
					map[string]any{
						"name": "providerWalletId",
						"title": "Provider Wallet Id",
						"type": "`$INTEGER`",
						"short": "Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text.",
					},
					map[string]any{
						"name": "runtimeBinding",
						"title": "Runtime Binding",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "service",
						"title": "Service",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "sourceMode",
						"title": "Source Mode",
						"type": "`$STRING`",
						"req": true,
						"short": "Runtime sourcing mode.",
					},
				},
				"name": "assistant_asr_runtime_update_success",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/assistants/{assistantId}/runtime/asr",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "runtime",
									},
									map[string]any{
										"lit": "asr",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{assistant_id}",
									"runtime",
									"asr",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.assistant",
						},
					},
				},
			},
			"assistant_conversation_webhook_runtime_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "authName",
						"title": "Auth Name",
						"type": "`$STRING`",
						"short": "Name of the saved authentication to apply to the request",
					},
					map[string]any{
						"name": "configuration",
						"title": "Configuration",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"short": "Enable or disable sending the conversation to the webhook",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"short": "Endpoint that receives the POST at the end of the call",
					},
				},
				"name": "assistant_conversation_webhook_runtime_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/assistants/{assistantId}/runtime/hangup/conversation-webhook",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "runtime",
									},
									map[string]any{
										"lit": "hangup",
									},
									map[string]any{
										"lit": "conversation-webhook",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{assistant_id}",
									"runtime",
									"hangup",
									"conversation-webhook",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/assistants/{assistantId}/runtime/hangup/conversation-webhook",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "runtime",
									},
									map[string]any{
										"lit": "hangup",
									},
									map[string]any{
										"lit": "conversation-webhook",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{assistant_id}",
									"runtime",
									"hangup",
									"conversation-webhook",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.assistant",
						},
					},
				},
			},
			"assistant_dtmf_configuration_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "assistant_dtmf_configuration_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/assistants/{assistantId}/dtmf",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "dtmf",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"assistants",
									"{id}",
									"dtmf",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"$action": "dtmf",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"assistant_dtmf_runtime_update_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "acceptTimeout",
						"title": "Accept Timeout",
						"type": "`$INTEGER`",
						"short": "Value supplied for `acceptTimeout` in the `AssistantDtmfRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "assistantApiKey",
						"title": "Assistant Api Key",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "assistantId",
						"title": "Assistant Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "configuration",
						"title": "Configuration",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"short": "Enable or disable DTMF reception.",
					},
					map[string]any{
						"name": "maxLength",
						"title": "Max Length",
						"type": "`$INTEGER`",
						"short": "Value supplied for `maxLength` in the `AssistantDtmfRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "minLength",
						"title": "Min Length",
						"type": "`$INTEGER`",
						"short": "Value supplied for `minLength` in the `AssistantDtmfRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "playEnabled",
						"title": "Play Enabled",
						"type": "`$BOOLEAN`",
						"short": "Enable or disable DTMF sending during the call.",
					},
					map[string]any{
						"name": "service",
						"title": "Service",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "terminationChars",
						"title": "Termination Chars",
						"type": "`$STRING`",
						"short": "Value supplied for `terminationChars` in the `AssistantDtmfRuntimeUpdateRequest` request.",
					},
				},
				"name": "assistant_dtmf_runtime_update_success",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/assistants/{assistantId}/runtime/dtmf",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "runtime",
									},
									map[string]any{
										"lit": "dtmf",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{assistant_id}",
									"runtime",
									"dtmf",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.assistant",
						},
					},
				},
			},
			"assistant_hangup_configuration_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "assistant_hangup_configuration_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/assistants/{assistantId}/hangup",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "hangup",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"assistants",
									"{id}",
									"hangup",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"$action": "hangup",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"assistant_hangup_runtime_update_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "assistantApiKey",
						"title": "Assistant Api Key",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "assistantId",
						"title": "Assistant Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "availableAgents",
						"title": "Available Agents",
						"type": "`$ARRAY`",
						"short": "Value supplied for `availableAgents` in the `AssistantHangupRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "configuration",
						"title": "Configuration",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "enableHangup",
						"title": "Enable Hangup",
						"type": "`$BOOLEAN`",
						"short": "Value supplied for `enableHangup` in the `AssistantHangupRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "enableRedirect",
						"title": "Enable Redirect",
						"type": "`$BOOLEAN`",
						"short": "Value supplied for `enableRedirect` in the `AssistantHangupRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "enableTransferAgent",
						"title": "Enable Transfer Agent",
						"type": "`$BOOLEAN`",
						"short": "Value supplied for `enableTransferAgent` in the `AssistantHangupRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "service",
						"title": "Service",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "transferAgentNotificationText",
						"title": "Transfer Agent Notification Text",
						"type": "`$STRING`",
						"short": "Value supplied for `transferAgentNotificationText` in the `AssistantHangupRuntimeUpdateRequest` request.",
					},
				},
				"name": "assistant_hangup_runtime_update_success",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/assistants/{assistantId}/runtime/hangup",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "runtime",
									},
									map[string]any{
										"lit": "hangup",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{assistant_id}",
									"runtime",
									"hangup",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.assistant",
						},
					},
				},
			},
			"assistant_hangup_schema_runtime_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "configuration",
						"title": "Configuration",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "hangupUrl",
						"title": "Hangup Url",
						"type": "`$STRING`",
						"short": "Hangup webhook URL (null to remove)",
					},
					map[string]any{
						"name": "schema",
						"title": "Schema",
						"type": "`$ARRAY`",
						"short": "Defining body fields (overrides the current schema)",
					},
				},
				"name": "assistant_hangup_schema_runtime_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/assistants/{assistantId}/runtime/hangup/schema",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "runtime",
									},
									map[string]any{
										"lit": "hangup",
									},
									map[string]any{
										"lit": "schema",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{assistant_id}",
									"runtime",
									"hangup",
									"schema",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/assistants/{assistantId}/runtime/hangup/schema",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "runtime",
									},
									map[string]any{
										"lit": "hangup",
									},
									map[string]any{
										"lit": "schema",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{assistant_id}",
									"runtime",
									"hangup",
									"schema",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"hangupUrl": "`reqdata.hangup_url`",
										"schema": "`reqdata.schema`",
									},
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.assistant",
						},
					},
				},
			},
			"assistant_knowledge_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "assistant_knowledge_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/assistants/{assistantId}/knowledge",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "knowledge",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{id}",
									"knowledge",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"$action": "knowledge",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/assistants/{assistantId}/knowledge",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "knowledge",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"assistants",
									"{id}",
									"knowledge",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"$action": "knowledge",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v1/assistants/{assistantId}/knowledge",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "knowledge",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{id}",
									"knowledge",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"$action": "knowledge",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v1/catalog/assistants/{assistantId}/knowledge",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "knowledge",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"assistants",
									"{id}",
									"knowledge",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"$action": "knowledge",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"assistant_llm_runtime_update_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "apiKey",
						"title": "Api Key",
						"type": "`$STRING`",
						"short": "API key of the customer's LLM provider.",
						"writeOnly": true,
					},
					map[string]any{
						"name": "assistantApiKey",
						"title": "Assistant Api Key",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "assistantId",
						"title": "Assistant Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "baseUrl",
						"title": "Base Url",
						"type": "`$STRING`",
						"short": "Base custom URL of the LLM provider.",
					},
					map[string]any{
						"name": "configuration",
						"title": "Configuration",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Actual resulting LLM runtime configuration after merge and backend resolution.",
					},
					map[string]any{
						"name": "engineCode",
						"title": "Engine Code",
						"type": "`$STRING`",
						"short": "LLM engine/provider code.",
					},
					map[string]any{
						"name": "modelCode",
						"title": "Model Code",
						"type": "`$STRING`",
						"short": "LLM model code.",
					},
					map[string]any{
						"name": "providerWalletId",
						"title": "Provider Wallet Id",
						"type": "`$INTEGER`",
						"short": "Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text.",
					},
					map[string]any{
						"name": "runtimeBinding",
						"title": "Runtime Binding",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "service",
						"title": "Service",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "sourceMode",
						"title": "Source Mode",
						"type": "`$STRING`",
						"req": true,
						"short": "Runtime sourcing mode.",
					},
				},
				"name": "assistant_llm_runtime_update_success",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/assistants/{assistantId}/runtime/llm",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "runtime",
									},
									map[string]any{
										"lit": "llm",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{assistant_id}",
									"runtime",
									"llm",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.assistant",
						},
					},
				},
			},
			"assistant_number_routing_catalog_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "assistant_number_routing_catalog_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/assistants/{assistantId}/number-routing",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "number-routing",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"assistants",
									"{id}",
									"number-routing",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"$action": "number-routing",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"assistant_number_routing_runtime_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "configuration",
						"title": "Configuration",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "demoNumbers",
						"title": "Demo Numbers",
						"type": "`$ARRAY`",
						"short": "Demo numbers to route to this assistant",
					},
					map[string]any{
						"name": "purchasedNumbers",
						"title": "Purchased Numbers",
						"type": "`$ARRAY`",
						"short": "Purchased numbers to route to this assistant",
					},
					map[string]any{
						"name": "userNumbers",
						"title": "User Numbers",
						"type": "`$ARRAY`",
						"short": "Customer's own numbers (own PBX) to route to this assistant",
					},
				},
				"name": "assistant_number_routing_runtime_success",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/assistants/{assistantId}/runtime/number-routing",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "runtime",
									},
									map[string]any{
										"lit": "number-routing",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{assistant_id}",
									"runtime",
									"number-routing",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.assistant",
						},
					},
				},
			},
			"assistant_postcall_mcp_runtime_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "configuration",
						"title": "Configuration",
						"type": "`$OBJECT`",
						"req": true,
						"short": "General configuration of the post-call phase.",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"short": "Enable or disable the whole post-call phase without losing its configuration.",
					},
					map[string]any{
						"name": "globalPrompt",
						"title": "Global Prompt",
						"type": "`$STRING`",
						"short": "Global post-call prompt.",
					},
					map[string]any{
						"name": "modelConfig",
						"title": "Model Config",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Model configuration used by the MCP phase.",
					},
					map[string]any{
						"name": "tools",
						"title": "Tools",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "Complete list of post-call tools to set up.",
					},
				},
				"name": "assistant_postcall_mcp_runtime_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/assistants/{assistantId}/runtime/postcall/mcp-config",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "runtime",
									},
									map[string]any{
										"lit": "postcall",
									},
									map[string]any{
										"lit": "mcp-config",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{assistant_id}",
									"runtime",
									"postcall",
									"mcp-config",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/assistants/{assistantId}/runtime/postcall/mcp-config",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "runtime",
									},
									map[string]any{
										"lit": "postcall",
									},
									map[string]any{
										"lit": "mcp-config",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{assistant_id}",
									"runtime",
									"postcall",
									"mcp-config",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.assistant",
						},
					},
				},
			},
			"assistant_precall_mcp_runtime_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "configuration",
						"title": "Configuration",
						"type": "`$OBJECT`",
						"req": true,
						"short": "General configuration of the pre-call phase.",
					},
					map[string]any{
						"name": "earlyTerminationEnabled",
						"title": "Early Termination Enabled",
						"type": "`$BOOLEAN`",
						"short": "Enable/disable early termination.",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"short": "Enable or disable the whole pre-call phase without losing its configuration.",
					},
					map[string]any{
						"name": "globalPrompt",
						"title": "Global Prompt",
						"type": "`$STRING`",
						"short": "Global pre-call prompt.",
					},
					map[string]any{
						"name": "modelConfig",
						"title": "Model Config",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Model configuration used by the MCP phase.",
					},
					map[string]any{
						"name": "outputSchema",
						"title": "Output Schema",
						"type": "`$OBJECT`",
						"short": "JSON schema of the expected pre-call output, as an alternative to `outputVariables`.",
					},
					map[string]any{
						"name": "outputVariables",
						"title": "Output Variables",
						"type": "`$ARRAY`",
						"short": "Variables to extract from the pre-call result.",
					},
					map[string]any{
						"name": "terminationMessage",
						"title": "Termination Message",
						"type": "`$STRING`",
						"short": "Early termination audio message.",
					},
					map[string]any{
						"name": "tools",
						"title": "Tools",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "Complete list of pre-call tools to set (replaces the current ones).",
					},
					map[string]any{
						"name": "voiceConfig",
						"title": "Voice Config",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Voice/TTS configuration used to generate pre-call hold and termination audio.",
					},
					map[string]any{
						"name": "waitingAudioNonInterruptible",
						"title": "Waiting Audio Non Interruptible",
						"type": "`$BOOLEAN`",
						"short": "`true` plays all on-hold audio, `false` allows the customer to speak over the audio.",
					},
					map[string]any{
						"name": "waitingAudioText",
						"title": "Waiting Audio Text",
						"type": "`$STRING`",
						"short": "Audio text on hold.",
					},
				},
				"name": "assistant_precall_mcp_runtime_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/assistants/{assistantId}/runtime/precall/mcp-config",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "runtime",
									},
									map[string]any{
										"lit": "precall",
									},
									map[string]any{
										"lit": "mcp-config",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{assistant_id}",
									"runtime",
									"precall",
									"mcp-config",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/assistants/{assistantId}/runtime/precall/mcp-config",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "runtime",
									},
									map[string]any{
										"lit": "precall",
									},
									map[string]any{
										"lit": "mcp-config",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{assistant_id}",
									"runtime",
									"precall",
									"mcp-config",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.assistant",
						},
					},
				},
			},
			"assistant_precall_validation_runtime_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "authPassword",
						"title": "Auth Password",
						"type": "`$STRING`",
						"short": "Basic auth password (null to remove it)",
					},
					map[string]any{
						"name": "authToken",
						"title": "Auth Token",
						"type": "`$STRING`",
						"short": "Bearer token or API key (null to remove it)",
					},
					map[string]any{
						"name": "authType",
						"title": "Auth Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "authUsername",
						"title": "Auth Username",
						"type": "`$STRING`",
						"short": "Value supplied for `authUsername` in the `AssistantPrecallValidationRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "configuration",
						"title": "Configuration",
						"type": "`$ANY`",
						"req": true,
						"short": "null if no configuration is yet present",
					},
					map[string]any{
						"name": "headersJson",
						"title": "Headers Json",
						"type": "`$OBJECT`",
						"short": "Value supplied for `headersJson` in the `AssistantPrecallValidationRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "isActive",
						"title": "Is Active",
						"type": "`$BOOLEAN`",
						"short": "Value supplied for `isActive` in the `AssistantPrecallValidationRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "method",
						"title": "Method",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Value supplied for `name` in the `AssistantPrecallValidationRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "numberLocation",
						"title": "Number Location",
						"type": "`$STRING`",
						"short": "Where to insert the calling number in the HTTP request: - `query` — added as a query string (e.g.",
					},
					map[string]any{
						"name": "numberParamName",
						"title": "Number Param Name",
						"type": "`$STRING`",
						"short": "Value supplied for `numberParamName` in the `AssistantPrecallValidationRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "timeoutMs",
						"title": "Timeout Ms",
						"type": "`$INTEGER`",
						"short": "Value supplied for `timeoutMs` in the `AssistantPrecallValidationRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"short": "Value supplied for `url` in the `AssistantPrecallValidationRuntimeUpdateRequest` request.",
						"format": "uri",
					},
				},
				"name": "assistant_precall_validation_runtime_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/assistants/{assistantId}/runtime/precall/number-validation",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "runtime",
									},
									map[string]any{
										"lit": "precall",
									},
									map[string]any{
										"lit": "number-validation",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{assistant_id}",
									"runtime",
									"precall",
									"number-validation",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/assistants/{assistantId}/runtime/precall/number-validation",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "runtime",
									},
									map[string]any{
										"lit": "precall",
									},
									map[string]any{
										"lit": "number-validation",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{assistant_id}",
									"runtime",
									"precall",
									"number-validation",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
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
										"url": "`reqdata.url`",
									},
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.assistant",
						},
					},
				},
			},
			"assistant_prompt_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "assistant_prompt_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/assistants/{assistantId}/prompt",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "prompt",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{id}",
									"prompt",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"$action": "prompt",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"assistant_rag_configuration_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "kbPrompt",
						"title": "Kb Prompt",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "returnedChunks",
						"title": "Returned Chunks",
						"type": "`$INTEGER`",
						"req": true,
					},
				},
				"name": "assistant_rag_configuration_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/assistants/{assistantId}/rag/collections",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "rag",
									},
									map[string]any{
										"lit": "collections",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{assistant_id}",
									"rag",
									"collections",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/assistants/{assistantId}/rag/collections",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "rag",
									},
									map[string]any{
										"lit": "collections",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"assistants",
									"{assistant_id}",
									"rag",
									"collections",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.assistant",
						},
					},
				},
			},
			"assistant_rag_runtime_update_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "assistantApiKey",
						"title": "Assistant Api Key",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "assistantId",
						"title": "Assistant Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "configuration",
						"title": "Configuration",
						"type": "`$OBJECT`",
						"req": true,
						"short": "RAG configuration resulting after application merge.",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"short": "Enable or disable RAG for the assistant.",
					},
					map[string]any{
						"name": "kbPrompt",
						"title": "Kb Prompt",
						"type": "`$STRING`",
						"short": "Assistant knowledge base instructions.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Name of the RAG collection to associate.",
					},
					map[string]any{
						"name": "returnedChunks",
						"title": "Returned Chunks",
						"type": "`$INTEGER`",
						"short": "Number of relevant fragments to return from the knowledge base.",
					},
					map[string]any{
						"name": "service",
						"title": "Service",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "assistant_rag_runtime_update_success",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/assistants/{assistantId}/runtime/rag",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "runtime",
									},
									map[string]any{
										"lit": "rag",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{assistant_id}",
									"runtime",
									"rag",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.assistant",
						},
					},
				},
			},
			"assistant_save_conversation_runtime_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "configuration",
						"title": "Configuration",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "emails",
						"title": "Emails",
						"type": "`$STRING`",
						"short": "One or more recipient emails separated by commas (e.g.",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"short": "Enable or disable sending of the conversation summary via email",
					},
					map[string]any{
						"name": "smtpInstanceName",
						"title": "Smtp Instance Name",
						"type": "`$STRING`",
						"short": "Name of the SMTP plugin instance to use for sending",
					},
					map[string]any{
						"name": "smtp_instance_name",
						"title": "Smtp Instance Name",
						"type": "`$STRING`",
						"short": "Legacy alias of `smtpInstanceName`.",
						"deprecated": true,
					},
				},
				"name": "assistant_save_conversation_runtime_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/assistants/{assistantId}/runtime/hangup/save-conversation",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "runtime",
									},
									map[string]any{
										"lit": "hangup",
									},
									map[string]any{
										"lit": "save-conversation",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{assistant_id}",
									"runtime",
									"hangup",
									"save-conversation",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/assistants/{assistantId}/runtime/hangup/save-conversation",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "runtime",
									},
									map[string]any{
										"lit": "hangup",
									},
									map[string]any{
										"lit": "save-conversation",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{assistant_id}",
									"runtime",
									"hangup",
									"save-conversation",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.assistant",
						},
					},
				},
			},
			"assistant_settings_configuration_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "assistant_settings_configuration_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/assistants/{assistantId}/settings",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "settings",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"assistants",
									"{id}",
									"settings",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"$action": "settings",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"assistant_settings_runtime_update_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "asrInitialDelayMs",
						"title": "Asr Initial Delay Ms",
						"type": "`$INTEGER`",
						"short": "Value supplied for `asrInitialDelayMs` in the `AssistantSettingsRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "asrSilenceMs",
						"title": "Asr Silence Ms",
						"type": "`$INTEGER`",
						"short": "Value supplied for `asrSilenceMs` in the `AssistantSettingsRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "assistantApiKey",
						"title": "Assistant Api Key",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "assistantId",
						"title": "Assistant Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "callPermissions",
						"title": "Call Permissions",
						"type": "`$OBJECT`",
						"short": "Value supplied for `callPermissions` in the `AssistantSettingsRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "configuration",
						"title": "Configuration",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "dynamicTimeoutMs",
						"title": "Dynamic Timeout Ms",
						"type": "`$INTEGER`",
						"short": "Value supplied for `dynamicTimeoutMs` in the `AssistantSettingsRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "filler",
						"title": "Filler",
						"type": "`$OBJECT`",
						"short": "Value supplied for `filler` in the `AssistantSettingsRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "maxResponseLength",
						"title": "Max Response Length",
						"type": "`$INTEGER`",
						"short": "Value supplied for `maxResponseLength` in the `AssistantSettingsRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "reprompt",
						"title": "Reprompt",
						"type": "`$OBJECT`",
						"short": "Value supplied for `reprompt` in the `AssistantSettingsRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "service",
						"title": "Service",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "truncateInitialAudio",
						"title": "Truncate Initial Audio",
						"type": "`$BOOLEAN`",
						"short": "Value supplied for `truncateInitialAudio` in the `AssistantSettingsRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "ttsInterruptionInConversation",
						"title": "Tts Interruption In Conversation",
						"type": "`$BOOLEAN`",
						"short": "Value supplied for `ttsInterruptionInConversation` in the `AssistantSettingsRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "vad",
						"title": "Vad",
						"type": "`$BOOLEAN`",
						"short": "Value supplied for `vad` in the `AssistantSettingsRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "vadMinVoiceMs",
						"title": "Vad Min Voice Ms",
						"type": "`$INTEGER`",
						"short": "Value supplied for `vadMinVoiceMs` in the `AssistantSettingsRuntimeUpdateRequest` request.",
					},
					map[string]any{
						"name": "vadThreshold",
						"title": "Vad Threshold",
						"type": "`$NUMBER`",
						"short": "Value supplied for `vadThreshold` in the `AssistantSettingsRuntimeUpdateRequest` request.",
						"format": "float",
					},
				},
				"name": "assistant_settings_runtime_update_success",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/assistants/{assistantId}/runtime/settings",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "runtime",
									},
									map[string]any{
										"lit": "settings",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{assistant_id}",
									"runtime",
									"settings",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.assistant",
						},
					},
				},
			},
			"assistant_tools_runtime_update_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "assistantApiKey",
						"title": "Assistant Api Key",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "assistantId",
						"title": "Assistant Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "configuration",
						"title": "Configuration",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Resulting tool configuration after the update.",
					},
					map[string]any{
						"name": "service",
						"title": "Service",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "assistant_tools_runtime_update_success",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/assistants/{assistantId}/runtime/tools",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "runtime",
									},
									map[string]any{
										"lit": "tools",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{assistant_id}",
									"runtime",
									"tools",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.assistant",
						},
					},
				},
			},
			"assistant_tts_runtime_update_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "apiKey",
						"title": "Api Key",
						"type": "`$STRING`",
						"short": "API key of the customer's TTS provider.",
						"writeOnly": true,
					},
					map[string]any{
						"name": "assistantApiKey",
						"title": "Assistant Api Key",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "assistantId",
						"title": "Assistant Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "configuration",
						"title": "Configuration",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Actual resulting TTS runtime configuration after merge and backend resolution.",
					},
					map[string]any{
						"name": "engineCode",
						"title": "Engine Code",
						"type": "`$STRING`",
						"short": "TTS engine/provider code.",
					},
					map[string]any{
						"name": "providerWalletId",
						"title": "Provider Wallet Id",
						"type": "`$INTEGER`",
						"short": "Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text.",
					},
					map[string]any{
						"name": "region",
						"title": "Region",
						"type": "`$STRING`",
						"short": "Region/provider area requested by some engine customers, in particular Azure.",
					},
					map[string]any{
						"name": "runtimeBinding",
						"title": "Runtime Binding",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "service",
						"title": "Service",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "sourceMode",
						"title": "Source Mode",
						"type": "`$STRING`",
						"req": true,
						"short": "Runtime sourcing mode.",
					},
					map[string]any{
						"name": "voiceCode",
						"title": "Voice Code",
						"type": "`$STRING`",
						"short": "TTS voice code.",
					},
				},
				"name": "assistant_tts_runtime_update_success",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/assistants/{assistantId}/runtime/tts",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "runtime",
									},
									map[string]any{
										"lit": "tts",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{assistant_id}",
									"runtime",
									"tts",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.assistant",
						},
					},
				},
			},
			"assistant_voice_to_voice_runtime_update_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "apiKey",
						"title": "Api Key",
						"type": "`$STRING`",
						"short": "Customer key provider API.",
						"writeOnly": true,
					},
					map[string]any{
						"name": "assistantApiKey",
						"title": "Assistant Api Key",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "assistantId",
						"title": "Assistant Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "baseUrl",
						"title": "Base Url",
						"type": "`$STRING`",
						"short": "Base custom URL.",
					},
					map[string]any{
						"name": "configuration",
						"title": "Configuration",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "engineCode",
						"title": "Engine Code",
						"type": "`$STRING`",
						"short": "Provider/engine voice LLM.",
					},
					map[string]any{
						"name": "modelCode",
						"title": "Model Code",
						"type": "`$STRING`",
						"short": "LLM voice model code.",
					},
					map[string]any{
						"name": "prompt",
						"title": "Prompt",
						"type": "`$STRING`",
						"short": "Main prompt of the audio-to-audio runtime.",
					},
					map[string]any{
						"name": "providerWalletId",
						"title": "Provider Wallet Id",
						"type": "`$INTEGER`",
						"short": "Id of a credential saved in the customer's provider wallet, used instead of sending `apiKey` in clear text.",
					},
					map[string]any{
						"name": "service",
						"title": "Service",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "voiceCode",
						"title": "Voice Code",
						"type": "`$STRING`",
						"short": "Model item code.",
					},
				},
				"name": "assistant_voice_to_voice_runtime_update_success",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/assistants/{assistantId}/runtime/audio-to-audio",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "runtime",
									},
									map[string]any{
										"lit": "audio-to-audio",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{assistant_id}",
									"runtime",
									"audio-to-audio",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"apiKey": "`reqdata.api_key`",
										"baseUrl": "`reqdata.base_url`",
										"engineCode": "`reqdata.engine_code`",
										"modelCode": "`reqdata.model_code`",
										"prompt": "`reqdata.prompt`",
										"providerWalletId": "`reqdata.provider_wallet_id`",
										"voiceCode": "`reqdata.voice_code`",
									},
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/assistants/{assistantId}/runtime/voice-to-voice",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "runtime",
									},
									map[string]any{
										"lit": "voice-to-voice",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{assistant_id}",
									"runtime",
									"voice-to-voice",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"apiKey": "`reqdata.api_key`",
										"baseUrl": "`reqdata.base_url`",
										"engineCode": "`reqdata.engine_code`",
										"modelCode": "`reqdata.model_code`",
										"prompt": "`reqdata.prompt`",
										"providerWalletId": "`reqdata.provider_wallet_id`",
										"voiceCode": "`reqdata.voice_code`",
									},
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.assistant",
						},
					},
				},
			},
			"associated_runtime_tool_list_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "associated_runtime_tool_list_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/assistants/{assistantId}/tools",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "tools",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"assistants",
									"{assistant_id}",
									"tools",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.assistant",
						},
					},
				},
			},
			"audio_to_audio": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Collection metadata.",
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "audio_to_audio",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/providers/audio-to-audio",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "providers",
									},
									map[string]any{
										"lit": "audio-to-audio",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"providers",
									"audio-to-audio",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"available_runtime_tool_list_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "available_runtime_tool_list_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/tools",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "tools",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"tools",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"limit",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"filler_phrase_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "associations",
						"title": "Associations",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Value supplied for `id` in the `FillerPhraseListCreateRequest` request.",
					},
					map[string]any{
						"name": "list",
						"title": "List",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Value supplied for `name` in the `FillerPhraseListCreateRequest` request.",
					},
					map[string]any{
						"name": "phrases",
						"title": "Phrases",
						"type": "`$ARRAY`",
						"short": "Value supplied for `phrases` in the `FillerPhraseListCreateRequest` request.",
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "toolListIds",
						"title": "Tool List Ids",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "waitingListIds",
						"title": "Waiting List Ids",
						"type": "`$ARRAY`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "filler_phrase_list",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/catalog/filler-phrase-lists",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "filler-phrase-lists",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"filler-phrase-lists",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/filler-phrase-lists",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "filler-phrase-lists",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"filler-phrase-lists",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/filler-phrase-lists",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "filler-phrase-lists",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"filler-phrase-lists",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"limit",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/filler-phrase-lists",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "filler-phrase-lists",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"filler-phrase-lists",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"limit",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/assistants/{assistantId}/filler-phrase-lists",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "filler-phrase-lists",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{assistant_id}",
									"filler-phrase-lists",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/assistants/{assistantId}/filler-phrase-lists",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "filler-phrase-lists",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"assistants",
									"{assistant_id}",
									"filler-phrase-lists",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/filler-phrase-lists/{listId}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "filler-phrase-lists",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"filler-phrase-lists",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"listId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "listId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/filler-phrase-lists/{listId}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "filler-phrase-lists",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"filler-phrase-lists",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"listId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "listId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v1/catalog/filler-phrase-lists/{listId}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "filler-phrase-lists",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"filler-phrase-lists",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"listId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "listId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v1/filler-phrase-lists/{listId}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "filler-phrase-lists",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"filler-phrase-lists",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"listId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "listId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v1/assistants/{assistantId}/filler-phrase-lists",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "filler-phrase-lists",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"assistants",
									"{assistant_id}",
									"filler-phrase-lists",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v1/catalog/assistants/{assistantId}/filler-phrase-lists",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "filler-phrase-lists",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"assistants",
									"{assistant_id}",
									"filler-phrase-lists",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v1/catalog/filler-phrase-lists/{listId}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "filler-phrase-lists",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"filler-phrase-lists",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"listId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "listId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v1/filler-phrase-lists/{listId}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "filler-phrase-lists",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"filler-phrase-lists",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"listId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "listId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.assistant",
						},
					},
				},
			},
			"health": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "dataSource",
						"title": "Data Source",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "service",
						"title": "Service",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "health",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/health",
								"segments": []any{
									map[string]any{
										"lit": "health",
									},
								},
								"parts": []any{
									"health",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"knowledge": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "defaultPostAction",
						"title": "Default Post Action",
						"type": "`$STRING`",
						"short": "Defaults to `ask_if_needs_more` when omitted",
					},
					map[string]any{
						"name": "defaultResponse",
						"title": "Default Response",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Default answer used when a trigger has no specific response.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "knowledge",
						"title": "Knowledge",
						"type": "`$OBJECT`",
						"req": true,
						"short": "A knowledge item: a set of recognised requests with their answers, folded into the prompt of every assistant it is associated with.",
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "rules",
						"title": "Rules",
						"type": "`$STRING`",
						"short": "Optional constraints applied to the whole knowledge item.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Human-readable title of the new knowledge item.",
					},
					map[string]any{
						"name": "triggers",
						"title": "Triggers",
						"type": "`$ARRAY`",
						"short": "Initial trigger list for the knowledge item.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "knowledge",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/catalog/knowledge",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "knowledge",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"knowledge",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/knowledge",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "knowledge",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"knowledge",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/knowledge",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "knowledge",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"knowledge",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"limit",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/knowledge",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "knowledge",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"knowledge",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"limit",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/knowledge/{knowledgeId}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "knowledge",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"knowledge",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"knowledgeId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "knowledgeId",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": 7,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/knowledge/{knowledgeId}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "knowledge",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"knowledge",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"knowledgeId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "knowledgeId",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": 7,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v1/catalog/knowledge/{knowledgeId}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "knowledge",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"knowledge",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"knowledgeId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "knowledgeId",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": 7,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v1/knowledge/{knowledgeId}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "knowledge",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"knowledge",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"knowledgeId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "knowledgeId",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": 7,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/catalog/knowledge/{knowledgeId}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "knowledge",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"knowledge",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"knowledgeId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "knowledgeId",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": 7,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/knowledge/{knowledgeId}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "knowledge",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"knowledge",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"knowledgeId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "knowledgeId",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": 7,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"llm": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Collection metadata.",
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "llm",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/providers/llm",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "providers",
									},
									map[string]any{
										"lit": "llm",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"providers",
									"llm",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"llm_model_list_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Collection metadata.",
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "llm_model_list_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/assistants/{assistantId}/llm/models",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "llm",
									},
									map[string]any{
										"lit": "models",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"assistants",
									"{assistant_id}",
									"llm",
									"models",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.assistant",
						},
					},
				},
			},
			"outbound_call": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "AddPrompt",
						"title": "Add Prompt",
						"type": "`$STRING`",
						"short": "Legacy alias of `addPrompt`.",
						"deprecated": true,
					},
					map[string]any{
						"name": "addPrompt",
						"title": "Add Prompt",
						"type": "`$STRING`",
						"short": "Optional additional prompt to customize assistant behavior.",
					},
					map[string]any{
						"name": "apiKey_assistente",
						"title": "Api Key Assistente",
						"type": "`$STRING`",
						"short": "Legacy alias of `assistantApiKey`.",
						"deprecated": true,
					},
					map[string]any{
						"name": "assistantApiKey",
						"title": "Assistant Api Key",
						"type": "`$STRING`",
						"short": "API key of the AI assistant that will talk to the callee.",
					},
					map[string]any{
						"name": "callId",
						"title": "Call Id",
						"type": "`$STRING`",
						"short": "Technical call identifier, if already available when the response is returned.",
					},
					map[string]any{
						"name": "callResultUrl",
						"title": "Call Result Url",
						"type": "`$STRING`",
						"short": "Optional HTTPS URL that AI4Call calls with the outcome notification.",
						"format": "uri",
					},
					map[string]any{
						"name": "callbackConfigured",
						"title": "Callback Configured",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether the callback URL for the call outcome was configured.",
					},
					map[string]any{
						"name": "callerId",
						"title": "Caller Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Caller number displayed in E.164 format.",
					},
					map[string]any{
						"name": "dst",
						"title": "Dst",
						"type": "`$STRING`",
						"req": true,
						"short": "Recipient number in E.164 format, example +3902XXXXXXXX.",
					},
					map[string]any{
						"name": "internalId",
						"title": "Internal Id",
						"type": "`$STRING`",
						"req": true,
						"short": "UUID generated by AI4Call to correlate the outbound request, callback and final dial-status lookup.",
						"format": "uuid",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Initial status of the outbound request.",
					},
					map[string]any{
						"name": "url_esito_chiamata",
						"title": "Url Esito Chiamata",
						"type": "`$ANY`",
						"short": "Legacy alias of `callResultUrl`.",
						"deprecated": true,
					},
				},
				"name": "outbound_call",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/webhook/outbound_call",
								"segments": []any{
									map[string]any{
										"lit": "webhook",
									},
									map[string]any{
										"lit": "outbound_call",
									},
								},
								"parts": []any{
									"webhook",
									"outbound_call",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"outbound_call_accepted_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "AddPrompt",
						"title": "Add Prompt",
						"type": "`$STRING`",
						"short": "Legacy alias of `addPrompt`.",
						"deprecated": true,
					},
					map[string]any{
						"name": "addPrompt",
						"title": "Add Prompt",
						"type": "`$STRING`",
						"short": "Optional additional prompt to customize assistant behavior.",
					},
					map[string]any{
						"name": "apiKey_assistente",
						"title": "Api Key Assistente",
						"type": "`$STRING`",
						"short": "Legacy alias of `assistantApiKey`.",
						"deprecated": true,
					},
					map[string]any{
						"name": "assistantApiKey",
						"title": "Assistant Api Key",
						"type": "`$STRING`",
						"short": "API key of the AI assistant that will talk to the callee.",
					},
					map[string]any{
						"name": "callId",
						"title": "Call Id",
						"type": "`$STRING`",
						"short": "Technical call identifier, if already available when the response is returned.",
					},
					map[string]any{
						"name": "callResultUrl",
						"title": "Call Result Url",
						"type": "`$STRING`",
						"short": "Optional HTTPS URL that AI4Call calls with the outcome notification.",
						"format": "uri",
					},
					map[string]any{
						"name": "callbackConfigured",
						"title": "Callback Configured",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether the callback URL for the call outcome was configured.",
					},
					map[string]any{
						"name": "callerId",
						"title": "Caller Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Calling number displayed in the format required by the PBX, E.164 +3902XXXXXXXX or local 02XXXXXXXX.",
					},
					map[string]any{
						"name": "dst",
						"title": "Dst",
						"type": "`$STRING`",
						"req": true,
						"short": "Recipient number in the format required by the PBX, E.164 +3902XXXXXXXX or local 02XXXXXXXX.",
					},
					map[string]any{
						"name": "internalId",
						"title": "Internal Id",
						"type": "`$STRING`",
						"req": true,
						"short": "UUID generated by AI4Call to correlate the outbound request, callback and final dial-status lookup.",
						"format": "uuid",
					},
					map[string]any{
						"name": "ipPbx",
						"title": "Ip Pbx",
						"type": "`$STRING`",
						"short": "Public IP of the PBX, must be one of the authorized public IPs.",
					},
					map[string]any{
						"name": "ip_pbx",
						"title": "Ip Pbx",
						"type": "`$STRING`",
						"short": "Legacy alias of `ipPbx`.",
						"deprecated": true,
					},
					map[string]any{
						"name": "method_uac",
						"title": "Method Uac",
						"type": "`$BOOLEAN`",
						"short": "Selects the registered UAC mode.",
					},
					map[string]any{
						"name": "sipPort",
						"title": "Sip Port",
						"type": "`$STRING`",
						"short": "SIP port of the PBX, standard 5060.",
					},
					map[string]any{
						"name": "sip_port",
						"title": "Sip Port",
						"type": "`$STRING`",
						"short": "Legacy alias of `sipPort`.",
						"deprecated": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Initial status of the outbound request.",
					},
					map[string]any{
						"name": "url_esito_chiamata",
						"title": "Url Esito Chiamata",
						"type": "`$ANY`",
						"short": "Legacy alias of `callResultUrl`.",
						"deprecated": true,
					},
				},
				"name": "outbound_call_accepted_success",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/webhook/outbound_call_pbx",
								"segments": []any{
									map[string]any{
										"lit": "webhook",
									},
									map[string]any{
										"lit": "outbound_call_pbx",
									},
								},
								"parts": []any{
									"webhook",
									"outbound_call_pbx",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"outbound_dial_status_payload": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "billSec",
						"title": "Bill Sec",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Billed duration in seconds.",
					},
					map[string]any{
						"name": "dialStatus",
						"title": "Dial Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Final dial result persisted in the outbound CDR.",
					},
					map[string]any{
						"name": "trafficCost",
						"title": "Traffic Cost",
						"type": "`$STRING`",
						"req": true,
						"short": "Outbound traffic cost in EUR, expressed with six decimal places.",
					},
				},
				"name": "outbound_dial_status_payload",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/getDialstatus/{uuid}",
								"segments": []any{
									map[string]any{
										"lit": "getDialstatus",
									},
									map[string]any{
										"var": "uuid",
									},
								},
								"parts": []any{
									"getDialstatus",
									"{uuid}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "uuid",
											"orig": "uuid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "4f9ab147-ef47-4b54-9987-1dd30288c610",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"uuid",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"portal_login_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "client",
						"title": "Client",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Customer profile returned after successful portal credential verification.",
					},
					map[string]any{
						"name": "email",
						"title": "Email",
						"type": "`$STRING`",
						"req": true,
						"short": "Portal customer email.",
						"format": "email",
					},
					map[string]any{
						"name": "portalApiKey",
						"title": "Portal Api Key",
						"type": "`$STRING`",
						"req": true,
						"short": "Static portal API key associated with the customer account.",
					},
				},
				"name": "portal_login_success",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/auth/portal/login",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "portal",
									},
									map[string]any{
										"lit": "login",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"auth",
									"portal",
									"login",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"pre_call": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "configuration",
						"title": "Configuration",
						"type": "`$OBJECT`",
						"req": true,
					},
				},
				"name": "pre_call",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/assistants/{assistantId}/pre-call",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "pre-call",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"assistants",
									"{assistant_id}",
									"pre-call",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.assistant",
						},
					},
				},
			},
			"provider_wallet": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "config",
						"title": "Config",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"short": "Values of the fields declared by the catalog entry",
					},
					map[string]any{
						"name": "credential",
						"title": "Credential",
						"type": "`$OBJECT`",
						"req": true,
						"short": "A credential saved by the customer.",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "engine",
						"title": "Engine",
						"type": "`$STRING`",
						"req": true,
						"short": "Engine code selected from the provider-wallet catalog.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "isActive",
						"title": "Is Active",
						"type": "`$BOOLEAN`",
						"short": "Whether the saved credential can be used by assistant runtimes.",
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Customer-defined name for the saved credential.",
					},
					map[string]any{
						"name": "provider",
						"title": "Provider",
						"type": "`$STRING`",
						"req": true,
						"short": "Provider code selected from the provider-wallet catalog.",
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "serviceType",
						"title": "Service Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Service category selected from the provider-wallet catalog.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "provider_wallet",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/account/provider-wallet",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "provider-wallet",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"provider-wallet",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/account/provider-wallet",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "provider-wallet",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"provider-wallet",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"limit",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/account/provider-wallet/{providerWalletId}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "provider-wallet",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"provider-wallet",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"providerWalletId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "providerWalletId",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": 42,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v1/account/provider-wallet/{providerWalletId}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "provider-wallet",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"provider-wallet",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"providerWalletId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "providerWalletId",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": 42,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/api/v1/account/provider-wallet/{providerWalletId}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "provider-wallet",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"provider-wallet",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"providerWalletId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "providerWalletId",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": 42,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"provider_wallet_associations_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "provider_wallet_associations_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/account/provider-wallet/assistants/{assistantId}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "provider-wallet",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"provider-wallet",
									"assistants",
									"{assistant_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.assistant",
						},
					},
				},
			},
			"provider_wallet_catalog_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "provider_wallet_catalog_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/account/provider-wallet/catalog",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "provider-wallet",
									},
									map[string]any{
										"lit": "catalog",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"account",
									"provider-wallet",
									"catalog",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"public_rag_search_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "count",
						"title": "Count",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of chunks returned by the search, up to the service limit of 4.",
					},
					map[string]any{
						"name": "query",
						"title": "Query",
						"type": "`$STRING`",
						"req": true,
						"short": "Normalized query text used for the search.",
					},
					map[string]any{
						"name": "rag_id",
						"title": "Rag Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Public RAG identifier supplied in the request and returned unchanged on success.",
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Chunks returned by the vector search.",
					},
				},
				"name": "public_rag_search_success",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/public/v1/rag/search",
								"segments": []any{
									map[string]any{
										"lit": "public",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "rag",
									},
									map[string]any{
										"lit": "search",
									},
								},
								"parts": []any{
									"public",
									"v1",
									"rag",
									"search",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"rag_collection_delete_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "Value supplied for `description` in the `RagCollectionCreateRequest` request.",
					},
					map[string]any{
						"name": "maxChunkSize",
						"title": "Max Chunk Size",
						"type": "`$INTEGER`",
						"short": "Value supplied for `maxChunkSize` in the `RagCollectionCreateRequest` request.",
					},
					map[string]any{
						"name": "maxChunksPerFile",
						"title": "Max Chunks Per File",
						"type": "`$INTEGER`",
						"short": "Value supplied for `maxChunksPerFile` in the `RagCollectionCreateRequest` request.",
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Collection metadata.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Value supplied for `name` in the `RagCollectionCreateRequest` request.",
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "rag_collection_delete_success",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/catalog/rag/collections",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "rag",
									},
									map[string]any{
										"lit": "collections",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"rag",
									"collections",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"description": "`reqdata.description`",
										"maxChunkSize": "`reqdata.max_chunk_size`",
										"maxChunksPerFile": "`reqdata.max_chunks_per_file`",
										"name": "`reqdata.name`",
									},
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/rag/collections",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "rag",
									},
									map[string]any{
										"lit": "collections",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"rag",
									"collections",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"description": "`reqdata.description`",
										"maxChunkSize": "`reqdata.max_chunk_size`",
										"maxChunksPerFile": "`reqdata.max_chunks_per_file`",
										"name": "`reqdata.name`",
									},
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/rag/collections",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "rag",
									},
									map[string]any{
										"lit": "collections",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"rag",
									"collections",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"limit",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/rag/collections",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "rag",
									},
									map[string]any{
										"lit": "collections",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"rag",
									"collections",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"limit",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v1/catalog/rag/collections/{ragId}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "rag",
									},
									map[string]any{
										"lit": "collections",
									},
									map[string]any{
										"var": "rag_id",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"rag",
									"collections",
									"{rag_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ragId": "rag_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "rag_id",
											"orig": "ragId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"rag_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v1/rag/collections/{ragId}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "rag",
									},
									map[string]any{
										"lit": "collections",
									},
									map[string]any{
										"var": "rag_id",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"rag",
									"collections",
									"{rag_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ragId": "rag_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "rag_id",
											"orig": "ragId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"rag_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"rag_collection_document_delete_success": map[string]any{
				"fields": []any{},
				"name": "rag_collection_document_delete_success",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v1/catalog/rag/collections/{ragId}/documents/{fileName}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "rag",
									},
									map[string]any{
										"lit": "collections",
									},
									map[string]any{
										"var": "collection_id",
									},
									map[string]any{
										"lit": "documents",
									},
									map[string]any{
										"var": "file_name",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"rag",
									"collections",
									"{collection_id}",
									"documents",
									"{file_name}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"fileName": "file_name",
										"ragId": "collection_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "collection_id",
											"orig": "ragId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "file_name",
											"orig": "fileName",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"collection_id",
										"file_name",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v1/rag/collections/{ragId}/documents/{fileName}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "rag",
									},
									map[string]any{
										"lit": "collections",
									},
									map[string]any{
										"var": "collection_id",
									},
									map[string]any{
										"lit": "documents",
									},
									map[string]any{
										"var": "file_name",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"rag",
									"collections",
									"{collection_id}",
									"documents",
									"{file_name}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"fileName": "file_name",
										"ragId": "collection_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "collection_id",
											"orig": "ragId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "file_name",
											"orig": "fileName",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"collection_id",
										"file_name",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"rag_collection_document_list_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Collection metadata.",
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "rag_collection_document_list_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/rag/collections/{ragId}/documents",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "rag",
									},
									map[string]any{
										"lit": "collections",
									},
									map[string]any{
										"var": "collection_id",
									},
									map[string]any{
										"lit": "documents",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"rag",
									"collections",
									"{collection_id}",
									"documents",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ragId": "collection_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "collection_id",
											"orig": "ragId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"collection_id",
										"cursor",
										"limit",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/rag/collections/{ragId}/documents",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "rag",
									},
									map[string]any{
										"lit": "collections",
									},
									map[string]any{
										"var": "collection_id",
									},
									map[string]any{
										"lit": "documents",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"rag",
									"collections",
									"{collection_id}",
									"documents",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ragId": "collection_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "collection_id",
											"orig": "ragId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"collection_id",
										"cursor",
										"limit",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"rag_collection_document_token_estimate_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "estimatedCost",
						"title": "Estimated Cost",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "fileCount",
						"title": "File Count",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "fileDetails",
						"title": "File Details",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "processingTime",
						"title": "Processing Time",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "raw",
						"title": "Raw",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "totalTokens",
						"title": "Total Tokens",
						"type": "`$INTEGER`",
						"req": true,
					},
				},
				"name": "rag_collection_document_token_estimate_success",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/catalog/rag/documents/estimate",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "rag",
									},
									map[string]any{
										"lit": "documents",
									},
									map[string]any{
										"lit": "estimate",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"rag",
									"documents",
									"estimate",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/rag/documents/estimate",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "rag",
									},
									map[string]any{
										"lit": "documents",
									},
									map[string]any{
										"lit": "estimate",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"rag",
									"documents",
									"estimate",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"rag_collection_document_upload_status_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "currentFile",
						"title": "Current File",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "processedFiles",
						"title": "Processed Files",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "progress",
						"title": "Progress",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "raw",
						"title": "Raw",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "totalCost",
						"title": "Total Cost",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "totalFiles",
						"title": "Total Files",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "totalTokens",
						"title": "Total Tokens",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "uploadId",
						"title": "Upload Id",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "rag_collection_document_upload_status_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/rag/uploads/{uploadId}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "rag",
									},
									map[string]any{
										"lit": "uploads",
									},
									map[string]any{
										"var": "upload_id",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"rag",
									"uploads",
									"{upload_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"uploadId": "upload_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "upload_id",
											"orig": "uploadId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"upload_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/rag/uploads/{uploadId}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "rag",
									},
									map[string]any{
										"lit": "uploads",
									},
									map[string]any{
										"var": "upload_id",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"rag",
									"uploads",
									"{upload_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"uploadId": "upload_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "upload_id",
											"orig": "uploadId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"upload_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"rag_collection_document_upload_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Result returned after starting a RAG document upload.",
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Collection metadata.",
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "rag_collection_document_upload_success",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/catalog/rag/collections/{ragId}/documents",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "rag",
									},
									map[string]any{
										"lit": "collections",
									},
									map[string]any{
										"var": "collection_id",
									},
									map[string]any{
										"lit": "documents",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"rag",
									"collections",
									"{collection_id}",
									"documents",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ragId": "collection_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "collection_id",
											"orig": "ragId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"collection_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/rag/collections/{ragId}/documents",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "rag",
									},
									map[string]any{
										"lit": "collections",
									},
									map[string]any{
										"var": "collection_id",
									},
									map[string]any{
										"lit": "documents",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"rag",
									"collections",
									"{collection_id}",
									"documents",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ragId": "collection_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "collection_id",
											"orig": "ragId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"collection_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"runtime_binding": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "assistantApiKey",
						"title": "Assistant Api Key",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "assistantId",
						"title": "Assistant Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "runtimeBindings",
						"title": "Runtime Bindings",
						"type": "`$OBJECT`",
						"req": true,
					},
				},
				"name": "runtime_binding",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/assistants/{assistantId}/runtime-bindings",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "runtime-bindings",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"assistants",
									"{assistant_id}",
									"runtime-bindings",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.assistant",
						},
					},
				},
			},
			"tts": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Collection metadata.",
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "tts",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/providers/tts",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "providers",
									},
									map[string]any{
										"lit": "tts",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"providers",
									"tts",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tts_voice_list_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Collection metadata.",
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "tts_voice_list_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/assistants/{assistantId}/tts/voices",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "tts",
									},
									map[string]any{
										"lit": "voices",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"assistants",
									"{assistant_id}",
									"tts",
									"voices",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.assistant",
						},
					},
				},
			},
			"voice": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Collection metadata.",
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "voice",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/assistants/{assistantId}/audio-to-audio/voices",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "audio-to-audio",
									},
									map[string]any{
										"lit": "voices",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"assistants",
									"{assistant_id}",
									"audio-to-audio",
									"voices",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
									"query": []any{
										map[string]any{
											"name": "model_code",
											"orig": "modelCode",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "gpt-4o-realtime-preview",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
										"model_code",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/assistants/{assistantId}/voice-to-voice/voices",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "voice-to-voice",
									},
									map[string]any{
										"lit": "voices",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"assistants",
									"{assistant_id}",
									"voice-to-voice",
									"voices",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
									"query": []any{
										map[string]any{
											"name": "model_code",
											"orig": "modelCode",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "gpt-4o-realtime-preview",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
										"model_code",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/audio-to-audio/voices",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "audio-to-audio",
									},
									map[string]any{
										"lit": "voices",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"audio-to-audio",
									"voices",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "model_code",
											"orig": "modelCode",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "gpt-4o-realtime-preview",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"model_code",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/voice-to-voice/voices",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "voice-to-voice",
									},
									map[string]any{
										"lit": "voices",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"voice-to-voice",
									"voices",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "model_code",
											"orig": "modelCode",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "gpt-4o-realtime-preview",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"model_code",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.assistant",
						},
					},
				},
			},
			"voice_llm": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Collection metadata.",
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "voice_llm",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/providers/voice-llm",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "providers",
									},
									map[string]any{
										"lit": "voice-llm",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"providers",
									"voice-llm",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"voice_llm_model_list_success": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Collection metadata.",
					},
					map[string]any{
						"name": "requestId",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "voice_llm_model_list_success",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/audio-to-audio/models",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "audio-to-audio",
									},
									map[string]any{
										"lit": "models",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"audio-to-audio",
									"models",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "provider",
											"orig": "provider",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "openai",
										},
										map[string]any{
											"name": "source_mode",
											"orig": "sourceMode",
											"type": "`$STRING`",
											"kind": "query",
											"example": "ai4call",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"provider",
										"source_mode",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/voice-to-voice/models",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "voice-to-voice",
									},
									map[string]any{
										"lit": "models",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"voice-to-voice",
									"models",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "provider",
											"orig": "provider",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "openai",
										},
										map[string]any{
											"name": "source_mode",
											"orig": "sourceMode",
											"type": "`$STRING`",
											"kind": "query",
											"example": "ai4call",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"provider",
										"source_mode",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/assistants/{assistantId}/audio-to-audio/models",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "audio-to-audio",
									},
									map[string]any{
										"lit": "models",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"assistants",
									"{assistant_id}",
									"audio-to-audio",
									"models",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/catalog/assistants/{assistantId}/voice-to-voice/models",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "assistants",
									},
									map[string]any{
										"var": "assistant_id",
									},
									map[string]any{
										"lit": "voice-to-voice",
									},
									map[string]any{
										"lit": "models",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"catalog",
									"assistants",
									"{assistant_id}",
									"voice-to-voice",
									"models",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"assistantId": "assistant_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistantId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "205",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"assistant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.assistant",
						},
					},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
