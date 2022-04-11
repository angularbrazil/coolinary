import { Component, HostBinding, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[uiBtn], a[uiBtn]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @HostBinding('class.iu-button')
  iuButton = true;

  /*
   * Define o tipo do botão
   * Sets the type of the button
   */
  @Input()
  iuType: 'secondary' | 'danger' | undefined;

  /*
   * Define a variante do botão
   * Sets the variant of the button
   */
  @Input()
  iuVariant: 'text' | undefined;

  @HostBinding('class.iu-button--secondary')
  get secondary(): boolean {
    return this.iuType === 'secondary';
  }

  @HostBinding('class.iu-button--danger')
  get danger(): boolean {
    return this.iuType === 'danger';
  }

  @HostBinding('class.iu-button--text')
  get text(): boolean {
    return this.iuVariant === 'text';
  }
}
