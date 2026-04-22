import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Callout from "@/components/Callout";
import FeatureGrid from "@/components/FeatureGrid";
import NextPrev from "@/components/NextPrev";
import {
  Truck,
  ClipboardList,
  PackageCheck,
  Receipt,
  Undo2,
  Building2,
  Percent,
  BadgeDollarSign,
  CalendarClock,
} from "lucide-react";

export const metadata = {
  title: "المشتريات — دليل ثاني اثنين",
  description:
    "موديول المشتريات: ملف المورّدين، طلبات الشراء، فواتير الشراء، مرتجعات المورّد، والربط المباشر مع المخزون والدفعات.",
};

export default function PurchasesPage() {
  return (
    <PageShell>
      <PageHero
        breadcrumbs={[
          { label: "الدليل", href: "/" },
          { label: "الموديولات" },
          { label: "المشتريات" },
        ]}
        eyebrow="تغذية المخزون"
        title="المشتريات"
        tagline="المشتريات هي اللحظة التي يدخل فيها الدواء للصيدلية، وهي نقطة الحقيقة التي يلتقط فيها النظام رقم الدفعة وتاريخ الصلاحية. كل إجراء لاحق على هذه الكمية — البيع، التحويل، التقارير — يستخدم المعلومات التي التُقطت هنا."
      />

      <h2 className="mb-3 mt-6 text-2xl font-bold text-brand-500">
        1. المورّدون
      </h2>
      <FeatureGrid
        cols={3}
        features={[
          {
            icon: Building2,
            title: "ملف مورّد كامل",
            body: "اسم، رقم ضريبي، سجل تجاري، جهة اتصال، شروط الدفع. ملف موحّد يستخدم في كل فواتيره ومرتجعاته.",
          },
          {
            icon: BadgeDollarSign,
            title: "رصيد حسابي حي",
            body: "رصيدك لدى المورّد محدّث لحظياً مع كل فاتورة شراء وكل سند صرف — تعرف ما عليك بدون حسابات يدوية.",
          },
          {
            icon: Percent,
            title: "خصومات واتفاقيات",
            body: "خصم افتراضي على فواتير المورّد، أو أسعار خاصة لمنتجات محدّدة. النظام يطبّقها تلقائياً.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        2. طلبات الشراء
      </h2>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: ClipboardList,
            title: "طلب شراء قابل للاعتماد",
            body: "أنشئ طلب شراء، راجعه، اعتمده، ثم أرسله للمورّد. يحتفظ بالأصناف المطلوبة وكمياتها وأسعارها المتوقّعة.",
          },
          {
            icon: PackageCheck,
            title: "استلام الكميات على دفعات",
            body: "إذا جاءت البضاعة على شحنات متعدّدة، يمكن ربط كل استلام بطلب الشراء ومطابقته مع الكمية الأصلية.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        3. فاتورة الشراء — نقطة دخول الدفعات
      </h2>
      <p className="mb-6 max-w-3xl text-[15px] leading-8 text-ink-500">
        عند إدخال فاتورة الشراء، يطالبك النظام بإدخال{" "}
        <span className="font-semibold text-brand-600">رقم الدفعة وتاريخ الصلاحية</span>{" "}
        لكل منتج متتبّع. هذه هي اللحظة التي يبدأ فيها النظام بحماية صيدليتك:
        من هذه اللحظة، كل حبّة من هذه الفاتورة مرتبطة بدفعتها حتى تخرج من
        الصيدلية.
      </p>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: Receipt,
            title: "فاتورة مرتبطة بالمخزون",
            body: "اعتماد الفاتورة يولّد تلقائياً إيداع مخزون، يضيف الكميات للمستودع المختار بدفعاتها وتواريخها.",
          },
          {
            icon: CalendarClock,
            title: "فحص تواريخ الصلاحية",
            body: "يحذّرك النظام إذا كانت الدفعة المستلَمة قريبة الانتهاء بالفعل — لا تُفاجأ بعد أسبوع أن المورّد باعك بضاعة مقاربة للانتهاء.",
          },
          {
            icon: BadgeDollarSign,
            title: "حساب التكلفة تلقائياً",
            body: "تكلفة الوحدة تُحسب من صافي الفاتورة بعد الخصم والضريبة والمصاريف الإضافية، وتُستخدم في تقييم المخزون وتقارير الربحية.",
          },
          {
            icon: Truck,
            title: "مصاريف مضافة للشحنة",
            body: "أضف تكاليف الشحن أو الجمارك إلى الفاتورة، وسيوزّعها النظام على تكلفة كل صنف حسب قيمته أو وزنه.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        4. مرتجعات المورّد
      </h2>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: Undo2,
            title: "إرجاع دفعة كاملة أو جزئية",
            body: "دفعة قريبة من الانتهاء لم تتمكّن من بيعها؟ يمكن إرجاعها للمورّد، والنظام يسحبها من المخزون ويولّد قيداً عكسياً.",
          },
          {
            icon: Receipt,
            title: "فاتورة مدينة ضريبية",
            body: "المرتجع يُنشئ فاتورة ضريبية مدينة بصيغة زاتكا، ترتبط بفاتورة الشراء الأصلية، وتخفّض رصيد المورّد.",
          },
        ]}
      />

      <Callout tone="success" title="لماذا إدخال رقم الدفعة مهمّ في هذه اللحظة؟">
        <p className="mb-0">
          لأن هذه هي المرّة الأخيرة التي تتوفّر فيها المعلومات بسهولة — من
          ملصق العبوة مباشرةً. كل إهمال هنا ينعكس لاحقاً كفقدان لتتبّع الدفعة،
          أو كمخزون لا يمكن بيعه بشكل صحيح، أو كدفعة منتهية لا يعلم أحد بها.
        </p>
      </Callout>

      <NextPrev slug="purchases" />
    </PageShell>
  );
}
