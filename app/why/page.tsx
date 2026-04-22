import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Callout from "@/components/Callout";
import FeatureGrid from "@/components/FeatureGrid";
import NextPrev from "@/components/NextPrev";
import {
  ShieldCheck,
  CalendarClock,
  Layers,
  RefreshCw,
  AlertOctagon,
  LineChart,
  Lock,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "لماذا ثاني اثنين؟ — دليل المستخدم",
  description:
    "الفرق بين ثاني اثنين وأنظمة إدارة الصيدليات التقليدية: رقم الدفعة، الصلاحية، FEFO، حماية نقطة البيع، وتكامل كامل مع زاتكا ورصد.",
};

export default function WhyPage() {
  return (
    <PageShell>
      <PageHero
        breadcrumbs={[{ label: "الدليل", href: "/" }, { label: "لماذا ثاني اثنين؟" }]}
        eyebrow="قبل أي موديول"
        title="لماذا ثاني اثنين؟"
        tagline="معظم أنظمة المحاسبة تتعامل مع الدواء كمنتج عادي: اسم، سعر، كمية. لكن الصيدلية ليست بقالة — كل علبة دواء لها رقم دفعة وتاريخ صلاحية، وأي نظام لا يتعامل مع هاتين المعلومتين يعرّض صاحب الصيدلية للخسارة، للمخالفات، وأحياناً لمسؤولية قانونية."
      />

      <section className="mb-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-ink-100 bg-white p-6">
          <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ink-100 text-ink-500">
            <AlertOctagon size={20} />
          </div>
          <h3 className="mb-2 text-lg font-bold text-ink-800">
            الأنظمة التقليدية
          </h3>
          <ul className="space-y-2 text-sm leading-7 text-ink-500">
            <li>• تخزّن اسم الدواء والكمية فقط، بدون تفريق بين دفعاته.</li>
            <li>• لا تعرف أي دفعة ستنتهي صلاحيتها هذا الشهر.</li>
            <li>• تسمح ببيع الحبة بصرف النظر عن تاريخها.</li>
            <li>• تكتشف الخسارة بعد وقوعها في جرد نهاية الشهر.</li>
            <li>• تحتاج لأنظمة خارجية للفوترة الإلكترونية وتتبع الأدوية.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6">
          <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500 text-white">
            <ShieldCheck size={20} />
          </div>
          <h3 className="mb-2 text-lg font-bold text-brand-600">
            ثاني اثنين
          </h3>
          <ul className="space-y-2 text-sm leading-7 text-ink-600">
            <li>• كل دفعة دواء وحدة مستقلة لها رقمها، صلاحيتها، وكميتها.</li>
            <li>• تنبيهات مبكّرة لكل دفعة قبل انتهاء صلاحيتها.</li>
            <li>• نقطة البيع ترفض المنتهي وتحوّل البائع للأقدم صلاحية.</li>
            <li>• جرد لحظي — تعرف خسارتك قبل وقوعها.</li>
            <li>• زاتكا ورصد مدمجان داخل النظام، بدون تكامل خارجي.</li>
          </ul>
        </div>
      </section>

      <h2 className="mb-5 mt-12 text-2xl font-bold text-brand-500">
        خمس ركائز تميّز النظام
      </h2>

      <FeatureGrid
        cols={2}
        features={[
          {
            icon: Layers,
            title: "تتبع الدفعات (Batches)",
            body: "كل علبة دواء ترتبط بدفعة: رقم، تاريخ إنتاج، تاريخ صلاحية، كمية. تعرف بالضبط من أين جاءت وإلى أين ذهبت.",
          },
          {
            icon: CalendarClock,
            title: "FEFO — الأقدم صلاحية أولاً",
            body: "عند البيع، النظام يرشّح الدفعات من الأقدم صلاحية تلقائياً. إذا حاول الموظف سحب دفعة أحدث، ينبّهه أن هناك دفعة أقدم يجب صرفها قبلها.",
          },
          {
            icon: ShieldCheck,
            title: "حماية نقطة البيع",
            body: "أي دفعة انتهت صلاحيتها تُرفض تلقائياً على نقطة البيع. مستحيل أن تُصرف حبة منتهية بالخطأ.",
          },
          {
            icon: RefreshCw,
            title: "ربط المخزون بنقطة البيع",
            body: "كل عملية بيع تحدّث المخزون فوراً، مع خصم الكميات من الدفعة المحدّدة. لا تأخير، لا مزامنة يدوية.",
          },
          {
            icon: LineChart,
            title: "زاتكا ورصد داخل النظام",
            body: "الفوترة الإلكترونية المرحلة الثانية وتتبع الأدوية عبر رصد مدمجان في النظام، بدون أنظمة خارجية أو وسطاء.",
          },
          {
            icon: Lock,
            title: "صلاحيات دقيقة",
            body: "كل مستخدم يرى فقط ما يخصّه. المحاسب للحسابات، الصيدلي للصرف، المدير للتقارير. فروع متعددة بإدارة موحّدة.",
          },
        ]}
      />

      <Callout tone="tip" title="القاعدة الذهبية في ثاني اثنين">
        <p className="mb-0">
          كل معلومة عن الدواء — من دخوله المستودع إلى خروجه من نقطة البيع —
          تحمل معها رقم الدفعة وتاريخ الصلاحية. هذا ما يجعل النظام قادراً على
          اتخاذ قرارات ذكية بدلاً من الاكتفاء بتسجيل الأرقام.
        </p>
      </Callout>

      <section className="my-12 rounded-2xl border border-accent-200 bg-accent-50/50 p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-2">
          <Sparkles size={18} className="text-accent-600" />
          <span className="text-sm font-bold text-accent-700">
            والآن، ماذا يقدّم النظام فعلياً؟
          </span>
        </div>
        <p className="max-w-3xl text-[15px] leading-8 text-ink-600">
          بعد أن فهمت الفلسفة، القائمة الجانبية تعرض كل موديول من موديولات
          النظام. كل موديول شرحه مستقل: ماذا يقدّم، وما الميزات فيه، وكيف يحمي
          الصيدلية. ابدأ بالمخزون إذا أردت رؤية الميزة الأهم، أو بالمبيعات إذا
          أردت البدء من أول خطوة في دورة العمل اليومية.
        </p>
      </section>

      <NextPrev slug="why" />
    </PageShell>
  );
}
