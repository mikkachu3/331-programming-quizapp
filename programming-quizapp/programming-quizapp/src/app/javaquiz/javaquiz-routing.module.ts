import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JavaquizPage } from './javaquiz.page';

const routes: Routes = [
  {
    path: '',
    component: JavaquizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JavaquizPageRoutingModule {}
