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

  constructor(program: any = {}) {
    this.id = program.id || null;
    this.title = program.title || '';
    this.description = program.description || '';
    this.starts = program.starts || '';
    this.ends = program.ends || '';
    this.updateDate = program.updateDate || '';
    this.hasPhases = program.hasPhases || '';
    this.isPublic = program.isPublic || '';
    this.beingEdited = program.beingEdited || '';
    this.beingDuplicated = program.beingDuplicated || '';
    this.observer = program.editor || '';
    this.observers = (program.observers as Observer[]) || [];
    this.participants = (program.participants as Participant[]) || [];
    this.events = program.events || [];
  }

  reconstructor(program: any) {
    this.id = program.id || this.id;
    this.title = program.title || this.title;
    this.description = program.description || this.description;
    this.starts = program.starts || this.starts;
    this.ends = program.ends || this.ends;
    this.updateDate = program.updateDate || this.updateDate;
    this.hasPhases = program.hasPhases != null ? program.hasPhases : this.hasPhases;
    this.isPublic = program.isPublic != null ? program.isPublic : this.isPublic;
    this.beingEdited = program.beingEdited != null ? program.beingEdited : this.beingEdited;
    this.beingDuplicated = program.beingDuplicated != null ? program.beingDuplicated : this.beingDuplicated;
    this.observer = program.editor || this.observer;
    this.observers = program.observers || this.observers;
    this.participants = program.participants || this.participants;
    this.events = program.events || this.events;

    return this;
  }
}
