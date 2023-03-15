"use strict";
/**
 * This file was auto-generated by Fern from our API Definition.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImdbService = void 0;
const express_1 = __importDefault(require("express"));
const serializers = __importStar(require("../../../../serialization"));
const errors = __importStar(require("../../../../errors"));
class ImdbService {
    methods;
    router;
    constructor(methods, middleware = []) {
        this.methods = methods;
        this.router = express_1.default.Router({ mergeParams: true }).use(express_1.default.json(), ...middleware);
    }
    addMiddleware(handler) {
        this.router.use(handler);
        return this;
    }
    toRouter() {
        this.router.post("/create-movie", async (req, res, next) => {
            const request = await serializers.CreateMovieRequest.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.createMovie(req, {
                        send: async (responseBody) => {
                            res.json(await serializers.MovieId.jsonOrThrow(responseBody, { unrecognizedObjectKeys: "strip" }));
                        },
                        cookie: res.cookie.bind(res),
                        locals: res.locals,
                    });
                    next();
                }
                catch (error) {
                    console.error(error);
                    if (error instanceof errors.FernApiError) {
                        console.warn(`Endpoint 'createMovie' unexpectedly threw ${error.constructor.name}.` +
                            ` If this was intentional, please add ${error.constructor.name} to` +
                            " the endpoint's errors list in your Fern Definition.");
                        await error.send(res);
                    }
                    else {
                        res.status(500).json("Internal Server Error");
                    }
                    next(error);
                }
            }
            else {
                res.status(422).json({
                    errors: request.errors.map((error) => ["request", ...error.path].join(" -> ") + ": " + error.message),
                });
                next(request.errors);
            }
        });
        this.router.get("/:movieId", async (req, res, next) => {
            try {
                await this.methods.getMovie(req, {
                    send: async (responseBody) => {
                        res.json(await serializers.Movie.jsonOrThrow(responseBody, { unrecognizedObjectKeys: "strip" }));
                    },
                    cookie: res.cookie.bind(res),
                    locals: res.locals,
                });
                next();
            }
            catch (error) {
                console.error(error);
                if (error instanceof errors.FernApiError) {
                    switch (error.constructor.name) {
                        case "MovieDoesNotExistError":
                            break;
                        default:
                            console.warn(`Endpoint 'getMovie' unexpectedly threw ${error.constructor.name}.` +
                                ` If this was intentional, please add ${error.constructor.name} to` +
                                " the endpoint's errors list in your Fern Definition.");
                    }
                    await error.send(res);
                }
                else {
                    res.status(500).json("Internal Server Error");
                }
                next(error);
            }
        });
        return this.router;
    }
}
exports.ImdbService = ImdbService;
