import { Context } from './Context';
declare class Ai4callError extends Error {
    isAi4callError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { Ai4callError };
