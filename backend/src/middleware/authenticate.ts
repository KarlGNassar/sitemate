import { Response, Request, NextFunction } from "express";
import { logger } from "../lib/logger";
import { ErrorEnum } from "../types/errors.enum";
import { CustomError } from "../types/custom-error";

export function authenticate(req: Request, res: Response, next: NextFunction) {
    let signature = req.headers["x-sitemate-signature"];

    if (signature !== process.env.SITEMATE_SIGNATURE) {
        logger.error("invalid signature", signature);
        throw new CustomError(
            "Invalid Signature",
            ErrorEnum.SM_INVALID_SIGNATURE
        );
    }
    next();
}
