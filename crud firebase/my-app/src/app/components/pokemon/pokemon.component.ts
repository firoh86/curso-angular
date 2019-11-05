import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { PokemonModel } from 'src/app/models/pokemon.model';
import { PokemonsServiceService } from 'src/app/services/pokemons-service.service';

import {
  faArrowLeft,
  faSmileWink,
  faDizzy,
  faSave
} from '@fortawesome/free-solid-svg-icons';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  smile = faSmileWink;
  faDizzy = faDizzy;
  faSave = faSave;
  // modelo de clase pokemon
  pokemon: PokemonModel = new PokemonModel();

  constructor(
    private pokemonsService: PokemonsServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'nuevo') {
      this.pokemonsService.getPokemon(id).subscribe((res: PokemonModel) => {
        this.pokemon = res;
        this.pokemon.id = id;
        console.log(res);
      });
    }
  }
  guardar(form: NgForm) {
    if (form.invalid) {
      console.log('formulario no valido');
      return;
    }

    Swal.fire({
      title: 'espere',
      text: 'guardando información',
      type: 'info',
      allowOutsideClick: false
    });

    Swal.showLoading();

    let peticion: Observable<any>;

    if (this.pokemon.id) {
      peticion = this.pokemonsService.actualizarpokemon(this.pokemon);
    } else {
      peticion = this.pokemonsService.crearPokemon(this.pokemon);
    }
    peticion.subscribe(res => {
      Swal.fire({
        title: this.pokemon.nombre,
        text: 'Se actualizó correctamente',
        type: 'success'
      });
    });
  }
}
