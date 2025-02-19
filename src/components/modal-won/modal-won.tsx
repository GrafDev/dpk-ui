import { Component, Prop, h, State, Watch, Element, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'modal-won',
  styleUrl: 'modal-won.css',
  shadow: true
})
export class ModalWon {
  @Element() hostElement: HTMLElement;

  /**
   * Определяет, открыто ли модальное окно
   */
  @Prop() isOpen: boolean = false;

  /**
   * Сумма выигрыша для отображения
   * @default '0'
   */
  @Prop() winAmount: string = '0';

  /**
   * Заголовок модального окна
   * @default 'YOU WON'
   */
  @Prop() titleText: string = 'YOU WON';

  /**
   * Ссылка для кнопки действия
   * @default '#'
   */
  @Prop() offerLink: string = '#';

  /**
   * Путь к фоновому изображению модального окна (опционально)
   */
  @Prop() backgroundImage?: string;

  /**
   * Путь к изображению кнопки (опционально)
   */
  @Prop() buttonImage?: string;

  /**
   * CSS переменные для стилизации
   */
  @Prop() cssVariables?: {
    modalContentBg?: string;
    modalContentRadius?: string;
    modalButtonBg?: string;
    modalButtonRadius?: string;
  } = {};

  /**
   * Текст кнопки
   * @default 'CLAIM BONUS'
   */
  @Prop() buttonText: string = 'CLAIM BONUS';

  /**
   * CSS класс для дополнительной стилизации модального окна
   * @default ''
   */
  @Prop() customClass: string = '';

  /**
   * Включить/выключить возможность закрытия по клику на оверлей
   * @default true
   */
  @Prop() closeOnOverlayClick: boolean = true;

  /**
   * Время анимации в миллисекундах
   * @default 300
   */
  @Prop() animationDuration: number = 300;

  /**
   * Ширина модального окна
   */
  @Prop() modalWidth?: string;

  /**
   * Высота модального окна
   */
  @Prop() modalHeight?: string;

  /**
   * Соотношение сторон
   */
  @Prop() aspectRatio?: string = '4/3';

  /**
   * Событие закрытия модального окна
   */
  @Event() close: EventEmitter;

  @State() private isActive: boolean = false;

  @Watch('isOpen')
  handleIsOpenChange(newValue: boolean) {
    if (newValue) {
      this.showModal();
    } else {
      this.hideModal();
    }
  }

  private showModal() {
    this.isActive = true;
    requestAnimationFrame(() => {
      const content = this.hostElement.shadowRoot.querySelector('.modal-content') as HTMLElement;
      content.style.transitionDuration = `${this.animationDuration}ms`;
      content.classList.add('active');
    });
  }

  private hideModal() {
    const content = this.hostElement.shadowRoot.querySelector('.modal-content') as HTMLElement;
    content.style.transitionDuration = `${this.animationDuration}ms`;
    content.classList.remove('active');
    setTimeout(() => {
      this.isActive = false;
      this.close.emit();
    }, this.animationDuration);
  }

  private handleOverlayClick = (e: MouseEvent) => {
    if (this.closeOnOverlayClick && e.target === e.currentTarget) {
      this.hideModal();
    }
  }

  render() {
    const modalClass = {
      'modal-overlay': true,
      'active': this.isActive,
      [this.customClass]: !!this.customClass
    };

    const contentClass = {
      'modal-content': true,
      'has-background': !!this.backgroundImage,
      'custom-size': !!(this.modalWidth || this.modalHeight)
    };

    const contentStyle = {
      ...(this.cssVariables?.modalContentBg && { '--modal-content-bg': this.cssVariables.modalContentBg }),
      ...(this.cssVariables?.modalContentRadius && { '--modal-content-radius': this.cssVariables.modalContentRadius }),
      ...(this.modalWidth && { '--modal-width': this.modalWidth }),
      ...(this.modalHeight && { '--modal-height': this.modalHeight }),
      ...(this.aspectRatio && { '--modal-aspect-ratio': this.aspectRatio })
    };

    const buttonStyle = {
      ...(this.buttonImage && { backgroundImage: `url(${this.buttonImage})` }),
      ...(this.cssVariables?.modalButtonBg && { '--modal-button-bg': this.cssVariables.modalButtonBg }),
      ...(this.cssVariables?.modalButtonRadius && { '--modal-button-radius': this.cssVariables.modalButtonRadius })
    };

    return (
      <div
        class={modalClass}
        onClick={this.handleOverlayClick}
      >
        <div class={contentClass} style={contentStyle}>
          {this.backgroundImage && <img src={this.backgroundImage} alt="Modal background" />}
          <div class="modal-content-inner">
            <div class="modal-title">{this.titleText}</div>
            <div class="modal-win-amount">
              {this.winAmount}
            </div>
            <a
              href={this.offerLink}
              class="modal-button"
              style={buttonStyle}
              target="_blank"
              rel="noopener"
            >
              {this.buttonText === '' ? null : this.buttonText}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
