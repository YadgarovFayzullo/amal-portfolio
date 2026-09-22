import { Zoomable } from "./zoomable";
import type { Block, Shot } from "@/content/types";
import type { Locale } from "@/lib/i18n";

const surface = "rounded-[32px] bg-surface";

function Caption({ shot, locale }: { shot: Shot; locale: Locale }) {
  if (!shot.caption) return null;
  return (
    <p className="text-center text-xs font-medium leading-4 text-secondary">{shot.caption[locale]}</p>
  );
}

function Phones({
  items,
  locale,
  large,
  spread,
}: {
  items: Shot[];
  locale: Locale;
  large?: boolean;
  spread?: boolean;
}) {
  return (
    <div className={`${surface} no-scrollbar w-full overflow-x-auto p-4 md:px-4 md:py-8`}>
      <div className={`flex min-w-max gap-4 md:min-w-0 ${spread ? "md:justify-between" : "md:justify-center"}`}>
        {items.map((shot, index) => (
          <figure key={`${shot.src}-${index}`} className="flex flex-col items-center gap-2">
            <img
              src={shot.src}
              alt=""
              className={`aspect-[156/328] rounded-2xl object-cover ${
                large ? "w-[136px] md:w-40" : "w-[132px] md:w-[156px]"
              }`}
            />
            <Caption shot={shot} locale={locale} />
          </figure>
        ))}
      </div>
    </div>
  );
}

function Screens({ items, locale, bleed }: { items: Shot[]; locale: Locale; bleed?: boolean }) {
  return (
    <div
      className={`${surface} no-scrollbar w-full overflow-x-auto px-4 py-8 ${
        bleed ? "min-[1100px]:-mx-[120px] min-[1100px]:w-[calc(100%+240px)]" : ""
      }`}
    >
      <div className="flex min-w-max items-center gap-6 md:min-w-0">
        {items.map((shot, index) => (
          <figure key={`${shot.src}-${index}`} className="flex w-[220px] flex-col gap-4 md:w-auto md:flex-1">
            <img src={shot.src} alt="" className="h-[124px] w-full object-contain md:h-[173px]" />
            <Caption shot={shot} locale={locale} />
          </figure>
        ))}
      </div>
    </div>
  );
}

function Wide({ items, locale }: { items: Shot[]; locale: Locale }) {
  return (
    <div className={`${surface} flex w-full flex-col gap-4 p-4 md:flex-row md:items-start`}>
      {items.map((shot, index) => (
        <figure key={`${shot.src}-${index}`} className="flex flex-1 flex-col gap-4 px-2 py-6">
          <img src={shot.src} alt="" className="aspect-[156/87] w-full rounded-lg object-cover" />
          <Caption shot={shot} locale={locale} />
        </figure>
      ))}
    </div>
  );
}

