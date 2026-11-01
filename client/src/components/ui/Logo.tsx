import { ShieldPlus } from "lucide-react";
import { Link } from "react-router";

type LogoProps = {
  small?: boolean;
};

export function Logo({ small = false }: LogoProps) {
  const markSize = small ? "size-6" : "size-8";
  const iconSize = small ? 16 : 20;
  const textSize = small ? "text-sm" : "text-lg";

  return (
    <Link to="/" className="inline-flex items-center gap-2 font-semibold text-primary-700">
      <span
        className={`flex items-center justify-center rounded-lg bg-primary-700 text-white ${markSize}`}
      >
        <ShieldPlus size={iconSize} strokeWidth={1.5} aria-hidden="true" />
      </span>
      <span className={`tracking-tight ${textSize}`}>MediCare</span>
    </Link>
  );
}
