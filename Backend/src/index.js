import express from "express";
import dotenv from "dotenv";
import logger from "./utils/logger.js";
import requestLogger from "./middlewares/requestLogger.js";

// load the environment variables.
dotenv.config();

// create the express app
const app = express();
const PORT = process.env.PORT;

// middlewares
app.use(requestLogger);
app.use(express.json());

// routes
app.get("/test", (req, res) => {
  logger.info("Server is working");
  res.send("Welcome to our server. Server is running.....");
});

// listen on port
app.listen(PORT, () => {
  logger.info(`Backend server is listen on port: ${PORT}`);
});
