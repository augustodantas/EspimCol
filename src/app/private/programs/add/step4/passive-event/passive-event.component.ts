import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Event } from 'src/app/private/models/event.model';
import { Sensor } from 'src/app/private/models/sensor.model';
import { Trigger } from 'src/app/private/models/trigger.model';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'esm-passive-event',
  templateUrl: './passive-event.component.html',
  styleUrls: ['./passive-event.component.scss', './../step4.component.scss'],
})
export class PassiveEventComponent implements OnInit {
  @Input() event: Event;
  @Input() events: Event[];
  @Input() index: number;
  isOpen: boolean = false;

  form: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    description: this.formBuilder.control(''),
    sensors: this.formBuilder.control([]),
    triggers: this.formBuilder.array([]),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    if (!this.event.id) {
      this.isOpen = true;
    }
  }

  updateFormSensors(sensors: Sensor[]) {
    this.form.get('sensors').setValue(sensors);
  }

  adicionarTrigger(value: Trigger): void {
    console.log(value);
    this.triggerFormArray.push(this.formBuilder.control(value));
  }

  removerTrigger(index: number): void {
    this.triggerFormArray.removeAt(index);
  }

  get triggerFormArray(): FormArray {
    return this.form.get('triggers') as FormArray;
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
    console.log('carregar');
  }
}
