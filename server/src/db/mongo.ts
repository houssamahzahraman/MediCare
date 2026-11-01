import mongoose from "mongoose";
import { env } from "../config/env.js";

export async function connectMongo(): Promise<void> {
  await mongoose.connect(env.MONGO_URI, { serverSelectionTimeoutMS: 5000 });
  console.log(`✅ Connected to MongoDB (database: ${mongoose.connection.name})`);
}

export async function disconnectMongo(): Promise<void> {
  await mongoose.disconnect();
  console.log("MongoDB disconnected");
}

export function isMongoConnected(): boolean {
  return mongoose.connection.readyState === mongoose.ConnectionStates.connected;
}
