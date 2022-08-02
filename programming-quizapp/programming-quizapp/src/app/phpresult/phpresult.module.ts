import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhpresultPageRoutingModule } from './phpresult-routing.module';

import { PhpresultPage } from './phpresult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhpresultPageRoutingModule
  ],
  declarations: [PhpresultPage]
})
export class PhpresultPageModule {}
