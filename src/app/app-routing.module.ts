
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
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
      },
      {
        path: 'asistencia-manual',
        loadChildren: () => import('./contactos/asistencia-manual/asistencia-manual.module').then( m => m.AsistenciaManualPageModule)
      }
    ]
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'signup',
    loadChildren: () => import('./login/signup/signup.module').then( m => m.SignupPageModule)
  },
  



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
