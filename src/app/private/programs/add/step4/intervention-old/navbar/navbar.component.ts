import { Component, OnInit } from '@angular/core';
import {
  Intervention,
  MediaIntervention,
  QuestionIntervention,
  TaskIntervention,
} from 'src/app/private/models/intervention.model';

import { HTMLInterventionElement, InterventionService } from '../intervention.service';
import { ITENS_QUESTION } from './constants';

@Component({
  selector: 'esm-navbar',
  styleUrls: ['./navbar.component.scss'],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  over1200px: boolean;
  mobileToggleActivated: boolean;
  addInterventionPopUp = false;
  itensQuestion: any[] = ITENS_QUESTION;
  constructor(private interventionService: InterventionService) {}

  ngOnInit(): void {
    // this.over1200px = window.innerWidth > 950;
    // if (this.over1200px) this.mobileToggleActivated = false;
  }

  addIntervention(type: string, subtype?: number) {
    let intervention: Intervention;
    if (type === 'empty') intervention = new Intervention();
    else if (type === 'media') intervention = new MediaIntervention();
    else if (type === 'question') intervention = new QuestionIntervention({ questionType: subtype });
    else if (type === 'task') intervention = new TaskIntervention();

    this.interventionService.addIntervention(new HTMLInterventionElement(intervention));
  }

  // @HostListener('window:resize', ['$event'])
  // onResize() {
  //   this.over1200px = window.innerWidth > 950;
  //   if (this.over1200px) this.mobileToggleActivated = false;
  // }

  zoomPopUp() {
    // new SwalComponent({
    //   title: 'Zoom',
    //   text:
    //     'Utilize o zoom do navegador para controlar o zoom.\nNormalmente isso pode ser feito segurando a tecla "CTRL" e pressionando as teclas "+" ou "-"',
    // })
    //   .show()
    //   .then();
  }

  finish() {
    this.interventionService.finish();
  }

  debug() {
    console.log('interventionElementsGraph', this.interventionService.interventionElementsGraph);
  }
}
