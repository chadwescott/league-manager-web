import * as tslib_1 from "tslib";
import { Directive, ElementRef } from '@angular/core';
let CardPanelDirective = class CardPanelDirective {
    constructor(el) {
        el.nativeElement.classList.add('card-panel');
    }
};
CardPanelDirective = tslib_1.__decorate([
    Directive({
        selector: '[lmCardPanel]'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], CardPanelDirective);
export { CardPanelDirective };
//# sourceMappingURL=card-panel.directive.js.map