import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { ESPIM_REST_Observers } from 'src/app/app.api';
import { DAOService } from 'src/app/private/dao/dao.service';
import { ObserversService } from 'src/app/private/observers/observers.service';
import { LoginService } from 'src/app/security/login/login.service';

import { LoaderService } from './../../services/loader.service';
import { FormUtil } from './../../util/util.form.service';

@Component({
  selector: 'esm-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent {
  @ViewChild('formElement') formElement: ElementRef;

  urlObservers: string = ESPIM_REST_Observers;
  form: FormGroup = this.formBuilder.group({
    name: this.formBuilder.control(''),
    email: this.formBuilder.control(''),
    phone_number: this.formBuilder.control(''),
    role: this.formBuilder.control(''),
    about: this.formBuilder.control(''),
    birthdate: this.formBuilder.control(null),
    schooling: this.formBuilder.control(''),
    institution: this.formBuilder.control(''),
    // form elements for observer's address
    address: this.formBuilder.group({
      address: this.formBuilder.control(''),
      address_number: this.formBuilder.control(''),
      address_complement: this.formBuilder.control(''),
      cep: this.formBuilder.control(''),
      state: this.formBuilder.control(''),
      city: this.formBuilder.control(''),
      country: this.formBuilder.control(''),
    }),
  });

  constructor(
    private _loaderService: LoaderService,
    private _toastr: ToastrService,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private observerService: ObserversService,
    private formBuilder: FormBuilder,
    private daoService: DAOService,
    private router: Router
  ) {
    // Carrega os parametros da rota nos valores do formulário
    this.form.patchValue({
      name: this.route.snapshot.params.name,
      email: this.route.snapshot.params.email,
    });
  }

  save() {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      var dados = { ...this.form.value };
      dados['birthdate'] = moment(this.form.value.birthdate).format('YYYY-MM-DD');

      console.log(this.form.value.birthdate);

      this._loaderService.show();

      this.daoService
        .postObject(this.urlObservers, dados)
        .pipe(finalize(() => this._loaderService.hide()))
        .subscribe(
          (resp) => {
            this._toastr.success('Observador registrado!', 'Observador registrado com sucesso!');
            this.loginService.handleAuth(resp);
          },
          (resp) => FormUtil.setErrorsBackend(this.form, resp.data, this.formElement)
        );
    }
  }
}
