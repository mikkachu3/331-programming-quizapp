import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HtmlresultPage } from './htmlresult.page';

const routes: Routes = [
  {
    path: '',
    component: HtmlresultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HtmlresultPageRoutingModule {}
