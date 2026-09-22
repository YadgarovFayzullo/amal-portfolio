import { t } from "@/lib/i18n";
import type { Case } from "../types";

const img = (file: string) => `/img/finarum/${file}`;

export const finarum: Case = {
  slug: "finarum",
  name: "Finarum",
  subtitle: t("ERP and POS systems for dentistry", "ERP и POS системы для стоматологии"),
  tags: ["MedTech", "B2B", "ERP / POS"],
  title: t("Finarum — ERP and POS systems for dentistry", "Finarum — ERP and POS systems for dentistry"),
  intro: t(
    "As a product designer, I was responsible for the mobile adaptation of the ERP: treatment and appointments module, finances, prescriptions and media, patient card. I worked alongside another designer.",
    "Как продуктовый дизайнер, я отвечал за мобильную адаптацию ERP: модуль лечения и приёмов, финансы, рецепты и медиа, карточка пациента. Работал в паре с ещё одним дизайнером.",
  ),
  role: t("Product Designer", "Product Designer"),
  team: [t("2 Designers", "2 Designers"), t("Developers", "Developers"), t("Manager", "Manager")],
  sections: [
    {
      title: t("01 — Context", "01 — Контекст"),
      blocks: [
        {
          type: "p",
          text: t(
            "Dental clinics were using an outdated ERP and a separate POS system on Odoo — they were visually inconsistent and duplicated data. No mobile version existed.",
            "Стоматологические клиники работали в устаревшей ERP и отдельной POS-системе на Odoo — они визуально не совпадали и дублировали данные. Мобильной версии не существовало.",
          ),
        },
        {
          type: "p",
          text: t(
            "The task was to redesign the system for mobile devices, unify the visual language, and simplify key workflows. Requirements were gathered through client interviews and analysis of the existing system.",
            "Задача — перепроектировать систему под мобильные устройства, объединить визуальный язык и упростить ключевые сценарии. Требования собирали через интервью с клиентом и анализ существующей системы.",
          ),
        },
        {
          type: "p",
          text: t(
            "The design system was developed by the team. The screens are the result of my work on designing the modules",
            "Дизайн-система разрабатывалась командой. Экраны — результат моей работы по проектированию модулей",
          ),
        },
      ],
    },
    {
      title: t("02 — Key Decisions", "02 — Ключевые решения"),
      blocks: [
        {
          type: "p",
          text: t(
            "Full-cycle UX/UI: information architecture, module structure, product decisions, interactive prototypes — in collaboration with the product manager, with whom key decision points were aligned",
            "Полный цикл UX/UI: информационная архитектура, структура модулей, продуктовые решения, интерактивные прототипы — в связке с продакт-менеджером, с которым согласовывались ключевые развилки",
          ),
        },
      ],
    },
    {
      title: t("03 — Input Data", "03 — Вводные данные"),
      blocks: [
        {
          type: "cards",
          cols: 1,
          items: [
            {
              icon: img("143ca.svg"),
              text: t(
                "The market is fragmented by payment methods: cash, bank transfer, Click, Payme, Uzum — this is reflected in the Cashier module structure",
                "Рынок фрагментирован по способам оплаты: нал, безнал, Click, Payme, Uzum — это отражается до структуры Кассы",
              ),
            },
            {
              icon: img("b74d9.svg"),
              text: t(
                "Delivery in the region is mainly done through aggregators (Yandex, Uzum Tezkor), not proprietary courier services — this changes the logic of Table Reservation and QR Menu",
                "Доставка в регионе идёт в основном через агрегаторы (Yandex, Uzum Tezkor), а не собственные курьерские службы — это меняет логику Бронирование стола и QR-меню",
              ),
            },
            {
              icon: img("33d90.svg"),
              text: t(
                "The product had already passed MVP: multi-branch support and basic modules were ready — new solutions had to be integrated into the existing system, not designed in a vacuum",
                "Продукт уже прошёл MVP: мультифилиальность и базовые модули были готовы — новые решения нужно было встраивать в существующую систему, а не проектировать в вакууме",
              ),
            },
          ],
        },
      ],
    },
    {
      title: t("04 — Process and Decisions", "04 — Процесс и решения"),
      blocks: [
        {
          type: "group",
          blocks: [
            { type: "subtitle", text: t("Patient Card", "Карточка пациента") },
            {
              type: "p",
              text: t(
                "All patient information — treatment, finances, prescriptions, media — is gathered in one place and accessible from the phone. Previously, the doctor had to switch between different sections of the desktop system",
                "Вся информация о пациенте — лечение, финансы, рецепты, медиа — собрана в одном месте и доступна с телефона. Раньше врачу приходилось переключаться между разными разделами десктопной системы",
              ),
            },
            {
              type: "phones",
              spread: true,
              items: [
                { src: img("6d23a.webp"), caption: t("Patient Section", "Раздел пациента") },
                { src: img("13944.webp"), caption: t("Adding a Patient", "Добавление пациента") },
                { src: img("c1b81.webp"), caption: t("Overview / Empty State", "Обзор / Empty State") },
                { src: img("fea1e.webp"), caption: t("Patient Search", "Поиск пациента") },
              ],
            },
          ],
        },
        {
          type: "group",
          blocks: [
            { type: "subtitle", text: t("Treatment and Appointments Module", "Модуль лечения и приёмов") },
            {
              type: "p",
              text: t(
                "Designed the mobile workflow for doctors with appointments: viewing the schedule, visit cards, and treatment history without needing to open the desktop",
                "Спроектировал мобильный сценарий работы врача с приёмами: просмотр расписания, карточки визита и истории лечения без необходимости открывать десктоп",
              ),
            },
            {
              type: "phones",
              spread: true,
              items: [
                { src: img("16177.webp"), caption: t("Appointments Section", "Раздел приемы") },
                { src: img("6cf21.webp"), caption: t("Treatment Section", "Раздел лечения") },
                { src: img("e6c0d.webp"), caption: t("Treatment Section / Procedures", "Раздел лечения / процедуры") },
              ],
            },
          ],
        },
        {
          type: "group",
          blocks: [
            { type: "subtitle", text: t("Prescriptions and Media", "Рецепты и медиа") },
            {
              type: "p",
              text: t(
                "A section for storing and issuing prescriptions, as well as patient media files — X-rays, photos, accessible within the patient card",
                "Блок для хранения и выдачи рецептов, а также медиафайлов по пациенту — рентген, снимки, доступно в рамках карточки",
              ),
            },
            {
              type: "phones",
              spread: true,
              items: [
                { src: img("7d4d5.webp"), caption: t("Prescriptions", "Рецепты") },
                { src: img("4bff5.webp"), caption: t("Prescriptions", "Рецепты") },
                { src: img("09480.webp"), caption: t("Media", "Медиа") },
              ],
            },
          ],
        },
        {
          type: "group",
          blocks: [
            { type: "subtitle", text: t("Finances and Cashier", "Финансы и касса") },
            {
              type: "p",
              text: t(
                "Adapted the financial module for mobile — doctors and administrators can view account balances and payments directly from the phone",
                "Адаптировал финансовый модуль под мобилку, врач и администратор могут видеть состояние счетов и платежи прямо с телефона",
              ),
            },
            {
              type: "phones",
              spread: true,
              slot: 200,
              items: [
                { src: img("35fa5.webp"), caption: t("Finances", "Финансы") },
                { src: img("81a12.webp"), caption: t("Cashier", "Cashier") },
                { src: img("bb7be.webp"), caption: t("Payment", "Оплата") },
                { src: img("6f5ce.webp"), caption: t("Invoices", "Счета") },
              ],
            },
          ],
        },
      ],
    },
    {
      title: t("05 — POS System for Cashiers", "05 — POS система для кассиров"),
      blocks: [
        {
          type: "group",
          blocks: [
            {
              type: "p",
              text: t(
                "The POS module was designed from scratch — a separate workflow for the cashier. The main focus was on UX: removing everything unnecessary, making checkout fast and intuitive from the phone. Previously, the system was built on Odoo",
                "POS-модуль проектировался с нуля — отдельный сценарий для кассира. Основной упор был на UX: убрать всё лишнее, сделать расчёт быстрым и понятным с телефона. До этого система была собрана на Odoo",
              ),
            },
            {
              type: "lines",
              items: [
                t("Removed the on-screen keyboard", "Убрали клавиатуру с экрана"),
                t(
                  "In the original version, the on-screen keyboard took up a quarter of the screen, leaving almost no space for products. We removed it — now the cashier sees the list of items right away, adding items is faster.",
                  "В исходной версии экранная клавиатура занимала четверть экрана, для товаров почти не оставалось места. Убрали её теперь кассир видит список позиций сразу, добавление происходит быстрее.",
                ),
              ],
            },
            {
              type: "wide",
              items: [
                { src: img("8cd27.webp"), caption: t("Main Screen BEFORE", "Главный экран ДО") },
                { src: img("428df.webp"), caption: t("Main Screen AFTER", "Главный экран После") },
              ],
            },
          ],
        },
        {
          type: "group",
          blocks: [
            {
              type: "p",
              medium: true,
              text: t(
                "Unified all clients in one screen and updated payment. A single order history — previously history was split into two sections — the cashier didn't always know where to look. We merged it into one workflow: any order is always in one place.",
                "Унифицировал всех клиентов в одном экране и обновил оплату. Единая история заказов, раньше история была разделена на два раздела — кассир не всегда понимал, куда смотреть. Объединили в один сценарий: любой заказ всегда в одном месте.",
              ),
            },
            {
              type: "wide",
              items: [
                { src: img("fe954.webp"), caption: t("All Clients", "Все клиенты") },
                { src: img("de3b1.webp"), caption: t("Payment", "Оплата") },
                { src: img("95db5.webp"), caption: t("History", "История") },
              ],
            },
          ],
        },
      ],
    },
  ],
};
