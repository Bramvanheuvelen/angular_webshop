import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdsModule } from './ads/ads.module';
import { ShopCartModule } from './shop-cart/shop-cart.module';
import { DropdownDirective } from './header/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdsModule,
    ShopCartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
