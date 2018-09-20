import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { G2Component } from './g2/g2.component';

const routes: Routes = [
    {
        path: 'g2',
        component: G2Component
    },
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
        path: 'market',
        loadChildren: './pages/market/market.module#MarketModule',
        canLoad: [AuthGuard]
    },
    {
        path: '',
        redirectTo: 'g2',
        pathMatch: 'full'
    }, {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes/*, { enableTracing: true }*/)],
    exports: [RouterModule],
    providers: [AuthGuard, AuthService]
})
export class AppRoutingModule { }
