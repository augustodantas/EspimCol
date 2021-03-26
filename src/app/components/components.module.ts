import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { MomentModule } from 'ngx-moment';

import { InputValidationsComponent } from './input-validations/input-validations.component';
import { ModalConfirmDeleteComponent } from './modal-confirm-delete/modal-confirm-delete.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';

const modules = [
  CommonModule,
  MomentModule,
  TranslateModule,
  ReactiveFormsModule,
  FormsModule,
  BsDatepickerModule,
  ModalModule,
  BsDropdownModule,
  PaginationModule,
];
@NgModule({
  declarations: [InputValidationsComponent, SplashScreenComponent, ModalConfirmDeleteComponent],
  imports: [...modules],
  exports: [...modules, InputValidationsComponent, SplashScreenComponent, ModalConfirmDeleteComponent],
})
export class ComponentsModule {}
