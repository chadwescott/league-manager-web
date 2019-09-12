import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[lmCardPanelTitle]'
})
export class CardPanelTitleDirective {

  constructor(el: ElementRef) {
    el.nativeElement.classList.add('card-panel-title');
  }

}
