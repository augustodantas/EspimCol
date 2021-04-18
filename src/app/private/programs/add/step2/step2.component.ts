import { HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ESPIM_REST_Observers } from 'src/app/app.api';
import { Program } from 'src/app/private/models/program.model';

import { LoginService } from '../../../../security/login/login.service';
import { DAOService } from '../../../dao/dao.service';
import { Observer } from '../../../models/observer.model';
import { ProgramsAddService } from '../programsadd.service';

@Component({
  selector: 'esm-step2',
  templateUrl: './step2.component.html',
})
export class Step2Component implements OnInit, OnDestroy {
  program: Observable<Program>; // These are the observers of this program
  loading: boolean = true;
  search: Subject<string> = new Subject<string>();
  searchTerm: string = '';
  observers: Observer[]; // These are the general observers
  programObservers: Observer[] = [];
  private _subscription$: Subscription;
  urlObservers: string = ESPIM_REST_Observers;

  addObserverForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    name: ['', Validators.required],
    role: [''],
  });

  constructor(
    private daoService: DAOService,
    private programAddService: ProgramsAddService,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {
    this.program = this.programAddService.program;
    this.search
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(() => {
          return this.getObservers();
        })
      )
      .subscribe((response) => {
        this.loading = false;
        this.setObservers(response);
      });
  }

  isChecked(observer: Observer) {
    return !!(this.programAddService.programValue.observers
      ? this.programAddService.programValue.observers.find((value) => value.id === observer.id)
      : undefined);
  }

  isDisabled(observer: Observer) {
    return observer.id === Number.parseInt(this.loginService.userValue.id);
  }

  ngOnInit() {
    // Trigger first Request
    this.search.next('');

    this._subscription$ = this.programAddService.program.subscribe((programInstance: Program) => {
      this.programObservers = programInstance.observers;
    });
  }

  ngOnDestroy(): void {
    this._subscription$.unsubscribe();
  }
  /**
   * Adds an observer
   */
  addObserver(): void {
    // let observer = new Observer(this.addObserverForm.getRawValue());
    // this.dao.postObject(ESPIM_REST_Observers, observer).subscribe(
    //   (data) => {
    //     observer = new Observer(data);
    //     this.observers.push(observer);
    //     this.observers.sort((a: Observer, b: Observer) => a.user.name.localeCompare(b.user.name));
    //     this.addProgramObserver(observer);
    //     // // Sends a success message
    //     // new SwalComponent({
    //     //   title: 'Observador adicionado aos contatos!',
    //     //   type: 'success',
    //     // }).show();
    //     this.addObserverForm.reset();
    //   },
    //   (error) =>
    //     // new SwalComponent({
    //     //   title: 'Falha ao adicionar o contato',
    //     //   type: 'error',
    //     // }).show()
    // );
  }

  /**
   * Adds an observer to the programObservers
   */
  addProgramObserver(observer: Observer) {
    this.programObservers.push(observer);
  }

  /**
   * Removes an observer from the programObservers
   */
  removeProgramObserver(observerId: number) {
    this.programObservers.splice(
      this.programObservers.findIndex((value: Observer) => value.id === observerId),
      1
    );
  }

  /**
   * Handles filtering observers by the alphabet
   * @param letter
   * @param event
   */
  filter_by(letter: string, event: any) {
    // if (letter === '*') {
    //   this.observers = this.programAddService.getObservers();
    //   event.target.classList.add('btn-default-active');
    //   for (const button of this.alphabet1.nativeElement.children) button.classList.remove('btn-default-active');
    //   for (const button of this.alphabet2.nativeElement.children) button.classList.remove('btn-default-active');
    //   return;
    // } else if (this.alphabetAll.nativeElement.classList.contains('btn-default-active')) {
    //   this.alphabetAll.nativeElement.classList.remove('btn-default-active');
    //   this.observers = new Array<Observer>();
    // }
    // if (event.target.classList.contains('btn-default-active')) {
    //   event.target.classList.remove('btn-default-active');
    //   this.observers = this.observers.filter(
    //     (value: Observer) => !value.user.name.startsWith(letter.toLowerCase()) && !value.user.name.startsWith(letter.toUpperCase())
    //   );
    // } else {
    //   event.target.classList.add('btn-default-active');
    //   this.observers = this.observers.concat(
    //     this.programAddService
    //       .getObservers()
    //       .filter((value: Observer) => value.user.name.startsWith(letter.toLowerCase()) || value.user.name.startsWith(letter.toUpperCase()))
    //   );
    //   this.observers.sort((first: Observer, second: Observer) => first.user.name.localeCompare(second.user.name));
    // }
  }

  handleChange($event: any, search: boolean = false): void {
    if (search) {
      this.searchTerm = $event;
    }
    this.observers = [];
    this.loading = true;
    this.search.next($event);
  }

  getObservers(): Observable<any> {
    let params = new HttpParams().set('search', this.searchTerm).set('orderBy', 'created_at').set('sortedBy', 'desc');
    return this.daoService.getObjects(this.urlObservers, params);
  }

  setObservers(response) {
    this.observers = response.data;
  }

  submit(): void {
    // if (this.hasChanged) {
    this.programAddService.saveStep({ observers: this.programAddService.programValue.observers.map((value) => value.id) });
    // }
  }
}
