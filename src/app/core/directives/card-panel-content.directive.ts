import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[lmCardPanelContent]'
})
export class CardPanelContentDirective {

  constructor(el: ElementRef) {
    el.nativeElement.classList.add('card-panel-content');
  }

}
