import { rateLimit } from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 60 * 1000, // in milliseconds [1 min]
  max: 2, // 2 request per `window`
  standardHeaders: true,
  legacyHeaders: false,
  message: "Too many login attempts. Please try again later.",
});

export default limiter;
