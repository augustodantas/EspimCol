import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Event } from 'src/app/private/models/event.model';
import { Sensor } from 'src/app/private/models/sensor.model';
import { Trigger } from 'src/app/private/models/trigger.model';
import { ChannelService } from 'src/app/services/channel.service';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'esm-passive-event',
  templateUrl: './passive-event.component.html',
  styleUrls: ['./passive-event.component.scss', './../step4.component.scss'],
})
export class PassiveEventComponent implements OnInit {
  @Input() event: Event;
  @Input() events: Event[];
  @Input() index: number;
  @Input() programId: number;

  isOpen: boolean = false;

  form: FormGroup = this.formBuilder.group({
    id: this.formBuilder.control(''),
    title: ['', Validators.required],
    color: this.formBuilder.control(''),
    description: this.formBuilder.control(''),
    sensors: this.formBuilder.array([]),
    triggers: this.formBuilder.array([]),
  });

  constructor(private formBuilder: FormBuilder, private channel: ChannelService) {}

  ngOnInit(): void {
    if (!this.event.id) {
      this.isOpen = true;
    }

    if (this.event) {
      this.form.patchValue(this.event);
      // Adiciona as triggers e sensors ao evento
      this.event.triggers.forEach((it) => this.adicionarTrigger(new Trigger(it)));
      this.event.sensors.forEach((it) => this.adicionarSensor(it as Sensor));
    }

    //Método para ficar escutando o canal...
    this.channel.echo.private('program.' + this.programId).listenForWhisper('passive' + this.programId + 'pe' + this.event.id, (e: any) => {
      console.log('Eventos Passivos', e);
      this.channelUpdate(e);
    });
  }

  updateFormSensors(sensors: Sensor[]) {
    this.sensorFormArray.clear();
    sensors.forEach((it) => this.adicionarSensor(it));
    let dado: any = {};
    dado.acao = 'a';
    dado.tipo = 'sensor';
    dado.sensor = sensors;
    this.sendUpdate(dado);
  }

  adicionarSensor(sensor: Sensor) {
    this.sensorFormArray.push(this.formBuilder.control(sensor));
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
    this.triggerFormArray.removeAt(index);
    let dado: any = {};
    dado.acao = 'r';
    dado.tipo = 'trigger';
    dado.trigger = index;
    this.sendUpdate(dado);
  }

  get triggerFormArray(): FormArray {
    return this.form.get('triggers') as FormArray;
  }

  get sensorFormArray(): FormArray {
    return this.form.get('sensors') as FormArray;
  }

  get formValue(): any {
    return this.form.value;
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

  validateForm(): boolean {
    this.form.markAllAsTouched();

    if (!this.form.valid) {
      this.isOpen = true;
    }
    return this.form.valid;
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
          //sensor
          console.log(dado.sensor);
          this.sensorFormArray.clear();
          dado.sensor.forEach((it: any) => {
            this.adicionarSensor(it);
          });
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
    if (dado.acao == 'f') {
      //acao f é alteração nos campos do form
      dado.valor = this.form.get(dado.campo).value;
    }
    console.log(dado);
    console.log('mandou');
    this.channel.chanelSend(this.programId, 'passive' + this.programId + 'pe' + this.event.id, dado);
  }
}
