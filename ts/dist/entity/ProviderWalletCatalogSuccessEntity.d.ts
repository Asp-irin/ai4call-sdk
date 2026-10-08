import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { ProviderWalletCatalogSuccess, ProviderWalletCatalogSuccessLoadMatch } from '../Ai4callTypes';
declare class ProviderWalletCatalogSuccessEntity extends Ai4callEntityBase<ProviderWalletCatalogSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: ProviderWalletCatalogSuccessEntity): ProviderWalletCatalogSuccessEntity;
    load(this: any, reqmatch?: ProviderWalletCatalogSuccessLoadMatch, ctrl?: Control): Promise<ProviderWalletCatalogSuccessEntity>;
}
export { ProviderWalletCatalogSuccessEntity };
