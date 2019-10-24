import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pokemons',
    component: PokemonsComponent
  },
  {
    path: 'pokemon/:id',
    component: PokemonComponent
  },
  // Para el buscador de pokemons
  {
    path: 'buscar/:termino',
    component: BuscadorComponent
  },
  // Si la ruta está vacia
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  // Cualquier ruta no definida, como norma general reenvia a un 404
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
