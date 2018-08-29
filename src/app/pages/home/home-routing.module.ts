import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../services/auth-guard.service';
import { AuthService } from '../../services/auth.service';

import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: 'app/pages/home/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard, AuthService]
})
export class HomeRoutingModule { }

