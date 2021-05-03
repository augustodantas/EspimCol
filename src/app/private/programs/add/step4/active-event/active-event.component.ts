import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ActiveEvent, Event } from 'src/app/private/models/event.model';
import { Trigger } from 'src/app/private/models/trigger.model';

import { ProgramsAddService } from '../../programsadd.service';
import { InterventionComponent } from '../intervention/intervention.component';
import { InterventionService } from '../intervention/intervention.service';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'esm-active-event',
  templateUrl: './active-event.component.html',
  styleUrls: ['./active-event.component.scss', './../step4.component.scss'],
})
export class ActiveEventComponent implements OnInit {
  @Input() event: ActiveEvent;
  @Input() events: Event[];
  @Input() index: number;
  isOpen: boolean = false;
  private _modalInterventionRef: BsModalRef;
  showIntervention: boolean = false;

  form: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    color: this.formBuilder.control(''),
    description: this.formBuilder.control(''),
    triggers: this.formBuilder.array([]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private readonly programAddService: ProgramsAddService,
    private readonly _modalService: BsModalService,
    private readonly interventionService: InterventionService,
    private activatedRoute: ActivatedRoute,
    private chRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (!this.event.id) {
      this.isOpen = true;
    }

    if (this.event) {
      this.form.patchValue(this.event);
      // Adiciona as triggers e sensors ao evento
      this.event.triggers.forEach((it) => this.adicionarTrigger(new Trigger(it)));
    }
  }

  adicionarTrigger(value: Trigger): void {
    this.triggerFormArray.push(this.formBuilder.control(value));
  }

  removerTrigger(index: number): void {
    this.triggerFormArray.removeAt(index);
  }

  get triggerFormArray(): FormArray {
    return this.form.get('triggers') as FormArray;
  }

  get formValue(): any {
    return this.form.value;
  }

  deleteEvent() {
    if (this.event.id) {
    } else {
      this.isOpen = !this.isOpen;
      this.form.reset();
      this.removeEvent(this.event);
      return;
    }
  }

  removeEvent(event: Event) {
    this.events.splice(this.index, 1);
  }

  loadDetail() {
    this.isOpen = !this.isOpen;
    console.log('carregar');
  }

  validateForm(): boolean {
    this.form.markAllAsTouched();
    return this.form.valid;
  }

  updateColor(color: string): void {
    this.form.get('color').setValue(color);
  }

  goToInterventions(): void {
    const config: ModalOptions<InterventionComponent> = {
      class: 'modal-fullscreen modal-intervention',
      keyboard: false,
      ignoreBackdropClick: true,
      initialState: {},
    };

    this.interventionService.init(this.programAddService.programValue.id, this.event, this.event.interventions);

    this._modalInterventionRef = this._modalService.show(InterventionComponent, config);

    // this._modalRef.content.response.pipe(take(1)).subscribe((value: boolean) => {
    //   if (value) {
    //     this._loaderService.show();
    //     this.daoService
    //       .deleteObject(this.urlParticipants, participant.id.toString())
    //       .pipe(finalize(() => this._loaderService.hide()))
    //       .subscribe((resp) => {
    //         this.handleChange(resp);
    //         this._toastr.success(resp.message);
    //       });
    //   }
    // });
  }

  // closeIntervention(): void {
  //   this.showIntervention = false;
  //   this.chRef.detectChanges();
  // }
}
