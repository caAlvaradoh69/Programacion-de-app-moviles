import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {


  private listaContactos = [
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
    }
  ]

  constructor() {}

  ngOnInit() {
  }

}






/* en este archivo del componente, se establecen las serie de variables que serán empleadas dentro del modulo */  