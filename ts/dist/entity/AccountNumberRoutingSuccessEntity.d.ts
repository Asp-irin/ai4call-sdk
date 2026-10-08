import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AccountNumberRoutingSuccess, AccountNumberRoutingSuccessLoadMatch, AccountNumberRoutingSuccessUpdateData } from '../Ai4callTypes';
declare class AccountNumberRoutingSuccessEntity extends Ai4callEntityBase<AccountNumberRoutingSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AccountNumberRoutingSuccessEntity): AccountNumberRoutingSuccessEntity;
    load(this: any, reqmatch?: AccountNumberRoutingSuccessLoadMatch, ctrl?: Control): Promise<AccountNumberRoutingSuccessEntity>;
    update(this: any, reqdata?: AccountNumberRoutingSuccessUpdateData, ctrl?: Control): Promise<AccountNumberRoutingSuccessEntity>;
}
export { AccountNumberRoutingSuccessEntity };
