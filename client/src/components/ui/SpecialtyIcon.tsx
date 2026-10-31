import {
  Baby,
  Bone,
  HeartPulse,
  Sparkles,
  Stethoscope,
  Toothbrush,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  cardiology: HeartPulse,
  auto_awesome: Sparkles,
  child_care: Baby,
  dentistry: Toothbrush,
  accessibility_new: Bone,
  stethoscope: Stethoscope,
};

const FALLBACK_ICON = Stethoscope;

type SpecialtyIconProps = {
  icon: string;
};

export function SpecialtyIcon({ icon }: SpecialtyIconProps) {
  const Icon = ICONS[icon] ?? FALLBACK_ICON;

  return <Icon size={20} strokeWidth={1.5} aria-hidden="true" />;
}
