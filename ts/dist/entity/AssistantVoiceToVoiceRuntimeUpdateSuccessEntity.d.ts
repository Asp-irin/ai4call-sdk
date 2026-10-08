import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AssistantVoiceToVoiceRuntimeUpdateSuccess, AssistantVoiceToVoiceRuntimeUpdateSuccessUpdateData } from '../Ai4callTypes';
declare class AssistantVoiceToVoiceRuntimeUpdateSuccessEntity extends Ai4callEntityBase<AssistantVoiceToVoiceRuntimeUpdateSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AssistantVoiceToVoiceRuntimeUpdateSuccessEntity): AssistantVoiceToVoiceRuntimeUpdateSuccessEntity;
    update(this: any, reqdata?: AssistantVoiceToVoiceRuntimeUpdateSuccessUpdateData, ctrl?: Control): Promise<AssistantVoiceToVoiceRuntimeUpdateSuccessEntity>;
}
export { AssistantVoiceToVoiceRuntimeUpdateSuccessEntity };
