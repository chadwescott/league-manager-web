import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[lmCardPanel]'
})
export class CardPanelDirective {

  constructor(el: ElementRef) {
    el.nativeElement.classList.add('card-panel');
  }

}
