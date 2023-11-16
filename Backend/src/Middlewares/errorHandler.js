import logger from "../Utils/logger.js";

// Middleware for handling custom errors
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  // log the error with current timestamp and error message
  logger.error(
    `[${new Date().toLocaleString()}] ${req.ip} - ${req.method} ${
      req.originalUrl
    } - ${statusCode} - ${err.message}`
  );
  // log the error stack for debugging
  logger.debug("Error Stack:", err.stack);

  // send the response with error message
  res.status(statusCode).json({ error: err.message });
};

export default errorHandler;
