import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajesUsuariosPageRoutingModule } from './viajes-usuarios-routing.module';

import { ViajesUsuariosPage } from './viajes-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajesUsuariosPageRoutingModule
  ],
  declarations: [ViajesUsuariosPage]
})
export class ViajesUsuariosPageModule {}
