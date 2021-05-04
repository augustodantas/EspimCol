import { Component, ComponentFactoryResolver, ComponentRef, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';

import { InterventionItemComponent } from './intervention-item/intervention-item.component';
import { HTMLInterventionElement, InterventionService } from './intervention.service';

@Component({
  selector: 'esm-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.scss'],
})
export class InterventionComponent {
  interventionComponents: ComponentRef<InterventionItemComponent>[] = [];
  previousPosition: { x?: number; y?: number } = {};
  offset: { x: number; y: number } = { x: 0, y: 0 };

  @ViewChild('container', { read: ViewContainerRef }) interventionsContainer;
  @ViewChild('main_div') mainDiv: ElementRef;

  constructor(private interventionService: InterventionService, private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterViewInit(): void {
    // I don't know why but there has to be a timeout here
    setTimeout((_) => {
      for (let i = 1; i < this.interventionService.graphElements.length; i++) {
        this.createIntervention(this.interventionService.graphElements[i], i);
      }
      this.interventionService.redrawGraph$.next();
    }, 0);

    this.interventionService.newInterventions$.subscribe((add) => this.createIntervention(add.intervention, add.graphIndex));
    this.interventionService.removeIntervention$.subscribe((index) => {
      this.interventionComponents[index].destroy();
      this.interventionComponents.splice(index, 1);
    });
  }

  createIntervention(intervention: HTMLInterventionElement, graphIndex: number) {
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
    interventionComponent.instance.graphIndex = graphIndex;
    this.interventionComponents.push(interventionComponent);

    setTimeout((_) => {
      this.interventionService.redrawGraph$.next();
      this.mainDiv.nativeElement.scrollTo({ top: 0, left: offsetX, behavior: 'smooth' });
    }, 250);
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
