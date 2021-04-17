import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginService } from '../../../../security/login/login.service';
import { DAOService } from '../../../dao/dao.service';
import { Observer } from '../../../models/observer.model';
import { Program } from '../../../models/program.model';
import { ProgramsAddService } from '../programsadd.service';

@Component({
  selector: 'esm-step2',
  templateUrl: './step2.component.html',
})
export class Step2Component implements OnInit {
  observers: Observer[]; // These are the general observers
  programObservers: Observer[]; // These are the observers of this program

  hasChanged = false; // True if some change was applied

  addObserverForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    name: ['', Validators.required],
    role: [''],
  });

  @ViewChild('alphabet1') alphabet1: ElementRef;
  @ViewChild('alphabet2') alphabet2: ElementRef;
  @ViewChild('alphabetAll') alphabetAll: ElementRef;

  constructor(
    private dao: DAOService,
    private programAddService: ProgramsAddService,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {}

  /**
   * Checks if @observer is also in programObservers
   * @param observer
   */
  isChecked(observer: Observer) {
    return !!(this.programObservers ? this.programObservers.find((value) => value.id === observer.id) : undefined);
  }

  /**
   * Checks if @observer is the current user. If so, he shall not be able to deselect himself
   * @param observer
   */
  isDisabled(observer: Observer) {
    return observer.id === Number.parseInt(this.loginService.userValue.id);
  }

  ngOnInit() {
    this.observers = this.programAddService.getObservers();
    this.programObservers = this.programAddService.getObserversInstance();
    console.log(this.programObservers);

    /**
     * Subscribes to changes in the program (whenever the program in programsadd.service.ts is changed, it reflects here too)
     */
    this.programAddService.getProgramObservable().subscribe((programInstance: Program) => {
      this.observers = this.programAddService.getObservers();
      this.programObservers = this.programAddService.getObserversInstance();
      console.log(this.programObservers);
    });
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
  addProgramObserver(observer: Observer | number) {
    if (!(observer instanceof Observer)) observer = this.observers.find((value: Observer) => value.id === observer);

    this.programObservers.push(observer);
    this.programObservers.sort((a: Observer, b: Observer) => a.user.name.localeCompare(b.user.name));

    this.hasChanged = true;
  }

  /**
   * Removes an observer from the programObservers
   */
  removeProgramObserver(observerId: number) {
    this.programObservers.splice(
      this.programObservers.findIndex((value: Observer) => value.id === observerId),
      1
    );

    this.hasChanged = true;
  }

  /**
   * Handles filtering observers by the alphabet
   * @param letter
   * @param event
   */
  filter_by(letter: string, event: any) {
    if (letter === '*') {
      this.observers = this.programAddService.getObservers();
      event.target.classList.add('btn-default-active');
      for (const button of this.alphabet1.nativeElement.children) button.classList.remove('btn-default-active');
      for (const button of this.alphabet2.nativeElement.children) button.classList.remove('btn-default-active');
      return;
    } else if (this.alphabetAll.nativeElement.classList.contains('btn-default-active')) {
      this.alphabetAll.nativeElement.classList.remove('btn-default-active');
      this.observers = new Array<Observer>();
    }
    if (event.target.classList.contains('btn-default-active')) {
      event.target.classList.remove('btn-default-active');
      this.observers = this.observers.filter(
        (value: Observer) => !value.user.name.startsWith(letter.toLowerCase()) && !value.user.name.startsWith(letter.toUpperCase())
      );
    } else {
      event.target.classList.add('btn-default-active');
      this.observers = this.observers.concat(
        this.programAddService
          .getObservers()
          .filter((value: Observer) => value.user.name.startsWith(letter.toLowerCase()) || value.user.name.startsWith(letter.toUpperCase()))
      );
      this.observers.sort((first: Observer, second: Observer) => first.user.name.localeCompare(second.user.name));
    }
  }

  /**
   * Handles searching observers by the alphabet
   * @param event
   */
  search_by(event: any) {
    this.observers = this.programAddService.getObservers().filter((value: Observer) => value.user.name.includes(event.target.value));
  }

  submit(): void {
    if (this.hasChanged) {
      this.programAddService.saveStep({ observers: this.programObservers.map((value) => value.id) });
    }
  }
}
