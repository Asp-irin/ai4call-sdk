import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AnalyticsRechargesSuccess, AnalyticsRechargesSuccessLoadMatch } from '../Ai4callTypes';
declare class AnalyticsRechargesSuccessEntity extends Ai4callEntityBase<AnalyticsRechargesSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AnalyticsRechargesSuccessEntity): AnalyticsRechargesSuccessEntity;
    load(this: any, reqmatch?: AnalyticsRechargesSuccessLoadMatch, ctrl?: Control): Promise<AnalyticsRechargesSuccessEntity>;
}
export { AnalyticsRechargesSuccessEntity };
