import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AssistantNumberRoutingRuntimeSuccess, AssistantNumberRoutingRuntimeSuccessUpdateData } from '../Ai4callTypes';
declare class AssistantNumberRoutingRuntimeSuccessEntity extends Ai4callEntityBase<AssistantNumberRoutingRuntimeSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AssistantNumberRoutingRuntimeSuccessEntity): AssistantNumberRoutingRuntimeSuccessEntity;
    update(this: any, reqdata?: AssistantNumberRoutingRuntimeSuccessUpdateData, ctrl?: Control): Promise<AssistantNumberRoutingRuntimeSuccessEntity>;
}
export { AssistantNumberRoutingRuntimeSuccessEntity };
