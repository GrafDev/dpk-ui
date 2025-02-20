# modal-won



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute                | Description                                                 | Type                                                                                                            | Default         |
| --------------------- | ------------------------ | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------- |
| `animationDuration`   | `animation-duration`     | Время анимации в миллисекундах                              | `number`                                                                                                        | `300`           |
| `aspectRatio`         | `aspect-ratio`           | Соотношение сторон                                          | `string`                                                                                                        | `'4/3'`         |
| `backgroundImage`     | `background-image`       | Путь к фоновому изображению модального окна (опционально)   | `string`                                                                                                        | `undefined`     |
| `buttonImage`         | `button-image`           | Путь к изображению кнопки (опционально)                     | `string`                                                                                                        | `undefined`     |
| `buttonText`          | `button-text`            | Текст кнопки                                                | `string`                                                                                                        | `'CLAIM BONUS'` |
| `closeOnOverlayClick` | `close-on-overlay-click` | Включить/выключить возможность закрытия по клику на оверлей | `boolean`                                                                                                       | `true`          |
| `cssVariables`        | --                       | CSS переменные для стилизации                               | `{ modalContentBg?: string; modalContentRadius?: string; modalButtonBg?: string; modalButtonRadius?: string; }` | `{}`            |
| `customClass`         | `custom-class`           | CSS класс для дополнительной стилизации модального окна     | `string`                                                                                                        | `''`            |
| `isOpen`              | `is-open`                | Определяет, открыто ли модальное окно                       | `boolean`                                                                                                       | `false`         |
| `modalHeight`         | `modal-height`           | Высота модального окна                                      | `string`                                                                                                        | `undefined`     |
| `modalWidth`          | `modal-width`            | Ширина модального окна                                      | `string`                                                                                                        | `undefined`     |
| `offerLink`           | `offer-link`             | Ссылка для кнопки действия                                  | `string`                                                                                                        | `'#'`           |
| `titleText`           | `title-text`             | Заголовок модального окна                                   | `string`                                                                                                        | `'YOU WON'`     |
| `winAmount`           | `win-amount`             | Сумма выигрыша для отображения                              | `string`                                                                                                        | `'0'`           |


## Events

| Event   | Description                      | Type               |
| ------- | -------------------------------- | ------------------ |
| `close` | Событие закрытия модального окна | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
