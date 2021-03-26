/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';

import { LoaderService } from '../services/loader.service';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanLoad, CanActivate, CanActivateChild {
  constructor(private readonly _router: Router, private loginService: LoginService, private _loaderService: LoaderService) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    console.log('canLoad');
    if (this.loginService.isLoggedIn()) {
      return true;
    }
    this.loginService.logout();
    this._router.navigate(['/']);
    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log('canActivate');
    return this.checkAuthentication();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log('canActivateChild');
    return this.checkAuthentication();
  }

  checkAuthentication(): Observable<boolean> {
    const user = this.loginService.userValue;
    let loggedIn = this.loginService.isLoggedIn();

    if (!loggedIn) {
      this.loginService.logout();
    }

    if (loggedIn && (!user || !user.email)) {
      this._loaderService.show();
      return this.loginService.fetchUser().pipe(
        map((user) => {
          return true;
        }),
        catchError(() => {
          this.loginService.logout();
          return of(false);
        }),
        finalize(() => this._loaderService.hide())
      );
    }

    return of(loggedIn);
  }
}
