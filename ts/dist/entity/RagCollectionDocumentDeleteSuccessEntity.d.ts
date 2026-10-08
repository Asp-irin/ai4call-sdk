import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { RagCollectionDocumentDeleteSuccess, RagCollectionDocumentDeleteSuccessRemoveMatch } from '../Ai4callTypes';
declare class RagCollectionDocumentDeleteSuccessEntity extends Ai4callEntityBase<RagCollectionDocumentDeleteSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: RagCollectionDocumentDeleteSuccessEntity): RagCollectionDocumentDeleteSuccessEntity;
    remove(this: any, reqmatch?: RagCollectionDocumentDeleteSuccessRemoveMatch, ctrl?: Control): Promise<RagCollectionDocumentDeleteSuccessEntity>;
}
export { RagCollectionDocumentDeleteSuccessEntity };
