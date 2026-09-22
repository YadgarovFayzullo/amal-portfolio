import { Icon } from "./icon";
import type { CareerItem, CareerLogo } from "@/content/site";
import type { Locale } from "@/lib/i18n";

function Logo({ logo }: { logo: CareerLogo }) {
  const box = "flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-lg";
  switch (logo.kind) {
    case "suitcase":
      return (
        <span className={`${box} border border-dashed border-line text-fg`}>
          <Icon name="suitcase" size={16} />
        </span>
      );
    case "hammersmith":
      return (
        <span className={`${box} bg-white`}>
          <img src="/img/home/hs-logo.svg" alt="" className="size-[22px] -scale-y-100" />
        </span>
      );
    case "ipoteka":
      return (
        <span className={`${box} bg-[#48992a] p-1`}>
          <img src="/img/home/ipoteka-mark.svg" alt="" className="size-6" />
        </span>
      );
    case "mary":
      return <img src="/img/home/mary-logo.svg" alt="" className="size-8 shrink-0" />;
    case "qrtifact":
      return (
        <span className={`${box} bg-white p-[3px]`}>
          <img src="/img/home/qr-logo.svg" alt="" className="size-[26px]" />
        </span>
      );
    case "finarum":
      return (
        <span className={`${box} bg-[#e8f3ff] p-1`}>
          <img src="/img/home/finarum-mark-sm.svg" alt="" className="size-6" />
        </span>
      );
    case "remoutly":
      return <img src="/img/remoutly/rem-small.svg" alt="" className="size-8 shrink-0 rounded-lg" />;
    case "education":
      return (
        <span className={`${box} bg-tint text-fg dark:text-white`}>
          <Icon name="grad-hat" size={16} />
        </span>
      );
    default:
      return <span className={`${box} bg-tint`} />;
  }
}

export function CareerList({
  items,
  locale,
  divided = true,
}: {
  items: CareerItem[];
  locale: Locale;
  divided?: boolean;
}) {
  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <div
          key={item.name.en}
          className={`flex min-h-16 items-center gap-3 py-3 md:py-0 ${
            divided ? "border-b border-line" : ""
          }`}
        >
          <div className="flex flex-1 items-center gap-3">
            <Logo logo={item.logo} />
            <span className="text-sm font-medium leading-5 text-fg">{item.name[locale]}</span>
          </div>

          <span className="hidden flex-1 text-sm font-medium leading-5 text-secondary md:block">
            {item.role[locale]}
          </span>

          <div className="flex flex-1 flex-col items-end gap-0.5 text-right md:flex-row md:justify-end">
            <span
              className={`text-xs font-medium leading-4 text-tertiary ${item.uppercase ? "uppercase" : ""}`}
            >
              {item.period[locale]}
            </span>
            <span className="text-xs font-medium leading-4 text-secondary md:hidden">
              {item.role[locale]}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
