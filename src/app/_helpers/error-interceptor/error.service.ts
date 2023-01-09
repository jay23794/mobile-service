import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable,throwError  } from 'rxjs';
import { AuthService } from 'src/app/authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor  implements HttpInterceptor {
 constructor(private authenticationService: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {
      if ([401, 403].includes(err.status)) {
          this.authenticationService.logout();
      }
      const error = err.error.message || err.statusText;
      return throwError(() => new Error(error))
  }))
  }
}
