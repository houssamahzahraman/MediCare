import { Router } from "express";
import { specialtyRouter } from "./specialty.routes.js";

export const apiRouter = Router();

apiRouter.use("/specialties", specialtyRouter);
