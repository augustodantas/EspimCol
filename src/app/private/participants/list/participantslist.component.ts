import { DecimalPipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { ESPIM_REST_Participants } from 'src/app/app.api';

import { DAOService } from '../../dao/dao.service';
import { Participant } from '../../models/participant.model';

@Component({
  selector: 'esm-particpants-list',
  templateUrl: './participantslist.component.html',
  providers: [DecimalPipe],
})
export class ParticipantsListComponent {
  urlParticipants: string = ESPIM_REST_Participants;
  participants: Participant[];
  total: number;
  loading: boolean = true;
  page: number = 1;
  pageSize: 10;
  search: Subject<string> = new Subject<string>();
  searchTerm: '';

  constructor(private daoService: DAOService) {
    this.search
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => {
          this.participants = [];
          this.total = 0;
          this.loading = true;
        }),
        switchMap((query) => {
          return this.getParticipants(query);
        })
      )
      .subscribe((response) => {
        this.loading = false;
        this.setParticipants(response);
      });
  }

  handleChange($event: any): void {
    this.search.next($event);
  }

  ngOnInit() {
    this.search.next('');
  }

  getParticipants(query: string = ''): Observable<any> {
    let params = new HttpParams().set('search', query).set('page', this.page?.toString());
    return this.daoService.getObjects(this.urlParticipants, params);
  }

  setParticipants(response) {
    this.total = response.total;
    this.participants = response.data;
  }

  deleteParticipant(participant: Participant) {
    this.daoService.deleteObject(this.urlParticipants, participant.id.toString()).subscribe((response) => {
      this.getParticipants();
    });
  }
}
