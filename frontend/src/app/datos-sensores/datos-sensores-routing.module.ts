import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosSensoresPage } from './datos-sensores.page';

const routes: Routes = [
  {
    path: '',
    component: DatosSensoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosSensoresPageRoutingModule {}
