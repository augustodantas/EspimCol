import { Component, OnInit, ViewChildren } from '@angular/core';
import { ESPIM_REST_Programs } from 'src/app/app.api';

import { ActiveEvent, Event } from '../../../models/event.model';
import { Program } from '../../../models/program.model';
import { ProgramsAddService } from '../programsadd.service';
import { ActiveEventComponent } from './active-event/active-event.component';
import { PassiveEventComponent } from './passive-event/passive-event.component';

@Component({
  selector: 'esm-step4',
  styleUrls: ['./step4.component.scss'],
  templateUrl: './step4.component.html',
})
export class Step4Component implements OnInit {
  passiveEvents: Array<Event>;
  activeEvents: Array<Event>;
  urlPrograms: string = ESPIM_REST_Programs;
  @ViewChildren(PassiveEventComponent) passiveEventsComponents: PassiveEventComponent[];
  @ViewChildren(ActiveEventComponent) activeEventsComponents: ActiveEventComponent[];

  constructor(private programAddService: ProgramsAddService) {}

  trackByFn(index, item) {
    return index;
  }

  ngOnInit() {
    this.programAddService.program.subscribe((programInstance: Program) => {
      this.passiveEvents = programInstance.passiveEvents;
      this.activeEvents = programInstance.activeEvents;
    });
  }

  ngOnDestroy(): void {
    const dados = {
      activeEvents: this.activeEventsComponents.map((eventComponent) => {
        return eventComponent.form.value;
      }),
      passiveEvents: this.passiveEventsComponents.map((eventComponent) => {
        return eventComponent.form.value;
      }),
    };

    this.programAddService.saveLocalStep(dados);
  }

  addPassiveEvent() {
    this.passiveEvents.push(new Event());
  }

  addActiveEvent() {
    this.activeEvents.push(new ActiveEvent());
  }

  submit() {
    let valid = true;

    const dados = {
      activeEvents: this.activeEventsComponents.map((eventComponent) => {
        if (!eventComponent.validateForm()) {
          valid = false;
        }
        return eventComponent.form.value;
      }),
      passiveEvents: this.passiveEventsComponents.map((eventComponent) => {
        if (!eventComponent.validateForm()) {
          valid = false;
        }
        return eventComponent.form.value;
      }),
    };

    this.programAddService.saveLocalStep(dados);

    this.programAddService.saveProgram();

    // const dados = SENSORS.filter((v, i) => this.passiveEvents.sensors.value[i]).join('; ');

    // if (this.programsAddService.getParticipantsInstance() && this.programsAddService.getParticipantsInstance().length > 0) {
    // this.programsAddService.saveStep({ editor: null, beingEdited: false });
    // new SwalComponent({
    //   type: 'success',
    // })
    //   .show()
    //   .then((_) => this.router.navigate(['/private']));
    // } else {
    // new SwalComponent({
    //   title: 'Você não adicionou participantes, tem certeza que deseja continuar?!',
    //   type: 'warning',
    //   allowOutsideClick: false,
    //   allowEscapeKey: false,
    //   focusCancel: true,
    //   showCancelButton: true,
    // })
    //   .show()
    //   .then((response) => {
    //     if (response.value === true) {
    //       this.programsAddService.saveStep({ editor: null, beingEdited: false });
    //       new SwalComponent({
    //         type: 'success',
    //       })
    //         .show()
    //         .then((_) => this.router.navigate(['/private']));
    //     }
    //   });
    // }
  }
}
