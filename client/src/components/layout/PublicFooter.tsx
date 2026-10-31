import { Logo } from "../ui/Logo";
import { Container } from "./Container";

const FOOTER_LINKS = [
  { label: "Doctors", href: "#doctors" },
  { label: "Specialties", href: "#specialties" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const CURRENT_YEAR = new Date().getFullYear();

export function PublicFooter() {
  return (
    <footer className="border-t border-gray-200 bg-slate-100">
      <Container className="flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
          <Logo small />
          <span className="hidden text-gray-300 sm:inline">|</span>
          <p className="text-xs text-gray-600">
            © {CURRENT_YEAR} MediCare Clinic Network. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs text-gray-600 underline-offset-4 transition-colors hover:text-primary-700 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
