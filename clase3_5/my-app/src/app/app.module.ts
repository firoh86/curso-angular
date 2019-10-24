import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// rutas
import { AppRoutingModule } from './app-routing.module';
// servicios
import { PokemonsService } from './services/pokemons.service';
// componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CardComponent } from './components/card/card.component';
// para los prevent default de los formularios

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PokemonsComponent,
    PokemonComponent,
    BuscadorComponent,
    CardComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [PokemonsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
