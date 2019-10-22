import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  pokemons: any[] = [];
  pokemon: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonsService
  ) {
    this.pokemons = this.pokemonService.getPokemons();

    this.activatedRoute.params.subscribe(params => {
      // console.log(params['id']);
      this.pokemon = this.pokemonService.getPokemon(params['id']);
      // console.log(this.pokemon);
    });
  }
}
