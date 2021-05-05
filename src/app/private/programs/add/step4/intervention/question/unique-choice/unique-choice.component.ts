import { Component, Input, OnInit } from '@angular/core';
import { QuestionIntervention } from 'src/app/private/models/intervention.model';
import { isNullOrUndefined } from 'src/app/util/functions';

import { InterventionItemComponent } from '../../intervention-item/intervention-item.component';
import { InterventionService } from '../../intervention.service';

@Component({
  selector: 'esm-unique-choice',
  templateUrl: './unique-choice.component.html',
})
export class UniqueChoiceComponent implements OnInit {
  @Input() intervention: QuestionIntervention;
  @Input() uuid: string;
  get alternatives() {
    return this.intervention?.options;
  }
  get conditions() {
    return this.intervention?.conditions;
  }
  get graphIndex(): number {
    return this.interventionService.interventionComponents.findIndex((value) => value.instance.uuid === this.uuid);
  }
  get interventionComponentsInstance(): InterventionItemComponent[] {
    return this.interventionService.interventionComponents.map((interventionComponent) => interventionComponent.instance);
  }
  constructor(private interventionService: InterventionService) {}

  ngOnInit(): void {
    this.interventionService.newInterventions$.subscribe((value) => {
      console.log(this.graphIndex);
      console.log(this.interventionService.lastInteractedIntervention);
      if (this.interventionService.lastInteractedIntervention === this.graphIndex) {
        let change = false;
        for (const alternative of this.alternatives) {
          if (isNullOrUndefined(this.conditions[alternative])) {
            this.conditions[alternative] = value.graphIndex;
            change = true;
          }
        }

        if (!change) {
          this.addChoice(value.graphIndex);
        }
      }
    });

    this.interventionService.removeIntervention$.subscribe((value) => {
      for (const alternative of this.alternatives) {
        if (this.conditions[alternative] == value) {
          this.conditions[alternative] = null;
        }

        if (this.conditions[alternative] > value) {
          this.conditions[alternative]--;
        }
      }
    });
  }

  toChar(num: number) {
    return String.fromCharCode(num);
  }

  addChoice(graphIndex: number = null) {
    const text = `Alternativa ${this.alternatives.length + 1}`;
    this.alternatives.push(text);
    this.conditions[text] = graphIndex;
  }

  removeChoice(choiceIndex: number) {
    this.alternatives.splice(choiceIndex, 1);
    this.updateEdges();
  }

  updateEdges() {
    this.interventionService.removeEdges(this.graphIndex);
    for (const alternative of this.alternatives) {
      if (!isNullOrUndefined(this.conditions[alternative])) {
        this.interventionService.setNextFromTo(this.graphIndex, Number.parseInt(this.conditions[alternative]));
      }
    }
  }

  setNextTo() {
    this.updateEdges();
  }

  onTextChange(alternativeIndex: number, oldAlternative: string, newAlternative: string) {
    this.conditions[newAlternative] = this.conditions[oldAlternative];
    this.alternatives[alternativeIndex] = newAlternative;
    delete this.conditions[oldAlternative];
  }

  onNextChange(alternative: string, nextSelected: string) {
    this.conditions[alternative] = nextSelected;
  }
}
