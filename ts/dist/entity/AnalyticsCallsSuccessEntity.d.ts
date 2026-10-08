import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AnalyticsCallsSuccess, AnalyticsCallsSuccessLoadMatch } from '../Ai4callTypes';
declare class AnalyticsCallsSuccessEntity extends Ai4callEntityBase<AnalyticsCallsSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AnalyticsCallsSuccessEntity): AnalyticsCallsSuccessEntity;
    load(this: any, reqmatch?: AnalyticsCallsSuccessLoadMatch, ctrl?: Control): Promise<AnalyticsCallsSuccessEntity>;
}
export { AnalyticsCallsSuccessEntity };
