import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AssistantLlmRuntimeUpdateSuccess, AssistantLlmRuntimeUpdateSuccessUpdateData } from '../Ai4callTypes';
declare class AssistantLlmRuntimeUpdateSuccessEntity extends Ai4callEntityBase<AssistantLlmRuntimeUpdateSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AssistantLlmRuntimeUpdateSuccessEntity): AssistantLlmRuntimeUpdateSuccessEntity;
    update(this: any, reqdata?: AssistantLlmRuntimeUpdateSuccessUpdateData, ctrl?: Control): Promise<AssistantLlmRuntimeUpdateSuccessEntity>;
}
export { AssistantLlmRuntimeUpdateSuccessEntity };
