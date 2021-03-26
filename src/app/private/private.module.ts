import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';

// local imports
@NgModule({
  imports: [PrivateRoutingModule, CommonModule, TranslateModule.forChild({ extend: true })],
  declarations: [PrivateComponent, HeaderComponent, DashboardComponent],
})
export class PrivateModule {}
