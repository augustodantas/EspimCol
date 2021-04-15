import { DecimalPipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, finalize, switchMap, take } from 'rxjs/operators';
import { ESPIM_REST_Participants } from 'src/app/app.api';
import { ModalConfirmDeleteComponent } from 'src/app/components/modal-confirm-delete/modal-confirm-delete.component';
import { LoaderService } from 'src/app/services/loader.service';

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
  searchTerm: string = '';
  private _modalRef: BsModalRef;

  constructor(
    private daoService: DAOService,
    private readonly _modalService: BsModalService,
    private _loaderService: LoaderService,
    private _toastr: ToastrService
  ) {
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
      this.page = 1;
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
    this.total = response.meta.pagination.total;
    this.pageSize = response.meta.pagination.per_page;
    this.participants = response.data;
  }

  deleteParticipant(participant: Participant) {
    const config: ModalOptions<ModalConfirmDeleteComponent> = {
      class: 'modal-md',
      initialState: {
        title: 'Participante',
        object: participant.alias + '-' + participant.user.email,
      },
    };

    console.log(participant);

    this._modalRef = this._modalService.show(ModalConfirmDeleteComponent, config);

    this._modalRef.content.response.pipe(take(1)).subscribe((value: boolean) => {
      if (value) {
        this._loaderService.show();
        this.daoService
          .deleteObject(this.urlParticipants, participant.id.toString())
          .pipe(finalize(() => this._loaderService.hide()))
          .subscribe((resp) => {
            this.handleChange(resp);
            this._toastr.success(resp.message);
          });
      }
    });
  }
}
