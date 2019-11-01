import { Component, OnInit } from '@angular/core';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent implements OnInit {
  alerta: string = 'alert-danger';
  faSync = faSync;
  spin: boolean = true;
  mostrar: boolean = false;
  active: boolean = false;

  propiedades: object = {
    danger: true
  };

  value: string = 'Guardar';
  constructor() {}

  ngOnInit() {}

  espera(value) {
    this.mostrar = true;
    this.active = true;
    this.value = 'Espere...';
    console.log(value);
    setTimeout(() => {
      this.mostrar = false;
      this.active = false;
      this.value = 'Guardar';
    }, 3000);
  }
}
