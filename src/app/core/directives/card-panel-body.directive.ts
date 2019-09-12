import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[lmCardPanelBody]'
})
export class CardPanelBodyDirective {

  constructor(el: ElementRef) {
    el.nativeElement.classList.add('card-panel-body');
  }

}
