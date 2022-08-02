import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HtmlresultPageRoutingModule } from './htmlresult-routing.module';

import { HtmlresultPage } from './htmlresult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HtmlresultPageRoutingModule
  ],
  declarations: [HtmlresultPage]
})
export class HtmlresultPageModule {}
