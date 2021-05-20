import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import cloneDeep from 'lodash/cloneDeep';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from 'src/app/services/loader.service';

import { ESPIM_REST_Programs } from '../../../app.api';
import { LoginService } from '../../../security/login/login.service';
import { DAOService } from '../../dao/dao.service';
import { Program } from '../../models/program.model';
import { InterventionService } from './step4/intervention/intervention.service';

@Injectable({
  providedIn: 'root',
})
export class ProgramsAddService {
  urlPrograms: string = ESPIM_REST_Programs;
  private _currentProgramSubject: BehaviorSubject<Program>;
  program: Observable<Program>;

  constructor(
    private _daoService: DAOService,
    private loginService: LoginService,
    private _loaderService: LoaderService,
    private readonly interventionService: InterventionService
  ) {
    this._currentProgramSubject = new BehaviorSubject<Program>(new Program());
    this.program = this._currentProgramSubject.asObservable();
  }

  fetchData(id: string) {
    this._loaderService.show();
    let params = new HttpParams()
      .append('include[]', 'passiveEvents')
      .append('include[]', 'passiveEvents.sensors')
      .append('include[]', 'passiveEvents.triggers')
      .append('include[]', 'activeEvents')
      .append('include[]', 'activeEvents.interventions')
      .append('include[]', 'activeEvents.triggers')
      .append('include[]', 'users')
      .append('include[]', 'observers.user');

    this._daoService
      .getObject(this.urlPrograms, id, params)
      .pipe(finalize(() => this._loaderService.hide()))
      .subscribe((response) => {
        response.data.activeEvents.map((activeEvent) => {
          activeEvent.interventions = activeEvent.interventions.map((intervention) =>
            this.interventionService.getInterventionClass(intervention)
          );
          return activeEvent;
        });

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
      let programUpdated = { ...this.programValue, ...dados } as unknown as Program;
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
    let programUpdated = { ...this.programValue, ...dados } as unknown as Program;
    this._currentProgramSubject.next(programUpdated);
  }

  /**
   * Saves an step patching "programs". Patching results in updating the attributes specified in programs
   */
  saveProgram() {
    let id = this.programValue.id;
    let program = cloneDeep(this.programValue);

    program.observers = program.observers.map((item) => item.id);
    program.users = program.users.map((item) => item.id);

    // Converte o cron para string
    // Converte conditions,scales,options para string
    program.activeEvents.map((item) => {
      item.triggers.map((trigger) => {
        trigger.condition = trigger.condition.toString();
        return trigger;
      });
      return item;
    });

    // Converte o cron para string
    // Converte conditions
    program.passiveEvents.map((item) => {
      item.triggers.map((trigger) => {
        trigger.condition = trigger.condition.toString();
        return trigger;
      });
      return item;
    });

    this._loaderService.show();

    if (id) {
      this._daoService
        .putObject(ESPIM_REST_Programs + id, program)
        .pipe(finalize(() => this._loaderService.hide()))
        .subscribe((resp) => {
          console.log('salvouu');
        });
    } else {
      this._daoService
        .postObject(ESPIM_REST_Programs, program)
        .pipe(finalize(() => this._loaderService.hide()))
        .subscribe((resp) => {
          console.log('salvouu');
        });
    }
  }

  public get programValue(): Program {
    return this._currentProgramSubject.value;
  }
}
