import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AssistantRagRuntimeUpdateSuccess, AssistantRagRuntimeUpdateSuccessUpdateData } from '../Ai4callTypes';
declare class AssistantRagRuntimeUpdateSuccessEntity extends Ai4callEntityBase<AssistantRagRuntimeUpdateSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AssistantRagRuntimeUpdateSuccessEntity): AssistantRagRuntimeUpdateSuccessEntity;
    update(this: any, reqdata?: AssistantRagRuntimeUpdateSuccessUpdateData, ctrl?: Control): Promise<AssistantRagRuntimeUpdateSuccessEntity>;
}
export { AssistantRagRuntimeUpdateSuccessEntity };
