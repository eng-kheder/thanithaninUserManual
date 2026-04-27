import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import Callout from "@/components/Callout";
import NextPrev from "@/components/NextPrev";
import {
  Landmark,
  Wallet,
  ArrowDownToLine,
  ArrowUpFromLine,
  FileSignature,
  ArrowRightLeft,
  Banknote,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "الخزائن والبنوك — دليل ثاني اثنين",
  description:
    "الخزائن، الحسابات البنكية، سندات القبض والصرف، الشيكات، التحويلات الداخلية، والحركة النقدية اللحظية.",
};

export default function SafesPage() {
  return (
    <PageShell>
      <PageHero
        breadcrumbs={[
          { label: "الدليل", href: "/" },
          { label: "الموديولات" },
          { label: "الخزائن والبنوك" },
        ]}
        eyebrow="الحركة النقدية"
        title="الخزائن والبنوك"
        tagline="كل ريال يدخل المحلّ أو يخرج منه يمرّ من هنا. الخزائن لنقد الفروع، الحسابات البنكية للتحويلات، سندات القبض والصرف للموثّقة، والشيكات بدورة حياتها الكاملة — كل ذلك مرتبط تلقائياً بالمحاسبة وذمم العملاء والموردين."
      />

      <h2 className="mb-3 mt-6 text-2xl font-bold text-brand-500">
        1. الخزائن
      </h2>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: Wallet,
            title: "خزينة لكل فرع",
            body: "كل فرع له خزينته المستقلّة بأمينها ورصيدها. المحاسبة مربوطة مباشرة بحركة الخزائن بدون حسابات وسيطة.",
          },
          {
            icon: Landmark,
            title: "حسابات بنكية متعدّدة",
            body: "أضف حسابات البنوك بأسمائها وأرقامها، واستخدمها في التحويلات، الشيكات، وسندات القبض والصرف.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        2. سندات القبض والصرف
      </h2>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: ArrowDownToLine,
            title: "سند قبض",
            body: "تحصيل من عميل — نقداً، حوالة، أو شيك. مربوط بفاتورة معيّنة أو على حساب. يخفّض رصيد العميل ويزيد رصيد الخزينة.",
          },
          {
            icon: ArrowUpFromLine,
            title: "سند صرف",
            body: "دفع للمورّد أو مصروف عام. مربوط بفاتورة شراء أو بند مصروف، ويحدّث الرصيد مباشرةً مع القيد المحاسبي.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        3. الشيكات — دورة حياة كاملة
      </h2>
      <p className="mb-6 max-w-3xl text-[15px] leading-8 text-ink-500">
        النظام لا يكتفي بتسجيل الشيك، بل يتابعه من لحظة استلامه/إصداره حتى
        صرفه أو ارتداده. كل مرحلة تولّد قيداً محاسبياً مناسباً.
      </p>
      <FeatureGrid
        cols={3}
        features={[
          {
            icon: FileSignature,
            title: "شيكات واردة",
            body: "شيك من عميل: برسم التحصيل → مودع → محصّل، أو مرتجع. كل انتقال يعكس نفسه في المحاسبة.",
          },
          {
            icon: FileSignature,
            title: "شيكات صادرة",
            body: "شيك للمورّد أو لمصروف: مصدَر → مسلّم → مصروف/مرتجع. ترى في أي لحظة ما الشيكات التي لم تُصرف بعد.",
          },
          {
            icon: Banknote,
            title: "تقرير الشيكات المعلّقة",
            body: "قائمة كل الشيكات التي لم تنتهِ دورتها بعد، مرتّبة بتاريخ الاستحقاق، للتذكير والمتابعة.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        4. التحويلات الداخلية
      </h2>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: ArrowRightLeft,
            title: "تحويل بين خزينة وبنك",
            body: "إيداع نقد الفرع في البنك، أو سحب مبلغ من البنك للخزينة. عملية واحدة تنشئ قيداً متوازناً بالطرفين.",
          },
          {
            icon: ArrowRightLeft,
            title: "تحويل بين الفروع",
            body: "نقل مبلغ من خزينة فرع لخزينة فرع آخر. مع صلاحيات واضحة على الموافقة لمنع الأخطاء.",
          },
        ]}
      />

      <Callout tone="info" title="الربط المباشر مع نقطة البيع">
        <p className="mb-0">
          في نهاية كل وردية، ما يُجمع من نقد على نقطة البيع يدخل مباشرةً في
          رصيد خزينة الفرع، بدون أي إدخال يدوي. الفروقات (إن وجدت) تُسجَّل في
          حساب منفصل للمراقبة.
        </p>
      </Callout>

      <FeatureGrid
        cols={2}
        features={[
          {
            icon: ShieldCheck,
            title: "صلاحيات على الخزائن",
            body: "أمين الخزينة يرى خزينته فقط، المدير المالي يرى كل الخزائن، والمالك يرى الإجماليات. لا تداخل بين الصلاحيات.",
          },
          {
            icon: Banknote,
            title: "كشف حركة لحظي",
            body: "كشف حركة أي خزينة أو بنك متاح في أي وقت، بفلاتر على التاريخ والنوع والمبلغ، قابل للتصدير.",
          },
        ]}
      />

      <NextPrev slug="safes" />
    </PageShell>
  );
}
