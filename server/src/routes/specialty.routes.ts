import { Router } from "express";
import { specialtyController } from "../controllers/specialty.controller.js";

export const specialtyRouter = Router();

specialtyRouter.get("/", specialtyController.list);
