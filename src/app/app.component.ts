import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { LoginService } from 'src/app/security/login/login.service';
import Echo from 'laravel-echo';
import pusher from 'pusher-js';

import { LoaderService } from './services/loader.service';

@Component({
  selector: 'esm-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnDestroy {
  private _user$: Subscription;
  private _unsubscribe: Subscription[] = [];

  constructor(
    private translate: TranslateService,
    private _router: Router,
    private _loaderService: LoaderService,
    private readonly loginService: LoginService
  ) {
    translate.setDefaultLang('pt');
  }

  ngOnInit() {
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        take(1)
      )
      .subscribe(() => this._loaderService.hide());
    // this.publichWebSocketChannel();
  }

  ngOnDestroy(): void {
    if (this._user$) {
      this._user$.unsubscribe();
    }
    this._unsubscribe.forEach((sb) => sb.unsubscribe());
  }

  // publichWebSocketChannel() {
  //   const Pusher = pusher;
  //   const echo = new Echo({
  //     broadcaster: 'pusher',
  //     key: 'Vbzjq50DrSGPP7tZls51UUKNSWmoRhoXelMWzelf9jc',
  //     wsHost: '127.0.0.1',
  //     wsPort: 6001,
  //     wssPort: 6001,
  //     cluster: 'mt1',
  //     forceTLS: false,
  //     encrypted: true,
  //     disableStats: true,
  //     enabledTransports: ['ws', 'wss'],
  //   });

  //   echo.channel('canal').listen('VotouEvent', (data: any) => {
  //     console.log('data Is : ', data);
  //   })
  // }
}
