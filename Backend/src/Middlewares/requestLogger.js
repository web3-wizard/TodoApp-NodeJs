import logger from "../Utils/logger.js";

// Middleware for logging requests and responses.
const requestLogger = (req, res, next) => {
  const start = new Date();
  const ip = req.ip || req.connection.remoteAddress;
  // log the request information
  logger.info(
    `[${start.toLocaleString()}] ${ip} - ${req.method} ${req.originalUrl}`
  );

  res.on("finish", () => {
    const end = new Date();
    const duration = end - start;
    // log the response information
    logger.info(
      `[${end.toLocaleString()}] ${ip} - ${req.method} ${req.originalUrl} - ${
        res.statusCode
      } [${duration}ms]`
    );
  });

  next();
};

export default requestLogger;
