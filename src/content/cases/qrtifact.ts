import { t } from "@/lib/i18n";
import type { Case } from "../types";

const img = (file: string) => `/img/qrtifact/${file}`;

export const qrtifact: Case = {
  slug: "qrtifact",
  name: "QRtifact",
  subtitle: t("Tourism startup, mobile app for museums", "Стартап в сфере туризма, мобильное приложение для музеев"),
  tags: ["Startup", "B2C", "mobile"],
  title: t(
    "QRtifact — travel-sector startup, a mobile app for museums",
    "QRtifact — travel-sector startup, a mobile app for museums",
  ),
  intro: t(
    "I worked on the mobile app, designing all sections. I conducted a small survey among tourists and also developed the User Flow, and together with the Founder we created a CJM",
    "Я работал над мобильным приложением, проектировал все разделы. Провел небольшой опрос среди туристов и также разрабатывал User Flow и совместно с Founder’ом сделали CJM",
  ),
  role: t("Product Designer", "Product Designer"),
  team: [t("1 Designer", "1 Designer"), t("2 Developers", "2 Developers"), t("Founder", "Founder")],
  sections: [
    {
      title: t("01 — Context", "01 — Контекст"),
      blocks: [
        {
          type: "lines",
          items: [
            t(
              "A classic group tour works the same way — the guide speaks, the group listens.",
              "Классическая групповая экскурсия работает одинаково, гид говорит, группа слушает.",
            ),
            t(
              "A group of 20 people pays the same, but gets a different experience. 4–6 people stand next to the guide and hear everything, the rest stand in the back, can't hear, and start getting bored. Some want to stay at an exhibit longer, some want to move faster, but the group moves on. On top of that, the quality of the guide's explanation depends on their mood. Standardizing this is impossible. The key problem — cultural content doesn't reach most visitors the way it should.",
              "Группа из 20 человек платит одинаково, но получает разный опыт. 4–6 человек стоят рядом с гидом и слышат все, остальные стоят сзади не слышат и начинают скучать. Кто-то хочет задержаться у экспоната дольше, кто-то быстрее, а группа уходит. Кроме этого качество объяснения гида зависит от его настроения. Стандартизировать это невозможно. Ключевая проблема — культурный контент не доходит до большинства посетителей так, как должен.",
            ),
          ],
        },
      ],
    },
    {
      title: t("02 — Research", "02 — Исследование"),
      blocks: [
        {
          type: "p",
          text: t(
            "Conducted interviews with 5–10 tourists who had recently been on group tours. Identified key insights",
            "Провёл интервью с 5–10 туристами, которые недавно были на групповых экскурсиях. Вывел главные инсайты",
          ),
        },
        {
          type: "cards",
          cols: 2,
          items: [
            {
              num: "1",
              text: t(
                "“I paid for the tour, but didn't hear half of it” — physical distance from the guide directly determines the quality of the experience",
                "«Я платил за экскурсию, но половину не слышал» — физическое расстояние от гида напрямую определяет качество опыта",
              ),
            },
            {
              num: "2",
              text: t(
                "“I wanted to stay at the painting longer, but everyone moved on” — the group format leaves no room for personal pace",
                "«Хотел остаться у картины дольше, но все пошли» — групповой формат не оставляет пространства для личного темпа",
              ),
            },
            {
              num: "3",
              text: t(
                "“The guide spoke monotonously, I tuned out after 10 minutes” — engagement only holds if the delivery is interesting",
                "«Гид говорил монотонно, я отключился через 10 минут» — вовлечённость держится только если подача интересная",
              ),
            },
            {
              num: "4",
              text: t(
                "“I wanted to revisit the information at home, but couldn't find it” — the experience ends at the museum. There's no way to return to what you liked.",
                "«Я бы хотел вернуться к информации дома, но её не нашел» — опыт заканчивается в музее. Нет способа вернуться к тому, что понравилось.",
              ),
            },
          ],
        },
      ],
    },
    {
      title: t("03 — User Flow & CJM", "03 — User Flow & CJM"),
      blocks: [
        {
          type: "list",
          intro: t(
            "Main scenario — a visitor inside the museum:",
            "Основной сценарий — посетитель внутри музея:",
          ),
          items: [
            t("Approaches an exhibit", "Подходит к экспонату"),
            t("Notices a QR code", "Замечает QR-код"),
            t("Scans it with the phone camera", "Сканирует через камеру телефона"),
            t("The exhibit card opens in the app", "Открывается карточка экспоната в приложении"),
            t("Starts the audio guide", "Запускает аудиогид"),
            t(
              "Listens at their own pace, can pause and rewind",
              "Слушает в своём темпе, может поставить на паузу и отмотать",
            ),
            t("Reads additional text / views media", "Читает дополнительный текст / смотрит медиа"),
            t(
              "Saves to favorites or moves to the next exhibit",
              "Сохраняет в избранное или идёт к следующему экспонату",
            ),
          ],
        },
        {
          type: "image",
          src: img("682fe.webp"),
          full: img("682fe-full.webp"),
          ratio: "800 / 482",
          label: t("User Flow", "User Flow"),
          labelSize: "md",
          framed: "rounded",
        },
        {
          type: "image",
          src: img("dfd84.webp"),
          full: img("dfd84-full.webp"),
          ratio: "800 / 652",
          label: t("CJM", "CJM"),
          labelSize: "sm",
          framed: "rounded",
        },
      ],
    },
    {
      title: t("04 — Process and Solutions", "04 — Процесс и решения"),
      blocks: [
        {
          type: "group",
          blocks: [
            { type: "subtitle", text: t("Home and Registration", "Главная и Регистрация") },
            {
              type: "p",
              text: t(
                "After scanning without registration at the entrance, the user gets to the content as quickly as possible. Registration — if the user wants to save favorites",
                "После скана без регистрации на входе, пользователь попадает к контенту максимально быстро. Регистрация — если пользователь хочет сохранять избранное",
              ),
            },
            {
              type: "phones",
              items: [
                { src: img("8a48a.webp"), caption: t("Registration", "Регистрация") },
                { src: img("380a2.webp"), caption: t("Login", "Вход") },
                { src: img("79fe9.webp"), caption: t("Home Page", "Главная страница") },
                { src: img("db894.webp"), caption: t("Home Page", "Главная страница") },
                { src: img("b6216.webp"), caption: t("QR Scan Page", "Страница скана QR") },
              ],
            },
          ],
        },
        {
          type: "group",
          blocks: [
            { type: "subtitle", text: t("Exhibits Section and Card", "Раздел и карточка экспонатов") },
            {
              type: "lines",
              items: [
                t(
                  "Exhibit card — audio first, then text and media for those who want more. The “save” button is always available.",
                  "Карточка экспоната — сначала аудио, затем текст и медиа для тех, кто хочет больше. Кнопка «сохранить» всегда доступна.",
                ),
                t(
                  "Audio player — simple, familiar interface. Pause, rewind, speed. Doesn't distract from the exhibit itself.",
                  "Аудиоплеер — простой, привычный интерфейс. Пауза, перемотка, скорость. Не отвлекает от самого экспоната.",
                ),
              ],
            },
            {
              type: "phones",
              items: [
                { src: img("a3f2b.webp"), caption: t("Exhibits Section", "Раздел Экспонаты") },
                { src: img("2f01b.webp"), caption: t("Museums Section", "Раздел Музеи") },
                { src: img("a4657.webp"), caption: t("Filters", "Фильтры") },
                { src: img("75f4e.webp"), caption: t("Exhibit Player", "Плеер экспоната") },
                { src: img("6b429.webp"), caption: t("Museum Page", "Страница музея") },
              ],
            },
          ],
        },
        {
          type: "group",
          blocks: [
            { type: "subtitle", text: t("Favorites and Profile", "Избранное и Профиль") },
            {
              type: "p",
              text: t(
                "Access to viewed exhibits after the visit. Addresses the insight about “wanting to revisit information at home”",
                "Доступ к просмотренным экспонатам после визита. Решает инсайт про «хочу вернуться к информации дома»",
              ),
            },
            {
              type: "phones",
              items: [
                { src: img("20bd6.webp"), caption: t("Favorites", "Избранное") },
                { src: img("fcb6e.webp"), caption: t("Player Info", "Информация о плеере") },
                { src: img("7a607.webp"), caption: t("Profile", "Профиль") },
                { src: img("5b5e3.webp"), caption: t("Language Switch", "Смена языка") },
                { src: img("5ecec.webp"), caption: t("Edit Profile", "Редактирование профиля") },
              ],
            },
          ],
        },
      ],
    },
    {
      title: t("05 — Result", "05 — Результат"),
      blocks: [
        {
          type: "p",
          text: t(
            "QRtifact is launched and running. For me, this project was the first experience where I was responsible for the entire design process — from research and CJM to final screens. Working closely with the founder taught me to balance product thinking and design decisions.",
            "QRtifact запущен и работает. Для меня этот проект стал первым опытом, где я отвечал за весь дизайн-процесс — от исследования и CJM до финальных экранов. Работа в связке с фаундером научила балансировать между продуктовым мышлением и дизайн-решениями.",
          ),
        },
        {
          type: "link",
          href: "https://www.qrtifact.uz/",
          text: t(
            "You can explore the project at qrtifact.uz",
            "Ознакомиться с проектом можно по ссылке qrtifact.uz",
          ),
        },
      ],
    },
  ],
};
