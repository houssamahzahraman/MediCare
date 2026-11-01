import express from "express";
import { isMongoConnected } from "./db/mongo.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { notFound } from "./middlewares/notFound.js";
import { apiRouter } from "./routes/index.js";

export const app = express();

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", database: isMongoConnected() ? "up" : "down" });
});

app.use("/api/v1", apiRouter);

app.use(notFound);
app.use(errorHandler);
