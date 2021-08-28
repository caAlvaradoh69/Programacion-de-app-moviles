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
      nombre:'Juan Perez',
      fono: '+56985789632',
      email:'jp@gmail.com'
    },
    {
      id:'2',
      nombre:'Pedro Muñoz',
      fono: '+56932156478',
      email:'PedroM@gmail.com'
    },
    {
      id:'3',
      nombre:'Juan Perez',
      fono: '+56985789632',
      email:'jp@gmail.com'
    },


  ]

  constructor() { }

  ngOnInit() {
  }

}






/* en este archivo del componente, se establecen las serie de variables que serán empleadas dentro del modulo */  