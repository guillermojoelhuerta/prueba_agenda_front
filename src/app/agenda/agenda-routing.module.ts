import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateAgendaComponent } from './update-agenda/update-agenda.component';
import { SaveAgendaComponent } from './save-agenda/save-agenda.component';
import { GetAgendaComponent } from './get-agenda/get-agenda.component';

const routes: Routes = [
  {
    path: 'mostrar-todos',
    component: GetAgendaComponent
  },
  {
    path: 'crear-contacto',
    component: SaveAgendaComponent
  },
  {     
    path: 'editar-contacto/:id',
    component: UpdateAgendaComponent
  }
];
        
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
