// Ai4call Ts SDK

import { AccountAllowedIpsSuccessEntity } from './entity/AccountAllowedIpsSuccessEntity'
import { AccountAvailablePluginsSuccessEntity } from './entity/AccountAvailablePluginsSuccessEntity'
import { AccountCallLimitsSuccessEntity } from './entity/AccountCallLimitsSuccessEntity'
import { AccountNumberRoutingSuccessEntity } from './entity/AccountNumberRoutingSuccessEntity'
import { AccountPluginConfigurationSuccessEntity } from './entity/AccountPluginConfigurationSuccessEntity'
import { AccountPluginInstanceSuccessEntity } from './entity/AccountPluginInstanceSuccessEntity'
import { AccountPluginPurchaseSuccessEntity } from './entity/AccountPluginPurchaseSuccessEntity'
import { AnalyticsCallsOutboundSuccessEntity } from './entity/AnalyticsCallsOutboundSuccessEntity'
import { AnalyticsCallsSuccessEntity } from './entity/AnalyticsCallsSuccessEntity'
import { AnalyticsPostCallSuccessEntity } from './entity/AnalyticsPostCallSuccessEntity'
import { AnalyticsPreCallSuccessEntity } from './entity/AnalyticsPreCallSuccessEntity'
import { AnalyticsRagSearchSuccessEntity } from './entity/AnalyticsRagSearchSuccessEntity'
import { AnalyticsRagSuccessEntity } from './entity/AnalyticsRagSuccessEntity'
import { AnalyticsRechargesSuccessEntity } from './entity/AnalyticsRechargesSuccessEntity'
import { AnalyticsSmsSuccessEntity } from './entity/AnalyticsSmsSuccessEntity'
import { AnalyticsToolResponsesSuccessEntity } from './entity/AnalyticsToolResponsesSuccessEntity'
import { AsrEntity } from './entity/AsrEntity'
import { AsrModelListSuccessEntity } from './entity/AsrModelListSuccessEntity'
import { AssistantEntity } from './entity/AssistantEntity'
import { AssistantAdvancedSettingsConfigurationSuccessEntity } from './entity/AssistantAdvancedSettingsConfigurationSuccessEntity'
import { AssistantAdvancedSettingsRuntimeUpdateSuccessEntity } from './entity/AssistantAdvancedSettingsRuntimeUpdateSuccessEntity'
import { AssistantAsrRuntimeUpdateSuccessEntity } from './entity/AssistantAsrRuntimeUpdateSuccessEntity'
import { AssistantConversationWebhookRuntimeSuccessEntity } from './entity/AssistantConversationWebhookRuntimeSuccessEntity'
import { AssistantDtmfConfigurationSuccessEntity } from './entity/AssistantDtmfConfigurationSuccessEntity'
import { AssistantDtmfRuntimeUpdateSuccessEntity } from './entity/AssistantDtmfRuntimeUpdateSuccessEntity'
import { AssistantHangupConfigurationSuccessEntity } from './entity/AssistantHangupConfigurationSuccessEntity'
import { AssistantHangupRuntimeUpdateSuccessEntity } from './entity/AssistantHangupRuntimeUpdateSuccessEntity'
import { AssistantHangupSchemaRuntimeSuccessEntity } from './entity/AssistantHangupSchemaRuntimeSuccessEntity'
import { AssistantKnowledgeSuccessEntity } from './entity/AssistantKnowledgeSuccessEntity'
import { AssistantLlmRuntimeUpdateSuccessEntity } from './entity/AssistantLlmRuntimeUpdateSuccessEntity'
import { AssistantNumberRoutingCatalogSuccessEntity } from './entity/AssistantNumberRoutingCatalogSuccessEntity'
import { AssistantNumberRoutingRuntimeSuccessEntity } from './entity/AssistantNumberRoutingRuntimeSuccessEntity'
import { AssistantPostcallMcpRuntimeSuccessEntity } from './entity/AssistantPostcallMcpRuntimeSuccessEntity'
import { AssistantPrecallMcpRuntimeSuccessEntity } from './entity/AssistantPrecallMcpRuntimeSuccessEntity'
import { AssistantPrecallValidationRuntimeSuccessEntity } from './entity/AssistantPrecallValidationRuntimeSuccessEntity'
import { AssistantPromptSuccessEntity } from './entity/AssistantPromptSuccessEntity'
import { AssistantRagConfigurationSuccessEntity } from './entity/AssistantRagConfigurationSuccessEntity'
import { AssistantRagRuntimeUpdateSuccessEntity } from './entity/AssistantRagRuntimeUpdateSuccessEntity'
import { AssistantSaveConversationRuntimeSuccessEntity } from './entity/AssistantSaveConversationRuntimeSuccessEntity'
import { AssistantSettingsConfigurationSuccessEntity } from './entity/AssistantSettingsConfigurationSuccessEntity'
import { AssistantSettingsRuntimeUpdateSuccessEntity } from './entity/AssistantSettingsRuntimeUpdateSuccessEntity'
import { AssistantToolsRuntimeUpdateSuccessEntity } from './entity/AssistantToolsRuntimeUpdateSuccessEntity'
import { AssistantTtsRuntimeUpdateSuccessEntity } from './entity/AssistantTtsRuntimeUpdateSuccessEntity'
import { AssistantVoiceToVoiceRuntimeUpdateSuccessEntity } from './entity/AssistantVoiceToVoiceRuntimeUpdateSuccessEntity'
import { AssociatedRuntimeToolListSuccessEntity } from './entity/AssociatedRuntimeToolListSuccessEntity'
import { AudioToAudioEntity } from './entity/AudioToAudioEntity'
import { AvailableRuntimeToolListSuccessEntity } from './entity/AvailableRuntimeToolListSuccessEntity'
import { FillerPhraseListEntity } from './entity/FillerPhraseListEntity'
import { HealthEntity } from './entity/HealthEntity'
import { KnowledgeEntity } from './entity/KnowledgeEntity'
import { LlmEntity } from './entity/LlmEntity'
import { LlmModelListSuccessEntity } from './entity/LlmModelListSuccessEntity'
import { OutboundCallEntity } from './entity/OutboundCallEntity'
import { OutboundCallAcceptedSuccessEntity } from './entity/OutboundCallAcceptedSuccessEntity'
import { OutboundDialStatusPayloadEntity } from './entity/OutboundDialStatusPayloadEntity'
import { PortalLoginSuccessEntity } from './entity/PortalLoginSuccessEntity'
import { PreCallEntity } from './entity/PreCallEntity'
import { ProviderWalletEntity } from './entity/ProviderWalletEntity'
import { ProviderWalletAssociationsSuccessEntity } from './entity/ProviderWalletAssociationsSuccessEntity'
import { ProviderWalletCatalogSuccessEntity } from './entity/ProviderWalletCatalogSuccessEntity'
import { PublicRagSearchSuccessEntity } from './entity/PublicRagSearchSuccessEntity'
import { RagCollectionDeleteSuccessEntity } from './entity/RagCollectionDeleteSuccessEntity'
import { RagCollectionDocumentDeleteSuccessEntity } from './entity/RagCollectionDocumentDeleteSuccessEntity'
import { RagCollectionDocumentListSuccessEntity } from './entity/RagCollectionDocumentListSuccessEntity'
import { RagCollectionDocumentTokenEstimateSuccessEntity } from './entity/RagCollectionDocumentTokenEstimateSuccessEntity'
import { RagCollectionDocumentUploadStatusSuccessEntity } from './entity/RagCollectionDocumentUploadStatusSuccessEntity'
import { RagCollectionDocumentUploadSuccessEntity } from './entity/RagCollectionDocumentUploadSuccessEntity'
import { RuntimeBindingEntity } from './entity/RuntimeBindingEntity'
import { TtsEntity } from './entity/TtsEntity'
import { TtsVoiceListSuccessEntity } from './entity/TtsVoiceListSuccessEntity'
import { VoiceEntity } from './entity/VoiceEntity'
import { VoiceLlmEntity } from './entity/VoiceLlmEntity'
import { VoiceLlmModelListSuccessEntity } from './entity/VoiceLlmModelListSuccessEntity'

