import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AudioToAudio, AudioToAudioLoadMatch } from '../Ai4callTypes';
declare class AudioToAudioEntity extends Ai4callEntityBase<AudioToAudio> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AudioToAudioEntity): AudioToAudioEntity;
    load(this: any, reqmatch?: AudioToAudioLoadMatch, ctrl?: Control): Promise<AudioToAudioEntity>;
}
export { AudioToAudioEntity };
