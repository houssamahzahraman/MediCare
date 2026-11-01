import { ArrowRight, BadgeCheck } from "lucide-react";
import { Link } from "react-router";
import type { Doctor } from "../../types/doctor";
import { Container } from "../layout/Container";
import { Badge } from "../ui/Badge";
import { DoctorCard } from "./DoctorCard";
import { SectionHeading } from "./SectionHeading";

type DoctorsSectionProps = {
  doctors: Doctor[];
};

export function DoctorsSection({ doctors }: DoctorsSectionProps) {
  return (
    <section id="doctors" className="scroll-mt-16 py-16">
      <Container>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Medical staff"
            title="Our doctors"
            description="Board-certified practitioners devoted to precision healthcare and empathetic clinical consultations."
          />
          <div>
            <Badge tone="primary" icon={BadgeCheck}>
              100% Board Certified
            </Badge>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/doctors"
            className="inline-flex items-center gap-2 font-semibold text-primary-700 underline-offset-4 hover:underline"
          >
            See all doctors
            <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
