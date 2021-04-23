import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Program } from 'src/app/private/models/program.model';

import { ProgramsAddService } from '../programsadd.service';

@Component({
  selector: 'esm-step-panel',
  templateUrl: './step-panel.component.html',
})
export class StepPanelComponent implements OnInit {
  program: Observable<Program>; // These are the observers of this program

  currentStep: number = 1;

  constructor(private programAddService: ProgramsAddService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.program = this.programAddService.program;

    this.updateStep(this.router.url);

    // Subscribes to url changes. At first there will be a 'reset' queryParam that indicates that the currentStep shall be reseted. Then, it will listen to url changes and update the currentStep accordingly
    this.router.events.subscribe((value: NavigationEnd) => {
      this.updateStep(value.urlAfterRedirects);
    });
  }

  updateStep(url: string) {
    if (!url) return;
    const urlArray = url.split('/');
    const urlStep = urlArray.pop();

    let step: number;
    if (urlStep.startsWith('first')) step = 1;
    else if (urlStep.startsWith('second')) step = 2;
    else if (urlStep.startsWith('third')) step = 3;
    else if (urlStep.startsWith('fourth')) step = 4;

    if (step > this.currentStep) this.currentStep = step;
  }
}
