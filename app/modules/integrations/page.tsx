import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import Callout from "@/components/Callout";
import NextPrev from "@/components/NextPrev";
import {
  QrCode,
  FileCheck2,
  ScanBarcode,
  RefreshCw,
  Link2,
  ShieldCheck,
  CircleCheck,
  Link,
} from "lucide-react";

export const metadata = {
  title: "التكاملات: زاتكا ورصد — دليل ثاني اثنين",
  description:
    "التكامل المباشر مع الفوترة الإلكترونية السعودية (زاتكا) ومنصّة تتبع الأدوية (رصد) من داخل النظام بدون وسطاء.",
};

export default function IntegrationsPage() {
  return (
    <PageShell>
      <PageHero
        breadcrumbs={[
          { label: "الدليل", href: "/" },
          { label: "الموديولات" },
          { label: "التكاملات" },
        ]}
        eyebrow="التوافق التنظيمي مدمجاً"
        title="التكاملات: زاتكا ورصد"
        tagline="الامتثال لمتطلّبات هيئة الزكاة (زاتكا) وهيئة الغذاء والدواء (رصد) ليس إضافة اختيارية في ثاني اثنين. هو جزء من البنية الأساسية للنظام، يعمل تلقائياً مع كل فاتورة وكل دفعة، بدون تدخّل يدوي وبدون أنظمة وسيطة."
      />

      <div className="my-8 rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-2">
          <FileCheck2 size={18} className="text-brand-500" />
          <span className="text-xs font-bold uppercase tracking-wider text-accent-600">
            زاتكا
          </span>
        </div>
        <h2 className="mb-3 text-2xl font-bold text-brand-600">
          الفوترة الإلكترونية المرحلة الثانية
        </h2>
        <p className="max-w-3xl text-[15px] leading-8 text-ink-600">
          كل فاتورة تصدر من ثاني اثنين — من نقطة البيع، من فاتورة بيع، من
          المرتجعات — تُنشأ بصيغة XML، تُوقَّع رقمياً، تُختم بـ QR، وتُرسل
          لمنصّة فاتورة (Fatoora) خلال ثوانٍ.
        </p>
      </div>

      <FeatureGrid
        cols={2}
        features={[
          {
            icon: FileCheck2,
            title: "إصدار وإرسال تلقائي",
            body: "الفاتورة تُصدر بصيغة المرحلة الثانية (Clearance/Reporting)، توقَّع بالشهادة الرقمية للمنشأة، وتُرسل للمنصّة فوراً.",
          },
          {
            icon: QrCode,
            title: "رمز QR مختوم",
            body: "كل فاتورة تحمل QR يحوي بيانات التوقيع ومعلومات المنشأة، قابل للتحقّق من تطبيق هيئة الزكاة.",
          },
          {
            icon: CircleCheck,
            title: "حالة الفاتورة لحظياً",
            body: "ترى لكل فاتورة: نجحت أم فشلت، سبب الفشل إن وجد، وزمن الاستجابة. لا مفاجآت في آخر الشهر.",
          },
          {
            icon: RefreshCw,
            title: "إعادة إرسال الفواتير الفاشلة",
            body: "إذا فشلت فاتورة لسبب تقني، النظام يحاول إعادة إرسالها تلقائياً، ويحتفظ بسجلّ المحاولات.",
          },
        ]}
      />

      <Callout tone="success" title="بدون أنظمة خارجية">
        <p className="mb-0">
          كثير من أنظمة الصيدليات تعتمد على أنظمة خارجية (وسيطة) لإرسال الفواتير
          لزاتكا، بتكاليف اشتراك إضافية وتأخير. ثاني اثنين يتكامل مباشرة —
          توقيع، إرسال، متابعة — كله داخل النظام.
        </p>
      </Callout>

      <div className="my-10 rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-2">
          <ScanBarcode size={18} className="text-brand-500" />
          <span className="text-xs font-bold uppercase tracking-wider text-accent-600">
            رصد
          </span>
        </div>
        <h2 className="mb-3 text-2xl font-bold text-brand-600">
          منصّة تتبع الأدوية (رصد)
        </h2>
        <p className="max-w-3xl text-[15px] leading-8 text-ink-600">
          هيئة الغذاء والدواء تطلب تتبّع الأدوية المراقبة والحيوية خلال كل
          مراحل سلسلة الإمداد. لأن ثاني اثنين يحفظ رقم الدفعة وGTIN لكل صنف
          أصلاً، التكامل مع رصد يصبح تشغيلاً للبيانات الموجودة، لا إدخالاً
          جديداً.
        </p>
      </div>

      <FeatureGrid
        cols={2}
        features={[
          {
            icon: ScanBarcode,
            title: "تسجيل الاستلام من المورّد",
            body: "عند استلام فاتورة شراء، النظام يرسل لرصد بأن هذه الدفعات وصلت لهذه الصيدلية — مرحلة أساسية في التتبّع.",
          },
          {
            icon: Link,
            title: "تسجيل الصرف من نقطة البيع",
            body: "الأدوية المراقبة التي تُباع تُبلَّغ لرصد بأنها خرجت من سلسلة الإمداد، ملفاتها مكتملة تلقائياً.",
          },
          {
            icon: RefreshCw,
            title: "مزامنة التحويلات والمرتجعات",
            body: "التحويل بين فروع، الإرجاع للمورّد، الإتلاف — كلها أحداث تصل رصد في وقتها الحقيقي.",
          },
          {
            icon: ShieldCheck,
            title: "امتثال كامل بدون جهد",
            body: "بدل تعبئة ملفّات الإبلاغ يدوياً، يعمل التكامل في الخلفية، وتحصل على تقارير الامتثال جاهزة.",
          },
        ]}
      />

      <Callout tone="tip" title="لماذا التكامل مدمج وليس إضافة خارجية؟">
        <p className="mb-0">
          لأن رصد يحتاج تفاصيل الدفعة (رقم الدفعة، GTIN، الصلاحية) في كل بلاغ.
          هذه البيانات موجودة في ثاني اثنين أصلاً — حيث يتتبّع الدفعات منذ
          أول يوم. النظام لا ينشئ بيانات جديدة للتكامل، بل يستخدم ما لديه.
        </p>
      </Callout>

      <section className="my-10 rounded-2xl border border-accent-200 bg-accent-50/40 p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-2">
          <Link size={18} className="text-accent-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-accent-700">
            قريباً
          </span>
        </div>
        <h3 className="mb-3 text-xl font-bold text-brand-600">
          تكاملات سلّة وزد على الطريق
        </h3>
        <p className="max-w-3xl text-[15px] leading-8 text-ink-600">
          يعمل الفريق على تكامل مباشر مع منصّتَي{" "}
          <span className="font-semibold text-brand-600">سلّة</span> و{" "}
          <span className="font-semibold text-brand-600">زد</span> لمزامنة
          المنتجات، المخزون، الأسعار، والطلبات بين متجرك الإلكتروني ونظام
          ثاني اثنين. تفاصيل أكثر في صفحة{" "}
          <a href="/roadmap/" className="font-semibold text-brand-600 underline">
            الميزات المستقبلية
          </a>
          .
        </p>
      </section>

      <NextPrev slug="integrations" />
    </PageShell>
  );
}
