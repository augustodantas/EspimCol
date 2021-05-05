import { Component, Input } from '@angular/core';
import { QuestionIntervention } from 'src/app/private/models/intervention.model';

import { InterventionService } from '../../intervention.service';

@Component({
  selector: 'esm-likert-custom',
  templateUrl: './likert-custom.component.html',
})
export class LikertCustomComponent {
  @Input() intervention: QuestionIntervention;
  @Input() uuid: string;

  get graphIndex(): number {
    return this.interventionService.interventionComponents.findIndex((value) => value.instance.uuid === this.uuid);
  }

  get scales() {
    return this.intervention.scales;
  }

  constructor(private interventionService: InterventionService) {}

  addChoice() {
    this.scales.push('Valor' + (this.scales.length + 1));
  }

  removeChoice(choiceIndex: number) {
    this.scales.splice(choiceIndex, 1);
  }
}
