import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[lmSectionHeader]'
})
export class SectionHeaderDirective {

  constructor(elr: ElementRef) {
    elr.nativeElement.classList.add('section-header');
  }

}
