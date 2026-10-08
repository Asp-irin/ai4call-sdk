import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AssistantPostcallMcpRuntimeSuccess, AssistantPostcallMcpRuntimeSuccessLoadMatch, AssistantPostcallMcpRuntimeSuccessUpdateData } from '../Ai4callTypes';
declare class AssistantPostcallMcpRuntimeSuccessEntity extends Ai4callEntityBase<AssistantPostcallMcpRuntimeSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AssistantPostcallMcpRuntimeSuccessEntity): AssistantPostcallMcpRuntimeSuccessEntity;
    load(this: any, reqmatch?: AssistantPostcallMcpRuntimeSuccessLoadMatch, ctrl?: Control): Promise<AssistantPostcallMcpRuntimeSuccessEntity>;
    update(this: any, reqdata?: AssistantPostcallMcpRuntimeSuccessUpdateData, ctrl?: Control): Promise<AssistantPostcallMcpRuntimeSuccessEntity>;
}
export { AssistantPostcallMcpRuntimeSuccessEntity };
