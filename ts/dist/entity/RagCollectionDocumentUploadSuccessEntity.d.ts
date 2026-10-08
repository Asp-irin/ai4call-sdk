import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { RagCollectionDocumentUploadSuccess, RagCollectionDocumentUploadSuccessCreateData } from '../Ai4callTypes';
declare class RagCollectionDocumentUploadSuccessEntity extends Ai4callEntityBase<RagCollectionDocumentUploadSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: RagCollectionDocumentUploadSuccessEntity): RagCollectionDocumentUploadSuccessEntity;
    create(this: any, reqdata?: RagCollectionDocumentUploadSuccessCreateData, ctrl?: Control): Promise<RagCollectionDocumentUploadSuccessEntity>;
}
export { RagCollectionDocumentUploadSuccessEntity };
