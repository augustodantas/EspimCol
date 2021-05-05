import { Component, Input, OnInit } from '@angular/core';
import { QuestionIntervention } from 'src/app/private/models/intervention.model';

import { InterventionService } from '../../intervention.service';

@Component({
  selector: 'esm-multiple-choice',
  templateUrl: './multiple-choice.component.html',
})
export class MultipleChoiceComponent implements OnInit {
  @Input() intervention: QuestionIntervention;
  @Input() uuid: string;

  get alternatives() {
    return this.intervention.options;
  }

  get graphIndex(): number {
    return this.interventionService.interventionComponents.findIndex((value) => value.instance.uuid === this.uuid);
  }

  constructor(private interventionService: InterventionService) {}

  ngOnInit(): void {
    this.alternatives.push('Alternativa 1');
    this.alternatives.push('Alternativa 2');
  }

  addChoice() {
    this.alternatives.push('Alternative ' + (this.alternatives.length + 1));
  }

  removeChoice(choiceIndex: number) {
    this.alternatives.splice(choiceIndex, 1);
  }
}
