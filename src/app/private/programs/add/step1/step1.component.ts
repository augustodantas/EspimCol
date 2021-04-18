import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { Program } from '../../../models/program.model';
import { ProgramsAddService } from '../programsadd.service';

@Component({
  selector: 'esm-step1',
  templateUrl: './step1.component.html',
})
export class Step1Component implements OnDestroy {
  program: Observable<Program>;
  form: FormGroup;
  private _subscription$: Subscription;

  constructor(
    private programAddService: ProgramsAddService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      isPublic: [false],
      beginDate: [''],
      beginTime: [''],
      endDate: [''],
      endTime: [''],
    });

    this.program = this.programAddService.program;

    this._subscription$ = this.programAddService.program.subscribe((programInstance: Program) => {
      this.setProgram(programInstance);
    });
  }

  ngOnDestroy(): void {
    this._subscription$.unsubscribe();
  }

  setProgram(program: Program) {
    if (!program || program.id === -1) return;
    this.form.patchValue({ ...program });
  }
  submit(): void {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.programAddService.saveStep(this.form.value);

      this.router.navigate(['./second'], {
        relativeTo: this._route.parent,
      });
    }
  }
}
