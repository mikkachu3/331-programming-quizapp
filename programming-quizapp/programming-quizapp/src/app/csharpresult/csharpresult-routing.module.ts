import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsharpresultPage } from './csharpresult.page';

const routes: Routes = [
  {
    path: '',
    component: CsharpresultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsharpresultPageRoutingModule {}
