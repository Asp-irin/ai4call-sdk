import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AssistantNumberRoutingCatalogSuccess, AssistantNumberRoutingCatalogSuccessLoadMatch } from '../Ai4callTypes';
declare class AssistantNumberRoutingCatalogSuccessEntity extends Ai4callEntityBase<AssistantNumberRoutingCatalogSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AssistantNumberRoutingCatalogSuccessEntity): AssistantNumberRoutingCatalogSuccessEntity;
    load(this: any, reqmatch?: AssistantNumberRoutingCatalogSuccessLoadMatch, ctrl?: Control): Promise<AssistantNumberRoutingCatalogSuccessEntity>;
}
export { AssistantNumberRoutingCatalogSuccessEntity };
