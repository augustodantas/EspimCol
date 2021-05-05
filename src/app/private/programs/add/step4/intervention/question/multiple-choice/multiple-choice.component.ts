import { Component, Input, OnInit } from '@angular/core';
import { QuestionIntervention } from 'src/app/private/models/intervention.model';

import { InterventionService } from '../../intervention.service';

@Component({
  selector: 'esm-multiple-choice',
  templateUrl: './multiple-choice.component.html',
})
export class MultipleChoiceComponent implements OnInit {
  @Input() intervention: QuestionIntervention;
  @Input() graphIndex: number;

  constructor(private interventionService: InterventionService) {}

  trackByFn(index, item) {
    return index;
  }

  ngOnInit(): void {
    this.intervention.options.push('Alternativa 1');
    this.intervention.options.push('Alternativa 2');
  }

  addChoice() {
    console.log(this.intervention.options);
    this.intervention.options.push('Alternative ' + (this.intervention.options.length + 1));
  }

  removeChoice(choiceIndex: number) {
    this.intervention.options.splice(choiceIndex, 1);
  }
}
