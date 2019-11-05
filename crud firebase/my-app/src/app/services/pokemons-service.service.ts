import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonModel } from '../models/pokemon.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonsServiceService {
  private url = 'https://crud-firebase-01-13fbf.firebaseio.com';

  constructor(private http: HttpClient) {}

  crearPokemon(pokemon: PokemonModel) {
    return this.http.post(`${this.url}/pokemons.json`, pokemon).pipe(
      map((res: any) => {
        pokemon.id = res.name;
        return pokemon;
      })
    );
  }

  actualizarpokemon(pokemon: PokemonModel) {
    const pokemonTemp = {
      ...pokemon
    };
    delete pokemonTemp.id;

    return this.http.put(
      `${this.url}/pokemons/${pokemon.id}.json`,
      pokemonTemp
    );
  }

  borrarPokemon(id: string) {
    return this.http.delete(`${this.url}/pokemons/${id}.json`);
  }

  getPokemon(id: string) {
    return this.http.get(`${this.url}/pokemons/${id}.json`);
  }

  getPokemons() {
    return this.http.get(`${this.url}/pokemons.json`).pipe(
      map(this.crearArreglo),
      delay(0)
    );
  }

  private crearArreglo(pokemonsObj: object) {
    const pokemons: PokemonModel[] = [];

    if (pokemonsObj === null) {
      return [];
    }
    Object.keys(pokemonsObj).forEach(key => {
      const pokemon: PokemonModel = pokemonsObj[key];
      pokemon.id = key;

      pokemons.push(pokemon);
    });
    return pokemons;
  }
}
