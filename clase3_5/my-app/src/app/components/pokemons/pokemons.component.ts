import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonsService, private router: Router) {
    console.log('constructor');
  }

  ngOnInit() {
    this.pokemons = this.pokemonService.getPokemons();
  }

  verPokemon(index: number) {
    console.log(index);
    this.router.navigate(['/pokemon', index]);
  }
}
