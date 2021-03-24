import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { PaginationComponent } from '../pagination/pagination.component';
import { SearchComponent } from '../search/search.component';
import { SharedModule } from './../../app.shared.module';
import { ParticipanstAddComponent } from './add/participantsadd.component';
import { ParticipantsListComponent } from './list/participantslist.component';
import { ParticipantsRoutingModule } from './participants-routing.module';

// imports from dependencies

@NgModule({
  declarations: [ParticipantsListComponent, ParticipanstAddComponent, SearchComponent, PaginationComponent],
  imports: [ParticipantsRoutingModule, ReactiveFormsModule, FormsModule, CommonModule, NgbModule, TranslateModule, SweetAlert2Module],
  exports: [SearchComponent, PaginationComponent, SharedModule],
  providers: [],
})
export class ParticipantModule {}
