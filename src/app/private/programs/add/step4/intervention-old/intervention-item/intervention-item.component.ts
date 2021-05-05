import { AfterContentInit, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { isNullOrUndefined } from 'src/app/util/functions';
import { v4 as uuid } from 'uuid';

import { HTMLInterventionElement, InterventionService } from '../intervention.service';

@Component({
  selector: 'esm-intervention-item',
  templateUrl: './intervention-item.component.html',
  styleUrls: ['./intervention-item.component.scss'],
})
export class InterventionItemComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {
  uuid: string = uuid();
  offset: { x: number; y: number } = { x: 0, y: 0 };
  interventionCoordinate: HTMLInterventionElement;
  previousPosition: { x: number; y: number };

  nextInterventionSelect: string;

  redrawGraphSubscription: Subscription;

  @ViewChild('interventionDiv') interventionDiv: ElementRef;

  get interventionComponentsInstance(): InterventionItemComponent[] {
    return this.interventionService.interventionComponents.map((interventionComponent) => interventionComponent.instance);
  }

  constructor(private interventionService: InterventionService) {}

  ngOnInit(): void {
    this.nextInterventionSelect = null;
    this.interventionService.firstInterventionChange$.subscribe((value) => {
      if (this.graphIndex !== value) {
        this.interventionCoordinate.first = false;
      } else {
        this.interventionCoordinate.first = true;
      }
    });
  }

  get graphIndex(): number {
    return this.interventionService.interventionComponents.findIndex((value) => value.instance.uuid === this.uuid);
  }

  ngAfterViewInit(): void {
    this.interventionCoordinate.width = this.interventionDiv.nativeElement.clientWidth;
    this.interventionCoordinate.height = this.interventionDiv.nativeElement.clientHeight;
    this.interventionCoordinate.x = this.offset.x + this.interventionCoordinate.width / 2;
    this.interventionCoordinate.y = this.offset.y + this.interventionCoordinate.height / 2;
  }

  ngAfterContentInit(): void {
    this.updateNextInterventions();
    this.redrawGraphSubscription = this.interventionService.redrawGraph$.subscribe((_) => this.updateNextInterventions());
  }

  ngOnDestroy() {
    this.redrawGraphSubscription.unsubscribe();
  }

  updateNextInterventions() {
    // If this intervention isn't of "unique-choice", this intervention will connect to only one other, that's why we only need to take the first connection (interventionElementsGraph[this.graphIndex][0]),
    // if there is no connection, 0. If it is unique-choice, "nextInterventionSelect" will not be used so it doesn't matter
    this.nextInterventionSelect = this.interventionService.interventionElementsGraph[this.graphIndex][0]?.toString() || null;
  }

  interventionCurrentCoordinate() {
    const position = this.interventionDiv.nativeElement.style.transform
      .match(/-?\d+px/g)
      .map((value) => Number.parseInt(value.substring(0, value.length - 2)));
    return { x: position[0], y: position[1] };
  }

  onDragStart() {
    this.previousPosition = this.interventionCurrentCoordinate();
  }

  moving() {
    const currentPosition = this.interventionCurrentCoordinate();
    if (currentPosition.y < 0) {
      this.interventionDiv.nativeElement.style.transform = 'translate3d(' + currentPosition.x + 'px, 0px, 0px) ';
      currentPosition.y = 0;
    }
    const movement = { x: currentPosition.x - this.previousPosition.x, y: currentPosition.y - this.previousPosition.y };
    this.interventionCoordinate.x = this.interventionCoordinate.x + movement.x;
    this.interventionCoordinate.y = this.interventionCoordinate.y + movement.y;

    this.offset.y = currentPosition.y;
    this.offset.x = currentPosition.x;

    this.previousPosition = currentPosition;
  }

  setNextTo() {
    const from = this.graphIndex;
    if (isNullOrUndefined(this.nextInterventionSelect)) {
      this.interventionService.removeEdges(from);
      return;
    }

    const to = Number.parseInt(this.nextInterventionSelect);
    this.interventionService.removeEdges(from, false);
    this.interventionService.setNextFromTo(from, to);
  }

  setFirst() {
    if (!this.interventionCoordinate.first) {
      this.interventionCoordinate.first = true;
      this.interventionService.setFirst(this.graphIndex);
    }
  }

  remove() {
    this.interventionService.removeIntervention(this.graphIndex);
  }
}