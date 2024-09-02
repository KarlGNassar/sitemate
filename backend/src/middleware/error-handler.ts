import { Response, Request, NextFunction, response } from "express";
import { logger } from "../lib/logger";
import { responseBuilder } from "../utils/response-builder";
import { ErrorEnum } from "../types/errors.enum";

export function errorHandler(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) {
    logger.error(err);

    if (err.errorCode === ErrorEnum.SM_NOT_FOUND) {
        return res
            .status(404)
            .json(responseBuilder(404, err.message, undefined, err.errorCode));
    }

    if (err.errorCode === ErrorEnum.SM_INVALID_SIGNATURE) {
        return res
            .status(401)
            .json(responseBuilder(401, err.message, undefined, err.errorCode));
    }

    if (err.errorCode === ErrorEnum.SM_DUPLICATE_KEY) {
        return res
            .status(422)
            .json(responseBuilder(422, err.message, undefined, err.errorCode));
    }

    // mongo duplicate key
    if (err.code === 11000) {
        return res
            .status(409)
            .json(
                responseBuilder(
                    409,
                    err.message,
                    undefined,
                    ErrorEnum.SM_DUPLICATE_KEY
                )
            );
    }

    return res
        .status(500)
        .json(
            responseBuilder(
                500,
                "An unexpected error occured",
                undefined,
                ErrorEnum.SM_INTERNAL_SERVER_ERROR
            )
        );
}
