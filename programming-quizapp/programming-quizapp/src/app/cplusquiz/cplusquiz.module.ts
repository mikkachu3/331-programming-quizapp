import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CplusquizPageRoutingModule } from './cplusquiz-routing.module';

import { CplusquizPage } from './cplusquiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CplusquizPageRoutingModule
  ],
  declarations: [CplusquizPage]
})
export class CplusquizPageModule {}
