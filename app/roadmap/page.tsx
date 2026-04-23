import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Callout from "@/components/Callout";
import FeatureGrid from "@/components/FeatureGrid";
import NextPrev from "@/components/NextPrev";
import {
  Handshake,
  TrendingDown,
  ShoppingBag,
  Sparkles,
  Scale,
} from "lucide-react";

export const metadata = {
  title: "الميزات المستقبلية — دليل ثاني اثنين",
  description:
    "ما الذي يعمل عليه فريق ثاني اثنين الآن: تحليل ومقارنة الموردين، التوريد التفضيلي عبر شركاء السلسلة، وتكاملات سلّة وزد.",
};

export default function RoadmapPage() {
  return (
    <PageShell>
      <PageHero
        breadcrumbs={[
          { label: "الدليل", href: "/" },
          { label: "الميزات المستقبلية" },
        ]}
        eyebrow="ما الذي نعمل عليه"
        title="الميزات المستقبلية"
        tagline="ثاني اثنين ليس نظاماً جامداً. الفريق يعمل باستمرار على توسيع ما يقدّمه للصيدليات. هذه الصفحة تعرض أبرز ما هو قادم — بعضه قيد التطوير، وبعضه قريب من الإطلاق."
      />

      <section className="mb-10 rounded-2xl border border-accent-200 bg-gradient-to-br from-accent-50/50 to-white p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-2">
          <Sparkles size={18} className="text-accent-600" />
          <span className="text-sm font-bold text-accent-700">
            لماذا نخبرك بما هو قادم؟
          </span>
        </div>
        <p className="max-w-3xl text-[15px] leading-8 text-ink-600">
          لأن اختيار نظام إدارة قرار طويل الأمد. من المنصف أن تعرف إلى أين
          يتّجه النظام قبل أن تلتزم به. عندما تختار ثاني اثنين، أنت لا تختار
          ما هو متاح اليوم فحسب، بل تنضمّ لمسار تطوير واضح.
        </p>
      </section>

      <Callout tone="success" title="نقاط الولاء أصبحت جاهزة!">
        <p className="mb-0">
          ما كان ضمن الميزات المستقبلية أصبح متاحاً الآن كموديول مستقلّ. تفاصيل
          البرنامج، الحملات، التخصيص، والتقارير متوفّرة في صفحة{" "}
          <a
            href="/modules/loyalty/"
            className="font-semibold text-brand-600 underline"
          >
            نقاط الولاء
          </a>
          .
        </p>
      </Callout>

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        1. تحليل ومقارنة الموردين
      </h2>
      <p className="mb-6 max-w-3xl text-[15px] leading-8 text-ink-500">
        خدمة تحليل تعطي صاحب الصيدلية رؤية أعمق على موردّيه: من الأسرع
        توريداً؟ من الأفضل سعراً على كل صنف؟ من أعلى نسبة دفعات قريبة
        الانتهاء عند التسليم؟ قرارات الشراء مبنيّة على بيانات فعلية، لا على
        الانطباع.
      </p>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: Scale,
            title: "مقارنة أسعار بين الموردين",
            body: "نفس الصنف عند أكثر من مورّد — ترى السعر، الخصومات، والتكلفة الفعلية بعد كل شيء. تشتري من الأفضل بوعي كامل.",
          },
          {
            icon: TrendingDown,
            title: "تقييم أداء المورّد",
            body: "مؤشرات: زمن التوريد، جودة الدفعات، نسبة المرتجعات، قرب الصلاحيات. تحوّل التعامل من عاطفي إلى مبنيّ على أرقام.",
          },
        ]}
      />

      <h2 className="mb-3 mt-12 text-2xl font-bold text-brand-500">
        2. تكاملات مع منصّات التجارة الإلكترونية
      </h2>
      <p className="mb-6 max-w-3xl text-[15px] leading-8 text-ink-500">
        الصيدلية اليوم ليست مكاناً واحداً. يبيع جزء من عملائك عبر متجر
        إلكتروني، وتكامل النظام مع هذه المنصّات يعني عدم فصل مخزون المتجر
        عن مخزون الفرع.
      </p>
      <FeatureGrid
        cols={2}
        features={[
          {
            icon: ShoppingBag,
            title: "تكامل مع سلّة",
            body: "مزامنة المنتجات، الأسعار، المخزون، والطلبات بين ثاني اثنين ومتجرك على سلّة. كل طلب من المتجر يخصم المخزون تلقائياً، وكل بيع من الفرع يحدّث المتجر.",
          },
          {
            icon: ShoppingBag,
            title: "تكامل مع زد",
            body: "نفس المزامنة الكاملة على منصّة زد: المنتجات، المخزون، الأسعار، الطلبات، وحالات التوصيل — كلها مرتبطة بقلب واحد هو ثاني اثنين.",
          },
        ]}
      />

      <Callout tone="tip" title="لماذا هذه التكاملات قادمة؟">
        <p className="mb-0">
          لأن الصيدلية التي تبيع من فرع واحد ومن متجر إلكتروني على منصّات
          مختلفة لا يجب أن تدير أكثر من نظام. التكامل يجعل المخزون، الفواتير،
          والمحاسبة مرجعها ثاني اثنين، والمنصّات الأخرى مجرّد واجهات بيع
          إضافية.
        </p>
      </Callout>

      <div className="my-12 rounded-2xl border border-brand-200 bg-white p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-2">
          <Handshake size={18} className="text-brand-500" />
          <span className="text-xs font-bold uppercase tracking-wider text-accent-600">
            قيد التنسيق
          </span>
        </div>
        <h2 className="mb-3 text-xl font-bold text-brand-500">
          3. توريدات شركاء ثاني اثنين
        </h2>
        <p className="mb-0 max-w-3xl text-[15px] leading-8 text-ink-600">
          نعمل على إتاحة أسعار توريد أفضل من داخل النظام مباشرةً، لتقليل
          وقت المقارنة وتبسيط قرار الشراء. تفاصيل أكثر قريباً.
        </p>
      </div>

      <section className="my-12 rounded-2xl border border-ink-100 bg-canvas p-6 sm:p-8">
        <h3 className="mb-3 text-lg font-bold text-brand-500">
          ملاحظة عامة
        </h3>
        <p className="max-w-3xl text-[15px] leading-8 text-ink-600">
          هذه الميزات ليست وعوداً نظرية. بعضها قيد التطوير الفعلي، وبعضها
          قريب من الإطلاق. جدول الإطلاق يخضع للأولويات التي يحدّدها الفريق
          بناءً على احتياجات الصيدليات. إذا كانت ميزة من هذه تهمّك، أخبرنا،
          لنرفع أولويّتها.
        </p>
      </section>

      <NextPrev slug="roadmap" />
    </PageShell>
  );
}
