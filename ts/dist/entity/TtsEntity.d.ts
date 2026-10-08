import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { Tts, TtsLoadMatch } from '../Ai4callTypes';
declare class TtsEntity extends Ai4callEntityBase<Tts> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: TtsEntity): TtsEntity;
    load(this: any, reqmatch?: TtsLoadMatch, ctrl?: Control): Promise<TtsEntity>;
}
export { TtsEntity };
