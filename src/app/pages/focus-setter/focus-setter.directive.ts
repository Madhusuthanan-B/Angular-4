import { Directive, ElementRef, Input, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[set-focus-to]' })
export class SetFocusToDirective {
    @Input() targetElement: string;
    private document: Document;

    constructor( @Inject(DOCUMENT) document) {
        this.document = document;
    }

    @HostListener('click', ['$event'])
    onClick() {
        this.document.getElementById(this.targetElement).focus();
    }
}
