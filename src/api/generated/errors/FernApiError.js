"use strict";
/**
 * This file was auto-generated by Fern from our API Definition.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FernApiError = void 0;
class FernApiError extends Error {
    constructor(errorName) {
        super();
        this.errorName = errorName;
        Object.setPrototypeOf(this, FernApiError.prototype);
    }
}
exports.FernApiError = FernApiError;
