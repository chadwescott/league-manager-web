import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[lmCardPanelContent]'
})
export class CardPanelContentDirective {

  constructor(elr: ElementRef) {
    elr.nativeElement.classList.add('card-panel-content');
  }

}
