import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AssistantPrecallMcpRuntimeSuccess, AssistantPrecallMcpRuntimeSuccessLoadMatch, AssistantPrecallMcpRuntimeSuccessUpdateData } from '../Ai4callTypes';
declare class AssistantPrecallMcpRuntimeSuccessEntity extends Ai4callEntityBase<AssistantPrecallMcpRuntimeSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AssistantPrecallMcpRuntimeSuccessEntity): AssistantPrecallMcpRuntimeSuccessEntity;
    load(this: any, reqmatch?: AssistantPrecallMcpRuntimeSuccessLoadMatch, ctrl?: Control): Promise<AssistantPrecallMcpRuntimeSuccessEntity>;
    update(this: any, reqdata?: AssistantPrecallMcpRuntimeSuccessUpdateData, ctrl?: Control): Promise<AssistantPrecallMcpRuntimeSuccessEntity>;
}
export { AssistantPrecallMcpRuntimeSuccessEntity };
