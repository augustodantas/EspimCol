import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Program } from '../../../models/program.model';
import { ProgramsAddService } from '../programsadd.service';

@Component({
  selector: 'esm-step1',
  templateUrl: './step1.component.html',
})
export class Step1Component implements OnInit {
  program: Program;
  form: FormGroup;

  private _subscription$: Subscription;

  constructor(
    private programAddService: ProgramsAddService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: [''],
      isPublic: [false],
      beginDate: ['', [Validators.required]],
      beginTime: [],
      endDate: [null],
      endTime: [null],
    });

    this._subscription$ = this._route.parent.data.subscribe((resolvers) => {
      this.program = resolvers.program.data;
    });
  }

  ngOnDestroy(): void {
    this._subscription$.unsubscribe();
  }

  ngOnInit() {
    this.setProgram(this.program);

    // this.programAddService.getProgramObservable().subscribe((programInstance: Program) => this.setProgram(programInstance));
  }

  setProgram(program: Program) {
    if (!program || program.id === -1) return;
    this.form.patchValue({ ...program });

    console.log(this.form.getRawValue());
  }
  submit(): void {
    if (this.form.valid) {
      const dirtyProps: any = {};
      let hasDirtyProp = false;

      // if (this.form.get(prop).dirty) {
      //   if (prop === 'beginDate' || prop === 'beginTime')
      //     dirtyProps.starts = this.dateConverterService.toUnixTimeStamp(
      //       this.form.get('beginDate').value,
      //       this.form.get('beginTime').value
      //     );
      //   else if (prop === 'endDate' || prop === 'endTime')
      //     dirtyProps.ends = this.dateConverterService.toUnixTimeStamp(
      //       this.form.get('endDate').value,
      //       this.form.get('endTime').value
      //     );
      //   else dirtyProps[prop] = this.form.get(prop).value;

      //   hasDirtyProp = true;
      // }

      // Checks if programs is not empty
      for (const prop in this.form.controls) if (hasDirtyProp) this.programAddService.saveStep(dirtyProps);
      this.router.navigate([this.router.url.substring(0, this.router.url.lastIndexOf('/')) + '/second']).then();
    } else this.form.markAllAsTouched();
  }
}
