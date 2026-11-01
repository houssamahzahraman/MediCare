import { Outlet } from "react-router";
import { PublicFooter } from "./PublicFooter";
import { PublicHeader } from "./PublicHeader";

export function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-gray-800 antialiased">
      <PublicHeader />
      <main className="grow">
        <Outlet />
      </main>
      <PublicFooter />
    </div>
  );
}
