import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import PageFooter from "./PageFooter";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <TopNav />
      <div className="mx-auto flex w-full max-w-7xl gap-8 px-4 sm:px-6 lg:px-8">
        <aside className="sticky top-20 hidden h-[calc(100vh-5rem)] w-64 shrink-0 border-e border-ink-100 lg:block no-print">
          <Sidebar />
        </aside>
        <main className="min-w-0 flex-1 py-8 lg:py-10">
          {children}
          <PageFooter />
        </main>
      </div>
    </div>
  );
}
