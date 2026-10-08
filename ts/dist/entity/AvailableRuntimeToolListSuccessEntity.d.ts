import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AvailableRuntimeToolListSuccess, AvailableRuntimeToolListSuccessLoadMatch } from '../Ai4callTypes';
declare class AvailableRuntimeToolListSuccessEntity extends Ai4callEntityBase<AvailableRuntimeToolListSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AvailableRuntimeToolListSuccessEntity): AvailableRuntimeToolListSuccessEntity;
    load(this: any, reqmatch?: AvailableRuntimeToolListSuccessLoadMatch, ctrl?: Control): Promise<AvailableRuntimeToolListSuccessEntity>;
}
export { AvailableRuntimeToolListSuccessEntity };
