import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import Callout from "@/components/Callout";
import NextPrev from "@/components/NextPrev";
import {
  QrCode,
  FileCheck2,
  RefreshCw,
  CircleCheck,
  CreditCard,
  Link as LinkIcon,
} from "lucide-react";

export const metadata = {
  title: "التكاملات: زاتكا — دليل ثاني اثنين",
  description:
    "التكامل المباشر مع الفوترة الإلكترونية السعودية (زاتكا) من داخل النظام بدون وسطاء، إضافة لمزامنة وسائل الدفع.",
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
        title="التكاملات: زاتكا"
        tagline="الامتثال لمتطلّبات هيئة الزكاة (زاتكا) ليس إضافة اختيارية في ثاني اثنين. هو جزء من البنية الأساسية للنظام، يعمل تلقائياً مع كل فاتورة، بدون تدخّل يدوي وبدون أنظمة وسيطة."
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
          كثير من أنظمة المحلّات تعتمد على أنظمة خارجية (وسيطة) لإرسال
          الفواتير لزاتكا، بتكاليف اشتراك إضافية وتأخير. ثاني اثنين يتكامل
          مباشرة — توقيع، إرسال، متابعة — كلّه داخل النظام.
        </p>
      </Callout>

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        وسائل الدفع
      </h2>
      <p className="mb-6 max-w-3xl text-[15px] leading-8 text-ink-500">
        كاش، مدى، Apple Pay، STC Pay، التحويل البنكي. كل وسيلة دفع
        يستخدمها زبائنك تنعكس في النظام بطريقتها الخاصة، بدون خلط أو
        تسويات يدوية في آخر اليوم.
      </p>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: CreditCard,
            title: "أكثر من وسيلة دفع في الفاتورة الواحدة",
            body: "زبون يدفع جزءاً كاش وجزءاً بمدى؟ النظام يقبل التقسيم في نفس الفاتورة، ويسجّل كل مبلغ تحت الوسيلة الصحيحة.",
          },
          {
            icon: CircleCheck,
            title: "تقارير اليومية للتسوية",
            body: "تقرير لكل وسيلة دفع في نهاية الجلسة: كم مدى، كم كاش، كم STC Pay. يطابق ما تستلمه فعلياً من البنوك ومن الدرج.",
          },
        ]}
      />

      <section className="my-10 rounded-2xl border border-accent-200 bg-accent-50/40 p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-2">
          <LinkIcon size={18} className="text-accent-600" />
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
