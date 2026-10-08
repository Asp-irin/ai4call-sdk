import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AccountCallLimitsSuccess, AccountCallLimitsSuccessLoadMatch, AccountCallLimitsSuccessUpdateData } from '../Ai4callTypes';
declare class AccountCallLimitsSuccessEntity extends Ai4callEntityBase<AccountCallLimitsSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AccountCallLimitsSuccessEntity): AccountCallLimitsSuccessEntity;
    load(this: any, reqmatch?: AccountCallLimitsSuccessLoadMatch, ctrl?: Control): Promise<AccountCallLimitsSuccessEntity>;
    update(this: any, reqdata?: AccountCallLimitsSuccessUpdateData, ctrl?: Control): Promise<AccountCallLimitsSuccessEntity>;
}
export { AccountCallLimitsSuccessEntity };
