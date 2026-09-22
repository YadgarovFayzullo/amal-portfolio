import { reviews, site } from "@/content/site";
import type { Locale } from "@/lib/i18n";

export function Reviews({ locale }: { locale: Locale }) {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-4 py-8 md:px-16">
      <div className="flex flex-col gap-8 rounded-[32px] bg-surface px-6 py-10 md:flex-row md:items-start md:px-16 md:py-20">
        <h2 className="flex-1 text-[32px] font-medium leading-[40px] tracking-[-0.48px] text-fg md:pr-16 md:text-[48px] md:leading-[48px]">
          {site.ui.reviewsBefore[locale]}
          <span className="font-display font-semibold italic">{site.ui.reviewsAccent[locale]}</span>
          {site.ui.reviewsAfter[locale]}
        </h2>

        {reviews.map((review) => (
          <article
            key={review.author}
            className="flex flex-1 flex-col justify-between gap-8 border-t border-review-line pt-8 md:border-l md:border-t-0 md:px-8 md:pt-0"
          >
            <p className="text-base font-normal leading-5 text-fg">{review.text[locale]}</p>
            <div className="flex items-center gap-4">
              <img src={review.avatar} alt={review.author} className="size-10 rounded-lg object-cover" />
              <div className="flex flex-col">
                <span className="text-sm font-medium leading-5 text-fg">{review.author}</span>
                <span className="text-sm leading-5 text-muted">{review.position[locale]}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
