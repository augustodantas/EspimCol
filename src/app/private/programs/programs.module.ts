import { SharedModule } from './../../app.shared.module';
import { ProgramsRoutingModule } from './programs-routing.module';
import { ActiveEventComponent } from './add/step4/active-event/active-event.component';
import { EventComponent } from './add/step4/event/event.component';
import { Step4Component } from './add/step4/step4.component';
import { Step3Component } from './add/step3/step3.component';
import { Step2Component } from './add/step2/step2.component';
import { Step1Component } from './add/step1/step1.component';
import { StepPanelComponent } from './add/step-panel/step-panel.component';
import { ProgramsAddComponent } from './add/programsadd.component';
import { ProgramsListComponent } from './list/programlist.component';
import { ProgramsComponent } from './programs.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PrivateRoutingModule } from './../private-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// imports from dependencies

@NgModule({
  declarations: [
    StepPanelComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    EventComponent,
    ActiveEventComponent
],
  imports: [
    ProgramsRoutingModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module,
    NgbModule,
    DragDropModule
  ],
  providers: []
})
export class ProgramModule { }
