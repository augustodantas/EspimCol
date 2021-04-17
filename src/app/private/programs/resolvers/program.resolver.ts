import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ESPIM_REST_Programs } from 'src/app/app.api';
import { LoaderService } from 'src/app/services/loader.service';

import { DAOService } from '../../dao/dao.service';

@Injectable()
export class ProgramResolver implements Resolve<any> {
  urlPrograms: string = ESPIM_REST_Programs;

  constructor(private _daoService: DAOService, private _loaderService: LoaderService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const programId = route.params.id;
    return this._daoService.getObject(this.urlPrograms, programId).pipe(finalize(() => this._loaderService.hide()));
  }
}
