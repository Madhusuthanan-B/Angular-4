import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NavBarModule } from './navbar/index';
import { HomeModule } from './home/index';
import { AboutModule } from './about/index';
import { FocusSetterModule } from './focus-setter/index';

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
    FocusSetterModule
  ],
  providers: [appRoutingProviders, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
