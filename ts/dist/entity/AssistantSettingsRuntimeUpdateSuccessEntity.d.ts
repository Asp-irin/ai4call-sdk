import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AssistantSettingsRuntimeUpdateSuccess, AssistantSettingsRuntimeUpdateSuccessUpdateData } from '../Ai4callTypes';
declare class AssistantSettingsRuntimeUpdateSuccessEntity extends Ai4callEntityBase<AssistantSettingsRuntimeUpdateSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AssistantSettingsRuntimeUpdateSuccessEntity): AssistantSettingsRuntimeUpdateSuccessEntity;
    update(this: any, reqdata?: AssistantSettingsRuntimeUpdateSuccessUpdateData, ctrl?: Control): Promise<AssistantSettingsRuntimeUpdateSuccessEntity>;
}
export { AssistantSettingsRuntimeUpdateSuccessEntity };
