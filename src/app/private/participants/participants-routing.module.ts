import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParticipantsListComponent } from './list/participantslist.component';

const routes: Routes = [
  {
    path: 'list',
    component: ParticipantsListComponent,
  },
  // { path: 'add', component: ParticipanstAddComponent },
  // { path: 'add/:id', component: ParticipanstAddComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticipantsRoutingModule {}
