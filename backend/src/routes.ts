import express, { Response } from "express";
import issuesRouter from "./modules/issue/issues.route";
import { responseBuilder } from "./utils/response-builder";

const router = express.Router();

router.get("/healthcheck", (_, res: Response) => {
    return res.json(
        responseBuilder(
            200,
            `The server is up and running 🚀 ${process.env.ENVIRONMENT}`
        )
    );
});

router.use("/issues", issuesRouter);

export default router;
