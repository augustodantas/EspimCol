import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cron } from 'src/app/private/models/cron.model';
import { Trigger } from 'src/app/private/models/trigger.model';
import { NOTIFICATIONS_TYPES } from 'src/app/private/programs/constants';

@Component({
  selector: 'esm-trigger-daily',
  templateUrl: './trigger-daily.component.html',
  styleUrls: ['./trigger-daily.component.scss'],
})
export class TriggerDailyComponent implements OnInit {
  @Output() response: EventEmitter<Trigger> = new EventEmitter<Trigger>();

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
      let cron = new Cron();
      cron.convertFromForm(this.form.get('time').value);

      console.log(cron.toString());

      let trigger = new Trigger({
        condition: cron.toString(),
        priority: this.form.get('notificationType').value,
        timeout: this.form.get('timeout').value,
      });

      this.response.emit(trigger);
      this.form.reset();
    }
  }
}
