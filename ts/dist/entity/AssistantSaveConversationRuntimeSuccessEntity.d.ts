import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AssistantSaveConversationRuntimeSuccess, AssistantSaveConversationRuntimeSuccessLoadMatch, AssistantSaveConversationRuntimeSuccessUpdateData } from '../Ai4callTypes';
declare class AssistantSaveConversationRuntimeSuccessEntity extends Ai4callEntityBase<AssistantSaveConversationRuntimeSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AssistantSaveConversationRuntimeSuccessEntity): AssistantSaveConversationRuntimeSuccessEntity;
    load(this: any, reqmatch?: AssistantSaveConversationRuntimeSuccessLoadMatch, ctrl?: Control): Promise<AssistantSaveConversationRuntimeSuccessEntity>;
    update(this: any, reqdata?: AssistantSaveConversationRuntimeSuccessUpdateData, ctrl?: Control): Promise<AssistantSaveConversationRuntimeSuccessEntity>;
}
export { AssistantSaveConversationRuntimeSuccessEntity };
