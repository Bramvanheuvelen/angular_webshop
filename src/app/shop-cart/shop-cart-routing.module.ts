import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopCartListComponent } from './shop-cart-list/shop-cart-list.component';

const routes: Routes = [
  { path: '/shopping-cart', component: ShopCartListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopCardRoutingModule { }
