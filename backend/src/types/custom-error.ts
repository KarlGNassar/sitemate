import { ErrorEnum } from "./errors.enum";

export class CustomError extends Error {
    errorCode: ErrorEnum;
    constructor(message: string, errorCode: ErrorEnum) {
        super(message);
        this.errorCode = errorCode;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
