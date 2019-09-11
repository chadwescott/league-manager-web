import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[lmCardPanel]'
})
export class CardPanelDirective {

  constructor(elr: ElementRef) {
    elr.nativeElement.classList.add('card-panel');
  }

}
