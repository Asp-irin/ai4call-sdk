import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { LlmModelListSuccess, LlmModelListSuccessLoadMatch } from '../Ai4callTypes';
declare class LlmModelListSuccessEntity extends Ai4callEntityBase<LlmModelListSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: LlmModelListSuccessEntity): LlmModelListSuccessEntity;
    load(this: any, reqmatch?: LlmModelListSuccessLoadMatch, ctrl?: Control): Promise<LlmModelListSuccessEntity>;
}
export { LlmModelListSuccessEntity };
