import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred
          errorMsg = `Error: ${error.error.message}`;
        } else {
          // The backend returned an unsuccessful response code
          errorMsg = `Error Code: ${error.status}, Message: ${error.message}`;
        }
        return throwError(errorMsg);
      })
    );
  }
}
