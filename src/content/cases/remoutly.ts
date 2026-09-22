import { t } from "@/lib/i18n";
import type { Case } from "../types";

const img = (file: string) => `/img/remoutly/${file}`;
const bulb = "/img/uzum-bank/5f14f.svg";

export const remoutly: Case = {
  slug: "remoutly",
  name: "Remoutly",
  subtitle: t(
    "Mobile app for finding and booking coworking spaces",
    "Мобильное приложение для поиска и бронирования коворкингов",
  ),
  tags: ["Startup", "B2C", "mobile"],
  title: t(
    "Remoutly — mobile app for finding and booking coworking spaces.",
    "Remoutly — mobile app for finding and booking coworking spaces.",
  ),
  intro: t(
    "I worked on an MVP mobile application product. Designed the interface for the coworking search and booking scenario. Worked on CJM and User Flow",
    "Я работал над MVP продуктом мобильного приложения. Разработал интерфейс для сценария поиска и бронирования коворкингов. Работал над CJM и User Flow",
  ),
  role: t("Product Designer", "Product Designer"),
  team: [t("Designer", "Designer"), t("Engineer", "Engineer")],
  sections: [
    {
      title: t("01 — Context", "01 — Контекст"),
      blocks: [
        {
          type: "p",
          text: t(
            "Remoutly is a mobile app for professionals who need to find and book a workspace in a coworking space. Remote workers waste time searching for coworking: existing services don't show real-time availability, and booking requires calls or lengthy correspondence.",
            "Remoutly — мобильное приложение для специалистов, которым нужно найти и забронировать рабочее место в коворкинге. Удалённые специалисты теряют время на поиск коворкинга: существующие сервисы не показывают доступность здесь и сейчас, а бронирование требует звонков или долгой переписки.",
          ),
        },
      ],
    },
    {
      title: t("02 — Goals", "02 — Цели"),
      blocks: [
        {
          type: "cards",
          cols: 3,
          items: [
            {
              icon: bulb,
              title: t("Business goals", "Бизнес цели"),
              text: t(
                "shorten the path from opening the app to booking confirmation",
                "сократить путь от открытия приложения до подтверждения брони",
              ),
            },
            {
              icon: bulb,
              title: t("User goals", "Пользовательские цели"),
              text: t(
                "Find an available workspace nearby without calls or additional searching",
                "Найти свободное рабочее место рядом с собой без звонков и доп. поиска",
              ),
            },
            {
              icon: bulb,
              title: t("Target audience", "Целевая аудитория"),
              list: [
                t("Freelancers and remote workers", "Фрилансеры и удаленщики"),
                t("Small startups and teams", "Небольшие стартапы и команды"),
              ],
            },
          ],
        },
      ],
    },
    {
      title: t("03 — Competitors", "03 — Конкуренты"),
      blocks: [
        {
          type: "lines",
          items: [
            t(
              "I analyzed competitors and identified pain points:",
              "Я проанализировал конкурентов и вывел сложности:",
            ),
            t(
              "— Booking is multi-step everywhere, 5–7 actions to confirmation",
              "— Бронирование везде многошаговое, 5–7 действий до подтверждения",
            ),
            t(
              "— Price and availability are hidden until the last step",
              "— Цена и доступность скрыты до последнего шага",
            ),
            t(
              "— All services are web-only, with no mobile app",
              "— Все сервисы только веб, без мобильного приложения",
            ),
          ],
        },
        { type: "image", src: img("41216.webp"),
          full: img("41216-full.webp"), ratio: "362 / 226" },
      ],
    },
    {
      title: t("04 — Interviews", "04 — Интервью"),
      blocks: [
        {
          type: "p",
          text: t(
            "I interviewed 8 respondents: freelancers, remote workers",
            "Я опросил 8 респондентов: фрилансеры, удалёнщики",
          ),
        },
        { type: "image", src: img("ce344.webp"),
          full: img("ce344-full.webp"), ratio: "362 / 268" },
        {
          type: "group",
          blocks: [
            { type: "kicker", text: t("User Story", "User Story"), medium: true },
            {
              type: "list",
              items: [
                t(
                  "when a remote worker is looking for a place to work outside of home, they want to see all coworking spaces comparable by price, location, and atmosphere, so the search process goes faster",
                  "когда пользователь на удаленке ищет место для работы вне дома, хочет видеть все коворкинги сравнимые по ценам, локации, обстановки, чтобы процесс поиска прошел быстрее",
                ),
                t(
                  "when a remote worker finds one coworking space and keeps going only there, they want to discover new places to try different coworking spaces",
                  "когда удаленщик находит один коворкинг и все время ходит только туда, он хочет найходить новые места, чтобы попробовать разные коворкинги",
                ),
              ],
            },
          ],
        },
      ],
    },
    {
      title: t("05 — Solutions", "05 — Решения"),
      blocks: [
        {
          type: "cards",
          cols: 1,
          items: [
            {
              title: t("Hypotheses", "Гипотезы"),
              list: [
                t(
                  "Map. If the app user sees available workspaces nearby on a map, they will choose a place faster, but there is also a list view",
                  "Карта. Если пользователь приложения увидит доступные рабочие места рядом с собой на карте, то он быстрее выберет место, но также есть и список",
                ),
                t(
                  "Filters. If filters are focused on key parameters, it will be easier for the user to compare options",
                  "Фильтры. Если фильтры будут сфокусированы на основных параметрах, то пользователю будет проще сравнивать варианты",
                ),
                t(
                  "Price. If the user sees the final price and availability, uncertainty will decrease and the likelihood of drop-off will reduce.",
                  "Цена. Если пользователь увидит итоговую цену и доступность, то уровень неопределённости снизится и вероятность отказа уменьшится.",
                ),
                t(
                  "If the booking process takes 2–3 steps, the user will complete the booking on the go.",
                  "Если процесс бронирования будет занимать 2–3 шага, то пользователь завершит бронирование на ходу.",
                ),
              ],
            },
          ],
        },
        {
          type: "group",
          blocks: [
            { type: "subtitle", text: t("User Flow", "User Flow") },
            {
              type: "p",
              text: t(
                "Created a User Flow to establish the minimum user path and eliminate unnecessary steps before booking",
                "Составил User Flow, чтобы зафиксировать минимальный путь пользователя и убрать лишние шаги до бронирования",
              ),
            },
            { type: "image", src: img("d5b4f.webp"),
          full: img("d5b4f-full.webp"), ratio: "362 / 98", framed: "soft" },
          ],
        },
        {
          type: "group",
          blocks: [
            { type: "subtitle", text: t("CJM", "CJM") },
            {
              type: "p",
              text: t(
                "CJM helped identify uncertainty points — moments where the user loses confidence and may leave",
                "CJM помог найти точки неопределённости — моменты, где пользователь теряет уверенность и может уйти",
              ),
            },
            { type: "image", src: img("c651c.webp"),
          full: img("c651c-full.webp"), ratio: "928 / 363" },
          ],
        },
      ],
    },
    {
      title: t("06 — Design outcome", "06 — Дизайн результат"),
      blocks: [
        {
          type: "group",
          blocks: [
            { type: "subtitle", text: t("Prototype", "Прототип") },
            { type: "p", text: t("Built a working prototype", "Собрал рабочий прототип") },
            {
              type: "video",
              src: "/video/remoutly-prototype.mp4",
              poster: img("prototype-poster.webp"),
              ratio: "800 / 482",
            },
          ],
        },
        {
          type: "group",
          blocks: [
            {
              type: "subtitle",
              text: t("Main flow: from entry to confirmation", "Основной флоу: от входа до подтверждения"),
            },
            {
              type: "p",
              text: t(
                "Registration → main screen with the nearest booking → coworking card with price and availability → booking screen. The entire path is 3 steps, all necessary information is visible before payment.",
                "Регистрация → главный экран с ближайшей бронью → карточка коворкинга с ценой и доступностью → экран бронирования. Весь путь — 3 шага, вся нужная информация видна до оплаты.",
              ),
            },
            {
              type: "phones",
              slot: 200,
              items: [
                { src: img("04b62.webp"), caption: t("Registration", "Регистрация") },
                { src: img("cc3d8.webp"), caption: t("Home screen", "Главный экран") },
                { src: img("1e34f.webp"), caption: t("Coworking card", "Карточка коворкинг") },
                { src: img("6eec2.webp"), caption: t("Booking", "Бронирование") },
              ],
            },
          ],
        },
        {
          type: "group",
          blocks: [
            {
              type: "subtitle",
              text: t("Map, filters, and booking management", "Карта, фильтры и управление бронями"),
            },
            {
              type: "p",
              text: t(
                "The map shows available spaces nearby. Filters are focused on key parameters — date, time, area. The booking calendar and profile cover post-booking management.",
                "Карта показывает доступные места рядом. Фильтры сфокусированы на основных параметрах — дата, время, район. Календарь броней и профиль закрывают управление после бронирования.",
              ),
            },
            {
              type: "phones",
              slot: 200,
              items: [
                { src: img("16984.webp"), caption: t("Map", "Карта") },
                { src: img("71a79.webp"), caption: t("Filter", "Фильтр") },
                { src: img("18e42.webp"), caption: t("Booking calendar", "Календарь броней") },
                { src: img("68f1e.webp"), caption: t("Profile", "Профиль") },
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
            "Designed a mobile service scenario for spontaneous coworking booking with a focus on speed",
            "Спроектировал сценарий мобильного сервиса для спонтанного бронирования коворкингов с фокусом на скорость",
          ),
        },
        {
          type: "p",
          text: t(
            "I would like to test the prototype with real users — some navigation decisions need to be validated through live testing, not just through interview hypotheses",
            "Хотел бы протестировать прототип на реальных пользователях — некоторые решения по навигации хочется проверить живым тестированием, а не только через гипотезы из интервью",
          ),
        },
      ],
    },
  ],
};
