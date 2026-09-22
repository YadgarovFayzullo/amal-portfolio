import { notFound } from "next/navigation";
import { CareerList } from "@/components/career";
import { ProjectsSection } from "@/components/projects-section";
import { Reviews } from "@/components/reviews";
import { career, contacts, education, site } from "@/content/site";
import { hasLocale } from "@/lib/i18n";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <>
      <section className="mx-auto flex w-full max-w-[1440px] items-center justify-center px-4 pb-8 pt-10 md:px-20 md:pb-8 md:pt-14">
        <div className="flex w-full max-w-[800px] flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <img
              src="/img/home/avatar.webp"
              alt={site.name[lang]}
              className="size-[152px] rounded-2xl object-cover"
            />
            <div className="flex flex-col items-center gap-2">
              <p className="font-display text-[48px] leading-[52px] tracking-[-0.64px] text-[#21201c] dark:text-white md:text-[64px] md:leading-[64px]">
                product
              </p>
              <p className="rounded-lg bg-accent-soft px-2 font-pixel text-[48px] leading-[52px] tracking-[-0.64px] text-[#21201c] dark:text-white md:text-[64px] md:leading-[64px]">
                designer
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 text-center tracking-[-0.9px]">
            <h1 className="text-[26px] font-medium leading-8 text-fg md:text-4xl md:leading-10">
              {site.hero.lead[lang]}
            </h1>
            <p className="text-2xl font-medium leading-7 text-subtle md:text-[32px] md:leading-9">
              {site.hero.focus[lang]}
            </p>
          </div>

          <a
            href={contacts.telegram}
            target="_blank"
            rel="noreferrer"
            className="rounded-[26px] bg-accent px-8 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
          >
            {site.ui.connect[lang]}
          </a>
        </div>
      </section>

      <ProjectsSection locale={lang} />

      <section className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-4 py-10 md:px-50 md:py-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-medium leading-7 text-fg">{site.ui.career[lang]}</h2>
          <CareerList items={career} locale={lang} />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-medium leading-7 text-fg">{site.ui.education[lang]}</h2>
          <CareerList items={education} locale={lang} divided={false} />
        </div>
      </section>

      <Reviews locale={lang} />
    </>
  );
}
