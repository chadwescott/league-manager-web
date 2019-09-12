import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[lmPadded]'
})
export class PaddedDirective {

  constructor(el: ElementRef) {
    el.nativeElement.classList.add('padded');
  }

}
