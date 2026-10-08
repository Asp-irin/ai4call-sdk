import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AccountPluginInstanceSuccess, AccountPluginInstanceSuccessLoadMatch, AccountPluginInstanceSuccessCreateData, AccountPluginInstanceSuccessUpdateData, AccountPluginInstanceSuccessRemoveMatch } from '../Ai4callTypes';
declare class AccountPluginInstanceSuccessEntity extends Ai4callEntityBase<AccountPluginInstanceSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AccountPluginInstanceSuccessEntity): AccountPluginInstanceSuccessEntity;
    load(this: any, reqmatch?: AccountPluginInstanceSuccessLoadMatch, ctrl?: Control): Promise<AccountPluginInstanceSuccessEntity>;
    create(this: any, reqdata?: AccountPluginInstanceSuccessCreateData, ctrl?: Control): Promise<AccountPluginInstanceSuccessEntity>;
    update(this: any, reqdata?: AccountPluginInstanceSuccessUpdateData, ctrl?: Control): Promise<AccountPluginInstanceSuccessEntity>;
    remove(this: any, reqmatch?: AccountPluginInstanceSuccessRemoveMatch, ctrl?: Control): Promise<AccountPluginInstanceSuccessEntity>;
}
export { AccountPluginInstanceSuccessEntity };
