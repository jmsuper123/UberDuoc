import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeConductoresPage } from './home-conductores.page';

const routes: Routes = [
  {
    path: '',
    component: HomeConductoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeConductoresPageRoutingModule {}
