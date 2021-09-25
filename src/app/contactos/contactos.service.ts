import { Injectable } from '@angular/core';
import { Contacto } from './contacto.model';
@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  listaContactos: Contacto[]= [
    {
      id:'1',
      nombre:'Juan',
      apellidos:'Perez Gómez',
      direccion:'asd 123',
      fono: '+56985789632',
      email:'jp@gmail.com'
    },
    {
      id:'2',
      nombre:'Maria',
      apellidos:'Silva Vera',
      direccion:'dasd 321',
      fono: '+56957854961',
      email:'asdasdadsa@gmail.com'
    },
    {
      id:'3',
      nombre:'Maria',
      apellidos:'Silva Vera',
      direccion:'dasd 321',
      fono: '+56957854961',
      email:'asdasdadsa@gmail.com'
    },
    {
      id:'4',
      nombre:'Maria',
      apellidos:'Silva Vera',
      direccion:'dasd 321',
      fono: '+56957854961',
      email:'asdasdadsa@gmail.com'
    },
    {
      id:'5',
      nombre:'Maria',
      apellidos:'Silva Vera',
      direccion:'dasd 321',
      fono: '+56957854961',
      email:'asdasdadsa@gmail.com'
    },
    {
      id:'6',
      nombre:'Maria',
      apellidos:'Silva Vera',
      direccion:'dasd 321',
      fono: '+56957854961',
      email:'asdasdadsa@gmail.com'
    },
    {
      id:'7',
      nombre:'Maria',
      apellidos:'Silva Vera',
      direccion:'dasd 321',
      fono: '+56957854961',
      email:'asdasdadsa@gmail.com'
    },
    {
      id:'8',
      nombre:'Maria',
      apellidos:'Silva Vera',
      direccion:'dasd 321',
      fono: '+56957854961',
      email:'asdasdadsa@gmail.com'
    },
    {
      id:'9',
      nombre:'Maria',
      apellidos:'Silva Vera',
      direccion:'dasd 321',
      fono: '+56957854961',
      email:'asdasdadsa@gmail.com'
    },
    {
      id:'10',
      nombre:'Maria',
      apellidos:'Silva Vera',
      direccion:'dasd 321',
      fono: '+56957854961',
      email:'asdasdadsa@gmail.com'
    }
    
  ]

  constructor() { }
  getContactos()
  {
     return [...this.listaContactos];
  }

  getContacto(contactoId: string)
  {
    return {
            ...this.listaContactos.find(contacto => {return contacto.id === contactoId })
          }
  }

  addContacto(nombre: string, apellidos: string, direccion: string,email: string, fono: string)
  {
    this.listaContactos.push(
      {
        id: this.listaContactos.length+1+'',
        nombre,
        apellidos,
        direccion,
        fono,
        email
      }
    );
  }

  deleteContacto(contactoId: string)
  {
    this.listaContactos=this.listaContactos.filter(contacto => {return contacto.id !== contactoId  });
  }

}
