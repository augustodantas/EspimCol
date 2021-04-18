import { Event } from './event.model';
import { Observer } from './observer.model';
import { Participant } from './participant.model';

export class Program {
  id: number;
  title: string;
  description: string;
  starts: string;
  ends: string;
  updateDate: string;
  hasPhases: boolean;
  isPublic: boolean;
  beingEdited: boolean;
  beingDuplicated: boolean;
  // composed entities
  observer: Observer;
  observers: Array<Observer> = [];
  observersInstance: Array<Observer>;
  participants: Array<number>;
  participantsInstace: Array<Participant>;
  events: Array<number>;
  eventsInstance: Array<Event>;

  constructor(program: any = {}) {}
}
