import Link from "next/link";
import { ProjectArt } from "./project-art";
import { site } from "@/content/site";
import type { Case } from "@/content/types";
import type { Locale } from "@/lib/i18n";

export function ProjectCard({ item, locale }: { item: Case; locale: Locale }) {
  return (
    <Link href={`/${locale}/projects/${item.slug}`} className="group flex flex-col items-center gap-2">
      <div className="relative w-full overflow-hidden rounded-[26px]">
        <ProjectArt slug={item.slug} variant="card" tags={item.tags} />
        {/* Фирменный баннер из макета: проявляется при наведении. */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <ProjectArt slug={item.slug} variant="hover" tags={item.tags} />
        </div>
        {item.comingSoon && (
          <img
            src="/img/home/soon.svg"
            alt={site.ui.comingSoon[locale]}
            className="pointer-events-none absolute right-0 top-0 size-16 md:size-20"
          />
        )}
      </div>
      <div className="flex w-full flex-col gap-0.5 px-4 text-left">
        <p className="text-base font-semibold leading-5 text-fg">{item.name}</p>
        <p className="text-sm font-medium leading-5 text-muted">{item.subtitle[locale]}</p>
      </div>
    </Link>
  );
}
