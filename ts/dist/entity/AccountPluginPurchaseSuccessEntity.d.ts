import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AccountPluginPurchaseSuccess, AccountPluginPurchaseSuccessUpdateData } from '../Ai4callTypes';
declare class AccountPluginPurchaseSuccessEntity extends Ai4callEntityBase<AccountPluginPurchaseSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AccountPluginPurchaseSuccessEntity): AccountPluginPurchaseSuccessEntity;
    update(this: any, reqdata?: AccountPluginPurchaseSuccessUpdateData, ctrl?: Control): Promise<AccountPluginPurchaseSuccessEntity>;
}
export { AccountPluginPurchaseSuccessEntity };
