import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { OutboundCall, OutboundCallCreateData } from '../Ai4callTypes';
declare class OutboundCallEntity extends Ai4callEntityBase<OutboundCall> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: OutboundCallEntity): OutboundCallEntity;
    create(this: any, reqdata?: OutboundCallCreateData, ctrl?: Control): Promise<OutboundCallEntity>;
}
export { OutboundCallEntity };
