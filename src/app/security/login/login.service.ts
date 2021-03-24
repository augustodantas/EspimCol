import { finalize } from 'rxjs/operators';
import { LoaderService } from './../../services/loader.service';
import { Injectable, NgZone } from '@angular/core';
import { SocialLoginService, Provider, SocialUser } from 'ngx-social-login';
import 'rxjs/operator/do';
import { Router } from '@angular/router';
import { ObserversService } from 'src/app/private/observers/observers.service';
import { ESPIM_REST_Observers } from 'src/app/app.api';
import { LocalStorageService } from './local-storage.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _propertyName: string = 'currentUser';
  urlObservers: string = ESPIM_REST_Observers + 'auth/';
  private _currentUserSubject: BehaviorSubject<SocialUser>;

  user: Observable<SocialUser>;

  constructor(private _loaderService: LoaderService, private _service: SocialLoginService, private router: Router, private zone: NgZone, private _observerService: ObserversService,     private readonly _localStorageService: LocalStorageService,
    ) {

      this._currentUserSubject = new BehaviorSubject<SocialUser>(
        this._localStorageService.Get(this._propertyName)
      );

      this.user = this._currentUserSubject.asObservable();
  }

  loginWithGoogle(): void {
    this._service.login(Provider.GOOGLE)
    .subscribe(
      user => {
        this._loaderService.show()
        this.zone.run(() => {
          this._observerService.authenticate(this.urlObservers, user.accessToken)
          .pipe(
            finalize(() => this._loaderService.hide())
          )
          .subscribe(
              (response: any) => {
                this.handleAuth(response)
              },
              error => {
                this.router.navigate(['/index/signin', {email: user.email, name: user.name}])
              }
          );
        });
      },
      error => console.log(error)
    );
  }

  handleAuth(response: any) {
    response.user.accessToken = response.token
    this._currentUserSubject.next(response.user);
    this._localStorageService.Set(this._propertyName, response.user);

    this.router.navigate(['/private']);
  }

  logout(): void {
    this._service.logout().subscribe({
      complete: () => {
        this.zone.run(() => {
          this.router.navigate(['/']);
        });
      },
      error: err => console.log(err)
    });

    this.clearStorage();
  }

  public get userValue(): SocialUser {
    return this._currentUserSubject.value;
  }

   clearStorage(): void {
    // remove user from local storage to log user out
    this._localStorageService.Remove(this._propertyName);
    this._currentUserSubject.next(null);
  }

  isLoggedIn(): boolean {
    return this.userValue && this.userValue.accessToken !== undefined && this.userValue.accessToken !== null;
  }



}
