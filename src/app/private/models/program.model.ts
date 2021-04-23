import { Event } from './event.model';
import { Observer } from './observer.model';
import { User } from './user.model';

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
  users: Array<User> = [];
  events: Array<Event> = [];

  constructor(program: any = {}) {}
}
