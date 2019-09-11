import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[lmCardPanelTitle]'
})
export class CardPanelTitleDirective {

  constructor(elr: ElementRef) {
    elr.nativeElement.classList.add('card-panel-title');
  }

}
