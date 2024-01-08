import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProgramsAddService } from '../programsadd.service';
import { ChannelService } from 'src/app/services/channel.service';
import { DAOService } from 'src/app/private/dao/dao.service';
import { LoginService } from 'src/app/security/login/login.service';
import { Subscription } from 'rxjs';
import { Program } from 'src/app/private/models/program.model';
import { defaultDayOfMonthOrdinalParse } from 'ngx-bootstrap/chronos/locale/locale.class';

@Component({
  selector: 'esm-editores',
  templateUrl: './editores.component.html',
  styleUrls: ['./editores.component.scss'],
})
export class EditoresComponent implements OnInit, OnDestroy {
  editores: string[] = [];
  //['João', 'Antonio', 'Maria'];
  programId: number = 1;
  user: string = '';
  needSet: boolean = true;
  private _subscription$: Subscription;

  constructor(
    private programAddService: ProgramsAddService,
    private channel: ChannelService,
    private _dao: DAOService,
    private _login: LoginService
  ) {
    this.user = _login.userObserver.user.name.split(' ')[0];
    this._subscription$ = this.programAddService.program.subscribe((programInstance: Program) => {
      if (this.needSet && programInstance.id) {
        //this.messages = programInstance.chatMessages;
        this.programId = programInstance.id;
        this.needSet = false;
        this.channel.echo.private('program.' + this.programId).listenForWhisper('editores' + this.programId, (e: any) => {
          this.channelUpdate(e);
        });
      }
    });
  }

  ngOnDestroy(): void {
    let dado: any = {};
    dado.id = this.programId;
    dado.tela = 'editor';
    dado.editor = this.user;
    dado.action = 'd';
    this.channel.chanelSend(this.programId, 'editores' + this.programId, dado);
  }

  ngOnInit(): void {
    this.enviar('sim');
  }

  enviar(retorno: string = 'nao') {
    let dado: any = {};
    dado.id = this.programId;
    dado.tela = 'editor';
    dado.editor = this.user;
    dado.action = 'a';
    dado.return = retorno;
    console.log(dado);
    this.channel.chanelSend(this.programId, 'editores' + this.programId, dado);
  }

  channelUpdate(dado: any) {
    console.log(dado);
    if (dado.action == 'a') {
      this.adicionaEditor(dado.editor);
      if (dado.return == 'sim') {
        this.enviar();
      }
    } else {
      this.removeEditor(dado.editor);
    }
  }

  adicionaEditor(user: string) {
    let novo: boolean = true;
    for (let i = 0; i < this.editores.length; i++) {
      if (this.editores[i] == user) {
        novo = false;
        break;
      }
    }
    if (novo) {
      this.editores.push(user);
    }
  }

  removeEditor(user: string) {
    let posi: number = -1;
    for (let i = 0; i < this.editores.length; i++) {
      if (this.editores[i] == user) {
        posi = i;
        break;
      }
    }
    if (posi > -1) {
      this.editores.splice(posi, 1);
    }
  }
}
