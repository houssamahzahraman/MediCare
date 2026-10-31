import { BriefcaseMedical, Clock, LayoutGrid, type LucideIcon } from "lucide-react";
import { Container } from "../layout/Container";
import { Badge } from "../ui/Badge";
import { HeroSearchForm } from "./HeroSearchForm";
import { HeroStat } from "./HeroStat";

type Stat = {
  label: string;
  icon: LucideIcon;
};

const STATS: Stat[] = [
  { label: "12 doctors", icon: BriefcaseMedical },
  { label: "8 specialties", icon: LayoutGrid },
  { label: "Open 8am – 8pm", icon: Clock },
];

export function HeroSection() {
  return (
    <section className="bg-linear-to-b from-primary-50/70 via-slate-50 to-slate-50 pt-12 pb-20 md:pt-20 md:pb-28">
      <Container className="text-center">
        <div className="mb-6">
          <Badge dot>Trusted Clinical Outpatient Network</Badge>
        </div>

        <h1 className="mx-auto mb-4 max-w-3xl text-3xl font-bold tracking-tight text-gray-800 md:text-4xl">
          Your health, our priority
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-gray-600">
          Book your appointment with the best doctors in a minute
        </p>

        <HeroSearchForm />

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {STATS.map((stat) => (
            <HeroStat key={stat.label} icon={stat.icon} label={stat.label} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
