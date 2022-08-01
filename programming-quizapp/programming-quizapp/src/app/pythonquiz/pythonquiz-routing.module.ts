import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PythonquizPage } from './pythonquiz.page';

const routes: Routes = [
  {
    path: '',
    component: PythonquizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PythonquizPageRoutingModule {}
