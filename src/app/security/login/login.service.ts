import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Provider, SocialLoginService, SocialUser } from 'ngx-social-login';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { ESPIM_REST_Observers } from 'src/app/app.api';
import { ObserversService } from 'src/app/private/observers/observers.service';

import { LoaderService } from './../../services/loader.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _propertyName: string = 'accessToken';
  urlObservers: string = ESPIM_REST_Observers + 'auth/';
  private _currentUserSubject: BehaviorSubject<SocialUser>;
  accessToken: string;
  user: Observable<SocialUser>;

  constructor(
    private _loaderService: LoaderService,
    private _service: SocialLoginService,
    private router: Router,
    private zone: NgZone,
    private _observerService: ObserversService,
    private readonly _localStorageService: LocalStorageService
  ) {
    this._currentUserSubject = new BehaviorSubject<SocialUser>(null);
    this.accessToken = this._localStorageService.Get(this._propertyName);
    this.user = this._currentUserSubject.asObservable();
  }

  loginWithGoogle(): void {
    this._service.login(Provider.GOOGLE).subscribe(
      (user) => {
        this._loaderService.show();
        this.zone.run(() => {
          this._observerService
            .authenticate(this.urlObservers, user.accessToken)
            .pipe(finalize(() => this._loaderService.hide()))
            .subscribe(
              (response: any) => {
                this.handleAuth(response);
              },
              (error) => {
                this.router.navigate(['/index/signin', { email: user.email, name: user.name }]);
              }
            );
        });
      },
      (error) => console.log(error)
    );
  }

  fetchUser(): Observable<SocialUser> {
    return this._observerService.fetchUser(ESPIM_REST_Observers + 'me').pipe(
      map((response) => {
        this._currentUserSubject.next(response.data);
        return response.data;
      })
    );
  }

  handleAuth(response: any) {
    this.accessToken = response.token;
    this._currentUserSubject.next(response.user);
    this._localStorageService.Set(this._propertyName, response.token);

    this.router.navigate(['/private']);
  }

  logout(): void {
    this._service.logout().subscribe({
      complete: () => {
        this.zone.run(() => {
          this.router.navigate(['/']);
        });
      },
      error: (err) => console.log(err),
    });

    this.accessToken = '';
    this.clearStorage();
  }

  public get userValue(): SocialUser {
    console.log(this._currentUserSubject.value);
    return this._currentUserSubject.value;
  }

  clearStorage(): void {
    // remove user from local storage to log user out
    this._localStorageService.Remove(this._propertyName);
    this._currentUserSubject.next(null);
  }

  isLoggedIn(): boolean {
    return !!this.accessToken;
  }
}
