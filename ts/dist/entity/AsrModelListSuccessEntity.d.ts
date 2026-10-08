import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AsrModelListSuccess, AsrModelListSuccessLoadMatch } from '../Ai4callTypes';
declare class AsrModelListSuccessEntity extends Ai4callEntityBase<AsrModelListSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AsrModelListSuccessEntity): AsrModelListSuccessEntity;
    load(this: any, reqmatch?: AsrModelListSuccessLoadMatch, ctrl?: Control): Promise<AsrModelListSuccessEntity>;
}
export { AsrModelListSuccessEntity };
