import { Component, OnInit } from '@angular/core';
import {
  faPlus,
  faSync,
  faExclamation,
  faPen,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import { PokemonsServiceService } from 'src/app/services/pokemons-service.service';
import { PokemonModel } from 'src/app/models/pokemon.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  pokemons: PokemonModel[] = [];

  cargandoF = false;

  // faCoffee = faCoffee;
  faplus = faPlus;
  cargando = faSync;
  faExclamation = faExclamation;
  faPen = faPen;
  faTrash = faTrash;
  constructor(private pokemonService: PokemonsServiceService) {}

  ngOnInit() {
    this.cargandoF = true;
    this.pokemonService.getPokemons().subscribe(res => {
      this.pokemons = res;
      this.cargandoF = false;
    });
  }

  borrarPokemon(pokemon: PokemonModel, i: number) {
    Swal.fire({
      title: '¿está seguro?',
      text: `Está seguro de que desea borrar a ${pokemon.nombre}`,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(res => {
      if (res.value) {
        this.pokemons.splice(i, 1);
        this.pokemonService.borrarPokemon(pokemon.id).subscribe();
      }
    });
  }
}
