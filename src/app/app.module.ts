import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NavBarModule } from './navbar/index';
import { HomeModule, AboutModule, FocusDemoModule, GraphsDemoModule } from './pages/index';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    NavBarModule,
    HomeModule,
    AboutModule,
    FocusDemoModule,
    GraphsDemoModule
  ],
  providers: [appRoutingProviders, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
