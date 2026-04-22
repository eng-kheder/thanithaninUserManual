import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import Callout from "@/components/Callout";
import NextPrev from "@/components/NextPrev";
import {
  Lock,
  UserCog,
  ShieldCheck,
  KeyRound,
  Layers,
  Building,
  History,
  Eye,
} from "lucide-react";

export const metadata = {
  title: "الصلاحيات والأدوار — دليل ثاني اثنين",
  description:
    "الصلاحيات الدقيقة، أدوار المستخدمين، تعدّد الشركات، باقات الاستخدام، وسجلّ التدقيق على كل عملية.",
};

export default function AuthorizationPage() {
  return (
    <PageShell>
      <PageHero
        breadcrumbs={[
          { label: "الدليل", href: "/" },
          { label: "الموديولات" },
          { label: "الصلاحيات والأدوار" },
        ]}
        eyebrow="كل مستخدم يرى ما يخصّه فقط"
        title="الصلاحيات والأدوار"
        tagline="نظام صلاحيات دقيق يضبط من يرى ماذا ومن يفعل ماذا. صيدلي لا يرى تكلفة الشراء، محاسب لا يفتح جلسة بيع، مدير الفرع يرى فرعه فقط. حماية الأعمال تبدأ من هنا."
      />

      <h2 className="mb-3 mt-6 text-2xl font-bold text-brand-500">
        1. الأدوار
      </h2>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: UserCog,
            title: "أدوار جاهزة وقابلة للتخصيص",
            body: "المالك، المدير العام، المحاسب، مدير الفرع، الصيدلي، الكاشير، موظف المستودع. لكل دور مجموعة صلاحيات افتراضية، قابلة للتعديل.",
          },
          {
            icon: Layers,
            title: "دور لكل مستوى",
            body: "الصلاحية يمكن ضبطها على مستوى الموديول (مبيعات)، العملية (إنشاء فاتورة)، أو البيان (عرض تكلفة).",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        2. تفاصيل الصلاحيات
      </h2>
      <FeatureGrid
        cols={3}
        features={[
          {
            icon: Eye,
            title: "صلاحيات عرض",
            body: "من يرى الفواتير؟ من يرى تكاليف الشراء؟ من يرى الأرصدة المصرفية؟ كل ذلك قابل للضبط بدقّة.",
          },
          {
            icon: KeyRound,
            title: "صلاحيات تعديل",
            body: "من يعدّل السعر على نقطة البيع؟ من يوافق على الخصومات الكبيرة؟ من يُغلق الشهر محاسبياً؟ قواعد واضحة للجميع.",
          },
          {
            icon: Lock,
            title: "صلاحيات حذف",
            body: "الحذف يتطلّب صلاحيات مستقلّة عن الإنشاء والتعديل — في الصيدلية، قلّة تحذف وأغلبية تُعدّل.",
          },
          {
            icon: Building,
            title: "صلاحية حسب الفرع",
            body: "مدير فرع جدة لا يرى فرع الرياض. كل صلاحية يمكن تقييدها بفرع أو مجموعة فروع محدّدة.",
          },
          {
            icon: ShieldCheck,
            title: "صلاحية حسب المستودع/الخزينة",
            body: "أمين خزينة واحدة لا يصرف من خزينة فرع آخر، ومسؤول مستودع لا يحرّك مستودعاً غيره.",
          },
          {
            icon: History,
            title: "سجلّ تدقيق كامل",
            body: "كل عملية تُسجَّل: من أنشأها، متى، من عدّلها، ومتى. سجلّ لا يمكن العبث به، يحمي الجميع عند أي خلاف.",
          },
        ]}
      />

      <Callout tone="tip" title="مثال عمليّ">
        <p className="mb-0">
          الصيدلي على نقطة البيع يستطيع البيع، لكن الخصم فوق 10% يحتاج موافقة
          المدير بكلمة سرّ إضافية. إذا حاول تجاوز القاعدة، النظام يوقف العملية
          ويسجّل المحاولة في سجلّ التدقيق. النتيجة: صلاحية عمل + حماية من سوء
          الاستخدام.
        </p>
      </Callout>

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        3. تعدّد الشركات (Multi-Company)
      </h2>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: Building,
            title: "أكثر من كيان قانوني",
            body: "إذا كنت تدير صيدليتين بسجلّين تجاريين مختلفين، يمكنك إدارتهما في نفس النظام بفصل محاسبي كامل لكل شركة.",
          },
          {
            icon: Layers,
            title: "تبديل سهل بين الشركات",
            body: "بنقرة واحدة، ينتقل المستخدم من بيانات شركة لأخرى، مع بقاء صلاحياته مضبوطة على كل شركة على حدة.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        4. الباقات والخطط
      </h2>
      <p className="mb-6 max-w-3xl text-[15px] leading-8 text-ink-500">
        النظام يدعم نماذج استخدام متدرّجة: صيدلية صغيرة بفرع واحد، سلسلة
        متوسطة، شبكة كبيرة بعشرات الفروع. تبدأ بما يناسبك وتنتقل للباقة الأعلى
        عندما تتوسّع، بدون ترحيل بيانات أو تغيير نظام.
      </p>

      <NextPrev slug="authorization" />
    </PageShell>
  );
}
