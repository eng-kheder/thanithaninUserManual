import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Callout from "@/components/Callout";
import FeatureGrid from "@/components/FeatureGrid";
import NextPrev from "@/components/NextPrev";
import {
  Warehouse,
  Package,
  Tags,
  Fingerprint,
  Smartphone,
  ShieldCheck,
  Ruler,
  ClipboardList,
  Shuffle,
  Tag,
  Scale,
  Ban,
  Palette,
  Hourglass,
} from "lucide-react";

export const metadata = {
  title: "المخزون والقطع — دليل ثاني اثنين",
  description:
    "إدارة المستودعات، الأصناف بكل متغيّراتها (موديل، لون، سعة، توافق)، تتبّع الرقم التسلسلي، الضمان، الراكد، والعمليات المخزنية.",
};

export default function InventoryPage() {
  return (
    <PageShell>
      <PageHero
        breadcrumbs={[
          { label: "الدليل", href: "/" },
          { label: "الموديولات" },
          { label: "المخزون والقطع" },
        ]}
        eyebrow="الموديول الأساسي"
        title="المخزون والقطع"
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
          كل قطعة في المحلّ ليست «وحدة في عمود الكميّة». لها{" "}
          <span className="font-semibold text-brand-600">هويّة كاملة</span>:
          موديل، لون، سعة، الجهاز الذي تتوافق معه، ضمان، وأحياناً رقم
          تسلسلي. النظام لا يتعامل مع «صنف X عنده 50 حبّة» — بل مع «20 قطعة
          باللون الأسود متوافقة مع موديل A، و30 قطعة بنفس الخصائص متوافقة
          مع موديل B». كل قرار لاحق — بيع، تحويل، جرد، تقرير — يستخدم هذا
          التفصيل.
        </p>
      </section>

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        1. المستودعات
      </h2>
      <p className="mb-6 max-w-3xl text-[15px] leading-8 text-ink-500">
        يمكن لكل محلّ أو فرع أن يكون له أكثر من مستودع: المستودع الرئيسي،
        مستودع المعرض، مستودع قطع الصيانة، مستودع البضاعة المرتجَعة. كل
        مستودع له مسؤوله ورصيده المستقل.
      </p>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: Warehouse,
            title: "مستودعات متعدّدة",
            body: "أنشئ ما تحتاج: رئيسي، فرعي، معرض، صيانة، تالف. كل مستودع له رصيد مستقل لكل صنف ولكل متغيّر.",
          },
          {
            icon: Shuffle,
            title: "ربط المستودع بالفرع",
            body: "كل مستودع ينتمي لفرع محدّد، والبيع من هذا الفرع يخصم من مستودعاته فقط. تجنّب الخلط بين أرصدة الفروع.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        2. الأصناف — بهويّة كاملة
      </h2>
      <p className="mb-6 max-w-3xl text-[15px] leading-8 text-ink-500">
        الصنف في ثاني اثنين ليس مجرّد اسم وسعر. يحمل كل صنف حقولاً مصمّمة
        لمحلّ التجزئة الذي يتعامل مع تنوّع كبير في الموديلات والمتغيّرات.
      </p>

      <FeatureGrid
        cols={3}
        features={[
          {
            icon: Package,
            title: "الاسم التجاري والمواصفات",
            body: "اسم تجاري للعرض على نقطة البيع، مع حقول مفصّلة للمواصفات التقنية تساعد في البحث الذكي والتقارير.",
          },
          {
            icon: Tags,
            title: "كود/باركود + كود المورّد",
            body: "كود داخلي وباركود قياسي للمسح السريع، مع كود المورّد للمطابقة عند الاستلام والتدقيق على الفواتير.",
          },
          {
            icon: Smartphone,
            title: "الأجهزة المتوافقة",
            body: "اربط القطعة بقائمة الأجهزة التي تتوافق معها. عند البيع، يبحث الموظف بموديل جهاز الزبون فيظهر له فقط ما يناسبه.",
          },
          {
            icon: Palette,
            title: "متغيّرات (لون، سعة، حجم)",
            body: "كل متغيّر يُتتبّع كرصيد مستقل. الأسود ليس الأبيض، 64GB ليس 128GB. لا أخطاء في الجرد، ولا فوضى عند البيع.",
          },
          {
            icon: Hourglass,
            title: "مدّة الضمان",
            body: "حدّد ضماناً افتراضياً لكل صنف (أسبوع، 6 شهور، سنة). الضمان يُسجَّل على الفاتورة تلقائياً لاستخدامه عند المرتجعات.",
          },
          {
            icon: Fingerprint,
            title: "تتبّع تسلسلي اختياري",
            body: "بعض الأصناف تحتاج تتبّع رقم لكل قطعة (بطاريات، شاشات، أجهزة كاملة)، وبعضها لا يحتاج (كيبل عادي). فعّل التتبّع لكل صنف على حدة.",
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
            body: "نظّم الأصناف في تصنيفات متعدّدة المستويات (إكسسوارات / حماية / حماية شاشة / لجهاز معيّن) لتسهيل البحث والتقارير.",
          },
          {
            icon: Ruler,
            title: "وحدات متعدّدة",
            body: "الكرتون يحتوي على علب، والعلبة على قطع. أو الباكيت على عشرة، والعشرة على وحدة. النظام يتعامل مع كل المستويات ويحوّل بينها تلقائياً.",
          },
          {
            icon: Scale,
            title: "قوائم أسعار",
            body: "أسعار مختلفة لفئات مختلفة: سعر التجزئة للزبون العادي، سعر الجملة لمحلّ زميل، سعر خاص للعملاء الثابتين. اختر القائمة عند الفاتورة.",
          },
        ]}
      />

      <div className="my-12 rounded-2xl border-2 border-brand-500 bg-white p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-2">
          <Fingerprint size={20} className="text-brand-500" />
          <span className="text-xs font-bold uppercase tracking-wider text-accent-600">
            الميزة الرئيسية
          </span>
        </div>
        <h2 className="mb-3 text-2xl font-bold text-brand-500">
          4. الرقم التسلسلي والضمان — جوهر النظام
        </h2>
        <p className="mb-5 max-w-3xl text-[15px] leading-8 text-ink-600">
          للأصناف الفريدة (بطارية بسعر مرتفع، شاشة أصلية، جهاز كامل)، كل
          قطعة لها هويّتها الخاصة. عند الاستلام من المورّد، النظام يطلب رقم
          القطعة (سيريال / IMEI). من تلك اللحظة، هذه القطعة تحديداً
          مرتبطة برقمها، ويمكن تتبّعها في كل عملية لاحقة.
        </p>
        <FeatureGrid
          cols={2}
          features={[
            {
              icon: Fingerprint,
              title: "كل قطعة لها هويّة",
              body: "السيريال يدخل النظام لحظة الاستلام. لا يمكن إدخال مخزون من نوع متتبّع بدون رقم. كل قطعة معروفة بالاسم.",
            },
            {
              icon: ClipboardList,
              title: "تاريخ كامل لكل قطعة",
              body: "متى دخلت؟ من أي مورّد؟ إلى أي فرع تحوّلت؟ متى بيعت ولأي زبون؟ كل ذلك متاح بالنقر على الرقم التسلسلي.",
            },
            {
              icon: ShieldCheck,
              title: "حماية من البيع المزدوج",
              body: "قطعة بسيريال X بيعت بفاتورة 1234 لا يمكن بيعها مرّة أخرى. النظام يرفض، حتى لو حاول الموظف تكرار الإدخال.",
            },
            {
              icon: Hourglass,
              title: "الضمان مرتبط بالقطعة",
              body: "تاريخ بدء الضمان وانتهائه يُحسب على القطعة من تاريخ بيعها. عند مرتجع أو إصلاح، النظام يخبرك إن كان الضمان ساري المفعول.",
            },
          ]}
        />
      </div>

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        5. تقرير المخزون الراكد — تنبيه قبل أن تصبح خسارة
      </h2>
      <p className="mb-6 max-w-3xl text-[15px] leading-8 text-ink-500">
        أكبر سبب لخسائر محلات التجزئة هو البضاعة التي تدخل ولا تخرج. الموديل
        الذي صدر قبل سنتين، اللون الذي لم يُطلب، القطعة التي اشتريتها
        بكميّة كبيرة وانتهت موضتها. النظام يفحص المخزون كل يوم، ويصنّف كل
        صنف حسب آخر حركة بيع له.
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
              <td className="p-3 font-bold text-rose-700">مجمّد</td>
              <td className="p-3">لم يُبَع منه شيء منذ أكثر من سنة.</td>
              <td className="p-3">تخفيض حادّ، إرجاع للمورّد، أو تسييل بأي وسيلة.</td>
            </tr>
            <tr className="bg-amber-50/40">
              <td className="p-3 font-bold text-amber-700">راكد</td>
              <td className="p-3">آخر بيع منذ 6–12 شهراً.</td>
              <td className="p-3">عرض ترويجي أو ضمّه ضمن باقة بسعر مغرٍ.</td>
            </tr>
            <tr className="bg-amber-50/20">
              <td className="p-3 font-bold text-amber-600">بطيء الحركة</td>
              <td className="p-3">آخر بيع منذ 3–6 أشهر.</td>
              <td className="p-3">إعادة عرضه في مكان أوضح أو مراجعة سعره.</td>
            </tr>
            <tr>
              <td className="p-3 font-bold text-accent-700">طبيعي</td>
              <td className="p-3">آخر بيع خلال 1–3 أشهر.</td>
              <td className="p-3">مراقبة عادية.</td>
            </tr>
            <tr>
              <td className="p-3 font-bold text-emerald-700">سريع الحركة</td>
              <td className="p-3">يبيع باستمرار خلال آخر شهر.</td>
              <td className="p-3">تأكّد من توفّر الكميّة الكافية للأيام القادمة.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout tone="warning" title="الخسائر التي يمنعها هذا التقرير">
        <p className="mb-0">
          أكبر خطأ يقع فيه أصحاب المحلّات هو الشراء بناء على «إحساس»
          بالطلب. هذا التقرير يحوّل القرار إلى أرقام: ماذا يبيع، ماذا لا
          يبيع، وأي صنف يستهلك مساحة من رفّك بدون أن يردّ تكلفته.
        </p>
      </Callout>

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        6. العمليات المخزنية
      </h2>
      <p className="mb-6 max-w-3xl text-[15px] leading-8 text-ink-500">
        كل حركة مخزون في ثاني اثنين تتمّ عبر عملية موثّقة، لها دورة حياة
        واضحة: مسودة → قيد المراجعة → معتمدة. لا توجد حركة «خفية» — كل
        كميّة خرجت أو دخلت لها مستند.
      </p>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: Warehouse,
            title: "إيداع (إدخال مخزون)",
            body: "إضافة كميات للمستودع من مصادر غير فاتورة شراء: رصيد افتتاحي، عيّنات، استيراد شخصي. كل قطعة بمتغيّراتها الكاملة.",
          },
          {
            icon: Ban,
            title: "سحب (إخراج مخزون)",
            body: "إخراج كميات لأسباب غير البيع: استخدام داخلي للصيانة، إتلاف، عيّنة لزبون. مربوط بسبب محدّد لتعرف لاحقاً سبب الخروج.",
          },
          {
            icon: Shuffle,
            title: "تحويل بين المستودعات",
            body: "نقل أصناف من مستودع لآخر مع الحفاظ على هويّاتها (موديل، سيريال، توافق). مفيد للفروع وللاستدعاء عند طلب زبون من فرع آخر.",
          },
          {
            icon: Scale,
            title: "تسوية الجرد",
            body: "بعد الجرد الفعلي، سجّل الفروقات. النظام يولّد القيود المحاسبية للنقص أو الزيادة تلقائياً، مع تقرير تفصيلي.",
          },
        ]}
      />

      <Callout tone="tip" title="دورة الموافقة — لماذا؟">
        <p className="mb-0">
          مسودة → قيد المراجعة → معتمدة. هذه الدورة تعني أن موظف المستودع
          يُدخل البيانات، والمدير يراجع ويعتمد. لا يتغيّر المخزون الفعلي
          ولا تُرحّل القيود إلا بعد الاعتماد، وأي خطأ يمكن تعديله قبلها
          بدون أثر محاسبي.
        </p>
      </Callout>

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        7. الربط مع بقية النظام
      </h2>
      <ul className="mb-8 space-y-3 text-[15px] leading-8 text-ink-600">
        <li>
          <span className="font-bold text-brand-500">المشتريات:</span> كل
          فاتورة شراء تُنشئ تلقائياً إيداع مخزون مع الأرقام التسلسلية إن
          وُجدت.
        </li>
        <li>
          <span className="font-bold text-brand-500">المبيعات ونقطة البيع:</span>{" "}
          كل فاتورة بيع تخصم الكميّة، وتربط الرقم التسلسلي بالزبون لبدء
          عدّ الضمان.
        </li>
        <li>
          <span className="font-bold text-brand-500">المحاسبة:</span> عمليات
          الإيداع والسحب والتحويل تُنشئ قيوداً محاسبية تلقائية حسب شجرة
          الحسابات المعدّة في النظام.
        </li>
        <li>
          <span className="font-bold text-brand-500">المرتجعات:</span> القطعة
          المرتجعة تُربط بسيريالها وفاتورتها الأصلية، فتُعاد لمخزونها
          الصحيح ويُتحقّق من الضمان تلقائياً.
        </li>
      </ul>

      <NextPrev slug="inventory" />
    </PageShell>
  );
}
