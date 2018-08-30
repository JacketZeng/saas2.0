import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketComponent } from './market.component';
import { AuthGuard } from '../../services/auth-guard.service';
const marketRoutes: Routes = [
  {
    path: '',
    component: MarketComponent,
    canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(marketRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class MarketRoutingModule { }
