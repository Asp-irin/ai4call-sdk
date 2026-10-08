import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AssistantTtsRuntimeUpdateSuccess, AssistantTtsRuntimeUpdateSuccessUpdateData } from '../Ai4callTypes';
declare class AssistantTtsRuntimeUpdateSuccessEntity extends Ai4callEntityBase<AssistantTtsRuntimeUpdateSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AssistantTtsRuntimeUpdateSuccessEntity): AssistantTtsRuntimeUpdateSuccessEntity;
    update(this: any, reqdata?: AssistantTtsRuntimeUpdateSuccessUpdateData, ctrl?: Control): Promise<AssistantTtsRuntimeUpdateSuccessEntity>;
}
export { AssistantTtsRuntimeUpdateSuccessEntity };
