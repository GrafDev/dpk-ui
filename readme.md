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

## 📚 Компоненты

### Modal Won

Модальное окно для отображения выигрыша с анимацией и гибкими настройками стилизации.

#### Основные характеристики:
- 🎨 Настраиваемый дизайн через CSS переменные
- 🖼️ Поддержка фоновых изображений
- 📱 Адаптивный дизайн
- ⚡ Плавные анимации

#### Базовое использование:
```html
<modal-won
  win-amount="1000$"
  title-text="YOU WON"
  button-text="CLAIM BONUS"
  offer-link="https://example.com"
></modal-won>
```

#### Основные параметры:

| Свойство | Тип | По умолчанию | Описание |
|----------|-----|--------------|-----------|
| isOpen | boolean | false | Состояние модального окна |
| winAmount | string | '0' | Сумма выигрыша |
| titleText | string | 'YOU WON' | Заголовок окна |
| buttonText | string | 'CLAIM BONUS' | Текст кнопки |
| offerLink | string | '#' | Ссылка для кнопки |
| backgroundImage | string | undefined | Путь к фоновому изображению |

#### CSS кастомизация:

```css
modal-won {
  --modal-content-bg: linear-gradient(to bottom, #4a1a09 0%, #2b0e04 100%);
  --modal-button-bg: linear-gradient(180deg, #26b33c 0%, #1a7928 100%);
  --modal-content-radius: 15px;
  --modal-button-radius: 8px;
}
```

Подробная документация доступна в [GitHub репозитории](https://github.com/GrafDev/dpk-ui/blob/master/src/components/modal-won/readme.md)

## 👨‍💻 Разработка

### Команды

- `npm start` - Запуск в режиме разработки
- `npm run build` - Сборка проекта
- `npm test` - Запуск тестов
- `npm run generate` - Генерация нового компонента

## 📄 Лицензия

Распространяется под лицензией MIT