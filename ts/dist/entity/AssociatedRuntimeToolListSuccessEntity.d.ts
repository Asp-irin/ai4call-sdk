import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AssociatedRuntimeToolListSuccess, AssociatedRuntimeToolListSuccessLoadMatch } from '../Ai4callTypes';
declare class AssociatedRuntimeToolListSuccessEntity extends Ai4callEntityBase<AssociatedRuntimeToolListSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AssociatedRuntimeToolListSuccessEntity): AssociatedRuntimeToolListSuccessEntity;
    load(this: any, reqmatch?: AssociatedRuntimeToolListSuccessLoadMatch, ctrl?: Control): Promise<AssociatedRuntimeToolListSuccessEntity>;
}
export { AssociatedRuntimeToolListSuccessEntity };
