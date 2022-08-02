import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JavaresultPageRoutingModule } from './javaresult-routing.module';

import { JavaresultPage } from './javaresult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JavaresultPageRoutingModule
  ],
  declarations: [JavaresultPage]
})
export class JavaresultPageModule {}
