import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Callout from "@/components/Callout";
import FeatureGrid from "@/components/FeatureGrid";
import NextPrev from "@/components/NextPrev";
import {
  Users,
  FileText,
  ClipboardList,
  Receipt,
  Undo2,
  Percent,
  Calendar,
  CreditCard,
  Tag,
  Send,
} from "lucide-react";

export const metadata = {
  title: "المبيعات — دليل ثاني اثنين",
  description:
    "موديول المبيعات: ملف العملاء، عروض الأسعار، طلبات البيع، فواتير البيع، مرتجعات البيع، الخصومات والعروض، والربط مع المحاسبة.",
};

export default function SalesPage() {
  return (
    <PageShell>
      <PageHero
        breadcrumbs={[
          { label: "الدليل", href: "/" },
          { label: "الموديولات" },
          { label: "المبيعات" },
        ]}
        eyebrow="دورة البيع الكاملة"
        title="المبيعات"
        tagline="البيع في الصيدلية يتّخذ أشكالاً متعدّدة: بيع سريع على نقطة البيع للمستهلك، بيع آجل لعميل شركات، بيع بالجملة لصيدلية أخرى. موديول المبيعات يغطّي الدورة كاملة — من عرض السعر إلى الفاتورة إلى التحصيل."
      />

      <h2 className="mb-3 mt-6 text-2xl font-bold text-brand-500">
        1. ملف العميل
      </h2>
      <p className="mb-6 max-w-3xl text-[15px] leading-8 text-ink-500">
        كل عميل — فرد، شركة تأمين، مستشفى، أو جهة حكومية — له ملف موحّد يحتوي
        على بياناته، شروط التعامل معه، رصيده، وتاريخه الشرائي.
      </p>
      <FeatureGrid
        cols={3}
        features={[
          {
            icon: Users,
            title: "عملاء أفراد وشركات",
            body: "تمييز العميل الفرد عن العميل الاعتباري (شركة/تأمين)، مع حقول الرقم الضريبي والسجل التجاري للمطالبة بفاتورة ضريبية.",
          },
          {
            icon: CreditCard,
            title: "حدود ائتمان",
            body: "تحديد سقف للدين على العميل. عند تجاوزه، النظام يمنع إصدار فاتورة آجلة جديدة حتى يسدّد جزءاً.",
          },
          {
            icon: Tag,
            title: "قائمة أسعار وخصم افتراضي",
            body: "اربط كل عميل بقائمة أسعار معيّنة ونسبة خصم افتراضية تنطبق تلقائياً على فواتيره.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        2. عروض الأسعار
      </h2>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: FileText,
            title: "عرض سعر قابل للتعديل",
            body: "أنشئ عرضاً للعميل قبل التأكيد، مع أصناف، كميات، أسعار، وخصومات. قابل للتعديل والمراجعة قبل أن يصبح طلباً فعلياً.",
          },
          {
            icon: Send,
            title: "تحويل العرض لطلب بضغطة",
            body: "عند موافقة العميل، يتحوّل عرض السعر إلى طلب بيع مباشرةً، بنفس الأصناف والأسعار، بدون إعادة إدخال.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        3. طلبات البيع والفواتير
      </h2>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: ClipboardList,
            title: "طلب بيع → فاتورة",
            body: "طلب البيع يحجز الكميات مبدئياً، والفاتورة تخصمها نهائياً من المخزون حسب الدفعة الأقدم صلاحية (FEFO).",
          },
          {
            icon: Receipt,
            title: "فاتورة بيع بزاتكا",
            body: "كل فاتورة تُنشأ بصيغة الفوترة الإلكترونية السعودية المرحلة الثانية، موقّعة ومختومة بـ QR، وجاهزة للإرسال لهيئة الزكاة.",
          },
          {
            icon: Calendar,
            title: "نقدية أو آجلة",
            body: "الفاتورة النقدية تحصّل على الفور، والآجلة ترفع رصيد العميل وتولّد ذمماً محاسبية تتبع جدول التحصيل.",
          },
          {
            icon: Percent,
            title: "خصومات وعروض",
            body: "خصم نسبي أو مبلغ مقطوع على الصنف أو على الفاتورة. عروض مثل «اشترِ 2 واحصل على 1 مجاناً» قابلة للتكوين.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        4. مرتجعات البيع
      </h2>
      <p className="mb-6 max-w-3xl text-[15px] leading-8 text-ink-500">
        العميل أعاد الدواء؟ المرتجع مرتبط بالفاتورة الأصلية والدفعة المحدّدة،
        فيعود المخزون لنفس الدفعة التي خرج منها، وتنعكس القيود المحاسبية
        تلقائياً.
      </p>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: Undo2,
            title: "مرتجع مرتبط بالفاتورة",
            body: "اختر الفاتورة الأصلية، حدّد الأصناف المُرجعة، والنظام يحسب قيمة الإرجاع تلقائياً مع الضريبة.",
          },
          {
            icon: Receipt,
            title: "قيد عكسي وفاتورة دائنة",
            body: "الإرجاع يولّد فاتورة دائنة بصيغة زاتكا، وقيداً محاسبياً عكسياً، ويعيد الكميات لدفعاتها الأصلية.",
          },
        ]}
      />

      <Callout tone="tip" title="الربط مع بقية النظام">
        <p className="mb-0">
          كل فاتورة بيع تحرّك: المخزون (سحب من الدفعة)، المحاسبة (قيد مدين/دائن)،
          ذمم العميل (إذا آجلة)، الخزينة (إذا نقدية). لا حاجة لتسجيل يدوي في
          أي مكان آخر.
        </p>
      </Callout>

      <NextPrev slug="sales" />
    </PageShell>
  );
}
