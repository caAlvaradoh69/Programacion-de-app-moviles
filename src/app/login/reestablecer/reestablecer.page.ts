import { Component, OnInit } from '@angular/core';
import { UsuariosService}  from '../signup/usuario.service';
import { Usuario } from '../signup/usuario.model';
import { Router, NavigationExtras,ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reestablecer',
  templateUrl: './reestablecer.page.html',
  styleUrls: ['./reestablecer.page.scss'],
})
export class ReestablecerPage implements OnInit {
  user={
    usuario:'',
    password:'',
    confirmaPass : ''
    
  };
  usuarioObj: Usuario;
     
   campo: string;

  constructor(private router: Router,
    private usuarioService: UsuariosService, private toastController: ToastController,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  reestablece(){
    const navigationExtras: NavigationExtras = {
      state: {
        user: this.user 
      }
    };
    this.usuarioObj = this.usuarioService.getUsuario(this.user.usuario)
    
    if(this.user.confirmaPass!=this.user.password)
    {
      
      this.presentToast('Las contraseñas no coinciden');
    }
    else{
      
      if(this.validateModel(this.user)){
          console.log(this.usuarioObj)
          console.log(this.user.password)
          this.usuarioObj.password = this.user.password
          
          console.log(this.usuarioObj)
          this.presentToast('Contraseña modificada');
          this.router.navigate(['/login'],navigationExtras);
      }  
      else
      {
        this.presentToast('Falta completar: '+this.campo);
      }
    }
  }

  async presentToast(message: string, duration?: number){
    const toast = await this.toastController.create(
      {
        message,
        duration:duration?duration:2000
      }
    );
    toast.present();
  }

  validateModel(model: any){
  for (const [key, value] of Object.entries(model)) {
    if (value==='') {
      this.campo=key;
      return false;
    }
  }
  return true;
}

}
