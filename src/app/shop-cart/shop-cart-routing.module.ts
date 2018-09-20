import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopCartListComponent } from './shop-cart-list/shop-cart-list.component';
import { ShopCartListEditComponent } from './shop-cart-list/shop-cart-list-edit/shop-cart-list-edit.component';

const routes: Routes = [
  { path: 'shoppingcart', component: ShopCartListComponent },
  { path: 'shoppingcart/edit', component: ShopCartListEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopCardRoutingModule { }
