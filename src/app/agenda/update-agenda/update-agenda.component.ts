import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AgendaService } from '@app/shared/services/agenda.service';
import { ErrorResponse } from '@app/core/models/ErrorResponse.model';
import { Contacto } from '@app/core/models/Contacto.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-agenda',
  templateUrl: './update-agenda.component.html',
  styleUrls: ['./update-agenda.component.css']
})
export class UpdateAgendaComponent implements OnInit{
  id!:number;
  editarContacto:UntypedFormGroup = new UntypedFormGroup({
    telefono: new UntypedFormControl('', [Validators.required,Validators.pattern('[0-9]{10}')]),
    nombre: new UntypedFormControl('', [Validators.required]),
    direccion: new UntypedFormControl('', [Validators.required]),
  });           
  constructor(private agendaService: AgendaService,
    private activatedRoute: ActivatedRoute){}   

  ngOnInit(){
    this.activatedRoute.params.subscribe((params : Params) =>{
      this.id = params["id"];
    });
    this.agendaService.getContacto(this.id).subscribe((res:any)=>{
      this.editarContacto.patchValue(res);        
    });     
  }
          
  enviarForm(){
    this.agendaService.updateContacto(this.editarContacto.value).subscribe((response:Contacto)=>{
      Swal.fire(
        {
          icon: 'success',
          title: 'Se ha actualizado exitosamente!!'
        }
      );                  
    },(error: ErrorResponse)=>{
      let porciones = error.errorMessage.split('.');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        html: porciones.join('.<br>')
      });                     
    });     
  }  
}
