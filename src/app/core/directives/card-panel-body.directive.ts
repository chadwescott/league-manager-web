import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[lmCardPanelBody]'
})
export class CardPanelBodyDirective {

  constructor(elr: ElementRef) {
    elr.nativeElement.classList.add('card-panel-body');
  }

}
