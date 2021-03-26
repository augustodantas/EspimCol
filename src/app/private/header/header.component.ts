import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/security/login/login.service';

@Component({
  selector: 'esm-private-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(private _loginService: LoginService) {}

  user$: Observable<SocialUser>;

  ngOnInit() {
    this.user$ = this._loginService.user;
  }

  logout() {
    this._loginService.logout();
  }
}
