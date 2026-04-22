"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navGroups } from "@/lib/modules";

export default function Sidebar({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <nav className="h-full overflow-y-auto bg-white">
      <div className="p-5 lg:p-6">
        {navGroups.map((group) => (
          <div key={group.title} className="mb-6">
            <div className="mb-2 px-3 text-[11px] font-bold uppercase tracking-wider text-ink-400">
              {group.title}
            </div>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/" && pathname?.startsWith(item.href));
                return (
                  <li key={item.slug}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      className={`block rounded-lg px-3 py-2 text-sm transition ${
                        active
                          ? "bg-brand-500 text-white"
                          : "text-ink-600 hover:bg-brand-50 hover:text-brand-600"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
