import * as tslib_1 from "tslib";
import { Directive, ElementRef } from '@angular/core';
let CardPanelContentDirective = class CardPanelContentDirective {
    constructor(el) {
        el.nativeElement.classList.add('card-panel-content');
    }
};
CardPanelContentDirective = tslib_1.__decorate([
    Directive({
        selector: '[lmCardPanelContent]'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], CardPanelContentDirective);
export { CardPanelContentDirective };
//# sourceMappingURL=card-panel-content.directive.js.map