import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AssistantToolsRuntimeUpdateSuccess, AssistantToolsRuntimeUpdateSuccessUpdateData } from '../Ai4callTypes';
declare class AssistantToolsRuntimeUpdateSuccessEntity extends Ai4callEntityBase<AssistantToolsRuntimeUpdateSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AssistantToolsRuntimeUpdateSuccessEntity): AssistantToolsRuntimeUpdateSuccessEntity;
    update(this: any, reqdata?: AssistantToolsRuntimeUpdateSuccessUpdateData, ctrl?: Control): Promise<AssistantToolsRuntimeUpdateSuccessEntity>;
}
export { AssistantToolsRuntimeUpdateSuccessEntity };
