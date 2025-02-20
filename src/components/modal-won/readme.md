# Modal Won Component

Компонент модального окна для отображения выигрыша с анимацией и гибкими настройками стилизации.

## Особенности

- 🎨 Настраиваемый дизайн через CSS переменные
- 🖼️ Поддержка фоновых изображений
- 📱 Адаптивный дизайн
- ⚡ Плавные анимации
- 🔧 Простая интеграция

## Использование

```html
<modal-won
  win-amount="1000$"
  title-text="YOU WON"
  button-text="CLAIM BONUS"
  offer-link="https://example.com"
  background-image="/path/to/image.png"
></modal-won>
```

## API

### Свойства

| Свойство | Тип | По умолчанию | Описание |
|----------|-----|--------------|-----------|
| isOpen | boolean | false | Состояние модального окна |
| winAmount | string | '0' | Сумма выигрыша |
| titleText | string | 'YOU WON' | Заголовок окна |
| buttonText | string | 'CLAIM BONUS' | Текст кнопки |
| offerLink | string | '#' | Ссылка для кнопки |
| backgroundImage | string | undefined | Путь к фоновому изображению |
| closeOnOverlayClick | boolean | true | Закрытие по клику на оверлей |
| animationDuration | number | 300 | Длительность анимации (мс) |
| modalWidth | string | undefined | Ширина модального окна |
| modalHeight | string | undefined | Высота модального окна |
| aspectRatio | string | '4/3' | Соотношение сторон |

### CSS переменные

```css
/* Основные стили */
--modal-content-bg: linear-gradient(to bottom, #4a1a09 0%, #2b0e04 100%);
--modal-content-radius: 15px;
--modal-text-color: #ffffff;

/* Размеры и отступы */
--modal-title-size: clamp(2rem, 3vw, 2rem);
--modal-amount-size: clamp(2rem, 5vw, 3rem);
--modal-button-font-size: clamp(1.5rem, 4vw, 2.5rem);
--modal-button-padding-x: 0.8em;
--modal-button-padding-y: 0.2em;
--modal-content-padding-top: 20%;
--modal-content-gap: clamp(0.8rem, 2vh, 1.5rem);

/* Стили кнопки */
--modal-button-bg: linear-gradient(180deg, #26b33c 0%, #1a7928 100%);
--modal-button-radius: 8px;

/* Размеры модального окна */
--modal-width: min(400px, 90%);
--modal-height: auto;
--modal-aspect-ratio: 4/3;
```

### События

| Событие | Описание |
|---------|-----------|
| close | Срабатывает при закрытии модального окна |

## Примеры

### Базовое использование

```html
<modal-won
  win-amount="1000$"
  offer-link="https://example.com"
></modal-won>
```

### С кастомными стилями

```html
<modal-won
  win-amount="2000$"
  offer-link="https://example.com"
  style="
    --modal-content-bg: linear-gradient(45deg, #662D8C 0%, #ED1E79 100%);
    --modal-button-bg: linear-gradient(90deg, #FF512F 0%, #DD2476 100%);
    --modal-content-radius: 10px;
    --modal-button-radius: 15px;
  "
></modal-won>
```

### С фоновым изображением

```html
<modal-won
  win-amount="3000$"
  background-image="/assets/images/bg-card-modal.png"
  style="
    --modal-content-padding-top: 7%;
    --modal-content-gap: 1rem;
  "
></modal-won>
```

## Адаптивность

Компонент автоматически адаптируется под различные размеры экрана и ориентации устройства. Для мобильных устройств и ландшафтной ориентации применяются специальные стили:

```css
/* Ландшафтная ориентация */
@media (orientation: landscape) {
  --modal-content-padding-top: 10%;
  --modal-content-gap: clamp(0.5rem, 1.5vh, 1rem);
}

/* Маленькие экраны */
@media (max-width: 480px) {
  --modal-content-padding-top: 15%;
}
```

## Анимации

Компонент включает встроенные анимации для появления элементов:
- Плавное появление модального окна
- Анимация заголовка (fadeInDown)
- Анимация суммы выигрыша (scaleIn)
- Анимация при наведении на кнопку