import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfielPage } from './profiel.page';

const routes: Routes = [
  {
    path: '',
    component: ProfielPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfielPageRoutingModule {}
