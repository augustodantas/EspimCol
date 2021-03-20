import { SocialUser } from 'ngx-social-login';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injector, Injectable } from '@angular/core';
import { LoginService } from './login/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private injector: Injector, private readonly _loginService: LoginService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const user = this._loginService.userValue;

        if (this._loginService.isLoggedIn()) {
            const headers = new HttpHeaders({
                Authorization: `Bearer ${user.accessToken}`
            });

            const authRequest = request.clone(
                { headers }
            );
            return next.handle(authRequest);
        } else {
            return next.handle(request);
        }

    }
}
