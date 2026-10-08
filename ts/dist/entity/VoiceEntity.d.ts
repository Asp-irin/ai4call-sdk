import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { Voice, VoiceLoadMatch } from '../Ai4callTypes';
declare class VoiceEntity extends Ai4callEntityBase<Voice> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: VoiceEntity): VoiceEntity;
    load(this: any, reqmatch?: VoiceLoadMatch, ctrl?: Control): Promise<VoiceEntity>;
}
export { VoiceEntity };
