import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  id: string = '';

  constructor(
    private _daoService: DAOService,
    private _toastr: ToastrService,
    private _activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _loaderService: LoaderService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params.id;

    this.form = this._formBuilder.group({
      email: this._formBuilder.control({ value: '', disabled: !!this.id }, [Validators.required, Validators.email]),
      alias: this._formBuilder.control('', [Validators.required]),
    });

    if (this.id) {
      this.fetchData(this.id);
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
      this._loaderService.show();

      this.sendRequest()
        .pipe(finalize(() => this._loaderService.hide()))
        .subscribe(
          (response) => {
            if (response.error) {
              FormUtil.setErrorsBackend(this.form, response);
            } else {
              this._toastr.success(response.message);
              this.route.navigate(['/private/participants/list']);
            }
          },
          (resp) => FormUtil.setErrorsBackend(this.form, resp.data)
        );
    }
  }

  sendRequest(): Observable<any> {
    var dados = { ...this.form.value };

    if (this.id) {
      return this._daoService.putObject(this.urlParticipants + this.id, dados);
    } else {
      return this._daoService.postObject(this.urlParticipants, dados);
    }
  }
}
