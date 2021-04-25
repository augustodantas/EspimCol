import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Event } from 'src/app/private/models/event.model';
import { Sensor } from 'src/app/private/models/sensor.model';

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
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    if (!this.event.id) {
      this.isOpen = true;
    }

    console.log(this.form);
  }

  updateFormSensors(sensors: Sensor[]) {
    this.form.get('sensors').setValue(sensors);
  }

  deleteEvent() {
    if (this.event.id) {
    } else {
      this.isOpen = !this.isOpen;
      this.form.reset();
      this.removeEvent(this.event);
      return;
    }

    // new SwalComponent({
    //   title: 'Deletar evento?',
    //   text: `Você tem certeza que deseja deletar ${this.event.getTitle()}?`,
    //   type: 'question',
    //   showCancelButton: true,
    //   confirmButtonText: 'Sim',
    //   cancelButtonText: 'Não',
    // })
    //   .show()
    //   .then((result) => {
    //     if (result.value === true) this.programsAddService.delete_event(this.event.getId());
    //   });
  }

  removeEvent(event: Event) {
    this.events.splice(this.index, 1);
  }

  loadDetail() {
    console.log('carregar');
  }
}
