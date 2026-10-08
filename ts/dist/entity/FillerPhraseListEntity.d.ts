import { Ai4callEntityBase } from '../Ai4callEntityBase';
import type { Ai4callSDK } from '../Ai4callSDK';
import type { Control } from '../types';
import type { FillerPhraseList, FillerPhraseListLoadMatch, FillerPhraseListCreateData, FillerPhraseListUpdateData, FillerPhraseListRemoveMatch } from '../Ai4callTypes';
declare class FillerPhraseListEntity extends Ai4callEntityBase<FillerPhraseList> {
    constructor(client: Ai4callSDK, entopts: any);
    make(this: FillerPhraseListEntity): FillerPhraseListEntity;
    load(this: any, reqmatch?: FillerPhraseListLoadMatch, ctrl?: Control): Promise<FillerPhraseListEntity>;
    create(this: any, reqdata?: FillerPhraseListCreateData, ctrl?: Control): Promise<FillerPhraseListEntity>;
    update(this: any, reqdata?: FillerPhraseListUpdateData, ctrl?: Control): Promise<FillerPhraseListEntity>;
    remove(this: any, reqmatch?: FillerPhraseListRemoveMatch, ctrl?: Control): Promise<FillerPhraseListEntity>;
}
export { FillerPhraseListEntity };
