import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AnalyticsCallsOutboundSuccess, AnalyticsCallsOutboundSuccessLoadMatch } from '../Ai4callTypes';
declare class AnalyticsCallsOutboundSuccessEntity extends Ai4callEntityBase<AnalyticsCallsOutboundSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AnalyticsCallsOutboundSuccessEntity): AnalyticsCallsOutboundSuccessEntity;
    load(this: any, reqmatch?: AnalyticsCallsOutboundSuccessLoadMatch, ctrl?: Control): Promise<AnalyticsCallsOutboundSuccessEntity>;
}
export { AnalyticsCallsOutboundSuccessEntity };
