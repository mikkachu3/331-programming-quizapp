import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CsharpresultPageRoutingModule } from './csharpresult-routing.module';

import { CsharpresultPage } from './csharpresult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CsharpresultPageRoutingModule
  ],
  declarations: [CsharpresultPage]
})
export class CsharpresultPageModule {}
