import { app } from "./app.js";
import { env } from "./config/env.js";
import { connectMongo, disconnectMongo } from "./db/mongo.js";

const SHUTDOWN_TIMEOUT_MS = 10_000;

async function start(): Promise<void> {
  try {
    await connectMongo();
  } catch (error) {
    console.error("❌ Could not connect to MongoDB:", error);
    process.exit(1);
  }

  const server = app.listen(env.PORT, (error) => {
    if (error) {
      console.error(`❌ Could not start the server on port ${env.PORT}:`, error);
      process.exit(1);
    }
    console.log(`🚀 Server running on http://localhost:${env.PORT} (${env.NODE_ENV})`);
  });

  let isShuttingDown = false;

  function shutdown(signal: NodeJS.Signals): void {
    if (isShuttingDown) return;
    isShuttingDown = true;
    console.log(`\n${signal} received: shutting down gracefully...`);

    // If open requests never finish, don't hang forever.
    const forceExitTimer = setTimeout(() => {
      console.error("Shutdown took too long, forcing exit.");
      process.exit(1);
    }, SHUTDOWN_TIMEOUT_MS);
    forceExitTimer.unref();

    server.close(async () => {
      try {
        await disconnectMongo();
        console.log("👋 Server stopped");
        process.exit(0);
      } catch (error) {
        console.error("Error during shutdown:", error);
        process.exit(1);
      }
    });
  }

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
}

void start();
