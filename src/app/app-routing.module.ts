import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './index/home/home.component';
import { IndexComponent } from './index/index.component';
import { LoggedInGuard } from './security/loggedin.guard';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [{ path: '', component: HomeComponent }],
  },
  {
    path: 'private',
    loadChildren: () => import('./private/private.module').then((m) => m.PrivateModule),
    canLoad: [LoggedInGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
