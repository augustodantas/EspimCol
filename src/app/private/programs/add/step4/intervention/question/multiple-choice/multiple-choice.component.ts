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

  get graphIndex(): number {
    return this.interventionService.interventionComponents.findIndex((value) => value.instance.uuid === this.uuid);
  }

  constructor(private interventionService: InterventionService) {}

  ngOnInit(): void {
    this.intervention.options.push('Alternativa 1');
    this.intervention.options.push('Alternativa 2');
  }

  addChoice() {
    this.intervention.options.push('Alternative ' + (this.intervention.options.length + 1));
  }

  removeChoice(choiceIndex: number) {
    this.intervention.options.splice(choiceIndex, 1);
  }
}
