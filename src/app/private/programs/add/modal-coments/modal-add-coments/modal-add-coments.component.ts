import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { ChatProgram } from 'src/app/private/models/chat.program.model';
import { ProgramsAddService } from '../../programsadd.service';
import { ChannelService } from 'src/app/services/channel.service';
import { DAOService } from 'src/app/private/dao/dao.service';
import { LoginService } from 'src/app/security/login/login.service';
import { ESPIM_REST_Programs } from 'src/app/app.api';
import { Program } from 'src/app/private/models/program.model';

@Component({
  selector: 'esm-modal-add-coments',
  templateUrl: './modal-add-coments.component.html',
  styleUrls: ['./modal-add-coments.component.scss'],
})
export class ModalAddComentsComponent implements OnInit {
  mensagem: string = '';
  programId: number = 1;
  user: string = '';
  private _subscription$: Subscription;
  needSet: boolean = true;

  messages: ChatProgram[] = [];
  /*[
    { id: 1, user: 'teste 1', date: '10/10/2023', time: '10:20', message: 'Olá mundo cruel e desumano' },
    { id: 2, user: 'teste 2', date: '10/10/2023', time: '10:20', message: 'Olá mundo cruel e desumano' },
    { id: 3, user: 'teste 3', date: '10/10/2023', time: '10:20', message: 'Olá mundo cruel e desumano' },
    { id: 4, user: 'teste 4', date: '10/10/2023', time: '10:20', message: 'Olá mundo cruel e desumano' },
    { id: 5, user: 'teste 5', date: '10/10/2023', time: '10:20', message: 'Olá mundo cruel e desumano' },
    { id: 6, user: 'teste 6', date: '10/10/2023', time: '10:20', message: 'Olá mundo cruel e desumano' },
  ];*/

  constructor(
    public bsModalRef: BsModalRef,
    private programAddService: ProgramsAddService,
    private channel: ChannelService,
    private _dao: DAOService,
    private _login: LoginService
  ) {
    this.user = _login.userObserver.user.name.split(' ')[0];
    this._subscription$ = this.programAddService.program.subscribe((programInstance: Program) => {
      if (this.needSet && programInstance.id) {
        //this.messages = programInstance.chatMessages;
        console.log(programInstance);
        this.programId = programInstance.id;
        this.needSet = false;
        this.channel.echo.private('program.' + this.programId).listenForWhisper('comment' + this.programId, (e: any) => {
          this.channelUpdate(e);
        });
      }
    });
  }

  ngOnInit(): void {}

  close() {
    this.bsModalRef.hide();
  }

  adicionarComentario() {
    let dado: any = {};
    dado.id = this.programId;
    dado.tela = 'comment';
    dado.acao = 'a';
    let locMensagem: ChatProgram = { date: '', time: '', message: this.mensagem, user: this.user };
    dado.comment = locMensagem;
    console.log(dado);
    this._dao.patchObject(ESPIM_REST_Programs, dado).subscribe((volta: any) => {
      locMensagem.id = volta.id;
      locMensagem.time = volta.time;
      locMensagem.date = volta.date;
      dado.comment = locMensagem;
      console.log(dado);
      this.messages.push(locMensagem);
      this.channel.chanelSend(this.programId, 'comment' + this.programId, locMensagem);
    });
    this.mensagem = '';
  }

  apagar(id: number) {
    let dado: any = {};
    dado.id = this.programId;
    dado.tela = 'comment';
    dado.acao = 'd';
    dado.comment = this.messages[id];
    console.log(dado);
    this._dao.patchObject(ESPIM_REST_Programs, dado).subscribe((volta: any) => {
      let apagar = -1;
      for (let i = 0; i < this.messages.length; i++) {
        if (this.messages[i].id == id) {
          apagar = i;
          break;
        }
      }
      this.messages.splice(apagar, 1);
    });
  }

  channelUpdate(dado: any) {
    if (dado.acao == 'a') {
      this.messages.push(dado.comment);
    } else {
      let apagar = -1;
      for (let i = 0; i < this.messages.length; i++) {
        if (this.messages[i].id == dado.comment.id) {
          apagar = i;
          break;
        }
      }
      this.messages.splice(apagar, 1);
    }
  }
}
