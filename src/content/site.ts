import { t, type Text } from "@/lib/i18n";

/** Контакты. */
export const contacts = {
  email: "mailto:amalka.amk912@gmail.com",
  linkedin: "https://www.linkedin.com/in/amal-akbarov-designer/",
  telegram: "https://t.me/flieddi",
  cv: "https://amal-cv.notion.site/258b02ab0742800287e8dcacf6556951",
};

export const site = {
  name: t("Akbarov Amal", "Акбаров Амаль"),
  title: t("Akbarov Amal — Product Designer", "Акбаров Амаль — продуктовый дизайнер"),
  description: t(
    "Product designer designing high-load web & mobile services for the real world",
    "Продуктовый дизайнер: дизайн нагруженных web & mobile сервисов для реального мира",
  ),
  hero: {
    lead: t(
      "Hello, I’m Amal, product designer, designing high-load web & mobile services for the real world",
      "Привет, я Амаль, продуктовый дизайнер, делаю дизайн нагруженных web & mobile сервисов для реального мира",
    ),
    focus: t("Startups, B2B/B2C, ERP, CRM, FinTech", "Startups, B2B/B2C, ERP, CRM, FinTech"),
  },
  ui: {
    connect: t("Let’s connect", "Написать мне"),
    projects: t("My projects", "Мои проекты"),
    showAll: t("Show all projects", "Показать все проекты"),
    showLess: t("Show less", "Показать меньше"),
    career: t("Career path", "Пройденный путь"),
    education: t("Education", "Учеба"),
    reviewsBefore: t("From ", "От "),
    reviewsAccent: t("people", "людей"),
    reviewsAfter: t(" who I worked with", " с которыми я работал"),
    back: t("Back", "Назад"),
    prevCase: t("Previous case", "Предыдущий кейс"),
    nextCase: t("Next case", "Следующий кейс"),
    toTop: t("To top", "Наверх"),
    role: t("Role", "Role"),
    team: t("Team", "Team"),
    madeWith: t(
      "Made with Figma, Claude insights, My skills and an unspecified number of cups of coffee",
      "Made with Figma, Claude insights, My skills and an unspecified number of cups of coffee",
    ),
    comingSoon: t("Coming soon", "Скоро"),
    menu: t("Menu", "Меню"),
    close: t("Close", "Закрыть"),
    theme: t("Toggle theme", "Сменить тему"),
    notFound: t("Page not found", "Страница не найдена"),
    toHome: t("To the main page", "На главную"),
    ndaText: t(
      "This case study is under NDA, contact me to unlock it",
      "Данный кейс находится под NDA, свяжитесь со мной чтобы его открыть",
    ),
  },
};

export type CareerLogo =
  | { kind: "suitcase" }
  | { kind: "hammersmith" }
  | { kind: "ipoteka" }
  | { kind: "mary" }
  | { kind: "qrtifact" }
  | { kind: "finarum" }
  | { kind: "remoutly" }
  | { kind: "tint" }
  | { kind: "education" };

export type CareerItem = {
  logo: CareerLogo;
  name: Text;
  role: Text;
  period: Text;
  uppercase?: boolean;
};

export const career: CareerItem[] = [
  {
    logo: { kind: "suitcase" },
    name: t("Next project", "Следующий проект"),
    role: t("Open to new opportunities", "Открыт к новым возможностям"),
    period: t("Present", "Present"),
    uppercase: true,
  },
  {
    logo: { kind: "hammersmith" },
    name: t("OSG studio — Hammersmith", "OSG studio — Hammersmith"),
    role: t("Product Designer", "Product Designer"),
    period: t("2026", "2026"),
  },
  {
    logo: { kind: "ipoteka" },
    name: t("Ipoteka Bank", "Ipoteka Bank"),
    role: t("Product Designer", "Product Designer"),
    period: t("2026", "2026"),
  },
  {
    logo: { kind: "mary" },
    name: t("Mary Ai", "Mary Ai"),
    role: t("Product Designer", "Product Designer"),
    period: t("2026", "2026"),
  },
  {
    logo: { kind: "qrtifact" },
    name: t("QRtifact", "QRtifact"),
    role: t("Product Designer", "Product Designer"),
    period: t("2025 — 2026", "2025 — 2026"),
  },
  {
    logo: { kind: "finarum" },
    name: t("Finarum", "Finarum"),
    role: t("Product Designer", "Product Designer"),
    period: t("2025", "2025"),
  },
  {
    logo: { kind: "remoutly" },
    name: t("Remoutly", "Remoutly"),
    role: t("UX/UI Designer", "UX/UI Designer"),
    period: t("2025", "2025"),
  },
  {
    logo: { kind: "tint" },
    name: t("Dairy Kitchen", "Молочная кухня"),
    role: t("Graphic Designer", "Graphic Designer"),
    period: t("2024 — 2025", "2024 — 2025"),
  },
];

export const education: CareerItem[] = [
  {
    logo: { kind: "education" },
    name: t("Bucheon University", "Университет Bucheon"),
    role: t("E-Business", "Электронный бизнес"),
    period: t("2025 — 2029", "2025 — 2029"),
  },
];

const reviewText = t(
  "“Amal quickly dives into the task and strives to understand its essence, rather than just formally meeting the requirements. He is quite independent, knows how to ask the right questions, and works confidently with interfaces. He also has great experience in mobile app design.”",
  "«Амаль быстро погружается в задачу и старается разобраться в её сути, а не просто выполнить требования формально. Он достаточно самостоятельный, умеет задавать правильные вопросы и уверенно работает с интерфейсами. Также у него есть хороший опыт в дизайне мобильных приложений.»",
);

export const reviews = [
  {
    text: t(
      "“Amal built QRtifact from scratch: from a survey of tourists and the User Flow to the final screens of every section. He is easy to work with — he brings his own options, pushes back when it matters, and is not afraid to redo a solution that did not work. We built the CJM together, and it noticeably simplified development: the team had no questions left about what we were doing and why.”",
      "«Амаль делал QRtifact с нуля: от опроса туристов и User Flow до финальных экранов всех разделов. С ним легко работать — он сам приносит варианты, спорит по делу и не боится переделать решение, если оно не сработало. CJM мы собирали вместе, и это заметно упростило разработку: у команды не осталось вопросов, что и зачем мы делаем.»",
    ),
    author: "Fayzullo Yadgarov",
    position: t("Co-Founder KiGo | CEO QRtifact", "Co-Founder KiGo | CEO QRtifact"),
    avatar: "/img/home/review-1.webp",
  },
  {
    text: reviewText,
    author: "Anton Chickov",
    position: t("Senior Product Designer, Ipoteka Bank", "Senior Product Designer, Ipoteka Bank"),
    avatar: "/img/home/review-2.webp",
  },
];
