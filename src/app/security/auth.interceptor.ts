import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginService } from './login/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private injector: Injector, private readonly _loginService: LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this._loginService.accessToken;

    if (this._loginService.isLoggedIn()) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${accessToken}`,
      });

      const authRequest = request.clone({ headers });
      return next.handle(authRequest);
    } else {
      return next.handle(request);
    }
  }
}
