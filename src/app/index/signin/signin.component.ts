import { FormUtil } from './../../util/util.form.service';
import { SwallAlertService } from './../../util/util.swall.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ESPIM_REST_Observers } from 'src/app/app.api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DateConverterService } from 'src/app/util/util.date.converter.service';
import { DAOService } from 'src/app/private/dao/dao.service';
import { ObserversService } from 'src/app/private/observers/observers.service';
import { LoginService } from 'src/app/security/login/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'esm-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
  urlObservers: string = ESPIM_REST_Observers;
  form: FormGroup = this.formBuilder.group({
    name: this.formBuilder.control('', [Validators.required]),
    email: this.formBuilder.control('', [Validators.required, Validators.email]),
    phone_number: this.formBuilder.control('', [Validators.required]),
    role: this.formBuilder.control('', [Validators.required]),
    about: this.formBuilder.control('', [Validators.required]),
    birthdate: this.formBuilder.control(null, [Validators.required]),
    schooling: this.formBuilder.control('', [Validators.required]),
    institution: this.formBuilder.control('', [Validators.required]),
    // form elements for observer's address
    address: this.formBuilder.group({
      address: this.formBuilder.control('', [Validators.required]),
      address_number: this.formBuilder.control('', [Validators.required]),
      address_complement: this.formBuilder.control('', [Validators.required]),
      cep: this.formBuilder.control('', [Validators.required]),
      state: this.formBuilder.control('', [Validators.required]),
      city: this.formBuilder.control('', [Validators.required]),
      country: this.formBuilder.control('', [Validators.required])
    })
  });

  constructor(private _swall: SwallAlertService, private route: ActivatedRoute, private loginService: LoginService, private observerService: ObserversService, private formBuilder: FormBuilder, private daoService: DAOService, private dateConverterService: DateConverterService, private router: Router) {
    // Carrega os parametros da rota nos valores do formulário
    this.form.patchValue({
      name: this.route.snapshot.params.name,
      email: this.route.snapshot.params.email
    });
  }

  ngOnInit() {
  }

  save() {
    var t = this
    this.form.markAllAsTouched();
    
    if (this.form.valid) {
      // converter data aqui senão vai dar problema de formato aceito pelo backend
      var dados = {...this.form.value};
      dados['birthdate'] = this.dateConverterService.toString(this.form.value.birthdate);

      this.daoService.postObject(this.urlObservers, dados).subscribe(
        (resp) => {
          this._swall.success('Observador registrado!', 'Observador registrado com sucesso!').show().then(function() {
            t.loginService.handleAuth(resp);
          });
        },
        (resp) => FormUtil.setErrorsBackend(this.form, resp)
      );
    }
  }

}
