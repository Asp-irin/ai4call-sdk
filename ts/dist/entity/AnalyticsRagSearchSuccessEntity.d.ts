import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AnalyticsRagSearchSuccess, AnalyticsRagSearchSuccessLoadMatch } from '../Ai4callTypes';
declare class AnalyticsRagSearchSuccessEntity extends Ai4callEntityBase<AnalyticsRagSearchSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AnalyticsRagSearchSuccessEntity): AnalyticsRagSearchSuccessEntity;
    load(this: any, reqmatch?: AnalyticsRagSearchSuccessLoadMatch, ctrl?: Control): Promise<AnalyticsRagSearchSuccessEntity>;
}
export { AnalyticsRagSearchSuccessEntity };
