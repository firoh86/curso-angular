import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['../pokemon/pokemon.component.scss']
})
export class BuscadorComponent implements OnInit {
  pokemons: any[] = [];
  termino: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonsService: PokemonsService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      // console.log(params['termino']);
      this.pokemons = this.pokemonsService.buscarPokemon(params.termino);
      console.log(this.pokemons);
      this.termino = params['termino'];
    });
  }
}
