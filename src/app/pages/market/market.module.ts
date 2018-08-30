import { NgModule } from '@angular/core';
import {MarketRoutingModule} from './market-routing.module';
import {MarketComponent} from './market.component';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../common-component/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    MarketRoutingModule
  ],
  declarations: [
    MarketComponent
  ]
})
export class MarketModule { }
