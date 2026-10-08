import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AssistantConversationWebhookRuntimeSuccess, AssistantConversationWebhookRuntimeSuccessLoadMatch, AssistantConversationWebhookRuntimeSuccessUpdateData } from '../Ai4callTypes';
declare class AssistantConversationWebhookRuntimeSuccessEntity extends Ai4callEntityBase<AssistantConversationWebhookRuntimeSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AssistantConversationWebhookRuntimeSuccessEntity): AssistantConversationWebhookRuntimeSuccessEntity;
    load(this: any, reqmatch?: AssistantConversationWebhookRuntimeSuccessLoadMatch, ctrl?: Control): Promise<AssistantConversationWebhookRuntimeSuccessEntity>;
    update(this: any, reqdata?: AssistantConversationWebhookRuntimeSuccessUpdateData, ctrl?: Control): Promise<AssistantConversationWebhookRuntimeSuccessEntity>;
}
export { AssistantConversationWebhookRuntimeSuccessEntity };
