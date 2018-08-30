import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../services/auth-guard.service';
import { SummaryComponent } from './summary/summary.component';
import { RateComponent } from './rate/rate.component';
import { AmountComponent } from './amount/amount.component';
import { StatisticComponent } from './statistic.component';
const statisticRoutes: Routes = [
  {
    path: '',
    component: StatisticComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
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
    RouterModule.forChild(statisticRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
})
export class StatisticRoutingModule { }
