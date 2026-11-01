import { ClinicInfoSection } from "../../components/home/ClinicInfoSection";
import { DoctorsSection } from "../../components/home/DoctorsSection";
import { HeroSection } from "../../components/home/HeroSection";
import { HowItWorksSection } from "../../components/home/HowItWorksSection";
import { SpecialtiesSection } from "../../components/home/SpecialtiesSection";
import type { Doctor } from "../../types/doctor";
import type { Specialty } from "../../types/specialty";

const SPECIALTIES: Specialty[] = [
  {
    id: "1",
    name: "Cardiology",
    icon: "cardiology",
    description: "Preventative care, echocardiograms, and hypertension management.",
  },
  {
    id: "2",
    name: "Dermatology",
    icon: "auto_awesome",
    description: "Skin consultations, dermoscopy, allergy, and therapeutic solutions.",
  },
  {
    id: "3",
    name: "Pediatrics",
    icon: "child_care",
    description: "Gentle pediatric checks, developmental tracking, and vaccination programs.",
  },
  {
    id: "4",
    name: "Dentistry",
    icon: "dentistry",
    description: "Preventive hygiene, restorative treatments, and digital oral scans.",
  },
  {
    id: "5",
    name: "Orthopedics",
    icon: "accessibility_new",
    description: "Joint diagnostics, sports recovery therapy, and bone health checks.",
  },
  {
    id: "6",
    name: "General Medicine",
    icon: "stethoscope",
    description: "Primary health assessments, ongoing medication, and holistic diagnostics.",
  },
];

const DOCTORS: Doctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Jenkins",
    title: "Senior Consultant Cardiologist",
    specialty: "Cardiology",
    nextAvailable: "Tomorrow 10:30",
  },
  {
    id: "2",
    name: "Dr. Michael Connell",
    title: "Lead Pediatric Specialist",
    specialty: "Pediatrics",
    nextAvailable: "Tomorrow 10:30",
  },
  {
    id: "3",
    name: "Dr. Elena Vance",
    title: "Clinical Dermatologist",
    specialty: "Dermatology",
    nextAvailable: "Tomorrow 10:30",
  },
  {
    id: "4",
    name: "Dr. Rohan Patel",
    title: "Orthopedic Surgeon & Sports Physio",
    specialty: "Orthopedics",
    nextAvailable: "Tomorrow 10:30",
  },
];

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SpecialtiesSection specialties={SPECIALTIES} />
      <DoctorsSection doctors={DOCTORS} />
      <HowItWorksSection />
      <ClinicInfoSection />
    </>
  );
}
