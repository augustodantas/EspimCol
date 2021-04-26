import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NOTIFICATIONS_TYPES } from 'src/app/private/programs/constants';
import { minLengthArray } from 'src/app/util/functions';

@Component({
  selector: 'esm-trigger-weekly',
  templateUrl: './trigger-weekly.component.html',
  styleUrls: ['./trigger-weekly.component.scss'],
})
export class TriggerWeeklyComponent {
  form: FormGroup = this.formBuilder.group({
    time: ['', Validators.required],
    notificationType: ['', Validators.required],
    timeout: ['', Validators.required],
    days: this.formBuilder.array([], minLengthArray(1)),
  });

  weeklyDays: any[] = [
    {
      alias: 'sunday',
      name: 'Domingo',
    },
    {
      alias: 'monday',
      name: 'Segunda',
    },
    {
      alias: 'tuesday',
      name: 'Terça-feira',
    },
    {
      alias: 'wednesday',
      name: 'Quarta-feira',
    },
    {
      alias: 'thursday',
      name: 'Quinta-feira',
    },
    {
      alias: 'friday',
      name: 'Sexta-feira',
    },
    {
      alias: 'saturday',
      name: 'Sábado',
    },
  ];
  notificationTypes: any[] = NOTIFICATIONS_TYPES;

  constructor(private formBuilder: FormBuilder) {
    this.weeklyDays.forEach(() => {
      (this.form.get('days') as FormArray).push(this.formBuilder.control(false));
    });
  }

  submit(): void {
    let diasSelecionados = this.weeklyDays.filter((v, i) => this.form.controls.days.value[i]);
    this.form.markAllAsTouched();

    this.form.valid;

    console.log(this.form);
  }
}
