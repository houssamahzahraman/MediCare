import { CalendarCheck } from "lucide-react";
import type { Doctor } from "../../types/doctor";
import { getInitials } from "../../utils/getInitials";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

type DoctorCardProps = {
  doctor: Doctor;
};

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-card transition duration-200 hover:-translate-y-0.5 hover:shadow-card-hover">
      <div className="relative flex aspect-4/3 items-center justify-center bg-linear-to-br from-primary-50 to-sky-50">
        <span className="flex size-24 items-center justify-center rounded-full bg-white text-3xl font-semibold text-primary-700 shadow-card">
          {getInitials(doctor.name)}
        </span>
        <div className="absolute top-3 left-3">
          <Badge tone="primary" dot>
            {doctor.specialty}
          </Badge>
        </div>
      </div>

      <div className="flex grow flex-col p-5">
        <h3 className="font-semibold text-gray-800">{doctor.name}</h3>
        <p className="mb-4 text-xs text-gray-600">{doctor.title}</p>
        <div className="mb-5">
          <Badge tone="info" icon={CalendarCheck}>
            Next available: {doctor.nextAvailable}
          </Badge>
        </div>
        <Button href="#" className="mt-auto w-full">
          Book
        </Button>
      </div>
    </article>
  );
}
