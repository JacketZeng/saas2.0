import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AmountComponent } from './amount/amount.component';
import { RateComponent } from './rate/rate.component';
import { SummaryComponent } from './summary/summary.component';
import { StatisticRoutingModule } from './statistic-routing.module';
import { StatisticComponent } from './statistic.component';

import { HeaderModule } from '../common-component/header/header.module';
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    HeaderModule,
    StatisticRoutingModule,
  ],
  declarations: [
    StatisticComponent,
    AmountComponent,
    RateComponent,
    SummaryComponent
  ]
})
export class StatisticModule { }
