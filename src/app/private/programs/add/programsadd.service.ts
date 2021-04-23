import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from 'src/app/services/loader.service';

import { ESPIM_REST_Programs } from '../../../app.api';
import { LoginService } from '../../../security/login/login.service';
import { DAOService } from '../../dao/dao.service';
import { Program } from '../../models/program.model';

@Injectable({
  providedIn: 'root',
})
export class ProgramsAddService {
  urlPrograms: string = ESPIM_REST_Programs;
  private _currentProgramSubject: BehaviorSubject<Program>;
  program: Observable<Program>;

  constructor(private _daoService: DAOService, private loginService: LoginService, private _loaderService: LoaderService) {
    this._currentProgramSubject = new BehaviorSubject<Program>(new Program());
    this.program = this._currentProgramSubject.asObservable();
  }

  fetchData(id: string) {
    this._loaderService.show();
    let params = new HttpParams().append('include[]', 'passiveEvents').append('include[]', 'activeEvents').append('include[]', 'users');

    this._daoService
      .getObject(this.urlPrograms, id, params)
      .pipe(finalize(() => this._loaderService.hide()))
      .subscribe((response) => {
        response.data.observers = response.data.observers.data;
        response.data.users = response.data.users.data;
        response.data.passiveEvents = response.data.passiveEvents.data;
        response.data.activeEvents = response.data.activeEvents.data;
        this._currentProgramSubject.next(response.data);
      });
  }

  clearData() {
    let program = new Program();
    program.observers = [this.loginService.userObserver];
    this._currentProgramSubject.next(program);
  }

  /**
   * Saves an step patching "programs". Patching results in updating the attributes specified in programs
   */
  saveStep(dados: any) {
    let id = this.programValue.id;
    if (id) {
      let programUpdated = ({ ...this.programValue, ...dados } as unknown) as Program;
      this._loaderService.show();

      this._daoService
        .patchObject(ESPIM_REST_Programs, id)
        .pipe(finalize(() => this._loaderService.hide()))
        .subscribe((resp) => {
          this._currentProgramSubject.next(programUpdated);
        });
    } else {
      this.saveLocalStep(dados);
    }
  }

  saveLocalStep(dados: any) {
    let programUpdated = ({ ...this.programValue, ...dados } as unknown) as Program;
    this._currentProgramSubject.next(programUpdated);
  }

  public get programValue(): Program {
    return this._currentProgramSubject.value;
  }
}
