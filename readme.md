# Modal Won Component

Компонент модального окна для отображения выигрыша, построенный на Stencil.js.

## Установка

```bash
npm install dpk-ui
```

## Использование

```html
<!-- Базовое использование -->
<modal-won
  win-amount="1000$"
  title-text="YOU WON"
  button-text="CLAIM BONUS"
  offer-link="https://example.com"
></modal-won>

<!-- С кастомными стилями -->
<modal-won
  win-amount="2000$"
  offer-link="https://example.com"
  button-text="GET BONUS"
  style="
    --modal-content-bg: linear-gradient(45deg, #662D8C 0%, #ED1E79 100%);
    --modal-button-bg: linear-gradient(90deg, #FF512F 0%, #DD2476 100%);
    --modal-content-radius: 10px;
    --modal-button-radius: 15px;
  "
></modal-won>
```

## JavaScript API

```javascript
// Открытие модального окна
const modal = document.querySelector('modal-won');
modal.isOpen = true;

// Обработка события закрытия
modal.addEventListener('close', () => {
  console.log('Modal closed');
});
```

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|-----------|
| isOpen | boolean | false | Определяет, открыто ли модальное окно |
| winAmount | string | '0' | Сумма выигрыша для отображения |
| titleText | string | 'YOU WON' | Заголовок модального окна |
| offerLink | string | '#' | Ссылка для кнопки действия |
| buttonText | string | 'CLAIM BONUS' | Текст кнопки |
| backgroundImage | string | undefined | Путь к фоновому изображению |
| buttonImage | string | undefined | Путь к изображению кнопки |
| customClass | string | '' | Дополнительный CSS класс |
| closeOnOverlayClick | boolean | true | Закрытие по клику на оверлей |
| animationDuration | number | 300 | Длительность анимации (мс) |
| modalWidth | string | undefined | Ширина модального окна |
| modalHeight | string | undefined | Высота модального окна |
| aspectRatio | string | '4/3' | Соотношение сторон |

## CSS-переменные

| Переменная | По умолчанию | Описание |
|------------|--------------|-----------|
| --modal-content-bg | linear-gradient(to bottom, #4a1a09 0%, #2b0e04 100%) | Фон контента |
| --modal-content-radius | 15px | Скругление углов контента |
| --modal-text-color | #ffffff | Цвет текста |
| --modal-title-size | clamp(2rem, 3vw, 2rem) | Размер заголовка |
| --modal-amount-size | clamp(2rem, 5vw, 3rem) | Размер суммы |
| --modal-button-bg | linear-gradient(180deg, #26b33c 0%, #1a7928 100%) | Фон кнопки |
| --modal-button-radius | 8px | Скругление углов кнопки |
| --modal-width | min(400px, 90%) | Ширина модального окна |

## События

| Событие | Детали | Описание |
|---------|---------|-----------|
| close | void | Срабатывает при закрытии модального окна |

## Адаптивность

Компонент адаптивен и корректно отображается на различных устройствах:

- Desktop: оптимальная ширина 400px
- Mobile: автоматическое масштабирование до 90% ширины экрана
- Landscape: адаптированные отступы и пропорции

## TypeScript типы

```typescript
interface ModalWonProps {
  isOpen?: boolean;
  winAmount?: string;
  titleText?: string;
  offerLink?: string;
  buttonText?: string;
  backgroundImage?: string;
  buttonImage?: string;
  customClass?: string;
  closeOnOverlayClick?: boolean;
  animationDuration?: number;
  modalWidth?: string;
  modalHeight?: string;
  aspectRatio?: string;
}
```
