import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'button[uiBtn], a[uiBtn]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
