import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[focusInput]',
})
export class FocusInput {
  constructor(private el: ElementRef) {
    if (!el.nativeElement['focus']) {
      throw new Error('Element does not accept focus.');
    }
  }

  ngOnInit(): void {
    const input: HTMLInputElement = this.el.nativeElement as HTMLInputElement;
    input.focus();
    input.select();
  }
}
