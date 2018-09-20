import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdAddComponent } from './ad-add/ad-add.component';
import { AdEditComponent } from './ad-edit/ad-edit.component';
import { AdDetailComponent } from './ad-detail/ad-detail.component';
import { AdListComponent } from './ad-list/ad-list.component';

const routes: Routes = [
  { path: 'ads/add', component: AdAddComponent },
  { path: 'ads/edit', component: AdEditComponent },
  { path: 'ads/detail', component: AdDetailComponent },
  { path: 'ads/list', component: AdListComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdsRoutingModule { }
