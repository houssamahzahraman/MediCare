import type { Types } from "mongoose";
import { SpecialtyModel } from "../models/specialty.model.js";

// The shape the rest of the app (and the API) sees. No Mongo-specific fields.
export type Specialty = {
  id: string;
  name: string;
  icon: string;
  description: string;
};

type SpecialtyRecord = {
  _id: Types.ObjectId;
  name: string;
  icon: string;
  description: string;
};

// The ONLY place where `_id` becomes `id`. Layers above never see Mongo's `_id`.
function toSpecialty(record: SpecialtyRecord): Specialty {
  return {
    id: record._id.toString(),
    name: record.name,
    icon: record.icon,
    description: record.description,
  };
}

async function findActive(): Promise<Specialty[]> {
  const records = await SpecialtyModel.find({ isActive: true })
    .select("name icon description")
    .sort({ name: 1 })
    .lean();

  return records.map(toSpecialty);
}

export const specialtyRepository = { findActive };
