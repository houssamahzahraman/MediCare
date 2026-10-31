import { ArrowRight, Search } from "lucide-react";
import type { SubmitEvent } from "react";
import { Button } from "../ui/Button";

export function HeroSearchForm() {
  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-2xl items-center gap-2 rounded-xl border border-gray-200 bg-white p-2 shadow-card transition focus-within:border-primary-700 focus-within:ring-3 focus-within:ring-primary-700/15"
    >
      <Search
        size={20}
        strokeWidth={1.5}
        aria-hidden="true"
        className="ml-2 shrink-0 text-gray-400"
      />
      <input
        type="search"
        aria-label="Search for a doctor or specialty"
        placeholder="Search for a doctor or specialty"
        className="w-full min-w-0 bg-transparent px-1 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
      />
      <Button type="submit">
        Book
        <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
      </Button>
    </form>
  );
}
