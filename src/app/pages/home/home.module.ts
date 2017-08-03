import { NgModule } from '@angular/core';
import { FooterModule } from '../../footer/index';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [FooterModule],
    exports: [HomeComponent]

})
export class HomeModule { }
