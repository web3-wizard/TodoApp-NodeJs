import { Router } from "express";
import { login, logout, register } from "../Controllers/authController.js";

const authRouter = Router();

authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/register", register);

export default authRouter;
