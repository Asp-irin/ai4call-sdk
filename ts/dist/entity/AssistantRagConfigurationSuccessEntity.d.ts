import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AssistantRagConfigurationSuccess, AssistantRagConfigurationSuccessLoadMatch } from '../Ai4callTypes';
declare class AssistantRagConfigurationSuccessEntity extends Ai4callEntityBase<AssistantRagConfigurationSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AssistantRagConfigurationSuccessEntity): AssistantRagConfigurationSuccessEntity;
    load(this: any, reqmatch?: AssistantRagConfigurationSuccessLoadMatch, ctrl?: Control): Promise<AssistantRagConfigurationSuccessEntity>;
}
export { AssistantRagConfigurationSuccessEntity };
