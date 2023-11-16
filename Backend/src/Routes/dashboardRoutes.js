import { Router } from "express";
import dashboard from "../Controllers/dashboardController.js";

const dashboardRouter = Router();

// Protected route - requires authentication
dashboardRouter.get("/dashboard", dashboard);

export default dashboardRouter;
