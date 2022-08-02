import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PythonresultPageRoutingModule } from './pythonresult-routing.module';

import { PythonresultPage } from './pythonresult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PythonresultPageRoutingModule
  ],
  declarations: [PythonresultPage]
})
export class PythonresultPageModule {}
