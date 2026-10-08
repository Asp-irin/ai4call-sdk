import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "account_allowed_ips_success",
    "accessor": "AccountAllowedIpsSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/account/allowed-ips",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Account allowed IPs retrieved successfully.",
      "requestId": "9755db58-3e8d-4a09-b3a1-c68fd6f70c8a",
      "data": {
        "configuration": {
          "allowedIps": [
            {
              "ip": "10.10.10.5",
              "description": "Main office"
            },
            {
              "ip": "192.168.1.20",
              "description": null
            }
          ]
        }
      },
      "meta": {
        "count": 2
      }
    },
    "idField": "id"
  },
  {
    "entity": "account_allowed_ips_success",
    "accessor": "AccountAllowedIpsSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/account/allowed-ips",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "configuration": {
          "allowedIps": [
            {
              "ip": "203.0.113.10",
              "description": "example"
            }
          ]
        }
      },
      "meta": {
        "count": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "account_available_plugins_success",
    "accessor": "AccountAvailablePluginsSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/account/plugins/available",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Account purchasable plugins retrieved successfully.",
      "requestId": "99c930a8-4f1f-4c98-8b9b-6af88a3aa7d8",
      "data": {
        "configuration": {
          "plugins": [
            {
              "pluginName": "Google Sheets",
              "pluginCode": "google_sheets",
              "description": "Integration with Google Sheets",
              "category": "data_integrations",
              "pluginType": "paid",
              "purchasePrice": 9.9,
              "monthlyPrice": 4.9,
              "priceListName": "Standard",
              "activeInstanceCount": 1
            }
          ]
        }
      },
      "meta": {
        "count": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "account_call_limits_success",
    "accessor": "AccountCallLimitsSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/account/call-limits",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Account call limits retrieved successfully.",
      "data": {
        "configuration": {
          "defaultLimit": 10,
          "assistants": [
            {
              "assistantApiKey": "ai4call_sk_abc123",
              "assistantName": "Assistente Demo",
              "description": "Customer support",
              "configuredLimit": 5,
              "maxConcurrentCalls": 5
            },
            {
              "assistantApiKey": "ai4call_sk_sales456",
              "assistantName": "Assistente Vendite",
              "description": null,
              "configuredLimit": null,
              "maxConcurrentCalls": 10
            }
          ]
        }
      },
      "meta": {
        "count": 2
      },
      "requestId": "9755db58-3e8d-4a09-b3a1-c68fd6f70c8a"
    },
    "idField": "id"
  },
  {
    "entity": "account_call_limits_success",
    "accessor": "AccountCallLimitsSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/account/call-limits",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "configuration": {
          "defaultLimit": 1,
          "assistants": [
            {
              "assistantApiKey": "ai4call_sk_example",
              "assistantName": "Example",
              "configuredLimit": 1,
              "maxConcurrentCalls": 1
            }
          ]
        }
      },
      "meta": {
        "count": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "account_number_routing_success",
    "accessor": "AccountNumberRoutingSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/account/number-routing",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Account number routing retrieved successfully.",
      "data": {
        "configuration": {
          "assistants": [
            {
              "assistantApiKey": "ai4call_sk_abc123",
              "assistantName": "Assistente Demo"
            }
          ],
          "demoNumbers": [
            {
              "phoneNumber": "000012345678",
              "assistantApiKey": "ai4call_sk_abc123",
              "assistantName": "Assistente Demo",
              "assignedAt": "2026-04-24T10:00:00.000Z"
            }
          ],
          "purchasedNumbers": [
            {
              "phoneNumber": "+390201234567",
              "prefix": "02",
              "assistantApiKey": null,
              "assistantName": null,
              "acquiredAt": "2026-04-20T09:00:00.000Z"
            }
          ],
          "userNumbers": [
            {
              "phoneNumber": "+390612345678",
              "prefix": "06",
              "assistantApiKey": "ai4call_sk_abc123",
              "assistantName": "Assistente Demo",
              "createdAt": "2026-04-10T09:00:00.000Z"
            }
          ]
        }
      },
      "meta": {
        "assistantCount": 1,
        "demoCount": 1,
        "purchasedCount": 1,
        "userCount": 1,
        "totalCount": 3
      },
      "requestId": "9755db58-3e8d-4a09-b3a1-c68fd6f70c8a"
    },
    "idField": "id"
  },
  {
    "entity": "account_number_routing_success",
    "accessor": "AccountNumberRoutingSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/account/number-routing",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "configuration": {
          "assistants": [
            {
              "assistantApiKey": "ai4call_sk_example",
              "assistantName": "Example"
            }
          ],
          "demoNumbers": [
            {
              "phoneNumber": "+390212345678"
            }
          ],
          "purchasedNumbers": [
            {
              "phoneNumber": "+390212345678"
            }
          ],
          "userNumbers": [
            {
              "phoneNumber": "+390212345678"
            }
          ]
        }
      },
      "meta": {
        "assistantCount": 1,
        "demoCount": 1,
        "purchasedCount": 1,
        "userCount": 1,
        "totalCount": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "account_plugin_configuration_success",
    "accessor": "AccountPluginConfigurationSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/account/plugins/configuration",
    "args": [],
    "select": {
      "instance_name": "v1",
      "plugin_name": "v1"
    },
    "headers": [],
    "query": [
      "pluginName",
      "instanceName",
      "plugin_name",
      "instance_name"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Account plugin configuration retrieved successfully.",
      "requestId": "8a7aa74d-1ee1-4d99-9e6d-2f8fc42f56d5",
      "data": {
        "configuration": {
          "pluginName": "Email",
          "pluginCode": "email",
          "instanceName": "SMTP Produzione",
          "supportsConfiguration": true,
          "requiresInstanceName": false,
          "patchMode": "merge",
          "configurableProperties": [
            {
              "key": "smtp_host",
              "label": "SMTP host",
              "type": "string",
              "required": true,
              "secret": false,
              "description": "SMTP email instance host.",
              "enumValues": null,
              "replaceOnPatch": false
            }
          ],
          "configuration": {
            "smtp_host": "smtp.example.com",
            "smtp_port": 465,
            "smtp_user": "noreply@example.com",
            "smtp_pass": "secret",
            "smtp_security": "SSL",
            "from_name": "AI4Call",
            "test_mode_enabled": false,
            "test_attempts_remaining": 10
          },
          "availableInstanceNames": [
            "SMTP Produzione"
          ],
          "note": null
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "account_plugin_configuration_success",
    "accessor": "AccountPluginConfigurationSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/account/plugins/instances/{instanceId}/configuration",
    "args": [
      {
        "name": "instance_id",
        "wire": "instanceId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "x",
      "requestId": "x",
      "data": {
        "configuration": {
          "availableInstanceNames": [
            "x"
          ],
          "configurableProperties": [
            {
              "description": "x",
              "enumValues": [
                "x"
              ],
              "key": "x",
              "label": "x",
              "replaceOnPatch": true,
              "required": true,
              "secret": true,
              "type": "string"
            }
          ],
          "configuration": {},
          "instanceName": "x",
          "note": "x",
          "patchMode": "merge",
          "pluginCode": "x",
          "pluginName": "x",
          "requiresInstanceName": true,
          "supportsConfiguration": true
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "account_plugin_configuration_success",
    "accessor": "AccountPluginConfigurationSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/account/plugins/instances/{instanceId}/configuration",
    "args": [
      {
        "name": "instance_id",
        "wire": "instanceId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "x",
      "requestId": "x",
      "data": {
        "configuration": {
          "availableInstanceNames": [
            "x"
          ],
          "configurableProperties": [
            {
              "description": "x",
              "enumValues": [
                "x"
              ],
              "key": "x",
              "label": "x",
              "replaceOnPatch": true,
              "required": true,
              "secret": true,
              "type": "string"
            }
          ],
          "configuration": {},
          "instanceName": "x",
          "note": "x",
          "patchMode": "merge",
          "pluginCode": "x",
          "pluginName": "x",
          "requiresInstanceName": true,
          "supportsConfiguration": true
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "account_plugin_configuration_success",
    "accessor": "AccountPluginConfigurationSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/account/plugins/configuration",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "configuration": {
          "pluginName": "Example",
          "pluginCode": "example",
          "instanceName": "Example",
          "supportsConfiguration": true,
          "requiresInstanceName": true,
          "patchMode": "merge",
          "configurableProperties": [
            {
              "key": "example",
              "label": "example",
              "type": "string",
              "required": true,
              "secret": true,
              "description": "example",
              "enumValues": [
                "example"
              ],
              "replaceOnPatch": true
            }
          ],
          "configuration": {},
          "availableInstanceNames": [
            "Example"
          ],
          "note": "example"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "account_plugin_instance_success",
    "accessor": "AccountPluginInstanceSuccess",
    "op": "create",
    "method": "POST",
    "path": "/api/v1/account/plugins/instances",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 201,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "configuration": {
          "pluginName": "Example",
          "pluginCode": "example",
          "instanceName": "Example",
          "instanceIndex": 1,
          "status": "active",
          "activationDate": "2026-09-28T10:30:00.000Z",
          "purchasePriceCharged": 1,
          "monthlyPriceCharged": 1,
          "totalCharged": 1,
          "instanceId": "1"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "account_plugin_instance_success",
    "accessor": "AccountPluginInstanceSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/account/plugins/instances",
    "args": [],
    "select": {
      "cursor": "v1",
      "limit": "v1"
    },
    "headers": [],
    "query": [
      "limit",
      "cursor"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Account purchased plugin instances retrieved successfully.",
      "requestId": "1f345f1f-53a9-4d87-8a65-f45966c26ef8",
      "data": {
        "configuration": {
          "instances": [
            {
              "pluginName": "Google Sheets",
              "pluginCode": "google_sheets",
              "description": "Integration with Google Sheets",
              "category": "data_integrations",
              "instanceName": "Sheets Produzione",
              "instanceIndex": 1,
              "status": "active",
              "activationDate": "2026-04-24T10:30:00.000Z",
              "nextBillingDate": "2026-05-24T10:30:00.000Z",
              "purchasePrice": 9.9,
              "monthlyPrice": 4.9,
              "instanceId": "1"
            }
          ]
        }
      },
      "meta": {
        "count": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "account_plugin_instance_success",
    "accessor": "AccountPluginInstanceSuccess",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/v1/account/plugins/instances/{instanceId}",
    "args": [
      {
        "name": "instance_id",
        "wire": "instanceId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "configuration": {
          "pluginName": "Example",
          "pluginCode": "example",
          "instanceName": "Example",
          "previousInstanceName": "Example",
          "status": "cancelled",
          "activationDate": "2026-09-28T10:30:00.000Z",
          "nextBillingDate": null,
          "instanceId": "1"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "account_plugin_instance_success",
    "accessor": "AccountPluginInstanceSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/account/plugins/instances/{instanceId}",
    "args": [
      {
        "name": "instance_id",
        "wire": "instanceId",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "configuration": {
          "pluginName": "Example",
          "pluginCode": "example",
          "instanceName": "Example",
          "previousInstanceName": "Example",
          "status": "active",
          "activationDate": "2026-09-28T10:30:00.000Z",
          "nextBillingDate": "2026-09-28T10:30:00.000Z",
          "instanceId": "1"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "account_plugin_instance_success",
    "accessor": "AccountPluginInstanceSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/account/plugins/instances",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "configuration": {
          "pluginName": "Example",
          "pluginCode": "example",
          "instanceName": "Example",
          "previousInstanceName": "Example",
          "status": "active",
          "activationDate": "2026-09-28T10:30:00.000Z",
          "nextBillingDate": "2026-09-28T10:30:00.000Z",
          "instanceId": "1"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "account_plugin_purchase_success",
    "accessor": "AccountPluginPurchaseSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/account/plugins/purchase",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "configuration": {
          "pluginName": "Example",
          "pluginCode": "example",
          "instanceName": "Example",
          "instanceIndex": 1,
          "status": "active",
          "activationDate": "2026-09-28T10:30:00.000Z",
          "purchasePriceCharged": 1,
          "monthlyPriceCharged": 1,
          "totalCharged": 1,
          "instanceId": "1"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "analytics_calls_outbound_success",
    "accessor": "AnalyticsCallsOutboundSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/account/analytics/calls-outbound",
    "args": [],
    "select": {
      "cursor": "v1",
      "end_date": "v1",
      "internal_id": "4f9ab147-ef47-4b54-9987-1dd30288c610",
      "limit": 50,
      "start_date": "v1"
    },
    "headers": [],
    "query": [
      "internalId",
      "internal_id",
      "startDate",
      "endDate",
      "limit",
      "cursor"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Account analytics calls outbound retrieved successfully.",
      "requestId": "9755db58-3e8d-4a09-b3a1-c68fd6f70c8b",
      "data": {
        "records": [
          {
            "uuid": "9f1a3b72-5678-1234-dcba-ab9876543210",
            "callId": "CALL-20260424-001",
            "internalId": "4f9ab147-ef47-4b54-9987-1dd30288c610",
            "internal_id": "4f9ab147-ef47-4b54-9987-1dd30288c610",
            "assistantApiKey": "ai4call_sk_abc123",
            "assistantName": "Assistente Demo",
            "destination": "+390212345678",
            "dialstatus": "ANSWERED",
            "process": "outbound_campaign",
            "billsec": 65,
            "listId": "42",
            "listCall": "Campagna Aprile",
            "callResultUrl": "https://example.com/webhooks/ai4call/outbound-result",
            "url_esito_chiamata": "https://example.com/webhooks/ai4call/outbound-result",
            "trafficCostOutbound": 0.0033,
            "createdAt": "2026-04-24T11:00:00.000Z"
          }
        ]
      },
      "meta": {
        "count": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "analytics_calls_success",
    "accessor": "AnalyticsCallsSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/account/analytics/calls",
    "args": [],
    "select": {
      "cursor": "v1",
      "end_date": "v1",
      "limit": 50,
      "start_date": "v1"
    },
    "headers": [],
    "query": [
      "startDate",
      "endDate",
      "limit",
      "cursor"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Account analytics calls retrieved successfully.",
      "requestId": "9755db58-3e8d-4a09-b3a1-c68fd6f70c8a",
      "data": {
        "records": [
          {
            "cdrId": 1042,
            "assistantApiKey": "ai4call_sk_abc123",
            "assistantName": "Assistente Demo",
            "callerNumber": "+393331234567",
            "uuid": "7e4c2a91-1234-5678-abcd-ef0123456789",
            "billsec": 92,
            "dialstatus": "ANSWERED",
            "inputTokens": 320,
            "outputTokens": 180,
            "ragTokens": 0,
            "llmInputCost": 0.0003,
            "llmOutputCost": 0.0002,
            "ttsCost": 0.0015,
            "asrCost": 0.001,
            "ragCost": 0,
            "trafficCost": 0.0046,
            "trafficCostOutbound": 0,
            "totalCost": 0.0076,
            "createdAt": "2026-04-24T10:15:00.000Z"
          }
        ]
      },
      "meta": {
        "count": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "analytics_post_call_success",
    "accessor": "AnalyticsPostCallSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/account/analytics/post-call",
    "args": [],
    "select": {
      "cursor": "v1",
      "end_date": "v1",
      "limit": 50,
      "start_date": "v1"
    },
    "headers": [],
    "query": [
      "startDate",
      "endDate",
      "limit",
      "cursor"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Account analytics post-call retrieved successfully.",
      "requestId": "9755db58-3e8d-4a09-b3a1-c68fd6f70c8c",
      "data": {
        "records": [
          {
            "cdrId": "501",
            "assistantApiKey": "ai4call_sk_abc123",
            "assistantName": "Assistente Demo",
            "callerId": "+393331234567",
            "uuid": null,
            "inputTokens": 120,
            "outputTokens": 60,
            "inputCost": 0.00012,
            "outputCost": 0.00006,
            "totalCost": 0.00018,
            "createdAt": "2026-04-24T10:14:55.000Z"
          }
        ]
      },
      "meta": {
        "count": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "analytics_pre_call_success",
    "accessor": "AnalyticsPreCallSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/account/analytics/pre-call",
    "args": [],
    "select": {
      "cursor": "v1",
      "end_date": "v1",
      "limit": 50,
      "start_date": "v1"
    },
    "headers": [],
    "query": [
      "startDate",
      "endDate",
      "limit",
      "cursor"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Account analytics pre-call retrieved successfully.",
      "requestId": "9755db58-3e8d-4a09-b3a1-c68fd6f70c8c",
      "data": {
        "records": [
          {
            "cdrId": "501",
            "assistantApiKey": "ai4call_sk_abc123",
            "assistantName": "Assistente Demo",
            "callerId": "+393331234567",
            "uuid": null,
            "inputTokens": 120,
            "outputTokens": 60,
            "inputCost": 0.00012,
            "outputCost": 0.00006,
            "totalCost": 0.00018,
            "createdAt": "2026-04-24T10:14:55.000Z"
          }
        ]
      },
      "meta": {
        "count": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "analytics_rag_search_success",
    "accessor": "AnalyticsRagSearchSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/account/analytics/rag-searches",
    "args": [],
    "select": {
      "cursor": "v1",
      "end_date": "v1",
      "limit": 50,
      "start_date": "v1"
    },
    "headers": [],
    "query": [
      "startDate",
      "endDate",
      "limit",
      "cursor"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Account analytics RAG searches retrieved successfully.",
      "requestId": "9755db58-3e8d-4a09-b3a1-c68fd6f70c8e",
      "data": {
        "records": [
          {
            "id": "6f1c0a1e-6f0e-4a55-9a35-2f6b6d3c1f77",
            "ragId": 12,
            "ragName": "Knowledge Base Prodotti",
            "collectionName": "kb_prodotti_v2",
            "queryTokens": 128,
            "resultCount": 5,
            "ragCost": 0.0000047,
            "totalCost": 0.0000047,
            "totalCostNoVat": 0.0000038,
            "pricePerTokenNoVat": 3e-8,
            "pricePerTokenWithVat": 3.66e-8,
            "source": "call",
            "createdAt": "2026-08-27T10:12:44.000Z"
          }
        ]
      },
      "meta": {
        "count": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "analytics_rag_success",
    "accessor": "AnalyticsRagSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/account/analytics/rag",
    "args": [],
    "select": {
      "cursor": "v1",
      "end_date": "v1",
      "limit": 50,
      "start_date": "v1"
    },
    "headers": [],
    "query": [
      "startDate",
      "endDate",
      "limit",
      "cursor"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Account analytics RAG retrieved successfully.",
      "requestId": "9755db58-3e8d-4a09-b3a1-c68fd6f70c8e",
      "data": {
        "records": [
          {
            "id": 88,
            "assistantApiKey": "ai4call_sk_abc123",
            "ragId": 12,
            "ragName": "Knowledge Base Prodotti",
            "ragDescription": "Documentazione prodotti aziendali",
            "collectionName": "kb_prodotti_v2",
            "collectionIsActive": true,
            "embeddingProvider": "openai",
            "embeddingModel": "text-embedding-3-small",
            "vectorStoreEngine": "chroma",
            "fileCount": 14,
            "totalToken": 48200,
            "totalCost": "0.0048",
            "collectionCreatedAt": "2026-03-10T08:00:00.000Z",
            "collectionUpdatedAt": "2026-04-20T14:30:00.000Z",
            "createdAt": "2026-04-24T08:00:00.000Z"
          }
        ]
      },
      "meta": {
        "count": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "analytics_recharges_success",
    "accessor": "AnalyticsRechargesSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/account/analytics/recharges",
    "args": [],
    "select": {
      "cursor": "v1",
      "end_date": "v1",
      "limit": 50,
      "start_date": "v1"
    },
    "headers": [],
    "query": [
      "startDate",
      "endDate",
      "limit",
      "cursor"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Account analytics recharges retrieved successfully.",
      "requestId": "9755db58-3e8d-4a09-b3a1-c68fd6f70c8d",
      "data": {
        "records": [
          {
            "id": 301,
            "amount": "50.00",
            "status": "completed",
            "currency": "978",
            "orderId": "ORD-20260424-001",
            "createdAt": "2026-04-24T09:00:00.000Z",
            "updatedAt": "2026-04-24T09:00:05.000Z"
          }
        ]
      },
      "meta": {
        "count": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "analytics_sms_success",
    "accessor": "AnalyticsSmsSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/account/analytics/sms",
    "args": [],
    "select": {
      "cursor": "v1",
      "end_date": "v1",
      "limit": 50,
      "start_date": "v1"
    },
    "headers": [],
    "query": [
      "startDate",
      "endDate",
      "limit",
      "cursor"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Account analytics SMS retrieved successfully.",
      "requestId": "9755db58-3e8d-4a09-b3a1-c68fd6f70c8f",
      "data": {
        "records": [
          {
            "assistantApiKey": "ai4call_sk_abc123",
            "alias": "Assistente Demo",
            "destinationNumber": "+393331234567",
            "text": "Grazie per averci contattato. Le invieremo una conferma via email.",
            "usageSms": 1,
            "createdAt": "2026-04-24T10:20:00.000Z"
          }
        ]
      },
      "meta": {
        "count": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "analytics_tool_responses_success",
    "accessor": "AnalyticsToolResponsesSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/account/analytics/tool-responses",
    "args": [],
    "select": {
      "cursor": "v1",
      "end_date": "v1",
      "limit": 50,
      "start_date": "v1"
    },
    "headers": [],
    "query": [
      "startDate",
      "endDate",
      "limit",
      "cursor"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Account analytics tool responses retrieved successfully.",
      "requestId": "9755db58-3e8d-4a09-b3a1-c68fd6f70c90",
      "data": {
        "records": [
          {
            "id": 4501,
            "callUuid": "7e4c2a91-1234-5678-abcd-ef0123456789",
            "toolName": "get_calendar_availability",
            "toolCallId": "call_abc123xyz",
            "toolResponse": {
              "available": true,
              "slots": [
                {
                  "date": "2026-04-25",
                  "time": "10:00"
                },
                {
                  "date": "2026-04-25",
                  "time": "15:00"
                }
              ]
            },
            "createdAt": "2026-04-24T10:15:30.000Z"
          }
        ]
      },
      "meta": {
        "count": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "asr",
    "accessor": "Asr",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/catalog/providers/asr",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "providers": [
          {
            "providerId": "openai",
            "providerLabel": "openai",
            "serviceType": "tts",
            "availableModes": [
              "ai4call"
            ]
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "asr_model_list_success",
    "accessor": "AsrModelListSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/catalog/assistants/{assistantId}/asr/models",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Assistant ASR models retrieved successfully.",
      "requestId": "cbdebd8b-8904-4463-bbef-3c5751dc2087",
      "meta": {
        "count": 1
      },
      "data": {
        "models": [
          {
            "modelId": "1",
            "modelCode": "asr_azure_multi",
            "modelLabel": "asr_azure_multi",
            "providerId": "azure",
            "providerLabel": "AZURE",
            "supportedLanguages": [
              "it-IT"
            ],
            "price": 0.005,
            "sourceMode": "ai4call",
            "catalogOrigin": "ai4call_pricing"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant",
    "accessor": "Assistant",
    "op": "create",
    "method": "POST",
    "path": "/api/v1/assistants",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 201,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "assistant": {
          "assistantId": "example-id",
          "id": "example-id",
          "apiKey": "sk_example",
          "clientEmail": "developer@example.com",
          "mode": "text",
          "name": "Example",
          "status": "draft",
          "numbers": {
            "demo": [
              "example"
            ],
            "purchased": [
              "example"
            ]
          },
          "network": {
            "allowedIps": [
              "203.0.113.10"
            ]
          },
          "settings": {
            "model": "example-model",
            "voice": "example-voice",
            "language": "it-IT",
            "timezone": "Europe/Rome",
            "recordingEnabled": true
          },
          "firstMessage": {
            "text": "",
            "callerSpeaksFirst": false,
            "uninterruptible": false
          },
          "metadata": {},
          "createdAt": "2026-09-28T10:30:00.000Z",
          "updatedAt": "2026-09-28T10:30:00.000Z"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant",
    "accessor": "Assistant",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/assistants",
    "args": [],
    "select": {
      "cursor": "v1",
      "limit": "v1"
    },
    "headers": [],
    "query": [
      "limit",
      "cursor"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "assistants": [
          {
            "assistantId": "example-id",
            "id": "example-id",
            "clientEmail": "developer@example.com",
            "mode": "text",
            "name": "Example",
            "status": "draft",
            "numbers": {
              "demo": [
                "example"
              ],
              "purchased": [
                "example"
              ]
            },
            "network": {
              "allowedIps": [
                "203.0.113.10"
              ]
            },
            "settings": {
              "model": "example-model",
              "voice": "example-voice",
              "language": "it-IT",
              "timezone": "Europe/Rome",
              "recordingEnabled": true
            },
            "firstMessage": {
              "text": "",
              "callerSpeaksFirst": false,
              "uninterruptible": false
            },
            "metadata": {},
            "createdAt": "2026-09-28T10:30:00.000Z",
            "updatedAt": "2026-09-28T10:30:00.000Z"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant",
    "accessor": "Assistant",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/assistants/{assistantId}",
    "args": [
      {
        "name": "id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "assistant": {
          "assistantId": "example-id",
          "id": "example-id",
          "apiKey": "sk_example",
          "clientEmail": "developer@example.com",
          "mode": "text",
          "name": "Example",
          "status": "draft",
          "numbers": {
            "demo": [
              "example"
            ],
            "purchased": [
              "example"
            ]
          },
          "network": {
            "allowedIps": [
              "203.0.113.10"
            ]
          },
          "settings": {
            "model": "example-model",
            "voice": "example-voice",
            "language": "it-IT",
            "timezone": "Europe/Rome",
            "recordingEnabled": true
          },
          "firstMessage": {
            "text": "",
            "callerSpeaksFirst": false,
            "uninterruptible": false
          },
          "metadata": {},
          "createdAt": "2026-09-28T10:30:00.000Z",
          "updatedAt": "2026-09-28T10:30:00.000Z"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant",
    "accessor": "Assistant",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/v1/assistants/{assistantId}",
    "args": [
      {
        "name": "id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Assistant deleted successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "deleted": true
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant",
    "accessor": "Assistant",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/assistants/{assistantId}",
    "args": [
      {
        "name": "id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "assistant": {
          "assistantId": "example-id",
          "id": "example-id",
          "apiKey": "sk_example",
          "clientEmail": "developer@example.com",
          "mode": "text",
          "name": "Example",
          "status": "draft",
          "numbers": {
            "demo": [
              "example"
            ],
            "purchased": [
              "example"
            ]
          },
          "network": {
            "allowedIps": [
              "203.0.113.10"
            ]
          },
          "settings": {
            "model": "example-model",
            "voice": "example-voice",
            "language": "it-IT",
            "timezone": "Europe/Rome",
            "recordingEnabled": true
          },
          "firstMessage": {
            "text": "",
            "callerSpeaksFirst": false,
            "uninterruptible": false
          },
          "metadata": {},
          "createdAt": "2026-09-28T10:30:00.000Z",
          "updatedAt": "2026-09-28T10:30:00.000Z"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant",
    "accessor": "Assistant",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/assistants/{assistantId}/prompt",
    "action": "prompt",
    "args": [
      {
        "name": "id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "assistantApiKey": "ai4call_sk_6asvqzto",
        "assistantId": "205",
        "configuration": {
          "prompt": {
            "text": "Sei un assistente commerciale cordiale e conciso. Rispondi in italiano."
          },
          "firstMessage": {
            "text": "Ciao, sono l'assistente virtuale di AI4Call. Come posso aiutarti?",
            "callerSpeaksFirst": false,
            "uninterruptible": false
          }
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant_advanced_settings_configuration_success",
    "accessor": "AssistantAdvancedSettingsConfigurationSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/catalog/assistants/{assistantId}/advanced-settings",
    "action": "advanced-settings",
    "args": [
      {
        "name": "id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Assistant advanced settings configuration retrieved successfully.",
      "requestId": "d1f31a39-a20c-491b-8551-0b2f6a47bbf8",
      "data": {
        "configuration": {
          "temperature": 0.7,
          "maxTokens": 800,
          "topP": 0.9,
          "topK": 40,
          "freqPenalty": 0,
          "presencePenalty": 0,
          "stopSequences": [
            "END"
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant_advanced_settings_runtime_update_success",
    "accessor": "AssistantAdvancedSettingsRuntimeUpdateSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/assistants/{assistantId}/runtime/advanced-settings",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "assistantApiKey": "ai4call_sk_example",
        "assistantId": "example-id",
        "service": "advanced-settings",
        "configuration": {
          "temperature": 1,
          "maxTokens": 1,
          "topP": 1,
          "topK": 1,
          "freqPenalty": 1,
          "presencePenalty": 1,
          "stopSequences": [
            "example"
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant_asr_runtime_update_success",
    "accessor": "AssistantAsrRuntimeUpdateSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/assistants/{assistantId}/runtime/asr",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "assistantApiKey": "ai4call_sk_example",
        "assistantId": "example-id",
        "service": "asr",
        "configuration": {
          "sourceMode": "ai4call",
          "hasApiKey": true
        },
        "runtimeBinding": {
          "configured": true,
          "sourceMode": "ai4call"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant_conversation_webhook_runtime_success",
    "accessor": "AssistantConversationWebhookRuntimeSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/assistants/{assistantId}/runtime/hangup/conversation-webhook",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Assistant conversation webhook configuration retrieved successfully.",
      "requestId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "data": {
        "configuration": {
          "enabled": true,
          "url": "https://example.com/hooks/ai4call",
          "authName": "crm-bearer",
          "payloadFields": [
            "caller",
            "called",
            "callid"
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant_conversation_webhook_runtime_success",
    "accessor": "AssistantConversationWebhookRuntimeSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/assistants/{assistantId}/runtime/hangup/conversation-webhook",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "configuration": {
          "enabled": true,
          "url": "https://example.com",
          "authName": "Example",
          "payloadFields": [
            "caller",
            "called",
            "callid"
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant_dtmf_configuration_success",
    "accessor": "AssistantDtmfConfigurationSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/catalog/assistants/{assistantId}/dtmf",
    "action": "dtmf",
    "args": [
      {
        "name": "id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Assistant DTMF configuration retrieved successfully.",
      "requestId": "4d5581dd-efce-440d-92a6-23444e9cd84f",
      "data": {
        "configuration": {
          "enabled": true,
          "playEnabled": false,
          "acceptTimeout": 3000,
          "minLength": 1,
          "maxLength": 6,
          "terminationChars": "#"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant_dtmf_runtime_update_success",
    "accessor": "AssistantDtmfRuntimeUpdateSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/assistants/{assistantId}/runtime/dtmf",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "assistantApiKey": "ai4call_sk_example",
        "assistantId": "example-id",
        "service": "dtmf",
        "configuration": {
          "enabled": true,
          "playEnabled": true,
          "acceptTimeout": 1,
          "minLength": 1,
          "maxLength": 1,
          "terminationChars": "example"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant_hangup_configuration_success",
    "accessor": "AssistantHangupConfigurationSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/catalog/assistants/{assistantId}/hangup",
    "action": "hangup",
    "args": [
      {
        "name": "id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Assistant hangup configuration retrieved successfully.",
      "requestId": "55e4ea0f-21d2-4d28-b6e1-8f47b18b7d44",
      "data": {
        "configuration": {
          "enableHangup": true,
          "enableRedirect": false,
          "enableTransferAgent": true,
          "transferAgentNotificationText": "Avvisa il cliente prima del passaggio.",
          "availableAgents": [
            {
              "assistantApiKey": "ai4call_sk_transfer_1",
              "assistantName": "Assistente Amministrativo",
              "description": "Transfer when customer requests administrative support."
            }
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant_hangup_runtime_update_success",
    "accessor": "AssistantHangupRuntimeUpdateSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/assistants/{assistantId}/runtime/hangup",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "assistantApiKey": "ai4call_sk_example",
        "assistantId": "example-id",
        "service": "hangup",
        "configuration": {
          "enableHangup": true,
          "enableRedirect": true,
          "enableTransferAgent": true,
          "transferAgentNotificationText": "example",
          "availableAgents": [
            {
              "assistantApiKey": "ai4call_sk_example",
              "description": "example"
            }
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant_hangup_schema_runtime_success",
    "accessor": "AssistantHangupSchemaRuntimeSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/assistants/{assistantId}/runtime/hangup/schema",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Assistant hangup schema configuration retrieved successfully.",
      "requestId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "data": {
        "configuration": {
          "hangupUrl": "https://webhook.example.com/hangup",
          "schema": [
            {
              "name": "motivo",
              "type": "string",
              "description": "Reason for hangup",
              "required": true
            },
            {
              "name": "esito",
              "type": "enum",
              "description": "Result of the call",
              "required": true,
              "enumValues": [
                "positivo",
                "negativo",
                "richiamata"
              ]
            },
            {
              "name": "dati_cliente",
              "type": "object",
              "description": "Data collected about the customer",
              "children": [
                {
                  "name": "nome",
                  "type": "string",
                  "description": "Customer name"
                },
                {
                  "name": "email",
                  "type": "string",
                  "description": "Customer email"
                }
              ]
            }
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant_hangup_schema_runtime_success",
    "accessor": "AssistantHangupSchemaRuntimeSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/assistants/{assistantId}/runtime/hangup/schema",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "data": {
        "configuration": {
          "hangupUrl": "https://example.com",
          "schema": [
            {
              "name": "Example",
              "type": "string"
            }
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant_llm_runtime_update_success",
    "accessor": "AssistantLlmRuntimeUpdateSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/assistants/{assistantId}/runtime/llm",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "assistantApiKey": "ai4call_sk_example",
        "assistantId": "example-id",
        "service": "llm",
        "configuration": {
          "sourceMode": "ai4call",
          "hasApiKey": true
        },
        "runtimeBinding": {
          "configured": true,
          "sourceMode": "ai4call"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant_number_routing_catalog_success",
    "accessor": "AssistantNumberRoutingCatalogSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/catalog/assistants/{assistantId}/number-routing",
    "action": "number-routing",
    "args": [
      {
        "name": "id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Assistant number routing configuration retrieved successfully.",
      "requestId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "data": {
        "configuration": {
          "demoNumbers": [
            {
              "phoneNumber": "+390211223344",
              "assistantApiKey": "ak_live_123",
              "assistantName": "Reception",
              "assignedToCurrentAssistant": true,
              "assignedAt": "2026-08-01T09:15:00.000Z"
            }
          ],
          "purchasedNumbers": [],
          "userNumbers": []
        }
      },
      "meta": {
        "demoCount": 1,
        "purchasedCount": 0,
        "userCount": 0,
        "totalCount": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant_number_routing_runtime_success",
    "accessor": "AssistantNumberRoutingRuntimeSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/assistants/{assistantId}/runtime/number-routing",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "configuration": {
          "demoNumbers": [
            "example"
          ],
          "purchasedNumbers": [
            "example"
          ],
          "userNumbers": [
            "example"
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant_postcall_mcp_runtime_success",
    "accessor": "AssistantPostcallMcpRuntimeSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/assistants/{assistantId}/runtime/postcall/mcp-config",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Assistant postcall MCP configuration retrieved successfully.",
      "requestId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "data": {
        "configuration": {
          "enabled": true,
          "globalPrompt": "Usa i risultati dei tool per aggiornare il CRM.",
          "modelConfig": {
            "mode": "assistant"
          }
        },
        "tools": [
          {
            "toolName": "create_ticket",
            "server": "crm_plugin",
            "subscriptionName": "CRM Principale",
            "order": 0
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant_postcall_mcp_runtime_success",
    "accessor": "AssistantPostcallMcpRuntimeSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/assistants/{assistantId}/runtime/postcall/mcp-config",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "configuration": {
          "enabled": true,
          "globalPrompt": "example",
          "modelConfig": {
            "mode": "default"
          }
        },
        "tools": [
          {
            "toolName": "Example",
            "server": "example",
            "subscriptionName": "Example",
            "order": 1
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant_precall_mcp_runtime_success",
    "accessor": "AssistantPrecallMcpRuntimeSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/assistants/{assistantId}/runtime/precall/mcp-config",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Assistant precall MCP configuration retrieved successfully.",
      "requestId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "data": {
        "configuration": {
          "enabled": true,
          "globalPrompt": "Usa le informazioni recuperate per personalizzare la risposta.",
          "waitingAudioText": "Sto verificando la tua identità, un momento...",
          "earlyTerminationEnabled": true,
          "terminationMessage": "Non sei autorizzato a procedere. Arrivederci.",
          "waitingAudioNonInterruptible": true,
          "modelConfig": {
            "mode": "assistant"
          },
          "voiceConfig": {
            "mode": "assistant"
          },
          "outputVariables": [
            {
              "name": "customer_tier",
              "type": "string",
              "required": true
            }
          ],
          "outputSchema": null
        },
        "tools": [
          {
            "toolName": "verifica_cliente",
            "server": "custom",
            "subscriptionName": null,
            "order": 1
          },
          {
            "toolName": "get_customer_info",
            "server": "crm_plugin",
            "subscriptionName": "CRM Principale",
            "order": 2
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant_precall_mcp_runtime_success",
    "accessor": "AssistantPrecallMcpRuntimeSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/assistants/{assistantId}/runtime/precall/mcp-config",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "configuration": {
          "enabled": true,
          "globalPrompt": "example",
          "waitingAudioText": "example",
          "earlyTerminationEnabled": true,
          "terminationMessage": "Operation completed successfully.",
          "waitingAudioNonInterruptible": true,
          "modelConfig": {
            "mode": "default"
          },
          "voiceConfig": {
            "mode": "default"
          },
          "outputVariables": [
            {
              "name": "customer_tier",
              "type": "string"
            }
          ],
          "outputSchema": {}
        },
        "tools": [
          {
            "toolName": "Example",
            "server": "example",
            "subscriptionName": "Example",
            "order": 1
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant_precall_validation_runtime_success",
    "accessor": "AssistantPrecallValidationRuntimeSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/assistants/{assistantId}/runtime/precall/number-validation",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Assistant precall validation configuration retrieved successfully.",
      "requestId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "data": {
        "configuration": {
          "name": "Verifica CRM",
          "method": "POST",
          "url": "https://api.example.com/validate-caller",
          "numberLocation": "body",
          "numberParamName": "caller_id",
          "headersJson": {
            "X-Api-Version": "2"
          },
          "authType": "bearer",
          "hasAuthToken": true,
          "hasAuthPassword": false,
          "authUsername": null,
          "timeoutMs": 5000,
          "isActive": true
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant_precall_validation_runtime_success",
    "accessor": "AssistantPrecallValidationRuntimeSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/assistants/{assistantId}/runtime/precall/number-validation",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "data": {
        "configuration": {
          "name": "Example",
          "method": "GET",
          "url": "https://example.com",
          "numberLocation": "body",
          "numberParamName": "Example",
          "headersJson": {},
          "authType": "none",
          "hasAuthToken": true,
          "hasAuthPassword": true,
          "authUsername": "Example",
          "timeoutMs": 500,
          "isActive": true
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant_prompt_success",
    "accessor": "AssistantPromptSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/assistants/{assistantId}/prompt",
    "action": "prompt",
    "args": [
      {
        "name": "id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "assistantApiKey": "ai4call_sk_6asvqzto",
        "assistantId": "205",
        "configuration": {
          "prompt": {
            "text": "Sei un assistente commerciale cordiale e conciso. Rispondi in italiano."
          },
          "firstMessage": {
            "text": "Ciao, sono l'assistente virtuale di AI4Call. Come posso aiutarti?",
            "callerSpeaksFirst": false,
            "uninterruptible": false
          }
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant_rag_runtime_update_success",
    "accessor": "AssistantRagRuntimeUpdateSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/assistants/{assistantId}/runtime/rag",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "assistantApiKey": "ai4call_sk_example",
        "assistantId": "example-id",
        "service": "rag",
        "configuration": {
          "enabled": true,
          "returnedChunks": 1
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant_save_conversation_runtime_success",
    "accessor": "AssistantSaveConversationRuntimeSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/assistants/{assistantId}/runtime/hangup/save-conversation",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Assistant save-conversation configuration retrieved successfully.",
      "requestId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "data": {
        "configuration": {
          "enabled": true,
          "emails": "admin@example.com, report@example.com",
          "smtpInstanceName": "smtp-principale"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant_save_conversation_runtime_success",
    "accessor": "AssistantSaveConversationRuntimeSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/assistants/{assistantId}/runtime/hangup/save-conversation",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "configuration": {
          "enabled": true,
          "emails": "developer@example.com",
          "smtpInstanceName": "Example"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant_settings_configuration_success",
    "accessor": "AssistantSettingsConfigurationSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/catalog/assistants/{assistantId}/settings",
    "action": "settings",
    "args": [
      {
        "name": "id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Assistant settings configuration retrieved successfully.",
      "requestId": "c3d93c2c-8f89-4a2e-b9ad-67d2746c9d16",
      "data": {
        "configuration": {
          "asrSilenceMs": 500,
          "asrInitialDelayMs": 0,
          "truncateInitialAudio": false,
          "dynamicTimeoutMs": 10000,
          "vad": false,
          "vadThreshold": 0.5,
          "vadMinVoiceMs": 180,
          "ttsInterruptionInConversation": true,
          "filler": {
            "enabled": true,
            "delayMs": 1200,
            "waitingListIds": [],
            "toolListIds": [],
            "waiting": [],
            "tool": []
          },
          "reprompt": {
            "enabled": true,
            "mode": "llm",
            "text": [],
            "repeatMaxLength": 180,
            "maxRetries": 1
          },
          "maxResponseLength": 50000,
          "callPermissions": {
            "checkVerifyNumber": false,
            "allowForeignNumbers": false,
            "allowInternationalNumbers": false,
            "allowMobileNumbers": false,
            "allowFixedNumbers": false,
            "country": "it",
            "prefixMobile": "3",
            "prefixFixed": "0"
          }
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant_settings_runtime_update_success",
    "accessor": "AssistantSettingsRuntimeUpdateSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/assistants/{assistantId}/runtime/settings",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "assistantApiKey": "ai4call_sk_example",
        "assistantId": "example-id",
        "service": "settings",
        "configuration": {
          "asrSilenceMs": 1,
          "asrInitialDelayMs": 1,
          "truncateInitialAudio": true,
          "dynamicTimeoutMs": 1,
          "vad": true,
          "vadThreshold": 1,
          "vadMinVoiceMs": 1,
          "ttsInterruptionInConversation": true,
          "filler": {
            "enabled": true,
            "delayMs": 1,
            "waitingListIds": [
              "example"
            ],
            "toolListIds": [
              "example"
            ],
            "waiting": [
              "example"
            ],
            "tool": [
              "example"
            ]
          },
          "reprompt": {
            "enabled": true,
            "mode": "llm",
            "text": [
              "example"
            ],
            "repeatMaxLength": 1,
            "maxRetries": 1
          },
          "maxResponseLength": 1,
          "callPermissions": {
            "checkVerifyNumber": true,
            "allowForeignNumbers": true,
            "allowInternationalNumbers": true,
            "allowMobileNumbers": true,
            "allowFixedNumbers": true,
            "country": "example",
            "prefixMobile": "example",
            "prefixFixed": "example"
          }
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant_tools_runtime_update_success",
    "accessor": "AssistantToolsRuntimeUpdateSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/assistants/{assistantId}/runtime/tools",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "assistantApiKey": "ai4call_sk_example",
        "assistantId": "example-id",
        "service": "tools",
        "configuration": {
          "toolIds": [
            "example"
          ],
          "mcpToolsBySubscription": {},
          "hasMcpTools": true
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "assistant_tts_runtime_update_success",
    "accessor": "AssistantTtsRuntimeUpdateSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/assistants/{assistantId}/runtime/tts",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "assistantApiKey": "ai4call_sk_example",
        "assistantId": "example-id",
        "service": "tts",
        "configuration": {
          "sourceMode": "ai4call",
          "hasApiKey": true
        },
        "runtimeBinding": {
          "configured": true,
          "sourceMode": "ai4call"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "associated_runtime_tool_list_success",
    "accessor": "AssociatedRuntimeToolListSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/catalog/assistants/{assistantId}/tools",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Assistant associated tools retrieved successfully.",
      "requestId": "5e6fe40d-8f7f-4406-95c0-d3a5c4c90fd3",
      "meta": {
        "count": 3,
        "customToolCount": 1,
        "pluginToolCount": 1,
        "customMcpToolCount": 1
      },
      "data": {
        "tools": [
          {
            "toolType": "custom_tool",
            "toolName": "crm-search",
            "instanceName": null,
            "pluginName": null,
            "description": "Search for a lead in the company CRM",
            "parameters": null,
            "method": "POST",
            "endpoint": "https://crm.example.com/api/search"
          },
          {
            "toolType": "plugin_tool",
            "toolName": "execute_workflow",
            "instanceName": "Marketing",
            "pluginName": "n8n",
            "description": "Runs an n8n workflow",
            "parameters": {
              "type": "object"
            },
            "method": null,
            "endpoint": null
          },
          {
            "toolType": "custom_mcp_tool",
            "toolName": "search_contact",
            "instanceName": "CRM Custom",
            "pluginName": "CRM Custom",
            "description": "Search for a contact in the CRM",
            "parameters": {
              "type": "object"
            },
            "method": null,
            "endpoint": null
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "audio_to_audio",
    "accessor": "AudioToAudio",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/catalog/providers/audio-to-audio",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "providers": [
          {
            "providerId": "openai",
            "providerLabel": "openai",
            "serviceType": "tts",
            "availableModes": [
              "ai4call"
            ]
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "available_runtime_tool_list_success",
    "accessor": "AvailableRuntimeToolListSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/catalog/tools",
    "args": [],
    "select": {
      "cursor": "v1",
      "limit": "v1"
    },
    "headers": [],
    "query": [
      "limit",
      "cursor"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Available tools retrieved successfully.",
      "requestId": "21715377-4492-44af-91a7-af50058a4bac",
      "meta": {
        "count": 4,
        "customToolCount": 1,
        "pluginToolCount": 2,
        "customMcpToolCount": 1
      },
      "data": {
        "tools": [
          {
            "toolType": "custom_tool",
            "toolName": "crm-search",
            "instanceName": null,
            "pluginName": null,
            "description": "Search for a lead in the company CRM",
            "parameters": null,
            "method": "POST",
            "endpoint": "https://crm.example.com/api/search"
          },
          {
            "toolType": "plugin_tool",
            "toolName": "list_workflows",
            "instanceName": "Marketing",
            "pluginName": "n8n",
            "description": "Lists available workflows",
            "parameters": {
              "type": "object"
            },
            "method": null,
            "endpoint": null
          },
          {
            "toolType": "plugin_tool",
            "toolName": "execute_workflow",
            "instanceName": "Marketing",
            "pluginName": "n8n",
            "description": "Runs an n8n workflow",
            "parameters": {
              "type": "object"
            },
            "method": null,
            "endpoint": null
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "health",
    "accessor": "Health",
    "op": "load",
    "method": "GET",
    "path": "/health",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [],
    "status": 200,
    "sample": {
      "success": true,
      "message": "Service is healthy.",
      "requestId": "8cb7cd6b-3f55-4226-b4a2-54fd9e90ec99",
      "data": {
        "status": "ok",
        "service": "api-rest-assistant-creator",
        "dataSource": "database"
      }
    },
    "idField": "id"
  },
  {
    "entity": "llm",
    "accessor": "Llm",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/catalog/providers/llm",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "providers": [
          {
            "providerId": "openai",
            "providerLabel": "openai",
            "serviceType": "tts",
            "availableModes": [
              "ai4call"
            ]
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "llm_model_list_success",
    "accessor": "LlmModelListSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/catalog/assistants/{assistantId}/llm/models",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Assistant LLM models retrieved successfully.",
      "requestId": "dc4d2d62-0fd3-4b4f-8bf7-1c1d9509966d",
      "meta": {
        "count": 2
      },
      "data": {
        "models": [
          {
            "modelId": "16",
            "modelCode": "gpt-4.1-mini",
            "modelLabel": "GPT-4.1 mini",
            "providerId": "openai",
            "providerLabel": "openai",
            "inputPrice": 0.15,
            "outputPrice": 0.6,
            "sourceMode": "ai4call",
            "catalogOrigin": "ai4call_pricing"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "outbound_call",
    "accessor": "OutboundCall",
    "op": "create",
    "method": "POST",
    "path": "/webhook/outbound_call",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Outbound call accepted.",
      "requestId": "9755db58-3e8d-4a09-b3a1-c68fd6f70c8b",
      "data": {
        "internalId": "4f9ab147-ef47-4b54-9987-1dd30288c610",
        "status": "accepted",
        "callbackConfigured": true,
        "callId": "CALL-20260504-001"
      }
    },
    "idField": "id"
  },
  {
    "entity": "outbound_call_accepted_success",
    "accessor": "OutboundCallAcceptedSuccess",
    "op": "create",
    "method": "POST",
    "path": "/webhook/outbound_call_pbx",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Outbound call accepted.",
      "requestId": "9755db58-3e8d-4a09-b3a1-c68fd6f70c8b",
      "data": {
        "internalId": "4f9ab147-ef47-4b54-9987-1dd30288c610",
        "status": "accepted",
        "callbackConfigured": true,
        "callId": "CALL-20260504-001"
      }
    },
    "idField": "id"
  },
  {
    "entity": "outbound_dial_status_payload",
    "accessor": "OutboundDialStatusPayload",
    "op": "load",
    "method": "GET",
    "path": "/getDialstatus/{uuid}",
    "args": [
      {
        "name": "uuid",
        "wire": "uuid",
        "value": "4f9ab147-ef47-4b54-9987-1dd30288c610"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "dialStatus": "ANSWER",
      "billSec": 42,
      "trafficCost": "0.003300"
    },
    "idField": "id"
  },
  {
    "entity": "portal_login_success",
    "accessor": "PortalLoginSuccess",
    "op": "create",
    "method": "POST",
    "path": "/api/v1/auth/portal/login",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [],
    "status": 200,
    "sample": {
      "success": true,
      "message": "Portal client authenticated successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "client": {
          "clientId": "example-id",
          "email": "developer@example.com",
          "displayName": "Example",
          "companyName": "Example",
          "isActive": true
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "pre_call",
    "accessor": "PreCall",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/catalog/assistants/{assistantId}/pre-call",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Assistant pre-call configuration retrieved successfully.",
      "requestId": "03a61d48-929d-4e18-80d6-2af9da9b1493",
      "data": {
        "configuration": {
          "tools": [
            {
              "server": "google_sheets",
              "method": "sheets_search_rows",
              "executeBeforeCall": true,
              "required": [
                "caller_id",
                "company_name"
              ],
              "metadata": {
                "spreadsheetId": "1AbCdEf"
              }
            }
          ],
          "globalPrompt": "Recupera informazioni utili prima del passaggio all'assistente.",
          "waitingAudioText": "Attendi in linea mentre recupero le informazioni.",
          "earlyTerminationEnabled": false,
          "terminationMessage": "",
          "terminationAudioFile": null
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "provider_wallet",
    "accessor": "ProviderWallet",
    "op": "create",
    "method": "POST",
    "path": "/api/v1/account/provider-wallet",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 201,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "credential": {
          "id": 42,
          "serviceType": "llm",
          "provider": "openai",
          "engine": "openai",
          "name": "OpenAI produzione",
          "isActive": true,
          "preview": {
            "apiKey": "sk-proj-ab**********"
          },
          "createdAt": "2026-09-28T10:30:00.000Z",
          "updatedAt": "2026-09-28T10:30:00.000Z"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "provider_wallet",
    "accessor": "ProviderWallet",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/account/provider-wallet",
    "args": [],
    "select": {
      "cursor": "v1",
      "limit": "v1"
    },
    "headers": [],
    "query": [
      "limit",
      "cursor"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Provider wallet credentials retrieved successfully.",
      "requestId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "data": {
        "credentials": [
          {
            "id": 42,
            "serviceType": "llm",
            "provider": "openai",
            "engine": "openai",
            "name": "OpenAI produzione",
            "isActive": true,
            "preview": {
              "apiKey": "sk-proj-ab**********"
            },
            "createdAt": "2026-08-01T09:15:00.000Z",
            "updatedAt": "2026-08-20T11:02:00.000Z"
          }
        ]
      },
      "meta": {
        "count": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "provider_wallet",
    "accessor": "ProviderWallet",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/account/provider-wallet/{providerWalletId}",
    "args": [
      {
        "name": "id",
        "wire": "providerWalletId",
        "value": 42
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "credential": {
          "id": 42,
          "serviceType": "llm",
          "provider": "openai",
          "engine": "openai",
          "name": "OpenAI produzione",
          "isActive": true,
          "preview": {
            "apiKey": "sk-proj-ab**********"
          },
          "createdAt": "2026-09-28T10:30:00.000Z",
          "updatedAt": "2026-09-28T10:30:00.000Z"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "provider_wallet",
    "accessor": "ProviderWallet",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/v1/account/provider-wallet/{providerWalletId}",
    "args": [
      {
        "name": "id",
        "wire": "providerWalletId",
        "value": 42
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "deleted": true
      }
    },
    "idField": "id"
  },
  {
    "entity": "provider_wallet",
    "accessor": "ProviderWallet",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/account/provider-wallet/{providerWalletId}",
    "args": [
      {
        "name": "id",
        "wire": "providerWalletId",
        "value": 42
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "credential": {
          "id": 42,
          "serviceType": "llm",
          "provider": "openai",
          "engine": "openai",
          "name": "OpenAI produzione",
          "isActive": true,
          "preview": {
            "apiKey": "sk-proj-ab**********"
          },
          "createdAt": "2026-09-28T10:30:00.000Z",
          "updatedAt": "2026-09-28T10:30:00.000Z"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "provider_wallet_associations_success",
    "accessor": "ProviderWalletAssociationsSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/account/provider-wallet/assistants/{assistantId}",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Assistant provider wallet associations retrieved successfully.",
      "requestId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "data": {
        "associations": [
          {
            "assistantApiKey": "ai4call_sk_abc123",
            "scopeKey": "llm",
            "serviceType": "llm",
            "provider": "openai",
            "engine": "openai",
            "providerWalletId": 42,
            "walletName": "OpenAI produzione",
            "createdAt": "2026-08-01T09:15:00.000Z",
            "updatedAt": "2026-08-20T11:02:00.000Z"
          }
        ]
      },
      "meta": {
        "count": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "provider_wallet_catalog_success",
    "accessor": "ProviderWalletCatalogSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/account/provider-wallet/catalog",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Provider wallet catalog retrieved successfully.",
      "requestId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "data": {
        "providers": [
          {
            "id": "llm:openai",
            "serviceType": "llm",
            "serviceLabel": "LLM",
            "provider": "openai",
            "engine": "openai",
            "label": "OpenAI",
            "description": "Flagship models of the GPT family and o series",
            "ai4call": true,
            "byok": true,
            "fields": [
              {
                "key": "apiKey",
                "label": "API key",
                "type": "password",
                "required": true,
                "secret": true
              }
            ]
          }
        ]
      },
      "meta": {
        "count": 29
      }
    },
    "idField": "id"
  },
  {
    "entity": "public_rag_search_success",
    "accessor": "PublicRagSearchSuccess",
    "op": "create",
    "method": "POST",
    "path": "/public/v1/rag/search",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "data": {
        "query": "coca",
        "rag_id": "rag_8K2mP9zQ4xL7",
        "count": 2,
        "results": [
          {
            "content": "1 lattina Coca Cola costa 1,50 EURO",
            "score": 1.4087,
            "metadata": {
              "filename": "Catalogo Prodotti Autorizzati.txt",
              "chunkIndex": "0",
              "totalChunks": "4"
            }
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "runtime_binding",
    "accessor": "RuntimeBinding",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/catalog/assistants/{assistantId}/runtime-bindings",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Assistant runtime bindings retrieved successfully.",
      "requestId": "6ce3ab94-4041-4429-86ef-5522dc80c4c4",
      "data": {
        "assistantApiKey": "ast_demo_sales_001",
        "assistantId": "188",
        "runtimeBindings": {
          "tts": {
            "configured": false,
            "sourceMode": "customer",
            "pricingId": null,
            "priceListId": null,
            "providerId": null,
            "providerLabel": null,
            "engineCode": null,
            "modelCode": null,
            "modelLabel": null
          },
          "asr": {
            "configured": true,
            "sourceMode": "ai4call",
            "pricingId": 9,
            "priceListId": 3,
            "providerId": "azure",
            "providerLabel": "AZURE",
            "engineCode": "asr_azure_multi",
            "modelCode": "asr_azure_multi",
            "modelLabel": "asr_azure_multi"
          },
          "llm": {
            "configured": true,
            "sourceMode": "ai4call",
            "pricingId": 16,
            "priceListId": 2,
            "providerId": "openai",
            "providerLabel": "openai",
            "engineCode": "gpt-4.1-mini",
            "modelCode": "gpt-4.1-mini",
            "modelLabel": "GPT-4.1 mini"
          }
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "tts",
    "accessor": "Tts",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/catalog/providers/tts",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "TTS providers retrieved successfully.",
      "requestId": "5f6ca30b-7046-416e-b4da-e149833885e2",
      "meta": {
        "count": 3
      },
      "data": {
        "providers": [
          {
            "providerId": "azure",
            "providerLabel": "Azure",
            "engineCode": "tts_live_azure_multi",
            "serviceType": "tts",
            "availableModes": [
              "ai4call",
              "customer"
            ],
            "itemCount": 530
          },
          {
            "providerId": "elevenlabs",
            "providerLabel": "ElevenLabs",
            "engineCode": "tts_live_eleven_multi",
            "serviceType": "tts",
            "availableModes": [
              "customer"
            ],
            "itemCount": 2793
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "tts_voice_list_success",
    "accessor": "TtsVoiceListSuccess",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/catalog/assistants/{assistantId}/tts/voices",
    "args": [
      {
        "name": "assistant_id",
        "wire": "assistantId",
        "value": "205"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Assistant TTS voices retrieved successfully.",
      "requestId": "00421620-08b4-473d-b703-2d7df18d0f5a",
      "meta": {
        "count": 530
      },
      "data": {
        "voices": [
          {
            "voiceId": "1",
            "voiceCode": "it-IT-DiegoNeural",
            "voiceLabel": "Diego - Italian (Italy)",
            "providerId": "azure",
            "providerLabel": "Azure",
            "engineCode": "tts_live_azure_multi",
            "language": "it-IT",
            "region": null,
            "price": 0.008,
            "sourceMode": "ai4call",
            "catalogOrigin": "ai4call_pricing",
            "previewUrl": null
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "voice_llm",
    "accessor": "VoiceLlm",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/catalog/providers/voice-llm",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "message": "Operation completed successfully.",
      "requestId": "00000000-0000-4000-8000-000000000000",
      "data": {
        "providers": [
          {
            "providerId": "openai",
            "providerLabel": "openai",
            "serviceType": "tts",
            "availableModes": [
              "ai4call"
            ]
          }
        ]
      }
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
