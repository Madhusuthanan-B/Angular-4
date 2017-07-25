import { NgModule } from '@angular/core';
import { FocusSetterComponent } from './focus-setter.component';
import { SetFocusToDirective } from './focus-setter.directive';

@NgModule({
    declarations: [
        FocusSetterComponent, SetFocusToDirective
    ],
    exports: [FocusSetterComponent, SetFocusToDirective]

})
export class FocusSetterModule { }
