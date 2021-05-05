import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { isNullOrUndefined } from 'src/app/util/functions';

import { HTMLInterventionElement, InterventionService } from '../intervention.service';

@Component({
  selector: 'esm-intervention-item',
  templateUrl: './intervention-item.component.html',
  styleUrls: ['./intervention-item.component.scss'],
})
export class InterventionItemComponent implements OnInit, AfterViewInit {
  interventionCoordinate: HTMLInterventionElement;
  nextInterventionSelect: string;
  redrawGraphSubscription: Subscription;

  previousPosition: { x: number; y: number };
  offset: { x: number; y: number } = { x: 0, y: 0 };
  @ViewChild('interventionDiv') interventionDiv: ElementRef;

  get graphIndex(): number {
    return this.interventionService.graphElements.findIndex((value) => value.uuid === this.interventionCoordinate.uuid);
  }

  get interventionHtmlElements(): HTMLInterventionElement[] {
    return this.interventionService.graphElements.map((htmlComponent) => htmlComponent);
  }

  constructor(private interventionService: InterventionService) {}

  ngOnInit(): void {
    this.interventionService.firstInterventionChange$.subscribe((value) => {
      if (this.graphIndex !== value) {
        this.interventionCoordinate.first = false;
      } else {
        this.interventionCoordinate.first = true;
      }
    });
  }

  ngAfterContentInit(): void {
    this.updateNextInterventions();
    this.redrawGraphSubscription = this.interventionService.redrawGraph$.subscribe((_) => this.updateNextInterventions());
  }

  ngOnDestroy() {
    this.redrawGraphSubscription.unsubscribe();
  }

  updateNextInterventions() {
    this.nextInterventionSelect = this.interventionService.interventionElementsGraph[this.graphIndex][0]?.toString() || null;
  }

  ngAfterViewInit(): void {
    this.interventionCoordinate.width = this.interventionDiv.nativeElement.clientWidth;
    this.interventionCoordinate.height = this.interventionDiv.nativeElement.clientHeight;
    this.interventionCoordinate.x = this.offset.x + this.interventionCoordinate.width / 2;
    this.interventionCoordinate.y = this.offset.y + this.interventionCoordinate.height / 2;
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

    this.interventionService.redrawGraph$.next();
  }

  remove() {
    this.interventionService.removeIntervention(this.graphIndex);
  }

  setFirst() {
    if (!this.interventionCoordinate.first) {
      this.interventionService.setFirst(this.graphIndex);
    }
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
}
