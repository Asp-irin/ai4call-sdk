import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { PortalLoginSuccess, PortalLoginSuccessCreateData } from '../Ai4callTypes';
declare class PortalLoginSuccessEntity extends Ai4callEntityBase<PortalLoginSuccess> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: PortalLoginSuccessEntity): PortalLoginSuccessEntity;
    create(this: any, reqdata?: PortalLoginSuccessCreateData, ctrl?: Control): Promise<PortalLoginSuccessEntity>;
}
export { PortalLoginSuccessEntity };
