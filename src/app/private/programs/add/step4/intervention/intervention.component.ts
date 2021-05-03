import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { InterventionItemComponent } from './intervention-item/intervention-item.component';
import { HTMLInterventionElement, InterventionService } from './intervention.service';

@Component({
  selector: 'esm-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.scss'],
})
export class InterventionComponent implements OnInit {
  interventionComponents: ComponentRef<InterventionItemComponent>[] = [];
  previousPosition: { x?: number; y?: number } = {};
  offset: { x: number; y: number } = { x: 0, y: 0 };

  @ViewChild('container', { read: ViewContainerRef }) interventionsContainer;
  @ViewChild('main_div') mainDiv;

  constructor(
    private interventionService: InterventionService,
    private renderer: Renderer2,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit(): void {
    // I don't know why but there has to be a timeout here
    setTimeout((_) => {
      for (let i = 1; i < this.interventionService.graphElements.length; i++)
        this.createIntervention(this.interventionService.graphElements[i], i);
      this.interventionService.redrawGraph$.next();
    }, 0);
    this.interventionService.newInterventions$.subscribe((add) => this.createIntervention(add.intervention, add.graphIndex));
    this.interventionService.removeIntervention$.subscribe((index) => {
      this.interventionComponents[index].destroy();
      this.interventionComponents.splice(index, 1);
    });
  }

  resizeScreen() {
    // this.renderer.setStyle(this.mainDiv.nativeElement, 'width', `${document.documentElement.scrollWidth}px`);
    // this.renderer.setStyle(this.mainDiv.nativeElement, 'height', `${document.documentElement.scrollHeight}px`);
  }

  createIntervention(intervention: HTMLInterventionElement, graphIndex: number) {
    const interventionComponent: ComponentRef<InterventionItemComponent> = this.interventionsContainer.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(InterventionItemComponent)
    );
    // 340.5 is the size of an intervention + a gap between. 50 is a arbitrary padding
    interventionComponent.instance.offset = { x: 340.5 * this.interventionComponents.length + 50, y: 50 };
    interventionComponent.instance.interventionCoordinate = intervention;
    interventionComponent.instance.graphIndex = graphIndex;
    interventionComponent.instance.interventionMoved.subscribe((_) => this.resizeScreen());
    this.interventionComponents.push(interventionComponent);

    setTimeout((_) => {
      this.resizeScreen();
      this.interventionService.redrawGraph$.next();
      window.scrollTo({ top: 50, left: 340.5 * this.interventionComponents.length + 50, behavior: 'smooth' });
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

      window.scrollBy({ left: amountMoved.x * -1, top: amountMoved.y * -1 });

      this.previousPosition = currentPosition;
    }
  }
}
