import { Component, ComponentFactoryResolver, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';

import { InterventionService } from './intervention.service';

@Component({
  selector: 'esm-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.scss'],
})
export class InterventionComponent {
  previousPosition: { x?: number; y?: number } = {};
  offset: { x: number; y: number } = { x: 0, y: 0 };

  @ViewChild('container', { read: ViewContainerRef }) interventionsContainer;
  @ViewChild('main_div') mainDiv: ElementRef;

  constructor(private interventionService: InterventionService, private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterViewInit(): void {
    this.interventionService.interventionsContainer = this.interventionsContainer;
    this.interventionService.mainDiv = this.mainDiv;
  }

  onMiddleClickDown(event: any) {
    if (event.buttons === 4) this.previousPosition = { x: event.clientX, y: event.clientY };
  }

  onMiddleClickUp(event: any) {
    if (event.buttons === 4) this.previousPosition = {};
  }

  MiddleClickScroll(event: any) {
    if (this.previousPosition.x !== undefined && this.previousPosition.y !== undefined && event.buttons === 4) {
      const currentPosition: { x: number; y: number } = { x: event.clientX, y: event.clientY };
      const amountMoved: { x: number; y: number } = {
        x: currentPosition.x - this.previousPosition.x,
        y: currentPosition.y - this.previousPosition.y,
      };

      this.offset.x += amountMoved.x;
      this.offset.y += amountMoved.y;

      this.mainDiv.nativeElement.scrollBy({ left: amountMoved.x * -1, top: amountMoved.y * -1 });

      this.previousPosition = currentPosition;
    }
  }
}
