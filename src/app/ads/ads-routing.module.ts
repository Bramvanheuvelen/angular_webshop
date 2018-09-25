import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdEditComponent } from './ad-edit/ad-edit.component';
import { AdDetailComponent } from './ad-detail/ad-detail.component';
import { AdListComponent } from './ad-list/ad-list.component';
import { AdItemComponent } from './ad-list/ad-item/ad-item.component';
import { AdStartComponent } from './ad-start/ad-start.component';

const routes: Routes = [
  { path: '', component: AdStartComponent },
  { path: 'ads/list', component: AdListComponent },
  { path: 'ads/list/item', component: AdItemComponent },
  { path: 'ads/edit', component: AdEditComponent },
  { path: 'ads/list/new', component: AdEditComponent },
  { path: 'ads/list/:id', component: AdDetailComponent },
  { path: 'ads/list/:id/edit', component: AdEditComponent },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdsRoutingModule { }
