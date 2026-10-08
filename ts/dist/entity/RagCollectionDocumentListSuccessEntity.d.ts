import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { RagCollectionDocumentListSuccess, RagCollectionDocumentListSuccessLoadMatch } from '../Ai4callTypes';
declare class RagCollectionDocumentListSuccessEntity extends Ai4callEntityBase<RagCollectionDocumentListSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: RagCollectionDocumentListSuccessEntity): RagCollectionDocumentListSuccessEntity;
    load(this: any, reqmatch?: RagCollectionDocumentListSuccessLoadMatch, ctrl?: Control): Promise<RagCollectionDocumentListSuccessEntity>;
}
export { RagCollectionDocumentListSuccessEntity };
