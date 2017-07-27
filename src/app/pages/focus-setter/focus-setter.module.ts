import { NgModule } from '@angular/core';
import { SetFocusToDirective } from './focus-setter.directive';

@NgModule({
    declarations: [SetFocusToDirective],
    exports: [SetFocusToDirective]
})
export class FocusSetterModule { }
