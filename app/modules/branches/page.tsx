import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import Callout from "@/components/Callout";
import NextPrev from "@/components/NextPrev";
import {
  Store,
  Warehouse,
  Wallet,
  Users,
  BarChart3,
  ArrowRightLeft,
} from "lucide-react";

export const metadata = {
  title: "الفروع — دليل ثاني اثنين",
  description:
    "إدارة فروع الصيدلية: كل فرع بمستودعاته، خزائنه، موظفيه، ومبيعاته — في نظام موحّد بتقارير مقارنة.",
};

export default function BranchesPage() {
  return (
    <PageShell>
      <PageHero
        breadcrumbs={[
          { label: "الدليل", href: "/" },
          { label: "الموديولات" },
          { label: "الفروع" },
        ]}
        eyebrow="صيدلية واحدة أو عشر فروع"
        title="الفروع"
        tagline="سواء كانت صيدلية واحدة أو شبكة من الفروع، ثاني اثنين يدير كل فرع باستقلاليته — مستودعه، خزينته، موظفوه، عملاؤه — مع إبقاء صورة موحّدة للإدارة العليا."
      />

      <h2 className="mb-3 mt-6 text-2xl font-bold text-brand-500">
        1. ما الذي يخصّ كل فرع؟
      </h2>
      <FeatureGrid
        cols={3}
        features={[
          {
            icon: Store,
            title: "بيانات الفرع",
            body: "اسم، عنوان، رقم ترخيص، مسؤول الفرع، أوقات العمل. كل ذلك مرجعه بطاقة الفرع الواحدة.",
          },
          {
            icon: Warehouse,
            title: "مستودعات مخصّصة",
            body: "كل فرع يرتبط بمستودع أو أكثر. المبيعات من هذا الفرع تخصم من مستودعاته حصراً، لا من مستودعات فروع أخرى.",
          },
          {
            icon: Wallet,
            title: "خزينة مستقلّة",
            body: "خزينة نقدية لكل فرع بأمينها ورصيدها. ما يُجمع من نقد على نقاط البيع ينعكس في خزينة الفرع.",
          },
          {
            icon: Users,
            title: "موظفو الفرع",
            body: "كل موظف يُسند لفرع. جداول المناوبات، حضوره، ومبيعاته تُحتسب على هذا الفرع.",
          },
          {
            icon: ArrowRightLeft,
            title: "تحويلات بين الفروع",
            body: "نقل أصناف أو نقد أو دفعات بين فروع بعملية موثّقة، مع قيد محاسبي متوازن وطرق الاعتماد المطلوبة.",
          },
          {
            icon: BarChart3,
            title: "تقارير مقارنة",
            body: "قارن أداء الفروع في الإيرادات، الربحية، حركة المخزون، والخسائر. اكتشف أفضل فرع وأقلّ فرع في لحظة.",
          },
        ]}
      />

      <Callout tone="tip" title="كل فرع = مركز تكلفة">
        <p className="mb-0">
          الفرع في ثاني اثنين ليس تسمية شكلية. يرتبط مباشرةً بمركز تكلفة في
          المحاسبة، فتُحتسب تلقائياً أرباحه الصافية وتتبُّع مصروفاته المباشرة
          وحصّته من المصروفات العامة.
        </p>
      </Callout>

      <NextPrev slug="branches" />
    </PageShell>
  );
}
