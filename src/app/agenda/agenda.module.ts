import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgendaRoutingModule } from './agenda-routing.module';
import { UpdateAgendaComponent } from './update-agenda/update-agenda.component';
import { SaveAgendaComponent } from './save-agenda/save-agenda.component';
import { GetAgendaComponent } from './get-agenda/get-agenda.component';
                  
@NgModule({
  declarations: [
    UpdateAgendaComponent,
    SaveAgendaComponent,
    GetAgendaComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AgendaModule { }
