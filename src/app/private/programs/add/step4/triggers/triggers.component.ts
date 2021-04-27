import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Trigger } from 'src/app/private/models/trigger.model';

@Component({
  selector: 'esm-triggers',
  templateUrl: './triggers.component.html',
  styleUrls: ['./triggers.component.scss'],
})
export class TriggersComponent {
  @Output() response: EventEmitter<Trigger> = new EventEmitter<Trigger>();

  choices: any[] = [
    {
      alias: 'daily',
      name: 'Diariamente',
    },
    {
      alias: 'weekly',
      name: 'Semanalmente',
    },
    {
      alias: 'custom',
      name: 'Customizável',
    },
  ];

  form: FormGroup = this.formBuilder.group({
    selectedChoice: this.formBuilder.control(''),
  });

  constructor(private formBuilder: FormBuilder) {}

  addTriggers(triggers: Trigger[]): void {
    triggers.forEach((trigger: Trigger) => {
      this.addTrigger(trigger);
    });
  }

  addTrigger(trigger): void {
    this.response.emit(trigger);
  }
}
