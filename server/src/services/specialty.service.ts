import { specialtyRepository, type Specialty } from "../repositories/specialty.repository.js";

// Thin for now. Business rules (e.g. per-branch filtering) will live here later.
async function listSpecialties(): Promise<Specialty[]> {
  return specialtyRepository.findActive();
}

export const specialtyService = { listSpecialties };
