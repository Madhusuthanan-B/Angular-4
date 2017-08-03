import { NgModule } from '@angular/core';
import { FooterModule } from '../../footer/index';
import { AboutComponent } from './about.component';

@NgModule({
    declarations: [
        AboutComponent
    ],
    imports: [FooterModule],
    exports: [AboutComponent]

})
export class AboutModule { }
