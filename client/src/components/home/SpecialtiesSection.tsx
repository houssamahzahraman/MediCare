import type { Specialty } from "../../types/specialty";
import { Container } from "../layout/Container";
import { SectionHeading } from "./SectionHeading";
import { SpecialtyCard } from "./SpecialtyCard";

type SpecialtiesSectionProps = {
  specialties: Specialty[];
};

export function SpecialtiesSection({ specialties }: SpecialtiesSectionProps) {
  return (
    <section id="specialties" className="scroll-mt-16 border-y border-gray-200 bg-white py-16">
      <Container>
        <SectionHeading
          eyebrow="Departments"
          title="Specialties"
          description="Comprehensive outpatient care across clinical fields designed for rapid diagnosis and holistic patient recovery."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {specialties.map((specialty) => (
            <SpecialtyCard key={specialty.id} specialty={specialty} />
          ))}
        </div>
      </Container>
    </section>
  );
}
