import { Building2, CalendarClock, UserSearch, type LucideIcon } from "lucide-react";
import { Container } from "../layout/Container";
import { SectionHeading } from "./SectionHeading";
import { StepCard } from "./StepCard";

type Step = {
  title: string;
  icon: LucideIcon;
  description: string;
};

const STEPS: Step[] = [
  {
    title: "Choose a doctor",
    icon: UserSearch,
    description:
      "Select specialty and trusted physician based on patient reviews and clinical specializations.",
  },
  {
    title: "Pick a time",
    icon: CalendarClock,
    description:
      "Choose an appointment slot that fits your schedule with instant real-time calendar synchronization.",
  },
  {
    title: "Visit us",
    icon: Building2,
    description:
      "Receive confirmation, calendar reminders, and visit our modern clinic for attentive consultation.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="border-t border-gray-200 bg-slate-100/60 py-16">
      <Container>
        <SectionHeading
          eyebrow="Simple booking"
          title="How it works"
          description="Streamlined three-step process to secure professional clinical appointments with immediate digital confirmation."
          centered
        />

        <ol className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <StepCard
              key={step.title}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </ol>
      </Container>
    </section>
  );
}
