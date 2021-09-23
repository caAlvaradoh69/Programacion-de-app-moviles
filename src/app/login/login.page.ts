import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  user={
    usuario:'',
    password:''
  };
   
 campo:string;

  constructor(private router: Router,public toastController: ToastController) { } 
  ngOnInit(){
  }
  ingresar(){
    
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user 
      }
    };
    if(this.validateModel(this.user)){
      if( this.user.usuario==='mmonte' && this.user.password==='123456')
        this.router.navigate(['/home'],navigationExtras); 
      else{
        this.presentToast('Usuario o password no validos');
      }
    }
    else
    {
      this.presentToast('Falta completar: '+this.campo);
    }

  }
   /**
   * Muestra un toast al usuario
   * @param message Mensaje a presentar al usuario
   * @param duration Duración el toast, este es opcional
   */ 
    async presentToast(message : string, duration?:number){
      const toast = await this.toastController.create(
        {
          message:message,
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