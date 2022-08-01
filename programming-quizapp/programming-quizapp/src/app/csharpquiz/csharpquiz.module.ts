import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CsharpquizPageRoutingModule } from './csharpquiz-routing.module';

import { CsharpquizPage } from './csharpquiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CsharpquizPageRoutingModule
  ],
  declarations: [CsharpquizPage]
})
export class CsharpquizPageModule {}
