import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { } from 'jasmine';

import { SetFocusToDirective } from './focus-setter.directive';

let setFocusToDirective: SetFocusToDirective;
const fakeDocWhichHasElementWithProvidedID: any = {
    getElementById: () => {
        return {
            focus: {}
        };
    }
};

const fakeDocWhichDontHaveElementWithProvidedID: any = {
    getElementById: () => {
        return null;
    }
};

describe('Focus Setter: ', () => {

    describe('When an element with given id is found, then focus setter directive', () => {

        setFocusToDirective = new SetFocusToDirective(fakeDocWhichHasElementWithProvidedID);

        it('should call setFocus method to set the focus', () => {
            spyOn(console, 'log');
            setFocusToDirective.onClick();
            expect(console.log).toHaveBeenCalledWith('ID not found');
        });
    });

    describe('When an element with given id is not found, then focus setter directive', () => {

        setFocusToDirective = new SetFocusToDirective(fakeDocWhichDontHaveElementWithProvidedID);

        it('should not call setFocus method but log details in console to provide information on why focus is not set', () => {
            spyOn(setFocusToDirective, 'setFocus');
            setFocusToDirective.onClick();
            expect(setFocusToDirective.setFocus).not.toHaveBeenCalled();
        });
    });

});


