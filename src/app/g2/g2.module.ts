// import 'zone.js';
// import 'reflect-metadata';
import {NgModule } from '@angular/core';
import { ViserModule } from 'viser-ng';
import { G2Component } from './g2.component';

@NgModule({
    declarations: [
        G2Component
    ],
    imports: [
        // BrowserModule,
        ViserModule
    ],
    providers: []
})
export default class G2Module { }