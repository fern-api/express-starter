/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors/index";
import express from "express";

export class MovieDoesNotExistError extends errors.FernApiError {
    constructor() {
        super("MovieDoesNotExistError");
        Object.setPrototypeOf(this, MovieDoesNotExistError.prototype);
    }

    public async send(res: express.Response): Promise<void> {
        res.sendStatus(404);
    }
}
