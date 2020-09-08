import * as tslib_1 from "tslib";
import { Directive, ElementRef } from '@angular/core';
let CardPanelBodyDirective = class CardPanelBodyDirective {
    constructor(el) {
        el.nativeElement.classList.add('card-panel-body');
    }
};
CardPanelBodyDirective = tslib_1.__decorate([
    Directive({
        selector: '[lmCardPanelBody]'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], CardPanelBodyDirective);
export { CardPanelBodyDirective };
//# sourceMappingURL=card-panel-body.directive.js.map