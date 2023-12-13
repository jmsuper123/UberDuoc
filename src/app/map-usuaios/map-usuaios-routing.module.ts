import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapUsuaiosPage } from './map-usuaios.page';

const routes: Routes = [
  {
    path: '',
    component: MapUsuaiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapUsuaiosPageRoutingModule {}
