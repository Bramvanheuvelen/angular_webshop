import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdDetailComponent } from './ad-detail/ad-detail.component';
import { AdEditComponent } from './ad-edit/ad-edit.component';
import { AdListComponent } from './ad-list/ad-list.component';
import { AdItemComponent } from './ad-list/ad-item/ad-item.component';
import { AdsRoutingModule } from './ads-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdsRoutingModule
  ],
  declarations: [
    AdDetailComponent,
    AdEditComponent,
    AdListComponent,
    AdItemComponent,
  ]
})
export class AdsModule { }
