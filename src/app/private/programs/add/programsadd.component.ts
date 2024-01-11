import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProgramsAddService } from './programsadd.service';
import { StepPanelComponent } from './step-panel/step-panel.component';
import { Program } from '../../models/program.model';
import { DAOService } from '../../dao/dao.service';
import { ESPIM_REST_Programs } from 'src/app/app.api';

@Component({
  selector: 'esm-programs-add',
  templateUrl: './programsadd.component.html',
})
export class ProgramsAddComponent {
  @ViewChild(StepPanelComponent) stepPanel: StepPanelComponent;

  chatOn: boolean = false;
  historicOn: boolean = false;

  tamanho(): number {
    if (!this.chatOn && !this.historicOn) {
      return 0;
    } else {
      if (this.chatOn && this.historicOn) {
        return 2;
      } else {
        return 1;
      }
    }
  }

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private programsAddService: ProgramsAddService,
    private _dao: DAOService
  ) {}

  ngOnInit() {
    let id = this.activeRoute.snapshot.params.id;

    this.programsAddService.clearData();

    if (id) {
      this.programsAddService.fetchData(id);
    } else {
      this.programsAddService.criarProgram();
      this.router.navigate(['./first'], {
        relativeTo: this.activeRoute,
        queryParams: { reset: true },
      });
      //this.programsAddService.clearData();
    }
  }
}
