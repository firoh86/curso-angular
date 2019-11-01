import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

import { UsuariosRoutes } from './components/usuario/usuario.routes';

// Para estructura de rutas hijas
// usuario/10/nuevo

const Routes2: Routes = [
  { path: 'home', component: HomeComponent },

  {
    path: 'usuario/:id',
    component: UsuarioComponent,
    children: UsuariosRoutes
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forChild(Routes2)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {}
