import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ESPIM_REST_Participants } from 'src/app/app.api';
import { LoaderService } from 'src/app/services/loader.service';
import { FormUtil } from 'src/app/util/util.form.service';

import { DAOService } from '../../dao/dao.service';

@Component({
  selector: 'esm-participants-add',
  templateUrl: './participantsadd.component.html',
})
export class ParticipanstAddComponent implements OnInit {
  urlParticipants: string = ESPIM_REST_Participants;
  form: FormGroup;
  editing: boolean = false;
  loading: boolean = true;

  constructor(
    private _daoService: DAOService,
    private _activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _loaderService: LoaderService,
    private route: Router
  ) {}

  ngOnInit() {
    this.form = this._formBuilder.group({
      email: this._formBuilder.control('', [Validators.required, Validators.email]),
      alias: this._formBuilder.control('', [Validators.required]),
    });
    let id: string = this._activatedRoute.snapshot.params['id'];

    if (id) {
      this.fetchData(id);
    } else {
      this.loading = false;
    }
  }

  fetchData(id: string) {
    this._loaderService.show();
    this._daoService
      .getObject(this.urlParticipants, id)
      .pipe(finalize(() => this._loaderService.hide()))
      .subscribe((response) => {
        this.form.patchValue({ ...response.data });
      });
  }

  save(event) {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      var dados = { ...this.form.value };

      this._loaderService.show();

      this.sendRequest()
        .pipe(finalize(() => this._loaderService.hide()))
        .subscribe(
          (response) => {
            console.log(response);
          },
          (resp) => FormUtil.setErrorsBackend(this.form, resp)
        );
    }
  }

  sendRequest(): Observable<any> {
    let id: string = this._activatedRoute.snapshot.params['id'];

    if (id) {
      return this._daoService.putObject(this.urlParticipants + id, this.form.value);
    } else {
      return this._daoService.postObject(this.urlParticipants, this.form.value);
    }
  }

  onSaveSuccess(event) {
    this.route.navigate(['private/participants/list']);
  }
}
