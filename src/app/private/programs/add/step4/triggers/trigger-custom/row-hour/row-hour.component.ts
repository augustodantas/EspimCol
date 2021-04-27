import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Day, Hour } from 'src/app/private/models/date.model';
import { NOTIFICATIONS_TYPES } from 'src/app/private/programs/constants';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'esm-row-hour',
  templateUrl: './row-hour.component.html',
  styleUrls: ['./row-hour.component.scss'],
})
export class RowHourComponent implements OnInit {
  @Input() weekDay: Day;
  @Input() hour: Hour;
  @Input() index: number;

  @Output() removeHour: EventEmitter<number> = new EventEmitter<number>();
  @Output() response: EventEmitter<Hour> = new EventEmitter<Hour>();

  notificationTypes: any[] = NOTIFICATIONS_TYPES;
  uid: string = uuid();

  form: FormGroup = this.formBuilder.group({
    time: ['', Validators.required],
    notificationType: ['', Validators.required],
    timeout: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
      this.response.emit(this.form.value);
    });
  }

  remove(): void {
    this.removeHour.emit(this.index);
  }

  validateForm(): boolean {
    this.form.markAllAsTouched();

    return this.form.valid;
  }

  resetForm(): void {
    this.form.reset();
  }
}
