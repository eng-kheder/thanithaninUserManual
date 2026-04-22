import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Callout from "@/components/Callout";
import FeatureGrid from "@/components/FeatureGrid";
import NextPrev from "@/components/NextPrev";
import {
  ScanLine,
  ShieldCheck,
  Ban,
  CalendarClock,
  Keyboard,
  Printer,
  RefreshCcw,
  Wallet,
  Users,
  Sparkles,
  ClipboardCheck,
  Receipt,
} from "lucide-react";

export const metadata = {
  title: "نقطة البيع — دليل ثاني اثنين",
  description:
    "نقطة البيع في ثاني اثنين: جلسات البيع، رفض الدفعات المنتهية، التحويل التلقائي للدفعة الأقدم، طرق الدفع المتعدّدة، والربط اللحظي مع المخزون.",
};

export default function PosPage() {
  return (
    <PageShell>
      <PageHero
        breadcrumbs={[
          { label: "الدليل", href: "/" },
          { label: "الموديولات" },
          { label: "نقطة البيع" },
        ]}
        eyebrow="حارس الصيدلية"
        title="نقطة البيع"
        tagline="نقطة البيع في ثاني اثنين ليست مجرّد شاشة لطباعة فواتير. هي نقطة الحماية الأخيرة قبل أن يغادر الدواء الصيدلية. كل عملية بيع تمرّ من خلالها تُفحص مقابل قواعد الدفعات، الصلاحيات، والصلاحية، قبل أن يُصرح بها."
      />

      <section className="mb-10 rounded-2xl border-2 border-brand-500 bg-gradient-to-br from-brand-50 to-white p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-2">
          <ShieldCheck size={20} className="text-brand-500" />
          <span className="text-xs font-bold uppercase tracking-wider text-accent-600">
            ما لن تجده في أي نظام تقليدي
          </span>
        </div>
        <h2 className="mb-3 text-xl font-bold text-brand-600">
          حماية مدمجة على مستوى كل حبّة
        </h2>
        <p className="max-w-3xl text-[15px] leading-8 text-ink-600">
          لأن نقطة البيع متّصلة مباشرةً بموديول الدفعات، كل محاولة صرف تمرّ
          عبر فحوصات حقيقية — لا تحذيرات يمكن تجاوزها، بل قواعد صارمة تمنع
          الخطأ قبل أن يحدث.
        </p>
      </section>

      <h2 className="mb-3 mt-10 text-2xl font-bold text-brand-500">
        1. الحماية من الدفعات المنتهية
      </h2>
      <p className="mb-6 max-w-3xl text-[15px] leading-8 text-ink-500">
        إذا مسح البائع باركود منتج مرتبط بدفعة انتهت صلاحيتها، نقطة البيع
        ترفض العملية فوراً وتعرض رسالة واضحة: «هذه الدفعة منتهية — لا يمكن
        صرفها». لا استثناءات، لا «تجاهل وتابع». المنتهي لا يُباع.
      </p>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: Ban,
            title: "رفض تلقائي للمنتهي",
            body: "أي دفعة تجاوز تاريخها الحالي تُرفض على نقطة البيع بدون إمكانية تجاوز، حتى لو كانت موجودة في المخزون. تُرفع في تقرير الحجر للإتلاف.",
          },
          {
            icon: CalendarClock,
            title: "تنبيه على قرب الانتهاء",
            body: "إذا كانت الدفعة ستنتهي خلال 30 يوماً، يظهر تحذير أصفر على الشاشة — البيع مسموح، لكن البائع يعلم أنه يصرف دفعة قريبة من الانتهاء.",
          },
        ]}
      />

      <div className="my-10 rounded-2xl border-2 border-accent-500 bg-white p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-2">
          <Sparkles size={20} className="text-accent-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-accent-700">
            المفاجأة الحقيقية
          </span>
        </div>
        <h2 className="mb-3 text-2xl font-bold text-brand-500">
          2. التحويل التلقائي للدفعة الأقدم (FEFO)
        </h2>
        <p className="mb-5 max-w-3xl text-[15px] leading-8 text-ink-600">
          تخيّل أن البائع — بحسن نية أو بالخطأ — يمسح شريطاً من دفعة حديثة،
          بينما في المستودع دفعة أقدم منها لم تُصرف بعد. في الأنظمة العادية
          تمرّ العملية. في ثاني اثنين:
        </p>
        <ul className="space-y-3 text-[15px] leading-8 text-ink-600">
          <li className="flex gap-3">
            <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-50 text-xs font-bold text-accent-700">
              1
            </span>
            <span>
              النظام يكتشف أن هناك دفعة أقدم من نفس المنتج في نفس المستودع.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-50 text-xs font-bold text-accent-700">
              2
            </span>
            <span>
              يُظهر تنبيهاً للبائع: «هذه الدفعة حديثة — يوجد دفعة أقدم
              (رقم X، تنتهي يوم Y). اسحب من الدفعة الأقدم أولاً.»
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-50 text-xs font-bold text-accent-700">
              3
            </span>
            <span>
              النظام يعيد توجيه الصرف تلقائياً للدفعة الأقدم، ويعدّل الرصيد
              في لحظته.
            </span>
          </li>
        </ul>
        <Callout tone="success" title="النتيجة">
          <p className="mb-0">
            يستحيل أن تبقى دفعة قديمة في المستودع بينما تُصرف الدفعات
            الأحدث منها. تقارير التلف تنخفض بشكل ملحوظ، وخسائر الانتهاء
            تصبح أقل من كثير.
          </p>
        </Callout>
      </div>

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        3. جلسات البيع
      </h2>
      <p className="mb-6 max-w-3xl text-[15px] leading-8 text-ink-500">
        كل وردية تبدأ بفتح جلسة وتنتهي بإغلاقها. النظام يسجّل كل ما حدث خلالها:
        المبيعات، المرتجعات، طرق الدفع، والفروقات النقدية.
      </p>
      <FeatureGrid
        cols={3}
        features={[
          {
            icon: ClipboardCheck,
            title: "فتح الجلسة برصيد افتتاحي",
            body: "الكاشير يدخل النقد الموجود في الدرج قبل بدء العمل، وهو الرصيد الذي سيقارن به عند الإغلاق.",
          },
          {
            icon: Wallet,
            title: "رصد كل طرق الدفع",
            body: "كاش، مدى، بطاقات ائتمانية، تحويل، آجل. كل طريقة دفع تُسجَّل بإجماليها خلال الجلسة.",
          },
          {
            icon: RefreshCcw,
            title: "إغلاق الجلسة وتسوية النقد",
            body: "عند الإغلاق، الكاشير يدخل النقد الفعلي، والنظام يحسب الفرق (زيادة/نقص) ويحفظه في قيد محاسبي.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        4. تجربة البائع اليومية
      </h2>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: ScanLine,
            title: "مسح باركود سريع",
            body: "مسح الباركود يضيف المنتج فوراً، يختار الدفعة المناسبة بـ FEFO، ويحدّث الإجمالي. لا نقرات إضافية.",
          },
          {
            icon: Keyboard,
            title: "بحث بالاسم أو الاسم العلمي",
            body: "إذا لم يتوفّر باركود، يبحث البائع بالاسم التجاري أو العلمي ويختار من قائمة مختصرة.",
          },
          {
            icon: Users,
            title: "العملاء وبطاقات الولاء",
            body: "اختيار العميل من ملف العملاء، مع عرض رصيده، خصوماته، وتاريخه الشرائي على الشاشة.",
          },
          {
            icon: Printer,
            title: "طباعة فاتورة زاتكا",
            body: "كل فاتورة تُطبع بصيغة الفوترة الإلكترونية المرحلة الثانية، مع رمز QR جاهز للتحقّق.",
          },
          {
            icon: Receipt,
            title: "مرتجعات سهلة ومضبوطة",
            body: "استرجاع أصناف من فاتورة محدّدة مع إعادة الدفعة لمخزونها الأصلي، بقيد محاسبي عكسي تلقائي.",
          },
          {
            icon: ShieldCheck,
            title: "صلاحيات على البائع",
            body: "الخصم اليدوي، تعديل السعر، إلغاء الفاتورة — كلها مربوطة بصلاحيات. الموظف يرى فقط ما يحق له.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        5. الربط اللحظي
      </h2>
      <Callout tone="info" title="كل فاتورة بيع تفعل هذه الأمور في نفس الثانية">
        <ul className="mb-0 space-y-2">
          <li>• خصم الكميات من الدفعات المعنية في المستودع.</li>
          <li>• إنشاء قيد محاسبي تلقائي (مدين/دائن، حسب إعدادات الموديول).</li>
          <li>• تحديث رصيد العميل إذا كان البيع آجلاً.</li>
          <li>• تسجيل الحركة في جلسة البيع الحالية.</li>
          <li>• توقيع الفاتورة لزاتكا وإنشاء رمز QR.</li>
          <li>• (اختياري) إرسال بيانات الدفعة المصروفة لمنصّة رصد.</li>
        </ul>
      </Callout>

      <NextPrev slug="pos" />
    </PageShell>
  );
}