function Devices({
  items,
  locale,
}: {
  items: { desktop: string; mobile: string; caption?: Shot["caption"] }[];
  locale: Locale;
}) {
  return (
    <div className={`${surface} flex w-full flex-col items-center gap-8 p-6 md:flex-row md:justify-between md:p-8`}>
      {items.map((item, index) => (
        <figure key={`${item.desktop}-${index}`} className="flex w-full flex-col items-center gap-3 md:w-[350px]">
          <div className="art w-full">
            <div
              className="art-canvas relative w-full"
              style={{ ["--art-w" as string]: 349.5, aspectRatio: "349.5 / 216" }}
            >
              <img
                src={item.desktop}
                alt=""
                className="absolute left-0 top-0 object-cover"
                style={{ width: "calc(var(--u) * 332)", height: "calc(var(--u) * 216)" }}
              />
              <img
                src={item.mobile}
                alt=""
                className="absolute object-cover"
                style={{
                  left: "calc(var(--u) * 269.27)",
                  top: "calc(var(--u) * 34.14)",
                  width: "calc(var(--u) * 80.2)",
                  height: "calc(var(--u) * 168.2)",
                  borderRadius: "calc(var(--u) * 3.265)",
                }}
              />
            </div>
          </div>
          {item.caption && (
            <figcaption className="text-center text-xs font-medium leading-4 text-secondary">
              {item.caption[locale]}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

export function Blocks({ blocks, locale }: { blocks: Block[]; locale: Locale }) {
  return (
    <>
      {blocks.map((block, index) => (
        <BlockView key={index} block={block} locale={locale} />
      ))}
    </>
  );
}

function BlockView({ block, locale }: { block: Block; locale: Locale }) {
  switch (block.type) {
    case "p":
      return (
        <p
          className={`text-base leading-5 text-fg ${block.medium ? "font-medium" : "font-normal"}`}
        >
          {block.label && <span className="font-semibold">{block.label[locale]} </span>}
          {block.text[locale]}
          {block.link && (
            <a
              href={block.link.href}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-2"
            >
              {block.link.text[locale]}
            </a>
          )}
        </p>
      );

    case "lines":
      return (
        <div className={`text-base leading-5 text-fg ${block.medium ? "font-medium" : "font-normal"}`}>
          {block.items.map((line, index) => (
            <p key={index} className="whitespace-pre-line">
              {line[locale]}
            </p>
          ))}
        </div>
      );

    case "subtitle":
      return <h3 className="text-xl font-semibold leading-[26px] text-fg">{block.text[locale]}</h3>;

    case "kicker":
      return (
        <p className={`text-lg leading-6 text-fg ${block.medium ? "font-medium" : "font-semibold"}`}>
          {block.text[locale]}
        </p>
      );

    case "list":
      return (
        <div className="flex flex-col gap-2 text-base leading-5 text-fg">
          {block.intro && <p>{block.intro[locale]}</p>}
          <ol className="list-decimal space-y-1 pl-6">
            {block.items.map((item, index) => (
              <li key={index}>{item[locale]}</li>
            ))}
          </ol>
        </div>
      );

    case "cards": {
      const cols =
        block.cols === 3 ? "md:grid-cols-3" : block.cols === 2 ? "md:grid-cols-2" : "grid-cols-1";
      return (
        <div className={`grid grid-cols-1 gap-3 ${cols}`}>
          {block.items.map((card, index) => (
            <article key={index} className="flex flex-col gap-4 rounded-2xl bg-surface p-6 md:p-8">
              {card.icon && <img src={card.icon} alt="" className="size-6 dark:invert" />}
              {card.num && (
                <span className="flex w-7 items-center justify-center rounded-lg bg-white p-1 font-pixel text-base leading-5 text-[#383838]">
                  {card.num}
                </span>
              )}
              {card.title && (
                <p className="text-base font-medium leading-5 text-fg-strong">{card.title[locale]}</p>
              )}
              {card.text && (
                <p className="text-base font-medium leading-5 text-fg-strong">{card.text[locale]}</p>
              )}
              {card.list && (
                <ol className="list-decimal space-y-1 pl-5 text-sm font-medium leading-5 text-fg-strong">
                  {card.list.map((item, itemIndex) => (
                    <li key={itemIndex}>{item[locale]}</li>
                  ))}
                </ol>
              )}
            </article>
          ))}
        </div>
      );
    }

    case "screens":
      return <Screens items={block.items} locale={locale} bleed={block.bleed} />;

    case "phones":
      return <Phones items={block.items} locale={locale} large={block.large} spread={block.spread} />;

    case "wide":
      return <Wide items={block.items} locale={locale} />;

    case "devices":
      return <Devices items={block.items} locale={locale} />;

    case "image":
      return (
        <figure className="flex w-full flex-col gap-2">
          {block.label && (
            <figcaption
              className={
                block.labelSize === "sm"
                  ? "text-sm font-medium leading-5 text-muted"
                  : "text-base font-medium leading-5 text-secondary"
              }
            >
              {block.label[locale]}
            </figcaption>
          )}
          <Zoomable
            src={block.src}
            full={block.full}
            ratio={block.ratio}
            label={block.label?.[locale]}
            className={
              block.framed === "rounded"
                ? "rounded-xl border border-line"
                : block.framed === "soft"
                  ? "rounded-[5px] border border-line"
                  : ""
            }
          />
        </figure>
      );

    case "flow":
      return (
        <div className={`${surface} flex w-full flex-col items-center gap-4 px-4 py-4`}>
          <p className="text-xs font-medium leading-4 text-tertiary">{block.label[locale]}</p>
          <div className="w-full max-w-[534px]">
            <Zoomable
              src={block.src}
              full={block.full}
              ratio="534 / 483"
              label={block.label[locale]}
              className="rounded-xl border border-line"
            />
          </div>
        </div>
      );

    case "callout":
      return (
        <div className="flex flex-col rounded-2xl bg-surface p-6 text-base font-medium leading-5 text-fg md:p-8">
          {block.lines.map((line, index) => (
            <p key={index}>{line[locale]}</p>
          ))}
        </div>
      );

    case "quote":
      return (
        <div className="flex gap-4 rounded-2xl bg-surface p-6 md:p-8">
          <span className="w-1 shrink-0 rounded-l-lg bg-tint" />
          <div className="flex flex-col gap-4 py-1">
            <p className="text-sm font-semibold leading-5 text-secondary">{block.title[locale]}</p>
            {block.paragraphs.map((paragraph, index) => (
              <p key={index} className="whitespace-pre-line text-base font-medium leading-5 text-fg">
                {paragraph[locale]}
              </p>
            ))}
          </div>
        </div>
      );

    case "link":
      return (
        <a
          href={block.href}
          target="_blank"
          rel="noreferrer"
          className="text-base font-medium leading-5 text-fg underline underline-offset-2"
        >
          {block.text[locale]}
        </a>
      );

    case "logoLine":
      return (
        <div className="flex items-center gap-3">
          <p className="text-base leading-5 text-fg">{block.text[locale]}</p>
          <img src={block.logo} alt="" className="size-9 object-cover" />
        </div>
      );

    case "video":
      return (
        <video
          src={block.src}
          poster={block.poster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className={`w-full rounded-[32px] object-cover ${
            block.bordered ? "border border-line-strong" : "bg-surface"
          }`}
          style={{ aspectRatio: block.ratio }}
        />
      );

    case "group":
      return (
        <div className="flex w-full flex-col gap-4">
          <Blocks blocks={block.blocks} locale={locale} />
        </div>
      );

    default:
      return null;
  }
}
