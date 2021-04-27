import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Event } from 'src/app/private/models/event.model';
import { Trigger } from 'src/app/private/models/trigger.model';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'esm-active-event',
  templateUrl: './active-event.component.html',
  styleUrls: ['./active-event.component.scss', './../step4.component.scss'],
})
export class ActiveEventComponent implements OnInit {
  @Input() event: Event;
  @Input() events: Event[];
  @Input() index: number;
  isOpen: boolean = false;

  form: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    color: this.formBuilder.control(''),
    description: this.formBuilder.control(''),
    triggers: this.formBuilder.array([]),
  });

  constructor(private formBuilder: FormBuilder) {}

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

  goToInterventions(): void {}
}
