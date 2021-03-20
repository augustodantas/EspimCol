import { Directive, HostListener, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[focusInvalidInput]'
})
export class FormDirective {
  constructor(private el: ElementRef) {
    console.log(el)
  }

  @HostListener('submit')
  onFormSubmit() {
    const invalidControl = this.el.nativeElement.querySelector('.ng-invalid');
    console.log('teste submit')
    if (invalidControl) {
      invalidControl.focus();
    }
  }
}