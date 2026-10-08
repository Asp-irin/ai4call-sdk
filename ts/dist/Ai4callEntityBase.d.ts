import { inspect } from 'node:util';
import { Ai4callSDK } from './Ai4callSDK';
import { Utility } from './utility/Utility';
import type { Context } from './types';
declare class Ai4callEntityBase<D = any> {
    name: string;
    name_: string;
    Name: string;
    _client: Ai4callSDK;
    _utility: Utility;
    _entopts: any;
    _data: Partial<D>;
    _match: Partial<D>;
    _entctx: Context;
    _deleted: boolean;
    constructor(client: Ai4callSDK, entopts: any);
    markDeleted(this: any): void;
    deleted(this: any): boolean;
    entopts(): any;
    client(): Ai4callSDK;
    data(this: any, data?: Partial<D>): D;
    match(this: any, match?: Partial<D>): Partial<D>;
    stream(this: any, action: string, args?: any, callopts?: any): AsyncGenerator<any>;
    toJSON(): any;
    toString(): string;
    [inspect.custom](): string;
    _unexpected(this: any, ctx: Context, err: any): any;
}
export { Ai4callEntityBase };
