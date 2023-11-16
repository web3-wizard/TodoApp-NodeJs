import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import logger from "./Utils/logger.js";
import requestLogger from "./Middlewares/requestLogger.js";
import errorHandler from "./Middlewares/errorHandler.js";
import authRouter from "./Routes/authRoutes.js";
import dashboardRouter from "./Routes/dashboardRoutes.js";

// load the environment variables.
dotenv.config();

// create the express app
const app = express();
const PORT = process.env.PORT;

// middlewares
// Use the requestLogger middleware for all routes
app.use(requestLogger);
app.use(express.json());

// Express session middleware
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// routes
app.use("/auth", authRouter);
app.use("/", dashboardRouter);

// Error handler middleware
app.use(errorHandler);

// listen on port
app.listen(PORT, () => {
  try {
    logger.info(`Backend server is listen on port: ${PORT}`);
  } catch (error) {
    logger.error(error);
  }
});
