import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { environment } from '../../../environments/environment';
import { Contacto } from '@app/core/models/Contacto.model'

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private http: HttpClient) { }

  getContacto(id:number){
    return this.http.get<Contacto>(`${environment.url_api}/agenda/get-contacto-by-id/`+id)
      .pipe(
        catchError(this.handleError)
      );      
  }     

  crearContacto(contacto: Contacto){     
    return this.http.post<Contacto>(`${environment.url_api}/agenda/save-agenda`, contacto)
    .pipe(
      catchError(this.handleError)
    );                
  }             

  getAgenda(){
    return this.http.get<Contacto[]>(`${environment.url_api}/agenda/get-agenda-list`)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateContacto(contacto: Contacto){     
    return this.http.put<Contacto>(`${environment.url_api}/agenda/update-agenda`, contacto)
    .pipe(
      catchError(this.handleError)
    );                
  } 

  deleteContacto(id:number){        
    return this.http.delete(`${environment.url_api}/agenda/delete-agenda-by-id/`+id)
  }     

  handleError(error: HttpErrorResponse){
    return throwError(error);
  }
}
