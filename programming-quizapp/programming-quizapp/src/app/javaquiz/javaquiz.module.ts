import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JavaquizPageRoutingModule } from './javaquiz-routing.module';

import { JavaquizPage } from './javaquiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JavaquizPageRoutingModule
  ],
  declarations: [JavaquizPage]
})
export class JavaquizPageModule {}
