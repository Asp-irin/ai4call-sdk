import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AnalyticsPreCallSuccess, AnalyticsPreCallSuccessLoadMatch } from '../Ai4callTypes';
declare class AnalyticsPreCallSuccessEntity extends Ai4callEntityBase<AnalyticsPreCallSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AnalyticsPreCallSuccessEntity): AnalyticsPreCallSuccessEntity;
    load(this: any, reqmatch?: AnalyticsPreCallSuccessLoadMatch, ctrl?: Control): Promise<AnalyticsPreCallSuccessEntity>;
}
export { AnalyticsPreCallSuccessEntity };
