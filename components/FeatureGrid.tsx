import type { LucideIcon } from "lucide-react";

export type Feature = {
  icon?: LucideIcon;
  title: string;
  body: string;
};

export default function FeatureGrid({
  features,
  cols = 2,
}: {
  features: Feature[];
  cols?: 2 | 3;
}) {
  const gridCols = cols === 3 ? "lg:grid-cols-3" : "md:grid-cols-2";
  return (
    <div className={`my-6 grid gap-4 ${gridCols}`}>
      {features.map((f, i) => {
        const Icon = f.icon;
        return (
          <div
            key={i}
            className="rounded-xl border border-ink-100 bg-white p-5 transition hover:border-accent-200 hover:shadow-soft"
          >
            {Icon && (
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
                <Icon size={18} />
              </div>
            )}
            <h4 className="mb-1.5 text-sm font-bold text-ink-800">{f.title}</h4>
            <p className="text-sm leading-7 text-ink-500">{f.body}</p>
          </div>
        );
      })}
    </div>
  );
}
