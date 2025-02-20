# DPK UI Components

![License](https://img.shields.io/npm/l/dpk-ui)
![Version](https://img.shields.io/npm/v/dpk-ui)

Библиотека многофункциональных веб-компонентов, созданных с использованием Stencil.js. Компоненты разработаны с учетом принципов SOLID и предоставляют широкие возможности для кастомизации.

## ✨ Особенности

- 🎯 Независимые веб-компоненты
- 🎨 Широкие возможности кастомизации через props и CSS переменные
- 📱 Адаптивный дизайн
- 🔧 Простая интеграция с любым фреймворком
- 📝 Подробная документация

## 📦 Установка

```bash
npm install dpk-ui
```

## 🚀 Использование

### React

```jsx
import { defineCustomElements } from 'dpk-ui/loader';
defineCustomElements();

function App() {
  return (
    <modal-won
      win-amount="1000$"
      offer-link="https://example.com"
      button-text="Claim Your Prize!"
    />
  );
}
```

### Vue

```vue
<template>
  <modal-won
    win-amount="1000$"
    offer-link="https://example.com"
    button-text="Claim Your Prize!"
  />
</template>

<script>
import { defineCustomElements } from 'dpk-ui/loader';
defineCustomElements();
</script>
```

### Vanilla JS

```html
<script type="module">
  import { defineCustomElements } from 'dpk-ui/loader';
  defineCustomElements();
</script>

<modal-won
  win-amount="1000$"
  offer-link="https://example.com"
  button-text="Claim Your Prize!"
></modal-won>
```

## 📚 Документация

### Компоненты

Документация компонентов:
- Modal Won - Модальное окно для отображения выигрыша
  - [GitHub документация](./src/components/modal-won/readme.md)
  - [NPM документация](./dist/components/modal-won/readme.md)

Полную документацию можно найти в [директории docs](./docs/).

## 👨‍💻 Разработка

### Быстрый старт

1. Клонирование репозитория:
```bash
git clone https://github.com/your-username/dpk-ui.git
```

2. Установка зависимостей:
```bash
npm install
```

3. Запуск в режиме разработки:
```bash
npm start
```

### Структура проекта

```
dpk-ui/
├── src/
│   ├── components/     # Компоненты
│   ├── utils/         # Утилиты
│   └── index.ts       # Точка входа
├── docs/              # Документация
├── stencil.config.ts  # Конфигурация Stencil
└── package.json
```

### Команды

- `npm start` - Запуск в режиме разработки
- `npm run build` - Сборка проекта
- `npm test` - Запуск тестов
- `npm run generate` - Генерация нового компонента

## 🤝 Контрибьютинг

1. Форкните репозиторий
2. Создайте ветку для фичи (`git checkout -b feature/amazing-feature`)
3. Закоммитьте изменения (`git commit -m 'Add amazing feature'`)
4. Запушьте в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

Подробнее о контрибьютинге в [CONTRIBUTING.md](./docs/CONTRIBUTING.md)

## 📄 Лицензия

Распространяется под лицензией MIT. Смотрите [LICENSE](./LICENSE) для дополнительной информации.