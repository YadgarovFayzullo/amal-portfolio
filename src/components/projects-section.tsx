"use client";

import { useState } from "react";
import { ProjectCard } from "./project-card";
import { cases, featuredCount } from "@/content/cases";
import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";

export function ProjectsSection({ locale }: { locale: Locale }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? cases : cases.slice(0, featuredCount);

  return (
    <section className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-4 py-10 md:gap-8 md:px-50 md:py-16">
      <h2 className="text-2xl font-medium leading-7 text-fg md:text-[32px] md:leading-9">
        {site.ui.projects[locale]}
      </h2>

      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {visible.map((item) => (
          <ProjectCard key={item.slug} item={item} locale={locale} />
        ))}
      </div>

      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        className="w-full rounded-[26px] px-8 py-4 text-base font-semibold text-fg transition-colors hover:bg-surface"
      >
        {expanded ? site.ui.showLess[locale] : site.ui.showAll[locale]}
      </button>
    </section>
  );
}
