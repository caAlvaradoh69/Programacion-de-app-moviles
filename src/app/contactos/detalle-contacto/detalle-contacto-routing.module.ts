import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleContactoPage } from './detalle-contacto.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleContactoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleContactoPageRoutingModule {}
