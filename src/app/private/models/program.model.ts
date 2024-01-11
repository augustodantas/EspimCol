import { ChatProgram } from './chat.program.model';
import { Event } from './event.model';
import { HistoricProgram } from './historic.program.model';
import { Observer } from './observer.model';
import { User } from './user.model';

export class Program {
  id: number = -1;
  title: string = '';
  description: string = '';
  starts: string = '';
  ends: string = '';
  updateDate: string = '';
  hasPhases: boolean = false;
  isPublic: boolean = false;
  beingEdited: boolean = false;
  beingDuplicated: boolean = false;
  // composed entities
  observer: Observer;
  observers: Array<Observer> = [];
  passiveEvents: Array<Event> = [];
  activeEvents: Array<Event> = [];
  users: Array<User> = [];
  chatMessages: ChatProgram[] = [];
  comments: ChatProgram[] = [];
  historic: HistoricProgram[] = [];

  constructor(program: any = {}) {}
}
