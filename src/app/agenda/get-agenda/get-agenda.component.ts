import { Component, OnInit } from '@angular/core';

import { AgendaService } from '@app/shared/services/agenda.service';
import { ErrorResponse } from '@app/core/models/ErrorResponse.model';
import { Contacto } from '@app/core/models/Contacto.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-agenda',
  templateUrl: './get-agenda.component.html',
  styleUrls: ['./get-agenda.component.css']
})
export class GetAgendaComponent implements OnInit{
  contactos:Contacto[] = [];
  constructor(private agendaService: AgendaService){} 
  ngOnInit(){
    this.getAgenda();
  }

  getAgenda(){
    this.agendaService.getAgenda().subscribe((res: Contacto[]) => {
      this.contactos = res;     
    },((error: ErrorResponse) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.errorMessage
      });
    }));
  }     

  deleteContacto(indice:number, telefono:number){

    Swal.fire({
      title: 'Estás seguro de eliminar?',
      text: "No podras revertir la situación!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
        
      this.agendaService.deleteContacto(telefono).subscribe((res: any) => {
        console.log("res ", res);   
        this.contactos.splice(indice, 1); 
      },((error: ErrorResponse) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.errorMessage
        });
      }));    
    
    })
  }

}
