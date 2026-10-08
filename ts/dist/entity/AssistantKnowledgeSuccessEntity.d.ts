import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AssistantKnowledgeSuccess, AssistantKnowledgeSuccessLoadMatch, AssistantKnowledgeSuccessUpdateData } from '../Ai4callTypes';
declare class AssistantKnowledgeSuccessEntity extends Ai4callEntityBase<AssistantKnowledgeSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AssistantKnowledgeSuccessEntity): AssistantKnowledgeSuccessEntity;
    load(this: any, reqmatch?: AssistantKnowledgeSuccessLoadMatch, ctrl?: Control): Promise<AssistantKnowledgeSuccessEntity>;
    update(this: any, reqdata?: AssistantKnowledgeSuccessUpdateData, ctrl?: Control): Promise<AssistantKnowledgeSuccessEntity>;
}
export { AssistantKnowledgeSuccessEntity };
