import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroceryItemDetailPage } from './grocery-item-detail.page';

const routes: Routes = [
  {
    path: '',
    component: GroceryItemDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroceryItemDetailPageRoutingModule {}
