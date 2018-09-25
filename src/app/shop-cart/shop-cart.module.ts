import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopCartListComponent } from './shop-cart-list/shop-cart-list.component';
import { ShopCartListEditComponent } from './shop-cart-list/shop-cart-list-edit/shop-cart-list-edit.component';
import { ShopCardRoutingModule } from './shop-cart-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ShopCardRoutingModule,
  ],
  declarations: [
    ShopCartListComponent,
    ShopCartListEditComponent
  ]
})
export class ShopCartModule { }
