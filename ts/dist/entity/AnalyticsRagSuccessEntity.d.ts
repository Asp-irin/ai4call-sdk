import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { AnalyticsRagSuccess, AnalyticsRagSuccessLoadMatch } from '../Ai4callTypes';
declare class AnalyticsRagSuccessEntity extends Ai4callEntityBase<AnalyticsRagSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: AnalyticsRagSuccessEntity): AnalyticsRagSuccessEntity;
    load(this: any, reqmatch?: AnalyticsRagSuccessLoadMatch, ctrl?: Control): Promise<AnalyticsRagSuccessEntity>;
}
export { AnalyticsRagSuccessEntity };
