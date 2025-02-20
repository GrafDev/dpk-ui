# Modal Won Component

Компонент модального окна для отображения выигрыша с анимацией и гибкими настройками стилизации.

## Особенности

- 🎨 Настраиваемый дизайн через CSS переменные
- 🖼️ Поддержка фоновых изображений
- 📱 Адаптивный дизайн
- ⚡ Плавные анимации
- 🔧 Простая интеграция
- 📱 Автоматическая адаптация под разные размеры экрана
- 🖥️ Поддержка ландшафтной и портретной ориентации

## Использование

### Базовый пример

```html
<modal-won
  win-amount="1000$"
  title-text="YOU WON"
  button-text="CLAIM BONUS"
  offer-link="https://example.com"
></modal-won>
```

### С фоновым изображением

```html
<modal-won
  win-amount="1000$ + 150FS"
  background-image="/assets/images/bg-card-modal.png"
  style="
    --modal-content-padding-top: 7%;
    --modal-content-gap: 1rem;
  "
></modal-won>
```

### С кастомными стилями

```html
<modal-won
  win-amount="2000$"
  style="
    --modal-content-bg: linear-gradient(45deg, #662D8C 0%, #ED1E79 100%);
    --modal-button-bg: linear-gradient(90deg, #FF512F 0%, #DD2476 100%);
    --modal-content-radius: 10px;
    --modal-button-radius: 15px;
  "
></modal-won>
```

## API

### Свойства (Props)

| Описание | Свойство | Тип | По умолчанию |
|-----------|-----------|-----|--------------|
| Состояние модального окна | isOpen | boolean | false |
| Сумма выигрыша для отображения | winAmount | string | '0' |
| Заголовок модального окна | titleText | string | 'YOU WON' |
| Текст кнопки | buttonText | string | 'CLAIM BONUS' |
| Ссылка для кнопки действия | offerLink | string | '#' |
| Путь к фоновому изображению | backgroundImage | string | undefined |
| Путь к изображению кнопки | buttonImage | string | undefined |
| Закрытие по клику на оверлей | closeOnOverlayClick | boolean | true |
| Время анимации в миллисекундах | animationDuration | number | 300 |
| Кастомная ширина модального окна | modalWidth | string | undefined |
| Кастомная высота модального окна | modalHeight | string | undefined |
| Соотношение сторон | aspectRatio | string | '4/3' |
| Дополнительный CSS класс | customClass | string | '' |
| Объект для установки CSS переменных программно | cssVariables | object | {} |

### События

| Событие | Описание |
|---------|-----------|
| close | Срабатывает при закрытии модального окна |

### Переменные стилизации

Переменные можно устанавливать тремя способами:
1. Через CSS переменные в атрибуте style
2. Через prop cssVariables
3. Через отдельные props компонента

