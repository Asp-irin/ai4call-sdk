import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { RagCollectionDocumentTokenEstimateSuccess, RagCollectionDocumentTokenEstimateSuccessCreateData } from '../Ai4callTypes';
declare class RagCollectionDocumentTokenEstimateSuccessEntity extends Ai4callEntityBase<RagCollectionDocumentTokenEstimateSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: RagCollectionDocumentTokenEstimateSuccessEntity): RagCollectionDocumentTokenEstimateSuccessEntity;
    create(this: any, reqdata?: RagCollectionDocumentTokenEstimateSuccessCreateData, ctrl?: Control): Promise<RagCollectionDocumentTokenEstimateSuccessEntity>;
}
export { RagCollectionDocumentTokenEstimateSuccessEntity };
