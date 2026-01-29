# StorForJob

Проект на [Next.js](https://nextjs.org), созданный с помощью [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Проект для компании [`idem`](https://idem.agency) создан с целью демонстрации практических навыков, в основу проекта лег дизайн с [`макета`](https://www.figma.com/design/UORUBFGLJ17KEIHqqqWqZK/Тестовое-задание?node-id=11-3890&t=hkPJDtdC1aNpalW7-0), суть проекта - создание веб приложения "каталог товаров" с функционирующими страницами товара, и данными взятыми из бесплатной Api [`dummyJSON`](https://dummyjson.com/docs/products).

Страницы свёрстаны, функционально работает поиск по товарам, слайдер фото в карточке товара ( для работы слайдера добавил остальные фото других товаров), так же работает кнопка "поделиться", кол-во звезд и отзывов так же работает, кол-во отзывов и артикул товара сделал в зависимости от id товара, так как таких значений нету в указанной Api.

Структурно разделил компоненты такие как footer и header, от основных файлов страниц. Роутинг использовал так как указано в тз.

## Начало работы

### Установка зависимостей
Сначала установите зависимости через npm:

```bash
npm install
```

### Запуск локального сервера
Для разработки запустите сервер:

```bash
npm run dev
```
## Нужные команды

- `npm run dev` — запуск сервера разработки  
- `npm run build` — сборка проекта
- `npm start` — запуск собранного проекта  

Откройте [http://localhost:3000](http://localhost:3000) в браузере, чтобы увидеть результат.

---

## Структура проекта

- `public/` – статические файлы (иконки, изображения)
- `src/app/` – основная логика приложения и страницы
- `src/components/` – переиспользуемые компоненты (Header / Footer)
- `package.json` – зависимости и скрипты
- `next.config.js` – конфигурация Next.js

---

## Используемые технологии

- [Next.js](https://nextjs.org) – React-фреймворк для рендеринга на сервере
- [HeroUI](https://www.npmjs.com/package/@heroui/react) – библиотека компонентов для Navbar, Footer

---

## Развёртка проекта 

Самый простой способ развернуть проект — [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).  
Подробности о деплое можно найти в [документации Next.js](https://nextjs.org/docs/app/building-your-application/deploying).