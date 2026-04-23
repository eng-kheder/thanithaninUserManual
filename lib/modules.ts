export type NavGroup = {
  title: string;
  items: NavItem[];
};

export type NavItem = {
  slug: string;
  title: string;
  href: string;
  description?: string;
};

export const navGroups: NavGroup[] = [
  {
    title: "البداية",
    items: [
      { slug: "home", title: "نظرة عامة", href: "/" },
      { slug: "why", title: "لماذا ثاني اثنين؟", href: "/why/" },
    ],
  },
  {
    title: "العمليات اليومية",
    items: [
      {
        slug: "sales",
        title: "المبيعات",
        href: "/modules/sales/",
        description: "عروض الأسعار، طلبات البيع، الفواتير، المرتجعات",
      },
      {
        slug: "purchases",
        title: "المشتريات",
        href: "/modules/purchases/",
        description: "الموردون، طلبات الشراء، فواتير ومرتجعات الشراء",
      },
      {
        slug: "inventory",
        title: "المخزون والدفعات",
        href: "/modules/inventory/",
        description: "المستودعات، المنتجات، دفعات الدواء، الصلاحيات",
      },
      {
        slug: "pos",
        title: "نقطة البيع",
        href: "/modules/pos/",
        description: "جلسات البيع، الحماية من المنتهي، التحويل التلقائي",
      },
    ],
  },
  {
    title: "الجانب المالي",
    items: [
      {
        slug: "accounting",
        title: "المحاسبة",
        href: "/modules/accounting/",
        description: "شجرة الحسابات، قيود اليومية، الضرائب، مراكز التكلفة",
      },
      {
        slug: "safes",
        title: "الخزائن والبنوك",
        href: "/modules/safes/",
        description: "الإيرادات، المصروفات، الشيكات، التحويلات",
      },
      {
        slug: "fixed-assets",
        title: "الأصول الثابتة",
        href: "/modules/fixed-assets/",
        description: "تسجيل الأصول، الاستهلاك، الاستبعاد، إعادة التقييم",
      },
      {
        slug: "rentals",
        title: "عقود الإيجار",
        href: "/modules/rentals/",
        description: "عقود الإيجار، الدفعات الشهرية، القيود التلقائية",
      },
    ],
  },
  {
    title: "الإدارة والتنظيم",
    items: [
      {
        slug: "hr",
        title: "الموارد البشرية",
        href: "/modules/hr/",
        description: "الموظفون، الرواتب، الإجازات، الحضور، بوابة الموظف",
      },
      {
        slug: "branches",
        title: "الفروع",
        href: "/modules/branches/",
        description: "إدارة الفروع وربطها بالخزائن والمستودعات",
      },
      {
        slug: "authorization",
        title: "الصلاحيات والأدوار",
        href: "/modules/authorization/",
        description: "المستخدمون، الأدوار، الباقات، تعدد الشركات",
      },
    ],
  },
  {
    title: "الإضافات والتقارير",
    items: [
      {
        slug: "integrations",
        title: "التكاملات: زاتكا ورصد",
        href: "/modules/integrations/",
        description: "الفوترة الإلكترونية وتتبع الأدوية",
      },
      {
        slug: "loyalty",
        title: "نقاط الولاء",
        href: "/modules/loyalty/",
        description: "جمع النقاط، استبدالها، وحملات ولائية",
      },
      {
        slug: "reports",
        title: "التقارير",
        href: "/modules/reports/",
        description: "تقارير المخزون، المبيعات، المالية، والامتثال",
      },
    ],
  },
  {
    title: "ما الذي يأتي قريباً؟",
    items: [
      {
        slug: "roadmap",
        title: "الميزات المستقبلية",
        href: "/roadmap/",
        description: "نقاط الولاء، تحليل الموردين، توريد تفضيلي، سلّة وزد",
      },
    ],
  },
];

export const allNavItems: NavItem[] = navGroups.flatMap((g) => g.items);

export function findNav(slug: string): NavItem | undefined {
  return allNavItems.find((i) => i.slug === slug);
}

export function getAdjacent(slug: string): {
  prev?: NavItem;
  next?: NavItem;
} {
  const flat = allNavItems;
  const idx = flat.findIndex((i) => i.slug === slug);
  return {
    prev: idx > 0 ? flat[idx - 1] : undefined,
    next: idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : undefined,
  };
}
