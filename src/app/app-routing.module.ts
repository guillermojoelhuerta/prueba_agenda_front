import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
      
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'agenda/mostrar-todos',
  },        
  {           

    path: 'agenda',
    loadChildren: () => import('./agenda/agenda.module').then(m => m.AgendaModule)
  }                   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
