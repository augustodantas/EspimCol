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
    color: this.formBuilder.control(''),
    description: this.formBuilder.control(''),
    sensors: this.formBuilder.array([]),
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
      console.log(this.event);
      this.event.sensors.forEach((it) => this.adicionarSensor(it as Sensor));
    }
  }

  updateFormSensors(sensors: Sensor[]) {
    this.sensorFormArray.clear();
    sensors.forEach((it) => this.adicionarSensor(it));
  }

  adicionarSensor(sensor: Sensor) {
    this.sensorFormArray.push(this.formBuilder.control(sensor));
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

  get sensorFormArray(): FormArray {
    return this.form.get('sensors') as FormArray;
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
}
