import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { PublicRagSearchSuccess, PublicRagSearchSuccessCreateData } from '../Ai4callTypes';
declare class PublicRagSearchSuccessEntity extends Ai4callEntityBase<PublicRagSearchSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: PublicRagSearchSuccessEntity): PublicRagSearchSuccessEntity;
    create(this: any, reqdata?: PublicRagSearchSuccessCreateData, ctrl?: Control): Promise<PublicRagSearchSuccessEntity>;
}
export { PublicRagSearchSuccessEntity };
