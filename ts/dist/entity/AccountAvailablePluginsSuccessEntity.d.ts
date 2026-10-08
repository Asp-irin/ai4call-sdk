import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AccountAvailablePluginsSuccess, AccountAvailablePluginsSuccessLoadMatch } from '../Ai4callTypes';
declare class AccountAvailablePluginsSuccessEntity extends Ai4callEntityBase<AccountAvailablePluginsSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AccountAvailablePluginsSuccessEntity): AccountAvailablePluginsSuccessEntity;
    load(this: any, reqmatch?: AccountAvailablePluginsSuccessLoadMatch, ctrl?: Control): Promise<AccountAvailablePluginsSuccessEntity>;
}
export { AccountAvailablePluginsSuccessEntity };
