import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { Asr, AsrLoadMatch } from '../Ai4callTypes';
declare class AsrEntity extends Ai4callEntityBase<Asr> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AsrEntity): AsrEntity;
    load(this: any, reqmatch?: AsrLoadMatch, ctrl?: Control): Promise<AsrEntity>;
}
export { AsrEntity };
