import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HistoricProgram } from 'src/app/private/models/historic.program.model';
import { ProgramsAddService } from '../programsadd.service';
import { ChannelService } from 'src/app/services/channel.service';
import { DAOService } from 'src/app/private/dao/dao.service';
import { LoginService } from 'src/app/security/login/login.service';
import { Program } from 'src/app/private/models/program.model';

@Component({
  selector: 'esm-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss'],
})
export class HistoricoComponent implements OnInit {
  historic: HistoricProgram[] = [];
  programId: number = 1;
  user: string = '';
  needSet: boolean = true;
  private _subscription$: Subscription;
  /*[
    { id: 1, order: 1, action: 'Criou alguma coisa', date: '10/10/2023', time: '10:10', user: 'Teste 1' },
    { id: 2, order: 2, action: 'Criou alguma coisa', date: '10/10/2023', time: '10:10', user: 'Teste 2' },
    { id: 3, order: 3, action: 'Criou alguma coisa', date: '10/10/2023', time: '10:10', user: 'Teste 3' },
    { id: 4, order: 4, action: 'Criou alguma coisa', date: '10/10/2023', time: '10:10', user: 'Teste 4' },
    { id: 5, order: 5, action: 'Criou alguma coisa', date: '10/10/2023', time: '10:10', user: 'Teste 5' },
    { id: 6, order: 6, action: 'Criou alguma coisa', date: '10/10/2023', time: '10:10', user: 'Teste 6' },
    { id: 7, order: 7, action: 'Criou alguma coisa', date: '10/10/2023', time: '10:10', user: 'Teste 7' },
    { id: 8, order: 8, action: 'Criou alguma coisa', date: '10/10/2023', time: '10:10', user: 'Teste 8' },
    { id: 9, order: 9, action: 'Criou alguma coisa', date: '10/10/2023', time: '10:10', user: 'Teste 9' },
  ];*/
  constructor(
    private programAddService: ProgramsAddService,
    private channel: ChannelService,
    private _dao: DAOService,
    private _login: LoginService
  ) {
    this.user = _login.userName();
    this._subscription$ = this.programAddService.program.subscribe((programInstance: Program) => {
      if (this.needSet && programInstance.id) {
        this.historic = programInstance.historic;
        console.log(programInstance);
        this.programId = programInstance.id;
        this.needSet = false;
        this.channel.echo.private('program.' + this.programId).listenForWhisper('historic' + this.programId, (e: any) => {
          this.historic.push(e);
        });
      }
    });
  }

  ngOnInit(): void {}
}
