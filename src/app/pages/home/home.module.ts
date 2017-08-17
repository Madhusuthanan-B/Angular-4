import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from '../../footer/index';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [CommonModule, FooterModule],
    exports: [HomeComponent]

})
export class HomeModule { }
