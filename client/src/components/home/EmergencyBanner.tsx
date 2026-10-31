import { Phone, Siren } from "lucide-react";
import { Button } from "../ui/Button";

export function EmergencyBanner() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-red-200 bg-red-50 p-6 text-center shadow-card sm:flex-row sm:text-left">
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
          <Siren size={20} strokeWidth={1.5} aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs font-medium tracking-wider text-red-600 uppercase">
            Urgent clinical triage
          </p>
          <p className="text-xl font-semibold text-gray-800">
            For emergencies, call <span className="font-bold text-red-600">140</span> immediately.
          </p>
        </div>
      </div>

      <Button href="tel:140" variant="danger" className="shrink-0">
        <Phone size={16} strokeWidth={1.5} aria-hidden="true" />
        Emergency call
      </Button>
    </div>
  );
}
