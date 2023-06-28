import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AgendaService } from '@app/shared/services/agenda.service';
import { ErrorResponse } from '@app/core/models/ErrorResponse.model';
import { Contacto } from '@app/core/models/Contacto.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-save-agenda',
  templateUrl: './save-agenda.component.html',
  styleUrls: ['./save-agenda.component.css']
})
export class SaveAgendaComponent {
  crearContacto:UntypedFormGroup = new UntypedFormGroup({
    telefono: new UntypedFormControl('', [Validators.required,Validators.pattern('[0-9]{10}')]),
    nombre: new UntypedFormControl('', [Validators.required]),
    direccion: new UntypedFormControl('', [Validators.required]),
  });    
  constructor(private agendaService: AgendaService){}   
  enviarForm(){
    this.agendaService.crearContacto(this.crearContacto.value).subscribe((response:Contacto)=>{
      Swal.fire(
        {
          icon: 'success',
          title: 'Se ha agregado exitosamente!!'
        }
      ); 
      this.crearContacto.reset();                 
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
