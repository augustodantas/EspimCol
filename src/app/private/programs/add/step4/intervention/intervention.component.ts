import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import debounce from 'lodash/debounce';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Intervention } from 'src/app/private/models/intervention.model';

import { InterventionItemComponent } from './intervention-item/intervention-item.component';
import { HTMLInterventionElement, InterventionService } from './intervention.service';

@Component({
  selector: 'esm-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.scss'],
})
export class InterventionComponent implements AfterViewInit {
  previousPosition: { x?: number; y?: number } = {};
  offset: { x: number; y: number } = { x: 0, y: 0 };
  interventionComponents: ComponentRef<InterventionItemComponent>[] = [];
  zoomSize: number = 1;

  @Output() response: EventEmitter<Intervention[]> = new EventEmitter<Intervention[]>();
  @Input() interventionsToInit: Intervention[] = [];

  @ViewChild('container', { read: ViewContainerRef }) interventionsContainer;
  @ViewChild('main_div') mainDiv: ElementRef;

  constructor(
    public bsModalRef: BsModalRef,
    private interventionService: InterventionService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngAfterViewInit(): void {
    this.interventionService.clearBoard$.subscribe((add) => this.clearBoard());
    this.interventionService.newInterventions$.subscribe((add) => this.createIntervention(add.intervention));
    this.interventionService.removeIntervention$.subscribe((index) => {
      this.interventionComponents[index].destroy();
      this.interventionComponents.splice(index, 1);
    });

    this.interventionService.init(this.interventionsToInit);
  }

  clearBoard() {
    this.interventionComponents.forEach((component) => {
      component.destroy();
    });

    this.interventionComponents = [];
  }

  createIntervention(intervention: HTMLInterventionElement) {
    const interventionComponent: ComponentRef<InterventionItemComponent> = this.interventionsContainer.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(InterventionItemComponent)
    );

    let goodSpaceBetween = 50;
    let offsetX = goodSpaceBetween;
    let offsetY = goodSpaceBetween;

    // Pega o maior Offset dos componentes
    this.interventionComponents.forEach((interventionComponent) => {
      let componentOffsetX =
        interventionComponent.instance.offset.x + interventionComponent.instance.interventionCoordinate.width + goodSpaceBetween;

      if (componentOffsetX > offsetX) {
        offsetX = componentOffsetX;
      }
    });

    // Se tiver gravado no banco o X e o Y,
    // Recupera aqui
    if (intervention.intervention.x) {
      offsetX = intervention.intervention.x;
    }
    if (intervention.intervention.y) {
      offsetY = intervention.intervention.y;
    }

    interventionComponent.instance.offset = { x: offsetX, y: offsetY };
    interventionComponent.instance.interventionCoordinate = intervention;
    this.interventionComponents.push(interventionComponent);

    setTimeout(() => {
      interventionComponent.instance.interventionCoordinate.intervention.x = offsetX;
      interventionComponent.instance.interventionCoordinate.intervention.y = offsetY;

      this.interventionService.redrawGraph$.next();

      let scrollMeioDaTela = offsetX - window.innerWidth / 2 + interventionComponent.instance.interventionCoordinate.width / 2;
      if (scrollMeioDaTela < 0) {
        scrollMeioDaTela = 0;
      }

      // Utiliza o scroll com debounce para evitar dois eventos no mesmo tempo
      this.scrollTo(scrollMeioDaTela);
    });
  }

  scrollTo = debounce(function (scrollSize) {
    this.mainDiv.nativeElement.scrollTo({ top: 0, left: scrollSize, behavior: 'smooth' });
  }, 100);

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

  finish() {
    this.response.emit(this.interventionService.getCurrentState());
    this.bsModalRef.hide();
  }
}
