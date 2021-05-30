import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExternalApplicationAddComponent } from './add/add.component';
import { ExternalApplicationListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ExternalApplicationListComponent,
  },
  { path: 'add', component: ExternalApplicationAddComponent },
  { path: 'edit/:id', component: ExternalApplicationAddComponent },
  { path: '**', redirectTo: '/private', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticipantsRoutingModule {}
