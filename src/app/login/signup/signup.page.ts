import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UsuariosService } from './usuario.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  usuario={
  name:'',
  user:'',
  password:'',
  confirm_password:''
  };

  campo: string;

  constructor(private router: Router,public toastController: ToastController, private usuarioService: UsuariosService ) { }

  ngOnInit() {
  }

  onSubmit() {
    const navigationExtras: NavigationExtras = {
      state: {
        user: this.usuario 
      }
    };
    if(this.usuario.confirm_password!=this.usuario.password)
    {
      alert('Las contraseñas no coinciden');
    }
    else{
      if(this.validateModel(this.usuario)){
        this.usuarioService.addUsuario(
          this.usuario.name.valueOf(),
          this.usuario.user.valueOf(),
          this.usuario.password.valueOf()),
          this.presentToast('Datos registrados correctamente');
          this.router.navigate(['/login'],navigationExtras);
      }  
      else
      {
        this.presentToast('Falta completar: '+this.campo);
      }
    }

 }
 /**
   * Muestra un toast al usuario (mensaje flotante)
   * @param message Mensaje a presentar al usuario
   * @param duration Duración el toast, este es opcional
   */
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
  for (var [key, value] of Object.entries(model)) {
    if (value==='') {
      this.campo=key;
      return false;
    }
  }
  return true;
}


}