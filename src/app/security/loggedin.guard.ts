import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';

import { LoaderService } from '../services/loader.service';
import { LoginService } from './login/login.service';

@Injectable()
export class LoggedInGuard implements CanLoad {
  constructor(private loginService: LoginService, private router: Router, private _loaderService: LoaderService) {}

  canLoad(route: Route): Observable<boolean> {
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

    return new Observable<boolean>((observer) => {
      return observer.complete();
    }).pipe(
      map(() => {
        return loggedIn;
      })
    );
  }
}
