import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DAOService } from '../dao/dao.service';

@Injectable()
export class ObserversService extends DAOService {
  getObserverByEmail(urlObject: string, email: string) {
    const params = new HttpParams().set('search', email);
    return this.http.get(urlObject, { params });
  }

  authenticate(urlObject: string, token: string) {
    return this.http.post(urlObject, { token: token });
  }

  fetchUser(urlObject: string, params: HttpParams): Observable<any> {
    return this.http.get<any>(urlObject, { params });
  }
}
