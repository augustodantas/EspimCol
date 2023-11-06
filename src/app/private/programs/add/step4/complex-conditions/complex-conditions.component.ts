import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import cloneDeep from 'lodash/cloneDeep';
import { ComplexCondition } from 'src/app/private/models/event.model';
import { v4 as uuid } from 'uuid';

import { COMPLEX_CONDITIONS } from '../../../constants';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'esm-complex-conditions',
  templateUrl: './complex-conditions.component.html',
  styleUrls: ['./complex-conditions.component.scss'],
})
export class ComplexConditionComponent implements OnInit {
  complexConditions: { text: string; complexConditions: ComplexCondition[] }[] = cloneDeep(COMPLEX_CONDITIONS);
  uid: string = uuid();
  openComplex: boolean = false;

  @Input() eventComplexConditions: ComplexCondition[];
  @Output() response: EventEmitter<ComplexCondition[]> = new EventEmitter<ComplexCondition[]>();
  @Input() programId: number;
  @Input() eventId: number;

  constructor(private channel: ChannelService) {}

  ngOnInit() {
    if (this.eventComplexConditions) {
      this.eventComplexConditions.forEach((it) => {
        // Atualiza o [value] da lista complex conditions
        this.complexConditions
          .map((item) => item.complexConditions)
          .flat(1)
          .find((item) => item.condition == it.condition && item.action == it.action).value = true;
      });
    }

    //Método para ficar escutando o canal...
    this.channel.echo
      .private('program.' + this.programId)
      .listenForWhisper('complexCondition' + this.programId + 'ae' + this.eventId, (e: any) => {
        console.log('Sensores', e);
        this.channelUpdate(e);
      });
  }

  changeCondition() {
    let selectedComplexConditions = this.complexConditions
      .map((item) => item.complexConditions)
      .flat(1)
      .filter((it) => it.value)
      .map((item) => {
        return {
          condition: item.condition,
          action: item.action,
        } as ComplexCondition;
      });

    let dado: any = {};
    dado.complexCondition = selectedComplexConditions;
    this.sendUpdate(dado);

    this.response.emit(selectedComplexConditions);
  }

  //Métodos do WebSocket
  // recebe os dados
  channelUpdate(dado: any) {
    console.log('Chegou Complex Condition');
    this.complexConditions = cloneDeep(COMPLEX_CONDITIONS);
    dado.complexCondition.forEach((it: any) => {
      // Atualiza o [value] da lista complex conditions
      this.complexConditions
        .map((item) => item.complexConditions)
        .flat(1)
        .find((item) => item.condition == it.condition && item.action == it.action).value = true;
    });
    this.response.emit(dado.complexCondition);
  }

  //Envia os dados
  //O Tipo vai ser a-add r-remove
  sendUpdate(dado: any) {
    dado.id = this.programId;
    dado.event = this.eventId;
    console.log('enviou complex condition..');
    this.channel.chanelSend(this.programId, 'complexCondition' + this.programId + 'ae' + this.eventId, dado);
  }
}
