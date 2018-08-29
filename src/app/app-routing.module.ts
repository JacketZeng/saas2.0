import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: './pages/user/user.module#UserModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'statistic',
    loadChildren: './pages/statistic/statistic.module#StatisticModule',
    canLoad: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'statistic',
    pathMatch: 'full'
  }, {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*, { enableTracing: true, useHash: true }*/)],
  exports: [RouterModule],
  providers: [AuthGuard, AuthService]
})
export class AppRoutingModule { }
