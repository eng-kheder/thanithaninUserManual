import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import Callout from "@/components/Callout";
import NextPrev from "@/components/NextPrev";
import {
  FileSignature,
  Calendar,
  Bell,
  Repeat,
  BookOpenCheck,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "عقود الإيجار — دليل ثاني اثنين",
  description:
    "إدارة عقود إيجار المحلّ والفروع: جدولة الدفعات، توليد القيود تلقائياً، وتذكيرات الاستحقاق.",
};

export default function RentalsPage() {
  return (
    <PageShell>
      <PageHero
        breadcrumbs={[
          { label: "الدليل", href: "/" },
          { label: "الموديولات" },
          { label: "عقود الإيجار" },
        ]}
        eyebrow="مصروفات ثابتة منظّمة"
        title="عقود الإيجار"
        tagline="إيجار المحلّ من أكبر مصروفات الصيدلية. هذا الموديول يحوّله من مصروف يُسجَّل في الوقت غير المناسب إلى التزام شهري واضح بقيود تلقائية وتذكيرات قبل الاستحقاق."
      />

      <h2 className="mb-3 mt-6 text-2xl font-bold text-brand-500">
        1. عقد الإيجار
      </h2>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: FileSignature,
            title: "بطاقة عقد كاملة",
            body: "المؤجر، العنوان، الفرع المستأجر، بداية ونهاية العقد، قيمة الإيجار السنوي، دورة الدفع (شهرية، ربعية، سنوية).",
          },
          {
            icon: Calendar,
            title: "جدولة آلية للدفعات",
            body: "بمجرد إدخال العقد، يولّد النظام جدولاً بكل الدفعات المستحقّة حتى نهاية العقد، بتواريخها وقيمها.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        2. الدفعات الشهرية
      </h2>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: Repeat,
            title: "دفعة مستحقّة → سند صرف",
            body: "عند الدفع، يحوّل النظام الدفعة المستحقّة إلى سند صرف من الخزينة أو البنك، مع قيد محاسبي متوازن تلقائي.",
          },
          {
            icon: BookOpenCheck,
            title: "قيد الاستحقاق التلقائي",
            body: "في نهاية كل شهر، يولّد قيد استحقاق لإيجار الشهر الحالي سواء دُفع أم لا، ليعكس الواقع المحاسبي الصحيح.",
          },
        ]}
      />

      <Callout tone="info" title="ميّزة بسيطة لكنها تحمي">
        <p className="mb-0">
          في كثير من الصيدليات، يُسجَّل الإيجار عند دفعه فقط، فيصبح الشهر الذي
          تأخّرت فيه الدفعة «مربحاً» على الورق ثم يأتي الدفع في شهر لاحق فيظهر
          خسارة وهمية. النظام يحلّ هذا بالاستحقاق الشهري الآلي.
        </p>
      </Callout>

      <FeatureGrid
        cols={2}
        features={[
          {
            icon: Bell,
            title: "تذكيرات قبل الاستحقاق",
            body: "قبل موعد كل دفعة بأيام محدّدة، يظهر تنبيه في لوحة التحكّم ليتمّ تحضير المبلغ أو التواصل مع المؤجر.",
          },
          {
            icon: RefreshCw,
            title: "تجديد العقد",
            body: "عند انتهاء العقد، يمكن تجديده بنفس البيانات مع تعديل المدّة والقيمة، فيواصل النظام توليد الدفعات على العقد الجديد.",
          },
        ]}
      />

      <NextPrev slug="rentals" />
    </PageShell>
  );
}
