import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Callout from "@/components/Callout";
import FeatureGrid from "@/components/FeatureGrid";
import NextPrev from "@/components/NextPrev";
import {
  ScanLine,
  ShieldCheck,
  Ban,
  Fingerprint,
  Keyboard,
  Printer,
  RefreshCcw,
  Wallet,
  Users,
  Sparkles,
  ClipboardCheck,
  Receipt,
  Smartphone,
  PackagePlus,
} from "lucide-react";

export const metadata = {
  title: "نقطة البيع — دليل ثاني اثنين",
  description:
    "نقطة البيع في ثاني اثنين: جلسات البيع، باقات الترويج، التحقق من الرقم التسلسلي، البحث بموديل جهاز الزبون، طرق الدفع المتعدّدة، والربط اللحظي مع المخزون.",
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
        eyebrow="حارس المحلّ"
        title="نقطة البيع"
        tagline="نقطة البيع في ثاني اثنين ليست مجرّد شاشة لطباعة فواتير. هي نقطة الحماية الأخيرة قبل أن تغادر القطعة المحلّ. كل عملية بيع تمرّ من خلالها تُفحص مقابل قواعد المخزون، الصلاحيات، والأرقام التسلسلية، قبل أن يُصرَّح بها."
      />

      <section className="mb-10 rounded-2xl border-2 border-brand-500 bg-gradient-to-br from-brand-50 to-white p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-2">
          <ShieldCheck size={20} className="text-brand-500" />
          <span className="text-xs font-bold uppercase tracking-wider text-accent-600">
            ما لن تجده في أي نظام تقليدي
          </span>
        </div>
        <h2 className="mb-3 text-xl font-bold text-brand-600">
          حماية مدمجة على مستوى كل قطعة
        </h2>
        <p className="max-w-3xl text-[15px] leading-8 text-ink-600">
          لأن نقطة البيع متّصلة مباشرةً بالمخزون والأرقام التسلسلية، كل
          محاولة صرف تمرّ عبر فحوصات حقيقية — لا تحذيرات يمكن تجاوزها، بل
          قواعد صارمة تمنع الخطأ قبل أن يحدث.
        </p>
      </section>

      <h2 className="mb-3 mt-10 text-2xl font-bold text-brand-500">
        1. التحقّق من الرقم التسلسلي
      </h2>
      <p className="mb-6 max-w-3xl text-[15px] leading-8 text-ink-500">
        إذا حاول البائع إدخال رقم تسلسلي بيع سابقاً (سهواً أو خطأً)، نقطة
        البيع ترفض العملية فوراً وتعرض رسالة واضحة: «هذه القطعة بيعت
        بفاتورة رقم X — لا يمكن بيعها مرّة أخرى». لا استثناءات، لا
        «تجاهل وتابع».
      </p>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: Ban,
            title: "رفض البيع المزدوج",
            body: "أي قطعة بسيريال محدّد بيعت سابقاً تُرفض على نقطة البيع. لا يمكن إدخال نفس الرقم في فاتورتين مختلفتين، حتى لو كان الكاشير مختلفاً.",
          },
          {
            icon: Fingerprint,
            title: "تسجيل سيريال البيع",
            body: "للأصناف المتتبّعة، الكاشير يدخل السيريال (يدوياً أو بالماسح) فيرتبط بالفاتورة. عند المرتجع، يُسترجَع نفس السيريال ولا يُقبل غيره.",
          },
        ]}
      />

      <div className="my-10 rounded-2xl border-2 border-accent-500 bg-white p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-2">
          <Sparkles size={20} className="text-accent-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-accent-700">
            البحث بالجهاز
          </span>
        </div>
        <h2 className="mb-3 text-2xl font-bold text-brand-500">
          2. البائع يبحث بموديل جهاز الزبون
        </h2>
        <p className="mb-5 max-w-3xl text-[15px] leading-8 text-ink-600">
          الزبون يدخل المحلّ ويقول «عندي جهاز موديل كذا، أبي قطعة معيّنة».
          البائع يفتح نقطة البيع، يكتب موديل الجهاز، ويظهر له فقط ما يتوافق
          مع هذا الموديل من المخزون. لا تشتيت، لا أخطاء «بعت قطعة لجهاز
          مختلف بالخطأ».
        </p>
        <FeatureGrid
          cols={2}
          features={[
            {
              icon: Smartphone,
              title: "بحث ذكي بالموديل",
              body: "اكتب موديل الجهاز، يفلتر النظام كل القطع المتوافقة معه: الإكسسوارات، قطع الصيانة، أو ما يخصّ هذا الموديل تحديداً.",
            },
            {
              icon: ScanLine,
              title: "أو امسح باركود السلعة مباشرةً",
              body: "إذا الزبون أحضر السلعة من الرفّ، الباركود يضيفها للفاتورة فوراً. النظام يدعم الطريقتين بنفس السرعة.",
            },
          ]}
        />
      </div>

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        3. الباقات والعروض المرتبطة
      </h2>
      <p className="mb-6 max-w-3xl text-[15px] leading-8 text-ink-500">
        غالباً ما يحتاج الزبون أكثر من قطعة معاً (شاحن + كيبل + علبة، أو قطعة
        صيانة + خدمة تركيب). الباقات تجعل البيع أسرع وتزيد متوسط الفاتورة.
      </p>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: PackagePlus,
            title: "باقات جاهزة بسعر مغرٍ",
            body: "أنشئ باقة من عدّة أصناف بسعر إجمالي أقل من مجموع الأسعار الفردية. اختر الباقة على نقطة البيع وتُضاف كل أصنافها بنقرة.",
          },
          {
            icon: Sparkles,
            title: "اقتراحات تلقائية",
            body: "اشترى الزبون قطعة معيّنة؟ النظام يقترح ما يُكمّلها (حماية، شاحن متوافق، إكسسوار). البائع يقترحها على الزبون فيرتفع متوسط الفاتورة.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        4. جلسات البيع
      </h2>
      <p className="mb-6 max-w-3xl text-[15px] leading-8 text-ink-500">
        كل وردية تبدأ بفتح جلسة وتنتهي بإغلاقها. النظام يسجّل كل ما حدث
        خلالها: المبيعات، المرتجعات، طرق الدفع، والفروقات النقدية.
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
            body: "كاش، مدى، Apple Pay، تحويل، آجل. كل طريقة دفع تُسجَّل بإجماليها خلال الجلسة.",
          },
          {
            icon: RefreshCcw,
            title: "إغلاق الجلسة وتسوية النقد",
            body: "عند الإغلاق، الكاشير يدخل النقد الفعلي، والنظام يحسب الفرق (زيادة/نقص) ويحفظه في قيد محاسبي.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        5. تجربة البائع اليومية
      </h2>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: ScanLine,
            title: "مسح باركود سريع",
            body: "مسح الباركود يضيف الصنف فوراً، مع متغيّراته (لون/سعة) إن وُجدت. لا نقرات إضافية.",
          },
          {
            icon: Keyboard,
            title: "بحث متعدّد الطرق",
            body: "ابحث بالاسم، الكود، باركود، أو موديل الجهاز المتوافق. أيهما أسرع لك في تلك اللحظة.",
          },
          {
            icon: Users,
            title: "العملاء وبطاقات الولاء",
            body: "اختيار الزبون من ملف العملاء، مع عرض رصيده، خصوماته، نقاط ولائه، وتاريخه الشرائي على الشاشة.",
          },
          {
            icon: Printer,
            title: "طباعة فاتورة زاتكا",
            body: "كل فاتورة تُطبع بصيغة الفوترة الإلكترونية المرحلة الثانية، مع رمز QR جاهز للتحقّق.",
          },
          {
            icon: Receipt,
            title: "مرتجعات بالضمان",
            body: "استرجاع قطع من فاتورة محدّدة، مع التحقق من سيريال القطعة المرتجَعة وإن كان الضمان لا يزال سارياً.",
          },
          {
            icon: ShieldCheck,
            title: "صلاحيات على البائع",
            body: "الخصم اليدوي، تعديل السعر، إلغاء الفاتورة — كلها مربوطة بصلاحيات. الموظف يرى فقط ما يحقّ له.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        6. الربط اللحظي
      </h2>
      <Callout tone="info" title="كل فاتورة بيع تفعل هذه الأمور في نفس الثانية">
        <ul className="mb-0 space-y-2">
          <li>• خصم الكميّات من المخزون فوراً.</li>
          <li>• ربط الأرقام التسلسلية بالزبون وبدء عدّ الضمان.</li>
          <li>• إنشاء قيد محاسبي تلقائي (مدين/دائن، حسب إعدادات الموديول).</li>
          <li>• تحديث رصيد الزبون إذا كان البيع آجلاً، وحساب نقاط الولاء إن كانت مفعّلة.</li>
          <li>• تسجيل الحركة في جلسة البيع الحالية.</li>
          <li>• توقيع الفاتورة لزاتكا وإنشاء رمز QR.</li>
        </ul>
      </Callout>

      <NextPrev slug="pos" />
    </PageShell>
  );
}
