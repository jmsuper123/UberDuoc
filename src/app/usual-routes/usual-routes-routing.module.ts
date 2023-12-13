import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsualRoutesPage } from './usual-routes.page';

const routes: Routes = [
  {
    path: '',
    component: UsualRoutesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsualRoutesPageRoutingModule {}
