import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AssistantAsrRuntimeUpdateSuccess, AssistantAsrRuntimeUpdateSuccessUpdateData } from '../Ai4callTypes';
declare class AssistantAsrRuntimeUpdateSuccessEntity extends Ai4callEntityBase<AssistantAsrRuntimeUpdateSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AssistantAsrRuntimeUpdateSuccessEntity): AssistantAsrRuntimeUpdateSuccessEntity;
    update(this: any, reqdata?: AssistantAsrRuntimeUpdateSuccessUpdateData, ctrl?: Control): Promise<AssistantAsrRuntimeUpdateSuccessEntity>;
}
export { AssistantAsrRuntimeUpdateSuccessEntity };
