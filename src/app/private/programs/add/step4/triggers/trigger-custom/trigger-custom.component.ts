import { Component, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Hour } from 'src/app/private/models/hour.model';
import { NOTIFICATIONS_TYPES, WEEKLY_DAYS } from 'src/app/private/programs/constants';
import { minLengthArray } from 'src/app/util/functions';

import { RowHourComponent } from './row-hour/row-hour.component';

@Component({
  selector: 'esm-trigger-custom',
  templateUrl: './trigger-custom.component.html',
  styleUrls: ['./trigger-custom.component.scss'],
})
export class TriggerCustomComponent {
  @ViewChildren(RowHourComponent) hourRows: RowHourComponent[];

  form: FormGroup = this.formBuilder.group({
    days: this.formBuilder.array([], minLengthArray(1)),
  });

  weeklyDays: any[] = WEEKLY_DAYS;
  notificationTypes: any[] = NOTIFICATIONS_TYPES;

  constructor(private formBuilder: FormBuilder) {
    this.weeklyDays.forEach(() => {
      (this.form.get('days') as FormArray).push(this.formBuilder.control(false));
    });
  }

  submit(): void {
    let dados = this.weeklyDays.filter((v, i) => this.form.controls.days.value[i]);

    // Validate hours
    let validHours = false;
    this.hourRows.forEach((hourRow) => {
      if (!hourRow.validateForm()) {
        validHours = false;
      }
    });

    console.log(this.form.get('days').value);
    // Validate days selected
    this.form.markAllAsTouched();
    this.form.valid;
  }

  selectWeekDay($event, weekDay: any): void {
    if ($event.target.checked) {
      this.addHour(weekDay);
    } else {
      weekDay.hours = [];
    }
  }

  addHour(weekDay: any): void {
    if (!weekDay.hours) {
      weekDay.hours = [];
    }
    weekDay.hours.push(new Hour());
  }

  removeHour(weekDay: any, index: number): void {
    weekDay.hours.splice(index, 1);
  }

  updateHour($event, weekDay: any, index: number) {
    Object.assign(weekDay.hours[index], $event);
  }
}
