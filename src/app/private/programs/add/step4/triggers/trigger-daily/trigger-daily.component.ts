import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NOTIFICATIONS_TYPES } from 'src/app/private/programs/constants';

@Component({
  selector: 'esm-trigger-daily',
  templateUrl: './trigger-daily.component.html',
  styleUrls: ['./trigger-daily.component.scss'],
})
export class TriggerDailyComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    time: ['', Validators.required],
    notificationType: ['', Validators.required],
    timeout: ['', Validators.required],
  });

  notificationTypes: any[] = NOTIFICATIONS_TYPES;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  submit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.log('DISPAROU');
    }
  }
}
