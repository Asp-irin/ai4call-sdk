import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AssistantAdvancedSettingsRuntimeUpdateSuccess, AssistantAdvancedSettingsRuntimeUpdateSuccessUpdateData } from '../Ai4callTypes';
declare class AssistantAdvancedSettingsRuntimeUpdateSuccessEntity extends Ai4callEntityBase<AssistantAdvancedSettingsRuntimeUpdateSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AssistantAdvancedSettingsRuntimeUpdateSuccessEntity): AssistantAdvancedSettingsRuntimeUpdateSuccessEntity;
    update(this: any, reqdata?: AssistantAdvancedSettingsRuntimeUpdateSuccessUpdateData, ctrl?: Control): Promise<AssistantAdvancedSettingsRuntimeUpdateSuccessEntity>;
}
export { AssistantAdvancedSettingsRuntimeUpdateSuccessEntity };
