import { HttpParams } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { NgxPermissionsService } from 'ngx-permissions';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { BASE_ESPIM_API } from 'src/app/app.api';
import { Observer } from 'src/app/private/models/observer.model';
import { User } from 'src/app/private/models/user.model';
import { ObserversService } from 'src/app/private/observers/observers.service';

import { LoaderService } from './../../services/loader.service';
import { LocalStorageService } from './local-storage.service';

import Echo from 'laravel-echo';
import pusher from 'pusher-js';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _propertyName: string = 'accessToken';
  urlLogin: string = BASE_ESPIM_API + 'auth/';
  private _currentUserSubject: BehaviorSubject<User>;
  accessToken: string;
  user: Observable<User>;
  userObserver: Observer;
  Echo: Echo;

  constructor(
    private _loaderService: LoaderService,
    private _service: SocialAuthService,
    private router: Router,
    private zone: NgZone,
    private _observerService: ObserversService,
    private _permissionsService: NgxPermissionsService,
    private readonly _localStorageService: LocalStorageService
  ) {
    this._currentUserSubject = new BehaviorSubject<User>(null);
    this.accessToken = this._localStorageService.Get(this._propertyName);
    this.user = this._currentUserSubject.asObservable();
    const Pusher = pusher;
    this.Echo = new Echo({
      broadcaster: 'pusher',
      key: 'Vbzjq50DrSGPP7tZls51UUKNSWmoRhoXelMWzelf9jc',
      wsHost: '127.0.0.1',
      wsPort: 6001,
      wssPort: 6001,
      cluster: 'mt1',
      forceTLS: false,
      encrypted: true,
      disableStats: true,
      enabledTransports: ['ws', 'wss'],
      authEndpoint: 'http://127.0.0.1:8083/api/broadcasting/auth',
      auth: {
          headers: {
              Authorization: 'Bearer ' + this.accessToken,
          },
      }
    });

    console.log(this.Echo);
    this.Echo.private('program.1').listen('.ProgramEvent', (data: any) => {
      console.log('data Is : ', data);
    })

    setInterval(() => {
      this.Echo.private('program.1').whisper('typing', {
          message: 'hola!'
      });
    }, 3000);

    this.Echo.private('program.1').listenForWhisper('typing', (e) => {
        console.log('Typing');
        console.log(e);
    })
  }

  loginWithGoogle(): void {
    this._service.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (user) => {
        this._loaderService.show();
        this.zone.run(() => {
          this._observerService
            .authenticate(this.urlLogin, user.authToken)
            .pipe(finalize(() => this._loaderService.hide()))
            .subscribe((response: any) => {
              this.handleAuth(response);
            });
        });
      },
      (error) => console.log(error)
    );
  }

  fetchUser(): Observable<User> {
    let params = new HttpParams().set('include', 'observer.user');
    return this._observerService.fetchUser(BASE_ESPIM_API + 'me', params).pipe(
      map((response) => {
        this._currentUserSubject.next(response.data);
        this.userObserver = response.data.observer;

        this._permissionsService.loadPermissions(this.userValue.permissions);
        return response.data;
      })
    );
  }

  handleAuth(response: any) {
    if (response.token) {
      this.accessToken = response.token;
      this._localStorageService.Set(this._propertyName, response.token);
    }

    this._currentUserSubject.next(response.user);
    this.userObserver = response.user.observer;
    this._permissionsService.loadPermissions(this.userValue.permissions);

    if (this.userObserver) {
      this.router.navigate(['/private']);
    } else {
      this.router.navigate(['/security/signup']);
    }
  }

  logout(): void {
    this.accessToken = '';
    this.clearStorage();
    this.router.navigate(['/']);
  }

  public get userValue(): User {
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
