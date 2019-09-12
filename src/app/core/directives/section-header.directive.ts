import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[lmSectionHeader]'
})
export class SectionHeaderDirective {

  constructor(el: ElementRef) {
    el.nativeElement.classList.add('section-header');
  }

}
