import { t, type Text } from "@/lib/i18n";
import type { Block, Case } from "../types";

const img = (file: string) => `/img/ipoteka/${file}`;

const problem = t("Problem:", "Проблема:");
const done = t("What I did:", "Что делал:");
const result = t("Result:", "Результат:");

const story = (problemText: Text, doneText: Text, resultText: Text): Block[] => [
  { type: "p", label: problem, text: problemText },
  { type: "p", label: done, text: doneText },
  { type: "p", label: result, text: resultText },
];

const webMobile = t("Web + Mobile", "Веб + мобилка");

export const ipotekaBank: Case = {
  slug: "ipoteka-bank",
  name: "Ipoteka Bank",
  subtitle: t("One of the largest banks in Uzbekistan", "Один из крупнейших банков Узбекистана"),
  tags: ["FinTech", "B2C", "mobile/web"],
  title: t(
    "Ipoteka Bank — one of the major banks in Uzbekistan",
    "Ipoteka Bank — one of the major banks in Uzbekistan",
  ),
  intro: t(
    "Worked in a team of two designers (myself and a senior designer) on several bank products — from customer-facing services to internal HR tools. Was responsible for UX and UI on every assigned task.",
    "Работал в команде из двух дизайнеров (я и старший дизайнер) над несколькими продуктами банка — от клиентских сервисов до внутренних HR-инструментов. Отвечал за UX и UI по каждой поставленной задаче.",
  ),
  role: t("Product Designer", "Product Designer"),
  team: [t("2 Designers", "2 Designers")],
  // Кейс закрыт NDA: на сайте видна только первая глава. Уберите поле, чтобы открыть его целиком.
  // Кейс целиком под NDA: показываем только вводную часть.
  nda: { visibleSections: 0 },
  quote: {
    type: "quote",
    title: t("Designer Review", "Ревью от дизайнера"),
    paragraphs: [
      t(
        "“I brought Amal on board as a second designer to work on projects I was handling for Ipoteka Bank. Over the course of several months, he helped me with web product design: creating landing pages, responsive page layouts, and interfaces for online bank appointment scheduling.",
        "«Я привлек Амаля в качестве второго дизайнера для работы над задачами, которые выполнял для Ipoteka Bank. В течение нескольких месяцев он помогал мне с дизайном веб-продуктов: создавал лендинги, адаптивные версии страниц и интерфейсы для онлайн-записи в банк.",
      ),
      t(
        "Amal quickly immerses himself in a task and strives to understand its essence rather than just meeting requirements formally. He is quite independent, knows how to ask the right questions, and works confidently with interfaces. He also has solid experience in mobile app design.",
        "Амаль быстро погружается в задачу и старается разобраться в её сути, а не просто выполнить требования формально. Он достаточно самостоятельный, умеет задавать правильные вопросы и уверенно работает с интерфейсами. Также у него есть хороший опыт в дизайне мобильных приложений.",
      ),
      t(
        "I can recommend him as a thoughtful and responsible designer with great potential for growth in a product team.\nAnton  TG@antonchikov\nSenior Product Designer, Ipoteka Bank”",
        "Могу рекомендовать его как вдумчивого и ответственного дизайнера с хорошим потенциалом для развития в продуктовой команде.\nАнтон  TG@antonchikov\nSenior Product Designer, Ipoteka Bank»",
      ),
    ],
  },
  sections: [
    {
      title: t("01 — Credit Products Guide", "01 — Гид по кредитным продуктам"),
      blocks: [
        { type: "kicker", text: t("Mobile web form", "Мобильная веб-форма") },
        ...story(
          t(
            "users called the bank for every question — buying a car, taking a large loan, saving with a deposit — even though these scenarios could be handled online. A form was needed on the website where a person could choose a product, calculate terms with a calculator, and submit an application without calling.",
            "пользователи звонили в банк по каждому вопросу — купить авто, взять крупный кредит, накопить по вкладу — хотя эти сценарии можно закрыть онлайн. Нужна была форма на сайте, где человек сам выбирает продукт, считает условия на калькуляторе и оставляет заявку без звонка.",
          ),
          t(
            "received the task from the senior designer with a problem description. Together we chose the widget structure — a unified guide with multiple scenarios (car purchase, large sums, savings) and the display format for the platform. Then I worked through UX, built the user flow, created several screen variations, and finalized the UI in the bank's visual style.",
            "получил задачу от старшего дизайнера с описанием проблемы. Вместе выбрали структуру виджета — единый гид с несколькими сценариями (покупка авто, крупные суммы, накопления) и формат отображения под платформу. Дальше прорабатывал UX, собрал user flow, сделал несколько вариантов экранов и довёл до финального UI в стилистике банка.",
          ),
          t("the widget is live on the website and functioning.", "виджет в проде на сайте, функционирует."),
        ),
        { type: "flow", src: img("2c21a.webp"),
          full: img("2c21a-full.webp"), label: t("User Flow", "User Flow") },
        {
          type: "phones",
          slot: 200,
          spread: true,
          items: [
            { src: img("3b252.webp"), caption: t("Home", "Главная") },
            { src: img("d688f.webp"), caption: t("Car Purchase", "Покупка автомобиля") },
            { src: img("90320.webp"), caption: t("Apartment Purchase", "Покупка квартиры") },
            { src: img("f3127.webp"), caption: t("Recommendation", "Рекомендация") },
          ],
        },
      ],
    },
    {
      title: t("02 — Digital Queue", "02 — Электронная очередь"),
      blocks: [
        { type: "kicker", text: webMobile },
        ...story(
          t(
            "customers at Ipotekabank branches were standing in live queues — the bank needed an appointment system to reduce crowds at branches and give people the ability to book a visit online from home.",
            "клиенты филиалов Ipotekabank стояли в живых очередях — банку нужен был способ записи, который снизит толпы в отделениях и даст людям возможность бронировать визит онлайн, не выходя из дома.",
          ),
          t(
            "received the task and under the guidance of the second designer built the entire appointment flow: from service selection to visit confirmation (service → branch on map → date and time → contact details → SMS code confirmation). Developed hypotheses for scenario steps, designed screens for web and mobile versions, and submitted for review.",
            "получил задачу и под руководством второго дизайнера выстроил весь флоу записи: от выбора услуги до подтверждения визита (услуга → филиал на карте → дата и время → контактные данные → подтверждение по SMS-коду). Продумал гипотезы по шагам сценария, отрисовал экраны для веба и мобильной версии, сдал на проверку.",
          ),
          t(
            "the flow is launched and working in production. After launch, the share of customers booking online instead of walk-in visits increased.",
            "флоу запущен и работает в проде. После запуска выросла доля клиентов, которые записываются онлайн вместо визита без брони.",
          ),
        ),
        {
          type: "devices",
          items: [
            { desktop: img("a21e2.webp"), mobile: img("cedcf.webp"), caption: t("Service Selection", "Выбор услуги") },
            { desktop: img("b123f.webp"), mobile: img("9730c.webp"), caption: t("Branch Selection", "Выбор филиала") },
          ],
        },
      ],
    },
    {
      title: t("03 — Benefits Cafeteria", "03 — Кафетерий льгот"),
      blocks: [
        { type: "kicker", text: t("Web (internal intranet)", "Веб (внутренний интранет)") },
        ...story(
          t(
            "an employee benefits section didn't exist — it needed to be designed from scratch.",
            "раздела с льготами для сотрудников не существовало — его нужно было спроектировать с нуля.",
          ),
          t(
            "received the task from the senior designer, together we thought through the user flow. For management approval, we quickly assembled initial mockups using AI — this accelerated concept defense before designing. After approval, I designed both package sections — 'Basic Minimum' (available to all employees, mandatory, company-paid) and 'Luxury Maximum' (personal choice, loyalty points, flexible use) — and finalized both to production-ready UI.",
            "получил задачу от старшего дизайнера, вместе продумали user flow. Для согласования с руководством быстро собрали первые макеты в нейросети — это ускорило защиту концепции ещё до отрисовки. После одобрения спроектировал оба раздела пакета — «Базовый минимум» (доступен всем сотрудникам, нельзя отказаться, оплачивает компания) и «Роскошный максимум» (персональный выбор, баллы лояльности, гибкое использование) — и довёл оба до финального UI.",
          ),
          t("both sections are live on the internal platform.", "оба раздела в проде на внутренней платформе."),
        ),
        {
          type: "video",
          src: "/video/ipoteka-benefits.mp4",
          poster: img("prototype-poster.webp"),
          ratio: "800 / 455",
          bordered: true,
        },
      ],
    },
    {
      title: t("04 — ESG Website", "04 — ESG-сайт"),
      blocks: [
        { type: "kicker", text: webMobile },
        { type: "p", label: problem, text: t(
          "the bank already had a website about ESG strategy and sustainable development, but the pages were outdated — large paragraphs of text were hard to read.",
          "у банка уже был сайт про ESG-стратегию и устойчивое развитие, но страницы устарели — большие абзацы текста было тяжело читать.",
        ) },
        { type: "p", label: done, text: t(
          "received the task with the site logic already defined, clarified details, and started designing. Created several article layout variations, added a related articles block at the bottom of the page, refined photos together with the senior designer. Designed web and mobile versions and handed off to development.",
          "получил задачу с уже готовой логикой сайта, уточнил детали и занялся отрисовкой. Сделал несколько вариантов вёрстки статей, добавил блок переходов на другие статьи внизу страницы, вместе со старшим дизайнером доработал фотографии. Спроектировал веб и мобильную версии, передал в разработку.",
        ) },
        {
          type: "p",
          label: result,
          text: t("the updated website is live at ", "обновлённый сайт функционирует по "),
          link: {
            href: "https://www.ipotekabank.uz/ru/about/esg/strategy/",
            text: t("the link", "ссылке"),
          },
        },
        {
          type: "devices",
          items: [
            { desktop: img("feaf7.webp"), mobile: img("41ac3.webp"), caption: t("ESG Strategy", "ESG-Стратегия") },
            { desktop: img("bd1db.webp"), mobile: img("9d62b.webp"), caption: t("Sustainability Report", "Отчёт по устойчивости") },
          ],
        },
      ],
    },
    {
      title: t("05 — Bilimkhona", "05 — Билимхона"),
      blocks: [
        { type: "kicker", text: webMobile },
        ...story(
          t(
            "the bank already had the Bilimkhon portal — it needed a section for internal employee courses to make training accessible directly on the platform.",
            "у банка уже был портал Билимхон — нужно было добавить в него раздел с внутренними курсами для сотрудников, чтобы обучение было доступно прямо на платформе.",
          ),
          t(
            "designed the courses section as part of the existing Bilimkhon website — matching the structure and style of the active portal. Was responsible for this section on web and mobile.",
            "спроектировал раздел курсов как часть существующего сайта Билимхон — под структуру и стиль уже действующего портала. Отвечал за этот раздел на вебе и в мобильной версии.",
          ),
          t(
            "the section is live in production, employees use it for training.",
            "раздел в проде, сотрудники пользуются им для обучения.",
          ),
        ),
        {
          type: "devices",
          items: [
            { desktop: img("3a836.webp"), mobile: img("98e05.webp") },
            { desktop: img("0dff8.webp"), mobile: img("8052f.webp") },
          ],
        },
      ],
    },
    {
      title: t("06 — My Takeaway", "06 — Мой итог"),
      blocks: [
        {
          type: "cards",
          cols: 1,
          items: [
            {
              icon: img("56014.svg"),
              text: t(
                "Working with a major fintech brand gave me an understanding of banking products from the inside — from customer-facing services to HR tools. I learned to design calculators with real business logic (interest rates, payments, limits) and to work under constrained and not always complete business requirements, defending solutions to management.",
                "Опыт работы с крупным финтех-брендом дал понимание банковских продуктов изнутри — от клиентских сервисов до HR-инструментов. Научился проектировать калькуляторы с реальной бизнес-логикой (проценты, платежи, лимиты) и работать в условиях ограниченных и не всегда полных бизнес-требований, защищая решения перед руководством.",
              ),
            },
          ],
        },
      ],
    },
  ],
};
