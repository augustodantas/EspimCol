import { DecimalPipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, finalize, switchMap } from 'rxjs/operators';
import { ESPIM_REST_Levels } from 'src/app/app.api';
import { LoaderService } from 'src/app/services/loader.service';
import { SwalService } from 'src/app/services/swal.service';

import { DAOService } from '../../dao/dao.service';
import { Level } from '../../models/level.model';

@Component({
  selector: 'esm-levels-list',
  templateUrl: './list.component.html',
  providers: [DecimalPipe],
})
export class LevelListComponent {
  url: string = ESPIM_REST_Levels;
  levels: Level[];
  loading: boolean = true;
  search: Subject<string> = new Subject<string>();
  searchTerm: string = '';

  constructor(
    private daoService: DAOService,
    private _loaderService: LoaderService,
    private readonly _swalService: SwalService,
    private _toastr: ToastrService
  ) {
    this.search
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(() => {
          return this.getLevels();
        })
      )
      .subscribe((response) => {
        this.loading = false;
        this.setLevels(response);
      });
  }

  handleChange($event: any, search: boolean = false): void {
    if (search) {
      this.searchTerm = $event;
    }
    this.levels = [];
    this.loading = true;
    this.search.next($event);
  }

  ngOnInit() {
    this.search.next('');
  }

  getLevels(): Observable<any> {
    let params = new HttpParams().set('search', this.searchTerm).set('orderBy', 'created_at').set('sortedBy', 'desc');
    return this.daoService.getObjects(this.url, params);
  }

  setLevels(response) {
    this.levels = response.data;
  }

  deleteItem(level: Level) {
    this._swalService.confirmDelete(`${level.name} - ${level.min_points} até ${level.max_points} pontos`, 'level').then((result) => {
      if (result.isConfirmed) {
        this._loaderService.show();
        this.daoService
          .deleteObject(this.url, level.id.toString())
          .pipe(finalize(() => this._loaderService.hide()))
          .subscribe((resp) => {
            this.handleChange(resp);
            this._toastr.success(resp.message);
          });
      }
    });
  }
}
