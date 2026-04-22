import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function PageHero({
  eyebrow,
  title,
  tagline,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  tagline?: string;
  breadcrumbs?: { label: string; href?: string }[];
}) {
  return (
    <header className="mb-10 border-b border-ink-100 pb-8">
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="mb-4 flex flex-wrap items-center gap-1 text-xs text-ink-400">
          {breadcrumbs.map((bc, idx) => (
            <span key={idx} className="flex items-center gap-1">
              {bc.href ? (
                <Link href={bc.href} className="transition hover:text-brand-500">
                  {bc.label}
                </Link>
              ) : (
                <span className="text-ink-500">{bc.label}</span>
              )}
              {idx < breadcrumbs.length - 1 && (
                <ChevronLeft size={12} className="rtl-flip text-ink-300" />
              )}
            </span>
          ))}
        </nav>
      )}
      {eyebrow && (
        <div className="mb-2 text-xs font-bold uppercase tracking-wider text-accent-600">
          {eyebrow}
        </div>
      )}
      <h1 className="text-3xl font-bold leading-tight text-brand-500 sm:text-4xl">
        {title}
      </h1>
      {tagline && (
        <p className="mt-3 max-w-2xl text-base leading-8 text-ink-500">
          {tagline}
        </p>
      )}
    </header>
  );
}
