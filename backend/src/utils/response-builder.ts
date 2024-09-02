import { TResponse } from "../types/response.type";

export function responseBuilder(
    code: number,
    message: string,
    data?: any,
    errorCode?: string
): TResponse {
    return { code, message, data, errorCode };
}
