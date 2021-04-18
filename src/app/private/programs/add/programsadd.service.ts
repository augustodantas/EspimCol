import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from 'src/app/services/loader.service';

import {
  ESPIM_REST_Events,
  ESPIM_REST_Interventions,
  ESPIM_REST_Observers,
  ESPIM_REST_Participants,
  ESPIM_REST_Programs,
  ESPIM_REST_Sensors,
  ESPIM_REST_Triggers,
} from '../../../app.api';
import { LoginService } from '../../../security/login/login.service';
import { DAOService } from '../../dao/dao.service';
import { ActiveEvent, Event } from '../../models/event.model';
import { Intervention, MediaIntervention, QuestionIntervention, TaskIntervention } from '../../models/intervention.model';
import { Observer } from '../../models/observer.model';
import { Participant } from '../../models/participant.model';
import { Program } from '../../models/program.model';
import { Sensor } from '../../models/sensor.model';
import { Trigger } from '../../models/trigger.model';

@Injectable({
  providedIn: 'root',
})
export class ProgramsAddService {
  urlPrograms: string = ESPIM_REST_Programs;
  private _currentProgramSubject: BehaviorSubject<Program>;
  program: Observable<Program>;

  constructor(
    private _daoService: DAOService,
    private activeRoute: ActivatedRoute,
    private loginService: LoginService,
    private _loaderService: LoaderService
  ) {
    this._currentProgramSubject = new BehaviorSubject<Program>(new Program());
    this.program = this._currentProgramSubject.asObservable();
  }

  fetchData(id: string) {
    this._loaderService.show();
    this._daoService
      .getObject(this.urlPrograms, id)
      .pipe(finalize(() => this._loaderService.hide()))
      .subscribe((response) => {
        response.data.observers = response.data.observers.data;
        this._currentProgramSubject.next(response.data);
      });
  }

  clearData() {
    this._currentProgramSubject.next(new Program());
  }

  /**
   * Saves an step patching "programs". Patching results in updating the attributes specified in programs
   */
  saveStep(dados: any) {
    let id = this.activeRoute.snapshot.params.id;

    if (id) {
      this._daoService.patchObject(ESPIM_REST_Programs, dados).subscribe((resp) => {
        this._currentProgramSubject.next(resp.data);
      });
    } else {
      this._currentProgramSubject.next(dados);
    }
  }

  public get programValue(): Program {
    return this._currentProgramSubject.value;
  }

  getProgramObservable(): Observable<Program> {
    return this.program;
  }
  setProgram(program: Program): void {
    // this.program = program;
    // /**
    //  * Incosistência aqui. Os usuários antigos do espim não possuem nenhum observerContact. Quando um usuário antigo lista um programa que tem outros observers responsáveis, esses observers são automaticamente adicionados na observerContacts do usuário atual quando é dado um retrieve pro server (o retrive é dado na linha 61). Entretanto, na linha 62 nós buscamos todos os observersContacts do usuário. O problema é que acontece de não dar retrieve em todos os observers até o momento em que a linha 62 é executada. Dessa forma, acontece de o servidor retornar os observerContacts incompletos, já que, até o momento da request, não damos retrieve em todos os observers e, portanto, tais observers não foram adicionados ao observerContacts do user. Bom, não acho que tenha o que fazer. Isso vai acontecer 1 vez, então acho que ta ok msm assim. (O mesmo acontece para os participantes)
    //  */
    // if (this.program.observers) {
    //   this.program.observersInstance = this.requestObservers(this.program.observers);
    // } else {
    //   this.program.observersInstance = new Array<Observer>();
    // }
    // if (this.program.participants) {
    //   this.program.participantsInstace = this.requestParticipants(this.program.participants);
    // } else {
    //   this.program.participantsInstace = new Array<Participant>();
    // }
    // if (this.program.events) {
    //   this.program.eventsInstance = this.requestEvents(this.program.events);
    // } else {
    //   this.program.eventsInstance = new Array<Event>();
    // }
    // console.log(this.program);
    // this.programObservable$.next(this.program);
  }

  getObservers(): Observer[] {
    return [];
    // return this.observers;
  }
  getObserversInstance(): Observer[] {
    return [];
    // return this.program.observersInstance;
  }

  getParticipants(): Participant[] {
    return [];
    // return this.participants;
  }
  getParticipantsInstance(): Participant[] {
    return [];
    // return this.program.participantsInstace;
  }

  getEventsId(): number[] {
    return [];
    // return this.program.events;
  }
  getEventsInstance(): Event[] {
    return [];
    // return this.program.eventsInstance;
  }
  delete_event(eventId: number): void {
    this._daoService.deleteObject(ESPIM_REST_Events, eventId.toString()).subscribe((_) => {
      // this.program.removeEvent(eventId);
      // new SwalComponent({
      //   title: 'Deletado com sucesso!',
      //   type: 'success',
      // })
      //   .show()
      //   .then();
    });
  }

  requestEvents(eventsId: number[]): Event[] {
    const eventsInstance = new Array<Event>();
    const requests = new Array<any>();
    for (let i = 0; i < eventsId.length; i++) {
      requests.push(this._daoService.getObject(ESPIM_REST_Events, eventsId[i].toString()));
      requests[i].subscribe((data: any) => {
        if (data.type === 'active') eventsInstance.push(new ActiveEvent(data));
        else eventsInstance.push(new Event(data));
      });
    }
    forkJoin(requests).subscribe((_) => eventsInstance.sort((a: Event, b: Event) => a.getId() - b.getId()));

    return eventsInstance;
  }

