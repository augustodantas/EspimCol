import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { SearchService } from './search/search.service';

// local imports
@NgModule({
  imports: [CommonModule, TranslateModule.forChild({ extend: true }), PrivateRoutingModule],
  declarations: [PrivateComponent, HeaderComponent, DashboardComponent],
  exports: [],
  providers: [SearchService],
})
export class PrivateModule {}
