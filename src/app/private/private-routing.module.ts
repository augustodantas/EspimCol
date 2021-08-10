import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoggedInGuard } from '../security/loggedin.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    canActivate: [LoggedInGuard],
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'participants',
        loadChildren: () => import('./participants/participants.module').then((m) => m.ParticipantModule),
      },
      {
        path: 'programs',
        loadChildren: () => import('./programs/programs.module').then((m) => m.ProgramsModule),
      },
      {
        path: 'external-applications',
        loadChildren: () => import('./external-applications/external-applications.module').then((m) => m.ExternalApplicationsModule),
      },
      {
        path: 'levels',
        loadChildren: () => import('./levels/levels.module').then((m) => m.LevelsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
