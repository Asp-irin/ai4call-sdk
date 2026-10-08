import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AssistantSettingsConfigurationSuccess, AssistantSettingsConfigurationSuccessLoadMatch } from '../Ai4callTypes';
declare class AssistantSettingsConfigurationSuccessEntity extends Ai4callEntityBase<AssistantSettingsConfigurationSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AssistantSettingsConfigurationSuccessEntity): AssistantSettingsConfigurationSuccessEntity;
    load(this: any, reqmatch?: AssistantSettingsConfigurationSuccessLoadMatch, ctrl?: Control): Promise<AssistantSettingsConfigurationSuccessEntity>;
}
export { AssistantSettingsConfigurationSuccessEntity };
