import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorResponse } from '@app/core/models/ErrorResponse.model';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);
  }
}

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log("ErrorInterceptor = ", error)
        let err: ErrorResponse = {
          errorCode : error.status,
          errorMessage : ""
        };
        if(error.error){
          err = error.error;
        }else{
          if ([401].includes(error.status)) {
            err.errorMessage = "Error 401 (Unauthorized)";
          }
        }
        return throwError(err);
      })
    );            
  }
}

