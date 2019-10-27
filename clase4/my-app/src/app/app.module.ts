import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// para los paketes de idioma//revisar
/* import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es'; */
import { CapitalizadoPipe } from '../app/components/pipes/capitalizado.pipe';
import { DomseguroPipe } from './components/pipes/domseguro.pipe';
import { ContrasenaPipe } from './components/pipes/contrasena.pipe';
@NgModule({
  declarations: [AppComponent, CapitalizadoPipe, DomseguroPipe, ContrasenaPipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
