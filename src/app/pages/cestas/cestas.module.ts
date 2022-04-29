import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CestasPageRoutingModule } from './cestas-routing.module';

import { CestasPage } from './cestas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CestasPageRoutingModule
  ],
  declarations: [CestasPage]
})
export class CestasPageModule {}
