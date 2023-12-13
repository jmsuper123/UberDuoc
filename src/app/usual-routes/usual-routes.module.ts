import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsualRoutesPageRoutingModule } from './usual-routes-routing.module';

import { UsualRoutesPage } from './usual-routes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsualRoutesPageRoutingModule
  ],
  declarations: [UsualRoutesPage]
})
export class UsualRoutesPageModule {}
