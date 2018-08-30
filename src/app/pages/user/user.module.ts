import { NgModule } from '@angular/core';
import { UserRoutingModule } from './/user-routing.module';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DownloadComponent } from './download/download.component';
import { MonthbillComponent } from './monthbill/monthbill.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { HeaderModule } from '../common-component/header/header.module';
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    UserRoutingModule,
    HeaderModule
  ],
  declarations: [
    UserComponent,
    DashboardComponent,
    DownloadComponent,
    MonthbillComponent,
  ]
})
export class UserModule { }
