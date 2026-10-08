import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { ProviderWalletAssociationsSuccess, ProviderWalletAssociationsSuccessLoadMatch } from '../Ai4callTypes';
declare class ProviderWalletAssociationsSuccessEntity extends Ai4callEntityBase<ProviderWalletAssociationsSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: ProviderWalletAssociationsSuccessEntity): ProviderWalletAssociationsSuccessEntity;
    load(this: any, reqmatch?: ProviderWalletAssociationsSuccessLoadMatch, ctrl?: Control): Promise<ProviderWalletAssociationsSuccessEntity>;
}
export { ProviderWalletAssociationsSuccessEntity };
