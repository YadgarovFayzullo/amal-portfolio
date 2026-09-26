import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Blocks } from "@/components/case-blocks";
import { Icon } from "@/components/icon";
import { ProjectArt } from "@/components/project-art";
import { cases, getCase, getNeighbours } from "@/content/cases";
import { contacts, site } from "@/content/site";
import type { Case } from "@/content/types";
import { hasLocale, locales, type Locale } from "@/lib/i18n";

export async function generateStaticParams() {
  return locales.flatMap((lang) => cases.map((item) => ({ lang, slug: item.slug })));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/projects/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const item = getCase(slug);
  const locale: Locale = hasLocale(lang) ? lang : "ru";
  if (!item) return {};
  return { title: `${item.name} — ${site.name[locale]}`, description: item.intro[locale] };
}

export default async function CasePage({ params }: PageProps<"/[lang]/projects/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const item = getCase(slug);
  if (!item) notFound();

  const { prev, next } = getNeighbours(item.slug);
  const visibleSections = item.nda ? item.sections.slice(0, item.nda.visibleSections) : item.sections;

  return (
    <article className="flex flex-col">
      <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-1 px-4 py-4 md:px-30 md:py-8">
        <div className="flex w-full items-center">
          <Link
            href={`/${lang}`}
            className="flex items-center gap-2 rounded-[18px] p-2 text-xs font-semibold text-fg hover:opacity-70"
          >
            <Icon name="arrow-left-sm" size={16} />
            {site.ui.back[lang]}
          </Link>
        </div>

        <div className="w-full overflow-hidden rounded-[32px]">
          <div className="md:hidden">
            <ProjectArt slug={item.slug} variant="card" tags={item.tags} />
          </div>
          <div className="hidden md:block">
            <ProjectArt slug={item.slug} variant="hero" tags={item.tags} />
          </div>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-[800px] flex-col gap-8 px-4 py-8">
        <section className="flex flex-col gap-6">
          <h1 className="font-display text-[32px] leading-[36px] tracking-[-0.48px] text-fg md:text-[48px] md:leading-[48px]">
            {item.title[lang]}
          </h1>
          <p className="text-base leading-5 text-fg">{item.intro[lang]}</p>
          <div className="h-px w-full bg-line" />
          <dl className="flex items-start gap-4">
            <div className="flex flex-1 flex-col gap-2">
              <dt className="text-xs font-medium leading-4 text-secondary">{site.ui.role[lang]}</dt>
              <dd className="text-sm leading-5 text-fg">{item.role[lang]}</dd>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <dt className="text-xs font-medium leading-4 text-secondary">{site.ui.team[lang]}</dt>
              <dd className="flex flex-col gap-1 text-sm leading-5 text-fg">
                {item.team.map((member) => (
                  <span key={member.en}>{member[lang]}</span>
                ))}
              </dd>
            </div>
          </dl>
        </section>

        {item.quote && !item.nda && <Blocks blocks={[item.quote]} locale={lang} />}

        {visibleSections.map((section) => (
          <section key={section.title.en} className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold leading-7 text-fg">{section.title[lang]}</h2>
            <Blocks blocks={section.blocks} locale={lang} />
          </section>
        ))}

        {item.nda && <NdaNotice locale={lang} />}
        {item.comingSoon && (
          <p className="rounded-2xl bg-surface p-8 text-center text-base font-medium text-secondary">
            {site.ui.comingSoon[lang]}
          </p>
        )}
      </div>

      <CaseNav prev={prev} next={next} locale={lang} />
    </article>
  );
}

function NdaNotice({ locale }: { locale: Locale }) {
  return (
    <div className="relative mt-4 px-4 py-16 md:py-24">
      {/* Размытая «заглушка» вместо закрытой части кейса: выше карточки, чтобы размытие было видно и сверху, и снизу. */}
      <div className="absolute inset-0 rounded-[32px] bg-surface blur-md" aria-hidden />
      <div className="relative flex justify-center">
        <div className="flex w-full max-w-[520px] flex-col items-center gap-4 rounded-[32px] bg-bg/90 p-8 backdrop-blur-md">
          <Icon name="lock" size={64} className="text-fg" />
          <p className="font-display text-[48px] leading-[48px] tracking-[-0.48px] text-fg">NDA</p>
          <p className="text-center text-base leading-5 text-fg">{site.ui.ndaText[locale]}</p>
          <a
            href={contacts.telegram}
            target="_blank"
            rel="noreferrer"
            className="rounded-[22px] bg-fg px-4 py-3 text-sm font-semibold text-bg"
          >
            {site.ui.connect[locale]}
          </a>
        </div>
      </div>
    </div>
  );
}

function CaseNav({ prev, next, locale }: { prev?: Case; next?: Case; locale: Locale }) {
  return (
    <nav className="mx-auto flex w-full max-w-[800px] flex-col gap-4 px-4 py-8 md:flex-row md:items-stretch">
      {prev && (
        <Link
          href={`/${locale}/projects/${prev.slug}`}
          className="flex flex-1 flex-col gap-4 rounded-2xl bg-surface p-4 transition-opacity hover:opacity-80"
        >
          <span className="text-xs font-medium leading-4 text-secondary">{site.ui.prevCase[locale]}</span>
          <span className="flex items-center gap-2 text-base font-semibold text-fg">
            <Icon name="arrow-left" size={20} />
            {prev.name}
          </span>
        </Link>
      )}
      {next && (
        <Link
          href={`/${locale}/projects/${next.slug}`}
          className="flex flex-1 flex-col gap-4 rounded-2xl bg-surface p-4 transition-opacity hover:opacity-80"
        >
          <span className="text-right text-xs font-medium leading-4 text-secondary">
            {site.ui.nextCase[locale]}
          </span>
          <span className="flex items-center justify-end gap-2 text-base font-semibold text-fg">
            {next.name}
            <Icon name="arrow-right" size={20} />
          </span>
        </Link>
      )}
    </nav>
  );
}
