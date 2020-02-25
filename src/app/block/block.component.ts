import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block',
  template: `
    <button> {{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em; }']
})
export class BlockComponent {

  @Input() value: 'X' | 'O'; // ui component

}
