import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavBarModule } from './navbar/index';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavBarModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
