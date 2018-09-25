import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdEditComponent } from './ads/ad-edit/ad-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/ads/list', pathMatch: 'full' },
  { path: 'ads/list/new', component: AdEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
