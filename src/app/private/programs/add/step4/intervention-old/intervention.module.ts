import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/app.shared.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { CanvasComponent } from './canvas/canvas.component';
import { InterventionItemComponent } from './intervention-item/intervention-item.component';
import { InterventionComponent } from './intervention.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LikertCustomComponent } from './question/likert-custom/likert-custom.component';
import { LikertComponent } from './question/likert/likert.component';
import { MultipleChoiceComponent } from './question/multiple-choice/multiple-choice.component';
import { QuestionComponent } from './question/question.component';
import { UniqueChoiceComponent } from './question/unique-choice/unique-choice.component';

@NgModule({
  declarations: [
    InterventionComponent,
    NavbarComponent,
    CanvasComponent,
    InterventionItemComponent,
    QuestionComponent,
    UniqueChoiceComponent,
    LikertComponent,
    LikertCustomComponent,
    MultipleChoiceComponent,
  ],
  imports: [CommonModule, DragDropModule, SharedModule, ComponentsModule],
  exports: [InterventionComponent, NavbarComponent, CanvasComponent, InterventionItemComponent, UniqueChoiceComponent],
})
export class InterventionModule {}
