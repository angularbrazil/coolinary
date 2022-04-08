import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'button[uiBtn], a[uiBtn]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent  { }
