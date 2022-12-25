import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from "./loading.service";

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {
  }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.inc();
    return next.handle(httpRequest)
      .pipe(
        finalize(() => this.loadingService.dec())
      );
  }

  // @todo: redirect to login if status code is 401, I am just writing here but id does not mean that is supposed to be implemented here!!
}

export const  AppInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true,
};
