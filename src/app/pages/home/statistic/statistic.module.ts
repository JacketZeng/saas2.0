import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticComponent } from './statistic.component';
import { SummaryComponent } from './summary/summary.component';
import { RateComponent } from './rate/rate.component';
import { AmountComponent } from './amount/amount.component';
import { StatisticRoutingModule } from './statistic-routing.module';


@NgModule({
  imports: [
    CommonModule,
    StatisticRoutingModule
  ],
  declarations: [
    StatisticComponent,
    SummaryComponent,
    RateComponent,
    AmountComponent
  ]
})
export class  StatisticModule { }
