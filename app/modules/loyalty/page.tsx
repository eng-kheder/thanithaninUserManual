import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Callout from "@/components/Callout";
import FeatureGrid from "@/components/FeatureGrid";
import NextPrev from "@/components/NextPrev";
import {
  Gift,
  Sparkles,
  Users,
  Settings2,
  CalendarClock,
  Tag,
  Wallet,
  BarChart3,
  ShieldCheck,
  Store,
} from "lucide-react";

export const metadata = {
  title: "نقاط الولاء — دليل ثاني اثنين",
  description:
    "برنامج نقاط الولاء المدمج في ثاني اثنين: جمع النقاط من الفواتير، استبدالها على نقطة البيع، حملات ولائية، وربط مباشر بملفات العملاء.",
};

export default function LoyaltyPage() {
  return (
    <PageShell>
      <PageHero
        breadcrumbs={[
          { label: "الدليل", href: "/" },
          { label: "الموديولات" },
          { label: "نقاط الولاء" },
        ]}
        eyebrow="أداة لبناء علاقة طويلة مع العميل"
        title="نقاط الولاء"
        tagline="برنامج ولاء متكامل مدمج داخل النظام: العميل يجمع نقاطاً من كل فاتورة، يرى رصيده على إيصال البيع، ويستبدلها في زيارته التالية بخصم أو هدية. لا نظام خارجي، لا تطبيق منفصل — كل شيء داخل ثاني اثنين."
      />

      <section className="mb-10 rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-2">
          <Sparkles size={18} className="text-brand-500" />
          <span className="text-sm font-bold text-brand-600">
            لماذا نقاط الولاء في محلّ التجزئة؟
          </span>
        </div>
        <p className="max-w-3xl text-[15px] leading-8 text-ink-600">
          الزبون الذي اشترى منك قطعة سيحتاج قطعة أخرى متعلّقة بها لاحقاً
          (إكسسوار جديد، استبدال، ترقية، صيانة). إذا كانت تجربته الأولى
          مريحة، سيعود بدون تفكير. نقاط الولاء ترسّخ هذا الاختيار، وتحوّل
          الزبون من «زيارة عابرة» إلى «علاقة مستمرّة».
        </p>
      </section>

      <h2 className="mb-3 mt-10 text-2xl font-bold text-brand-500">
        1. جمع النقاط
      </h2>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: Gift,
            title: "كل ريال = نقاط",
            body: "معدّل التحويل قابل للضبط: كل ريال مبيعات يكافئ العميل بنقطة أو أكثر. يظهر رصيد العميل على كل إيصال بيع ليبقى مدركاً لمكاسبه.",
          },
          {
            icon: Users,
            title: "مربوط بملف العميل",
            body: "النقاط تُسجَّل على العميل، لا على الفاتورة. يستخدم نفس ملف العملاء في موديول المبيعات — تاريخ شراء، رصيد آجل، ونقاط، كلّها في مكان واحد.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        2. الاستبدال على نقطة البيع
      </h2>
      <p className="mb-6 max-w-3xl text-[15px] leading-8 text-ink-500">
        عند إنشاء فاتورة جديدة، الكاشير يرى نقاط العميل المتاحة فوراً. بنقرة
        واحدة تُستبدل النقاط بخصم على الفاتورة، والنظام يُنقص الرصيد ويولّد
        القيد المحاسبي المناسب تلقائياً.
      </p>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: Wallet,
            title: "استبدال سريع",
            body: "لا نقرات كثيرة. الكاشير يرى «رصيد النقاط» على شاشة نقطة البيع، يحدّد كم نقطة تُستبدل، والنظام يحسب الخصم تلقائياً.",
          },
          {
            icon: ShieldCheck,
            title: "قيود محاسبية دقيقة",
            body: "كل استبدال يُنشئ قيداً محاسبياً واضحاً يفصل قيمة النقاط المستبدلة عن المبلغ النقدي المستلم. لا تشوّش على تقارير المبيعات.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        3. قابلية التخصيص الكاملة
      </h2>
      <FeatureGrid
        cols={3}
        features={[
          {
            icon: Settings2,
            title: "معدّل التحويل",
            body: "كم نقطة لكل ريال؟ كم ريال خصم لكل نقطة مستبدلة؟ تُضبط مرّة ويطبّقها النظام تلقائياً على كل عملية.",
          },
          {
            icon: Tag,
            title: "أصناف مستثناة",
            body: "بعض الأصناف قد لا تستحقّ نقاطاً (عروض ترويجية، صفقات حدّ الربح). حدّدها واستبعدها من حساب النقاط.",
          },
          {
            icon: CalendarClock,
            title: "صلاحية النقاط",
            body: "اضبط مدّة صلاحية النقاط (6 شهور، سنة، غير محدّدة). النقاط القديمة تنتهي تلقائياً إن لم تُستبدل.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        4. حملات ولائية
      </h2>
      <p className="mb-6 max-w-3xl text-[15px] leading-8 text-ink-500">
        النقاط العادية وحدها قد لا تكفي لتحفيز السلوك المرغوب. الحملات تتيح
        ضرب النقاط لفترة محدودة أو لأصناف محدّدة لتحريك المخزون بذكاء.
      </p>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: Sparkles,
            title: "نقاط مضاعفة مؤقّتة",
            body: "أعلن عن «ضِعف النقاط يوم الجمعة» أو «نقاط ثلاثية على مستحضرات العناية». الحملة تفعّل وتنتهي تلقائياً في الوقت الذي تحدّده.",
          },
          {
            icon: Store,
            title: "حملات على مجموعة أصناف",
            body: "حمّل نقاط إضافية على صنف محدّد أو تصنيف كامل. مثال: نقاط مضاعفة على الفيتامينات خلال الصيف لتحريك المخزون.",
          },
          {
            icon: Users,
            title: "فئات عملاء",
            body: "عميل VIP يحصل على نقاط أعلى من العميل العادي. حدّد الفئات، وحدّد نسبة كل فئة، والنظام يطبّق الفرق تلقائياً.",
          },
          {
            icon: CalendarClock,
            title: "حملات بتواريخ محدّدة",
            body: "حمّل فاتورة الحملة في النظام بأسبوع مقدّماً إن شئت. يبدأ تطبيقها في تاريخ البداية، وينتهي في تاريخ النهاية — بلا تدخّل يدوي.",
          },
        ]}
      />

      <Callout tone="success" title="كيف يربط هذا النظام ببقية الموديولات؟">
        <ul className="mb-0 space-y-2">
          <li>
            • <span className="font-semibold text-brand-500">المبيعات ونقطة البيع:</span>{" "}
            كل فاتورة تحسب النقاط المستحقّة وتعرض رصيد العميل تلقائياً.
          </li>
          <li>
            • <span className="font-semibold text-brand-500">ملف العميل:</span>{" "}
            النقاط جزء من بطاقة العميل مثل الرصيد الآجل وتاريخ الشراء.
          </li>
          <li>
            • <span className="font-semibold text-brand-500">المحاسبة:</span>{" "}
            الاستبدالات تنعكس قيوداً محاسبية دقيقة بدون تلاعب بالأرقام.
          </li>
          <li>
            • <span className="font-semibold text-brand-500">التقارير:</span>{" "}
            تعرف أي العملاء الأكثر ولاءً، أي الحملات حقّقت أفضل تحريك، وكم من
            النقاط لا يزال معلّقاً.
          </li>
        </ul>
      </Callout>

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        5. تقارير نقاط الولاء
      </h2>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: BarChart3,
            title: "أرصدة النقاط المتبقّية",
            body: "إجمالي النقاط المستحقّة للعملاء (التزام مالي مستقبلي)، مصنّفة بالفترة، الفرع، وفئة العميل.",
          },
          {
            icon: Users,
            title: "العملاء الأكثر ولاءً",
            body: "من أكثر عميل جمع نقاطاً؟ من استبدل الأكثر؟ من العملاء الذين لم يعودوا منذ فترة؟ بيانات لبناء علاقة.",
          },
          {
            icon: Sparkles,
            title: "أداء الحملات",
            body: "قياس ما حقّقته كل حملة ولائية: نقاط موزّعة، فواتير جذبتها، زيادة في المبيعات مقارنة بفترة عادية.",
          },
          {
            icon: CalendarClock,
            title: "النقاط المنتهية",
            body: "كم نقطة انتهت بدون استبدال؟ رقم يساعد في ضبط مدّة الصلاحية ومعدّل التحويل بشكل أذكى.",
          },
        ]}
      />

      <NextPrev slug="loyalty" />
    </PageShell>
  );
}
