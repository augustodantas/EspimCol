import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';

import { ListHeaderComponent } from '../components/list-header/list-header.component';
import { SearchComponent } from '../search/search.component';
import { SharedModule } from './../../app.shared.module';
import { ParticipanstAddComponent } from './add/participantsadd.component';
import { ParticipantsListComponent } from './list/participantslist.component';
import { ParticipantsRoutingModule } from './participants-routing.module';

// imports from dependencies

@NgModule({
  imports: [ComponentsModule, ParticipantsRoutingModule, CommonModule],
  exports: [SearchComponent, SharedModule, ListHeaderComponent],
  declarations: [ParticipanstAddComponent, ParticipantsListComponent, SearchComponent, ListHeaderComponent],
})
export class ParticipantModule {}
