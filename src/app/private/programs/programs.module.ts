import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';

import { SharedModule } from '../../app.shared.module';
import { ProgramsAddComponent } from './add/programsadd.component';
import { StepPanelComponent } from './add/step-panel/step-panel.component';
import { Step1Component } from './add/step1/step1.component';
import { Step2Component } from './add/step2/step2.component';
import { Step3Component } from './add/step3/step3.component';
import { Step4Component } from './add/step4/step4.component';
import { ProgramsListComponent } from './list/programslist.component';
import { ProgramsRoutingModule } from './programs-routing.module';

// imports from dependencies

@NgModule({
  imports: [ComponentsModule, ProgramsRoutingModule, CommonModule],
  exports: [SharedModule, StepPanelComponent, Step1Component, Step2Component, Step3Component, Step4Component],
  declarations: [
    ProgramsAddComponent,
    ProgramsListComponent,
    StepPanelComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
  ],
})
export class ProgramsModule {}
