import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AccountAllowedIpsSuccess, AccountAllowedIpsSuccessLoadMatch, AccountAllowedIpsSuccessUpdateData } from '../Ai4callTypes';
declare class AccountAllowedIpsSuccessEntity extends Ai4callEntityBase<AccountAllowedIpsSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AccountAllowedIpsSuccessEntity): AccountAllowedIpsSuccessEntity;
    load(this: any, reqmatch?: AccountAllowedIpsSuccessLoadMatch, ctrl?: Control): Promise<AccountAllowedIpsSuccessEntity>;
    update(this: any, reqdata?: AccountAllowedIpsSuccessUpdateData, ctrl?: Control): Promise<AccountAllowedIpsSuccessEntity>;
}
export { AccountAllowedIpsSuccessEntity };
