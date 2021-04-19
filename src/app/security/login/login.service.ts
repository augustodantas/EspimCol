import { HttpParams } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { ESPIM_REST_Observers } from 'src/app/app.api';
import { Observer } from 'src/app/private/models/observer.model';
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
  userObserver: Observer;

  constructor(
    private _loaderService: LoaderService,
    private _service: SocialAuthService,
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
    this._service.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (user) => {
        this._loaderService.show();
        this.zone.run(() => {
          this._observerService
            .authenticate(this.urlObservers, user.authToken)
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
    let params = new HttpParams().set('include', 'observer');
    return this._observerService.fetchUser(ESPIM_REST_Observers + 'me', params).pipe(
      map((response) => {
        this._currentUserSubject.next(response.data);
        this.userObserver = response.data.observer.data;
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
    this.accessToken = '';
    this.clearStorage();
    this.router.navigate(['/']);
  }

  public get userValue(): SocialUser {
    return this._currentUserSubject.value;
  }

  clearStorage(): void {
    // remove user from local storage to log user out
    this._localStorageService.Remove(this._propertyName);
    this._currentUserSubject.next(null);
    this.userObserver = null;
  }

  isLoggedIn(): boolean {
    return !!this.accessToken;
  }
}
