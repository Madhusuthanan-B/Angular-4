import { NgModule } from '@angular/core';
import { FocusSetterModule } from '../../modules/index';
import { FooterModule } from '../../footer/index';
import { FocusDemoComponent } from './focus-demo.component';

@NgModule({
    declarations: [FocusDemoComponent],
    imports: [FocusSetterModule, FooterModule],
    exports: [FocusDemoComponent]

})
export class FocusDemoModule { }
