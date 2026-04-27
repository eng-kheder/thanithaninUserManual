import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Callout from "@/components/Callout";
import FeatureGrid from "@/components/FeatureGrid";
import NextPrev from "@/components/NextPrev";
import {
  ShieldCheck,
  Tags,
  Layers,
  RefreshCw,
  AlertOctagon,
  LineChart,
  Lock,
  Sparkles,
  Fingerprint,
} from "lucide-react";

export const metadata = {
  title: "لماذا ثاني اثنين؟ — دليل المستخدم",
  description:
    "الفرق بين ثاني اثنين وأنظمة المحلّات التقليدية: تتبّع الموديل والرقم التسلسلي والضمان، تنبيهات الراكد، حماية نقطة البيع، وتكامل زاتكا.",
};

export default function WhyPage() {
  return (
    <PageShell>
      <PageHero
        breadcrumbs={[{ label: "الدليل", href: "/" }, { label: "لماذا ثاني اثنين؟" }]}
        eyebrow="قبل أي موديول"
        title="لماذا ثاني اثنين؟"
        tagline="معظم أنظمة المحاسبة تتعامل مع الصنف كاسم وسعر وكمية. لكن محلّ التجزئة الحديث ليس بقالة — كل قطعة لها موديل، توافق، أحياناً رقم تسلسلي، ومدّة ضمان. أي نظام لا يفرّق بين هذه التفاصيل يعرّض المحلّ لخسائر صامتة وقرارات مبنيّة على أرقام مغلوطة."
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
            <li>• تخزّن اسم الصنف والكمية فقط، بدون تمييز الموديلات والألوان والسعات.</li>
            <li>• لا تعرف ما هي القطع الراكدة منذ أشهر.</li>
            <li>• تسمح ببيع قطعة فريدة لأكثر من زبون عن طريق الخطأ.</li>
            <li>• تكتشف الخسارة بعد وقوعها في جرد آخر الشهر.</li>
            <li>• تحتاج لأنظمة خارجية للفوترة الإلكترونية.</li>
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
            <li>• كل صنف يحمل موديله، توافقه، رقمه التسلسلي، ومدّة ضمانه.</li>
            <li>• تنبيهات على القطع الراكدة قبل أن تتحوّل إلى خسارة.</li>
            <li>• القطعة المسلسَلة لا يمكن بيعها مرّتين.</li>
            <li>• جرد لحظي — تعرف موقفك في أي ثانية.</li>
            <li>• زاتكا مدمج داخل النظام، بدون تكامل خارجي.</li>
          </ul>
        </div>
      </section>

      <h2 className="mb-5 mt-12 text-2xl font-bold text-brand-500">
        ست ركائز تميّز النظام
      </h2>

      <FeatureGrid
        cols={2}
        features={[
          {
            icon: Tags,
            title: "إدارة الموديلات والمتغيّرات",
            body: "لون، سعة، موديل متوافق — كل خصائص الصنف تُحفظ وتُتتبّع. ستيكر شاشة لجهاز معيّن لا يُحسب مع ستيكر جهاز آخر، وكيبل أصلي لا يختلط بكيبل النسخة الأرخص.",
          },
          {
            icon: Fingerprint,
            title: "تتبّع الرقم التسلسلي",
            body: "للقطع التي تحتاج تتبّعاً فردياً (بطاريات، شاشات، إكسسوارات عالية القيمة)، النظام يحفظ رقم كل قطعة على حدة من دخولها للمستودع حتى بيعها.",
          },
          {
            icon: Layers,
            title: "تنبيهات المخزون الراكد",
            body: "موديل أصبح قديماً؟ لون لا يُطلب؟ النظام يكشف الأصناف التي لم تتحرّك منذ فترة، فتقرّر تخفيضها أو إرجاعها للمورّد قبل أن تصبح مجمّدة.",
          },
          {
            icon: ShieldCheck,
            title: "حماية نقطة البيع",
            body: "قطعة بسيريال محدّد لا يمكن بيعها مرّتين. مرتجع بدون سند بيع لا يُقبل. تخفيض كبير يحتاج موافقة المدير. الحماية مدمجة، لا يمكن تجاوزها.",
          },
          {
            icon: RefreshCw,
            title: "ربط المخزون بنقطة البيع",
            body: "كل عملية بيع تخصم الكمية فوراً، مع تسجيل سند الضمان للقطعة. لا تأخير، لا مزامنة يدوية.",
          },
          {
            icon: LineChart,
            title: "زاتكا داخل النظام",
            body: "الفوترة الإلكترونية المرحلة الثانية مدمجة. كل فاتورة موقّعة ومختومة بـ QR، بدون نظام خارجي أو وسيط.",
          },
          {
            icon: Lock,
            title: "صلاحيات دقيقة",
            body: "كل مستخدم يرى فقط ما يخصّه. الكاشير للبيع، المحاسب للحسابات، المدير للتقارير. فروع متعدّدة بإدارة موحّدة.",
          },
          {
            icon: Sparkles,
            title: "جاهزية للنموّ",
            body: "محلّ واحد اليوم، خمس فروع غداً؟ نفس النظام، نفس البيانات، إدارة موحّدة بدون استبدال أو ترحيل.",
          },
        ]}
      />

      <Callout tone="tip" title="القاعدة الذهبية في ثاني اثنين">
        <p className="mb-0">
          كل معلومة عن الصنف — من دخوله المستودع إلى خروجه من نقطة البيع —
          تحمل معها هويّتها الكاملة (موديل، توافق، رقم تسلسلي إن وُجد،
          ضمان). هذا ما يجعل النظام قادراً على اتخاذ قرارات ذكية بدلاً من
          الاكتفاء بتسجيل الأرقام.
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
          النظام. كل موديول شرحه مستقل: ماذا يقدّم، وما الميزات فيه، وكيف
          يحمي المحلّ. ابدأ بالمخزون إذا أردت رؤية الميزة الأهم، أو
          بالمبيعات إذا أردت البدء من أول خطوة في دورة العمل اليومية.
        </p>
      </section>

      <NextPrev slug="why" />
    </PageShell>
  );
}
