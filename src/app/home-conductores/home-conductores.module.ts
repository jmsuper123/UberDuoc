import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeConductoresPageRoutingModule } from './home-conductores-routing.module';

import { HomeConductoresPage } from './home-conductores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeConductoresPageRoutingModule
  ],
  declarations: [HomeConductoresPage]
})
export class HomeConductoresPageModule {}
