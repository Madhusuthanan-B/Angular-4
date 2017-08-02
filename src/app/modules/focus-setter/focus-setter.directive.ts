import { Directive, ElementRef, Input, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Directive({ selector: '[set-focus-to]' })
export class SetFocusToDirective {
    @Input() targetElement: string;
    document: Document;
    element: HTMLElement;

    constructor( @Inject(DOCUMENT) document) {
        this.document = document;
    }

    @HostListener('click', ['$event'])
    onClick() {
        this.element = this.document.getElementById(this.targetElement);
        if (!!this.element) {
            this.setFocus();
        } else {
            console.log(`The target id not found: ${this.targetElement}`);
        }
    }

    setFocus() {
        this.element.focus();
    }
}
