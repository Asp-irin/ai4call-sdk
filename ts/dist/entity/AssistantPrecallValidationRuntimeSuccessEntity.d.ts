import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AssistantPrecallValidationRuntimeSuccess, AssistantPrecallValidationRuntimeSuccessLoadMatch, AssistantPrecallValidationRuntimeSuccessUpdateData } from '../Ai4callTypes';
declare class AssistantPrecallValidationRuntimeSuccessEntity extends Ai4callEntityBase<AssistantPrecallValidationRuntimeSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AssistantPrecallValidationRuntimeSuccessEntity): AssistantPrecallValidationRuntimeSuccessEntity;
    load(this: any, reqmatch?: AssistantPrecallValidationRuntimeSuccessLoadMatch, ctrl?: Control): Promise<AssistantPrecallValidationRuntimeSuccessEntity>;
    update(this: any, reqdata?: AssistantPrecallValidationRuntimeSuccessUpdateData, ctrl?: Control): Promise<AssistantPrecallValidationRuntimeSuccessEntity>;
}
export { AssistantPrecallValidationRuntimeSuccessEntity };
