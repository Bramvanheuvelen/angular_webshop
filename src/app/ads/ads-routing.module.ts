import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdEditComponent } from './ad-edit/ad-edit.component';
import { AdDetailComponent } from './ad-detail/ad-detail.component';
import { AdListComponent } from './ad-list/ad-list.component';
import { AdItemComponent } from './ad-list/ad-item/ad-item.component';

const routes: Routes = [
  { path: 'ads/list', component: AdListComponent },
  { path: 'ads/edit', component: AdEditComponent },
  { path: 'ads/detail', component: AdDetailComponent },
  { path: 'ads/list/item', component: AdItemComponent },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdsRoutingModule { }
