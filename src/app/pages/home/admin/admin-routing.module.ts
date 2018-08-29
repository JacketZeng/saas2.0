import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AuthGuard } from '../../../services/auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DownloadComponent } from './download/download.component';
import { MonthbillComponent } from './monthbill/monthbill.component';
const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
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
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class AdminRoutingModule { }