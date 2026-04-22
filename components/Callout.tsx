import type { ReactNode } from "react";
import { Lightbulb, AlertTriangle, Info, CheckCircle2 } from "lucide-react";

type Tone = "info" | "tip" | "warning" | "success";

const tones: Record<
  Tone,
  { border: string; bg: string; icon: ReactNode; titleColor: string }
> = {
  info: {
    border: "border-s-accent-500",
    bg: "bg-accent-50/60",
    icon: <Info size={18} className="text-accent-600" />,
    titleColor: "text-accent-700",
  },
  tip: {
    border: "border-s-brand-500",
    bg: "bg-brand-50",
    icon: <Lightbulb size={18} className="text-brand-500" />,
    titleColor: "text-brand-600",
  },
  warning: {
    border: "border-s-amber-500",
    bg: "bg-amber-50",
    icon: <AlertTriangle size={18} className="text-amber-600" />,
    titleColor: "text-amber-700",
  },
  success: {
    border: "border-s-emerald-500",
    bg: "bg-emerald-50",
    icon: <CheckCircle2 size={18} className="text-emerald-600" />,
    titleColor: "text-emerald-700",
  },
};

export default function Callout({
  tone = "info",
  title,
  children,
}: {
  tone?: Tone;
  title: string;
  children: ReactNode;
}) {
  const t = tones[tone];
  return (
    <div className={`callout ${t.border} ${t.bg} my-6`}>
      <div className="mb-2 flex items-center gap-2">
        {t.icon}
        <span className={`text-sm font-bold ${t.titleColor}`}>{title}</span>
      </div>
      <div className="text-sm leading-7 text-ink-600">{children}</div>
    </div>
  );
}
