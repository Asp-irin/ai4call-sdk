import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { OutboundCallAcceptedSuccess, OutboundCallAcceptedSuccessCreateData } from '../Ai4callTypes';
declare class OutboundCallAcceptedSuccessEntity extends Ai4callEntityBase<OutboundCallAcceptedSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: OutboundCallAcceptedSuccessEntity): OutboundCallAcceptedSuccessEntity;
    create(this: any, reqdata?: OutboundCallAcceptedSuccessCreateData, ctrl?: Control): Promise<OutboundCallAcceptedSuccessEntity>;
}
export { OutboundCallAcceptedSuccessEntity };
