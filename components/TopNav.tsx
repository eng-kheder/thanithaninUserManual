"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";
import ThemeToggle from "./ThemeToggle";

export default function TopNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/90 backdrop-blur no-print dark:bg-[#111a2e]/90">
        <div className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              aria-label="القائمة"
              onClick={() => setOpen(true)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 bg-white text-brand-500 transition hover:bg-brand-50 lg:hidden dark:border-ink-700 dark:bg-ink-800 dark:text-accent-500"
            >
              <Menu size={18} />
            </button>

            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/brand/7-07.png"
                alt="ثاني اثنين"
                width={320}
                height={112}
                priority
                className="h-20 w-auto object-contain sm:h-[88px]"
              />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-ink-400 sm:inline">
              دليل استخدام النظام
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-brand-900/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 end-0 flex w-[86%] max-w-sm flex-col bg-white shadow-xl dark:bg-[#111a2e]">
            <div className="flex h-24 items-center justify-between border-b border-ink-100 px-4 dark:border-ink-800">
              <Image
                src="/brand/7-07.png"
                alt="ثاني اثنين"
                width={280}
                height={96}
                className="h-16 w-auto object-contain"
              />
              <button
                aria-label="إغلاق"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 text-ink-600 dark:border-ink-700 dark:text-ink-200"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <Sidebar onNavigate={() => setOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
