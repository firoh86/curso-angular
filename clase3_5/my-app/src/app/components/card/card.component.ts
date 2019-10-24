import { Component, OnInit, Input } from '@angular/core';
// Input es un decorador que inportamos desde @angular/core para tomar información desde fuera del componente
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() pokemon: any = {};
  @Input() index: number;

  constructor(private router: Router) {}

  ngOnInit() {}

  verPokemon() {
    this.router.navigate(['/pokemon', this.index]);
  }
}
