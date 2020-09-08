import * as tslib_1 from "tslib";
import { Directive, ElementRef } from '@angular/core';
let CardPanelTitleDirective = class CardPanelTitleDirective {
    constructor(el) {
        el.nativeElement.classList.add('card-panel-title');
    }
};
CardPanelTitleDirective = tslib_1.__decorate([
    Directive({
        selector: '[lmCardPanelTitle]'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], CardPanelTitleDirective);
export { CardPanelTitleDirective };
//# sourceMappingURL=card-panel-title.directive.js.map