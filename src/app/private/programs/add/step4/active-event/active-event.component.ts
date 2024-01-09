import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { take } from 'rxjs/operators';
import { ActiveEvent, ComplexCondition, Event, GamificationConditions } from 'src/app/private/models/event.model';
import { Intervention } from 'src/app/private/models/intervention.model';
import { Trigger } from 'src/app/private/models/trigger.model';

import { ESPIM_REST_Programs } from '../../../../../app.api';
import { InterventionComponent } from '../intervention/intervention.component';
import { ChannelService } from 'src/app/services/channel.service';
import { DAOService } from 'src/app/private/dao/dao.service';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'esm-active-event',
  templateUrl: './active-event.component.html',
  styleUrls: ['./active-event.component.scss', './../step4.component.scss'],
})
export class ActiveEventComponent implements OnInit {
  urlPrograms: string = ESPIM_REST_Programs;
  @Input() event: ActiveEvent;
  @Input() events: Event[];
  @Input() index: number;
  @Input() programId: number;
  isOpen: boolean = false;
  private _modalInterventionRef: BsModalRef;
  loadingInterventions: boolean = false;

  form: FormGroup = this.formBuilder.group({
    id: this.formBuilder.control(''),
    title: ['', Validators.required],
    type: this.formBuilder.control(''),
    color: this.formBuilder.control(''),
    description: this.formBuilder.control(''),
    triggers: this.formBuilder.array([]),
    isManual: this.formBuilder.control(false),
    interventions: this.formBuilder.control([]),
    complexConditions: this.formBuilder.array([]),
    gamificationConditions: this.formBuilder.control(null),
  });

  constructor(
    private formBuilder: FormBuilder,
    private readonly _modalService: BsModalService,
    private channel: ChannelService,
    private daoService: DAOService
  ) {}

  ngOnInit(): void {
    // Verifica se é um "NOVO EVENTO"
    if (
      !this.event.title &&
      !this.event.id &&
      this.event.triggers.length == 0 &&
      !this.event.color &&
      this.event.interventions.length == 0
    ) {
      this.isOpen = true;
    }

    if (this.event) {
      this.form.patchValue(this.event);
      // Adiciona as triggers e sensors ao evento
      this.event.triggers.forEach((it) => this.adicionarTrigger(new Trigger(it)));
    }

    //Método para ficar escutando o canal...
    this.channel.echo.private('program.' + this.programId).listenForWhisper('active' + this.programId + 'ae' + this.event.id, (e: any) => {
      console.log('Eventos', e);
      this.channelUpdate(e);
    });
  }

  adicionarTrigger(value: Trigger): void {
    this.triggerFormArray.push(this.formBuilder.control(value));
    let dado: any = {};
    dado.acao = 'a';
    dado.tipo = 'trigger';
    let trigger: any = {};
    trigger.id = value.id;
    trigger.condition = value.condition.toString();
    trigger.priority = value.priority;
    trigger.timeout = value.timeout;
    dado.trigger = trigger;
    this.sendUpdate(dado);
  }

  removerTrigger(index: number): void {
    let dado: any = {};
    dado.acao = 'r';
    dado.tipo = 'trigger';
    dado.trigger = index;
    dado.triggerId = this.triggerFormArray[index].id;

    this.triggerFormArray.removeAt(index);
    this.sendUpdate(dado);
  }

  get triggerFormArray(): FormArray {
    return this.form.get('triggers') as FormArray;
  }

  get formValue(): any {
    return this.form.value;
  }

  updateFormComplexConditions(complexConditions: ComplexCondition[]) {
    this.event.complexConditions = complexConditions;
    this.complexConditionsFormArray.clear();
    complexConditions.forEach((it) => this.adicionarComplexCondition(it));
  }

  updateFormGamificationConditions(gamificationConditions: GamificationConditions) {
    this.event.gamificationConditions = gamificationConditions;
    this.form.get('gamificationConditions').setValue(gamificationConditions);
  }

