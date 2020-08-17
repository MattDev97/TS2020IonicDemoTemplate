import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroceryItemDetailPageRoutingModule } from './grocery-item-detail-routing.module';

import { GroceryItemDetailPage } from './grocery-item-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroceryItemDetailPageRoutingModule
  ],
  declarations: [GroceryItemDetailPage]
})
export class GroceryItemDetailPageModule {}
