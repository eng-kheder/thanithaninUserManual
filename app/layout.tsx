import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ثاني اثنين — دليل استخدام النظام للصيدليات",
  description:
    "دليل متكامل لنظام ثاني اثنين: المبيعات، المشتريات، المخزون، نقطة البيع، المحاسبة، الموارد البشرية، الفروع، التقارير، وتكاملات زاتكا ورصد.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "ثاني اثنين — دليل المستخدم",
    description:
      "دليل متكامل يشرح موديولات نظام ثاني اثنين لإدارة الصيدليات.",
    type: "website",
    locale: "ar_SA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#183964" />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
