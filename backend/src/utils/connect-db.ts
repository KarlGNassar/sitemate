import mongoose from "mongoose";
import { logger } from "../lib/logger";

async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_URL!);
    } catch (error) {
        logger.error(error, "error conecting to DB");
        process.exit(1);
    }
}

export default connectDb;
