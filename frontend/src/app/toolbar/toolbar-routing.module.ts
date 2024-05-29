import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolbarPage } from './toolbar.page';

const routes: Routes = [
  {
    path: '',
    component: ToolbarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolbarPageRoutingModule {}
