import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AssistantHangupConfigurationSuccess, AssistantHangupConfigurationSuccessLoadMatch } from '../Ai4callTypes';
declare class AssistantHangupConfigurationSuccessEntity extends Ai4callEntityBase<AssistantHangupConfigurationSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AssistantHangupConfigurationSuccessEntity): AssistantHangupConfigurationSuccessEntity;
    load(this: any, reqmatch?: AssistantHangupConfigurationSuccessLoadMatch, ctrl?: Control): Promise<AssistantHangupConfigurationSuccessEntity>;
}
export { AssistantHangupConfigurationSuccessEntity };
