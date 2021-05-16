import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  Intervention,
  MediaIntervention,
  QuestionIntervention,
  TaskIntervention,
} from 'src/app/private/models/intervention.model';

import { HTMLInterventionElement, InterventionService } from '../intervention.service';
import { ITENS_QUESTION } from './constants';

@Component({
  selector: 'esm-navbar',
  styleUrls: ['./navbar.component.scss'],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  over1200px: boolean;
  mobileToggleActivated: boolean;
  addInterventionPopUp = false;
  itensQuestion: any[] = ITENS_QUESTION;
  zoom: number = 1;
  @Output() updateZoom: EventEmitter<number> = new EventEmitter<number>();
  @Output() finishIntervention: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private interventionService: InterventionService) {}

  ngOnInit(): void {
    // this.over1200px = window.innerWidth > 950;
    // if (this.over1200px) this.mobileToggleActivated = false;
  }

  addIntervention(type: string, subtype?: number) {
    let intervention: Intervention;
    if (type === 'empty') intervention = new Intervention();
    else if (type === 'media') intervention = new MediaIntervention();
    else if (type === 'question') intervention = new QuestionIntervention({ question_type: subtype });
    else if (type === 'task') intervention = new TaskIntervention();

    this.interventionService.addIntervention(new HTMLInterventionElement(intervention));
  }

  nextStateEnabled(): boolean {
    return this.interventionService.states.length > 0 && this.interventionService.currentState > 0;
  }

  previousStateEnabled(): boolean {
    return this.interventionService.currentState < this.interventionService.states.length - 1;
  }

  nextState() {
    this.interventionService.nextState();
  }

  previousState() {
    this.interventionService.previousState();
  }

  zoomIn() {
    if (this.zoom < 1) {
      this.zoom = +(this.zoom + 0.1).toFixed(1);
      this.updateZoom.emit(this.zoom);
    }
  }

  zoomOut() {
    if (this.zoom >= 0.7) {
      this.zoom = +(this.zoom - 0.1).toFixed(1);
      this.updateZoom.emit(this.zoom);
    }
  }

  finish() {
    this.finishIntervention.emit(true);
  }

  debug() {
    // console.log('interventionElementsGraph', this.interventionService.interventionElementsGraph);
  }
}
