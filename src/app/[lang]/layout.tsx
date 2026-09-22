import type { Metadata } from "next";
import { Geist, Literata, Poppins } from "next/font/google";
import { GeistPixelSquare } from "geist/font/pixel";
import { notFound } from "next/navigation";
import "../globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { themeScript } from "@/components/theme";
import { site } from "@/content/site";
import { hasLocale, locales } from "@/lib/i18n";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin", "cyrillic"],
});

/** Запасной шрифт для заголовков, пока не подключён Season Mix из макета. */
const display = Literata({
  variable: "--font-display-fallback",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  variable: "--font-poppins-var",
  subsets: ["latin"],
  weight: ["600"],
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : "ru";
  return {
    title: site.title[locale],
    description: site.description[locale],
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${geist.variable} ${display.variable} ${poppins.variable} ${GeistPixelSquare.variable} h-full`}
    >
      <head>
        <script
          type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <Header locale={lang} />
        <main className="flex-1">{children}</main>
        <Footer locale={lang} />
      </body>
    </html>
  );
}
