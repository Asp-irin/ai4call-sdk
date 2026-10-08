import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { RagCollectionDocumentUploadStatusSuccess, RagCollectionDocumentUploadStatusSuccessLoadMatch } from '../Ai4callTypes';
declare class RagCollectionDocumentUploadStatusSuccessEntity extends Ai4callEntityBase<RagCollectionDocumentUploadStatusSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: RagCollectionDocumentUploadStatusSuccessEntity): RagCollectionDocumentUploadStatusSuccessEntity;
    load(this: any, reqmatch?: RagCollectionDocumentUploadStatusSuccessLoadMatch, ctrl?: Control): Promise<RagCollectionDocumentUploadStatusSuccessEntity>;
}
export { RagCollectionDocumentUploadStatusSuccessEntity };
