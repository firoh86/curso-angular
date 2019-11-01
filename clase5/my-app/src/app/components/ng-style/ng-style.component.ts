import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      Hola mundo... Esta es una etiqueta html.
    </p>
    <button class="button" (click)="tamano = tamano + 5">
      +
    </button>
    <button class="button" (click)="tamano = tamano - 5">
      -
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  tamano: number = 10;
  constructor() {}

  ngOnInit() {}
}
