import { connectMongo, disconnectMongo } from "../db/mongo.js";
import { SpecialtyModel } from "../models/specialty.model.js";

const specialties = [
  {
    name: "Cardiology",
    icon: "cardiology",
    description: "Preventative care, echocardiograms, and hypertension management.",
  },
  {
    name: "Dermatology",
    icon: "auto_awesome",
    description: "Skin consultations, dermoscopy, allergy, and therapeutic solutions.",
  },
  {
    name: "Pediatrics",
    icon: "child_care",
    description: "Gentle pediatric checks, developmental tracking, and vaccination programs.",
  },
  {
    name: "Dentistry",
    icon: "dentistry",
    description: "Preventive hygiene, restorative treatments, and digital oral scans.",
  },
  {
    name: "Orthopedics",
    icon: "accessibility_new",
    description: "Joint diagnostics, sports recovery therapy, and bone health checks.",
  },
  {
    name: "General Medicine",
    icon: "stethoscope",
    description: "Primary health assessments, ongoing medication, and holistic diagnostics.",
  },
];

async function seedSpecialties(): Promise<void> {
  // Make sure the unique index on `name` exists before writing.
  await SpecialtyModel.init();

  // Upsert by name: insert if missing, update if it exists. Running it twice is safe.
  const result = await SpecialtyModel.bulkWrite(
    specialties.map((specialty) => ({
      updateOne: {
        filter: { name: specialty.name },
        update: { $set: { icon: specialty.icon, description: specialty.description } },
        upsert: true,
      },
    })),
  );

  // matchedCount = documents that already existed (found by name) and were updated.
  console.log(`🌱 Specialties: ${result.upsertedCount} inserted, ${result.matchedCount} updated`);
}

try {
  await connectMongo();
  await seedSpecialties();
  await disconnectMongo();
} catch (error) {
  console.error("❌ Seed failed:", error);
  await disconnectMongo();
  process.exit(1);
}
