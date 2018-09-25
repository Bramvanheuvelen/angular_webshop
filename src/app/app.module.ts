import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdsModule } from './ads/ads.module';
import { ShopCartModule } from './shop-cart/shop-cart.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { WeatherService } from './weather/weather.service';
import { WeatherComponent } from './weather/weather.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdsModule,
    ShopCartModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
