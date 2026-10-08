import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AssistantDtmfConfigurationSuccess, AssistantDtmfConfigurationSuccessLoadMatch } from '../Ai4callTypes';
declare class AssistantDtmfConfigurationSuccessEntity extends Ai4callEntityBase<AssistantDtmfConfigurationSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AssistantDtmfConfigurationSuccessEntity): AssistantDtmfConfigurationSuccessEntity;
    load(this: any, reqmatch?: AssistantDtmfConfigurationSuccessLoadMatch, ctrl?: Control): Promise<AssistantDtmfConfigurationSuccessEntity>;
}
export { AssistantDtmfConfigurationSuccessEntity };
