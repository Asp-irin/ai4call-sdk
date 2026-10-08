import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { Llm, LlmLoadMatch } from '../Ai4callTypes';
declare class LlmEntity extends Ai4callEntityBase<Llm> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: LlmEntity): LlmEntity;
    load(this: any, reqmatch?: LlmLoadMatch, ctrl?: Control): Promise<LlmEntity>;
}
export { LlmEntity };
