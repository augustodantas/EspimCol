import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[focusInvalidInput]',
})
export class FocusInvalidInputDirective {
  constructor(private el: ElementRef) {}

  @HostListener('submit')
  onFormSubmit() {
    const invalidControl = this.el.nativeElement.querySelector('input.ng-invalid');
    if (invalidControl) {
      invalidControl.focus();
    }
  }
}
