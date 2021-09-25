import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactosPage } from './contactos.page';

const routes: Routes = [
  {
    path: '',
    component: ContactosPage
  },
  {
    path: 'detalle-contacto',
    loadChildren: () => import('./detalle-contacto/detalle-contacto.module').then( m => m.DetalleContactoPageModule)
  },
  {
    path: 'asistencia-manual',
    loadChildren: () => import('./asistencia-manual/asistencia-manual.module').then( m => m.AsistenciaManualPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactosPageRoutingModule {}