  /**
   * If "observersId" is passed, requests such observers, sort, and returns. Else, requests all observers contacts of the user. They already come sorted.
   */
  requestObservers(observersId?: number[]): Array<Observer> {
    /**
     * The received interventions will be stored in "observersInstance" and returned
     */
    const observersInstances = new Array<Observer>();

    if (observersId) {
      /**
       * The requests array stores all observables before subscribing to them so that we can use forkJoin. forkJoin is used to sort the array after all requests receives their responses.
       */
      const requests = new Array<any>();
      for (let i = 0; i < observersId.length; i++) {
        requests.push(this._daoService.getObject(ESPIM_REST_Observers, observersId[i].toString()));
        // requests[i].subscribe((data: any) => observersInstances.push(new Observer(data)));
      }
      forkJoin(requests).subscribe((_) => observersInstances.sort((a: Observer, b: Observer) => a.user.name.localeCompare(b.user.name)));
    } else
      this._daoService.getObjects(ESPIM_REST_Observers + 'list_contacts/').subscribe((data: any) => {
        // for (const observer of data.results) observersInstances.push(new Observer(observer));
      });

    return observersInstances;
  }

  /**
   * If "participantsId" is passed, requests such participants, sort, and returns. Else, requests all observers contacts of the user. They already come sorted.
   */
  requestParticipants(participantsId?: number[]): Array<Participant> {
    /**
     * The received interventions will be stored in "interventionsInstance" and returned
     */
    const participantsInstances = new Array<Participant>();

    if (participantsId) {
      /**
       * The requests array stores all observables before subscribing to them so that we can use forkJoin. forkJoin is used to sort the array after all requests receives their responses.
       */
      const requests = new Array<any>();
      for (let i = 0; i < participantsId.length; i++) {
        requests.push(this._daoService.getObject(ESPIM_REST_Participants, participantsId[i].toString()));
        // requests[i].subscribe((data) => participantsInstances.push(new Participant(data)));
      }
      forkJoin(requests).subscribe((_) =>
        participantsInstances.sort((a: Participant, b: Participant) => a.user.name.localeCompare(b.user.name))
      );
    } else
      this._daoService.getObjects(ESPIM_REST_Participants + 'list_contacts/').subscribe((data: any) => {
        // for (const participant of data.results) participantsInstances.push(new Participant(participant));
      });

    return participantsInstances;
  }

  /**
   * Requests interventions specified in "interventionsId"
   */
  requestInterventions(interventionsId: Array<number>) {
    /**
     * The received interventions will be stored in "interventionsInstance" and returned
     * The requests array stores all observables before subscribing to them so that we can use forkJoin. forkJoin is used to sort the array after all requests receives their responses.
     */
    const interventionsInstances = new Array<Intervention>();
    const requests = new Array<any>();
    for (let i = 0; i < interventionsId.length; i++) {
      requests.push(this._daoService.getObject(ESPIM_REST_Interventions, interventionsId[i].toString()));
      requests[i].subscribe((data: any) => {
        if (data.type === 'empty') interventionsInstances.push(new Intervention(data));
        else if (data.type === 'media') interventionsInstances.push(new MediaIntervention(data));
        else if (data.type === 'question') interventionsInstances.push(new QuestionIntervention(data));
        else interventionsInstances.push(new TaskIntervention(data));
      });
    }
    forkJoin(requests).subscribe((_) =>
      interventionsInstances.sort((a: Intervention, b: Intervention) => a.orderPosition - b.orderPosition)
    );
    return interventionsInstances;
  }

  /**
   * Requests interventions specified in "interventionsId"
   */
  requestTriggers(triggersId: Array<number>) {
    /**
     * The received interventions will be stored in "triggerInstances" and returned
     * The requests array stores all observables before subscribing to them so that we can use forkJoin. forkJoin is used to sort the array after all requests receives their responses.
     */
    const triggerInstances: Array<Trigger> = new Array<Trigger>();
    const requests = new Array<any>();
    for (let i = 0; i < triggersId.length; i++) {
      requests.push(this._daoService.getObject(ESPIM_REST_Triggers, triggersId[i].toString()));
      requests[i].subscribe((data: any) => {
        triggerInstances.push(new Trigger(data));
      });
    }
    forkJoin(requests).subscribe((_) => triggerInstances.sort((a: Trigger, b: Trigger) => a.getId() - b.getId()));
    return triggerInstances;
  }

  /**
   * Requests interventions specified in "interventionsId"
   */
  requestSensors(sensorsId: Array<number>) {
    /**
     * The received interventions will be stored in "sensorsInstances" and returned
     * The requests array stores all observables before subscribing to them so that we can use forkJoin. forkJoin is used to sort the array after all requests receives their responses.
     */
    const sensorsInstances: Array<Sensor> = new Array<Sensor>();
    const requests = new Array<any>();
    for (let i = 0; i < sensorsId.length; i++) {
      requests.push(this._daoService.getObject(ESPIM_REST_Sensors, sensorsId[i].toString()));
      requests[i].subscribe((data: any) => sensorsInstances.push(new Sensor(data)));
    }
    forkJoin(requests).subscribe((_) => sensorsInstances.sort((a: Sensor, b: Sensor) => a.getId() - b.getId()));
    return sensorsInstances;
  }
}
