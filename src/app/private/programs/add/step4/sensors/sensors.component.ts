import { Component, EventEmitter, Output } from '@angular/core';
import { Sensor } from 'src/app/private/models/sensor.model';
import { v4 as uuid } from 'uuid';

import { COLLECTORS, SENSORS } from '../../../constants';

@Component({
  selector: 'esm-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss'],
})
export class SensorsComponent {
  sensors: any[] = SENSORS;
  colletors: any[] = COLLECTORS;
  selectedSensors: Sensor[] = [];
  uid: string = uuid();
  @Output() response: EventEmitter<Sensor[]> = new EventEmitter<Sensor[]>();

  changeSensor(newSensor: any, collector: any) {
    const dados = {
      sensor: newSensor.alias,
      collector: collector.alias,
    } as Sensor;

    // Remove o sensor já cadastrado
    this.selectedSensors.filter((selectedSensor) => selectedSensor.sensor != newSensor.alias);
    this.selectedSensors.push(dados);

    this.response.emit(this.selectedSensors);
  }
}
