import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AmountComponent } from './amount/amount.component';
import { RateComponent } from './rate/rate.component';
import { SummaryComponent } from './summary/summary.component';
import { StatisticRoutingModule } from './statistic-routing.module';
import { StatisticComponent } from './statistic.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    StatisticRoutingModule
  ],
  declarations: [
    StatisticComponent,
    AmountComponent,
    RateComponent,
    SummaryComponent,
    HeaderComponent
  ]
})
export class StatisticModule { }
