import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AssistantHangupRuntimeUpdateSuccess, AssistantHangupRuntimeUpdateSuccessUpdateData } from '../Ai4callTypes';
declare class AssistantHangupRuntimeUpdateSuccessEntity extends Ai4callEntityBase<AssistantHangupRuntimeUpdateSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AssistantHangupRuntimeUpdateSuccessEntity): AssistantHangupRuntimeUpdateSuccessEntity;
    update(this: any, reqdata?: AssistantHangupRuntimeUpdateSuccessUpdateData, ctrl?: Control): Promise<AssistantHangupRuntimeUpdateSuccessEntity>;
}
export { AssistantHangupRuntimeUpdateSuccessEntity };
