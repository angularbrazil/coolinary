import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'button[uiBtn], a[uiBtn]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
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

  @HostBinding('class.iu-button--secondary')
  get secondary(): boolean {
    return this.iuType === 'secondary';
  }

  @HostBinding('class.iu-button--danger')
  get danger(): boolean {
    return this.iuType === 'danger';
  }

}
