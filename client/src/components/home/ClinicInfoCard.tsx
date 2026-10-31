import type { LucideIcon } from "lucide-react";

type ClinicInfoCardProps = {
  icon: LucideIcon;
  title: string;
  value: string;
  note: string;
};

export function ClinicInfoCard({ icon: Icon, title, value, note }: ClinicInfoCardProps) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-slate-50 p-6 shadow-card">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
        <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
      </span>
      <div>
        <h3 className="mb-1 font-semibold text-gray-800">{title}</h3>
        <p className="text-sm font-medium text-gray-600">{value}</p>
        <p className="text-xs text-gray-600">{note}</p>
      </div>
    </div>
  );
}
