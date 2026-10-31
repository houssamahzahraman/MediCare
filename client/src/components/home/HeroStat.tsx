import type { LucideIcon } from "lucide-react";

type HeroStatProps = {
  icon: LucideIcon;
  label: string;
};

export function HeroStat({ icon: Icon, label }: HeroStatProps) {
  return (
    <li className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-card">
      <span className="flex size-8 items-center justify-center rounded-full bg-primary-50 text-primary-700">
        <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
      </span>
      <span className="text-sm font-semibold text-gray-800">{label}</span>
    </li>
  );
}
