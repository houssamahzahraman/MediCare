import type { ErrorRequestHandler } from "express";
import { AppError } from "../errors/AppError.js";

// Express recognizes an error handler by its 4 parameters, so `_next` must stay even if unused.
export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      error: { code: err.code, message: err.message, details: err.details },
    });
    return;
  }

  console.error(err);
  res.status(500).json({
    error: { code: "INTERNAL_ERROR", message: "Something went wrong. Please try again later." },
  });
};
