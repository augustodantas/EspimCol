import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from 'src/app/components/components.module';

import { ListHeaderComponent } from '../components/list-header/list-header.component';
import { SearchComponent } from '../search/search.component';
import { SharedModule } from './../../app.shared.module';
import { ParticipanstAddComponent } from './add/participantsadd.component';
import { ParticipantsListComponent } from './list/participantslist.component';
import { ParticipantsRoutingModule } from './participants-routing.module';

// imports from dependencies

@NgModule({
  imports: [ComponentsModule, ParticipantsRoutingModule, ReactiveFormsModule, FormsModule, CommonModule, NgbModule, TranslateModule],
  exports: [SearchComponent, SharedModule, ListHeaderComponent],
  declarations: [ParticipanstAddComponent, ParticipantsListComponent, SearchComponent, ListHeaderComponent],
  providers: [],
})
export class ParticipantModule {}
