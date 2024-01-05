import { Component, Input, OnInit } from '@angular/core';
import { QuestionIntervention } from 'src/app/private/models/intervention.model';

import { InterventionService } from '../../intervention.service';
import { ChannelService } from 'src/app/services/channel.service';
import { DAOService } from 'src/app/private/dao/dao.service';
import { ESPIM_REST_Programs } from 'src/app/app.api';

@Component({
  selector: 'esm-multiple-choice',
  templateUrl: './multiple-choice.component.html',
})
export class MultipleChoiceComponent implements OnInit {
  @Input() intervention: QuestionIntervention;
  @Input() graphIndex: number;
  @Input() programId: number = 0;

  constructor(private interventionService: InterventionService, private channel: ChannelService, private dao: DAOService) {}

  trackByFn(index, item) {
    return index;
  }

  ngOnInit(): void {
    if (this.intervention.options.length == 0) {
      this.addChoice();
      this.addChoice();
    }

    console.log('multchoice' + this.programId + 'int' + this.intervention.id);
    this.channel.echo
      .private('program.' + this.programId)
      .listenForWhisper('multchoice' + this.programId + 'int' + this.intervention.id, (e: any) => {
        console.log('Multiply Choice', e);
        this.channelUpdate(e);
      });
  }

  addChoice() {
    this.intervention.options.push('');
    this.sendUpdate({ acao: 'a' });
  }

  removeChoice(choiceIndex: number) {
    this.intervention.options.splice(choiceIndex, 1);
    this.sendUpdate({ acao: 'r', index: choiceIndex });
  }

  //Métodos do WebSocket
  // recebe os dados
  channelUpdate(dado: any) {
    console.log('Chegou Multiple Choice');
    //ação a-add, r-remove, f-texto do vetor
    if (dado.acao == 'f') {
      this.intervention.options[dado.index] = dado.value;
    } else {
      if (dado.acao == 'a') {
        this.intervention.options.push('');
      } else {
        if (dado.acao == 'r') {
          this.intervention.options.splice(dado.index, 1);
        }
      }
    }
  }

  //Envia os dados
  //O Tipo vai ser a-add r-remove
  sendUpdate(dado: any) {
    dado.id = this.programId;
    dado.intervention = this.intervention;
    dado.tela = 'multipleChoice';
    if (dado.acao == 'f') {
      dado.value = this.intervention.options[dado.index];
    }

    this.dao.patchObject(ESPIM_REST_Programs, dado).subscribe((volta: any) => {
      console.log(dado);
      console.log('mandou');
      console.log('multchoice' + this.programId + 'int' + this.intervention.id);
      this.channel.chanelSend(this.programId, 'multchoice' + this.programId + 'int' + this.intervention.id, dado);
    });
  }
}
