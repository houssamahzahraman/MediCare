import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().int().positive().default(4000),
  MONGO_URI: z.string({ error: "is required" }).min(1, "is required"),
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
  console.error("❌ Invalid environment variables:");
  for (const issue of result.error.issues) {
    console.error(`   - ${issue.path.join(".")}: ${issue.message}`);
  }
  console.error("Check your server/.env file (see .env.example).");
  process.exit(1);
}

export const env = result.data;
