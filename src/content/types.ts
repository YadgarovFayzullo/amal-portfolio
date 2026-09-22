import type { Text } from "@/lib/i18n";

export type Shot = { src: string; caption?: Text };

export type Card = {
  icon?: string;
  num?: string;
  title?: Text;
  text?: Text;
  list?: Text[];
};

export type Block =
  /** Абзац; label — жирный префикс («Проблема:»), link — ссылка в конце. */
  | { type: "p"; text: Text; label?: Text; medium?: boolean; link?: { href: string; text: Text } }
  /** Несколько строк подряд без отступов между ними. */
  | { type: "lines"; items: Text[]; medium?: boolean }
  /** Заголовок подраздела 20/26. */
  | { type: "subtitle"; text: Text }
  /** Надзаголовок 18/24 («Мобильная веб-форма»). */
  | { type: "kicker"; text: Text; medium?: boolean }
  | { type: "list"; items: Text[]; intro?: Text }
  | { type: "cards"; items: Card[]; cols?: 1 | 2 | 3 }
  /** Скриншоты десктопа в три колонки; bleed — блок шире текста на 120px с каждой стороны (четыре колонки). */
  | { type: "screens"; items: Shot[]; bleed?: boolean }
  /** Мобильные экраны; slot — ширина ячейки в макете. */
  | { type: "phones"; items: Shot[]; slot?: number; large?: boolean; spread?: boolean }
  /** Широкие экраны POS в колонках. */
  | { type: "wide"; items: Shot[] }
  /** Десктоп + мобильная версия внахлёст (Ipoteka Bank). */
  | { type: "devices"; items: { desktop: string; mobile: string; caption?: Text; crop?: boolean }[] }
  | {
      type: "image";
      src: string;
      /** Версия в исходном разрешении для просмотра по клику. */
      full?: string;
      ratio: string;
      label?: Text;
      labelSize?: "md" | "sm";
      framed?: "rounded" | "soft";
    }
  /** Изображение по центру серого блока с подписью сверху (User Flow). */
  | { type: "flow"; src: string; full?: string; label: Text }
  | { type: "callout"; lines: Text[] }
  | { type: "quote"; title: Text; paragraphs: Text[] }
  | { type: "link"; href: string; text: Text }
  | { type: "logoLine"; text: Text; logo: string }
  /**
   * Запись прототипа (в макете — видео-заливка). src — mp4 из public/video,
   * poster — первый кадр, показывается пока видео грузится или файла ещё нет.
   */
  | { type: "video"; src: string; poster: string; ratio: string; bordered?: boolean }
  | { type: "group"; blocks: Block[] };

export type Section = { title: Text; blocks: Block[] };

export type CaseSlug =
  | "mary-ai"
  | "finarum"
  | "ipoteka-bank"
  | "hammersmith"
  | "qrtifact"
  | "uzum-bank"
  | "remoutly";

export type Case = {
  slug: CaseSlug;
  name: string;
  subtitle: Text;
  tags: string[];
  title: Text;
  intro: Text;
  team: Text[];
  role: Text;
  /** Отзыв сразу после вводной части. */
  quote?: Extract<Block, { type: "quote" }>;
  sections: Section[];
  /** Кейс под NDA: показываются только первые `visibleSections` разделов. */
  nda?: { visibleSections: number };
  comingSoon?: boolean;
};
