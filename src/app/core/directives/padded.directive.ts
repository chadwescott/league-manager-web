import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[lmPadded]'
})
export class PaddedDirective {

  constructor(elr: ElementRef) {
    elr.nativeElement.classList.add('padded');
  }

}
