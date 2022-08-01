import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CplusquizPage } from './cplusquiz.page';

const routes: Routes = [
  {
    path: '',
    component: CplusquizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CplusquizPageRoutingModule {}
