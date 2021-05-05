import { HttpClient } from '@angular/common/http';
import { ComponentFactoryResolver, ComponentRef, ElementRef, Injectable, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ActiveEvent } from 'src/app/private/models/event.model';
import { Intervention, QuestionIntervention } from 'src/app/private/models/intervention.model';
import { isNullOrUndefined, toChar } from 'src/app/util/functions';

import { InterventionItemComponent } from './intervention-item/intervention-item.component';

@Injectable({
  providedIn: 'root',
})
export class InterventionService {
  program_id: number;
  event: ActiveEvent;

  lastInteractedIntervention: number;
  interventionsContainer: ViewContainerRef;
  mainDiv: ElementRef;

  hasMultiplePaths: boolean = false;
  interventionComponents: ComponentRef<InterventionItemComponent>[] = [];
  interventionElementsGraph: number[][];
  newInterventions$: Subject<{ graphIndex: number; intervention: HTMLInterventionElement }> = new Subject<{
    graphIndex: number;
    intervention: HTMLInterventionElement;
  }>();
  removeIntervention$: Subject<number> = new Subject<number>();
  redrawGraph$: Subject<void> = new Subject<void>();
  firstInterventionChange$: Subject<number> = new Subject<number>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  get firstIntervention(): number {
    return this.interventionComponents.findIndex((value) => value.instance.interventionCoordinate.first === true);
  }

  get graphElements(): HTMLInterventionElement[] {
    return this.interventionComponents.map((i) => i.instance.interventionCoordinate);
  }

  init(program_id: number, event: ActiveEvent, interventions: Intervention[]) {
    this.program_id = program_id;
    this.event = event;

    interventions.sort((a, b) => {
      if (a.orderPosition < b.orderPosition) {
        return -1;
      } else if (a.orderPosition > b.orderPosition) {
        return 1;
      } else {
        return 0;
      }
    });

    // Old espim did not save order position correctly, so here we have to correct
    const orderPositions = {};
    for (let i = 0; i < interventions.length; i++) orderPositions[interventions[i].orderPosition] = i + 1;
    orderPositions[0] = 0;

    // Not needed since lastInteractedIntervention gets update on the BFS of the canvas
    // this.lastInteractedIntervention = interventions.length;
    this.interventionElementsGraph = interventions.map((value) => {
      if (value.type === 'question' && (value as QuestionIntervention).questionType === 1)
        return Object.keys((value as QuestionIntervention).conditions).map(
          (alternative) => orderPositions[(value as QuestionIntervention).conditions[alternative]]
        );
      else return [orderPositions[value.next]];
    });
  }

  finish() {
    if (this.hasMultiplePaths) {
      // new SwalComponent({
      //   title: 'Há intervenções desconectadas',
      //   text:
      //     'Encontramos intervenções que não estão ligadas à primeira. Por favor, é necessário deleta-las ou liga-las ao caminho principal',
      // })
      //   .show()
      //   .then();
      return;
    }

    // it is not necessary to update orderPosition since it gets updated together with the canvas (arrows)

    // this.event.interventions = this.event.interventions.map((value) => value.id);

    this.router.navigateByUrl(`private/programs/add/${this.program_id}/fourth`).then();
  }

  graphElement(i: number) {
    return this.graphElements[i];
  }

  addIntervention(intervention: HTMLInterventionElement) {
    if (this.graphElements.length > 0 && !isNullOrUndefined(this.lastInteractedIntervention)) {
      if (
        this.graphElements[this.lastInteractedIntervention] instanceof QuestionIntervention &&
        (this.graphElement[this.lastInteractedIntervention] as QuestionIntervention).questionType == 1
      ) {
        this.interventionElementsGraph[this.lastInteractedIntervention].push(this.interventionElementsGraph.length);
      } else if (!isNullOrUndefined(this.interventionElementsGraph[this.lastInteractedIntervention])) {
        this.interventionElementsGraph[this.lastInteractedIntervention] = [this.interventionElementsGraph.length];
      }
    } else {
      intervention.first = true;
      this.firstInterventionChange$.next(0);
    }

    this.interventionElementsGraph.push([null]);
    this.createIntervention(intervention);

    this.redrawGraph$.next();

    intervention.onChange$.subscribe((_) => this.redrawGraph$.next());
  }

  removeIntervention(graphIndex: number) {
    this.interventionElementsGraph.splice(graphIndex, 1);
    this.interventionComponents[graphIndex].destroy();
    this.interventionComponents.splice(graphIndex, 1);

    for (const intervention of this.interventionElementsGraph) {
      let i = 0;
      while (i < intervention.length) {
        if (intervention[i] === graphIndex) {
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

    console.log(this.interventionElementsGraph);
  }

  createIntervention(intervention: HTMLInterventionElement) {
    const interventionComponent: ComponentRef<InterventionItemComponent> = this.interventionsContainer.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(InterventionItemComponent)
    );

    let goodSpaceBetween = 50;
    let offsetX = goodSpaceBetween;

    // Pega o maior Offset dos componentes
    this.interventionComponents.forEach((interventionComponent) => {
      let componentOffsetX = interventionComponent.instance.offset.x + interventionComponent.instance.interventionCoordinate.width;
      if (componentOffsetX > offsetX) {
        offsetX = componentOffsetX;
      }
    });

    interventionComponent.instance.offset = { x: offsetX + goodSpaceBetween, y: goodSpaceBetween };
    interventionComponent.instance.interventionCoordinate = intervention;
    // interventionComponent.instance.graphIndex = graphIndex;
    this.interventionComponents.push(interventionComponent);

    this.newInterventions$.next({ graphIndex: interventionComponent.instance.graphIndex, intervention });

    setTimeout((_) => {
      this.redrawGraph$.next();
      this.mainDiv.nativeElement.scrollTo({ top: 0, left: offsetX, behavior: 'smooth' });
    }, 250);
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
    return this._width;
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
