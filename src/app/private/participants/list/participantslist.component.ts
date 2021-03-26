import { DecimalPipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ESPIM_REST_Participants } from 'src/app/app.api';

import { DAOService } from '../../dao/dao.service';
import { Participant } from '../../models/participant.model';

@Component({
  selector: 'esm-particpants-list',
  templateUrl: './participantslist.component.html',
  providers: [DecimalPipe],
})
export class ParticipantsListComponent {
  @ViewChild('modalDelete') modalDelete: any;
  urlParticipants: string = ESPIM_REST_Participants;
  participants: Participant[];
  total: number;
  loading: boolean = true;
  page: number = 1;
  pageSize: 10;
  search: Subject<string> = new Subject<string>();
  searchTerm: string = '';

  constructor(private daoService: DAOService, private _modalService: NgbModal) {
    this.search
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(() => {
          return this.getParticipants();
        })
      )
      .subscribe((response) => {
        this.loading = false;
        this.setParticipants(response);
      });
  }

  handleChange($event: any, search: boolean = false): void {
    if (search) {
      this.total = null;
      this.searchTerm = $event;
    }
    this.participants = [];
    this.loading = true;
    this.search.next($event);
  }

  ngOnInit() {
    this.search.next('');
  }

  getParticipants(): Observable<any> {
    let params = new HttpParams()
      .set('search', this.searchTerm)
      .set('page', this.page?.toString())
      .set('orderBy', 'created_at')
      .set('sortedBy', 'desc');
    return this.daoService.getObjects(this.urlParticipants, params);
  }

  setParticipants(response) {
    this.total = response.total;
    this.pageSize = response.per_page;
    this.participants = response.data;
  }

  deleteParticipant(participant: Participant) {
    this._modalService.open(this.modalDelete);

    // this.daoService.deleteObject(this.urlParticipants, participant.id.toString()).subscribe(() => {
    //   this.getParticipants();
    // });
  }
}
