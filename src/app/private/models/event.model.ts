import { Intervention } from './intervention.model';
import { Sensor } from './sensor.model';
import { Trigger } from './trigger.model';

export class Event {
  id: number;
  title: string = '';
  description: string = '';
  color: string = '';
  type: string = '';
  sensors: Array<Sensor> = [];
  complexConditions;
  triggers: Array<Trigger>;

  constructor(event: any = {}) {}
}

export class ActiveEvent extends Event {
  interventions: Array<Intervention>;

  constructor(event: any = {}) {
    super(event);
  }
}
