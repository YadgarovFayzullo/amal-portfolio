import { t } from "@/lib/i18n";
import type { Case } from "../types";

const img = (file: string) => `/img/uzum-bank/${file}`;
const bulb = img("5f14f.svg");

export const uzumBank: Case = {
  slug: "uzum-bank",
  name: "Uzum Bank",
  subtitle: t(
    "How I reimagined the filter analysis flow of a major bank",
    "Как я переосмыслили сценарий анализа фильтров крупного банка",
  ),
  tags: ["FinTech", "B2C", "mobile"],
  title: t(
    "Uzum Bank — how I Rethought a Major Bank's Filter Analysis Scenario",
    "Uzum Bank — how I Rethought a Major Bank's Filter Analysis Scenario",
  ),
  intro: t(
    "As a product designer, I redesigned the transaction filtering scenario at Uzum Bank — one of the largest online banks in Uzbekistan. I conducted 8 interviews, analyzed competitors' best practices, and designed a filter",
    "Я как продуктовый дизайнер занимался редизайном сценария фильтрации транзакций в Uzum Bank — одном из крупнейших онлайн-банков Узбекистана. Провёл 8 интервью, проанализировал лучшие практики конкурентов и спроектировал фильтр",
  ),
  role: t("Product Designer", "Product Designer"),
  team: [t("Designer", "Designer"), t("Mentor", "Mentor")],
  sections: [
    {
      title: t("01 — Context", "01 — Контекст"),
      blocks: [
        {
          type: "p",
          text: t(
            "Uzum Bank is one of the largest online banks in Uzbekistan. In the app, transactions can only be sorted by date — without categories, amounts, or periods. Users cannot understand the structure of their spending or quickly find a specific payment.",
            "Uzum Bank — один из крупнейших онлайн-банков Узбекистана. В приложении транзакции можно отсортировать только по дате — без категорий, сумм и периодов. Пользователь не может понять структуру своих трат и быстро найти нужный платёж.",
          ),
        },
      ],
    },
    {
      title: t("02 — Goals", "02 — Цели"),
      blocks: [
        {
          type: "cards",
          cols: 2,
          items: [
            {
              icon: bulb,
              title: t("Business Goals", "Бизнес цели"),
              list: [
                t("Retain users", "Удержать пользователей"),
                t("Increase product value", "Повысить ценность продукта"),
                t("Improve NPS", "Улучшить NPS"),
              ],
            },
            {
              icon: bulb,
              title: t("User Goals", "Пользовательские цели"),
              list: [
                t("Quickly find a transaction", "Быстро найти транзакцию"),
                t("Control budget", "Контролировать бюджет"),
                t("Compare periods", "Сравнивать периоды"),
              ],
            },
          ],
        },
      ],
    },
    {
      title: t("03 — Research", "03 — Исследования"),
      blocks: [
        {
          type: "p",
          text: t(
            "I conducted 8 qualitative interviews with online banking users. The main question: how they analyze their spending and what prevents them from doing so in the app.",
            "Я провёл 8 качественных интервью с пользователями онлайн-банков. Основной вопрос: как они анализируют свои траты и что мешает делать в приложении.",
          ),
        },
        { type: "image", src: img("00d56.webp"),
          full: img("00d56-full.webp"), ratio: "800 / 438" },
        {
          type: "callout",
          lines: [
            t("Three key insights", "Три ключевых инсайта"),
            t(
              "Users rely on third-party apps (Excel, notes) — the bank doesn't cover the task",
              "Пользователи используют сторонние приложения (Excel, заметки) — банк не закрывает задачу",
            ),
            t(
              "Searching for a single transaction takes 2–5 minutes with a large number of operations",
              "Поиск одной транзакции занимает 2–5 минут при большом количестве операций",
            ),
            t(
              "Users want to see a total for a period, not a list",
              "Пользователи хотят видеть сумму за период, а не список",
            ),
          ],
        },
      ],
    },
    {
      title: t("04 — Best Practice", "04 — Best Practice"),
      blocks: [
        {
          type: "p",
          text: t(
            "I analyzed filters in Sber, T-Bank, and VTB. In all three, filtering is placed in a separate scenario. All of them offer spending categories with icons, period selection via calendar, and visualization. I took these patterns as a foundation and adapted them for Uzum Bank.",
            "Я проанализировал фильтры в Сбере, Т-банке, ВТБ. Во всех трёх фильтрация вынесена в отдельный сценарий. Все они предлагают категории трат с иконками, выбор периода через календарь и визуализацию. Я взял эти паттерны за основу и адаптировав под Uzum Bank.",
          ),
        },
        { type: "image", src: img("734d9.webp"),
          full: img("734d9-full.webp"), ratio: "800 / 859" },
      ],
    },
    {
      title: t("05 — Prioritization and User Flow", "05 — Приоритизация и User Flow"),
      blocks: [
        {
          type: "lines",
          items: [
            t(
              "To evaluate hypotheses, I used ICE Score: Impact · Confidence · Ease.",
              "Для оценки гипотез я использовал ICE Score: Impact · Confidence · Ease.",
            ),
            t(
              "The final 3 solutions had the best value-to-complexity ratio.",
              "В финал вошли 3 решения с наибольшим соотношением ценности к сложности.",
            ),
          ],
        },
        { type: "image", src: img("bc3d1.webp"),
          full: img("bc3d1-full.webp"), ratio: "800 / 433" },
        {
          type: "callout",
          lines: [
            t("Three winners", "Три победителя"),
            t("Spending and income chart — ICE: 1.5", "Диаграмма расходов и доходов — ICE: 1.5"),
            t("Transaction categories — ICE: 1.5", "Категории транзакций — ICE: 1.5"),
            t("Advanced filter — ICE: 3", "Расширенный фильтр — ICE: 3"),
          ],
        },
        {
          type: "p",
          text: t(
            "Before designing, I mapped out the flow: how the user opens filters, applies parameters, and sees the result.",
            "Перед дизайном я прописал флоу: как пользователь открывает фильтры, применяет параметры и видит результат.",
          ),
        },
        { type: "image", src: img("0ed22.webp"),
          full: img("0ed22-full.webp"), ratio: "800 / 287", framed: "rounded" },
      ],
    },
    {
      title: t("06 — Design Result", "06 — Дизайн результат"),
      blocks: [
        {
          type: "group",
          blocks: [
            { type: "subtitle", text: t("Prototype", "Прототип") },
            {
              type: "video",
              src: "/video/uzum-bank-prototype.mp4",
              poster: img("prototype-poster.webp"),
              ratio: "800 / 440",
            },
          ],
        },
        {
          type: "group",
          blocks: [
            { type: "subtitle", text: t("Before/After", "До/После") },
            {
              type: "phones",
              slot: 200,
              items: [
                { src: img("cdcdc.webp"), caption: t("Before", "До") },
                { src: img("88cad.webp"), caption: t("After", "После") },
                { src: img("5f3c0.webp"), caption: t("Before", "До") },
                { src: img("834e9.webp"), caption: t("After", "После") },
              ],
            },
          ],
        },
        {
          type: "group",
          blocks: [
            {
              type: "subtitle",
              text: t("Hypothesis: spending and income chart", "Гипотеза: диаграмма расходов и доходов"),
            },
            {
              type: "phones",
              large: true,
              slot: 260,
              items: [{ src: img("a0fd9.webp") }, { src: img("f49b5.webp") }, { src: img("e58da.webp") }],
            },
          ],
        },
        {
          type: "group",
          blocks: [
            {
              type: "subtitle",
              text: t(
                "Hypotheses: transaction categories and advanced filter",
                "Гипотезы: категории транзакций и расширенный фильтр",
              ),
            },
            {
              type: "phones",
              large: true,
              slot: 260,
              spread: true,
              items: [{ src: img("1e067.webp") }, { src: img("93c15.webp") }, { src: img("10694.webp") }],
            },
          ],
        },
      ],
    },
    {
      title: t("05 — Result", "05 — Результат"),
      blocks: [
        {
          type: "lines",
          items: [
            t(
              "This project showed me how research changes design decisions. Without interviews, I would have only made “pretty filters.”",
              "Этот проект показал мне, как исследование меняет дизайн-решения. Без интервью я бы сделал только «красивые фильтры»",
            ),
            t(
              "The prototype was tested by 3 designers. The main feedback was that filter navigation is clear and the structure is logical.",
              "Прототип прошли 3 дизайнера. Основной фидбек, что навигация по фильтрам понятна и структура логична.",
            ),
            t("If the product had launched, I would measure:", "Если бы продукт запустился, я бы измерял:"),
            t(
              "— transaction search time — hypothesis: reduction from 2–5 minutes to 30–60 seconds",
              "— время поиска транзакции — гипотеза: снижение с 2–5 минут до 30–60 секунд",
            ),
            t(
              "— % of users applying filters — target of 20–30% of active sessions",
              "— % пользователей, применяющих фильтры — целевой показатель от 20–30% активных сессий",
            ),
            t(
              "— churn to third-party apps (Excel, notes)",
              "— отток в сторонние приложения (Excel, заметки)",
            ),
          ],
        },
        {
          type: "lines",
          items: [
            t("In the future, I would add:", "В будущем добавил бы:"),
            t("spending limits", "лимиты на расходы"),
            t("extended categories", "расширенные категории"),
            t("testing with real users", "тестирование на реальных пользователях"),
          ],
        },
      ],
    },
  ],
};
