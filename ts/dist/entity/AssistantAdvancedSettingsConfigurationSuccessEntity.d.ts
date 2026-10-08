import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AssistantAdvancedSettingsConfigurationSuccess, AssistantAdvancedSettingsConfigurationSuccessLoadMatch } from '../Ai4callTypes';
declare class AssistantAdvancedSettingsConfigurationSuccessEntity extends Ai4callEntityBase<AssistantAdvancedSettingsConfigurationSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AssistantAdvancedSettingsConfigurationSuccessEntity): AssistantAdvancedSettingsConfigurationSuccessEntity;
    load(this: any, reqmatch?: AssistantAdvancedSettingsConfigurationSuccessLoadMatch, ctrl?: Control): Promise<AssistantAdvancedSettingsConfigurationSuccessEntity>;
}
export { AssistantAdvancedSettingsConfigurationSuccessEntity };
