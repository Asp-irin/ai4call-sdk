import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { VoiceLlmModelListSuccess, VoiceLlmModelListSuccessLoadMatch } from '../Ai4callTypes';
declare class VoiceLlmModelListSuccessEntity extends Ai4callEntityBase<VoiceLlmModelListSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: VoiceLlmModelListSuccessEntity): VoiceLlmModelListSuccessEntity;
    load(this: any, reqmatch?: VoiceLlmModelListSuccessLoadMatch, ctrl?: Control): Promise<VoiceLlmModelListSuccessEntity>;
}
export { VoiceLlmModelListSuccessEntity };
