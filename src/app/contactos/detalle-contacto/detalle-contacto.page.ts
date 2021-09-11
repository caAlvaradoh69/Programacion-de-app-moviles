import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contacto} from '../contacto.model';
import { ContactosService} from '../contactos.service';

@Component({
  selector: 'app-detalle-contacto',
  templateUrl: './detalle-contacto.page.html',
  styleUrls: ['./detalle-contacto.page.scss'],
})
export class DetalleContactoPage implements OnInit {
contacto: Contacto;

  constructor(private activateRoute: ActivatedRoute, 
    private contactoService: ContactosService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(
      paramMap=>{
        const idContactoRecibido=paramMap.get('contactoId');
        this.contacto=this.contactoService.getContacto(idContactoRecibido);
      }
    );
  }

}
