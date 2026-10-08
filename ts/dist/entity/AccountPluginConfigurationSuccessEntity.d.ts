import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AccountPluginConfigurationSuccess, AccountPluginConfigurationSuccessLoadMatch, AccountPluginConfigurationSuccessUpdateData } from '../Ai4callTypes';
declare class AccountPluginConfigurationSuccessEntity extends Ai4callEntityBase<AccountPluginConfigurationSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AccountPluginConfigurationSuccessEntity): AccountPluginConfigurationSuccessEntity;
    load(this: any, reqmatch?: AccountPluginConfigurationSuccessLoadMatch, ctrl?: Control): Promise<AccountPluginConfigurationSuccessEntity>;
    update(this: any, reqdata?: AccountPluginConfigurationSuccessUpdateData, ctrl?: Control): Promise<AccountPluginConfigurationSuccessEntity>;
}
export { AccountPluginConfigurationSuccessEntity };
