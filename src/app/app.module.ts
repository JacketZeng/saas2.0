import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './pages/login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import G2Module from './g2/g2.module';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    LoginModule,
    AppRoutingModule,
    G2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('app init...');
  }
}
