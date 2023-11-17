import { Router } from "express";
import { login, logout, register } from "../Controllers/authController.js";
import limiter from "../Middlewares/rateLimiter.js";

const authRouter = Router();

authRouter.post("/login", limiter, login);
authRouter.post("/logout", limiter, logout);
authRouter.post("/register", limiter, register);

export default authRouter;
