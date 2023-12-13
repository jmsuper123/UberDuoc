import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfielPageRoutingModule } from './profiel-routing.module';

import { ProfielPage } from './profiel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfielPageRoutingModule
  ],
  declarations: [ProfielPage]
})
export class ProfielPageModule {}
