import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AssistantDtmfRuntimeUpdateSuccess, AssistantDtmfRuntimeUpdateSuccessUpdateData } from '../Ai4callTypes';
declare class AssistantDtmfRuntimeUpdateSuccessEntity extends Ai4callEntityBase<AssistantDtmfRuntimeUpdateSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AssistantDtmfRuntimeUpdateSuccessEntity): AssistantDtmfRuntimeUpdateSuccessEntity;
    update(this: any, reqdata?: AssistantDtmfRuntimeUpdateSuccessUpdateData, ctrl?: Control): Promise<AssistantDtmfRuntimeUpdateSuccessEntity>;
}
export { AssistantDtmfRuntimeUpdateSuccessEntity };
