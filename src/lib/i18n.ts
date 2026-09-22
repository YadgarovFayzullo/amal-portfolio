export const locales = ["ru", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ru";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/** Строка на двух языках. */
export type Text = { en: string; ru: string };

export const t = (en: string, ru: string): Text => ({ en, ru });

export const otherLocale = (locale: Locale): Locale => (locale === "ru" ? "en" : "ru");
