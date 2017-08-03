import { NgModule } from '@angular/core';
import { FooterModule } from '../../footer/index';
import { GraphsDemoComponent } from './graphs-demo.component';

@NgModule({
    declarations: [
        GraphsDemoComponent
    ],
    imports: [FooterModule],
    exports: [GraphsDemoComponent]

})
export class GraphsDemoModule { }
