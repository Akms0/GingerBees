import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CestasPage } from './cestas.page';

const routes: Routes = [
  {
    path: '',
    component: CestasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CestasPageRoutingModule {}
