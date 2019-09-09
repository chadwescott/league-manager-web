import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[lmNumericInput]'
})
export class NumericInputDirective {
  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this._el.nativeElement.value;
    const noNumberValue = initalValue.replace(/[^0-9-.]*/g, '');

    if (initalValue !== noNumberValue) {
      this._el.nativeElement.value = noNumberValue;
      event.stopPropagation();
    }
  }
}
