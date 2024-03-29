import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { ESPIM_REST_Observers } from 'src/app/app.api';
import { LoginService } from 'src/app/security/login/login.service';

import { DAOService } from '../dao/dao.service';
import { Observer } from '../models/observer.model';
import { User } from '../models/user.model';
import { ObserversService } from './observers.service';

@Component({
  selector: 'esm-observers',
  templateUrl: './observers.component.html',
})
export class ObserversComponent implements OnInit {
  urlObservers: string = ESPIM_REST_Observers;

  user: User;
  observer: Observer;

  observerForm: FormGroup;

  @ViewChild('swalSaveSuccess') private swalSaveSuccess: SwalComponent;

  constructor(
    private loginService: LoginService,
    private observerService: ObserversService,
    private _formBuilder: FormBuilder,
    private _daoService: DAOService
  ) {}

  ngOnInit() {
    this.user = this.loginService.userValue;

    //tem como melhorar essa inicialização - refatorar em momento oportuno
    this.observerForm = this._formBuilder.group({
      id: this._formBuilder.control(''),
      name: this._formBuilder.control(''),
      email: this._formBuilder.control(''),
      phoneNumber: this._formBuilder.control(''),
      role: this._formBuilder.control(''),
      about: this._formBuilder.control(''),
      birthdate: this._formBuilder.control(''),
      schooling: this._formBuilder.control(''),
      institution: this._formBuilder.control(''),
      //form elements for observer's address
      address: this._formBuilder.group({
        id: this._formBuilder.control(''),
        address: this._formBuilder.control(''),
        addressNumber: this._formBuilder.control(''),
        addressComplement: this._formBuilder.control(''),
        cep: this._formBuilder.control(''),
        state: this._formBuilder.control(''),
        city: this._formBuilder.control(''),
        country: this._formBuilder.control(''),
      }),
    });

    this.observerService.getObserverByEmail(this.urlObservers, this.user.email).subscribe((response) => {
      console.log('response =>', response['results'][0]);
      this.observer = new Observer(response['results'][0]);
      console.log('observer:', this.observer);

      this.observerForm.patchValue({
        id: this.observer.getId(),
        name: this.observer.getName(),
        email: this.observer.getEmail(),
        phoneNumber: this.observer.getPhoneNumber(),
        role: this.observer.getRole(),
        about: this.observer.getAbout(),
        birthdate: this.observer.getBirthdate() ? this._dateConverterService.toNgbDate(this.observer.getBirthdate().toString()) : '',
        schooling: this.observer.getSchooling(),
        institution: this.observer.getInstitution(),
      });
      if (this.observer.getAddress()) {
        this.observerForm.patchValue({
          address: {
            id: this.observer.getAddress().getId(),
            address: this.observer.getAddress().getAddress(),
            addressNumber: this.observer.getAddress().getAddressNumber(),
            addressComplement: this.observer.getAddress().getAddressComplement(),
            cep: this.observer.getAddress().getCEP(),
            state: this.observer.getAddress().getState(),
            city: this.observer.getAddress().getCity(),
            country: this.observer.getAddress().getCountry(),
          },
        });
      }
    });
  }

  save(event) {
    // converter data aqui senão vai dar problema
    this.observerForm.value.birthdate = this._dateConverterService.toString(this.observerForm.value.birthdate);
    console.log('date:', this.observerForm.value.birthdate);
    this._daoService.putObject(this.urlObservers, this.observerForm.value).subscribe((response) => {
      this.swalSaveSuccess.show();
    });
  }
}
