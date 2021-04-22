import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ESPIM_REST_Participants } from 'src/app/app.api';
import { Participant } from 'src/app/private/models/participant.model';
import { SearchComponent } from 'src/app/private/search/search.component';

import { DAOService } from '../../../dao/dao.service';
import { Program } from '../../../models/program.model';
import { ProgramsAddService } from '../programsadd.service';

@Component({
  selector: 'esm-step3',
  templateUrl: './step3.component.html',
})
export class Step3Component implements OnInit {
  @ViewChild('search') searchElement: SearchComponent;
  program: Observable<Program>; // These are the participants of this program
  loading: boolean = true;
  search: Subject<string> = new Subject<string>();
  filterQuery: string = '*';
  participants: Participant[]; // These are the general participants
  programParticipants: Participant[] = [];
  private _subscription$: Subscription;
  urlParticipants: string = ESPIM_REST_Participants;
  letters: string[] = [
    '*',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'Y',
    'Z',
  ];

  constructor(
    private daoService: DAOService,
    private programAddService: ProgramsAddService,
    private router: Router,
    private _route: ActivatedRoute
  ) {
    this.program = this.programAddService.program;
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
        this.participants = response.data;
      });
  }

  isChecked(observer: Participant) {
    return !!(this.programParticipants ? this.programParticipants.find((value) => value.id === observer.id) : undefined);
  }

  ngOnInit() {
    // Trigger first Request
    this.search.next('');

    this._subscription$ = this.programAddService.program.subscribe((programInstance: Program) => {
      this.programParticipants = programInstance.participants;
    });
  }

  ngOnDestroy(): void {
    this._subscription$.unsubscribe();
    this.programAddService.saveLocalStep({ participants: this.programParticipants });
  }

  /**
   * Adds an observer to the programParticipants
   */
  addProgramParticipant(observer: Participant) {
    this.programParticipants.push(observer);
  }

  /**
   * Removes an observer from the programParticipants
   */
  removeProgramParticipant(observer: Participant) {
    this.programParticipants.splice(
      this.programParticipants.findIndex((value: Participant) => value.id === observer.id),
      1
    );
  }

  filter_by(letter: string) {
    if (letter !== this.filterQuery) {
      this.filterQuery = letter;
      this.searchElement.form.get('query').setValue('');
      this.handleChange(letter);
    }
  }

  // Search
  // Filter by Letter
  handleChange($event: any, search: boolean = false): void {
    this.participants = [];
    this.loading = true;
    this.search.next($event);
  }

  getParticipants(): Observable<any> {
    let searchTerm = this.searchElement.form.get('query').value;
    let params = new HttpParams()
      .set('search', searchTerm)
      .set('letter', this.filterQuery)
      .set('orderBy', 'created_at')
      .set('include', 'user')
      .set('sortedBy', 'desc');
    return this.daoService.getObjects(this.urlParticipants, params);
  }

  submit(): void {
    this.programAddService.saveStep({ participants: this.programParticipants });

    this.router.navigate(['./third'], {
      relativeTo: this._route.parent,
    });
  }
}
