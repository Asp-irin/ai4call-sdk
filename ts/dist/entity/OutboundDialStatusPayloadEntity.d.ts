import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { OutboundDialStatusPayload, OutboundDialStatusPayloadLoadMatch } from '../Ai4callTypes';
declare class OutboundDialStatusPayloadEntity extends Ai4callEntityBase<OutboundDialStatusPayload> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: OutboundDialStatusPayloadEntity): OutboundDialStatusPayloadEntity;
    load(this: any, reqmatch?: OutboundDialStatusPayloadLoadMatch, ctrl?: Control): Promise<OutboundDialStatusPayloadEntity>;
}
export { OutboundDialStatusPayloadEntity };
