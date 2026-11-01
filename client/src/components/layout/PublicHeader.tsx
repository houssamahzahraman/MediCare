import { CalendarDays } from "lucide-react";
import { NavLink } from "react-router";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";
import { Container } from "./Container";

const NAV_LINKS = [
  { label: "Doctors", to: "/doctors" },
  { label: "Specialties", to: "/specialties" },
  { label: "Contact", to: "/contact" },
];

const LINK_CLASSES = "text-sm text-gray-600 transition-colors hover:text-primary-700";
const ACTIVE_LINK_CLASSES = "text-sm font-semibold text-primary-700";

function getLinkClasses({ isActive }: { isActive: boolean }) {
  return isActive ? ACTIVE_LINK_CLASSES : LINK_CLASSES;
}

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={getLinkClasses}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <NavLink to="/login" className={getLinkClasses}>
            Login
          </NavLink>
          <span className="hidden sm:inline">
            <NavLink to="/register" className={getLinkClasses}>
              Sign up
            </NavLink>
          </span>
          <Button to="/patient/book">
            <CalendarDays size={16} strokeWidth={1.5} aria-hidden="true" />
            <span className="sm:hidden">Book</span>
            <span className="hidden sm:inline">Book appointment</span>
          </Button>
        </div>
      </Container>
    </header>
  );
}
