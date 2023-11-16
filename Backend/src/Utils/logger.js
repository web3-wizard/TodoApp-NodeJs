import winston, { createLogger } from "winston";

const { combine, timestamp, json, colorize, printf } = winston.format;
const { Console } = winston.transports;

// Define the log levels and colors
const logLevels = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
};

const logColors = {
  error: "red",
  warn: "yellow",
  info: "green",
  debug: "white",
};

// Create the Winston logger
const logger = createLogger({
  levels: logLevels,
  format: combine(timestamp(), json()),
  transports: [
    new Console({
      format: combine(
        colorize({ all: true }),
        printf((info) => `${info.timestamp} [${info.level}]: ${info.message}`)
      ),
    }),
  ],
});

export default logger;
