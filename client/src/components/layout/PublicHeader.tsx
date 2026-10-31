import { CalendarDays } from "lucide-react";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";
import { Container } from "./Container";

const NAV_LINKS = [
  { label: "Doctors", href: "#doctors" },
  { label: "Specialties", href: "#specialties" },
  { label: "Contact", href: "#contact" },
];

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 transition-colors hover:text-primary-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="#"
            className="px-2 text-sm font-semibold text-gray-600 transition-colors hover:text-primary-700"
          >
            Login
          </a>
          <Button href="#">
            <CalendarDays size={16} strokeWidth={1.5} aria-hidden="true" />
            <span className="sm:hidden">Book</span>
            <span className="hidden sm:inline">Book appointment</span>
          </Button>
        </div>
      </Container>
    </header>
  );
}
