import pino from "pino";
import pinoHttp from "pino-http";
import { format } from "date-fns";

const pinoLogger = pino({
    transport: {
        target: "pino/file",
        options: {
            mkdir: true,
            destination: `logs/sitemate_logs.log`,
        },
    },
    base: undefined,
    timestamp: () => `,"time":"${format(new Date(), "yyyy-MM-dd HH:mm:ss")}"`,
});

export const logger = pinoLogger;

export const httpLogger = pinoHttp({ logger });
