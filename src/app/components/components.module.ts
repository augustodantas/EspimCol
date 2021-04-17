import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { MomentModule } from 'ngx-moment';

import { ListHeaderComponent } from '../private/components/list-header/list-header.component';
import { SearchComponent } from '../private/search/search.component';
import { InputValidationsComponent } from './input-validations/input-validations.component';
import { ModalConfirmDeleteComponent } from './modal-confirm-delete/modal-confirm-delete.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';

const modules = [PaginationModule, CommonModule, MomentModule, TranslateModule, ReactiveFormsModule, FormsModule, ModalModule];
const components = [InputValidationsComponent, SplashScreenComponent, ModalConfirmDeleteComponent, ListHeaderComponent, SearchComponent];

@NgModule({
  declarations: [...components],
  imports: [...modules, BsDatepickerModule.forRoot(), TimepickerModule.forRoot(), BsDropdownModule.forRoot()],
  exports: [...modules, ...components, BsDatepickerModule, TimepickerModule],
  providers: [BsLocaleService, BsModalService],
})
export class ComponentsModule {}
