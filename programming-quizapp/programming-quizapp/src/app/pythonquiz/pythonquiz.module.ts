import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PythonquizPageRoutingModule } from './pythonquiz-routing.module';

import { PythonquizPage } from './pythonquiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PythonquizPageRoutingModule
  ],
  declarations: [PythonquizPage]
})
export class PythonquizPageModule {}
