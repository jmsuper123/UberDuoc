import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajesUsuariosPage } from './viajes-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: ViajesUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajesUsuariosPageRoutingModule {}
