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
      }
    ]
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },  {
    path: 'asistencia-manual',
    loadChildren: () => import('./asistencia-manual/asistencia-manual.module').then( m => m.AsistenciaManualPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
