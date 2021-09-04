import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleContactoPageRoutingModule } from './detalle-contacto-routing.module';

import { DetalleContactoPage } from './detalle-contacto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleContactoPageRoutingModule
  ],
  declarations: [DetalleContactoPage]
})
export class DetalleContactoPageModule {}
