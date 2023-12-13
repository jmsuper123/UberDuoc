import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapUsuaiosPageRoutingModule } from './map-usuaios-routing.module';

import { MapUsuaiosPage } from './map-usuaios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapUsuaiosPageRoutingModule
  ],
  declarations: [MapUsuaiosPage]
})
export class MapUsuaiosPageModule {}
