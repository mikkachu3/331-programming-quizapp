import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PythonresultPage } from './pythonresult.page';

const routes: Routes = [
  {
    path: '',
    component: PythonresultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PythonresultPageRoutingModule {}
