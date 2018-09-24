import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdsModule } from './ads/ads.module';
import { ShopCartModule } from './shop-cart/shop-cart.module';
import { HttpModule } from '@angular/http';
import { DropdownDirective } from './shared/dropdown.directive';
import { FormsModule } from '@angular/forms';
import { WeatherService } from './weather.service';

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
    ShopCartModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
