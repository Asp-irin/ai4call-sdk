import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AnalyticsSmsSuccess, AnalyticsSmsSuccessLoadMatch } from '../Ai4callTypes';
declare class AnalyticsSmsSuccessEntity extends Ai4callEntityBase<AnalyticsSmsSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AnalyticsSmsSuccessEntity): AnalyticsSmsSuccessEntity;
    load(this: any, reqmatch?: AnalyticsSmsSuccessLoadMatch, ctrl?: Control): Promise<AnalyticsSmsSuccessEntity>;
}
export { AnalyticsSmsSuccessEntity };
