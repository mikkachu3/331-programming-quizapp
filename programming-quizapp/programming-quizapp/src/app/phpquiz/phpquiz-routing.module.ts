import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhpquizPage } from './phpquiz.page';

const routes: Routes = [
  {
    path: '',
    component: PhpquizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhpquizPageRoutingModule {}
