import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { MomentModule } from 'ngx-moment';

import { InputValidationsComponent } from './input-validations/input-validations.component';
import { ModalConfirmDeleteComponent } from './modal-confirm-delete/modal-confirm-delete.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';

const modules = [PaginationModule, CommonModule, MomentModule, TranslateModule, ReactiveFormsModule, FormsModule, ModalModule];
@NgModule({
  declarations: [InputValidationsComponent, SplashScreenComponent, ModalConfirmDeleteComponent],

  imports: [...modules, BsDatepickerModule.forRoot(), BsDropdownModule.forRoot()],
  exports: [...modules, InputValidationsComponent, SplashScreenComponent, ModalConfirmDeleteComponent],
  providers: [BsLocaleService, BsModalService],
})
export class ComponentsModule {}
