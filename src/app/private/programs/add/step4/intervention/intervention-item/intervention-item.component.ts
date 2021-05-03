import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { isNullOrUndefined } from 'src/app/util/functions';

import { HTMLInterventionElement, InterventionService } from '../intervention.service';

@Component({
  selector: 'esm-intervention-item',
  templateUrl: './intervention-item.component.html',
  styleUrls: ['./intervention-item.component.scss'],
})
export class InterventionItemComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {
  offset: { x: number; y: number } = { x: 0, y: 0 };
  interventionCoordinate: HTMLInterventionElement;
  previousPosition: { x: number; y: number };

  graphIndex: number;

  nextInterventions: HTMLInterventionElement[] = [];
  nextInterventionSelect: string;

  redrawGraphSubscription: Subscription;

  @Output() interventionMoved = new EventEmitter<HTMLInterventionElement>();

  @ViewChild('interventionDiv') interventionDiv: ElementRef;

  constructor(private interventionService: InterventionService) {}

  ngOnInit(): void {
    this.nextInterventionSelect = null;
    this.interventionService.firstInterventionChange$.subscribe((value) => {
      if (this.graphIndex !== value) {
        this.interventionCoordinate.first = false;
      }
    });
    this.interventionService.removeIntervention$.subscribe((index) => {
      if (this.graphIndex > index) {
        this.graphIndex -= 1;
      }
    });
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

  toChar(num: number) {
    return String.fromCharCode(num);
  }

  updateNextInterventions() {
    this.nextInterventions = this.interventionService.graphElements;
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

    this.interventionMoved.emit(this.interventionCoordinate);
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
