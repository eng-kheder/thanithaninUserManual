import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import Callout from "@/components/Callout";
import NextPrev from "@/components/NextPrev";
import {
  Users,
  Smartphone,
  Calendar,
  Clock,
  Wallet,
  Plane,
  FileText,
  ShieldCheck,
  Briefcase,
  HeartPulse,
} from "lucide-react";

export const metadata = {
  title: "الموارد البشرية — دليل ثاني اثنين",
  description:
    "موديول الموارد البشرية: ملف الموظف، الرواتب، الحضور والانصراف، الإجازات، السلف، وبوابة الموظف الذاتية.",
};

export default function HrPage() {
  return (
    <PageShell>
      <PageHero
        breadcrumbs={[
          { label: "الدليل", href: "/" },
          { label: "الموديولات" },
          { label: "الموارد البشرية" },
        ]}
        eyebrow="مدمج بالمحاسبة والصلاحيات"
        title="الموارد البشرية"
        tagline="موديول HR ليس تطبيقاً منفصلاً. هو جزء من نفس النظام — مربوط بشجرة الحسابات، بالخزائن، بنقطة البيع (لمعرفة من باع ماذا)، وبالصلاحيات. كل ريال راتب يُصرف، وكل ساعة دوام تُسجَّل، تنعكس في المحاسبة والتقارير فوراً."
      />

      <h2 className="mb-3 mt-6 text-2xl font-bold text-brand-500">
        1. ملف الموظف
      </h2>
      <FeatureGrid
        cols={3}
        features={[
          {
            icon: Users,
            title: "بيانات شخصية ووظيفية",
            body: "هوية، جوال، مسمى وظيفي، فرع، قسم، تاريخ التعيين، نوع العقد، تفاصيل البنك لاستلام الراتب.",
          },
          {
            icon: Briefcase,
            title: "مكوّنات الراتب",
            body: "راتب أساسي، بدل سكن، بدل مواصلات، حوافز، اقتطاعات ثابتة. كل مكوّن قابل للتعديل شهرياً إن لزم.",
          },
          {
            icon: HeartPulse,
            title: "التأمينات والاشتراكات",
            body: "اشتراك GOSI، التأمين الطبي، وأي استقطاعات رسمية. يحتسبها النظام آلياً مع كل راتب.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        2. الحضور والانصراف
      </h2>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: Clock,
            title: "تسجيل يدوي أو من جهاز البصمة",
            body: "استورد بيانات الحضور من جهاز البصمة، أو سجّلها يدوياً. النظام يحسب ساعات العمل الفعلية والتأخير.",
          },
          {
            icon: Calendar,
            title: "جداول المناوبات",
            body: "ورديات الصباح والمساء، أيام الراحة، العطل الرسمية. كل ذلك يُعرّف مرّة ويُطبّق تلقائياً.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        3. الرواتب
      </h2>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: Wallet,
            title: "مسير رواتب آلي",
            body: "في نهاية الشهر، النظام يولّد مسير رواتب بمكوّنات كل موظف، يقتطع تأميناته وسلفه وغياباته، وينتج صافي الراتب.",
          },
          {
            icon: FileText,
            title: "قسائم وتقارير",
            body: "قسيمة راتب لكل موظف، ملفّ WPS لرفع الرواتب إلى البنك، وتقارير تكلفة الموظفين بحسب الفرع والقسم.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        4. الإجازات والسلف
      </h2>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: Plane,
            title: "أرصدة إجازات شفّافة",
            body: "لكل موظف رصيد إجازات يتراكم شهرياً وينقص بالاستخدام. يمكنه رؤية رصيده في بوابته الذاتية في أي لحظة.",
          },
          {
            icon: Wallet,
            title: "السلف على الراتب",
            body: "طلب سلفة، موافقة، ثم اقتطاع مجدول من الرواتب اللاحقة. كل ذلك بقيود محاسبية آلية.",
          },
        ]}
      />

      <div className="my-10 rounded-2xl border-2 border-accent-500 bg-white p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-2">
          <Smartphone size={20} className="text-accent-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-accent-700">
            ميزة مميّزة
          </span>
        </div>
        <h2 className="mb-3 text-2xl font-bold text-brand-500">
          5. بوابة الموظف الذاتية
        </h2>
        <p className="mb-5 max-w-3xl text-[15px] leading-8 text-ink-600">
          لكل موظف حسابه الخاص في بوابة منفصلة. لا يحتاج المدير لسماع طلب
          الإجازة أو سؤال عن رصيد، ولا يحتاج المحاسب لطباعة قسائم الرواتب
          شهرياً.
        </p>
        <FeatureGrid
          cols={2}
          features={[
            {
              icon: Plane,
              title: "تقديم الإجازات إلكترونياً",
              body: "الموظف يختار نوع الإجازة، تاريخها، ويرفع أي مستند داعم. الطلب يصل للمدير وتتمّ الموافقة أو الرفض من داخل النظام.",
            },
            {
              icon: FileText,
              title: "قسائم الراتب وخطابات العمل",
              body: "كل قسائم الموظف السابقة في بوابته، ويمكنه إنشاء خطاب تعريف/طلب خدمات ذاتياً.",
            },
            {
              icon: Wallet,
              title: "طلبات السلف",
              body: "طلب سلفة، تتبّع حالتها، ومشاهدة جدول الاقتطاعات القادمة — دون الحاجة للتواصل مع قسم الحسابات.",
            },
            {
              icon: Clock,
              title: "سجل الحضور",
              body: "الموظف يرى ساعات حضوره، تأخيره، أيام غيابه، ورصيد إجازاته. شفافية تقلّل الخلافات.",
            },
          ]}
        />
      </div>

      <Callout tone="tip" title="ربط HR بالصلاحيات">
        <p className="mb-0">
          كل موظف جديد يُضاف هنا يُنشأ له تلقائياً مستخدم في النظام بصلاحيات
          دوره الوظيفي، وعند انتهاء علاقته يُعطَّل وصوله فوراً. نظام واحد بدلاً
          من متابعتين متوازيتين.
        </p>
      </Callout>

      <FeatureGrid
        cols={2}
        features={[
          {
            icon: ShieldCheck,
            title: "مخالفات وجزاءات",
            body: "سجّل المخالفات المنضبطة مع قيمتها وتاريخها، واحسمها تلقائياً من راتب الشهر الذي حدثت فيه.",
          },
          {
            icon: FileText,
            title: "العقود وانتهاؤها",
            body: "تنبيهات قبل انتهاء العقد أو انتهاء الإقامة، لتجنّب المفاجآت القانونية ومتابعة التجديد في وقته.",
          },
        ]}
      />

      <NextPrev slug="hr" />
    </PageShell>
  );
}
