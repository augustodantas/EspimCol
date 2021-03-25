import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { ListHeaderComponent } from '../components/list-header/list-header.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { SearchComponent } from '../search/search.component';
import { SharedModule } from './../../app.shared.module';
import { ParticipantsListComponent } from './list/participantslist.component';
import { ParticipantsRoutingModule } from './participants-routing.module';

// imports from dependencies

@NgModule({
  declarations: [ParticipantsListComponent, SearchComponent, PaginationComponent, ListHeaderComponent],
  imports: [ParticipantsRoutingModule, ReactiveFormsModule, FormsModule, CommonModule, NgbModule, TranslateModule],
  exports: [SearchComponent, PaginationComponent, SharedModule, ListHeaderComponent],
  providers: [],
})
export class ParticipantModule {}