export type * from './Ai4callTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { Ai4callEntityBase } from './Ai4callEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


class Ai4callSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('Ai4callSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('Ai4callSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('Ai4callSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.AccountAllowedIpsSuccess().list()` / `client.AccountAllowedIpsSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AccountAllowedIpsSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AccountAllowedIpsSuccessEntity(self, entopts)
  }


  // Entity access: `client.AccountAvailablePluginsSuccess().list()` / `client.AccountAvailablePluginsSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AccountAvailablePluginsSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AccountAvailablePluginsSuccessEntity(self, entopts)
  }


  // Entity access: `client.AccountCallLimitsSuccess().list()` / `client.AccountCallLimitsSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AccountCallLimitsSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AccountCallLimitsSuccessEntity(self, entopts)
  }


  // Entity access: `client.AccountNumberRoutingSuccess().list()` / `client.AccountNumberRoutingSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AccountNumberRoutingSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AccountNumberRoutingSuccessEntity(self, entopts)
  }


  // Entity access: `client.AccountPluginConfigurationSuccess().list()` / `client.AccountPluginConfigurationSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AccountPluginConfigurationSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AccountPluginConfigurationSuccessEntity(self, entopts)
  }


  // Entity access: `client.AccountPluginInstanceSuccess().list()` / `client.AccountPluginInstanceSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AccountPluginInstanceSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AccountPluginInstanceSuccessEntity(self, entopts)
  }


  // Entity access: `client.AccountPluginPurchaseSuccess().list()` / `client.AccountPluginPurchaseSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AccountPluginPurchaseSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AccountPluginPurchaseSuccessEntity(self, entopts)
  }


  // Entity access: `client.AnalyticsCallsOutboundSuccess().list()` / `client.AnalyticsCallsOutboundSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AnalyticsCallsOutboundSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AnalyticsCallsOutboundSuccessEntity(self, entopts)
  }


  // Entity access: `client.AnalyticsCallsSuccess().list()` / `client.AnalyticsCallsSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AnalyticsCallsSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AnalyticsCallsSuccessEntity(self, entopts)
  }


  // Entity access: `client.AnalyticsPostCallSuccess().list()` / `client.AnalyticsPostCallSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AnalyticsPostCallSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AnalyticsPostCallSuccessEntity(self, entopts)
  }


  // Entity access: `client.AnalyticsPreCallSuccess().list()` / `client.AnalyticsPreCallSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AnalyticsPreCallSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AnalyticsPreCallSuccessEntity(self, entopts)
  }


  // Entity access: `client.AnalyticsRagSearchSuccess().list()` / `client.AnalyticsRagSearchSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AnalyticsRagSearchSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AnalyticsRagSearchSuccessEntity(self, entopts)
  }


  // Entity access: `client.AnalyticsRagSuccess().list()` / `client.AnalyticsRagSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AnalyticsRagSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AnalyticsRagSuccessEntity(self, entopts)
  }


  // Entity access: `client.AnalyticsRechargesSuccess().list()` / `client.AnalyticsRechargesSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AnalyticsRechargesSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AnalyticsRechargesSuccessEntity(self, entopts)
  }


  // Entity access: `client.AnalyticsSmsSuccess().list()` / `client.AnalyticsSmsSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AnalyticsSmsSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AnalyticsSmsSuccessEntity(self, entopts)
  }


  // Entity access: `client.AnalyticsToolResponsesSuccess().list()` / `client.AnalyticsToolResponsesSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AnalyticsToolResponsesSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AnalyticsToolResponsesSuccessEntity(self, entopts)
  }


  // Entity access: `client.Asr().list()` / `client.Asr().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Asr(entopts?: Record<string, any>) {
    const self = this
    return new AsrEntity(self, entopts)
  }


  // Entity access: `client.AsrModelListSuccess().list()` / `client.AsrModelListSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AsrModelListSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AsrModelListSuccessEntity(self, entopts)
  }


  // Entity access: `client.Assistant().list()` / `client.Assistant().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Assistant(entopts?: Record<string, any>) {
    const self = this
    return new AssistantEntity(self, entopts)
  }


  // Entity access: `client.AssistantAdvancedSettingsConfigurationSuccess().list()` / `client.AssistantAdvancedSettingsConfigurationSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssistantAdvancedSettingsConfigurationSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AssistantAdvancedSettingsConfigurationSuccessEntity(self, entopts)
  }


  // Entity access: `client.AssistantAdvancedSettingsRuntimeUpdateSuccess().list()` / `client.AssistantAdvancedSettingsRuntimeUpdateSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssistantAdvancedSettingsRuntimeUpdateSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AssistantAdvancedSettingsRuntimeUpdateSuccessEntity(self, entopts)
  }


  // Entity access: `client.AssistantAsrRuntimeUpdateSuccess().list()` / `client.AssistantAsrRuntimeUpdateSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssistantAsrRuntimeUpdateSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AssistantAsrRuntimeUpdateSuccessEntity(self, entopts)
  }


  // Entity access: `client.AssistantConversationWebhookRuntimeSuccess().list()` / `client.AssistantConversationWebhookRuntimeSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssistantConversationWebhookRuntimeSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AssistantConversationWebhookRuntimeSuccessEntity(self, entopts)
  }


  // Entity access: `client.AssistantDtmfConfigurationSuccess().list()` / `client.AssistantDtmfConfigurationSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssistantDtmfConfigurationSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AssistantDtmfConfigurationSuccessEntity(self, entopts)
  }


  // Entity access: `client.AssistantDtmfRuntimeUpdateSuccess().list()` / `client.AssistantDtmfRuntimeUpdateSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssistantDtmfRuntimeUpdateSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AssistantDtmfRuntimeUpdateSuccessEntity(self, entopts)
  }


  // Entity access: `client.AssistantHangupConfigurationSuccess().list()` / `client.AssistantHangupConfigurationSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssistantHangupConfigurationSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AssistantHangupConfigurationSuccessEntity(self, entopts)
  }


  // Entity access: `client.AssistantHangupRuntimeUpdateSuccess().list()` / `client.AssistantHangupRuntimeUpdateSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssistantHangupRuntimeUpdateSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AssistantHangupRuntimeUpdateSuccessEntity(self, entopts)
  }


  // Entity access: `client.AssistantHangupSchemaRuntimeSuccess().list()` / `client.AssistantHangupSchemaRuntimeSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssistantHangupSchemaRuntimeSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AssistantHangupSchemaRuntimeSuccessEntity(self, entopts)
  }


  // Entity access: `client.AssistantKnowledgeSuccess().list()` / `client.AssistantKnowledgeSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssistantKnowledgeSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AssistantKnowledgeSuccessEntity(self, entopts)
  }


  // Entity access: `client.AssistantLlmRuntimeUpdateSuccess().list()` / `client.AssistantLlmRuntimeUpdateSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssistantLlmRuntimeUpdateSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AssistantLlmRuntimeUpdateSuccessEntity(self, entopts)
  }


  // Entity access: `client.AssistantNumberRoutingCatalogSuccess().list()` / `client.AssistantNumberRoutingCatalogSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssistantNumberRoutingCatalogSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AssistantNumberRoutingCatalogSuccessEntity(self, entopts)
  }


  // Entity access: `client.AssistantNumberRoutingRuntimeSuccess().list()` / `client.AssistantNumberRoutingRuntimeSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssistantNumberRoutingRuntimeSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AssistantNumberRoutingRuntimeSuccessEntity(self, entopts)
  }


  // Entity access: `client.AssistantPostcallMcpRuntimeSuccess().list()` / `client.AssistantPostcallMcpRuntimeSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssistantPostcallMcpRuntimeSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AssistantPostcallMcpRuntimeSuccessEntity(self, entopts)
  }


  // Entity access: `client.AssistantPrecallMcpRuntimeSuccess().list()` / `client.AssistantPrecallMcpRuntimeSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssistantPrecallMcpRuntimeSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AssistantPrecallMcpRuntimeSuccessEntity(self, entopts)
  }


  // Entity access: `client.AssistantPrecallValidationRuntimeSuccess().list()` / `client.AssistantPrecallValidationRuntimeSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssistantPrecallValidationRuntimeSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AssistantPrecallValidationRuntimeSuccessEntity(self, entopts)
  }


  // Entity access: `client.AssistantPromptSuccess().list()` / `client.AssistantPromptSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssistantPromptSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AssistantPromptSuccessEntity(self, entopts)
  }


  // Entity access: `client.AssistantRagConfigurationSuccess().list()` / `client.AssistantRagConfigurationSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssistantRagConfigurationSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AssistantRagConfigurationSuccessEntity(self, entopts)
  }


  // Entity access: `client.AssistantRagRuntimeUpdateSuccess().list()` / `client.AssistantRagRuntimeUpdateSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssistantRagRuntimeUpdateSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AssistantRagRuntimeUpdateSuccessEntity(self, entopts)
  }


  // Entity access: `client.AssistantSaveConversationRuntimeSuccess().list()` / `client.AssistantSaveConversationRuntimeSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssistantSaveConversationRuntimeSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AssistantSaveConversationRuntimeSuccessEntity(self, entopts)
  }


  // Entity access: `client.AssistantSettingsConfigurationSuccess().list()` / `client.AssistantSettingsConfigurationSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssistantSettingsConfigurationSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AssistantSettingsConfigurationSuccessEntity(self, entopts)
  }


  // Entity access: `client.AssistantSettingsRuntimeUpdateSuccess().list()` / `client.AssistantSettingsRuntimeUpdateSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssistantSettingsRuntimeUpdateSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AssistantSettingsRuntimeUpdateSuccessEntity(self, entopts)
  }


  // Entity access: `client.AssistantToolsRuntimeUpdateSuccess().list()` / `client.AssistantToolsRuntimeUpdateSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssistantToolsRuntimeUpdateSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AssistantToolsRuntimeUpdateSuccessEntity(self, entopts)
  }


  // Entity access: `client.AssistantTtsRuntimeUpdateSuccess().list()` / `client.AssistantTtsRuntimeUpdateSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssistantTtsRuntimeUpdateSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AssistantTtsRuntimeUpdateSuccessEntity(self, entopts)
  }


  // Entity access: `client.AssistantVoiceToVoiceRuntimeUpdateSuccess().list()` / `client.AssistantVoiceToVoiceRuntimeUpdateSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssistantVoiceToVoiceRuntimeUpdateSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AssistantVoiceToVoiceRuntimeUpdateSuccessEntity(self, entopts)
  }


  // Entity access: `client.AssociatedRuntimeToolListSuccess().list()` / `client.AssociatedRuntimeToolListSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssociatedRuntimeToolListSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AssociatedRuntimeToolListSuccessEntity(self, entopts)
  }


  // Entity access: `client.AudioToAudio().list()` / `client.AudioToAudio().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AudioToAudio(entopts?: Record<string, any>) {
    const self = this
    return new AudioToAudioEntity(self, entopts)
  }


  // Entity access: `client.AvailableRuntimeToolListSuccess().list()` / `client.AvailableRuntimeToolListSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AvailableRuntimeToolListSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AvailableRuntimeToolListSuccessEntity(self, entopts)
  }


  // Entity access: `client.FillerPhraseList().list()` / `client.FillerPhraseList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FillerPhraseList(entopts?: Record<string, any>) {
    const self = this
    return new FillerPhraseListEntity(self, entopts)
  }


  // Entity access: `client.Health().list()` / `client.Health().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Health(entopts?: Record<string, any>) {
    const self = this
    return new HealthEntity(self, entopts)
  }


  // Entity access: `client.Knowledge().list()` / `client.Knowledge().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Knowledge(entopts?: Record<string, any>) {
    const self = this
    return new KnowledgeEntity(self, entopts)
  }


  // Entity access: `client.Llm().list()` / `client.Llm().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Llm(entopts?: Record<string, any>) {
    const self = this
    return new LlmEntity(self, entopts)
  }


  // Entity access: `client.LlmModelListSuccess().list()` / `client.LlmModelListSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LlmModelListSuccess(entopts?: Record<string, any>) {
    const self = this
    return new LlmModelListSuccessEntity(self, entopts)
  }


  // Entity access: `client.OutboundCall().list()` / `client.OutboundCall().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OutboundCall(entopts?: Record<string, any>) {
    const self = this
    return new OutboundCallEntity(self, entopts)
  }


  // Entity access: `client.OutboundCallAcceptedSuccess().list()` / `client.OutboundCallAcceptedSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OutboundCallAcceptedSuccess(entopts?: Record<string, any>) {
    const self = this
    return new OutboundCallAcceptedSuccessEntity(self, entopts)
  }


  // Entity access: `client.OutboundDialStatusPayload().list()` / `client.OutboundDialStatusPayload().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OutboundDialStatusPayload(entopts?: Record<string, any>) {
    const self = this
    return new OutboundDialStatusPayloadEntity(self, entopts)
  }


  // Entity access: `client.PortalLoginSuccess().list()` / `client.PortalLoginSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PortalLoginSuccess(entopts?: Record<string, any>) {
    const self = this
    return new PortalLoginSuccessEntity(self, entopts)
  }


  // Entity access: `client.PreCall().list()` / `client.PreCall().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PreCall(entopts?: Record<string, any>) {
    const self = this
    return new PreCallEntity(self, entopts)
  }


  // Entity access: `client.ProviderWallet().list()` / `client.ProviderWallet().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProviderWallet(entopts?: Record<string, any>) {
    const self = this
    return new ProviderWalletEntity(self, entopts)
  }


  // Entity access: `client.ProviderWalletAssociationsSuccess().list()` / `client.ProviderWalletAssociationsSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProviderWalletAssociationsSuccess(entopts?: Record<string, any>) {
    const self = this
    return new ProviderWalletAssociationsSuccessEntity(self, entopts)
  }


  // Entity access: `client.ProviderWalletCatalogSuccess().list()` / `client.ProviderWalletCatalogSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProviderWalletCatalogSuccess(entopts?: Record<string, any>) {
    const self = this
    return new ProviderWalletCatalogSuccessEntity(self, entopts)
  }


  // Entity access: `client.PublicRagSearchSuccess().list()` / `client.PublicRagSearchSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PublicRagSearchSuccess(entopts?: Record<string, any>) {
    const self = this
    return new PublicRagSearchSuccessEntity(self, entopts)
  }


  // Entity access: `client.RagCollectionDeleteSuccess().list()` / `client.RagCollectionDeleteSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RagCollectionDeleteSuccess(entopts?: Record<string, any>) {
    const self = this
    return new RagCollectionDeleteSuccessEntity(self, entopts)
  }


  // Entity access: `client.RagCollectionDocumentDeleteSuccess().list()` / `client.RagCollectionDocumentDeleteSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RagCollectionDocumentDeleteSuccess(entopts?: Record<string, any>) {
    const self = this
    return new RagCollectionDocumentDeleteSuccessEntity(self, entopts)
  }


  // Entity access: `client.RagCollectionDocumentListSuccess().list()` / `client.RagCollectionDocumentListSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RagCollectionDocumentListSuccess(entopts?: Record<string, any>) {
    const self = this
    return new RagCollectionDocumentListSuccessEntity(self, entopts)
  }


  // Entity access: `client.RagCollectionDocumentTokenEstimateSuccess().list()` / `client.RagCollectionDocumentTokenEstimateSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RagCollectionDocumentTokenEstimateSuccess(entopts?: Record<string, any>) {
    const self = this
    return new RagCollectionDocumentTokenEstimateSuccessEntity(self, entopts)
  }


  // Entity access: `client.RagCollectionDocumentUploadStatusSuccess().list()` / `client.RagCollectionDocumentUploadStatusSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RagCollectionDocumentUploadStatusSuccess(entopts?: Record<string, any>) {
    const self = this
    return new RagCollectionDocumentUploadStatusSuccessEntity(self, entopts)
  }


  // Entity access: `client.RagCollectionDocumentUploadSuccess().list()` / `client.RagCollectionDocumentUploadSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RagCollectionDocumentUploadSuccess(entopts?: Record<string, any>) {
    const self = this
    return new RagCollectionDocumentUploadSuccessEntity(self, entopts)
  }


  // Entity access: `client.RuntimeBinding().list()` / `client.RuntimeBinding().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RuntimeBinding(entopts?: Record<string, any>) {
    const self = this
    return new RuntimeBindingEntity(self, entopts)
  }


  // Entity access: `client.Tts().list()` / `client.Tts().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Tts(entopts?: Record<string, any>) {
    const self = this
    return new TtsEntity(self, entopts)
  }


  // Entity access: `client.TtsVoiceListSuccess().list()` / `client.TtsVoiceListSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TtsVoiceListSuccess(entopts?: Record<string, any>) {
    const self = this
    return new TtsVoiceListSuccessEntity(self, entopts)
  }


  // Entity access: `client.Voice().list()` / `client.Voice().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Voice(entopts?: Record<string, any>) {
    const self = this
    return new VoiceEntity(self, entopts)
  }


  // Entity access: `client.VoiceLlm().list()` / `client.VoiceLlm().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  VoiceLlm(entopts?: Record<string, any>) {
    const self = this
    return new VoiceLlmEntity(self, entopts)
  }


  // Entity access: `client.VoiceLlmModelListSuccess().list()` / `client.VoiceLlmModelListSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  VoiceLlmModelListSuccess(entopts?: Record<string, any>) {
    const self = this
    return new VoiceLlmModelListSuccessEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new Ai4callSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return Ai4callSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'Ai4call' }
  }

  toString() {
    return 'Ai4call ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = Ai4callSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  Ai4callEntityBase,

  Ai4callSDK,
  SDK,
}


