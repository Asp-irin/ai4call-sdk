import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AssistantHangupSchemaRuntimeSuccess, AssistantHangupSchemaRuntimeSuccessLoadMatch, AssistantHangupSchemaRuntimeSuccessUpdateData } from '../Ai4callTypes';
declare class AssistantHangupSchemaRuntimeSuccessEntity extends Ai4callEntityBase<AssistantHangupSchemaRuntimeSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AssistantHangupSchemaRuntimeSuccessEntity): AssistantHangupSchemaRuntimeSuccessEntity;
    load(this: any, reqmatch?: AssistantHangupSchemaRuntimeSuccessLoadMatch, ctrl?: Control): Promise<AssistantHangupSchemaRuntimeSuccessEntity>;
    update(this: any, reqdata?: AssistantHangupSchemaRuntimeSuccessUpdateData, ctrl?: Control): Promise<AssistantHangupSchemaRuntimeSuccessEntity>;
}
export { AssistantHangupSchemaRuntimeSuccessEntity };
