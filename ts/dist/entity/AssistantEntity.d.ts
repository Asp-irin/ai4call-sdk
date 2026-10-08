import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { Assistant, AssistantLoadMatch, AssistantCreateData, AssistantUpdateData, AssistantRemoveMatch } from '../Ai4callTypes';
declare class AssistantEntity extends Ai4callEntityBase<Assistant> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AssistantEntity): AssistantEntity;
    load(this: any, reqmatch?: AssistantLoadMatch, ctrl?: Control): Promise<AssistantEntity>;
    create(this: any, reqdata?: AssistantCreateData, ctrl?: Control): Promise<AssistantEntity>;
    update(this: any, reqdata?: AssistantUpdateData, ctrl?: Control): Promise<AssistantEntity>;
    remove(this: any, reqmatch?: AssistantRemoveMatch, ctrl?: Control): Promise<AssistantEntity>;
}
export { AssistantEntity };
