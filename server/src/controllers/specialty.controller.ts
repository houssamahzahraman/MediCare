import type { RequestHandler } from "express";
import { specialtyService } from "../services/specialty.service.js";

// HTTP only: read the request, call the service, send the response.
// Express 5 forwards a rejected promise to the error handler automatically.
const list: RequestHandler = async (_req, res) => {
  const specialties = await specialtyService.listSpecialties();
  res.json({ data: specialties });
};

export const specialtyController = { list };
