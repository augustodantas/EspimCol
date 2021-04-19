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
  participants: Array<Participant>;
  events: Array<number>;

  constructor(program: any = {}) {}
}
