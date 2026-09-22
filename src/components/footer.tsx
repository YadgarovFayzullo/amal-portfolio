"use client";

import { Icon } from "./icon";
import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="relative mt-auto overflow-hidden bg-inverse px-6 pb-8 pt-16 text-center md:px-50 md:pt-16">
      {/* Скруглённая «шапка» подвала того же цвета, что и страница. */}
      <div className="absolute inset-x-0 top-0 h-8 rounded-b-[32px] bg-bg" />

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-4 top-12 flex items-center gap-2 rounded-[22px] p-3 text-sm font-semibold text-inverse-fg md:right-16 md:top-14"
      >
        <Icon name="arrow-up" size={20} />
        {site.ui.toTop[locale]}
      </button>

      <div className="relative flex flex-col items-center gap-8 pt-10">
        <div className="flex flex-col gap-1 text-inverse-fg">
          <span className="text-[40px] font-semibold leading-[48px]">2026©</span>
          <span className="text-2xl font-medium leading-7">{site.name[locale]}</span>
        </div>
        <p className="max-w-[720px] py-4 text-base font-medium text-inverse-muted">
          {site.ui.madeWith[locale]}
        </p>
      </div>
    </footer>
  );
}
