require("dotenv").config();
import express from "express";
import { httpLogger, logger } from "./lib/logger";
import router from "./routes";
import connectDb from "./utils/connect-db";
import { errorHandler } from "./middleware/error-handler";

const app = express();

app.use(express.json());
app.use(httpLogger);

app.use("/api", router);
app.use(errorHandler);

app.listen(process.env.PORT, async () => {
    await connectDb();
    logger.info(
        `server started at ${process.env.BASE_URL}:${process.env.PORT}`
    );
});
