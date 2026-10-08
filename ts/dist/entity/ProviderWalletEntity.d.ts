import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { ProviderWallet, ProviderWalletLoadMatch, ProviderWalletCreateData, ProviderWalletUpdateData, ProviderWalletRemoveMatch } from '../Ai4callTypes';
declare class ProviderWalletEntity extends Ai4callEntityBase<ProviderWallet> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: ProviderWalletEntity): ProviderWalletEntity;
    load(this: any, reqmatch?: ProviderWalletLoadMatch, ctrl?: Control): Promise<ProviderWalletEntity>;
    create(this: any, reqdata?: ProviderWalletCreateData, ctrl?: Control): Promise<ProviderWalletEntity>;
    update(this: any, reqdata?: ProviderWalletUpdateData, ctrl?: Control): Promise<ProviderWalletEntity>;
    remove(this: any, reqmatch?: ProviderWalletRemoveMatch, ctrl?: Control): Promise<ProviderWalletEntity>;
}
export { ProviderWalletEntity };