  adicionarComplexCondition(complexCondition: ComplexCondition) {
    this.complexConditionsFormArray.push(this.formBuilder.control(complexCondition));
    let dado: any = {};
    dado.acao = 'a';
    dado.tipo = 'complexCondition';
    dado.complexCondition = complexCondition;
    this.sendUpdate(dado);
  }

  get complexConditionsFormArray(): FormArray {
    return this.form.get('complexConditions') as FormArray;
  }

  deleteEvent() {
    this.isOpen = !this.isOpen;
    this.form.reset();
    let dado: any = {};
    dado.acao = 'd';
    this.sendUpdate(dado);
    this.removeEvent(this.event);
    return;
  }

  removeEvent(event: Event) {
    this.events.splice(this.index, 1);
  }

  loadDetail() {
    this.isOpen = !this.isOpen;
  }

  // loadInterventions() {
  //   this.loadingInterventions = true;
  //   let programId = this.programAddService.programValue.id;

  //   this._daoService
  //     .getObjects(this.urlPrograms + programId + '/events/' + this.event.id + '/interventions')
  //     .pipe(finalize(() => (this.loadingInterventions = false)))
  //     .subscribe((response) => {
  //       let interventions = response.data.map((intervention) => this.interventionService.getInterventionClass(intervention));
  //       this.form.get('interventions').setValue(interventions);
  //     });
  // }

  validateForm(): boolean {
    this.form.markAllAsTouched();

    if (!this.form.valid) {
      this.isOpen = true;
    }

    return this.form.valid;
  }

  updateColor(color: string): void {
    this.form.get('color').setValue(color);
    this.sendUpdate({ acao: 'f', campo: 'color' });
  }

  goToInterventions(): void {
    console.log(this.programId);
    const config: ModalOptions<InterventionComponent> = {
      class: 'modal-fullscreen modal-intervention',
      keyboard: false,
      ignoreBackdropClick: true,
      initialState: {
        activeEvent: this.event,
        interventionsToInit: this.form.get('interventions').value,
        programId: this.programId,
      },
    };

    this._modalInterventionRef = this._modalService.show(InterventionComponent, config);

    this._modalInterventionRef.content.response.pipe(take(1)).subscribe((value: Intervention[]) => {
      this.form.get('interventions').setValue(value);
    });
  }

  //Métodos do WebSocket
  // recebe os dados
  channelUpdate(dado: any) {
    console.log('Chegou evento');
    //ação a-add, r-remove, d-delete event, f-campo do form
    if (dado.acao == 'd') {
      //Apagar evento
      this.isOpen = false;
      this.form.reset();
      this.removeEvent(this.event);
      return;
    } else {
      if (dado.acao == 'a') {
        if (dado.tipo == 'trigger') {
          let auxTrigger: Trigger = new Trigger(dado.trigger);
          console.log(dado.trigger);
          this.triggerFormArray.push(this.formBuilder.control(auxTrigger));
        } else {
          this.complexConditionsFormArray.push(this.formBuilder.control(dado.complexCondition));
        }
      } else {
        if (dado.acao == 'r') {
          if (dado.tipo == 'trigger') {
            this.triggerFormArray.removeAt(dado.trigger);
          }
        } else {
          this.form.get(dado.campo).setValue(dado.valor);
          this.form.get(dado.campo).dirty;
        }
      }
    }
  }

  //Envia os dados
  //O Tipo vai ser a-add r-remove
  sendUpdate(dado: any) {
    dado.id = this.programId;
    dado.eventId = this.event.id;
    dado.tela = 'active';
    if (dado.acao == 'f') {
      //acao f é alteração nos campos do form
      dado.valor = this.form.get(dado.campo).value;
    }

    this.daoService.patchObject(ESPIM_REST_Programs, dado).subscribe((volta: any) => {
      console.log(dado);
      console.log('mandou');
      this.channel.chanelSend(this.programId, 'active' + this.programId + 'ae' + this.event.id, dado);
    });
  }
}
