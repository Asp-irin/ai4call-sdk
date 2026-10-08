import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { RuntimeBinding, RuntimeBindingLoadMatch } from '../Ai4callTypes';
declare class RuntimeBindingEntity extends Ai4callEntityBase<RuntimeBinding> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: RuntimeBindingEntity): RuntimeBindingEntity;
    load(this: any, reqmatch?: RuntimeBindingLoadMatch, ctrl?: Control): Promise<RuntimeBindingEntity>;
}
export { RuntimeBindingEntity };
