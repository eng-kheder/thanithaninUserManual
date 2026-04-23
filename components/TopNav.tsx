"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";

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
      <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/90 backdrop-blur no-print">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              aria-label="القائمة"
              onClick={() => setOpen(true)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 bg-white text-brand-500 transition hover:bg-brand-50 lg:hidden"
            >
              <Menu size={18} />
            </button>

            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/brand/7-07.png"
                alt="ثاني اثنين"
                width={240}
                height={80}
                priority
                className="h-14 w-auto object-contain sm:h-16"
              />
            </Link>
          </div>

          <div className="hidden items-center gap-4 text-sm text-ink-500 sm:flex">
            <span className="text-xs text-ink-400">دليل استخدام النظام</span>
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
          <div className="absolute inset-y-0 end-0 flex w-[86%] max-w-sm flex-col bg-white shadow-xl">
            <div className="flex h-20 items-center justify-between border-b border-ink-100 px-4">
              <Image
                src="/brand/7-07.png"
                alt="ثاني اثنين"
                width={200}
                height={72}
                className="h-12 w-auto object-contain"
              />
              <button
                aria-label="إغلاق"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 text-ink-600"
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
