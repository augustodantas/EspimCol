import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/security/login/login.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {InterventionService} from "./private/programs/intervention/intervention.service";
import { distinctUntilChanged } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
@Component({
  selector: 'esm-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnDestroy {
	private _user$: Subscription;
  private _unsubscribe: Subscription[] = [];

  constructor(private translate: TranslateService, 
    private readonly loginService: LoginService,
) {
    translate.setDefaultLang('en');



    this._user$ = this.loginService.user
      .pipe(
        distinctUntilChanged((prev, curr) => prev?.email === curr?.email)
      )
      .subscribe((user) => {
        if (!isNullOrUndefined(user) && this.loginService.isLoggedIn) {
        } else {
        }
      });
  }

   ngOnDestroy(): void {
    if (this._user$) {
      this._user$.unsubscribe();
    }
    this._unsubscribe.forEach((sb) => sb.unsubscribe());
  }

}
