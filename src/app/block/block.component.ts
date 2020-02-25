import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block',
  template: `
    <button nbButton *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
    <button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
    
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em!important; }']
})
export class BlockComponent {

  @Input() value: 'X' | 'O'; // ui component

}
