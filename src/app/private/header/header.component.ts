import { Observable } from 'rxjs';
import { Component, OnInit, Injectable } from '@angular/core';
import { LoginService } from 'src/app/security/login/login.service';
import { SocialUser } from 'ngx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'esm-private-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private _loginService: LoginService) { }

  user$: Observable<SocialUser>;

  ngOnInit() {
    this.user$ = this._loginService.user;
  }


  logout() {
    this._loginService.logout();
  }


}
