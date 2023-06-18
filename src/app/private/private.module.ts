import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { SharedModule } from '../app.shared.module';
import { ChannelService } from './channel_socket/socket.service';
import { ModalMidiaComponent } from './components/modal-midia/modal-midia.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';

// local imports
@NgModule({
  imports: [PrivateRoutingModule, CommonModule, SharedModule, TranslateModule.forChild({ extend: true }), TabsModule.forRoot()],
  declarations: [PrivateComponent, HeaderComponent, DashboardComponent, ModalMidiaComponent],
  providers: [ChannelService]
})
export class PrivateModule {}
