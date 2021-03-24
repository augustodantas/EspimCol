import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      { path: '', component: DashboardComponent },
      // {
      //   path: 'programs',
      //   loadChildren: () => import('./programs/programs.module').then((m) => m.ProgramModule),
      // },
      {
        path: 'participants',
        loadChildren: () => import('./participants/participants.module').then((m) => m.ParticipantModule),
      },
      // { path: 'observers/add', component: ObserversComponent },
      // { path: 'results/list', component: ResultsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
