import type { ReactNode } from "react";
import { Link } from "react-router";

type ButtonVariant = "primary" | "danger";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  to?: string;
  href?: string;
  type?: "button" | "submit";
  className?: string;
};

const BASE_CLASSES =
  "inline-flex h-10 items-center justify-center gap-1.5 rounded-md px-4 text-sm font-semibold whitespace-nowrap text-white shadow-sm transition active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-primary-700 hover:bg-primary-800 focus-visible:outline-primary-700",
  danger: "bg-red-600 hover:bg-red-700 focus-visible:outline-red-600",
};

export function Button({
  children,
  variant = "primary",
  to,
  href,
  type = "button",
  className = "",
}: ButtonProps) {
  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
