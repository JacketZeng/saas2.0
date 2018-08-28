import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {  StatisticComponent } from './statistic.component';

import { HomeComponent } from '../home.component';
import { RateComponent } from './rate/rate.component';
import { AmountComponent } from './amount/amount.component';
import { SummaryComponent } from './summary/summary.component';
const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'statistic',
        component : StatisticComponent,
        children: [
          { path: 'summary', component: SummaryComponent },
          { path: 'rate', component: RateComponent },
          { path: 'amount', component: AmountComponent },
          { path: '', component: SummaryComponent }
        ]
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class StatisticRoutingModule { }