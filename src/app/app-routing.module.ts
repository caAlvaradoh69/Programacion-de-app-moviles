import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contactos',
    children: [
      {
        path:'',
        loadChildren: () => import('./contactos/contactos.module').then( m => m.ContactosPageModule)
      },
      {
        path:':contactoId',
        loadChildren: () => import('./contactos/detalle-contacto/detalle-contacto.module').then( m => m.DetalleContactoPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
