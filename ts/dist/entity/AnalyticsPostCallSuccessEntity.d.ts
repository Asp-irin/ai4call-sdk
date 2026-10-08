import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AnalyticsPostCallSuccess, AnalyticsPostCallSuccessLoadMatch } from '../Ai4callTypes';
declare class AnalyticsPostCallSuccessEntity extends Ai4callEntityBase<AnalyticsPostCallSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AnalyticsPostCallSuccessEntity): AnalyticsPostCallSuccessEntity;
    load(this: any, reqmatch?: AnalyticsPostCallSuccessLoadMatch, ctrl?: Control): Promise<AnalyticsPostCallSuccessEntity>;
}
export { AnalyticsPostCallSuccessEntity };
