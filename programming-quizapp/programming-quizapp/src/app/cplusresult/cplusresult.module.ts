import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CplusresultPageRoutingModule } from './cplusresult-routing.module';

import { CplusresultPage } from './cplusresult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CplusresultPageRoutingModule
  ],
  declarations: [CplusresultPage]
})
export class CplusresultPageModule {}
