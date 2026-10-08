"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ai4callError = void 0;
class Ai4callError extends Error {
    isAi4callError = true;
    sdk = 'Ai4call';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.Ai4callError = Ai4callError;
//# sourceMappingURL=Ai4callError.js.map