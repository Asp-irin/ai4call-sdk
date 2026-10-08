import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { RagCollectionDeleteSuccess, RagCollectionDeleteSuccessLoadMatch, RagCollectionDeleteSuccessCreateData, RagCollectionDeleteSuccessRemoveMatch } from '../Ai4callTypes';
declare class RagCollectionDeleteSuccessEntity extends Ai4callEntityBase<RagCollectionDeleteSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: RagCollectionDeleteSuccessEntity): RagCollectionDeleteSuccessEntity;
    load(this: any, reqmatch?: RagCollectionDeleteSuccessLoadMatch, ctrl?: Control): Promise<RagCollectionDeleteSuccessEntity>;
    create(this: any, reqdata?: RagCollectionDeleteSuccessCreateData, ctrl?: Control): Promise<RagCollectionDeleteSuccessEntity>;
    remove(this: any, reqmatch?: RagCollectionDeleteSuccessRemoveMatch, ctrl?: Control): Promise<RagCollectionDeleteSuccessEntity>;
}
export { RagCollectionDeleteSuccessEntity };
