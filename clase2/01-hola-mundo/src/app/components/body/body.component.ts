import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  mostrar = false;

  frase: any = {
    mensaje: 'Un gran poder requiere fuerza bruta',
    autor: 'willy wonka'
  };

  personajes: string[] = ['marco', 'sara', 'pablo', 'rosa'];
}