| Описание | CSS переменная | Prop/TypeScript | Значение по умолчанию |
|----------|---------------|-----------------|---------------------|
| **Основные стили** |
| Фон модального окна | --modal-content-bg | modalContentBg | linear-gradient(to bottom, #4a1a09 0%, #2b0e04 100%) |
| Скругление углов модального окна | --modal-content-radius | modalContentRadius | 15px |
| Цвет текста | --modal-text-color | - | #ffffff |
| **Размеры шрифтов** |
| Размер заголовка | --modal-title-size | - | clamp(2rem, 3vw, 2rem) |
| Размер суммы выигрыша | --modal-amount-size | - | clamp(2rem, 5vw, 3rem) |
| Размер шрифта кнопки | --modal-button-font-size | - | clamp(1.5rem, 4vw, 2.5rem) |
| **Отступы и пространство** |
| Горизонтальный отступ кнопки | --modal-button-padding-x | - | 0.8em |
| Вертикальный отступ кнопки | --modal-button-padding-y | - | 0.2em |
| Отступ от верха контента | --modal-content-padding-top | - | 20% |
| Интервал между элементами | --modal-content-gap | - | clamp(0.8rem, 2vh, 1.5rem) |
| **Стили кнопки** |
| Фон кнопки | --modal-button-bg | modalButtonBg | linear-gradient(180deg, #26b33c 0%, #1a7928 100%) |
| Скругление углов кнопки | --modal-button-radius | modalButtonRadius | 8px |
| **Размеры модального окна** |
| Ширина окна | --modal-width | modalWidth | min(400px, 90%) |
| Высота окна | --modal-height | modalHeight | auto |
| Соотношение сторон | --modal-aspect-ratio | aspectRatio | 4/3 |

#### Адаптивные значения

Компонент автоматически адаптирует некоторые переменные в зависимости от размера экрана:

| Брейкпоинт | Переменная | Значение |
|------------|------------|----------|
| Ландшафтная ориентация | --modal-content-padding-top | 10% |
| | --modal-content-gap | clamp(0.5rem, 1.5vh, 1rem) |
| max-width: 480px | --modal-content-padding-top | 15% |
| max-width: 320px | --modal-content-padding-top | 10% |
| | --modal-content-gap | 0.5rem |

### JavaScript API

Управление модальным окном через JavaScript:

```javascript
// Открытие модального окна
document.querySelector('modal-won').isOpen = true;

// Закрытие модального окна
document.querySelector('modal-won').isOpen = false;

// Подписка на событие закрытия
document.querySelector('modal-won').addEventListener('close', () => {
  console.log('Modal closed');
});
```

## Адаптивность

Компонент автоматически адаптируется под различные размеры экрана и ориентации устройства:

### Ландшафтная ориентация
```css
@media (orientation: landscape) {
  :host {
    --modal-content-padding-top: 10%;
    --modal-content-gap: clamp(0.5rem, 1.5vh, 1rem);
  }
}
```

### Маленькие экраны
```css
@media (max-width: 480px) {
  :host {
    --modal-content-padding-top: 15%;
  }
}
```

### Очень маленькие экраны
```css
@media (max-width: 320px) {
  :host {
    --modal-content-padding-top: 10%;
    --modal-content-gap: 0.5rem;
  }
}
```

## Анимации

Компонент включает встроенные анимации:

1. Появление модального окна (fade in + scale)
2. Анимация заголовка (fadeInDown)
```css
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

3. Анимация суммы выигрыша (scaleIn)
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

4. Интерактивные анимации кнопки
- Hover эффект (увеличение яркости и масштаба)
- Active эффект (уменьшение масштаба)

## Типы и интерфейсы

### CSS Variables интерфейс
```typescript
interface CssVariables {
  modalContentBg?: string;
  modalContentRadius?: string;
  modalButtonBg?: string;
  modalButtonRadius?: string;
}
```

## Примеры использования

### Базовое модальное окно
```html
<modal-won
  win-amount="1000$"
  offer-link="https://example.com"
  button-text="Claim Your Prize!"
></modal-won>
```

### Установка стилей через cssVariables prop

```html
<modal-won
  win-amount="2000$"
  offer-link="https://example.com"
  .cssVariables={{
    modalContentBg: 'linear-gradient(45deg, #662D8C 0%, #ED1E79 100%)',
    modalContentRadius: '10px',
    modalButtonBg: 'linear-gradient(90deg, #FF512F 0%, #DD2476 100%)',
    modalButtonRadius: '15px'
  }}
></modal-won>
```

### С кастомными стилями и фоном
```html
<modal-won
  win-amount="2000$"
  offer-link="https://example.com"
  background-image="/assets/bg.png"
  style="
    --modal-content-bg: linear-gradient(45deg, #662D8C 0%, #ED1E79 100%);
    --modal-button-bg: linear-gradient(90deg, #FF512F 0%, #DD2476 100%);
    --modal-content-radius: 10px;
    --modal-button-radius: 15px;
  "
></modal-won>
```

### С кастомными размерами
```html
<modal-won
  win-amount="3000$"
  modal-width="500px"
  modal-height="400px"
  aspect-ratio="16/9"
></modal-won>
```

### Программное управление
```javascript
const modal = document.querySelector('modal-won');

// Открытие
modal.isOpen = true;

// Обработка закрытия
modal.addEventListener('close', () => {
  console.log('Modal closed');
});
```