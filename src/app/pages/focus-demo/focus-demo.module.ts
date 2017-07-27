import { NgModule } from '@angular/core';
import { FocusSetterModule } from '../focus-setter/index';
import { FocusDemoComponent } from './focus-demo.component';

@NgModule({
    declarations: [FocusDemoComponent],
    imports: [FocusSetterModule],
    exports: [FocusDemoComponent]

})
export class FocusDemoModule { }
