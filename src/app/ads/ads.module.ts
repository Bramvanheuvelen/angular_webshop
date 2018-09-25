import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdDetailComponent } from './ad-detail/ad-detail.component';
import { AdEditComponent } from './ad-edit/ad-edit.component';
import { AdListComponent } from './ad-list/ad-list.component';
import { AdItemComponent } from './ad-list/ad-item/ad-item.component';
import { AdsRoutingModule } from './ads-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdStartComponent } from './ad-start/ad-start.component';

@NgModule({
  imports: [
    CommonModule,
    AdsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdDetailComponent,
    AdEditComponent,
    AdListComponent,
    AdItemComponent,
    AdStartComponent,
  ]
})
export class AdsModule { }
