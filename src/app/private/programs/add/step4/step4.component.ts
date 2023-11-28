import { Component, OnInit, ViewChildren } from '@angular/core';
import { ESPIM_REST_Programs } from 'src/app/app.api';
import { SwalService } from 'src/app/services/swal.service';
import { isNullOrUndefined } from 'src/app/util/functions';

import { ActiveEvent, Event } from '../../../models/event.model';
import { Program } from '../../../models/program.model';
import { ProgramsAddService } from '../programsadd.service';
import { ActiveEventComponent } from './active-event/active-event.component';
import { PassiveEventComponent } from './passive-event/passive-event.component';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'esm-step4',
  styleUrls: ['./step4.component.scss'],
  templateUrl: './step4.component.html',
})
export class Step4Component implements OnInit {
  @ViewChildren(PassiveEventComponent) passiveEventsComponents: PassiveEventComponent[];
  @ViewChildren(ActiveEventComponent) activeEventsComponents: ActiveEventComponent[];

  passiveEvents: Array<Event>;
  activeEvents: Array<Event>;
  urlPrograms: string = ESPIM_REST_Programs;

  //Atributos referente aos comando de colaboração
  geraId: number = 100;
  programId: number = -1;
  needSet: boolean = true;

  constructor(private programAddService: ProgramsAddService, private _swalService: SwalService, private channel: ChannelService) {}

  trackByFn(index, item) {
    return index;
  }

  ngOnInit() {
    this.programAddService.program.subscribe((programInstance: Program) => {
      this.passiveEvents = programInstance.passiveEvents;
      this.activeEvents = programInstance.activeEvents;

      //Método para ficar escutando o canal...
      if (this.needSet && programInstance.id) {
        this.channel.echo.private('program.' + programInstance.id).listenForWhisper('step4' + programInstance.id, (e: any) => {
          console.log('Eventos', e);
          this.channelUpdate(e);
        });
        console.log(programInstance);
        this.needSet = false;
        this.programId = programInstance.id;
      }
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
    //Tem que mudar para criar o evento no banco antes...
    let locEvent: Event = new Event();
    locEvent.id = this.geraId;
    locEvent.title = 'Coleta por Sensor ' + this.geraId;
    this.geraId++;

    this.passiveEvents.push(locEvent);
    this.sendUpdate(locEvent);
  }

  addActiveEvent() {
    //Tem que mudar para criar o evento no banco antes...
    let locEvent: ActiveEvent = new ActiveEvent();
    locEvent.id = this.geraId;
    locEvent.title = 'Evento Ativo ' + this.geraId;
    this.geraId++;

    this.activeEvents.push(locEvent);
    this.sendUpdate(locEvent);
  }

  submit() {
    let valid = true;

    let errors = [];

    const dados = {
      activeEvents: this.activeEventsComponents.map((eventComponent) => {
        if (!eventComponent.validateForm()) {
          valid = false;
          errors.push({ field: 'Evento', message: 'Existem erros de cadastro, por favor verifique os campos em vermelho.' });
        }

        return eventComponent.form.value;
      }),
      passiveEvents: this.passiveEventsComponents.map((eventComponent) => {
        if (!eventComponent.validateForm()) {
          valid = false;
          errors.push({ field: 'Coleta por sensores', message: 'Existem erros de cadastro, por favor verifique os campos em vermelho.' });
        }

        return eventComponent.form.value;
      }),
    };

    if (isNullOrUndefined(this.programAddService.programValue.title) || this.programAddService.programValue.title == '') {
      errors.push({ field: 'Título do programa', message: 'Campo obrigatório.' });
      valid = false;
    }

    if (isNullOrUndefined(this.programAddService.programValue.observers) || this.programAddService.programValue.observers.length == 0) {
      errors.push({ field: 'Observadores', message: 'Selecione ao menos 1 observador para o programa' });
      valid = false;
    }

    if (isNullOrUndefined(this.programAddService.programValue.users) || this.programAddService.programValue.users.length == 0) {
      errors.push({ field: 'Participantes', message: 'Selecione ao menos 1 participante para o programa' });
      valid = false;
    }

    if (!valid) {
      this._swalService.showFieldErrors('Aviso', errors);
    } else {
      this.programAddService.saveLocalStep(dados);
      this.programAddService.saveProgram();
    }
  }

  //Métodos do WebSocket
  // recebe os dados
  channelUpdate(dado: any) {
    console.log('Chegou evento');
    if (dado.evento.type == 'active') {
      this.activeEvents.push(dado.evento);
    } else {
      this.passiveEvents.push(dado.evento);
    }
  }

  //Envia os dados
  //O Tipo vai ser a-add r-remove
  sendUpdate(evento: Event) {
    let dado: any = {};
    dado.id = this.programId;
    console.log(evento);
    dado.evento = evento;
    console.log('mandou');
    this.channel.chanelSend(this.programId, 'step4' + this.programId, dado);
  }
}
