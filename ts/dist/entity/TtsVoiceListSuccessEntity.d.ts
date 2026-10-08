import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { TtsVoiceListSuccess, TtsVoiceListSuccessLoadMatch } from '../Ai4callTypes';
declare class TtsVoiceListSuccessEntity extends Ai4callEntityBase<TtsVoiceListSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: TtsVoiceListSuccessEntity): TtsVoiceListSuccessEntity;
    load(this: any, reqmatch?: TtsVoiceListSuccessLoadMatch, ctrl?: Control): Promise<TtsVoiceListSuccessEntity>;
}
export { TtsVoiceListSuccessEntity };
