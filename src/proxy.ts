import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n";

function preferredLocale(request: NextRequest) {
  const header = request.headers.get("accept-language") ?? "";
  const languages = header.split(",").map((part) => part.split(";")[0].trim().toLowerCase());
  for (const language of languages) {
    const match = locales.find((locale) => language === locale || language.startsWith(`${locale}-`));
    if (match) return match;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return;

  request.nextUrl.pathname = `/${preferredLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Пропускаем служебные пути и статические файлы (всё, где есть точка).
  matcher: ["/((?!_next|img|fonts|.*\\..*).*)"],
};
