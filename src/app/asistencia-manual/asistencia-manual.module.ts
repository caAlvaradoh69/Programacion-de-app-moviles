import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciaManualPageRoutingModule } from './asistencia-manual-routing.module';

import { AsistenciaManualPage } from './asistencia-manual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciaManualPageRoutingModule
  ],
  declarations: [AsistenciaManualPage]
})
export class AsistenciaManualPageModule {}
