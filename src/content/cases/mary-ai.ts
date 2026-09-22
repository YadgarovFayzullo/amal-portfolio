import { t } from "@/lib/i18n";
import type { Case } from "../types";

const img = (file: string) => `/img/mary-ai/${file}`;

export const maryAi: Case = {
  slug: "mary-ai",
  name: "Mary AI",
  subtitle: t("Restaurant management platform design", "Дизайн платформы управления рестораном"),
  tags: ["FoodTech", "ERP", "B2B", "web"],
  title: t(
    "Mary AI — restaurant management platform design",
    "Mary AI — restaurant management platform design",
  ),
  intro: t(
    "The main requirement for the project was to create a strong, memorable UI — the restaurant software market is visually outdated, and this was an opportunity to stand out not only with functionality, but also with interface quality.",
    "Главное требование к проекту было сделать сильный, запоминающийся UI — рынок ресторанного софта визуально устарел, и это была возможность выделиться не только функциональностью, но и качеством интерфейса.",
  ),
  role: t("Product Designer", "Product Designer"),
  team: [t("1 Designer", "1 Designer"), t("3 Developers", "3 Developers"), t("Manager", "Manager")],
  sections: [
    {
      title: t("01 — Context", "01 — Контекст"),
      blocks: [
        {
          type: "p",
          text: t(
            "Mary AI is a SaaS platform for restaurant management, targeting the Uzbekistan and Central Asia market. The market is crowded: iiko, Clopos, Jowi, NEON ALISA — mature products with established patterns. Mary AI's key differentiator is the built-in AI assistant Mari AI, which should be part of every module.",
            "Mary AI — SaaS-платформа для управления ресторанами, ориентированная на рынок Узбекистана и Центральной Азии. Рынок занят: iiko, Clopos, Jowi, NEON ALISA — зрелые продукты с устоявшимися паттернами. Ключевое отличие Mary AI — встроенный AI-ассистент Mari AI, который должен быть частью того модулей",
          ),
        },
        {
          type: "screens",
          items: [
            { src: img("b54b0.webp"), caption: t("Registration", "Регистрация") },
            { src: img("01dec.webp"), caption: t("Dashboard", "Дашборд") },
            { src: img("b8fb2.webp"), caption: t("Artificial Intelligence", "Искуственный Интеллект") },
          ],
        },
        {
          type: "p",
          text: t(
            "The product architecture needed to be designed from scratch for 11 modules: Dashboard, POS, Warehouse, Menu, CRM, Reports, Employees, Book a Table, QR Menu, Settings, Billing.",
            "Нужно было спроектировать архитектуру продукта с нуля для 11 модулей: Dashboard, Касса, Склад, Меню, CRM, Отчёты, Сотрудники, Book a Table, QR-меню, Настройки, Биллинг.",
          ),
        },
      ],
    },
    {
      title: t("02 — Objective", "02 — Задача"),
      blocks: [
        {
          type: "p",
          text: t(
            "Full-cycle UX/UI: information architecture, module structure, product decisions, interactive prototypes — in collaboration with the product manager, with whom key decision points were aligned.",
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
                "The market is fragmented by payment methods: cash, bank transfer, Click, Payme, Uzum — this is reflected in the POS structure.",
                "Рынок фрагментирован по способам оплаты: нал, безнал, Click, Payme, Uzum — это отражается до структуры Кассы",
              ),
            },
            {
              icon: img("b74d9.svg"),
              text: t(
                "Delivery in the region mainly goes through aggregators (Yandex, Uzum Tezkor), not proprietary courier services — this changes the logic of Table Booking and QR Menu.",
                "Доставка в регионе идёт в основном через агрегаторы (Yandex, Uzum Tezkor), а не собственные курьерские службы — это меняет логику Бронирование стола и QR-меню",
              ),
            },
            {
              icon: img("33d90.svg"),
              text: t(
                "The product had already passed MVP: multi-branch support and basic modules were ready — new solutions needed to be integrated into the existing system, not designed in a vacuum.",
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
            { type: "subtitle", text: t("POS", "Касса") },
            {
              type: "p",
              text: t(
                "Problem: cash flow, reporting, and shift management were logically mixed across different parts of the interface. Solution: four tabs (Registers · Transactions · Transaction Groups · Register Report). Cash Flow as a separate entity was removed — absorbed by the Register Report. Shifts are tied to a specific register, not a branch. The report separates cash flow and 'calculated profit' (accrual vs cash) — these are different things and must not be confused.",
                "Проблема: денежный поток, отчётность и учёт смен были логически смешаны в разных местах интерфейса. Решение: четыре вкладки (Кассы · Транзакции · Группы транзакций · Отчёт по кассе), Cash Flow как отдельная сущность убран — поглощён Отчётом по кассе. Смены привязаны к конкретной кассе, а не к филиалу. В отчёте разделены кассовый поток и «расчётная прибыль» (accrual vs cash) — это разные вещи, и путать их нельзя.",
              ),
            },
            {
              type: "screens",
              items: [
                { src: img("67662.webp"), caption: t("POS", "Касса") },
                { src: img("2c397.webp"), caption: t("Register Report", "Отчёт по кассе") },
                { src: img("c0dc6.webp"), caption: t("Add Transaction", "Добавление транзакции") },
              ],
            },
          ],
        },
        {
          type: "group",
          blocks: [
            { type: "subtitle", text: t("Warehouse", "Склад") },
            {
              type: "p",
              text: t(
                "Problem: inventory could be duplicated between Warehouse and Menu, creating a risk of data desync. Solution: Warehouse → Inventory is the single source of truth; Menu → Ingredients simply reflects the same data. Invoice payment is an inline action within the card, creating a transaction in the POS in the background, without navigating to another module.",
                "Проблема: остатки могли дублироваться между Складом и Меню, что создаёт риск рассинхрона данных. Решение: Склад → Остатки — единственный источник правды; Меню → Ингредиенты просто отражает те же данные. Оплата накладной — inline-действие внутри карточки, создающее транзакцию в Кассе в фоне, без перехода в другой модуль.",
              ),
            },
            {
              type: "screens",
              items: [
                { src: img("33558.webp"), caption: t("Warehouse Inventory", "Склад Остатки") },
                { src: img("4d4b5.webp"), caption: t("Warehouse", "Склад") },
                { src: img("de062.webp"), caption: t("Add Write-off", "Добавление списание") },
              ],
            },
          ],
        },
        {
          type: "group",
          blocks: [
            { type: "subtitle", text: t("Menu", "Меню") },
            {
              type: "p",
              text: t(
                "Problem: cost calculation usually lives separately from the dish card, which complicates pricing. Solution: in the dish creation drawer — a 'Calculation' tab with a unified table of ingredients and semi-finished products, and live calculation of cost, price, margin, and markup as you type.",
                "Проблема: калькуляция себестоимости обычно живёт отдельно от карточки блюда, что усложняет ценообразование. Решение: в drawer добавления блюда — вкладка «Калькуляция» с единой таблицей ингредиентов и полуфабрикатов и live-расчётом себестоимости, цены, маржи и наценки прямо по ходу ввода.",
              ),
            },
            {
              type: "screens",
              items: [
                { src: img("b2ed9.webp"), caption: t("Menu", "Меню") },
                { src: img("4b9d7.webp"), caption: t("Menu Categories", "Категории меню") },
                { src: img("3099e.webp"), caption: t("Ingredients", "Ингредиенты") },
              ],
            },
          ],
        },
        {
          type: "group",
          blocks: [
            { type: "subtitle", text: t("CRM", "CRM") },
            {
              type: "p",
              text: t(
                "Problem: it was necessary to decide whether to create customer profiles manually or embed them into existing flows. Solution: customers are created automatically from reservations, POS, and pre-orders with deduplication by phone number. Segments are loyalty levels (New/Infrequent/Regular/VIP) without a separate loyalty program section — to avoid creating unnecessary entities.",
                "Проблема: нужно было решить, создавать ли клиентские профили вручную или встраивать в существующие потоки. Решение: клиенты создаются автоматически из бронирований, POS и предзаказов с дедупликацией по номеру телефона. Сегменты — это уровни лояльности (New/Infrequent/Regular/VIP) без отдельного раздела программы уровней — чтобы не плодить лишние сущности.",
              ),
            },
            {
              type: "screens",
              items: [
                { src: img("264b8.webp"), caption: t("Customers", "Клиенты") },
                { src: img("3d6c9.webp"), caption: t("Loyalty", "Лояльность") },
                { src: img("fb9b0.webp"), caption: t("Customer History", "История клиента") },
              ],
            },
          ],
        },
        {
          type: "group",
          blocks: [
            { type: "subtitle", text: t("Table Booking", "Бронирование стола") },
            {
              type: "p",
              text: t(
                "Problem: reservations and takeout pre-orders are fundamentally different processes, but they are often forced into a single table. Solution: tab-based separation Reservations / Pre-orders. Reservations — list + floor plan; Pre-orders — full-width table with a status model New → Preparing → Ready → Picked up.",
                "Проблема: бронирования и предзаказы на самовывоз — разные по природе процессы, но их часто силой сводят в одну таблицу. Решение: tab-based разделение Reservations / Pre-orders. Reservations — список + схема зала; Pre-orders — full-width таблица со статусной моделью New → Preparing → Ready → Picked up.",
              ),
            },
            {
              type: "screens",
              items: [
                { src: img("c1807.webp"), caption: t("Customers", "Клиенты") },
                { src: img("f34cf.webp"), caption: t("Loyalty", "Лояльность") },
                { src: img("ffeff.webp"), caption: t("Customer History", "История клиента") },
              ],
            },
          ],
        },
        {
          type: "group",
          blocks: [
            {
              type: "subtitle",
              text: t(
                "Reports, Employees, QR Menu, Settings, Billing",
                "Отчёты, Сотрудники, QR-меню, Настройки, Биллинг",
              ),
            },
            {
              type: "p",
              text: t(
                "In brief: a unified period pattern (chips Today/Week/Month/Year/Custom) — across the entire platform; QR Menu syncs zones and tables from reservations instead of duplicating; Billing — a separate access zone only for the owner.",
                "Коротко: единый паттерн периодов (чипы Сегодня/Неделя/Месяц/Год/Произвольный) — по всей платформе; QR-меню синхронизирует зоны и столы из бронирований вместо дублирования; Биллинг — отдельная зона доступа только для владельца.",
              ),
            },
            {
              type: "screens",
              items: [
                { src: img("e943a.webp"), caption: t("QR Menu", "QR меню") },
                { src: img("3bfab.webp"), caption: t("Employees", "Сотрудники") },
                { src: img("69b15.webp"), caption: t("Reports", "Отчёты") },
              ],
            },
            {
              type: "screens",
              items: [
                { src: img("f4265.webp"), caption: t("Plans", "Тарифы") },
                { src: img("8ab1f.webp"), caption: t("Settings", "Настройки") },
                { src: img("de287.webp"), caption: t("Branches", "Филиалы") },
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
          type: "logoLine",
          logo: img("a2070.webp"),
          text: t(
            "The platform is currently operating in Friends restaurants.",
            "Сейчас платформа работает в ресторанах Friends",
          ),
        },
        {
          type: "p",
          text: t(
            "11 modules designed with unified logic and shared patterns; key architectural decisions for POS, Warehouse, Menu, CRM, and Table Booking were made and validated with the product manager.",
            "11 модулей спроектированы с единой логикой и общими паттернами; ключевые архитектурные решения по Кассе, Складу, Меню, CRM и Бронированием приняты и провалидированы с продактом.",
          ),
        },
      ],
    },
  ],
};
