import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AssistantPromptSuccess, AssistantPromptSuccessLoadMatch } from '../Ai4callTypes';
declare class AssistantPromptSuccessEntity extends Ai4callEntityBase<AssistantPromptSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AssistantPromptSuccessEntity): AssistantPromptSuccessEntity;
    load(this: any, reqmatch?: AssistantPromptSuccessLoadMatch, ctrl?: Control): Promise<AssistantPromptSuccessEntity>;
}
export { AssistantPromptSuccessEntity };
