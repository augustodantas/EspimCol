import { Component, OnInit } from '@angular/core';
import { ChatProgram } from 'src/app/private/models/chat.program.model';
import { ProgramsAddService } from '../programsadd.service';
import { ChannelService } from 'src/app/services/channel.service';
import { DAOService } from 'src/app/private/dao/dao.service';
import { ESPIM_REST_Chat, ESPIM_REST_Programs } from 'src/app/app.api';
import { Subscription } from 'rxjs';
import { Program } from 'src/app/private/models/program.model';
import { LoginService } from 'src/app/security/login/login.service';

@Component({
  selector: 'esm-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  messages: ChatProgram[] = [];
  programId: number = 1;
  user: string = '';
  private _subscription$: Subscription;
  /*[
    { id: 1, user: 'teste 1', date: '10/10/2023', time: '10:20', message: 'Olá mundo cruel e desumano' },
    { id: 2, user: 'teste 2', date: '10/10/2023', time: '10:20', message: 'Olá mundo cruel e desumano' },
    { id: 3, user: 'teste 3', date: '10/10/2023', time: '10:20', message: 'Olá mundo cruel e desumano' },
    { id: 4, user: 'teste 4', date: '10/10/2023', time: '10:20', message: 'Olá mundo cruel e desumano' },
    { id: 5, user: 'teste 5', date: '10/10/2023', time: '10:20', message: 'Olá mundo cruel e desumano' },
    { id: 6, user: 'teste 6', date: '10/10/2023', time: '10:20', message: 'Olá mundo cruel e desumano' },
  ]; */

  mensagem: string = '';
  needSet: boolean = true;

  constructor(
    private programAddService: ProgramsAddService,
    private channel: ChannelService,
    private _dao: DAOService,
    private _login: LoginService
  ) {
    this.user = _login.userName();

    this._subscription$ = this.programAddService.program.subscribe((programInstance: Program) => {
      if (this.needSet && programInstance.id) {
        //this.messages = programInstance.chatMessages;
        console.log(programInstance);
        this.programId = programInstance.id;
        this.needSet = false;
        this.channel.echo.private('program.' + this.programId).listenForWhisper('chat' + this.programId, (e: any) => {
          this.channelUpdate(e);
        });
      }
    });
  }

  ngOnInit(): void {}

  enviarChat() {
    let dado: any = {};
    dado.id = this.programId;
    dado.tela = 'chat';
    let locMensagem: ChatProgram = { date: '', time: '', message: this.mensagem, user: this.user };
    dado.chatProgram = locMensagem;
    console.log(dado);
    this._dao.postObject(ESPIM_REST_Chat, dado).subscribe((volta: any) => {
      locMensagem.id = volta.id;
      locMensagem.time = volta.time;
      locMensagem.date = volta.date;
      console.log(dado);
      this.messages.push(locMensagem);
      this.channel.chanelSend(this.programId, 'chat' + this.programId, locMensagem);
    });

    this.mensagem = '';
  }

  channelUpdate(dado: any) {
    this.messages.push(dado);
  }
}
