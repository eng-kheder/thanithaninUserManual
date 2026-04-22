import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import Callout from "@/components/Callout";
import NextPrev from "@/components/NextPrev";
import {
  Building2,
  TrendingDown,
  Package,
  Trash2,
  FileText,
  BarChart3,
  Tags,
} from "lucide-react";

export const metadata = {
  title: "الأصول الثابتة — دليل ثاني اثنين",
  description:
    "تسجيل الأصول الثابتة، جدولة الاستهلاك، الاستبعاد، إعادة التقييم، وربط ذلك كلّه بالمحاسبة تلقائياً.",
};

export default function FixedAssetsPage() {
  return (
    <PageShell>
      <PageHero
        breadcrumbs={[
          { label: "الدليل", href: "/" },
          { label: "الموديولات" },
          { label: "الأصول الثابتة" },
        ]}
        eyebrow="أصول الصيدلية"
        title="الأصول الثابتة"
        tagline="الرفوف، الثلّاجات، أجهزة نقاط البيع، السيارات، الأثاث — كل ما تشتريه صيدليتك ويبقى معها لأكثر من سنة. موديول الأصول الثابتة يتابع دورة حياتها من الشراء إلى الاستبعاد، ويحتسب استهلاكها شهرياً دون تدخّل يدوي."
      />

      <h2 className="mb-3 mt-6 text-2xl font-bold text-brand-500">
        1. تسجيل الأصل
      </h2>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: Building2,
            title: "بطاقة أصل كاملة",
            body: "اسم، تصنيف، فرع، تاريخ الشراء، التكلفة، العمر الافتراضي، القيمة المتبقية في نهاية العمر. يتمّ الربط مع فاتورة الشراء مباشرةً.",
          },
          {
            icon: Tags,
            title: "تصنيفات الأصول",
            body: "مجموعات مثل «أجهزة كمبيوتر»، «أثاث»، «سيارات». كل مجموعة لها حساب محاسبي وطريقة استهلاك افتراضية لتوحيد المعالجة.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        2. الاستهلاك الشهري
      </h2>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: TrendingDown,
            title: "استهلاك خطّي مؤتمت",
            body: "في نهاية كل شهر، النظام يولّد قيد استهلاك لكل أصل حسب عمره وتكلفته. لا تحتاج لحساب يدوي ولا لسطر في شيت Excel.",
          },
          {
            icon: BarChart3,
            title: "جدول استهلاك تفصيلي",
            body: "تقرير يوضّح لكل أصل: التكلفة، ما استُهلك حتى الآن، الرصيد الدفتري، ما تبقّى من عمره. مفيد للجرد الضريبي وللتقارير الإدارية.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        3. الاستبعاد وإعادة التقييم
      </h2>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: Trash2,
            title: "استبعاد الأصل",
            body: "ببيع، بتبرّع، أو بتلف. النظام يحتسب الفرق بين القيمة الدفترية وما تحقّق من الاستبعاد، ويولّد قيد ربح/خسارة الاستبعاد.",
          },
          {
            icon: Package,
            title: "إعادة تقييم",
            body: "إذا قرّر المحاسب رفع أو تخفيض قيمة أصل (بعد تقييم رسمي)، الفرق يُسجَّل في حساب خاص بإعادة التقييم.",
          },
        ]}
      />

      <Callout tone="tip" title="ربط بقيّة النظام">
        <p className="mb-0">
          فاتورة الشراء تستطيع التمييز بين «بند مخزون» و«بند أصل»، فإذا كان
          أصلاً يُنشأ تلقائياً في موديول الأصول بكل بياناته. لا ازدواج إدخال
          ولا فرصة لنسيان تسجيله.
        </p>
      </Callout>

      <FeatureGrid
        cols={2}
        features={[
          {
            icon: FileText,
            title: "بطاقة حركة الأصل",
            body: "سجلّ كامل لكل ما حدث للأصل: الشراء، الاستهلاكات الشهرية، إعادة التقييمات، الاستبعاد. ملفّ واحد يلخّص دورة حياته.",
          },
          {
            icon: BarChart3,
            title: "تقارير لأغراض ضريبية",
            body: "تقرير جاهز بأرصدة الأصول وطبقات الاستهلاك بشكل يخدم الإقرار الضريبي السنوي والمراجعة الخارجية.",
          },
        ]}
      />

      <NextPrev slug="fixed-assets" />
    </PageShell>
  );
}
