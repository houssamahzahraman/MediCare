import { ArrowUpRight } from "lucide-react";
import type { Specialty } from "../../types/specialty";
import { SpecialtyIcon } from "../ui/SpecialtyIcon";

type SpecialtyCardProps = {
  specialty: Specialty;
};

export function SpecialtyCard({ specialty }: SpecialtyCardProps) {
  return (
    <article className="group flex h-48 flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-card transition duration-200 hover:-translate-y-0.5 hover:shadow-card-hover">
      <div className="flex items-center justify-between">
        <span className="flex size-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-colors group-hover:bg-primary-700 group-hover:text-white">
          <SpecialtyIcon icon={specialty.icon} />
        </span>
        <ArrowUpRight
          size={20}
          strokeWidth={1.5}
          aria-hidden="true"
          className="text-gray-400 transition-colors group-hover:text-primary-700"
        />
      </div>

      <div>
        <h3 className="mb-1 text-xl font-semibold text-gray-800 transition-colors group-hover:text-primary-700">
          {specialty.name}
        </h3>
        <p className="text-xs text-gray-600">{specialty.description}</p>
      </div>
    </article>
  );
}
