import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Callout from "@/components/Callout";
import FeatureGrid from "@/components/FeatureGrid";
import NextPrev from "@/components/NextPrev";
import {
  Warehouse,
  Pill,
  Layers,
  CalendarClock,
  Thermometer,
  Snowflake,
  FileBadge,
  Shuffle,
  Tag,
  Ruler,
  ClipboardList,
  AlertTriangle,
  ShieldCheck,
  ArrowRightLeft,
  Scale,
  Ban,
} from "lucide-react";

export const metadata = {
  title: "المخزون والدفعات — دليل ثاني اثنين",
  description:
    "إدارة المستودعات، المنتجات الدوائية، الدفعات، تواريخ الصلاحية، مبدأ FEFO، والعمليات المخزنية (إيداع، سحب، تحويل، تسوية).",
};

export default function InventoryPage() {
  return (
    <PageShell>
      <PageHero
        breadcrumbs={[
          { label: "الدليل", href: "/" },
          { label: "الموديولات" },
          { label: "المخزون والدفعات" },
        ]}
        eyebrow="الموديول الأساسي"
        title="المخزون والدفعات"
        tagline="هذا قلب ثاني اثنين. بقية الموديولات تدور حوله: نقطة البيع تعتمد عليه للحماية، المحاسبة تعتمد عليه للتقييم، المشتريات تغذّيه، والتقارير تقرأه. إذا أردت أن ترى الفرق الحقيقي بين ثاني اثنين وأي نظام آخر، هذا هو الموديول."
      />

      <section className="mb-10 rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-2">
          <ShieldCheck size={18} className="text-brand-500" />
          <span className="text-sm font-bold text-brand-600">
            الفكرة التي يبني عليها الموديول
          </span>
        </div>
        <p className="max-w-3xl text-[15px] leading-8 text-ink-600">
          كل صندوق، كل شريط، وكل حبة دواء ترتبط بـ{" "}
          <span className="font-semibold text-brand-600">دفعة</span>. الدفعة
          لها رقم مميّز، تاريخ إنتاج، تاريخ صلاحية، وكمية متاحة. النظام لا
          يتعامل مع «منتج X عنده 100 حبة» — بل مع «منتج X عنده 40 حبة من دفعة
          انتهاؤها في يونيو، و60 حبة من دفعة انتهاؤها في نوفمبر». كل قرار
          لاحق — بيع، تحويل، جرد، تقرير — يستخدم هذا التفصيل.
        </p>
      </section>

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        1. المستودعات
      </h2>
      <p className="mb-6 max-w-3xl text-[15px] leading-8 text-ink-500">
        يمكن لكل صيدلية أو فرع أن يكون له أكثر من مستودع: المستودع الرئيسي،
        مستودع الفرع، مستودع الحجر الصحي للدفعات الموقوفة. كل مستودع له
        مسؤوله ورصيده المستقل.
      </p>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: Warehouse,
            title: "مستودعات متعددة",
            body: "أنشئ ما تحتاج من مستودعات: رئيسي، فرعي، حجر صحي، تالف. كل مستودع له رصيد مستقل لكل منتج ولكل دفعة.",
          },
          {
            icon: ArrowRightLeft,
            title: "ربط المستودع بالفرع",
            body: "كل مستودع ينتمي لفرع محدّد، والبيع من هذا الفرع يخصم من مستودعاته فقط. تجنّب الخلط بين أرصدة الفروع.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        2. المنتجات — بملف دوائي كامل
      </h2>
      <p className="mb-6 max-w-3xl text-[15px] leading-8 text-ink-500">
        المنتج في ثاني اثنين ليس مجرّد اسم وسعر. يحمل كل منتج حقولاً مصمّمة
        خصيصاً للصيدلية السعودية، متوافقة مع متطلبات هيئة الغذاء والدواء.
      </p>

      <FeatureGrid
        cols={3}
        features={[
          {
            icon: Pill,
            title: "الاسم العلمي والتجاري",
            body: "احفظ الاسم التجاري لاستخدامه على نقطة البيع، والاسم العلمي للبحث الذكي والتقارير الصحية.",
          },
          {
            icon: FileBadge,
            title: "GTIN / باركود هيئة الغذاء",
            body: "رقم التعريف الدولي للمنتج، جاهز للتبادل مع رصد ومع أي نظام تتبع أدوية.",
          },
          {
            icon: ShieldCheck,
            title: "منتج مراقب؟",
            body: "علامة is_controlled تميّز الأدوية المراقبة (مهدّئات/مؤثرات) لتطبيق صلاحيات صرف إضافية عليها.",
          },
          {
            icon: Snowflake,
            title: "سلسلة التبريد",
            body: "علامة requires_cold_chain تنبّه البائع أن المنتج يحتاج تبريد، وتُستخدم في تقارير لوجستية منفصلة.",
          },
          {
            icon: Thermometer,
            title: "نطاق درجة الحرارة",
            body: "سجّل storage_temp_min و max لكل منتج، واستخدمها كمرجع عند فحص شروط التخزين أو اكتشاف المخالفات.",
          },
          {
            icon: Layers,
            title: "تفعيل تتبع الدفعات",
            body: "خاصية batch_tracking على مستوى المنتج — بعض المنتجات تحتاج تتبّع دفعات، وبعضها (إكسسوارات مثلاً) لا تحتاج. النظام يتعامل مع كل حالة.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        3. التصنيفات والوحدات والأسعار
      </h2>
      <FeatureGrid
        cols={3}
        features={[
          {
            icon: Tag,
            title: "تصنيفات شجرية",
            body: "نظّم المنتجات في تصنيفات متعدّدة المستويات (مضادات حيوية / بيتا لاكتام / أموكسيسيلين) لتسهيل البحث والتقارير.",
          },
          {
            icon: Ruler,
            title: "وحدات متعددة",
            body: "الكرتون يحتوي على علب، والعلبة على أشرطة، والشريط على حبات. النظام يتعامل مع كل المستويات ويحوّل بينها تلقائياً.",
          },
          {
            icon: Scale,
            title: "قوائم أسعار",
            body: "أسعار مختلفة لفئات مختلفة: سعر التجزئة، سعر الجملة، سعر التأمين. اختر القائمة عند إنشاء الفاتورة.",
          },
        ]}
      />

      <div className="my-12 rounded-2xl border-2 border-brand-500 bg-white p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-2">
          <Layers size={20} className="text-brand-500" />
          <span className="text-xs font-bold uppercase tracking-wider text-accent-600">
            الميزة الرئيسية
          </span>
        </div>
        <h2 className="mb-3 text-2xl font-bold text-brand-500">
          4. الدفعات (Batches) — جوهر النظام
        </h2>
        <p className="mb-5 max-w-3xl text-[15px] leading-8 text-ink-600">
          كل كمية دخلت المستودع لا بدّ أن تنتمي لدفعة. عند استلام فاتورة شراء،
          يطالبك النظام برقم الدفعة وتاريخ الصلاحية لكل منتج. من تلك اللحظة،
          هذه الحبّات مرتبطة بتلك الدفعة، ويمكن تتبّعها في كل عملية لاحقة.
        </p>
        <FeatureGrid
          cols={2}
          features={[
            {
              icon: FileBadge,
              title: "رقم الدفعة + تاريخ الصلاحية",
              body: "كل دفعة تحمل رقمها من الشركة المصنّعة وتاريخ انتهائها. لا يمكن إدخال مخزون بدون هذه المعلومات للمنتجات المتتبّعة.",
            },
            {
              icon: ClipboardList,
              title: "رصيد لكل دفعة على حدة",
              body: "تعرف كم حبة متبقية من كل دفعة، في كل مستودع، في كل لحظة. هذا الرصيد يتحدّث تلقائياً مع كل عملية بيع، تحويل، أو تسوية.",
            },
            {
              icon: CalendarClock,
              title: "ترتيب FEFO التلقائي",
              body: "عندما يُطلب المنتج (بيع أو تحويل)، النظام يقدّم الدفعات الأقدم صلاحية أولاً. أي محاولة لسحب دفعة أحدث ينبّه عليها النظام.",
            },
            {
              icon: Ban,
              title: "الحجر الصحي والإتلاف",
              body: "أي دفعة مشكوك فيها (منتهية، تالفة، مسحوبة من الشركة) يمكن حجرها في مستودع خاص، ثم إتلافها بقيد محاسبي مستقل.",
            },
          ]}
        />
      </div>

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        5. تقرير الصلاحيات — تنبيه قبل فوات الأوان
      </h2>
      <p className="mb-6 max-w-3xl text-[15px] leading-8 text-ink-500">
        يفحص النظام كل الدفعات، ويصنّفها حسب قربها من تاريخ الانتهاء. لست بحاجة
        لجدول Excel أو تذكير يدوي — النظام يعرض لك كل يوم ما الذي يحتاج قراراً.
      </p>

      <div className="my-6 overflow-hidden rounded-xl border border-ink-100">
        <table className="w-full text-sm">
          <thead className="bg-ink-50 text-ink-600">
            <tr>
              <th className="p-3 text-start font-bold">التصنيف</th>
              <th className="p-3 text-start font-bold">الوصف</th>
              <th className="p-3 text-start font-bold">الإجراء المقترح</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100 text-ink-600">
            <tr className="bg-rose-50/40">
              <td className="p-3 font-bold text-rose-700">منتهي</td>
              <td className="p-3">دفعات تجاوزت تاريخ صلاحيتها بالفعل.</td>
              <td className="p-3">حجر فوري + إتلاف محاسبي.</td>
            </tr>
            <tr className="bg-amber-50/40">
              <td className="p-3 font-bold text-amber-700">حرج</td>
              <td className="p-3">ينتهي خلال 30 يوماً.</td>
              <td className="p-3">تسريع صرفها أو إرجاعها للمورّد.</td>
            </tr>
            <tr className="bg-amber-50/20">
              <td className="p-3 font-bold text-amber-600">تحذير</td>
              <td className="p-3">ينتهي خلال 60–90 يوماً.</td>
              <td className="p-3">تنبيه قسم المبيعات ومراقبة الحركة.</td>
            </tr>
            <tr>
              <td className="p-3 font-bold text-accent-700">ملاحظة</td>
              <td className="p-3">ينتهي خلال 3–6 أشهر.</td>
              <td className="p-3">مراقبة عادية، لا حاجة لإجراء.</td>
            </tr>
            <tr>
              <td className="p-3 font-bold text-emerald-700">آمن</td>
              <td className="p-3">صلاحية بعيدة (أكثر من 6 أشهر).</td>
              <td className="p-3">لا شيء.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout tone="warning" title="الخسائر التي يمنعها هذا التقرير">
        <p className="mb-0">
          أكبر سبب لخسائر الصيدليات هو اكتشاف الدفعات المنتهية متأخراً. تقرير
          الصلاحيات في ثاني اثنين يعرضها كل صباح مع إشارة ضوئية واضحة، بحيث
          تعرف قبل الانتهاء بشهرين أو ثلاثة وتتصرّف بالإرجاع أو البيع السريع.
        </p>
      </Callout>

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        6. العمليات المخزنية
      </h2>
      <p className="mb-6 max-w-3xl text-[15px] leading-8 text-ink-500">
        كل حركة مخزون في ثاني اثنين تتمّ عبر عملية موثّقة، لها دورة حياة
        واضحة: مسودة → قيد المراجعة → معتمدة. لا توجد حركة «خفية» — كل كمية
        خرجت أو دخلت لها مستند.
      </p>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: Warehouse,
            title: "إيداع (إدخال مخزون)",
            body: "إضافة كميات للمستودع من مصادر غير فاتورة شراء: رصيد افتتاحي، تبرّعات، عيّنات. كل دفعة بتاريخ صلاحيتها.",
          },
          {
            icon: Ban,
            title: "سحب (إخراج مخزون)",
            body: "إخراج كميات لأسباب غير البيع: استخدام داخلي، إتلاف، تبرّع. مربوط بسبب محدّد لتعرف لاحقاً سبب الخروج.",
          },
          {
            icon: Shuffle,
            title: "تحويل بين المستودعات",
            body: "نقل دفعات من مستودع لآخر مع الحفاظ على أرقام الدفعات وتواريخها. مفيد للفروع وللحجر الصحي.",
          },
          {
            icon: Scale,
            title: "تسوية الجرد",
            body: "بعد الجرد الفعلي، سجّل الفروقات دفعة بدفعة. النظام يولّد القيود المحاسبية للفروقات تلقائياً.",
          },
        ]}
      />

      <Callout tone="tip" title="دورة الموافقة — لماذا؟">
        <p className="mb-0">
          مسودة → قيد المراجعة → معتمدة. هذه الدورة تعني أن موظف المستودع
          يُدخل البيانات، والمدير يراجع ويعتمد. لا يتغيّر المخزون الفعلي ولا
          تُرحّل القيود إلا بعد الاعتماد، وأي خطأ يمكن تعديله قبلها بدون أثر
          محاسبي.
        </p>
      </Callout>

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        7. الربط مع بقية النظام
      </h2>
      <ul className="mb-8 space-y-3 text-[15px] leading-8 text-ink-600">
        <li>
          <span className="font-bold text-brand-500">المشتريات:</span> كل
          فاتورة شراء تُنشئ تلقائياً إيداع مخزون بدفعاته.
        </li>
        <li>
          <span className="font-bold text-brand-500">المبيعات ونقطة البيع:</span>{" "}
          كل فاتورة بيع تُنشئ سحب مخزون من الدفعة الأقدم صلاحية.
        </li>
        <li>
          <span className="font-bold text-brand-500">المحاسبة:</span> عمليات
          الإيداع والسحب والتحويل تُنشئ قيود محاسبية تلقائية حسب شجرة الحسابات
          المعدّة في النظام.
        </li>
        <li>
          <span className="font-bold text-brand-500">رصد:</span> كل حركة دخول
          وخروج لدفعة مراقبة يمكن مزامنتها تلقائياً مع منصّة رصد السعودية.
        </li>
      </ul>

      <NextPrev slug="inventory" />
    </PageShell>
  );
}
