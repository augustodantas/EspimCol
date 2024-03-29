import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TimepickerConfig, TimepickerModule } from 'ngx-bootstrap/timepicker';
import { MomentModule } from 'ngx-moment';

import { ListHeaderComponent } from '../private/components/list-header/list-header.component';
import { SearchComponent } from '../private/search/search.component';
import { InputValidationsComponent } from './input-validations/input-validations.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';

const modules = [PaginationModule, CommonModule, MomentModule, TranslateModule, ReactiveFormsModule, FormsModule, ModalModule];
const components = [InputValidationsComponent, SplashScreenComponent, ListHeaderComponent, SearchComponent];

export function getTimepickerConfig(): TimepickerConfig {
  return Object.assign(new TimepickerConfig(), {
    hourStep: 2,
    minuteStep: 10,
    showMeridian: false,
    readonlyInput: false,
    mousewheel: true,
    showMinutes: true,
    showSeconds: false,
    labelHours: 'Hours',
    labelMinutes: 'Minutes',
    labelSeconds: 'Seconds',
  });
}

@NgModule({
  declarations: [...components],
  imports: [...modules, BsDatepickerModule.forRoot(), TimepickerModule.forRoot(), BsDropdownModule.forRoot(), CollapseModule],
  exports: [...modules, ...components, BsDatepickerModule, TimepickerModule, CollapseModule],
  providers: [BsLocaleService, BsModalService, { provide: TimepickerConfig, useFactory: getTimepickerConfig }],
})
export class ComponentsModule {}
