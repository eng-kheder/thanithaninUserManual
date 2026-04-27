import Link from "next/link";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import { navGroups } from "@/lib/modules";
import {
  ShieldCheck,
  Boxes,
  ShoppingCart,
  Scale,
  Wallet,
  Users,
  BarChart3,
  Link2,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

const groupIcons: Record<string, any> = {
  "العمليات اليومية": Boxes,
  "الجانب المالي": Scale,
  "الإدارة والتنظيم": Users,
  "الإضافات والتقارير": BarChart3,
  "ما الذي يأتي قريباً؟": Sparkles,
};

export default function HomePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="دليل المستخدم"
        title="مرحباً بك في دليل نظام ثاني اثنين"
        tagline="هذا الدليل يعرض جميع الخدمات والميزات المتوفرة في النظام، مقسّمة حسب الموديولات، بحيث تتعرف على ما يقدمه النظام لك قبل أن تبدأ استخدامه. يُقرأ من البداية بالترتيب، أو تنتقل مباشرة إلى الموديول الذي يهمّك من القائمة."
      />

      <section className="mb-10 rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-2">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-white">
            <ShieldCheck size={18} />
          </div>
          <span className="text-sm font-bold text-brand-500">
            الفكرة الأساسية للنظام
          </span>
        </div>
        <p className="max-w-3xl text-[15px] leading-8 text-ink-600">
          ثاني اثنين نظام إدارة متكامل صُمّم لمحلات البيع بالتجزئة
          بمتطلباتها الخاصة (تنوّع كبير في الأصناف، موديلات متعدّدة،
          موردون، فروع، نقاط بيع). على عكس الأنظمة التقليدية التي تعامل
          الصنف كرقم في جدول، يبني ثاني اثنين نفسه حول فكرة{" "}
          <span className="font-semibold text-brand-600">
            هويّة كل قطعة: موديل، رقم تسلسلي، وضمان
          </span>{" "}
          — لأن هذه المعلومات هي ما يفرق بين محلّ يعرف ما عنده، ومحلّ
          يكتشف خسائره عند الجرد.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link href="/why/" className="btn-primary">
            ابدأ من هنا: لماذا ثاني اثنين؟
            <ArrowLeft size={16} className="rtl-flip" />
          </Link>
          <Link href="/modules/inventory/" className="btn-ghost">
            اذهب مباشرة إلى المخزون والقطع
          </Link>
        </div>
      </section>

      <div className="mb-8 prose-guide">
        <h2>كيف تستخدم هذا الدليل؟</h2>
        <p>
          كل موديول يشرح ما يقدمه النظام في هذا الجانب، والقيمة التي يحقّقها
          للمحلّ، وأبرز الميزات المتوفرة. الهدف أن يكون الدليل كافياً لتكوين
          صورة كاملة عن النظام، بدون الحاجة إلى اجتماع تعريفي.
        </p>
        <ul>
          <li>
            <span>
              القائمة الجانبية (يمين الصفحة) تحتوي على كل موديولات النظام
              مُجمّعة حسب نوعها.
            </span>
          </li>
          <li>
            <span>
              كل صفحة تبدأ بملخص القيمة، ثم تفصيل الميزات، وتنتهي بزر الانتقال
              للموديول التالي.
            </span>
          </li>
          <li>
            <span>
              على الهاتف، اضغط زر القائمة في الأعلى لعرض الفهرس الكامل.
            </span>
          </li>
        </ul>
      </div>

      <h2 className="mb-5 mt-10 text-2xl font-bold text-brand-500">
        خارطة الموديولات
      </h2>

      <div className="space-y-6">
        {navGroups
          .filter((g) => g.title !== "البداية")
          .map((g) => {
            const Icon = groupIcons[g.title] ?? Boxes;
            return (
              <div
                key={g.title}
                className="rounded-xl border border-ink-100 bg-white p-5 sm:p-6"
              >
                <div className="mb-4 flex items-center gap-2">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                    <Icon size={16} />
                  </div>
                  <h3 className="text-base font-bold text-brand-500">
                    {g.title}
                  </h3>
                </div>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {g.items.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={item.href}
                        className="flex items-start justify-between gap-3 rounded-lg border border-transparent p-3 transition hover:border-ink-100 hover:bg-canvas"
                      >
                        <div className="min-w-0">
                          <div className="mb-0.5 text-sm font-bold text-ink-800">
                            {item.title}
                          </div>
                          {item.description && (
                            <div className="line-clamp-2 text-xs leading-6 text-ink-500">
                              {item.description}
                            </div>
                          )}
                        </div>
                        <ArrowLeft
                          size={14}
                          className="rtl-flip mt-1 shrink-0 text-ink-300"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
      </div>
    </PageShell>
  );
}
