// ng-service
import { Injectable } from '@angular/core';

@Injectable()
export class PokemonsService {
  private pokemons: any[] = [
    {
      nombre: 'bulbasur',
      img: 'assets/bulbasur.png',
      tipo: 'planta, veneno',
      descripcion:
        'A Bulbasaur es fácil verle echándose una siesta al sol. La semilla que tiene en el lomo va creciendo cada vez más a medida que absorbe los rayos del sol.'
    },
    {
      nombre: 'ivysaur',
      img: 'assets/ivysaur.png',
      tipo: 'planta, veneno',
      descripcion:
        'Este Pokémon lleva un bulbo en el lomo y, para poder con su peso, tiene unas patas y un tronco gruesos y fuertes. Si empieza a pasar más tiempo al sol, será porque el bulbo está a punto de hacerse una flor grande.'
    },
    {
      nombre: 'venusaur',
      img: 'assets/venusaur.png',
      tipo: 'planta, veneno',
      descripcion:
        'Venusaur tiene una flor enorme en el lomo que, según parece, adquiere unos colores muy vivos si está bien nutrido y le da mucho el sol. El aroma delicado de la flor tiene un efecto relajante en el ánimo de las personas.'
    },
    {
      nombre: 'charmander',
      img: 'assets/charmander.png',
      tipo: 'fuego',
      descripcion:
        'La llama que tiene en la punta de la cola arde según sus sentimientos. Llamea levemente cuando está alegre y arde vigorosamente cuando está enfadado.'
    },
    {
      nombre: 'chameleon',
      img: 'assets/chameleon.png',
      tipo: 'fuego',
      descripcion:
        'Charmeleon no tiene reparo en acabar con su rival usando las afiladas garras que tiene. Si su enemigo es fuerte, se vuelve agresivo, y la llama que tiene en el extremo de la cola empieza a arder con mayor intensidad tornándose azulada.'
    },
    {
      nombre: 'charizard',
      img: 'assets/charizard.png',
      tipo: 'fuego, volador',
      descripcion:
        'Charizard se dedica a volar por los cielos en busca de oponentes fuertes. Echa fuego por la boca y es capaz de derretir cualquier cosa. No obstante, si su rival es más débil que él, no usará este ataque.'
    },
    {
      nombre: 'squirtle',
      img: 'assets/squirtle.png',
      tipo: 'agua',
      descripcion:
        'El caparazón de Squirtle no le sirve de protección únicamente. Su forma redondeada y las hendiduras que tiene le ayudan a deslizarse en el agua y le permiten nadar a gran velocidad.'
    },
    {
      nombre: 'wartortle',
      img: 'assets/wartortle.png',
      tipo: 'agua',
      descripcion:
        'Tiene una cola larga y cubierta de un pelo abundante y grueso que se torna más oscuro a medida que crece. Los arañazos que tiene en el caparazón dan fe de lo buen guerrero que es.'
    },
    {
      nombre: 'blastoise',
      img: 'assets/blastoise.png',
      tipo: 'agua',
      descripcion:
        'Blastoise lanza chorros de agua con gran precisión por los tubos que le salen del caparazón que tiene en la espalda. Puede disparar chorros de agua con tanta puntería que no fallaría al tirar contra una lata pequeña a 50 m.'
    }
  ];

  constructor() {}
  getPokemons() {
    return this.pokemons;
  }
  // metodo para tomar info
  getPokemon(idx: number) {
    return this.pokemons[idx];
  }
}
