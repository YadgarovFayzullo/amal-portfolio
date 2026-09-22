# Портфолио Акбарова Амаля

Сайт свёрстан по макету Figma «Portfolio / Mobile» (`kPL2Y5w67mVwrzo1iwaHkb`) на Next.js 16 (App Router) и Tailwind CSS 4.

```bash
npm run dev    # http://localhost:3000 → редирект на /ru или /en
npm run build
```

## Что внутри

- Главная: герой, сетка проектов с кнопкой «Показать все проекты», пройденный путь, учёба, отзывы.
- Семь страниц кейсов: `/[lang]/projects/[slug]`.
- Два языка: `/ru` и `/en`. Язык без префикса определяется по `Accept-Language` в [src/proxy.ts](src/proxy.ts).
- Светлая и тёмная темы. Тема выставляется инлайн-скриптом до первой отрисовки ([src/components/theme.tsx](src/components/theme.tsx)), поэтому нет вспышки фона; выбор хранится в `localStorage`.

## Структура

| Путь | Назначение |
| --- | --- |
| [src/content/site.ts](src/content/site.ts) | Контакты, тексты интерфейса, пройденный путь, учёба, отзывы |
| [src/content/cases/](src/content/cases/) | Контент кейсов: по файлу на проект + [index.ts](src/content/cases/index.ts) с порядком |
| [src/content/types.ts](src/content/types.ts) | Типы блоков кейса (абзацы, галереи, карточки, схемы) |
| [src/components/case-blocks.tsx](src/components/case-blocks.tsx) | Отрисовка этих блоков |
| [src/components/project-art.tsx](src/components/project-art.tsx) | Обложки проектов: карточка 504×400 и широкая 1200×460 |
| [public/img/](public/img/) | Экспорт из Figma: скриншоты в WebP, логотипы и иконки в SVG |

Обложки нарисованы в координатах макета: `--u` в [globals.css](src/app/globals.css) пересчитывает один пиксель макета в долю ширины контейнера, поэтому композиция одинаково масштабируется на любой ширине. На мобильных вместо широкой обложки показывается вариант карточки — как в мобильных макетах.

Тексты двуязычны прямо в данных: `t("English", "Русский")`.

## Что нужно доделать

1. **Контакты.** В [src/content/site.ts](src/content/site.ts) стоят заглушки (`hello@example.com`, пустые ссылки на LinkedIn/Telegram/CV) — замените на реальные.
2. **Шрифт заголовков.** В макете Season VF (триал), распространять его нельзя. Положите `SeasonMix-Medium.woff2` и `SeasonMix-SemiBoldItalic.woff2` в `public/fonts/` — `@font-face` в [globals.css](src/app/globals.css) уже настроен. Пока подключается запасной Literata.
3. **Прототипы.** В кейсах Uzum Bank и Remoutly в макете пустые блоки под прототип — сейчас там заглушка. Вставьте iframe Figma или видео в блок `placeholder`.
4. **Ipoteka Bank под NDA.** В [ipoteka-bank.ts](src/content/cases/ipoteka-bank.ts) поле `nda: { visibleSections: 1 }` показывает только первую главу, остальное закрыто экраном «NDA». Уберите поле, чтобы открыть кейс целиком (закрытые разделы не попадают в HTML).
5. **Hammersmith.** Кейс помечен `comingSoon`: в макете его разделы ещё не заполнены (там лежит текст из Uzum Bank), поэтому на страницу выведены только обложка, заголовок и роль.

## Расхождения с макетом

- Шрифты LT Remark (QRtifact) и RRR Altavoz (Remoutly) недоступны, поэтому их логотипы экспортированы из Figma в SVG.
- Подзаголовки карточек Hammersmith и Remoutly в макете — заглушки («Подзаголовок» и текст от QRtifact); подставлены описания из самих кейсов.
- Скриншоты уменьшены до 1600 px по ширине и переведены в WebP: 223 МБ → 13 МБ.
