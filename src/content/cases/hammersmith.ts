import { t } from "@/lib/i18n";
import type { Case } from "../types";

const img = (file: string) => `/img/hammersmith/${file}`;

export const hammersmith: Case = {
  slug: "hammersmith",
  name: "Hammersmith",
  subtitle: t("A large CRM system for restaurant chains", "Крупная CRM-система для сетей ресторанов"),
  tags: ["FoodTech", "B2B", "CRM"],
  title: t(
    "Hammersmith — a large CRM system for restaurant chains",
    "Hammersmith — a large CRM system for restaurant chains",
  ),
  intro: t(
    "I worked on a large CRM system for a major restaurant chain. My team included a restaurant manager, a project manager, and a development team.",
    "Я работал над большой CRM системой для крупной сети ресторанов. Со мной в команде были менеджер из ресторана, проджект менеджер и команда разработчиков",
  ),
  role: t("Product Designer", "Product Designer"),
  team: [t("Designer", "Designer"), t("Developers", "Developers"), t("Manager", "Manager")],
  sections: [
    {
      title: t("01 — Context and Problem", "01 — Контекст и проблема"),
      blocks: [
        {
          type: "p",
          text: t(
            "HammerSmith is a restaurant POS/back-office system designed for two different users: the manager (desktop, mouse, data-dense screens) and the cashier (touchscreen, minimal cognitive load, working under the pressure of guest flow). A mobile app for restaurant guests is also being developed in parallel. One system — two different modes, and that's the main design challenge of the project.",
            "HammerSmith — ресторанная POS/back-office система, рассчитанная на двух разных пользователей: менеджера (десктоп, мышь, плотные данные) и кассира (тач-экран, минимум когнитивной нагрузки, работа под давлением потока гостей). Параллельно разрабатывается и мобильное приложение для гостей ресторана. Одна система — два разных режима и в этом главный дизайн-вызов проекта.",
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
            "Design a cohesive interface for both scenarios using a unified component language — not two separate products, but one system with two adaptive layers — and solve specific module problems as they are identified.",
            "Спроектировать связный интерфейс для обоих сценариев на едином компонентном языке — не два разных продукта, а одна система с двумя адаптационными слоями — и решать проблемы конкретных модулей по мере их выявления.",
          ),
        },
      ],
    },
    {
      title: t("03 — Choosing the Visual Direction", "03 — Выбор визуального направления"),
      blocks: [
        {
          type: "p",
          text: t(
            "Before moving on to individual modules, we needed to define the overall visual language of the system. A POS interface is a working tool used under stress: during shifts, with high accountability for every action. I proposed three concepts — the client chose the one that best fit the existing development component base.",
            "Прежде чем переходить к отдельным модулям, нужно было определиться с общим визуальным языком системы. POS-интерфейс — это рабочий инструмент, которым пользуются в условиях стресса: во время смены, при высокой ответственности за каждое действие. Я предложил три концепции — клиент выбрал ту, которая лучше всего ложилась на уже существующую компонентную базу разработки.",
          ),
        },
        {
          type: "screens",
          items: [
            { src: img("1bce7.webp"), caption: t("Option 1", "1 вариант") },
            { src: img("db94b.webp"), caption: t("Option 2", "2 вариант") },
            { src: img("a8de7.webp"), caption: t("Option 3", "3 вариант") },
          ],
        },
      ],
    },
    {
      title: t("04 — Process and Solutions", "04 — Процесс и решения"),
      blocks: [
        {
          type: "group",
          blocks: [
            { type: "subtitle", text: t("Menu", "Меню") },
            {
              type: "p",
              text: t(
                "Before the content, the screen had three service rows in a row: a header with search, category tabs, and a full-width banner about dishes without IKPU codes — too much for a dense manager screen. We combined the header with search and tabs into one row, replaced the banner with a compact clickable chip warning (“17 without IKPU”) in the same row as the tabs, and switched tabs from touch to mouse sizing.",
                "До контента экран нёс три служебных строки подряд: заголовок с поиском, табы категорий и полноширинный баннер о блюдах без кода ИКПУ — многовато для плотного менеджерского экрана. Объединили заголовок с поиском и табы в одну строку, а баннер заменили на компактный кликабельный чип-предупреждение («17 без ИКПУ») в той же строке, что и табы, плюс перевели табы с touch- на mouse-размерность.",
              ),
            },
            {
              type: "screens",
              items: [
                { src: img("c93c3.webp"), caption: t("Menu", "Меню") },
                { src: img("94550.webp"), caption: t("Dish Editing", "Редактирование блюда") },
                { src: img("550ac.webp"), caption: t("IKPU Codes", "Коды ИКПУ") },
              ],
            },
          ],
        },
        {
          type: "group",
          blocks: [
            { type: "subtitle", text: t("Orders", "Заказы") },
            {
              type: "p",
              text: t(
                "The list got its own scroll, and the panel got a natural height with a pinned action block at the bottom. The new order builder was single-column — dishes were added by clicking “+” without a visible cart or total. We replaced it with a two-panel layout: catalog with categories and search on the left, live cart with quantity and total on the right.",
                "Список получил свой скролл, панель — естественную высоту с закреплённым снизу блоком действий. Конструктор нового заказа был одноколоночным — блюда добавлялись кликом «+» без видимой корзины и итога. Заменили на двухпанельный: слева каталог с категориями и поиском, справа живая корзина с количеством и суммой.",
              ),
            },
            {
              type: "p",
              text: t(
                "We designed a status → actions matrix: “Preparing” remains editable, “Completed”/“Cancelled” are terminal states with a “Repeat Order” button instead of editing. We also moved order cancellation to a separate modal confirmation with a structured reason — previously, the inline reason field visually conflicted with the item removal crosses.",
                "Продумали матрицу статус → действия: «Готовится» остаётся редактируемым, «Выполнен»/«Отменён» — терминальные состояния с кнопкой «Повторить заказ» вместо редактирования. И вынесли отмену заказа в отдельное модальное подтверждение со структурированной причиной — раньше инлайн-поле причины конфликтовало визуально с крестиками удаления позиций.",
              ),
            },
            {
              type: "screens",
              items: [
                { src: img("5d5f1.webp"), caption: t("Orders", "Заказы") },
                { src: img("9a1ba.webp"), caption: t("Adding", "Добавление") },
                { src: img("ad4ad.webp"), caption: t("Orders Switching", "Заказы переключение") },
              ],
            },
          ],
        },
        {
          type: "group",
          blocks: [
            { type: "subtitle", text: t("Tables", "Столы") },
            {
              type: "p",
              text: t(
                "The most confusing section. Hall creation followed a “create first, name later” pattern. Plus data desync (badge showing “1”, but inside the hall — “0 tables”) and duplicated tools within the canvas editor: delete and align existed in both the left panel and the right panel, without being tied to the selected object.",
                "Самый запутанный раздел. Создание зала следовало паттерну «сначала создать, потом назвать». Плюс рассинхрон данных (бейдж «1», а внутри зала — «0 столов») и дублирование инструментов внутри canvas-редактора: удаление и выравнивание были и в левой панели, и в правой, без привязки к выбранному объекту.",
              ),
            },
            {
              type: "p",
              text: t(
                "Solution: a naming modal instead of create-before-name; the static left panel was replaced by a floating toolbar dependent on selection; alignment and object actions (Copy/Delete) were consolidated in the right properties panel, while the left panel was reserved solely for canvas-level tools.",
                "Решение: naming-модалка вместо create-before-name; статичную левую панель заменил плавающий тулбар, зависящий от выделения; выравнивание и действия с объектом (Копировать/Удалить) собраны в правой панели свойств, левая — только под canvas-уровневые инструменты.",
              ),
            },
            {
              type: "screens",
              bleed: true,
              items: [
                { src: img("edff1.webp"), caption: t("Halls", "Залы") },
                { src: img("5b88d.webp"), caption: t("Adding a Hall", "Добавление зала") },
                { src: img("54807.webp"), caption: t("Adding a Table", "Добавление стола") },
                { src: img("bf291.webp"), caption: t("Tables", "Столы") },
              ],
            },
          ],
        },
        {
          type: "group",
          blocks: [
            { type: "subtitle", text: t("Customers, Waiters", "Клиенты, Официанты") },
            {
              type: "p",
              text: t(
                "We designed customer segmentation (VIP / Regular / New), a summary metrics block, a slide panel for quick customer preview, and a separate full customer card for working with the complete record.",
                "Спроектировали сегментацию клиентов (VIP / Постоянный / Новый), сводный блок метрик, слайд-панель для быстрого просмотра клиента и отдельную полную карточку клиента для работы с полной записью.",
              ),
            },
            {
              type: "p",
              text: t(
                "Waiters — a module for calling a waiter to a table: each call is logged in a table divided into active and history, with other statuses throughout processing.",
                "Официанты — модуль вызова официанта к столу: каждый вызов фиксируется в таблице с разделением на активные и историю, и другими статусами по ходу обработки.",
              ),
            },
            {
              type: "screens",
              items: [
                { src: img("458d6.webp"), caption: t("Customers", "Клиенты") },
                { src: img("c250b.webp"), caption: t("Customer History", "История клиента") },
                { src: img("7910c.webp"), caption: t("Waiter Calls", "Вызовы официантов") },
              ],
            },
          ],
        },
        {
          type: "group",
          blocks: [
            { type: "subtitle", text: t("Reviews, Branches, QR Menu", "Отзывы, Филиалы, QR меню") },
            {
              type: "p",
              text: t(
                "Reviews — a redesign with a summary block (average rating + star distribution), a compact table instead of an overloaded one, truncation of long comments, and a slide panel for replying.",
                "Отзывы — редизайн со сводным блоком (средний рейтинг + распределение по звёздам), компактной таблицей вместо перегруженной, обрезкой длинных комментариев и слайд-панелью для ответа.",
              ),
            },
            {
              type: "p",
              text: t(
                "Branches — a block with a list of all chain branches.",
                "Филиалы — блок со списком всех филиалов сети.",
              ),
            },
            {
              type: "p",
              text: t(
                "QR Menu — menu QR codes generated separately for each branch.",
                "QR меню — генерируемые отдельно под каждый филиал.",
              ),
            },
            {
              type: "screens",
              items: [
                { src: img("ab744.webp"), caption: t("Reviews", "Отзывы") },
                { src: img("da368.webp"), caption: t("Branches / Adding", "Филиалы / Добавление") },
                { src: img("dd100.webp"), caption: t("QR Menu", "QR меню") },
              ],
            },
          ],
        },
        {
          type: "group",
          blocks: [
            { type: "subtitle", text: t("Categories, Reservations", "Категории, Бронирование") },
            {
              type: "lines",
              items: [
                t(
                  "Categories — dish categories that form the navigation in the Menu section.",
                  "Категории — категории блюд, на которые опирается навигация в разделе Меню.",
                ),
                t(
                  "Reservations — a table reservation module for guests at a specific time.",
                  "Бронирование — модуль брони столов для гостей на конкретное время.",
                ),
              ],
            },
            {
              type: "screens",
              items: [
                { src: img("779e9.webp"), caption: t("Categories", "Категории") },
                { src: img("60b9f.webp"), caption: t("Reservation", "Бронь") },
                { src: img("b708e.webp"), caption: t("Adding a Reservation", "Добавление брони") },
              ],
            },
          ],
        },
      ],
    },
    {
      title: t("05 — Results", "05 — Результат"),
      blocks: [
        {
          type: "p",
          text: t(
            "At this point, the case study describes only a portion of the work done — less than half. In addition to the sections covered, three large system blocks (HR, Warehouse, Security) are still in the process of requirements clarification and design decisions.",
            "На данный момент в кейсе описана только часть проделанной работы — меньше половины. Помимо разобранных разделов, в работе ещё три больших блока системы (Кадры, Склад, Охрана), которые сейчас находятся на стадии уточнения требований и дизайн-решений.",
          ),
        },
        {
          type: "p",
          text: t(
            "The project is alive and continues to evolve: some of the solutions described above have already been established as patterns for the entire system (naming modals instead of create-before-name, floating property panels instead of static ones, separation of canvas-level and object-level tools) — and will be applied when refining the remaining sections, rather than being reinvented for each one.",
            "Проект живой и продолжает развиваться: часть решений, описанных выше, уже закреплена как паттерн для всей системы (naming-модалки вместо create-before-name, плавающие property-панели вместо статичных, разделение canvas- и object-уровня инструментов) — и будет применяться при доработке оставшихся разделов, а не изобретаться заново под каждый из них.",
          ),
        },
      ],
    },
  ],
};
