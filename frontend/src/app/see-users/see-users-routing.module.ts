import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeeUsersPage } from './see-users.page';

const routes: Routes = [
  {
    path: '',
    component: SeeUsersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeeUsersPageRoutingModule {}
