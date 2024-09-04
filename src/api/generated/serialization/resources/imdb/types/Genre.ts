/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernApi from "../../../../api/index";
import * as core from "../../../../core";

export const Genre: core.serialization.Schema<serializers.Genre.Raw, FernApi.Genre> = core.serialization.enum_([
    "HORROR",
    "COMEDY",
    "",
]);

export declare namespace Genre {
    type Raw = "HORROR" | "COMEDY" | "";
}