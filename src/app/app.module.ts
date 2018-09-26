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
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdsModule,
    ShopCartModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    AuthModule,
    NgbModule
  ],
  providers: [DataStorageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
