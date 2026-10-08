import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { PreCall, PreCallLoadMatch } from '../Ai4callTypes';
declare class PreCallEntity extends Ai4callEntityBase<PreCall> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: PreCallEntity): PreCallEntity;
    load(this: any, reqmatch?: PreCallLoadMatch, ctrl?: Control): Promise<PreCallEntity>;
}
export { PreCallEntity };
