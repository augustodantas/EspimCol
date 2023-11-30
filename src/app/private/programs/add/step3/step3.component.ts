import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, take } from 'rxjs/operators';
import { ESPIM_REST_ProgramUsers, ESPIM_REST_Programs } from 'src/app/app.api';
import { User } from 'src/app/private/models/user.model';
import { SearchComponent } from 'src/app/private/search/search.component';

import { DAOService } from '../../../dao/dao.service';
import { Program } from '../../../models/program.model';
import { LETRAS_FILTRO } from '../../constants';
import { ProgramsAddService } from '../programsadd.service';
import { ModalAddParticipantComponent } from './modal-add-participant/modal-add-participant.component';
import { ChannelService } from 'src/app/services/channel.service';
import { Participant } from 'src/app/private/models/participant.model';

@Component({
  selector: 'esm-step3',
  templateUrl: './step3.component.html',
})
export class Step3Component implements OnInit {
  @ViewChild('search') searchElement: SearchComponent;
  program: Observable<Program>; // These are the users of this program
  loading: boolean = true;
  search: Subject<string> = new Subject<string>();
  filterQuery: string = '*';
  users: User[]; // These are the general users
  programUsers: User[] = [];
  private _subscription$: Subscription;
  urlProgramUsers: string = ESPIM_REST_ProgramUsers;
  letters: string[] = LETRAS_FILTRO;
  private _modalRef: BsModalRef;

  //Atributos do canal
  programId: number = -1;
  needSet: boolean = true;

  constructor(
    private daoService: DAOService,
    private programAddService: ProgramsAddService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private _modalService: BsModalService,
    private channel: ChannelService
  ) {
    this.program = this.programAddService.program;
    this.search
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(() => {
          return this.getUsers();
        })
      )
      .subscribe((response) => {
        this.loading = false;
        this.users = response.data;
      });
  }

  isChecked(participant: User) {
    return !!(this.programUsers ? this.programUsers.find((value) => value.id === participant.id) : undefined);
  }

  ngOnInit() {
    // Trigger first Request
    this.search.next('');

    this._subscription$ = this.programAddService.program.subscribe((programInstance: Program) => {
      this.programUsers = programInstance.users;
      console.log(this.programUsers);

      //Método para ficar escutando o canal...
      if (this.needSet) {
        this.channel.echo.private('program.' + programInstance.id).listenForWhisper('step3' + programInstance.id, (e: any) => {
          console.log('Usuários', e);
          this.channelUpdate(e);
        });
        this.needSet = false;
        this.programId = programInstance.id;
      }
    });
  }

  ngOnDestroy(): void {
    this._subscription$.unsubscribe();
    this.programAddService.saveLocalStep({ users: this.programUsers });
  }

  /**
   * Adds an participant to the programUsers
   */
  addProgramUser(participant: User) {
    this.programUsers.push(participant);
    this.sendUpdate('a', participant);
  }

  /**
   * Removes an participant from the programUsers
   */
  removeProgramUser(participant: User) {
    this.programUsers.splice(
      this.programUsers.findIndex((value: User) => value.id === participant.id),
      1
    );
    this.sendUpdate('r', participant);
  }

  filter_by(letter: string) {
    if (letter !== this.filterQuery) {
      this.filterQuery = letter;
      this.searchElement.form.get('query').setValue('');
      this.handleChange(letter);
    }
  }

  // Search
  // Filter by Letter
  handleChange($event: any, search: boolean = false): void {
    this.users = [];
    this.loading = true;
    this.search.next($event);
  }

  getUsers(): Observable<any> {
    let id = this.activeRoute.parent.snapshot.params.id;

    let searchTerm = this.searchElement.form.get('query').value;
    let params = new HttpParams()
      .set('search', searchTerm)
      .set('letter', this.filterQuery)
      .set('include', 'user')
      .set('orderBy', 'name')
      .set('sortedBy', 'asc');
    return this.daoService.getObjects(this.urlProgramUsers + (id ? id : ''), params);
  }

  sort(participants: User[]): User[] {
    return participants.sort((a, b) => (a.name > b.name ? 1 : -1));
  }

  getName(user: User): string {
    return (user.name ? user.name : user.alias) + ' ' + (user.name && user.alias ? `(${user.alias})` : `(${user.email})`);
  }

  submit(): void {
    this.programAddService.saveStep({ users: this.programUsers.map((item) => item.id) }).subscribe(() => {});
    this.programAddService.saveLocalStep({ users: this.programUsers });

    this.router.navigate(['./fourth'], {
      relativeTo: this.activeRoute.parent,
    });
  }

  openModalParticipant(): void {
    const config: ModalOptions<ModalAddParticipantComponent> = {
      ignoreBackdropClick: true,
      initialState: {},
    };

    this._modalRef = this._modalService.show(ModalAddParticipantComponent, config);

    this._modalRef.content.response.pipe(take(1)).subscribe((participant: User) => {
      this.handleChange(participant);
      this.addProgramUser(participant);
    });
  }

  //Métodos do WebSocket
  // recebe os dados
  channelUpdate(dado: any) {
    //r-remove a-add
    if (dado.tipo == 'r') {
      this.programUsers.splice(
        this.programUsers.findIndex((value: User) => value.id === dado.participant.id),
        1
      );
    } else {
      if (!this.acha(dado.participant, this.users)) {
        this.users.push(dado.participant);
      }
      if (!this.acha(dado.participant, this.programUsers)) {
        this.programUsers.push(dado.participant);
      }
    }
  }

  acha(dado: any, usuarios: User[]): boolean {
    for (let i = 0; i < usuarios.length; i++) {
      if (dado.id == usuarios[i].id) {
        return true;
      }
    }
    return false;
  }

  //Envia os dados
  //O Tipo vai ser a-add r-remove
  sendUpdate(tipo: string, participant: User) {
    console.log(tipo);
    let dado: any = {};
    dado.id = this.programId;
    dado.tela = 'step3';
    console.log(participant);
    dado.tipo = tipo;
    dado.participant = participant;
    this.daoService.patchObject(ESPIM_REST_Programs, dado).subscribe((volta: any) => {
      console.log('mandou');
      this.channel.chanelSend(this.programId, 'step3' + this.programId, dado);
    });
  }
}
