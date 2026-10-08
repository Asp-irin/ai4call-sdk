import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AnalyticsToolResponsesSuccess, AnalyticsToolResponsesSuccessLoadMatch } from '../Ai4callTypes';
declare class AnalyticsToolResponsesSuccessEntity extends Ai4callEntityBase<AnalyticsToolResponsesSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AnalyticsToolResponsesSuccessEntity): AnalyticsToolResponsesSuccessEntity;
    load(this: any, reqmatch?: AnalyticsToolResponsesSuccessLoadMatch, ctrl?: Control): Promise<AnalyticsToolResponsesSuccessEntity>;
}
export { AnalyticsToolResponsesSuccessEntity };
