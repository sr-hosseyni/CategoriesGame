import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HTTP_INTERCEPTORS,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {
  }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(httpRequest)
      .pipe(
        catchError(err => {
          if (err instanceof HttpErrorResponse) {
            // if ([401, 403].includes(err.status)) {
            if (err.status === 401) {
              console.log(err.message)
              this.authService.logout();
              this.router.navigate(['login']);
            }
          }

          const error = err.error?.message || err.statusText;
          throw new Error(error);
        })
      )
  }
}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};
