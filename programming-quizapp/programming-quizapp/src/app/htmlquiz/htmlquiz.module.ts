import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HtmlquizPageRoutingModule } from './htmlquiz-routing.module';

import { HtmlquizPage } from './htmlquiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HtmlquizPageRoutingModule
  ],
  declarations: [HtmlquizPage]
})
export class HtmlquizPageModule {}
