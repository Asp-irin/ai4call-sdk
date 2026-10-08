import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { VoiceLlm, VoiceLlmLoadMatch } from '../Ai4callTypes';
declare class VoiceLlmEntity extends Ai4callEntityBase<VoiceLlm> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: VoiceLlmEntity): VoiceLlmEntity;
    load(this: any, reqmatch?: VoiceLlmLoadMatch, ctrl?: Control): Promise<VoiceLlmEntity>;
}
export { VoiceLlmEntity };
