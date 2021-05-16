import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { take } from 'rxjs/operators';
import { ActiveEvent, Event } from 'src/app/private/models/event.model';
import { Intervention } from 'src/app/private/models/intervention.model';
import { Trigger } from 'src/app/private/models/trigger.model';

import { InterventionComponent } from '../intervention/intervention.component';

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
    type: this.formBuilder.control(''),
    color: this.formBuilder.control(''),
    description: this.formBuilder.control(''),
    triggers: this.formBuilder.array([]),
    interventions: this.formBuilder.control([]),
  });

  constructor(private formBuilder: FormBuilder, private readonly _modalService: BsModalService) {}

  ngOnInit(): void {
    // Verifica se é um "NOVO EVENTO"
    if (
      !this.event.title &&
      !this.event.id &&
      this.event.triggers.length == 0 &&
      !this.event.color &&
      this.event.interventions.length == 0
    ) {
      this.isOpen = true;
    }

    if (this.event) {
      this.form.patchValue(this.event);
      // Adiciona as triggers e sensors ao evento
      this.event.triggers.forEach((it) => this.adicionarTrigger(new Trigger(it)));
    }

    // this.goToInterventions();
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
      initialState: {
        interventionsToInit: this.form.get('interventions').value,
      },
    };

    this._modalInterventionRef = this._modalService.show(InterventionComponent, config);

    this._modalInterventionRef.content.response.pipe(take(1)).subscribe((value: Intervention[]) => {
      this.form.get('interventions').setValue(value);
    });
  }
}
