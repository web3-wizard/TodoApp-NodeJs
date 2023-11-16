import logger from "../utils/logger.js";

// Middleware for logging requests and responses.
const requestLogger = (req, res, next) => {
  logger.info(`Received ${req.method} request to ${req.originalUrl}`);

  res.on("finish", () => {
    logger.info(
      `Sent ${res.statusCode} response for ${req.method} request to ${req.originalUrl}`
    );
  });

  next();
};

export default requestLogger;
