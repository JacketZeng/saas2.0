import { NgModule } from '@angular/core';
import { UserRoutingModule } from './/user-routing.module';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DownloadComponent } from './download/download.component';
import { MonthbillComponent } from './monthbill/monthbill.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    UserRoutingModule
  ],
  declarations: [
    UserComponent,
    DashboardComponent,
    DownloadComponent,
    MonthbillComponent
  ]
})
export class UserModule { }
