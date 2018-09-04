import { NgModule } from '@angular/core';
import { MarketRoutingModule } from './market-routing.module';
import { MarketComponent } from './market.component';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../common-component/header/header.module';
import { HighlightDirective } from '../../directive/highlight.directive';
import { UnlessDirective } from '../../directive/unless.directive';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    MarketRoutingModule
  ],
  declarations: [
    MarketComponent,
    HighlightDirective,
    UnlessDirective
  ]
})
export class MarketModule { }
