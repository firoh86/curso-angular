import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// componentes generales
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
// componentes únicos
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

// Servicios
import { HeroesService } from './services/heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component';

const appRoutes: Routes = [
  { path: 'HomeComponent', component: HomeComponent },
  { path: 'AboutComponent', component: AboutComponent },
  { path: 'HeroesComponent', component: HeroesComponent },
  { path: 'HeroeComponent', component: HeroeComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'AboutComponent', component: AboutComponent },
  // si la ruta esta vacia
  { path: '', component: HomeComponent, pathMatch: 'full' },
  // cualquier ruta no definida, como norma general reenvia a un 404
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    FooterComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    // Servicios
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
