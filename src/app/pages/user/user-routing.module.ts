import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../../services/auth-guard.service';
import { DownloadComponent } from './download/download.component';
import { MonthbillComponent } from './monthbill/monthbill.component';
const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'download', component: DownloadComponent },
          { path: 'monthbill', component: MonthbillComponent },
          { path: '', component: DashboardComponent }
        ]
      }
    ]
  }

];
@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
})
export class UserRoutingModule { }
