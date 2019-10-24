import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// Input es un decorador que inportamos desde @angular/core para tomar información desde fuera del componente
import { Router } from '@angular/router';
// hijo
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() pokemon: any = {};
  @Input() index: number;
  //output
  @Output() pokemonSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.pokemonSeleccionado = new EventEmitter();
  }

  ngOnInit() {}

  verPokemon() {
    // this.router.navigate(['/pokemon', this.index]);
    this.pokemonSeleccionado.emit(this.index);
    // this.index es el evento que se emite
    //  (pokemonSeleccionado)="verPokemon($event)" esta es la sintaxis para oir el evento del componente hijo
  }
}
