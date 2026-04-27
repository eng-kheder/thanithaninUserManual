import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import Callout from "@/components/Callout";
import NextPrev from "@/components/NextPrev";
import {
  BarChart3,
  LineChart,
  PieChart,
  Package,
  Receipt,
  Landmark,
  Users,
  ShieldCheck,
  FileDown,
  Filter,
  Calendar,
  TrendingUp,
  Hourglass,
  Fingerprint,
} from "lucide-react";

export const metadata = {
  title: "التقارير — دليل ثاني اثنين",
  description:
    "التقارير في ثاني اثنين: المخزون والراكد، المبيعات والأرباح، المالية والضريبية، الموردين، الموظفين — كلها محدّثة لحظياً وقابلة للتصدير.",
};

export default function ReportsPage() {
  return (
    <PageShell>
      <PageHero
        breadcrumbs={[
          { label: "الدليل", href: "/" },
          { label: "الموديولات" },
          { label: "التقارير" },
        ]}
        eyebrow="رؤية كاملة لصاحب المحلّ"
        title="التقارير"
        tagline="القرار الصحيح يبدأ من رقم صحيح. التقارير في ثاني اثنين ليست جداول جامدة تُطبع آخر الشهر، بل لوحات حيّة تُبنى من البيانات اللحظية في النظام. كل رقم فيها يمكن النقر عليه للوصول للعملية الأصلية التي ولّدته."
      />

      <h2 className="mb-3 mt-6 text-2xl font-bold text-brand-500">
        1. تقارير المخزون والقطع
      </h2>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: Package,
            title: "تقرير رصيد المخزون",
            body: "كميات كل صنف في كل مستودع، مع التكلفة والقيمة السوقية. فلترة بالتصنيف، الموديل، اللون، أو الجهاز المتوافق.",
          },
          {
            icon: Hourglass,
            title: "تقرير المخزون الراكد",
            body: "كل الأصناف مصنّفة حسب آخر حركة بيع (مجمّد، راكد، بطيء، طبيعي، سريع). تقرير اليوم الأول الذي يفتحه المدير كل أسبوع.",
          },
          {
            icon: TrendingUp,
            title: "حركة الأصناف",
            body: "الأكثر حركة والأبطأ حركة، بفترة قابلة للضبط. يساعد في قرارات الشراء وتقليل المخزون الراكد.",
          },
          {
            icon: Fingerprint,
            title: "تتبع قطعة بسيريالها",
            body: "أدخل رقم تسلسلي وشاهد رحلته الكاملة: من أي فاتورة شراء دخل، التحويلات بين الفروع، البيع، والضمان.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        2. تقارير المبيعات والأرباح
      </h2>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: LineChart,
            title: "مبيعات الفترة",
            body: "مبيعات يومية، أسبوعية، شهرية، مع مقارنة بالفترة السابقة. رسم بياني واضح وأرقام قابلة للتفصيل.",
          },
          {
            icon: PieChart,
            title: "أرباح الأصناف",
            body: "ما هي الأصناف الأكثر ربحية؟ الأقل؟ الخاسرة؟ قرارات التسعير وقرار «أكمل توريد هذا الصنف أم أتوقّف» تبدأ هنا.",
          },
          {
            icon: Users,
            title: "أداء الكاشيرات والعملاء",
            body: "من أكثر بائع يبيع؟ من أكبر زبون؟ ما ذمم العميل الآجلة المعلّقة؟ معلومات تحرّك إدارة الفريق والتحصيل.",
          },
          {
            icon: BarChart3,
            title: "مقارنة الفروع",
            body: "أي فرع الأكثر مبيعاً؟ الأعلى ربحية؟ الأكثر مخزوناً راكداً؟ قرارات الاستثمار تنبني على هذه المقارنة.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        3. تقارير مالية
      </h2>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: Receipt,
            title: "ميزان مراجعة وكشوف حسابات",
            body: "ميزان المراجعة بأي تاريخ، كشف حساب أي عميل أو مورّد، أستاذ أي حساب. قابل للتصدير PDF أو Excel.",
          },
          {
            icon: Landmark,
            title: "القوائم المالية",
            body: "قائمة الدخل والميزانية العمومية بأي فترة، مقارنة بالفترة السابقة، ومع تحليل النسب المهمّة.",
          },
          {
            icon: TrendingUp,
            title: "التدفقات النقدية",
            body: "النقد الداخل والخارج، من أين ولأين. يحمي من أزمات السيولة قبل أن تحدث.",
          },
          {
            icon: Receipt,
            title: "إقرار الضريبة",
            body: "تقرير جاهز بالصيغة التي تطلبها هيئة الزكاة، مع تفكيك المخرجات والمدخلات للمراجعة قبل التقديم.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        4. تقارير الموردين والموظفين
      </h2>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: ShieldCheck,
            title: "أداء الموردين",
            body: "من الأسرع توريداً؟ من الأفضل سعراً على كل صنف؟ من أعلى نسبة بضاعة معطوبة عند التسليم؟ قرارات الشراء مبنيّة على بيانات.",
          },
          {
            icon: Users,
            title: "أداء الموظفين",
            body: "مبيعات كل بائع، نسبة المرتجعات، متوسط الفاتورة، الالتزام بمواعيد الدوام. أساس عادل لاحتساب العمولات والمكافآت.",
          },
        ]}
      />

      <Callout tone="tip" title="ما يجعل تقارير ثاني اثنين مختلفة">
        <p className="mb-0">
          كل تقرير يوفّر: فلاتر مرنة، تصدير لـ PDF/Excel، جدولة إرسال
          تلقائي بالبريد، ونقرات تفصيلية للوصول للبيانات الأصلية. المدير لا
          يحتاج محاسباً ليطلب منه تقريراً — يدخل إلى النظام ويأخذ ما يريد
          بنفسه.
        </p>
      </Callout>

      <FeatureGrid
        cols={3}
        features={[
          {
            icon: Filter,
            title: "فلاتر ذكية",
            body: "بالتاريخ، الفرع، المستودع، الصنف، الموديل، الموظف. امتلك التقرير الذي تحتاجه بالضبط.",
          },
          {
            icon: FileDown,
            title: "تصدير متعدّد",
            body: "PDF للعروض، Excel للتحليل، طباعة للأرشيف. كل تقرير قابل لكلها.",
          },
          {
            icon: Calendar,
            title: "جدولة إرسال",
            body: "احصل على التقرير الذي يهمّك بريدياً كل صباح، أو كل نهاية أسبوع، بدون الدخول للنظام.",
          },
        ]}
      />

      <NextPrev slug="reports" />
    </PageShell>
  );
}
