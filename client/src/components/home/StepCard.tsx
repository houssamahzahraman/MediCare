import type { LucideIcon } from "lucide-react";

type StepCardProps = {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
};

export function StepCard({ number, icon: Icon, title, description }: StepCardProps) {
  return (
    <li className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-8 text-center shadow-card">
      <span className="mb-6 flex size-14 items-center justify-center rounded-full border-2 border-primary-100 bg-primary-50 text-xl font-semibold text-primary-700">
        {number}
      </span>
      <Icon size={20} strokeWidth={1.5} aria-hidden="true" className="mb-3 text-primary-700" />
      <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </li>
  );
}
