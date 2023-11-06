import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import cloneDeep from 'lodash/cloneDeep';
import { Sensor } from 'src/app/private/models/sensor.model';
import { v4 as uuid } from 'uuid';

import { COLLECTORS, SENSORS_LIST } from '../../../constants';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'esm-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss'],
})
export class SensorsComponent implements OnInit {
  sensors: any[] = cloneDeep(SENSORS_LIST);
  collectors: any[] = COLLECTORS;
  uid: string = uuid();
  @Input() eventSensors: Sensor[];
  @Input() programId: number;
  @Input() eventId: number;
  @Output() response: EventEmitter<Sensor[]> = new EventEmitter<Sensor[]>();

  constructor(private channel: ChannelService) {}

  ngOnInit() {
    if (this.eventSensors) {
      this.eventSensors.forEach((it) => {
        // Atualiza o [value] da lista de sensores
        this.sensors.find((sensorItem) => sensorItem.alias == it.sensor).value = it.collector;
      });
    }

    //Método para ficar escutando o canal...
    this.channel.echo.private('program.' + this.programId).listenForWhisper('sensor' + this.programId + 'pe' + this.eventId, (e: any) => {
      console.log('Sensores', e);
      this.channelUpdate(e);
    });
  }

  changeSensor() {
    let selectedSensors = this.sensors
      .filter((it) => it.value)
      .map((sensor) => {
        return {
          sensor: sensor.alias,
          collector: sensor.value,
        } as Sensor;
      });

    let dado: any = {};
    dado.sensors = selectedSensors;
    this.sendUpdate(dado);

    this.response.emit(selectedSensors);
  }

  clearValue(sensor: any) {
    sensor.value = null;
    this.changeSensor();
  }

  //Métodos do WebSocket
  // recebe os dados
  channelUpdate(dado: any) {
    console.log('Chegou Sensor');
    for (let i = 0; i < this.sensors.length; i++) {
      this.sensors[i].value = null;
    }
    dado.sensors.forEach((it: any) => {
      // Atualiza o [value] da lista de sensores
      this.sensors.find((sensorItem) => sensorItem.alias == it.sensor).value = it.collector;
    });
    this.response.emit(dado.sensors);
  }

  //Envia os dados
  //O Tipo vai ser a-add r-remove
  sendUpdate(dado: any) {
    dado.id = this.programId;
    dado.event = this.eventId;
    console.log('enviou sensores..');
    this.channel.chanelSend(this.programId, 'sensor' + this.programId + 'pe' + this.eventId, dado);
  }
}
