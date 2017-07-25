import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NavBarModule } from './navbar/index';
import { HomeModule } from './home/index';
import { AboutModule } from './about/index';

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
    AboutModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
