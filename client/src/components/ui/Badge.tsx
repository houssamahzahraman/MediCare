import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type BadgeTone = "neutral" | "primary" | "info";

type BadgeProps = {
  children: ReactNode;
  tone?: BadgeTone;
  icon?: LucideIcon;
  dot?: boolean;
};

const TONE_CLASSES: Record<BadgeTone, string> = {
  neutral: "border-gray-200 bg-white text-gray-600",
  primary: "border-primary-100 bg-white text-primary-700",
  info: "border-sky-200 bg-sky-50 text-sky-600",
};

export function Badge({ children, tone = "neutral", icon: Icon, dot = false }: BadgeProps) {
  return (
    <span
      className={`inline-flex h-6 items-center gap-1.5 rounded-full border px-2.5 text-xs font-medium ${TONE_CLASSES[tone]}`}
    >
      {dot && <span className="size-1.5 rounded-full bg-primary-700" />}
      {Icon && <Icon size={14} strokeWidth={1.5} aria-hidden="true" />}
      {children}
    </span>
  );
}
