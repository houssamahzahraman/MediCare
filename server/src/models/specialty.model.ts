import { model, Schema, type InferSchemaType } from "mongoose";

const specialtySchema = new Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    icon: { type: String, required: true },
    description: { type: String, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export type SpecialtyDocument = InferSchemaType<typeof specialtySchema>;

export const SpecialtyModel = model("Specialty", specialtySchema);
