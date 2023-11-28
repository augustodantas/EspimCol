import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import {
  CalendarIntervention,
  Intervention,
  MediaIntervention,
  QuestionIntervention,
  TaskIntervention,
} from 'src/app/private/models/intervention.model';
import { SwalService } from 'src/app/services/swal.service';

import { HTMLInterventionElement, InterventionService } from '../intervention.service';
import { ITENS_QUESTION } from './constants';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'esm-navbar',
  styleUrls: ['./navbar.component.scss'],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  over1200px: boolean;
  mobileToggleActivated: boolean;
  addInterventionPopUp = false;
  itensQuestion: any[] = ITENS_QUESTION;
  zoom: number = 1;
  @Output() updateZoom: EventEmitter<number> = new EventEmitter<number>();
  @Output() finishIntervention: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() programId: number = -1;
  @Input() eventId: number = -1;

  texto: string = 'disabled';

  constructor(
    public bsModalRef: BsModalRef,
    private interventionService: InterventionService,
    private readonly _swalService: SwalService,
    private channel: ChannelService
  ) {}

  ngOnInit(): void {
    // this.over1200px = window.innerWidth > 950;
    // if (this.over1200px) this.mobileToggleActivated = false;
    //Método para ficar escutando o canal...
    console.log('navbar' + this.programId + 'ae' + this.eventId);
    this.channel.echo.private('program.' + this.programId).listenForWhisper('navbar' + this.programId + 'ae' + this.eventId, (e: any) => {
      console.log('Eventos', e);
      this.channelUpdate(e);
    });
  }

  addIntervention(type: string, subtype?: number) {
    let intervention: Intervention;
    if (type === 'empty') intervention = new Intervention();
    else if (type === 'media') intervention = new MediaIntervention();
    else if (type === 'question') intervention = new QuestionIntervention({ question_type: subtype });
    else if (type === 'task') intervention = new TaskIntervention();
    else if (type === 'calendar') intervention = new CalendarIntervention();

    let locHtmlIntervention: HTMLInterventionElement = new HTMLInterventionElement(intervention);
    this.interventionService.addIntervention(locHtmlIntervention);

    //enviar dados para o canal...
    let dado: any = {};
    dado.intervention = intervention;
    dado.uuid = locHtmlIntervention.uuid;
    this.sendUpdate(dado);
  }

  nextStateEnabled(): boolean {
    return this.interventionService.states.length > 0 && this.interventionService.currentState > 0;
  }

  previousStateEnabled(): boolean {
    return this.interventionService.currentState < this.interventionService.states.length - 1;
  }

  nextState() {
    this.interventionService.nextState();
  }

  previousState() {
    this.interventionService.previousState();
  }

  zoomIn() {
    if (this.zoom < 1) {
      this.zoom = +(this.zoom + 0.1).toFixed(1);
      this.updateZoom.emit(this.zoom);
    }
  }

  zoomOut() {
    if (this.zoom >= 0.7) {
      this.zoom = +(this.zoom - 0.1).toFixed(1);
      this.updateZoom.emit(this.zoom);
    }
  }

  finish() {
    this.finishIntervention.emit(true);
  }

  close() {
    this._swalService.warning('Tem certeza que deseja sair do editor de intervenções?', 'Sair do editor').then((result) => {
      if (result.isConfirmed) {
        this.bsModalRef.hide();
      }
    });
  }

  debug() {
    // let interventions = this.interventionService.getCurrentState();
    // console.log(interventions[1].conditions);
    // console.log(this.interventionService.getCurrentState());
    // console.log(cloneDeep(this.interventionService.getCurrentState()));
    // console.log(JSON.stringify(this.interventionService.getCurrentState()));
  }

  //Métodos do WebSocket
  // recebe os dados
  channelUpdate(dado: any) {
    console.log('Chegou Navbar');
    let locHtmlIntervention: HTMLInterventionElement = this.interventionService.transformToClass(dado.intervention);
    locHtmlIntervention.uuid = dado.uuid;
    this.interventionService.addIntervention(locHtmlIntervention);
  }

  //Envia os dados
  //O Tipo vai ser a-add r-remove
  sendUpdate(dado: any) {
    console.log('navbar' + this.programId + 'ae' + this.eventId);
    dado.id = this.programId;
    console.log(dado);
    console.log('mandou');
    this.channel.chanelSend(this.programId, 'navbar' + this.programId + 'ae' + this.eventId, dado);
  }
}
