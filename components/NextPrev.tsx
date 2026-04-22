import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getAdjacent } from "@/lib/modules";

export default function NextPrev({ slug }: { slug: string }) {
  const { prev, next } = getAdjacent(slug);
  if (!prev && !next) return null;

  return (
    <div className="mt-12 grid gap-3 border-t border-ink-100 pt-8 sm:grid-cols-2">
      {prev ? (
        <Link
          href={prev.href}
          className="group flex items-center justify-between rounded-xl border border-ink-100 p-4 transition hover:border-brand-200 hover:bg-brand-50/40"
        >
          <div>
            <div className="mb-0.5 text-[11px] font-semibold uppercase tracking-wider text-ink-400">
              السابق
            </div>
            <div className="text-sm font-bold text-brand-500">{prev.title}</div>
          </div>
          <ChevronRight size={18} className="text-ink-400 transition group-hover:text-brand-500" />
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={next.href}
          className="group flex items-center justify-between rounded-xl border border-ink-100 p-4 transition hover:border-brand-200 hover:bg-brand-50/40 sm:text-end"
        >
          <ChevronLeft size={18} className="text-ink-400 transition group-hover:text-brand-500" />
          <div>
            <div className="mb-0.5 text-[11px] font-semibold uppercase tracking-wider text-ink-400">
              التالي
            </div>
            <div className="text-sm font-bold text-brand-500">{next.title}</div>
          </div>
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
