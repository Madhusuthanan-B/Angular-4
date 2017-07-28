import { NgModule } from '@angular/core';
import { ModalModule } from '../../modules/index';
import { ModalDemoComponent } from './modal-demo.component';

@NgModule({
    declarations: [ModalDemoComponent],
    imports: [ModalModule],
    exports: [ModalDemoComponent]

})
export class ModalDemoModule { }
