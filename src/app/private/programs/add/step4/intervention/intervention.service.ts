import { ComponentFactoryResolver, ElementRef, Injectable, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import {
  Intervention,
  MediaIntervention,
  QuestionIntervention,
  TaskIntervention,
} from 'src/app/private/models/intervention.model';
import { isNullOrUndefined, toChar } from 'src/app/util/functions';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class InterventionService {
  lastInteractedIntervention: number;
  interventionsContainer: ViewContainerRef;
  interventionElementsGraph: number[][] = [];
  graphElements: HTMLInterventionElement[] = [];
  mainDiv: ElementRef;

  redrawGraph$: Subject<void> = new Subject<void>();
  removeIntervention$: Subject<number> = new Subject<number>();
  hasMultiplePaths: boolean = false;

  // interventionElementsGraph: number[][];
  newInterventions$: Subject<{ graphIndex: number; intervention: HTMLInterventionElement }> = new Subject<{
    graphIndex: number;
    intervention: HTMLInterventionElement;
  }>();
  // removeIntervention$: Subject<number> = new Subject<number>();
  firstInterventionChange$: Subject<number> = new Subject<number>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  get firstIntervention(): number {
    return this.graphElements.findIndex((value) => value.intervention.first === true);
  }

  init() {
    this.loadJson();
  }

  loadJson() {
    let interventions = JSON.parse(
      '[{"orderPosition":1,"first":true,"obligatory":false,"x":51,"y":41,"type":"question","questionType":1,"conditions":{"Alternativa 1":1,"Alternativa 2":null},"options":["Alternativa 1"],"scales":[]},{"orderPosition":2,"first":false,"next":2,"obligatory":false,"type":"empty"},{"orderPosition":3,"first":false,"obligatory":false,"type":"question","questionType":1,"conditions":{"Alternativa 1":"1"},"options":["Alternativa 1"],"scales":[]}]'
    );

    this.loadInterventions(interventions);
  }

  saveState() {}

  getCurrentState() {
    this.graphElements.forEach((element, index) => {
      // if the intervention is of unique choice, it is already up to date (it gets updated in unique-choice.component.ts)
      // else we must updated intervention.next to the first and only intervention it points
      if (element.intervention.type !== 'question' && (element.intervention as QuestionIntervention).questionType !== 1)
        element.intervention.next = this.interventionElementsGraph[index][0];
    });

    return this.graphElements.map((value) => value.intervention);
  }

  loadInterventions(interventionsArray: Intervention[]) {
    let interventions = interventionsArray.map((item) => {
      return this.transformToClass(item);
    });

    // Popula as variaveis de controle
    // E adiciona os elementos
    interventions.forEach((i: HTMLInterventionElement, index) => {
      // Converte o .next ou o .conditions para o interventionElementsGraph
      if (i.type !== 'question' && (i.intervention as QuestionIntervention).questionType !== 1) {
        this.interventionElementsGraph.push([i.intervention.next]);
      } else {
        let questionIntervention = i.intervention as QuestionIntervention;
        let arrowsIndexes = Object.values(questionIntervention.conditions).filter(function (item, pos, self) {
          return self.indexOf(item) == pos;
        }) as number[];

        this.interventionElementsGraph.push(arrowsIndexes);
      }
      this.graphElements.push(i);

      // Evento para adicionar o componente na tela
      this.newInterventions$.next({ graphIndex: index, intervention: i });
    });

    this.redrawGraph$.next();

    //   this.program_id = program_id;
    //   this.event = event;
    //   interventions.sort((a, b) => {
    //     if (a.orderPosition < b.orderPosition) {
    //       return -1;
    //     } else if (a.orderPosition > b.orderPosition) {
    //       return 1;
    //     } else {
    //       return 0;
    //     }
    //   });
    // Old espim did not save order position correctly, so here we have to correct
    //   const orderPositions = {};
    //   for (let i = 0; i < interventions.length; i++) orderPositions[interventions[i].orderPosition] = i + 1;
    //   orderPositions[0] = 0;

    //   this.interventionElementsGraph = interventions.map((value) => {
    //     if (value.type === 'question' && (value as QuestionIntervention).questionType === 1)
    //       return Object.keys((value as QuestionIntervention).conditions).map(
    //         (alternative) => orderPositions[(value as QuestionIntervention).conditions[alternative]]
    //       );
    //     else return [orderPositions[value.next]];
    //   });
  }

  transformToClass(data: Intervention): HTMLInterventionElement {
    let intervention: Intervention;

    if (data.type === 'empty') intervention = new Intervention(data);
    else if (data.type === 'media') intervention = new MediaIntervention(data);
    else if (data.type === 'question') intervention = new QuestionIntervention(data);
    else if (data.type === 'task') intervention = new TaskIntervention(data);

    return new HTMLInterventionElement(intervention);
  }
  finish() {
    //   if (this.hasMultiplePaths) {
    // new SwalComponent({
    //   title: 'Há intervenções desconectadas',
    //   text:
    //     'Encontramos intervenções que não estão ligadas à primeira. Por favor, é necessário deleta-las ou liga-las ao caminho principal',
    // })
    //   .show()
    //   .then();
    //     return;
    //   }

    console.log(this.interventionElementsGraph);
    /* Connection to server
    if (intervention.id)
      this.http.patch(`${ESPIM_REST_Interventions}${intervention.id}/`, intervention).subscribe(_ => {}, _ => console.log(`Failed to patch intervention of id ${intervention.id}, orderPosition ${intervention.orderPosition}`));
    else
      this.http.post(ESPIM_REST_Interventions, intervention).subscribe((data: any) => intervention.id = data.id, _ => console.log(`Failed to post intervention of orderPosition ${intervention.orderPosition}`));
    */

    console.log(JSON.stringify(this.getCurrentState()));

    //   this.router.navigateByUrl(`private/programs/add/${this.program_id}/fourth`).then();
  }

  addIntervention(intervention: HTMLInterventionElement) {
    if (!isNullOrUndefined(this.lastInteractedIntervention)) {
      if (
        this.graphElement(this.lastInteractedIntervention).intervention instanceof QuestionIntervention &&
        (this.graphElement(this.lastInteractedIntervention).intervention as QuestionIntervention).questionType == 1
      ) {
        this.interventionElementsGraph[this.lastInteractedIntervention].push(this.interventionElementsGraph.length);
      } else if (!isNullOrUndefined(this.interventionElementsGraph[this.lastInteractedIntervention])) {
        this.interventionElementsGraph[this.lastInteractedIntervention] = [this.interventionElementsGraph.length];
      }
    }

    if (this.graphElements.length == 0 && isNullOrUndefined(intervention.first)) {
      intervention.first = true;
    }

    this.interventionElementsGraph.push([null]);
    this.graphElements.push(intervention);

    this.newInterventions$.next({ graphIndex: this.graphElements.length - 1, intervention });
    this.redrawGraph$.next();
  }

  removeIntervention(graphIndex: number) {
    this.interventionElementsGraph.splice(graphIndex, 1);
    this.graphElements.splice(graphIndex, 1);

    for (const intervention of this.interventionElementsGraph) {
      let i = 0;
      while (i < intervention.length) {
        if (intervention[i] == graphIndex) {
          intervention[i] = null;
        } else if (intervention[i] > graphIndex) {
          intervention[i]--;
          i++;
        } else {
          i++;
        }
      }
    }
    if (this.interventionElementsGraph.length == 0) {
      this.lastInteractedIntervention = null;
    }

    this.removeIntervention$.next(graphIndex);
    this.redrawGraph$.next();
  }

  graphElement(i: number) {
    return this.graphElements[i];
  }

  setNextFromTo(from: number, to: number) {
    if (this.hasArrow(from, to)) {
      return;
    }

    this.interventionElementsGraph[from].push(to);
    this.redrawGraph$.next();
  }

  private hasArrow(from: number, to: number) {
    for (const intervention of this.interventionElementsGraph[from]) {
      if (intervention === to) {
        return true;
      }
    }
    return false;
  }

  removeEdges(vertice: number, emit: boolean = true) {
    this.interventionElementsGraph[vertice] = [];
    if (emit) {
      this.redrawGraph$.next();
    }
  }

  warnCycle(intervention: number) {
    // alert('Intervenção ' + intervention + ' resulta em um ciclo');
  }

  setFirst(graphIndex: number) {
    this.firstInterventionChange$.next(graphIndex);
    this.redrawGraph$.next();
  }
}

export class HTMLInterventionElement {
  uuid: string = uuid();
  onChange$: Subject<HTMLInterventionElement> = new Subject<HTMLInterventionElement>();

  constructor(
    public intervention?: Intervention,
    public _x?: number,
    public _y?: number,
    public _width?: number,
    public _height?: number
  ) {}

  get x() {
    return this._x;
  }
  set x(x: number) {
    if (x !== this._x) {
      this._x = x;
      this.onChange$.next(this);
    }
  }

  get y() {
    return this._y;
  }
  set y(y: number) {
    if (y !== this._y) {
      this._y = y;
      this.onChange$.next(this);
    }
  }

  get width() {
    if (this._width) return this._width;
    else return 300;
  }
  set width(width: number) {
    if (width !== this._width) {
      this._width = width;
      this.onChange$.next(this);
    }
  }

  get height() {
    return this._height;
  }
  set height(height: number) {
    if (height !== this._height) {
      this._height = height;
      this.onChange$.next(this);
    }
  }

  get type() {
    return this.intervention?.type;
  }
  get questionType() {
    if (this.intervention instanceof QuestionIntervention) return (this.intervention as QuestionIntervention).questionType;
    return undefined;
  }
  get statement() {
    return this.intervention?.statement;
  }
  set statement(statement: string) {
    this.intervention.statement = statement;
  }
  get orderPosition() {
    return this.intervention?.orderPosition;
  }
  set orderPosition(orderPosition: number) {
    this.intervention.orderPosition = orderPosition;
  }
  get orderDescription() {
    return this.orderPosition < 0 ? toChar(this.orderPosition * -1) : this.orderPosition;
  }
  get typeDescription() {
    return this.intervention?.getTypeDescription();
  }
  get first() {
    return this.intervention?.first;
  }
  set first(first: boolean) {
    this.intervention.first = first;
  }
  get obligatory() {
    return this.intervention?.obligatory;
  }
  set obligatory(obligatory) {
    this.intervention.obligatory = obligatory;
  }

  get top() {
    return { x: this.x, y: this.y - this.height / 2 };
  }
  get bottom() {
    return { x: this.x, y: this.y + this.height / 2 };
  }
  get left() {
    return { x: this.x - this.width / 2, y: this.y };
  }
  get right() {
    return { x: this.x + this.width / 2, y: this.y };
  }
}
