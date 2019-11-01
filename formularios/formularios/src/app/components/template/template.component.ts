import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  usuario: object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: '',
    sexo: 'Hombre',
    acepta: false
  };
  paises = [
    {
      codigo: 'CRI',
      nombre: 'costa rica'
    },
    {
      codigo: 'ESP',
      nombre: 'España'
    }
  ];

  sexos: string[] = ['Hombre', 'Mujer', 'cangrejo'];
  constructor() {}

  guardar(forma: NgForm) {
    console.log('Formulario posteado');
    console.log('valor', forma);
    console.log('usuario', this.usuario);
  }
}
