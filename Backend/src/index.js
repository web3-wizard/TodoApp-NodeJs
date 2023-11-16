import express from "express";
import dotenv from "dotenv";
import logger from "./utils/logger.js";
import requestLogger from "./middlewares/requestLogger.js";
import errorHandler from "./middlewares/errorHandler.js";

// load the environment variables.
dotenv.config();

// create the express app
const app = express();
const PORT = process.env.PORT;

// middlewares
// Use the requestLogger middleware for all routes
app.use(requestLogger);
app.use(express.json());

// routes

// Error handler middleware
app.use(errorHandler);

// listen on port
app.listen(PORT, () => {
  logger.info(`Backend server is listen on port: ${PORT}`);
});
