import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsistenciaManualPage } from './asistencia-manual.page';

const routes: Routes = [
  {
    path: '',
    component: AsistenciaManualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistenciaManualPageRoutingModule {}
