import { NgModule } from '@angular/core';
import { CheckboxListDemoComponent } from './checkbox-list-demo.component';
import { CheckBoxListModule } from '../../modules/index';

@NgModule({
    declarations: [CheckboxListDemoComponent],
    imports: [CheckBoxListModule],
    exports: [CheckboxListDemoComponent]

})
export class CheckboxListDemoModule { }
