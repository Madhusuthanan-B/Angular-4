import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxListDemoComponent } from './checkbox-list-demo.component';
import { CheckBoxListModule } from '../../modules/index';

@NgModule({
    declarations: [CheckboxListDemoComponent],
    imports: [CommonModule, FormsModule, CheckBoxListModule],
    exports: [CheckboxListDemoComponent]

})
export class CheckboxListDemoModule { }
