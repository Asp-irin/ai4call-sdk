import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { Knowledge, KnowledgeLoadMatch, KnowledgeCreateData, KnowledgeUpdateData, KnowledgeRemoveMatch } from '../Ai4callTypes';
declare class KnowledgeEntity extends Ai4callEntityBase<Knowledge> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: KnowledgeEntity): KnowledgeEntity;
    load(this: any, reqmatch?: KnowledgeLoadMatch, ctrl?: Control): Promise<KnowledgeEntity>;
    create(this: any, reqdata?: KnowledgeCreateData, ctrl?: Control): Promise<KnowledgeEntity>;
    update(this: any, reqdata?: KnowledgeUpdateData, ctrl?: Control): Promise<KnowledgeEntity>;
    remove(this: any, reqmatch?: KnowledgeRemoveMatch, ctrl?: Control): Promise<KnowledgeEntity>;
}
export { KnowledgeEntity };
