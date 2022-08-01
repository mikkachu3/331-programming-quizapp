import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhpquizPageRoutingModule } from './phpquiz-routing.module';

import { PhpquizPage } from './phpquiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhpquizPageRoutingModule
  ],
  declarations: [PhpquizPage]
})
export class PhpquizPageModule {}
