import { Clock, MapPin, Phone, type LucideIcon } from "lucide-react";
import { Container } from "../layout/Container";
import { ClinicInfoCard } from "./ClinicInfoCard";
import { EmergencyBanner } from "./EmergencyBanner";

type ClinicInfo = {
  title: string;
  icon: LucideIcon;
  value: string;
  note: string;
};

const CLINIC_INFO: ClinicInfo[] = [
  {
    title: "Working hours",
    icon: Clock,
    value: "Monday – Sunday",
    note: "8:00 AM – 8:00 PM",
  },
  {
    title: "Clinic address",
    icon: MapPin,
    value: "742 Evergreen Medical Plaza",
    note: "Suite 300, Metro City",
  },
  {
    title: "Phone number",
    icon: Phone,
    value: "+1 (555) 234-5678",
    note: "Dedicated scheduling line",
  },
];

export function ClinicInfoSection() {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-gray-200 bg-white py-16">
      <Container>
        <EmergencyBanner />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CLINIC_INFO.map((info) => (
            <ClinicInfoCard
              key={info.title}
              icon={info.icon}
              title={info.title}
              value={info.value}
              note={info.note}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
