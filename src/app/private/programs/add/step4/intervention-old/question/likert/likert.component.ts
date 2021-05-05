import { Component, Input, OnInit } from '@angular/core';
import { QuestionIntervention } from 'src/app/private/models/intervention.model';

import { InterventionService } from '../../intervention.service';

@Component({
  selector: 'esm-likert',
  templateUrl: './likert.component.html',
})
export class LikertComponent implements OnInit {
  @Input() intervention: QuestionIntervention;
  @Input() uuid: string;

  get graphIndex(): number {
    return this.interventionService.interventionComponents.findIndex((value) => value.instance.uuid === this.uuid);
  }
  // Normal Likert only has 1 scale
  get scale() {
    return this.intervention.scales[0];
  }
  set scale(scale) {
    this.intervention.scales[0] = scale;
  }
  get affirmatives() {
    return this.intervention.options;
  }

  constructor(private interventionService: InterventionService) {}

  ngOnInit(): void {
    this.scale = '5 AGREEMENT';
  }

  addChoice() {
    this.affirmatives.push('Afirmativa' + (this.affirmatives.length + 1));
  }

  removeChoice(choiceIndex: number) {
    this.affirmatives.splice(choiceIndex, 1);
  }
}
