import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CplusresultPage } from './cplusresult.page';

const routes: Routes = [
  {
    path: '',
    component: CplusresultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CplusresultPageRoutingModule {}
